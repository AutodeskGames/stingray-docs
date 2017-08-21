# Set up vector field (wind) effects

Physical effects like wind are modeled by *vector fields*: areas in the 3D world within which defined forces act on physical objects, blowing or pushing them in a certain direction.

You can set up vector fields in either of the following ways:

-   Entirely within the interactive editor, using a set of pre-written entity components and script modules. See [Setting up vector fields in the editor].

-   In your own custom Lua scripts. See [Setting up vector fields in Lua].

Once you have your vector fields set up and active in the game world, you can make them apply to the visible objects in your game. See [Applying vector fields to game objects].

## Setting up vector fields in the editor

To set up a vector field in the interactive editor:

1.  Create a new empty entity to represent the vector field effect. See ~{ Create a new entity asset }~. Select your new asset in the ~{ Asset Browser }~.

2.  Spawn your entity in a level. If you don't already have a particle effect ready so that you can see the effect of the vector field, you might also want to set one up and spawn it now.

3.  Add a Transform component to your entity. This will represent the placement, direction and extents of your vector field in the 3D world.

    Move the entity where you want your wind effect to be centered in the world, scale it up so that it encompasses the volume that you want your vector field to cover, and if needed control the wind direction by rotating the entity.

4.  Add one of the available vector field components to your entity, depending on the effect you want to achieve:

    -   Use **Global Direction** for a straight-line wind effect.
    -   Use **Global Sine** for a wind that blows from side-to-side, periodically switching directions.
    -   Use **Sphere Push/Pull** to make the effect expand outward from the entity's position or contract inward toward the entity's position.
    -   Use **Whirl** to make a vortex that spins around the entity's position.

    Configure the properties of the component to control the strength and speed of the effect.

    Note the **Effect** setting: you'll use this effect name as a way to refer to this effect whenever you want the vector field to affect something in the game, like a particle system.

5.  Add a Script component to your entity. Set its **Script** property to point to one of the following scripts in the *core* resources folder, which are pre-written to correspond to the effects listed above:

    -   *core/entities/vector_fields/global_direction/global_direction*
    -   *core/entities/vector_fields/global_sine/global_sine*
    -   *core/entities/vector_fields/sphere_push_pull/sphere_push_pull*
    -   *core/entities/vector_fields/sphere_whirl/sphere_whirl*

## Setting up vector fields in Lua

To use a vector field in Lua, you have to first define an effect in a *.vector_field* resource file. See [Defining vector field effects] below for more.

Each vector field effect is represented in Lua by a `stingray.VectorField` object. To get one of these objects, call `stingray.World.vector_field()` and pass it a name that you'll use to refer to the effect, like "wind".

You can add new effects to a vector field with `VectorField.add()`. In this call, you provide the name of the *.vector_field* resource that defines your effect, and you can also set up parameters for the effect. You can also use `VectorField.change()` and `VectorField.remove()` to change or remove an effect.

You can also use `VectorField.evaluate()` to evaluate a vector field at some positions, if you want the vector field to influence script behavior.

## Applying vector fields to game objects

Currently in {{ProductName}}, you can make your vector fields apply to particle effects or to dynamic physical actors.

### Applying vector fields to particle effects

For example, you might expect a rising column of smoke to drift off in the direction of the wind.

To make a vector field affect a particle effect:

1.  Add an **Acceleration > Vector Field Wind** controller to the particle effect.

2.  Set the **Vector Field** property of the controller to the name of the vector field effect.

    If you set up the vector field using entity components, this should match the **Effect** setting of the vector field component.

    If you set up the vector field in Lua, this should match the name you passed to `stingray.World.vector_field()`.

### Applying vector fields to physical actors

For example, you might want a strong wind to continuously blow lighter objects around the level, or you might trigger a large explosion that should blast objects out of a given area.

You need to use Lua to apply the wind forces, but you can still set up the wind effect using entities and components.

By default, wind forces do not wake physical objects; it would hurt performance if the wind could wake every object in the level. This means that even if you trigger a big explosion, it won't affect any dynamic actors that have already gone to sleep. To fix this, you can use `stingray.PhysicsWorld.wake_actors()` to wake any dynamic objects that should be affected by the wind or explosion, so that they are awake and can receive wind force from the vector field.

To make a vector field to affect physical objects, call the `stingray.PhysicsWorld.apply_wind()` function to apply wind forces from a vector field to physical objects. You pass this function the name of the vector field effect you want to apply. If you set up the vector field using entity components, this should match the **Effect** setting of the vector field component. If you set up the vector field in Lua, this should match the name you passed to `stingray.World.vector_field()`.

  > **Note:** You need to call `PhysicsWorld.apply_wind()` every frame to provide a continuous wind force.

## Defining vector field effects

Vector field effects are defined in `.vector_field` files. They are written in an HLSL-like language that computes the output wind from the input position.

A simple example:

```
const float4 value = float4(0,0,0,0);

struct vf_in
{
    float4 position : CHANNEL0;
    float4 wind : CHANNEL1;
};

struct vf_out
{
    float4 wind : CHANNEL1;
};

void global(in vf_in in, out vf_out out)
{
    out.wind = in.wind + value;
}
```

This effect returns a constant value for each point in space. By default, `value` is set to `(0,0,0,0)` which means no wind at all, but the script can overwrite any global variables defined in the effect when it is played. So the script could play this with:

```{.lua}
VectorField.add(vf, "global", {value = Vector3(2,0,0)})
```

This creates a wind of 2 m/s in the x-direction over the entire level.

Note the last line of the effect:

```
out.wind = in.wind + value;
```

This means that the effect adds its wind to whatever wind existed before the effect was applied. You should always have this as the last line of your effect code, because you want the effects to stack, i. e., if the user plays multiple wind effects, the effect she wants to see is the sum of all those individual wind effects.

The vector field language looks like HLSL, but it's actually parsed by a completely separate parser that is pretty strict with how things look. Global variables must be defined as in the example. There can only be a single function and it must take an `in` and an `out` parameter as in the example (but you can call the function whatever you want). Just because something works in HLSL doesn't mean it will necessarily work in this language.

The structure definitions of `vf_in` and `vf_out` define the input and output parameters of the vector field effect. They should look as in the example, but you can use other names for them if you like.

By default, vector field effects apply everywhere in the world. If you want to make a vector field effect that only applies to a limited region, you must explicitly write the effect so that it returns `(0,0,0,0)` for points outside that region.

Let's write an effect that works as the previous one, but is only applied in a particular sphere. (In the remaining examples we leave out the struct definitions, since they are the same in every effect.)

```
const float4 value = float4(0,0,0,0);
const float4 center = float4(0,0,0,0);
const float4 radius = float4(1,1,1,1);

void global_sphere(in vf_in in, out vf_out out)
{
	float4 r = in.position - center;
	float4 distance = dot(radius, radius) - dot(r,r);
	float4 wind = select_gt_0(distance, value);
	out.wind = in.wind + wind;
}
```

Here we compute a `distance` that is greater than zero if the item is inside the sphere, and less than zero if the item is outside the sphere. Then we use the `select_gt_0()` function to set `wind` to `value` if `distance > 0`, otherwise `value` is set to `(0,0,0,0)`.

When you play an effect you specify an AABB for the effect that will be used for broadphase culling of the effect. For best result, this AABB needs to match the area where the effect function is non-zero. Otherwise you get inefficient culling.

You can use the special constant `time` to create time-dependent effects. It's automatically set to the time since the effect was played by the vector field system. Here is an example that uses this to implement a sinusodial wind.

```
const float4 amplitude = float4(1,1,1,0);
const float4 wave_vector = float4(1,0,0,0);
const float4 frequency = float4(1,1,1,0);
const float4 phase = float4(0,0,0,0);
const float4 time = float4(0,0,0,0);

void sine(in vf_in in, out vf_out out)
{
	out.wind = in.wind + amplitude * sin( dot(wave_vector, in.position) +
	    frequency*time + phase );
}
```

The vector language does not support loops or if-statements. You can use the following expressions:

**+ - * /**

Component-wise addition, subtraction, multiplication, division.

**dot(a, b)**

Computes the dot product of *a* and *b* and assigns it to all components of the result.

**cross(a, b)**

Computes the cross product of *a* and *b*. The *w* component of the cross products is always 0.

**select_gt_0(a, b)**

Returns a vector that has *b* in the components where *a* > 0 and 0 in the other components.

**normalize(a)**

Returns a normalized.

**sin(a)**

Returns a vector with the sin of each component of *a* in its components.

>   For some additional examples of vector field definitions, see the *.vector_field* files under *core/entities/vector_fields*. These definitions provide the basis for the vector field entities and scripts described under [Setting up vector fields in the editor], but you can also use them to add those effects to a `VectorField` object that you create yourself in Lua.
