# Call out to C code from JavaScript

You can make your plug-in call out from the editor's JavaScript environment to run C code in a *.dll* file that you provide along with your plug-in. You define some functions in your C code, and use a set of APIs provided by the editor to expose those functions to the editor's JavaScript environment. When you invoke those functions from your plug-in's JavaScript code or from an action extension, your C function is automatically invoked.

This can be useful anytime you need the editing environment to be able to run native code. For example, you might need to call out to another application or library to do some processing; you might want to take advantage of operating system functions that aren't exposed through the editor's JavaScript services; or if you need to do some processing that is especially CPU-intensive, you might want to implement that in C rather than in JavaScript.

Unlike other editor extensions, you don't have to add anything into your *.plugin* file to set up a *.dll* extension. However, you do have to follow the instructions on this page to:

1.	Write your C code,

2.	Compile the code to a *.dll* file,

3.	Tell the editor in your plug-in's JavaScript when you want to load and unload the library,

4.	Call the exposed C functions from JavaScript.

## Synchronous vs Asynchronous

The functions that you register in your plug-in can run either synchronously or asynchronously in the JavaScript environment.

The editor uses the [Chromium Embedded Framework (CEF)](https://bitbucket.org/chromiumembedded/cef) to display HTML and run JavaScript inside its widgets. CEF runs multiple processes:

-	The main process, which handles window creation, painting and network access, is called the *browser* process.

-	Rendering and JavaScript execution occur in a separate process, called the *render* process.

Synchronous functions run in the render process, and are blocking calls. Asynchronous functions run in the browser process, and do not block the process. They return a JavaScript `Promise` that can be used to synchronize future operations. Asynchronous functions are especially useful when you interact with the user interface, like creating a new widget. For a bit more on using promises and asynchronous JavaScript, see ~{ Tips for developing plug-ins }~.

In order to register functions in either mode, your plug-in has to load your *.dll* using an editor API that is specific to that mode. You can load your extension using both modes at the same time, but each time the *.dll* will be loaded by a different process. There is currently no way for your plug-in to communicate between the two instances using the asynchronous and synchronous modes. That means that you'll probably find it better to choose either the synchronous or the asynchronous mode and stick with it for all the functions you register.

## Editor and plug-in interactions

The editor's C plug-in interface is based around a consistent pattern of interactions between the editor and the plug-in. All of these interactions are based on a shared set of API definitions. Each side queries the other to retrieve the APIs that the other side supports:

-	The editor first queries the plug-in for its API by calling a predetermined `get_editor_plugin_api` function. The plug-in provides the editor with a struct that contains pointers to whatever functions the plug-in implements from their shared plug-in API definition.

-	When the editor calls those functions defined by the plug-in, it passes along a `get_editor_api` function pointer of its own. The plug-in can call that function to query the editor in return, in order to retrieve APIs that expose editor services to the plug-in. The plug-in can then call functions in those returned APIs in order to make the editor perform the tasks it needs -- typically, to register a new function to the JavaScript environment.

The following image summarizes this workflow:

TODO: image

This overall pattern is very similar to the way the runtime engine interacts with plug-ins that extend its runtime capabilities. See ~{ Extend the Engine }~.

## Native extension Apis

In order to be loadable by the editor, your extension must expose one function that the editor uses to load it in synchronous mode or asynchronous mode : `__declspec(dllexport) void *get_editor_plugin_api(unsigned api)`. Here is what this function looks like in your `*.cpp` file :

~~~cpp
extern "C" {
__declspec(dllexport) void *get_editor_plugin_api(unsigned api)
{
    ...
}
}
~~~

This function is mandatory. Without it, your extension will never be loaded.

To know which mode to load, the `api` id is passed as a parameter. The possible api ids are defined as follow :

~~~cpp
/* Plugin API_IDs for the different services that a plugin can implement. */
enum EditorPluginApiID
{
	EDITOR_PLUGIN_SYNC_API_ID = 0,
	EDITOR_PLUGIN_ASYNC_API_ID
};
~~~

You can use them like this:

~~~cpp
#include <editor_plugin_api/editor_plugin_api.h>
...
extern "C" {
__declspec(dllexport) void *get_editor_plugin_api(unsigned api)
{
    if (api == EDITOR_PLUGIN_SYNC_API_ID) {
		...
	} else if (api == EDITOR_PLUGIN_ASYNC_API_ID) {
		...
	}
    ...
}
}
~~~

### EditorPluginSyncApi
To register functions in synchronous mode, your extension must implement the `EditorPluginSyncApi`, which is defined as :

~~~cpp
/* This function can be used by the plugin to query for editor API. */
typedef void *(*GetEditorApiFunction)(unsigned api);

struct EditorPluginSyncApi
{
	/* Called once the plugin has been loaded. */
	void (*plugin_loaded)(GetEditorApiFunction get_editor_api);

	/* Returns the name of the plugin. */
	const char *(*get_name)();

	/* Returns the version of the plugin. A version is a string of format 1.0.0.0 */
	const char *(*get_version)();

	/* Called when the plugins needs to be shutdown */
	void (*shutdown)(GetEditorApiFunction get_editor_api);
};
~~~

Here is an example extension that uses the `EditorPluginSyncApi` :
`editor_native_plugin.h`

~~~cpp
#pragma once

#include <editor_plugin_api/editor_plugin_api.h>

namespace PLUGIN_NAMESPACE
{
	class EditorTestPlugin
	{
	public:
		static void plugin_loaded(GetEditorApiFunction get_editor_api);
		static const char* get_name();
		static const char* get_version();
		static void shutdown(GetEditorApiFunction get_editor_api);
	};
}
~~~

`editor_native_plugin.cpp`

~~~cpp
#include "editor_native_plugin.h"
#include <cstdio>

namespace PLUGIN_NAMESPACE
{
	void EditorTestPlugin::plugin_loaded(GetEditorApiFunction get_editor_api)
	{
		...
	}

	const char* EditorTestPlugin::get_name()
	{
		return "Editor Native Plugin Test";
	}

	const char* EditorTestPlugin::get_version()
	{
		return "1.1.0.0";
	}

	void EditorTestPlugin::shutdown(GetEditorApiFunction get_editor_api)
	{
		...
	}
}

extern "C" {
__declspec(dllexport) void *get_editor_plugin_api(unsigned api)
{
	if (api == EDITOR_PLUGIN_SYNC_API_ID) {
		static struct EditorPluginSyncApi editor_api = {nullptr};
		editor_api.plugin_loaded = &PLUGIN_NAMESPACE::EditorTestPlugin::plugin_loaded;
		editor_api.get_name = &PLUGIN_NAMESPACE::EditorTestPlugin::get_name;
		editor_api.get_version= &PLUGIN_NAMESPACE::EditorTestPlugin::get_version;
		editor_api.shutdown = &PLUGIN_NAMESPACE::EditorTestPlugin::shutdown;
		return &editor_api;
	}

	return nullptr;
}
}

~~~

You can register your synchronous functions inside `plugin_loaded` and unregister functions inside `shutdown` using either the `EditorApi`, `EditorApi_V2` or `EditorApi_V3`, whichever you like :

~~~cpp
struct EditorApi
{
	typedef ConfigData* (*NativeFunctionHandler)(ConfigData **args, int num);

	/* Used to register a synchronous function that is executed on the render thread. Can be called using namespace.YOURFUNCTIONNAME(); */
	bool (*register_native_function)(const char *ns, const char *name, NativeFunctionHandler handler);

	/* Used to unregister a previously registered native function. */
	bool (*unregister_native_function)(const char *ns, const char *name);
};

struct EditorApi_V2
{
	typedef ConfigData* (*NativeFunctionHandler)(ConfigData **args, int num, GetEditorApiFunction get_editor_api);

	/* Used to register a synchronous function that is executed on the render thread. Can be called using namespace.YOURFUNCTIONNAME(); */
	bool (*register_native_function)(const char *ns, const char *name, NativeFunctionHandler handler);

	/* Used to unregister a previously registered native function. */
	bool (*unregister_native_function)(const char *ns, const char *name);
};

#if defined(__cplusplus) && defined(_FUNCTIONAL_)
struct EditorApi_V3
{
	typedef std::function<ConfigData*(ConfigData **, int)> NativeFunctionHandler;

	/* Used to register a synchronous function that is executed on the render thread. Can be called using namespace.YOURFUNCTIONNAME(); */
	bool (*register_native_function)(const char *ns, const char *name, NativeFunctionHandler handler);

	/* Used to unregister a previously registered native function. */
	bool (*unregister_native_function)(const char *ns, const char *name);
};
#endif
~~~

The difference between these apis is the handler that you can register. `V1` and `V2` handle C function pointers, whereas `V3` handles `std::function` so you can register lambda expression. Each api behave the same. `ns` is the namespace in which you wish to register your function, and `name` is the name of your function. You would then call your function with `window.namespace.name()` inside your javascript. By using your plugin name as namespace you can reduce the chance of registering a function that is already registered by another extension.

Here is an example (building upon the last one) where functions are registered inside `plugin_loaded` :
`editor_native_plugin.h`

~~~cpp
// Comment if you don't use functional
#include <functional>
// Include after <functional>
#include <editor_plugin_api/editor_plugin_api.h>
...
class EditorTestPlugin
{
public:
	...
    // Function to test arguments and result passing.
	static ConfigData* test(ConfigData **args, int num);
    // Test editor api v2
    static ConfigData* test_api_v2(ConfigData **args, int num, GetEditorApiFunction get_editor_api);
}
~~~

`editor_native_plugin.cpp`

~~~cpp
	...
	void EditorTestPlugin::plugin_loaded(GetEditorApiFunction get_editor_api)
	{
		auto api_v1 = static_cast<EditorApi*>(get_editor_api(EDITOR_API_ID));

		auto registered = api_v1->register_native_function("editorNativeTest", "test", &EditorTestPlugin::test);
		if (!registered) {
			printf("Error registering functions.");
		}

		// Test api v2
		auto api_v2 = static_cast<EditorApi_V2*>(get_editor_api(EDITOR_API_V2_ID));
		api_v2->register_native_function("editorNativeTest", "test_api_v2", &EditorTestPlugin::test_api_v2);

		// Test api v3
		auto api_v3 = static_cast<EditorApi_V3*>(get_editor_api(EDITOR_API_V3_ID));
		api_v3->register_native_function("editorNativeTest", "test_api_v3", [=](ConfigData** args, int num) -> ConfigData* {
			...
		});
	}

    // Every arguments are owned by the editor and will be destroyed when the function returns.
	// All data returned is now owned by the editor.
	ConfigData* EditorTestPlugin::test(ConfigData **args, int num)
	{
		...
	}

    ConfigData* EditorTestPlugin::test_api_v2(ConfigData** args, int num, GetEditorApiFunction get_editor_api)
	{
		...
	}

    void EditorTestPlugin::shutdown(GetEditorApiFunction get_editor_api)
	{
    	auto api_v1 = static_cast<EditorApi_V2*>(get_editor_api(EDITOR_API_ID));
		auto api_v2 = static_cast<EditorApi_V2*>(get_editor_api(EDITOR_API_V2_ID));
		auto api_v3 = static_cast<EditorApi_V3*>(get_editor_api(EDITOR_API_V3_ID));

		auto unregistered = api_v1->unregister_native_function("editorNativeTest", "test");
		unregistered = unregistered && api_v2->unregister_native_function("editorNativeTest", "test_api_v2");
		unregistered = unregistered && api_v3->unregister_native_function("editorNativeTest", "test_api_v3");
		if (!unregistered) {
			printf("Error unregistering functions.");
		}
	}
    ...
~~~

Here is an example showing how to load your extension and calling your functions from javascript :

~~~{js}
let path = 'path_to_your_dll'
let id = stingray.loadNativeExtension(path);
...
// blocking calls
let result = window.editorNativeTest.test(...);
window.editorNativeTest.test_api_v2();
window.editorNativeTest.test_api_v3();
...
stingray.unloadNativeExtension(id);
~~~

### EditorPluginAsyncApi
To register functions in asynchronous mode, your extension must implement the `EditorPluginAsyncApi`, which is defined as :

~~~cpp
struct EditorPluginAsyncApi
{
	/* Called once the plugin has been loaded. */
	void (*plugin_loaded)(GetEditorApiFunction get_editor_api);

	/* Returns the name of the plugin. */
	const char *(*get_name)();

	/* Returns the version of the plugin. A version is a string of format 1.0.0.0 */
	const char *(*get_version)();

	/* Called when the plugins needs to be shutdown */
	void (*shutdown)(GetEditorApiFunction get_editor_api);
};
~~~

Here is an example extension that uses the `EditorPluginAsyncApi` :
`editor_native_plugin.h`

~~~cpp
#pragma once

#include <editor_plugin_api/editor_plugin_api.h>

namespace PLUGIN_NAMESPACE
{
	class EditorTestPlugin
	{
	public:
		static void plugin_loaded_async(GetEditorApiFunction get_editor_api);
		static const char* get_name();
		static const char* get_version();
		static void shutdown_async(GetEditorApiFunction get_editor_api);
	};
}
~~~

`editor_native_plugin.cpp`

~~~cpp
#include "editor_native_plugin.h"
#include <cstdio>

namespace PLUGIN_NAMESPACE
{
	void EditorTestPlugin::plugin_loaded_async(GetEditorApiFunction get_editor_api)
	{
		...
	}

	const char* EditorTestPlugin::get_name()
	{
		return "Editor Native Plugin Test";
	}

	const char* EditorTestPlugin::get_version()
	{
		return "1.1.0.0";
	}

	void EditorTestPlugin::shutdown_async(GetEditorApiFunction get_editor_api)
	{
		...
	}
}

extern "C" {
__declspec(dllexport) void *get_editor_plugin_api(unsigned api)
{
	if (api == EDITOR_PLUGIN_ASYNC_API_ID) {
		static struct EditorPluginAsyncApi editor_api = {nullptr};
		editor_api.plugin_loaded = &PLUGIN_NAMESPACE::EditorTestPlugin::plugin_loaded_async;
		editor_api.get_name = &PLUGIN_NAMESPACE::EditorTestPlugin::get_name;
		editor_api.get_version= &PLUGIN_NAMESPACE::EditorTestPlugin::get_version;
		editor_api.shutdown = &PLUGIN_NAMESPACE::EditorTestPlugin::shutdown_async;
		return &editor_api;
	}

	return nullptr;
}
}

~~~

Like with the synchronous version, you register your functions inside `plugin_loaded_async` and unregister them in `shutdown_async`. You can use the `EditorAsyncApi` to do so :

~~~cpp
struct EditorAsyncApi
{
	typedef ConfigData* (*AsyncFunctionHandler)(ConfigData **args, int num, GetEditorApiFunction get_editor_api);

	/* Used to register an asynchronous function that is executed on the browser thread. Can be called using stingray.hostExecute('your-function-name', ...); */
	bool (*register_async_function)(const char *name, AsyncFunctionHandler handler);

	/* Used to unregister a previously registered async function. */
	bool (*unregister_async_function)(const char *name);

	/* Used to register an asynchronous function that is executed on the gui thread. Can be called using stingray.hostExecute('your-function-name', ...); */
	bool (*register_async_gui_function)(const char *name, AsyncFunctionHandler handler);

	/* Used to unregister a previously registered async gui function. */
	bool (*unregister_async_gui_function)(const char *name);
};
~~~

For async functions, things are a little different. First, you can only register a with a name because of the way the functions are called. But you can merge your namespace and name into a string like `"namespace.name"`. Secondly, you can register normal async functions that are executed in the browser process, or you can register functions to be executed specifically in Qt's gui thread, if you wish to do some gui stuff.

Here is an example where functions are registered inside `plugin_loaded_async` :
`editor_native_plugin.h`

~~~cpp
#include <editor_plugin_api/editor_plugin_api.h>
...
class EditorTestPlugin
{
public:
	...
    // Test async api
    static ConfigData* test_async_api(ConfigData **args, int num, GetEditorApiFunction get_editor_api);
}
~~~

`editor_native_plugin.cpp`

~~~cpp
	...
	void EditorTestPlugin::plugin_loaded_async(GetEditorApiFunction get_editor_api)
	{
		auto async_api = static_cast<EditorAsyncApi*>(get_editor_api(EDITOR_ASYNC_API_ID));
		async_api->register_async_function("test_async", &EditorTestPlugin::test_async_api);
	}

    ConfigData* EditorTestPlugin::test_async_api(ConfigData** args, int num, GetEditorApiFunction get_editor_api)
	{
		...
	}

    void EditorTestPlugin::shutdown_async(GetEditorApiFunction get_editor_api)
	{
		auto async_api = static_cast<EditorAsyncApi*>(get_editor_api(EDITOR_ASYNC_API_ID));
		async_api->unregister_async_function("test_async");
	}
    ...
~~~

Here is an example showing how to load your extension and calling your functions from javascript :

~~~{js}
let path = 'path_to_your_dll'
let pluginAsyncId = null;
stingray.loadAsyncExtension(path).then(function (id) {
    console.warn('Loaded async plugin ' + id);
    pluginAsyncId = id;
}).then(function () {
	return stingray.hostExecute('test_async');
}).then(function (result) {
	...
});
...
stingray.unloadAsyncExtension(pluginAsyncId).then(function () {
    console.warn('Plugin ' + pluginAsyncId + ' unloaded!');
    pluginAsyncId = null;
});
~~~

### ConfigDataApi
To communicate arguments and result values between javascript and the native extension, we use `ConfigData`, a `JSON` like structure that holds basic `JSON` values. To read and write `ConfigData`, we have an api called `ConfigDataApi`, which is defined as follow :

~~~cpp
struct ConfigData;

enum {
	CD_TYPE_NULL, CD_TYPE_FALSE, CD_TYPE_TRUE, CD_TYPE_NUMBER, CD_TYPE_STRING,
	CD_TYPE_ARRAY, CD_TYPE_OBJECT, CD_TYPE_UNDEFINED, CD_TYPE_HANDLE
};

typedef int cd_loc;
typedef void * (*cd_realloc) (void *ud, void *ptr, int osize, int nsize, const char *file, int line);
typedef void (*cd_handle_dealloc)(void *handle);

struct ConfigDataApi
{
	struct ConfigData *(*make)(cd_realloc realloc, void *ud, int config_size, int stringtable_size);
	void (*free)(struct ConfigData *cd);

	cd_loc (*root)(struct ConfigData *cd);
	int (*type)(struct ConfigData *cd, cd_loc loc);
	double (*to_number)(struct ConfigData *cd, cd_loc loc);
	const char *(*to_string)(struct ConfigData *cd, cd_loc loc);
	void *(*to_handle)(struct ConfigData *cd, cd_loc);
	cd_handle_dealloc (*to_handle_deallocator)(struct ConfigData *cd, cd_loc loc);

	int (*array_size)(struct ConfigData *cd, cd_loc arr);
	cd_loc (*array_item)(struct ConfigData *cd, cd_loc arr, int i);

	int (*object_size)(struct ConfigData *cd, cd_loc object);
	cd_loc (*object_keyloc)(struct ConfigData *cd, cd_loc object, int i);
	const char *(*object_key)(struct ConfigData *cd, cd_loc object, int i);
	cd_loc (*object_value)(struct ConfigData *cd, cd_loc object, int i);
	cd_loc (*object_lookup)(struct ConfigData *cd, cd_loc object, const char *key);

	cd_loc (*null)();
	cd_loc (*undefined)();
	cd_loc (*false_value)();
	cd_loc (*true_value)();
	cd_loc (*add_number)(struct ConfigData **cd, double n);
	cd_loc (*add_string)(struct ConfigData **cd, const char *s);
	cd_loc (*add_handle)(struct ConfigData **cd, void *handle, cd_handle_dealloc deallocator);
	cd_loc (*add_array)(struct ConfigData **cd, int size);
	cd_loc (*add_object)(struct ConfigData **cd, int size);
	void (*set_root)(struct ConfigData *cd, cd_loc root);

	void (*push)(struct ConfigData **cd, cd_loc array, cd_loc item);
	void (*set)(struct ConfigData **cd, cd_loc object, const char *key, cd_loc value);
	void (*set_loc)(struct ConfigData **cd, cd_loc object, cd_loc key, cd_loc value);

	cd_realloc (*allocator)(struct ConfigData *cd, void **user_data);
};
~~~

`ConfigData` supports these different types :

 - `CD_TYPE_NULL` : represents a `null` value.
 - `CD_TYPE_UNDEFINED` : represents an `undefined` value.
 - `CD_TYPE_FALSE` : represents a `false` value.
 - `CD_TYPE_TRUE` : represents a `true` value.
 - `CD_TYPE_NUMBER` : represents a `number` value, converted to double.
 - `CD_TYPE_STRING` : represents a `string` value.
 - `CD_TYPE_ARRAY` : represents an `array` of any of the supported types.
 - `CD_TYPE_OBJECT` : represents an `object` containing any of the supported types.
 - `CD_TYPE_HANDLE` : represents a user defined `handle` to a resource that lives only inside your extension. This handle should not be accessed or modified in your javascript. It is only useful if you wish to pass a resource handle between functions. The function to add a handle to a `ConfigData` also supports a deallocator, which is called when the javascript object that holds the handle is deallocated. **Warning**: This is only supported in synchronous mode.

To create a `ConfigData`, you have to pass your own allocator function. This makes sure that wherever it is deleted, it is always done with the same resource allocator. Here is an example of a simple allocator function :

~~~cpp
void *EditorTestPlugin::config_data_reallocator(void *ud, void *ptr, int osize, int nsize, const char *file, int line)
{
    if (nsize == 0) {
        free(ptr);
        return nullptr;
    }
    auto *nptr = realloc(ptr, nsize);
    return nptr;
}
~~~

When using the different functions inside the api, `cd_loc` represents the location of the object that you are either reading or writing.

When in synchronous mode, the parameters you pass to your functions are directly related to the `ConfigData` you receive, meaning that if you pass 3 parameters to your function, you will receive 3 `ConfigData`. However, when you are in asynchronous mode, you will always get one `ConfigData` which contains your arguments formatted depending on what you passed to `hostExecute`. Please refer to `stingray.hostExecute` to see what kind of payload you will receive.

Here is the complete function `test` that copies what it receives and sends it back as result :

~~~cpp
cd_loc EditorTestPlugin::copy_config_data_value(ConfigData *orig_cd, cd_loc orig_loc, ConfigData *new_cd)
{
	\\ Assume _cd_api is a member of EditorTestPlugin and refers to ConfigDataApi
    auto type = _cd_api->type(orig_cd, orig_loc);
    switch(type) {
    case CD_TYPE_NULL: return _cd_api->null();
    case CD_TYPE_UNDEFINED: return _cd_api->undefined();
    case CD_TYPE_FALSE: return _cd_api->false_value();
    case CD_TYPE_TRUE: return _cd_api->true_value();
    case CD_TYPE_NUMBER: return _cd_api->add_number(&new_cd, _cd_api->to_number(orig_cd, orig_loc));
    case CD_TYPE_STRING: return _cd_api->add_string(&new_cd, _cd_api->to_string(orig_cd, orig_loc));
    case CD_TYPE_ARRAY: {
        auto length = _cd_api->array_size(orig_cd, orig_loc);
        auto new_arr_loc = _cd_api->add_array(&new_cd, length);
        for (auto i = 0; i < length; ++i) {
            auto array_item_loc = _cd_api->array_item(orig_cd, orig_loc, i);
            _cd_api->push(&new_cd, new_arr_loc, copy_config_data_value(orig_cd, array_item_loc, new_cd));
        }
        return new_arr_loc;
    }
    case CD_TYPE_OBJECT: {
        auto size = _cd_api->object_size(orig_cd, orig_loc);
        auto new_object_loc = _cd_api->add_object(&new_cd, size);
        for (auto i = 0; i < size; ++i) {
            auto object_item_key = _cd_api->object_key(orig_cd, orig_loc, i);
            auto object_item_value = _cd_api->object_value(orig_cd, orig_loc, i);
            _cd_api->set(&new_cd, new_object_loc, object_item_key, copy_config_data_value(orig_cd, object_item_value, new_cd));
        }
        return new_object_loc;
    }
    default: return -1;
    }
}

// Every arguments are owned by the editor and will be destroyed when the function returns.
// All data returned is now owned by the editor.
ConfigData* EditorTestPlugin::test(ConfigData **args, int num)
{
    if (num == 0)
        return nullptr;

	\\ Assume _cd_api is a member of EditorTestPlugin and refers to ConfigDataApi
    auto cd = _cd_api->make(config_data_reallocator, nullptr, 0, 0);
    auto arr = _cd_api->add_array(&cd, num);
    _cd_api->set_root(cd, arr);

    for (auto i = 0; i < num; ++i) {
        auto argument = args[i];
        auto copy = copy_config_data_value(argument, _cd_api->root(argument), cd);
        _cd_api->push(&cd, arr, copy);
    }

    return cd;
}
~~~

### EditorLoggingApi
The `EditorLoggingApi` can be used to log information into the log console. The api is defined as follow :

~~~cpp
struct EditorLoggingApi
{
	/* Used to print only in the dev tools console. */
	void (*debug)(const char *message);

	/* Used to print an information in the stingray console. */
	void (*info)(const char *message);

	/* Used to print a warning in the stingray console. */
	void (*warning)(const char *message);

	/* Used to print an error in the stingray console. */
	void (*error)(const char *message);
};
~~~

Here is an example using the logging api :

~~~cpp
ConfigData* EditorTestPlugin::test_logging(ConfigData** args, int num)
{
    _logging_api->debug("Should print this in the dev tools only.");
    _logging_api->info("Should print this info");
    _logging_api->warning("Should print this warning");
    _logging_api->error("Should print this error");

    try {
        throw std::exception("Test catch exception");
    }
    catch (std::exception err) {
        _logging_api->error(err.what());
    }

    return nullptr;
}
~~~

### EditorEvalApi
The `EditorEvalApi` can be used to execute javascript code inside you extension. The code is executed in the current global context. The `EditorEvalApi` is defined as :

~~~cpp
struct EditorEvalApi
{
	/* Used to evaluate a javascript code in the global context. `return_value` and `exception` are optional.
	 * If an exception is thrown and `exception` is not null, it will be populated with an object
	 * {'message': exception_message}.
	 */
	bool (*eval)(const char *js_code, ConfigData *return_value, ConfigData *exception);
};
~~~

Here is an example that uses the `EditorEvalApi` :

~~~cpp
ConfigData* EditorTestPlugin::test_eval(ConfigData** args, int num)
{
    auto retval = _cd_api->make(config_data_reallocator, nullptr, 0, 0);
    auto exception = _cd_api->make(config_data_reallocator, nullptr, 0, 0);
    auto success = _eval_api->eval("console.warn('Should print this warning in the console');", retval, exception);
    if (!success) {
        auto message = _cd_api->to_string(exception, _cd_api->object_value(exception, _cd_api->root(exception), 0));
        _logging_api->error(message);
    }

    success = _eval_api->eval("throw new Error('Hello Error!');", retval, exception);
    if (success) {
        _logging_api->error("Should have thrown an error");
    } else {
        auto message = _cd_api->to_string(exception, _cd_api->object_value(exception, _cd_api->root(exception), 0));
        _logging_api->warning("Successfully generated an exception");
        _logging_api->warning(message);
    }

    _cd_api->free(retval);
    _cd_api->free(exception);
    return nullptr;
}
~~~

For a complete working example using all these apis, you can refer to the example native extension in **$stingray_install_dir\editor\plugin_tests\editor_native_code\**.
