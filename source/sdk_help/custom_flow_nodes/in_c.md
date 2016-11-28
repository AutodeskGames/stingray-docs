# Create custom Flow nodes in C

This page describes how to create custom Flow nodes that run custom C code in an engine plug-in.

>	**Note:** You can also implement your custom Flow nodes in Lua instead of C. For details, see [Create custom Flow nodes in Lua](http://help.autodesk.com/view/Stingray/ENU/?guid=__stingray_help_creating_gameplay_scripting_with_lua_custom_flow_nodes_html).

**To create a custom C Flow node:**

1.	Figure out exactly what you want your node to do. What kind of output does it need to produce? What input data does it need in order to do its job? Should it be triggered by an incoming event from an upstream node, or should it be a *query* node that is only triggered when its output values are needed by a downstream node? Once you have a good handle on the node's role and requirements, you can start defining its interface.

2.	[Write the trigger function] that should get called when your node gets evaluated in the Flow graph.

3.	[Register the trigger function] with the engine.

4.	Define the characteristics of the node -- for example, the types of inputs it expects and outputs it produces -- in a data resource file with the *.script_flow_nodes* extension. See [Define C Flow nodes] below.

We'll look at these three things separately over the next sections, but keep in mind that your trigger function and your node definition are mutually dependent. For example, if your node definition tells the editor to provide a certain set of input and output data, your trigger function has to be set up to handle those inputs and outputs correctly. In addition, your C code needs to run within an engine plug-in, so you should be familiar with how these plug-ins work. See ~{ Extend the Engine }~.

## Examples

The best place to look for an end-to-end example that illustrates everything involved in writing a custom Flow node is under the `engine_plugins\flow_nodes_sample_plugin` folder in the sample plug-in repository on GitHub. This example defines several different Flow nodes that show different capabilities of the system:

-	The `sample_flow_node` provides a basic example of picking up input values, setting output values, and triggering output events. It also shows how your node can maintain state information across multiple evaluations -- in this case, a `max_run_count` counter that ticks down each time the node is evaluated.

-	The `profiler_flow_node` shows how your node can tie into other systems provided by the engine -- in this case, by using the `ProfilerApi` to start and stop recording performance information.

-	The `dragon_flow_nodes` provide an interesting use case of several nodes that work together. Note in particular how these nodes define a custom data type for a dragon, which they pass to each other through custom Flow node connections.

## Write the trigger function

Your node's trigger function must be a C function that meets the `FlowFunction` signature:

~~~{c}
typedef void(* FlowFunction) (struct FlowTriggerContext *tc, const struct FlowData *fd, const struct FlowParameters *fp)
~~~

For example:

~~~{c}
extern "C" void my_custom_trigger_function(struct FlowTriggerContext* tc, const struct FlowData *fd, const struct FlowParameters *fp)
{
	...
}
~~~

The trigger function's typical job is to take the input event, input data values and state information sent by the engine, do whatever calculations are necessary, and update output data values accordingly. It may also continue processing the Flow graph by triggering one or more output events.

### Determine the input event

Some nodes can be triggered by multiple different input events, which ask the node to do different things. If you have multiple input events set up for your node, and you need to know which one was triggered, you can use the `FlowData` pointer that the engine passes to your trigger function. Its `FlowData::event_index` member gives you the zero-based index of the event that triggered the node's evaluation.

~~~{c}
	switch (fd->event_index)
	{
		case 0:
			// the first defined input event was triggered
			break;
		case 1:
			// the second defined input event was triggered
			break;
	}
~~~

### Work with data parameters

The engine gives your trigger function access to all of the node's input and output parameters through a `FlowParameters` object. The `FlowParameters` is a block of memory that contains a pointer or reference for each input parameter and each output parameter that you have set up for the node.

The type of object that the `FlowParameters` uses to represent each input or output parameter depends on the type of data you configure for that parameter in the node definition. For example, an input parameter that you set as a "unit" in the node definition comes through to the trigger function as a `const CApiUnitRef*`. For a table that lists the mapping between variable types in the node definition and in the `FlowParameters`, see the [Custom C Flow node description format](../../custom_flow/_read_me.htm).

Note that the `FlowParameters` does not contain any input or output *events* -- only data parameters.

A good way to get the parameter data from the `FlowParameters` is to define your own struct that matches your node's data description. It should contain a pointer to each of the node's input parameter types in order, followed by a reference to each of the output parameter types in order. Then, you can cast the `FlowParameters` input parameter to an instance of your struct, and access its members.

For example, the following code defines a struct that reads two input parameters and one output:

~~~{c}
	const struct NodeData {
		const float *scale;
		const Vector3 *size;
		Vector3 &scaled_size;
	} &node_data = (const NodeData&)*fp;

	node_data.scaled_size = (*node_data.size) * (*node_data.scale);
~~~

Note that the input parameters are `const`, but not the output parameters. The output parameters are automatically set up by the engine with whatever default values you set for them in the node definition. Your trigger function should update them with whatever new values you need to pass out, as shown above.

### Persistent node data

Your node can also use *dynamic* and *static* data parameters to keep track of additional data between evaluations. Like input and output parameters, you need to define these parameters in your node's description, and pull them out of the `FlowParameters` object in your trigger function.

Your trigger function can change the value of dynamic parameters, just like output parameters. If you do so, the new value will be passed in the `FlowParameters` the next time the engine evaluates your node.

### Trigger an output event

Often, you will want your custom nodes to emit an output event when its evaluation is done. This allows users working in Flow to follow your node with other downstream nodes.

To launch an output event from your node's trigger function, call the `FlowNodesApi::trigger_out_event()` function. You'll have to pass it the `FlowTriggerContext` and `FlowData` that the engine originally passed to your node's trigger function. You'll also have to pass the zero-based index of the output event that you want to trigger.

For example, if your node has two possible output events configured for it that may get called in different situations, you could do something like:

~~~{c}
if (/* some condition */)
{
	_flow_nodes_api->trigger_out_event(tc, fd, 0);
}
else
{
	_flow_nodes_api->trigger_out_event(tc, fd, 1);
}
~~~

## Register and unregister the trigger function

Registering your trigger function with the engine associates the function with the node definition. This tells the engine what function to call when the node gets evaluated in a Flow graph.

You register your function by calling `FlowNodesApi::setup_trigger_function()`. Pass it:

-	The name of your node. **NOTE**: This name **must** match the `name` field in the node's data description.

-	Your trigger function.

A good place to do this is in the `setup_game()` function. For example:

~~~{c}
static struct FlowNodesApi *_flow_nodes_api = 0;

static void setup_game(GetApiFunction get_engine_api)
{
	_flow_nodes_api = (FlowNodesApi *)get_engine_api(FLOW_NODES_API_ID);
	_flow_nodes_api->setup_trigger_function("my_custom_node", my_custom_trigger_function);
}
~~~

When your node no longer needs to be available in the editor -- typically when the game shuts down -- you should also unregister your node by calling `FlowNodesApi::unregister_trigger_function()` with the name of your node:

~~~{c}
static void shutdown_game()
{
	_flow_nodes_api->unregister_flow_node("my_custom_node");
}
~~~

## Define the node

You must define custom C Flow nodes in SJSON data files that have the *.flow_node_definitions* extension. These data files may exist anywhere in the project's resources folders, and they can be loaded in and out of memory when needed along with the other data files in the project, as long as they are loaded in memory in the engine when they are needed by a Flow graph.

You may find it convenient to set up a `resources` extension for your plug-in that will add your *.flow_node_definitions* files to the project automatically whenever your plug-in is loaded. For details, see ~{ Extend the Project Content }~.

You can have as many *.flow_node_definitions* files in a project as you like, so you can organize your node definitions in whatever way makes sense for your project or plug-in.

For a complete reference to the *.flow_node_definitions* file format, see [Custom Flow node description format](../../custom_flow/_read_me.htm).

>	**Note:** Each node must have a name that is unique among *all* nodes loaded into the engine, not just within the same *.flow_node_definitions* file.
