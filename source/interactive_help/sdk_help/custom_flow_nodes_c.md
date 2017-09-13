# Create Custom Flow Nodes

{{ProductName}} comes with a visual programming system for creating your gameplay code, called Flow. This system is ideally suited for quickly prototyping interactive behaviors for your project. It's complete enough for users to build entire projects without writing any actual code at all, since it offers hundreds of built-in nodes that you can use to detect events in the runtime project and carry out actions in response.

You can also extend the possibilities of Flow by creating your own custom nodes. When your custom node gets evaluated at runtime, the engine calls a function that you define in either C or Lua to carry out whatever custom calculations you need.

Custom Flow nodes make new features easily usable by less technical level designers and visual artists who are working on designing scenes and gameplay interactions. This may mean exposing new code that you've added in your project or plug-in, or it may be existing features offered by the engine's Lua or C interfaces that just haven't yet been made available through the built-in Flow nodes.

## Do I choose C or Lua?

Lua is a great choice for implementing your Flow nodes because:

-	You don't need to make a plug-in for your nodes. You can include custom Lua node definitions and implementations entirely within a project's content folder.

-	It's typically easier to write Lua than C. You don't have to worry about typing, compiling, memory management, etc.

-	Your Lua code runs within the engine's runtime Lua environment, so it has access to everything exposed in the Lua APIs *and* in your project's gameplay Lua code. Unless your node is really exposing new features that you've added elsewhere in an engine plug-in, this is probably all you need in order to implement your node.

C is a great choice because:

-	You are able to do things from C that you can't do from Lua, like call out to other libraries, invoke other functions in your own engine plug-in, or use engine API functions that aren't exposed to Lua.

-	You may be able to get better performance than running equivalent code in Lua.

-	You can extend the types of input and output connections offered by the Flow system to use your own custom data types.

-	Flow node definitions for C nodes offer more configuration options than for Lua nodes. For example, you can set certain inputs as being required, you have some control over the UI offered for browsing input values, etc.

## Getting started

Regardless of which language you choose, the basic principles are the same: you need to provide an SJSON node definition that defines the characteristics of the node, and you need to provide the engine with the code that should be run when the node is triggered in a project's Flow graphs at runtime. However, the description and implementation are different depending on which language you choose:

-	For details on how to set up Flow nodes in Lua, see ~{ Create custom Flow nodes in Lua }~.

-	For details on how to set up Flow nodes in C, see ~{ Create custom Flow nodes in C }~.
