# Register a custom service

You can use the `services` extension to register new JavaScript services for the Stingray editor.

These services are instantiated once, and are available as "web workers" throughout the whole Stingray session. You can then invoke the APIs of your custom JavaScript services from elsewhere in your plug-in -- or even from other plug-ins! -- exactly the same way you call functions in the JavaScript services that are built in to the Stingray editor. (See also ~{ Use built-in editor services }~ for more on how to use services.)

For example, you could call your custom service's API functions from a custom menu action, or from a JavaScript module associated with a custom panel. This can be useful if you have multiple panels that need to share some state information, since a single instance of the service is shared by all panels that require it.

## Configuration

Each service extension requires the following configuration parameters.

~~~{sjson}
extensions = {
	services = [
		{
		    name = "my-custom-service"
			module = "my-module-file.js"
			api = [
				"get_greeting"
				"print_message"
			]
		}
	]
}
~~~

`name`

>	The name of your service module, as it should appear in `require` and `define` calls.

`module`

>	A JavaScript module that contains the API functions listed by the `api` key. The path is relative to the location of your *.stingray_plugin* file.

`api`

>	This array should list the names of all functions that are exposed by your service's `module` file. When the editor creates and registers the new service, it exposes each of these functions through an asynchronous API on the new service.

## Example

The following JavaScript block, if saved into a file named *my-module-file.js*, implements the API described in the configuration above.

Note that the names of the functions that are exposed on the module below match the names defined in the `api` key in the definition of the service extension above.

~~~{js}
define([], function () {
    "use strict";

    function MyService() {

        this.get_greeting = function () {
            return "Hello world!";
        };

		this.alert_message = function (message) {
            alert(message);
        };

    };

    return new MyService();
});
~~~

Once your service is registered and its API functions declared, you can access those functions by requiring your new service inside another JavaScript module or action. For example, the following snippet configures a new menu item, whose triggered action calls out to the API of the custom service.

~~~{sjson}
extensions = {
	menus = [
		{
		    path = "Window/Print info"
			action = {
				type = "js"
				script = """
					require(['services/my-custom-service'], function (myCustomService) {
						myCustomService.get_greeting().then(function(greeting) { console.warn(greeting); }).
							then( function() { myCustomService.print_message("it's a fine day.") } )
					});
				"""
			}
		}
	]
}
~~~

Things to note:

-	The `module` setting in the configuration points to the actual JavaScript file that contains the API functions that the editor exposes for your service.

-	However, when you refer to your service in a `require` or `define` call as in the block above, you use the `name` setting prefaced by `services/`.

-	The functions in your service are automatically wrapped in an asynchronous API. Even if your functions are simple and straightforward synchronous code, when you invoke them through the service their return values will be automatically wrapped inside promises. You therefore have to be prepared to access them asynchronously, like the built-in Stingray services. The example above uses `then()` to chain together multiple calls so that they are guaranteed to happen in order. See also ~{ Use built-in editor services }~ and ~{ Tips for developing plug-ins }~.

-	Your service runs in a self-contained windowless context. This means that your API functions do not have direct access to a window or document unless you pass this information in.

---
Tags:
-	plugin
-	plug-in
---
