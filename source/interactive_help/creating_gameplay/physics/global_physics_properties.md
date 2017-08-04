#Global physics properties

The physics properties file is a global file (it is always called `global.physics_properties`) that specifies settings that are shared by all physics objects.

There is no user interface for editing the global.physics_properties file, so you edit it using a regular text editor. The file is a SJSON file with five parts:

```{sjson}
materials = {...}
collision_types = {...}
collision_filters = {...}
shapes = {...}
actors = {...}
```

##Materials

The materials section defines properties for physics materials --  what physics objects are made of. The properties can be things like density and friction.

Each material is identified by a name and has a number of properties specified. An example:

```{sjson}
materials = {
	brick = {
    	density = 1922
    	dynamic_friction = 0.3
    	friction_combine_mode = "min"
    	restitution = 0.5
    	restitution_combine_mode = "average"
    	static_friction = 1
	}
	clay = {
    	density = 1089
    	dynamic_friction = 0.3
    	friction_combine_mode = "min"
    	restitution = 0.5
    	restitution_combine_mode = "average"
    	static_friction = 1
	}
	copper = {
    	density = 8920
    	dynamic_friction = 0.3
    	friction_combine_mode = "min"
    	restitution = 0.5
    	restitution_combine_mode = "average"
    	static_friction = 1
	}
}
```

The material properties are defined below:

**density = 1000**

The density of the object in SI-units (kg / m^3). (All properties in the Stingray engine are specified in SI-units.) Water has a density of 1000. Floating objects have a density < 1000 and sinking objects > 1000.

**dynamic_friction = 0.1**

Friction coefficient (typically in the range 0--1, but values higher than 1 are possible) used when the object is sliding on a surface.

**static_friction = 0.1**

Friction coefficient used when the object is resting on a surface. Static friction is typically higher than dynamic friction, it takes more effort to get an object to start moving, than to keep it moving once it has started.

**friction_combine_mode = "average"**

(Options: "average", "min", "multiply", "max".)

In the real world, the friction between two objects depends on both objects' materials. So a single material doesn't really have a friction -- it is the combination of one material against another that has a certain friction. (A piece of velcro has high friction against other velcro, somewhat high against cloth and low against other objects.)

But physics engines don't want to deal with every possible combination of materials, so instead they assign friction coefficients to individual materials. The question is then what happens when two materials with different coefficients (say 0.1 and 0.3) meet? That is determined by the friction_combine_mode.

- min means to use the minimum (0.1)
- max means to use the maximum (0.3)
- average means to use the average (0.2)
- multiply menas to use the product (0.03)

No combine mode is "right" or "wrong". It is a matter of finding something that works well for your project. `min` might be a good choice because it allows you to create a "slippery floor" (give the floor a low friction and everything will slide on it) as well as "slippery objects" (give the object a low value and it will slide on everything). Those are often the two most interesting friction effects.

What happens if two objects have different friction_combine_modes? In that case, whatever mode is latest in the list average, min, multiply, max is picked. So if a `min` meets `average`, then `min` is used.

**restitution = 0.2**

Restitution specifies the "bounciness" of the object. To be specific, it specifies how much of its current velocity the object retains after bouncing. Since v^2/2 = gh, an object dropped from 1 m with a restitution of r will bounce to a height of r^2.

The value should be in the range 0--1.

A value of 0.2 means the object retains 20% of its velocity and will bounce 4 cm when dropped from 1 m.

**restitution_combine_mode = "average"**

(Options: "average", "min", "multiply", "max")

Just as with friction, the restitution really depends on both objects involved in the bounce. This parameter specifies how to compute the restitution that should be used when the objects have different restitutions.

##Collision types and collision filters

Collision types and collision filters determine which objects collide with each other:

```{sjson}
collision_types = [
	"default"
	"character"
	"vehicle"
	"projectile"
]

collision_filters = {
	default = {is = ["default"] collides_with_all_except = []}
	character = {is = ["character"]}
	character_trigger = {collides_with = ["character"]}
}
```

*collision_types* is just a list of unique names for different types of collision.

A *collision_filter* is what is actually used by physics objects to specify how they collide. A collision filter consists of two lists. One list tells what the object is and the other list tells what the object collides with. Note that an object can be more than one thing. For example an object could be both a vehicle and a projectile.

The following properties can be set for the collision filters:

**is = []**

A list of collision types specifying what this object is.

**collides_with = []**

A list of collision types specifying what this object *collides with*.

**collides_with_all_except = []**

A convenient way of specifying objects that should collide will almost everything. The object will collide with everything except what is in the list.

Two objects *A* and *B* will collide if *A* is something that *B* collides with, or if *B* is something that *A* collides with.

##Shape templates

Shape properties apply to individual shapes in a physics actor. An actor can consist of multiple shapes. For example a dumbbell actor could be made from two sphere shapes and a capsule shape joining them.

The shapes list specify templates for shapes. When you define your physics object, you specify what templates the different shapes should use.

An example:

```{sjson}
shapes = {
	default = {}
	trigger = {trigger = true}
	sweeper = {sweep = true}
	character = {collision_filter = "character"}
	character_trigger = {trigger = true collision_filter = "character_trigger"}
}
```

The properties you can set for a shape:

**collision_filter = "default"**

Specifies the collision filter the shape uses.

**disable_collision = false**

If true, collision for this shape is completely disabled. You can use this for shapes that are only used for raycast and overlap queries.

**disable_raycasting = false**

If true, raycasting is disabled for this shape.

**disable_response = false**

If true, the collision response (bounce) for this object is disabled, though a contact is still generated.

**disable_scene_queries = false**

If true, this shape doesn't participate in scene query tests (such as overlap tests).

**sweep = false**

If true, sweep collision is used for this shape.

Since the physics engine simulates objects by moving them in discrete steps, small objects with high velocities can completely pass through a surface in a single step. In that case, no collision event will be generated and the object will simply be seen to pass through the surface. This is known as the bullet-through-paper problem.

You are in danger of bullet-through-paper when the distance an object travels in one simulation step: vdt* (where v is the velocity and dt is the time step) is greater than its radius r. By default, we step the physics at 60 Hz, which means the danger occurs when `v > 60r`.

To fix this you can enable sweep collision for small fast moving objects. When sweep collision is enabled, the object is swept from its position at the start of the simulation to its position at the end, and any collisions along the way are detected. Sweep collision has a performance cost, so you don't want to enable it for all objects, only for the small, fast moving ones.

**trigger = false**

If set to true, specifies that the shape should be a trigger shape.

Trigger shapes do not participate in the regular physics simulation. Instead they specify volumes that should generate events when any physics objects enter them. You can set up the processing of the events using flow.

##Actor templates

Actor templates specify properties applied to actors. When you define a physics actor, you specify the actor template that you want to use.

An example:

```{sjson}
actors = {
    static = {dynamic = false}
    dynamic = {dynamic = true linear_damping = 0.1 angular_damping = 0.1}
    keyframed = {dynamic = true  kinematic = true linear_damping = 0.1 angular_damping = 0.1}
}
```

Use the following properties in an actor template:

**mass = 0**

Specifies the mass of the actor. If you don't specify a mass, it's automatically computed from the volumes of the actor's shapes and the density of their materials.

**inertia = [0,0,0]**

Specifies the rotational inertia of the actor around its major axes. If the inertia is not specified it is computed automatically from the shapes and densities.

**minimum_inertia_fraction = 0.1**

Physics engines behave badly if there are huge differences in the inertia around different axes. These parameters specify how much the inertias are allowed to differ. A value of 0.1 means that no axis can have an inertia that is smaller than 10% of the biggest inertia. There is usually little reason to change this value.

**linear_damping = 0.01**

A general damping factor applied to the actor's linear movement. The damping makes the actor stop moving after a while even if nothing is stopping it. A higher damping value increases the stability and performance of the simulation by making actors "stop" and "freeze" sooner. On the other hand, it can look strange if actors stop too soon.

**angular_damping = 0.05**

A general damping factor applied to the actor's rotational movement. You can often use a higher **angular_damping** than **linear_damping**.

**dynamic = false**

If true, the actor is dynamic (physical or keyframed). If false, the actor is static.

**kinematic = false**

If true, the actor is keyframed. Note that this property is only valid if dynamic is true.

**disable_collision = false** **disable_response = false**

As the corresponding shape flags, but apply to the entire actor.

**disable_gravity = false**

If true, this actor will not be affected by gravity.
