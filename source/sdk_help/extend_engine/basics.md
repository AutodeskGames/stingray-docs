# Plug-in basics

Plug-ins must be built for the x64 platform and are currently only supported on Windows  (unless you have source access).

The plug-in interface uses C rather than C++ (to avoid C++ ABI incompatibilities). It is based on a single function that the plugin must export:

```cpp
__declspec(dllexport) void *get_plugin_api(unsigned api_id)
```

Alternatively if you still do compile your plugin in C++, make sure to enclose the get_plugin_api in an extern "C" scope.

## Dynamic linking

On platforms that support dynamic linking, you can distribute your engine plug-ins as DLLs.

Place the DLL file for your plug-in inside the _engine\win64\plugins_ folder. The engine will automatically call the `get_plugin_api()` function defined in your DLL at startup.

## Static linking

On platforms without dynamic linking, engine plug-ins must be statically linked with the engine executable. This involves adding a call to your plug-in from the Stingray engine source code, and re-building the engine. If you link your plugins statically, you must provide a unique function name for each plugin (otherwise you will get name collisions), so typically the code will look something like:

```cpp
#ifdef STATIC_LINKING
	void *get_my_plugin_api(unsigned api_id)
#else
	__declspec(dllexport) void *get_plugin_api(unsigned api_id)
#endif
```

When you are using static linking you must also explicitly initialize the plugin in the engine's `main.cpp` file for your target platform:

```cpp
	extern "C" {void *get_my_plugin_api(unsigned api_id);}
	...
	plugin_manager::add_static_plugin(get_my_plugin_api);
```

You should see some similar lines in `main.cpp` for the plug-ins that ship with Stingray.

## Implementing the plug-in API

When the engine calls your `get_plugin_api()` function, it passes an unsigned *api_id* parameter. This *api_id* parameter is an identifier that uniquely refers to a particular version of the plug-in API expected by Stingray. If your plug-in supports the requested API, it should return a pointer to a struct that contains function pointers to C functions defined in your plugin that implement the functions of that API. If your plug-in does not support the API identified by the *api_id* parameter, the function should return a null pointer.

For example, this code tests for the `PLUGIN_API_ID` identifier, which refers to the `PluginApi` struct defined in `plugin_api.h`. It sets up a `PluginApi` struct with a pointer to a custom implementation of the `setup_game()` function:

```cpp
__declspec(dllexport) void *get_plugin_api(unsigned api_id)
{
	if (api_id == PLUGIN_API_ID) {
		static struct PluginApi api = {0};
		api.setup_game = setup_game;
		return &api;
	}
	return 0;
}
```

The engine converts the returned pointer into a pointer to the corresponding `PluginApi` struct. It will then use that struct to call plug-in functions.

### Common plug-in API functions

Functions that you implement from the plug-in API are automatically called by the engine at specific points in the lifetime of the game application. All plug-ins will implement at least some of the functions defined in the engine's `PluginApi` struct, so that they can be invoked at those times.

For example, you may want to get started with these functions:

`void *setup_game(GetApiFunction get_engine_api)`

> This function is called by the engine when the engine is booted. At this point, the plug-in can install script commands, add callbacks, etc.
>
> To do this, the plug-in calls the `get_engine_api` function that is passed by the engine in the `setup_game()` function call. This function works exactly the same way as `get_plugin_api()`, except the other way around. The plug-in calls it to get access to structs that represent various engine APIs, which it can then call in order to get the engine to perform particular actions.
>
> For example, to make a new Lua function available in the runtime gameplay API, the plug-in can implement this function as follows:
>
> ```cpp
> static void setup_game(GetApiFunction get_engine_api)
> 	struct LuaApi *_lua = get_engine_api(LUA_API_ID);
> 	_lua->add_module_function("MyPlugin", "test", lua_test);
> }
> ```
>
> You can invoke this new function by calling `stingray.MyPlugin.test()` in the Lua gameplay code for your game project.
>
> The engine defines several independent APIs that cover different functional areas: the Lua gameplay interface, resource management, compilation, rendering callbacks, etc. See the `plugin_api.h` file for declarations and descriptions.

`void *shutdown_game()`

> This function is called by the engine when the engine is shut down. It can be used by the plug-in to tear down things that were set up in the `setup_game()` call.

Your plug-in can also implement any other additional functions of the `PluginApi` struct that you need.
