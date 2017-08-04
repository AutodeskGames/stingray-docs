# Create custom Flow nodes in Lua

You can create your own custom Flow nodes that extend the set of nodes built in to the Stingray engine. Your level designers and gameplay programmers working in the Stingray level editing tools can hook these custom nodes in to their Flow graphs for levels and units just like any other built-in nodes. However, when your custom nodes are triggered or evaluated in the game at runtime, they call out to your own custom Lua code.

You can use these custom nodes to create complex custom responses to gameplay events, or to give your game designers direct control over when the game engine should execute custom Lua functions that you define.

>	**Note:** You can also use the Stingray SDK to implement your custom Flow nodes in C instead of Lua. For details, see [Create custom Flow nodes in C](http://help.autodesk.com/view/Stingray/ENU/?guid=__sdk_help_custom_flow_nodes_in_c_html).

**To use custom Lua Flow nodes:**

1.	Write some Lua callback functions that will get called when your nodes get evaluated in the Flow graph. See [Writing a callback function] below.

2.	Define the characteristics of each node -- for example, the types of inputs it expects and outputs it produces -- in a data resource file with the *.script_flow_nodes* extension. See [Defining Flow nodes] below.

3.	Make sure that any time your custom node gets triggered at runtime, your game has loaded in memory both the *.script_flow_nodes* file that contains the node's definition, *and* the Lua script file that contains the function it invokes. Since these files tend to take up relatively little memory, it is advisable that you load them all during the initialization of your game and keep them loaded until final shutdown.

	For details on getting the Lua script that contains your callback functions loaded and part of the Lua environment at runtime, see ~{ Loading and running your own script files }~.

	For details on getting your *.script_flow_nodes* files in the game, see ~{ Managing content and resources }~.

## Writing a callback function

When the game engine calls your Lua function, it always passes two arguments:

*	A table, whose entries are defined by the `args` setting of your Flow node configuration. See [below][args].

*	A value that uniquely identifies this Flow node instance. If your Lua code needs to maintain some state data about the Flow node across multiple evaluations, you can use this value as a key for storing and retrieving the state data from a table that you maintain in a custom variable.

Your Lua function should return one value: a table that contains entries that match the names and types that you configure in the `returns` setting of your Flow node configuration. See [below][returns]. If you like, you can re-use the same table that was used to pass in arguments. If you don't set a return value during a particular evaluation of a node, the Flow node will re-use whatever value was last assigned to the table. If you don't want to set any values, you don't have to return a table at all.

For instance, the following function shows how to accept two input values -- both floats, named `a` and `b` -- and how to return a float value named `sum` as a member of a table.

~~~{lua}
function FlowCallbacks.add(t)
	t.sum = t.a + t.b
	return t
end
~~~

For a Flow node definition that would invoke this function and handle its output float value, see [the query example below][query].

### Getting the Flow execution context

When you write your Lua function, you might find that you need some information about the context the Flow node is currently operating in. For example, if the Flow node is intended for use in Unit Flow, you might need to know the identity of the unit whose Flow graph is currently being evaluated.

You can get this information from the Lua `Application` by calling `stingray.Application.flow_callback_context_world()`, `stingray.Application.flow_callback_context_unit()`, `stingray.Application.flow_callback_context_level()`, and `stingray.Application.flow_callback_context_entity()`.

## Defining Lua Flow nodes

You must define your custom Flow nodes in data files with the *.script_flow_nodes* extension. These data files may exist anywhere in your project's resources directory, and you can load them in and out of memory when needed along with the other data files in your project.

You can have as many *.script_flow_nodes* files in your project as you like, so you can organize your node definitions in whatever way makes sense for your project.

### *.script_flow_nodes* file format

*.script_flow_nodes* files are in the same SJSON format used by most other Stingray data resources; for details, see ~{ About the SJSON Data Format }~.

Each file must contain a single top-level `nodes` element. The value of this element must be a list of objects, each of which defines a single Flow node. Each of these node objects can in turn use several configuration parameters defined below.

> **Note:** All names should be unique *within* each Flow node. For example, you should not use the same name for both an argument and a return value of the same node.

For example:

~~~{sjson}
// A sample .script_flow_nodes file.
nodes = [
	// demonstrates basic usage, calling a specified Lua function
	{
		name = "Tile Collapsed"
		category = "Tiles/Actions"
		visibility = "unit"
		function = "flow_callback_tile_collapsed"
		args = {
			collapsed_tile = "unit"
			other_unit = "unit"
		}
	}
	// your nodes list can have as many node definitions as you need.
	{
		name = "Wake Enemy"
		category = "AI"
		visibility = "all"
		function = "flow_callback_ai_enemy_awake"
		args = {
			enemy = "unit"
		}
	}
]
~~~

The following sections describe all the parameters you can set up for the Flow nodes you define in your *.script_flow_nodes* files.

### name
The name of the Flow node.

### category
If specified, the node will be shown under this category in the Flow editor. Use slashes in the name to make the Flow node appear in a sub-category.

### visibility
If specified, the Flow node will only be visible in the Flow editor for the specified type of object. If not specified, or if set to "all", the node is visible in all Flow editors.

Accepts the following values:

-	`level`: Only available in the **Level Flow** Editor.
-	`unit`: Only available in the **Unit Editor** Editor.
-	`all`: Available in both editors.

### function
If you use this parameter, your Flow node will be assigned a single input event called *In*. When this *In* event is triggered, the game engine will call the Lua function that you specify here.

The value of this setting can be any one of the following:

*	The name of a global Lua function (e.g. `print`).
*	The name of a Lua function that is defined in a global table (e.g. `FlowCallbacks.add`).
*	Arbitrary Lua code that returns a Lua function. For example:

	~~~{sjson}
		// demonstrates a query node with inline function code
		{
			name = "Multiply"
			args = {
				a = "float"
				b = "float"
			}
			returns = {
				product = "float"
			}
			query = true
			function = """ return function(t) t.product = t.a * t.b return t end """
		}
	~~~

> **Note:** You should use *either* `function` *or* `function_map` to specify the Lua function that should be called for each node. Do not use both of them for a single node.

### function_map
This parameter allows you to to set up a list of alternate trigger events for the Flow node, each of which causes a different Lua function to be invoked.

This parameter must contain a list of sublists. Each sublist must contain two items:

*	The first parameter specifies the name of an input event slot in the Flow node.
*	The second parameter specifies the Lua function that should be called when that input event is triggered. The functions are called with a table argument, just as when you use a single `function` parameter.

For example:

~~~{sjson}
	// demonstrates usage of a function_map
	{
		name = "Giant Dust"
		function_map = [
			["Armpit Left" 	"CinematicGiant.cb_dust_armpit_left"]
			["Armpit Right"	"CinematicGiant.cb_dust_armpit_right"]
			["Elbow Left"	"CinematicGiant.cb_dust_elbow_left"]
			["Elbow Right"	"CinematicGiant.cb_dust_elbow_right"]
			["Hip Left"		"CinematicGiant.cb_dust_hip_left"]
			["Hip Right"	"CinematicGiant.cb_dust_hip_right"]
			["Knee Left"	"CinematicGiant.cb_dust_knee_left"]
			["Knee Right"	"CinematicGiant.cb_dust_knee_right"]
		]
		args = {
			unit = "unit"
		}
	}
~~~

> **Note:** Use *either* `function` *or* `function_map` to specify the Lua function that should be called for each node. Do not use both of them for a single node.

<!-- TODO: can you use inline code in one of these? -->

### args
An object that defines the arguments that your Lua function accepts, and their types.

There are two ways you can specify each argument, described in the following sections. In both, the key of each element in the `args` object specifies the name of the input variable slot that is displayed in the Flow node, and the name of the variable in the table that is passed to the Lua function. However, the value is expressed differently in the two syntaxes.

#### Simple syntax

In this syntax, the value of each element in the `args` object is simply the type of the argument: i.e. the type of variable that can be connected to the input slot displayed in the Flow node. Accepted values for the type are: `unit`, `actor`, `mover`, `vector3`, `quaternion`, `float`, `bool`, `string`, `instance_id`, `material`, `id`, `light`, and `mesh`.

For example:

~~~{sjson}
		...
		args = {
			setting = "float"
			character = "unit"
			position = "vector3"
		}
		...
~~~

#### Detailed syntax

In this syntax, the value of each element is a table that can contain the following entries:

-	`type`: Required. This defines what type of variables can be connected to the input slot displayed in the Flow node. Accepted values for the type are the same as in the simple syntax above, plus the following additional options. Each of these additional options produces a string value, and allows the user to select a value from a set of possible options.
	-	`enum` indicates an enumeration: a string argument whose value is constrained to one of a pre-configured set of choices. Set these choices in the `choices` value below.
	-	`resource` indicates the name of a data resource that currently exists in the project. Use the `extension` value (see below) to specify the type of the resource.
	-	`element` indicates a named item that is registered with Flow but that is not persisted as a resource file on disk. Use the `filter` value (see below) to specify the type of element that you want to browse.
-	`default`: Optional. Use this to provide a default value for this argument.
-	`choices`: Required only for `enum` types. If you define an argument as an enumeration, you can use this setting to specify the accepted values for the argument. If the user clicks the variable in the Flow Editor, he or she will be presented with a dialog that lists these options.
-	`extension`: Required only for `resource` types. Specifies the type of resource your node expects to receive. For example, `package`, `level` or `script_flow_nodes`.
-	`filter`: Required only for `element` types. Specifies the type of element your node expects to receive. Currently accepts either `wwise_event` for Wwise event names, or `wwise_parameter` for Wwise parameter names.

For example:

~~~{sjson}
	// demonstrates the detailed syntax for argument definitions, with
	// default values and enumerations
	{
		name = "SetEnemyAttitude"
		args = {
			unit = "unit"
			hostility = {
				type = "enum"
				choices = [
					"Neutral"
					"Hostile"
					"Friendly"
					]
				default = "Neutral"
			}
			courtesy = {
				type = "float"
				default = 0.5
			}
		}
	}
~~~

### returns

An object that defines the output values of your Lua function.

These return values will be displayed as output variable slots on the Flow node, which means you can connect them to the input slots of other Flow nodes.

The syntax for declaring return values is the same as the simple syntax for arguments described [above][args]:

-	The key of each element in the `returns` object specifies both the name of the output variable slot that is displayed in the Flow node, and the name of an output variable in a table that is returned by your Lua function.

-	The value of each element in the `returns` object specifies the type of the return value: i.e. the type of variable that can be connected to the input slot displayed in the Flow node.

Return values can use the same types as the `args` setting above, with one addition: the `event` type. If you use the `event` type, the Flow node will have an  *out event* connector instead of an out variable connector. When your function returns a table with the corresponding entry set to *true*, the out event will be triggered. You can trigger more than one out event by setting more than one `event` entry to *true*.

For backward compatibility, if you don't specify any events, a single event called *out* will be auto-generated. This *out* event is always triggered when your function returns, regardless of what your Lua function records in its return table.

### query

If you set the `query` parameter to *true*, the Flow node will become a *query node*. Query nodes don't have any input events; instead, they are automatically triggered on-demand whenever another node needs their output data. Query nodes are typically useful for fetching volatile data that may become stale at any time, such as a unit's current position.

For example:

~~~{sjson}
	// demonstrates a basic query node
	{
		name = "Add"
		args = {
			a = "float"
			b = "float"
		}
		returns = {
			sum = "float"
		}
		query = true
		function = "FlowCallbacks.add"
	}
~~~
