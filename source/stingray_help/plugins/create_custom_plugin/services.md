# Use built-in editor services

The Stingray editor includes several JavaScript *services* that provide helpful functions for interacting with project data, the Stingray engine, the operating system, etc. Most of the standard features built in to the Stingray editor rely on these services to carry out the editing tasks requested by the user in the UI. You can also take advantage of these same services in your custom plug-in.

## Standard services

You'll find all the editor's standard services in the JavaScript modules under *editor/core/js/services*. For example, a few that you may find particularly useful:

-	The *asset-service* offers functions for managing assets, including saving, moving, renaming, handling dependencies, etc.

-	The *engine-service* helps you interact directly with instances of the Stingray engine: both the one that the editor runs internally, and any other remotely connected engines. For example, you can use the `sendToEditors()` function to send Lua scripts to be run in the engine's Lua environment, request resource compilation, receive events, etc.

-	The *file-system-service* helps you interact with the local file system where your project is mounted. You can list files, read and write SJSON data, check that paths exist, etc.

-	The *host-service* interacts with the operating system to provide support for the clipboard, and standard windows for things like opening and saving files.

-	The *settings-service* reads and writes data in the user's Stingray settings. If you need to persist some information between sessions, such as user preferences, you can use this service to save and retrieve that data.

There are dozens more. We're working on putting together a complete reference to all of the functions exposed by these services. In the meantime, the best way to find out what functions you can use in your plug-in is to browse the source code files.

## To use a service

In order to use a service in your plug-in's JavaScript code, you need to "include" the service's JavaScript module. You can do this either with in a call to the `require` function, or in the `define` call that you use to define a module of your own.

For example, in the following custom action, we use a call to `require`. The first parameter to `require` includes the host service module -- the JavaScript file in which it is defined. The second parameter is a function that is immediately executed. Inside this function, the host service is accessible by a name that you assign it in the function's parameters. This is a handy way of making JavaScript resources available within a small, defined block of code such as the ones you might find in a plug-in action extension:

~~~{sjson}
extensions = {
	actions = [
		{
			name = "launch-website"
		    type = "js"
			script = """
				require(['services/host-service'], function (hostService) {
		            hostService.openUrl("http://www.stingrayengine.com");
				});
			"""
		}
	]
}
~~~

If you are defining your own JavaScript module -- for example, in a *.js* file that accompanies a custom panel -- you can include the service's module in your module's `define` call in exactly the same way as the `require` call above. The service then becomes available by name anywhere within the scope of your module. So you can call it within any functions you create in that module, as in the example below.

~~~{js}
define(['services/host-service'], function (hostService) {
    "use strict";

	var exports = {}

	exports.openMyFavoriteUrl = function() {
		hostService.openUrl("http://www.stingrayengine.com")
	}

	return exports;
});
~~~

Note that most of the functions provided by editor services are *asynchronous*. If you need to use the return value from a function call, you'll need to use the `then()` method to make sure that your next code gets evaluated after the first function has completed. For more, see ~{ Tips for developing plug-ins }~.

---
Tags:
-	plugin
-	plug-in
---
