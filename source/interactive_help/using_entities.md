# Using Entities in your Project

>	**NOTE:** Stingray entities are intended to offer a modular, easily extensible system for constructing and re-using custom building blocks. At the moment, support for entities is just getting started, and mostly centers around supporting ~{ The Shading environment and post effects }~. Feel free to try out using the entity system for other purposes using any of the information you see in this section, but be aware that for the moment most Stingray workflows are still based around the use of *units* rather than entities. See also ~{ About units and entities }~.

Entities are building blocks that you can use in your project to set up complex objects that have their own unique sets of data, behaviors and interactions.

## What are entities for?

The goal of the entity system is to be flexible and open enough to model just about any kind of object that you might need in your project.

Under the hood, a few core Stingray features and workflows are already built around entities. For example, anytime you create a new level, it comes with an entity that handles the rendering settings used by ~{ The Shading environment and post effects }~.

You can also use the entity system directly to set up your own kinds of game objects. In this release, you will find it mainly useful for creating entities that store arbitrary data values: numeric, boolean, strings, resource names, 3D coordinates, colors.

## Entities are *modular*

Every entity is essentially a container that holds various different kinds of *components*.

Each component has a single, distinct job. This might be things like storing some kind of data, managing a 3D mesh, maintaining a hierarchy of other nested entities, responding to events by running Lua code or Flow graphs.

You assemble an entity by putting different kinds of components together and setting them up with their own data (e.g. different property values, different meshes, different behaviors). In this way, you can *compose* your own unique kinds of entities that contain just the components and behaviors you need.

See also ~{ Assign components to an entity }~.

## Entities are *efficient*

Since entities are built up from a selected set of components, they tend to be relatively lightweight. If you don't need an entity to handle things like physics or 3D meshes, you simply don't assign the relevant components to that entity. Each entity therefore consumes only the minimal amount of memory needed to handle its assigned components, without reserving any unnecessary extra "overhead".

In addition, each type of component is managed by a separate subsystem. Each of these component managers is only aware of the entities that have been assigned an instance of its component, and each manager maintains all of the relevant data for all of those entities in one place. Decoupling the component managers in this way makes each manager as focused and efficient as possible at doing its own particular job.

## Entities are *extensible*

Stingray comes with some built-in components that are ready to be assigned to your own entities. (In this release, the set of components that have full end-to-end workflows from the Stingray Editor to the runtime gameplay is very limited. Future releases will add more built-in component types and easier ways to set them up.)

Depending on the type of project you are creating, you may need your entities to do different kinds of jobs or manage different kinds of data than the set of built-in components allows.

To do this, you can create your own custom types of components. This allows you to tailor your game entities to fit the needs of your project very closely.

See also ~{ Create a custom component }~.

## Entities are *reusable*

You can base new entity definitions on other kinds of entities that you've already set up. This makes your new entity *inherit* all of the same components and settings that its base entity has. You can also override any of these inherited settings, and add new components.

This means that you never have to duplicate an entity definition in order to reuse the same set of components or settings. You can reuse each entity definition as many times as you need, specializing it further each time you use it.

This lets you create hierarchies of entity definitions, each of which relies on the components and settings that come from its *inherited asset*.

Note that each entity is persistently connected to its inherited entity. Whenever you retrieve an inherited setting, its value is retrieved from the inherited entity unless it has been overridden. Therefore, when you change a setting at the root of your entity hierarchy, you automatically change that value for all other entities that inherit it.

See also ~{ Set or remove an inherited asset }~ and ~{ Apply or discard overrides }~.
