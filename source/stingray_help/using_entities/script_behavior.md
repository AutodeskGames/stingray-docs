# Script an entity's behavior

Often, you need entities of a given type to behave in a certain way. For example, you might want all doors to be closed when spawned, but open when a player-controlled unit comes close enough, or in response to some other event.

This is made easier by *script* components, which associate your entities with Lua modules in your project. When certain events occur in the lifetime of the entity, functions in your Lua module are automatically invoked to handle the events for the associated entities.

Script components are useful because they help you keep your entity's behavior relatively self-contained. This promotes re-usability and modularity. For example, instead of having to include a routine in your game's main update loop that checks the state of each door, you can encapsulate all of the door's dynamic runtime behavior inside a script component that gets invoked automatically. This keeps your main gameplay less cluttered with controllers for specific types of game objects, and allows you to more easily share behaviors between different entities (and across multiple projects).

## Step 1. Write a behavior module in Lua

Most of the work involved in setting up a script behavior is to create your Lua module.

### Get started

The best way to get started writing a behavior module for your own entities is to begin with the template that you'll find under *core/components/templates/script_component.template*. It gives you a good, mostly functional base to build your own behaviors on, and takes care of some of the trickier things for you.

1.	Copy this file to your project, and rename it with a *.lua* extension.

2.	Edit the template, and rename `MyBehavior` to a unique name that describes the entity you want to control.

3.	Finish implementing the functions in the template, or change them to suit your needs.

### Requirements and base interface

-	The only absolute requirement is that your module must return an object that contains a field called `component`. In turn, this `component` field must refer to an object that contains a `name` field.

-	The `component` object may also contain certain specific functions that the script component looks for at different times in the lifespan of the entity. (These are the functions that have been partially implemented in the template script.) If you define any of these functions in your module, the script component will automatically invoke them at the indicated times.

	For example, if you create a `spawned()` function for your component, that function will get called automatically each time an entity is spawned with has a script component that is associated with this module. This gives you a chance to do any initialization needed for your entity. Similarly, if you create an `update()` function, that function will be systematically invoked each frame as long as a living entity is associated with this module.

	For a full list of all the functions that you can set up in your script component module, as well as what parameters get passed to each, see the *core/components/templates/script_component.template* file.

The trickiest thing to keep in mind while writing this script is that your module has to handle *all* entities that it is associated with, across all game worlds. You don't have a separate copy of the component object you define in this script for each entity; there is only *one* instance of this Lua object in the game. The script module itself is only run once, the first time one of its associated entities is spawned. After that, each time one of the functions in this module needs to be invoked (say the `update()` function), it is only invoked *one* time. You have to be aware when implementing these functions that your component has to handle the event for all entity instances associated with that component.

For example, if you look at the template file, you'll see that the pre-written function definitions for `spawned()` and `unspawned()` cache some state information in the `world_data` field about all entities that are currently using the component. It uses this cache in the `update()` function to loop through all of the entities that need updating.

Note that you don't have to `require` your script anywhere. The script component will automatically take care of loading it in to the Lua environment in the game.

### More examples

You can also see some other working examples under *core/entities/vector_fields*. These script components set up wind effects that can blow particles around in the level. For more background on vector fields and how these script components are used, see also ~{ Set up vector field (wind) effects }~.

## Step 2. Set up the script component

To set up the script component for an entity in the editor:

1.	Select your entity in the ~{ Asset Browser }~ or the ~{ Explorer panel }~.

2.	In the ~{ Property Editor }~, add a new script component to the entity.

3.	Set the **Script** property of the new script component to point to your Lua module.

## Optional. Interact with the script component from Lua

In your project's Lua code, you don't have direct access to the component object that you define in your module. However, you can interact with the component through the `stingray.ScriptComponent` manager API, which you retrieve by calling `stingray.EntityManager.script_component()`.

For example, you can use `ScriptComponent.broadcast()` to have the script component manager automatically invoke a given function in all script components that define that function.

The `stingray.ScriptComponent` manager is responsible for managing all script components in the world. So, if you're looking to interact only with the entities that are associated with a particular behavior, you will probably want to filter its list by calling `ScriptComponent.instances_with_script()`.

Once you have a filtered list of script component instances, you can have the manager invoke a given function only on that list of behaviors by calling `ScriptComponent.dispatch()`.
