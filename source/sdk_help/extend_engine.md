# Extend the Engine

You can write plug-ins that add new features to the runtime Stingray game engine, expose new objects and functions in the Lua gameplay API, integrate with external middleware SDKs or other libraries, etc. You could even write your gameplay code entirely in C rather than using Flow and Lua, if you are comfortable doing so.

This section provides some tips on getting started extending the engine with your own plug-ins.

## More resources

-	The most important resource for working on engine plug-ins is the repository of example plug-ins. If you don't already have these examples, see ~{ Example Plug-ins }~.

	Start by looking at the `samples/simple_plugin` example. It's a very minimal plug-in that shows the basic skeleton of an interaction between the engine and a plug-in, like the one described in the following sections.

	Then move on to the `samples/bigger_plugin`, which shows how you can create a new resource type, define how that resource gets compiled into runtime data, and set up Lua functions for the project to access the data in that resource at runtime.

-	You'll need the SDK header files. You can find them under `stingray_sdk` in the example repository, or under `plugin_sdk` in your Stingray installation folder.

-	The [reference documentation](engine_c/index.html) contains a browsable companion to the APIs defined in the SDK header files.

## Engine and plug-in interactions

The engine's plug-in interface is based around a consistent pattern of interactions between the engine and the plug-in. All of these interactions are based on a shared set of API definitions. Each side queries the other to retrieve the APIs that the other side supports:

-	The engine first queries the plug-in for its API by calling a predetermined `get_plugin_api` function. The plug-in provides the engine with a struct that contains pointers to whatever functions the plug-in implements from their shared plug-in API definition.

-	When the engine calls those functions defined by the plug-in, it passes along a `get_engine_api` function pointer of its own. The plug-in can call that function to query the engine in return, in order to retrieve APIs that expose engine services to the plug-in. The plug-in can then call functions in those returned APIs in order to make the engine perform the tasks it needs.

The following image summarizes this workflow:

![plug-in workflow](images/engine_plugin_interaction.png)


## Getting started

These are the basic steps for getting a plug-in to integrate with the runtime engine. All of the example plug-ins do these things, so look in their code for illustrations.

1.	Include the `plugin_api.h` file.

	~~~{cpp}
	#include "engine_plugin_api/plugin_api.h"
	~~~

	When the engine and the plug-in call each other as shown in the diagram above, they use a shared set of IDs to identify the APIs that they are requesting. Each ID always corresponds to a particular struct, defined in the `plugin_api.h` file. So both the engine and the plug-in need to include this file in order to make sure that the identifiers and API definitions match.

1.	Define a function with the following signature:

	~~~{cpp}
	__declspec(dllexport) void *get_plugin_api(unsigned api_id)
	~~~

	The plug-in interface uses C rather than C++, to avoid [ABI incompatibilities](https://en.wikipedia.org/wiki/Application_binary_interface) between different versions of C++ and different compilers. If you want to compile your plug-in using C++, you can wrap your `get_plugin_api` function in an `extern C` block, like this:

	~~~{cpp}
	extern "C" {
		__declspec(dllexport) void *get_plugin_api(unsigned api)
		{
			...
		}
	}
	~~~

	This avoids the function name becoming mangled in the compiled *.dll*.

1.	Each time the engine calls your plug-in's `get_plugin_api` function, it passes a `PluginApiId` that identifies an interface it wants your plug-in to provide. If you want your plug-in to support the requested interface, your implementation of `get_plugin_api` should respond by creating a new instance of the struct that matches that requested API. For each function in that interface that you want your plug-in to support, you should set the pointer for that function in your instance to a function that you write in your plug-in. Once you've set up all the functions you want to support, return the struct.

	The main plug-in API that you'll want to handle is identified by the `PLUGIN_API_ID`, which identifies the `PluginApi` struct. This example responds to the engine sending a `PLUGIN_API_ID` by setting up a `PluginApi` struct with a pointer to a custom implementation for the `setup_game()` function:

	~~~{cpp}
	__declspec(dllexport) void *get_plugin_api(unsigned api_id)
	{
		if (api_id == PLUGIN_API_ID) {
			static struct PluginApi api = {0};
			api.setup_game = setup_game;
			return &api;
		}
		return 0;
	}
	~~~

	The engine converts the returned pointer into a pointer to the corresponding `PluginApi` struct. It then uses that struct to call the functions you've defined.

	There are some other plug-in APIs that the engine requests (the `RENDER_CALLBACKS_PLUGIN_API_ID` for example), and we may add more in future.

1.	So far, you've set up the engine to call out to your plug-in at specific moments in its lifespan. But usually, you'll want the interaction to go both ways: you'll want your plug-in code to call out to the engine in order to ask the engine to do something for you -- to load a world, spawn a unit, compile a resource, render some data, etc.

	The typical pattern is for your plug-in to call a `get_engine_api` function provided by the engine in order to request any service APIs it needs from the engine. In each call, you pass a value from the `PluginApiId` enumeration to tell the engine which interface you want. Then, your plug-in can cache the returned struct in a variable, and use it anytime to carry out operations in the engine.

	For example, the simple plug-in uses this implementation of the `setup_game` function to request the `LuaApi` interface from the engine. It can then use any of the functions defined in that interface to interact with the engine's Lua environment -- in this case, exposing a new function that could be called by a project's Lua scripts as `stingray.SimplePlugin.test()`.

	~~~{cpp}
	struct LuaApi *_lua;
	static void setup_game(GetApiFunction get_engine_api)
	{
		_lua = get_engine_api(LUA_API_ID);
		_lua->add_module_function("SimplePlugin", "test", test);
	}
	~~~

1.	Compile your plug-in to a *.dll* file.

	This can be tricky if you're not used to developing in C. We really recommend starting from the example plug-ins, which are all set up with their own Visual Studio projects.

	You must target the `x64` platform. Also, dynamically linked plug-ins are currently supported only on Windows; see ~{ Alpha SDK Limitations }~.

Once you have this basic level of integration set up between the engine and your plug-in, you can take it farther by exploring what other functions you can implement from the main `PluginApi` interface, and what other service APIs the engine provides for plug-ins. See ~{ Useful engine plug-in interfaces }~.
