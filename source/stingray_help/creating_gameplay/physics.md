# Physics

The purpose of the physics system is to simulate a bunch of interacting physical objects -- like bouncing balls, ragdolls, or cars running into stacks of boxes. Such objects get inserted into a physics world and then a simulation is run on that world to find out how the objects move.

The objects in the physics world are completely separate from the objects in the rendering world, but the engine sets up a connection between them so that they move unanimously. For example, whenever the bouncing ball moves in the physics world, the engine extracts its position and rotation and applies it to a rendered ball in the render world. That way the rendered ball bounces according to the laws of physics.

Stingray uses a third-party physics system, PhysX by Nvidia, to run physics simulations. You can read the PhysX documentation to find out more about how that particular physics system works. See also ~{ Install the PhysX plug-in for your DCC tool }~.

Note that the Stingray documentation does not provide detailed information on how physics in general and physics simulations in particular work. Topics in this section assume you're already familiar with concepts such as mass, density, collision shapes, rigid bodies, and collision filtering. Information about the particulars of physics simulation can be found in the PhysX SDK documentation downloadable from Nvidia:
http://developer.nvidia.com/object/physx.html
