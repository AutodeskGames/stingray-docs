#Basic physics concepts

##Worlds, actors, and shapes

Physics simulation takes place in a *physics world*. There is exactly one physics world for each rendering world and objects are mirrored between them so that they stay synchronized.

  > **Note:** You can create worlds without any physics by passing the flag *Application.DISABLE_PHYSICS* to `Application.new_world()` in Lua. There is a noticeable cost for each running physics world, even if the world is completely empty (about 0.5--1.0 ms). So if you have worlds that you use for purely graphical purposes (such as GUIs), make sure to disable their physics.

In the physics world, there are a number of *actors* or *rigid bodies*.

An actor is a physics object that moves as a single unit. It can have a complicated shape and consist of many parts, but the parts always stay in the same position with respect to each other. For example, a statue is a single actor because it always moves as a whole, you cannot reposition the arm individually.

See ~{ Create a physics actor }~.

A ragdoll consists of multiple actors because the arms and legs must be able to twist and bend with respect to each other. Thus, the ragdoll needs a separate actor for each part of it that is capable of independent movement.

An actor has one or more *collision shapes*. The collision shapes determine how the actor collides with other actors. For example, when a ball bounces against the floor it is the collision shape of the ball that touches the collision shape of the floor and causes the bounce.

An actor can be in one of three modes: *static*, *keyframed*, or *dynamic*. A *static* actor never moves. A *keyframed* actor is controlled by the engine world, the movement is then mirrored in the physics world, (meaning the engine world acts as master and the physics world as slave). Objects that are controlled by animation typically have keyframed physics. *Dynamic* objects are controlled by the physics world and mirrored to the engine worlds.

It can sometimes be useful to change an object from keyframed to dynamic and back. For example, while a character is running around, the ragdoll actors can be keyframed and follow the character. Then when he dies, we make the ragdoll actors dynamic and put the physics in charge of the movement. Another option would be to create the ragdoll actors when the character dies.

Keyframed actors *always* follow the animated movement. Whereas the path of a dynamic actor would be corrected in response to a collision, a keyframed actor will keep going along its animated path. The keyframed actor still registers the collision event, but its path isn't automatically corrected. When a keyframed actor collides with a dynamic actor, the dynamic actor always gets pushed out of the way. It behaves as if the keyframed actor was a dynamic actor with infinite mass.

> **Note:** Sometimes you want an object to be animated but still have collision and behave as a real physical object. For example, you want to animate a closing door, but not let it close with infinite force regardless of what is in the way. Instead you want the door to push objects that are in the way with a certain force and get stuck if it is blocked by a heavy object.
>
> Doing this requires translating the animations into physical forces that achieve the same movement but are understood by the physics system. That is not a trivial problem and there isn't always a clear-cut solution. How much force should the door apply? What happens if the animation is interrupted in the middle?
>
> The engine does not support this kind of translation. If you want to do physical animations, you have to do it by manually applying forces to objects from the script.

Each physics actor has a shape that represents the space it takes up in the physics simulation. This shape can be a regular solid like a sphere, capsule or box, it can match a mesh associated with the actor, or it can be a convex volume that the engine computes automatically from the mesh.

- Static actors are (usually) best modeled with meshes. This gives the most accurate results in collision testing.

- Keyframed actors are best implemented as spheres, capsules, or boxes. Sometimes it is necessary to use meshes for keyframed actors.

- Dynamic actors cannot use meshes at all. They must use spheres, capsules, boxes and convexes. If this doesn't give you enough fidelity to the shape of your object, you can try splitting your object into multiple smaller actors. For example, a chair might have a box-shaped actor that covers the seat and legs, and another thinner box that covers just the back.

For example, if the gameplay involves precision shooting in the vicinity of a keyframed object, you may need to use a mesh to get collision that is as close as possible to the graphical geometry. In that case, the best option is to create a mesh that is only used for raycasting. The mesh should be setup so that it doesn't collide with any other physics objects.

##Raycasting and shape queries

Script programmers can use raycasting and shape queries to probe the physical world.
A *raycast* finds the physical object(s) that are hit by a ray travelling from one point in the physical world, to another point in the physical world. Raycasts are typically used to determine what object a bullet hits and whether a player can see another player.

A *shape cast* or *sweep test* is similar to a raycast but uses a more complicated shape. A shape cast answers the question, if I move the shape*S* (say a sphere) from point *A* to point *B*, at what point along the path from *A* to *B* does the sphere first collide with something?

Neither raycasts or shape casts detect hits with objects that they are already hitting at the starting point. For example, if a ray starts inside a sphere, it doesn't return any hits with that sphere.

*Shape queries* find all physical objects that intersect a shape. They can be used for such things as grenade effects (find all actors within *x* m of a grenade explosion and apply a force to them).

##Joints

A *joint* or *constraint* is a physical link between two objects. As an example consider the hinge of a laptop. The hinge holds together the screen and the keyboard but allows them to rotate with respect to each other.

The physics system can simulate many different kinds of joints that allow the objects to move relative to one another in different ways. A *hinge* joint lets the objects rotate around a common axis. A *ball-and-socket* joint allows free rotation of one object with respect to another (like a ball mounted in a socket that can spin in many different directions).

Joints can also be configured with limits and forces. A *limit* specifies how much the joint can rotate. For example, you typically can't turn a laptop hinge 180 degrees so that the laptop becomes completely flat. *Forces* can strive to push the joints in certain directions. This can be used to simulate, for instance, a door with an automatic closer.

Using joints, limits, and forces you can create complex objects that behave similar to their real-world counterparts. It's never an exact replication, because the abstract joints provided by the physics system do not capture all the nuances of real world joints.

A *ragdoll* is a set of actors representing limbs (forearm, upper arm, thigh, shin, head, torso) together with a set of joints that tie the actors together in such a way that their movement mimics that of a dead or unconscious human. Getting realistic ragdoll behavior often requires lots of tweaking.

See ~{ Create and import a ragdoll }~.

##Collision and filtering

The physics system lets you set up filters that determine which actors collide with which other actors.

You'll typically use filters to improve performance. For example, if you have an actor that you only want to use for raycasting, you can set it up so that it doesn't collide with anything else. If you have a lot of small "debris" bodies lying on the ground, such as rocks or pieces of paper, you can set them up so that they don't collide with other debris objects but only other larger objects (since collision between the small objects doesn't have a big visual impact anyway).

Collision filters can also be used for raycasts and queries. For example if you want to simulate bullet-proof glass, you can set up the filters so that it collides with "bullet rays" but not with "visibility test rays".

##Movers

A *mover* or *character controller* is used to represent a character in the physics world.
Characters are not simulated as "real" physical objects (actors), because real physical objects have lots of behaviors that we do not want in a character. For example, they can bounce, slide, tip over, and so on.

Still, we need characters to interact with the physical world. When a character moves, that movement must be checked so that the character doesn't penetrate other objects in the world.

The solution is a *mover*. A *mover* is a capsule shape that surrounds the character. When the character moves, the capsule shape is moved around in the physical world and tested for collision with physical objects using a special algorithm. The algorithm makes sure that the mover slides against surfaces as we expect player-controlled characters to do.

When the character crouches, the engine can switch to a smaller mover that lets him enter areas that are inaccessible to the bigger mover.

To prevent any part of the character from penetrating the 3D objects in the scene, all parts of the character must stay inside the mover shape (since only the mover shape is checked for collision against the world).

This is often a problem. Interesting animations, such as kicks and sword attacks require a lot of room. To contain them you'd need a really big mover. But big movers are problematic because they can't get into narrow areas, and feel unnatural to the player. There is no perfect solution to this issue. It is up to the gameplay code to find a good balance. In some cases it's probably okay to leave some penetration. Other times it might be better to grow the mover before a big movement, even though doing so might push the character away from a wall if he is standing too close.

##Vector fields

A *vector field* is a function that ascribes a Vector3 (actually a Vector4, but usually we are just interested in the first three components) to each point in space.

Vector fields can be used to represent anything that has a vector value at different points in space. The most common case is to use vector fields to represent wind and water velocity, but they could be used for other things as well, such as magnetism or gravitation. When vector fields are used to represent wind, the vector field gives the velocity of the wind at each point in space.

Vector fields are created by playing *effects* on them. Effects can be created to represent many different kinds of things that affect the wind velocity, such as explosions, whirlwinds, or updrafts from air vents.

Wind from vector fields can be applied to both physics and particles.

See ~{ Set up vector field (wind) effects }~ for more.

##Vehicles

A *vehicle* is part of a unit and is based on a *physics* actor within that unit. This physics actor is required by the vehicle throughout its life and must not be destroyed at any time.
The vehicle's base actor must contain a number of shapes to establish the chassis (body) and the wheels. It requires one collision shape for the chassis and additional collision shapes for each wheel. Each vehicle shape must ultimately be a convex mesh. You can author the convex mesh, or have the engine compute a convex mesh based on a non-convex shape.

There are two fundamental types of vehicles that are supported: wheeled, and tank. The fundamental difference between wheeled and tank vehicles is that the tank wheels on the same side of the body all operate at the same speed. Wheeled vehicle wheels operate independently. Tank wheels do not turn by rotating like wheeled vehicles, a tank turns by applying different levels of thrust to each tread.

There is no support for keyframed vehicles.

Vehicle properties are based in SI units. Distances are measured in meters, mass is measured in kilograms and time is measured in seconds.

See ~{ Set up vehicle physics }~ and ~{ Vehicle physics properties }~.
