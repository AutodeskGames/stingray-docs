# About built-in components

This page gives a brief overview of the different kinds of components that come built-in to Stingray, and what you can do with them in this release.

## About components and managers

Each different type of component in Stingray is handled by a separate component manager. This manager is responsible for keeping track of which entities have been assigned instances of the component, making sure that the data maintained by each instance of the component is internally consistent, and applying any updates required by the component each frame.

For example, the transform component manager maintains a list of all entities that have been assigned an instance of the transform component. It makes sure that each transform component contains valid 3D coordinates for its entity, and it handles moving, rotating and scaling those values.

These component managers are exposed to Lua so that you can interact with them during gameplay if necessary. For example, the `stingray.TransformComponent` object represents the transform component manager.

>	**Note:** the Lua objects named `xxxComponent` represent the component *managers*, not the individual component instances that get assigned to individual entities. For example, the `stingray.TransformComponent` object is the manager that handles *all* transform components, not an individual component assigned to an entity. That means that when you call a function provided by one of these component managers, you usually have to also indicate which entity and which component instance you want to affect.

For more information about how to access and use these managers in your gameplay scripts, see also ~{ Interact with entities during gameplay }~. For details on the functions exposed by each of the managers, see its documentation in the [Lua API reference](../../lua_ref/index.html).

## Data components

Data components handle storing and retrieving data values. For example, the components used by the shading environment to store rendering and post-effects settings are all specialized data components. If you create your own custom component (see ~{ Create a custom component }~), it will likely also be a kind of data component.

In the Stingray Editor, you can set values for your data components in the ~{ Property Editor }~ panel. You can also use the `stingray.DataComponent` manager interface to set and retrieve these data values at runtime through Lua (see ~{ Interact with entities during gameplay }~). In addition, you can animate certain kinds of data component values using the ~{ Story Editor }~.

## Debug name component

The debug name component is very similar to the data component, except that:

-	it is preset to handle a specific kind of value: a name that you can use to tell your entities apart.
-	each entity can only have one debug name component assigned to it.

This component is not exposed in the Stingray Editor, but you can set and get the name values from Lua using the `stingray.DebugNameComponent` manager, much like a data component.

## Script and Flow components

The script and flow components offers a way to associate an entity with a *behavior*, which you implement in a Lua script module or a Flow graph. See ~{ Set up an entity's behavior using Flow or Lua }~.

## Tag component

The tag component helps you tell different kinds of entities apart. You can associate string ID tags with one or more different entities, and retrieve entities by tag.

This component is exposed in the Stingray Editor, and you can also freely use the `stingray.TagComponent` API in Lua to assign and query tags.

Each entity can have only one tag component assigned to it, but that tag component can handle any number of tags.

## Transform component

The transform component manages a 3D position, rotation, and scale for its entity. This is fully exposed in the Stingray Editor, and in Lua through the `stingray.TransformComponent` manager.

The transform component also handles "parent-child" relationships between entities: you can link your entities together into a hierarchy where the child's 3D transform is set relative to its parent. Changes to the parent's 3D transform also affect all linked children. This usage of the transform component is currently only exposed in Lua.

Each entity can have only one transform component assigned to it. Each entity may be linked to only one parent entity at any given time, but may be linked to any number of child entities.

## Unit component

The unit component associates an entity with a unit resource. When you spawn and unspawn an entity that has a unit component, an instance of that unit resource is automatically spawned and unspawned as well.

The unit component is fully exposed in the Stingray editor: you can add a unit component to your entity, and use the ~{ Property Editor }~ panel to set its associated unit resource. You can also use the `stingray.UnitComponent` manager to access it in Lua.

The unit's placement, rotation and scale in the 3D world are determined by its entity's transform component. When you use a unit component, you therefore will typically also want to set up its entity with a transform component.

Each entity can have only one unit component assigned to it, with one associated unit.

>	**Note:** Eventually, we intend for entities to be capable of directly managing all of the things that units are currently responsible for in Stingray: such as meshes, scene graphs, and physics actors. While we extend the entity system with support for more and more different types of components, the unit component provides a practical way for entities to manage visible game objects in the short term.

## Other components

If you look through the Lua API, you may notice some other kinds of components whose managers also exposed. However, because these components rely on data that you cannot yet create easily through the editor or through Lua, they will not yet be useful to you in this release. This includes:

-	`ActorComponent`
-	`AnimationBlenderComponent`
-	`AnimationStateMachineComponent`
-	`MeshComponent`
-	`SceneGraphComponent`
