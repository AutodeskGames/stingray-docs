# About units and entities

*Units* and *Entities* are two terms that you will run into while working with Stingray, and that may be unfamiliar to you if you have not worked with a game engine before.

## Units

Units can be defined broadly as "things that go in a level".

When you import a 3D asset like a character or a scenery object into your Stingray project, the result is a unit resource. This resource contains references to everything that is needed in order for it to go in a game level: its 3D mesh, the materials used to shade the surfaces of the mesh, maybe a Unit Flow graph if any, and various settings for things like physics, etc. This unit resource is like an abstract template for the object.

By double-clicking a unit resource in your ~{ Asset Browser }~, you can open it in the ~{ Unit Editor }~. This tool lets you set up the unit's default properties and Unit Flow graph.

When you add the unit to a level, or *spawn* it, you are creating an *instance* of that unit resource within that level. That instance is an independent copy that inherits all the settings of the unit resource. But since it's independent from other instances of the same unit, you can change many (but not all) of its properties without affecting the others. For instance, each unit instance obviously can have different translation, rotation and scale from all other copies of the same unit, each unit can be assigned its own set of materials, etc.

You'll use units to represent most visble, physical objects in your game.

## Entities

Entities are containers that hold modular pieces called *components*.

Different kinds of components are specialized to do different things: some hold data like parameter settings, some give their entities translation, rotation and scale values in 3D space, some handle particular data structures or resources like 3D meshes or bone hierarchies, some give their entities dimensions in the physics world, etc.

In an entity-based workflow, you build up an entity by assigning it various components that will give it the appearance, behaviors or functionality you want it to have. When you get an entity set up exactly the way you want it, you can save the entity as a *.entity* asset, which acts like a template. You can use these entity assets as the basis for other entities and entity assets that you specialize further.

In the current release of Stingray, the tools to support this workflow are just getting started. Entities are only used for one thing: the shading environment. The shading environment entity is made up of several different components, each of which contains parameters that control a different rendering effect. For details, see ~{ The Shading environment and post effects }~.
