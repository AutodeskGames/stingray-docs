# Register an action

You can use the `actions` extension to define named commands or script blocks, which you trigger from other extensions in your plug-in.

By themselves, the actions that you set up in the `actions` extension don't do anything. You have to set up your plug-in to invoke these commands in response to the user interacting with your plug-in. For example, you can:

-	set up a menu item to trigger the action when the user selects it. See ~{ Create a new menu item }~.
-	set up a custom asset type to trigger the action when the user double-clicks that asset in the **Asset Browser**.  See ~{ Register a custom asset type }~.
-	set up a custom asset template to trigger the action when the user creates a new asset of that type. See ~{ Define templates for new assets }~.
-	set up the plug-in to run the action when a specific *event* happens in the editor. See ~{ Respond to an editor event }~.

## Named actions vs. inline actions

You can define and call actions in two different ways:

-	You can define an action in the `actions` extension, and give it a unique name. Then, you can invoke that action from other extensions in your plug-in by referring to it by name. For example, this configuration sets up an action with the name `print_message`, and calls that action when the user selects a new menu item added by the plug-in:

	~~~{sjson}
	extensions = {
		actions = [
			{
				name = "print_message"
				type = "js"
				script = """
					console.warn("Hello world!")
				"""
			}
		]
		menus = [
			{
				path = "Window/Print message"
				action = "print_message"
			}
		]
	}
	~~~

	This approach keeps all your actions in one place, so it may be useful in order to keep your configuration tidier. It also helps to avoid duplication if you need to refer to the same action from multiple different extensions.

-	You can define an action inline inside the definition of another extension. For example, this configuration is exactly the same as the one above, except that it defines its action inside the definition of the menu item that calls it. Note that in this case, no `actions` section is needed at all, and the action does not need a `name`:

	~~~{sjson}
	extensions = {
		menus = [
			{
				path = "Window/Print message"
				action = {
					type = "js"
					script = """
						console.warn("Hello world!")
					"""
				}
			}
		]
	}
	~~~

## Single or multiple actions

Wherever you can set an action in your *.plugin* file, you can use an array of multiple actions instead. Each of the actions in the array can be either named or defined inline (see above) -- you can mix and match within the array if it's convenient for you.

~~~{sjson}
extensions = {
	actions = [
		{
			name = "print-another-message"
			type = "js"
			script = """
				console.warn("Another message!")
			"""
		}
	]
	event = [
		{
			on = "my-event"
			do = [
				{
					type = "js"
					script = """
						console.warn("Hello world!")
					"""
				}
				"print-another-message"
			]
		}
	]
}
~~~

These actions will get triggered in the order they appear in the array. However, keep in mind that due to the asynchronous nature of the editor JavaScript, there's no guarantee that everything done by the first action will actually be done before the second action begins running.

## Basic configuration

All action extensions need the following parameters. Based on the type you choose, you'll also have to set some other parameters, described in the following sections.

~~~{sjson}
extensions = {
	actions = [
		{
			name = "unique-action-name"
		    type = "js"

			// ... add other parameters here
		}
	]
}
~~~

`name`

>	Gives the action a name, which you will use to trigger this action from elsewhere in your plug-in.
>
>	This parameter is required if you define your action inside the `actions` extension. It is only optional if you define your action inline within a different extension (like inside the `menus` extension, for example).

`type`

>	Determines what this action will do. Currently accepts the following values: `copy`, `js`, `module`, `lua`, `process`, `event`. Each of these types requires a different set of additional configuration parameters. See below.

## Copy a file

To make your action copy a file from one location to another, use the `copy` type:

~~~{sjson}
extensions = {
	actions = [
		{
			name = "duplicate-a-material"
		    type = "copy"
			source = "plugin-resources/source.material"
			destination = "$project/content/materials/source_copy.material"
		}
	]
}
~~~

`source`

>	The path and filename of the source file that you want to copy. This path is always relative to the location of your *.plugin* file.

`destination`

>	The new path and file name for the copy. This path must be absolute, but you can use the `$project` string to point to your current project folder.

## Run a JavaScript snippet

To make your action run an embedded snippet of JavaScript code, use the `js` type:

~~~{sjson}
extensions = {
	actions = [
		{
			name = "recompile-all-resources"
		    type = "js"
			script = """
				// This calls the engine service to force a compilation.
		        require(['services/engine-service'], function (engineService) {
		            engineService.enqueueDataCompile().then(console.warn.bind(console, 'Compilation requested.'));
		        }.bind(this));
			"""
		}
	]
}
~~~

`script`

>	Contains the JavaScript snippet this action will run. Note that, as in the example above, you can use `require` calls here in order to bring in any editor services that you need. See ~{ Use built-in editor services }~.
>
>	Make sure you enclose your code in triple-quotes `"""` as in the example.

## Run an existing JavaScript function

To make your action run a JavaScript function from a module defined in a separate *.js* file, use the `module` type:

~~~{sjson}
extensions = {
	actions = [
		{
			name = "recompile-all-resources"
		    type = "module"
			module = "my-plugin-javascript-file"
			function_name = "myFunctionName"
		}
	]
}
~~~

`module`

>	The  path and filename of the JavaScript file that defines the function you want to run, relative to the location of your *.plugin* file. Required.

`function_name`

>	The name of the function that will be invoked from the JavaScript module. Optional. If omitted, the module file itself must return a function.

For example, the settings above configure the action to run a function named `myFunctionName`, which is expected to be in the module defined in the *my-plugin-javascript-file.js* file. The contents of that file could be something like this:

~~~{js}
define([], function () {
    'use strict';

	var exports = {}
	exports.myFunctionName = function() {
		console.warn("Custom function triggered!")
	}

	return exports;
});
~~~

Alternatively, you can omit the `function_name` setting if your JavaScript module returns a single function, as in this example:

~~~{js}
define([], function () {
    'use strict';

	return function() {
		console.warn("Custom function triggered!")
	};
});
~~~


## Run Lua code

To make your action run an embedded snippet of Lua code, use the `lua` type:

~~~{sjson}
extensions = {
	actions = [
		{
			name = "spawn-a-terrain"
		    type = "lua"
			script = """
				print("Spawning terrain")
		        local level_editor_viewport_window = ({next(Editor:all_level_editing_viewports())})[2]
		        print("Level viewport", level_editor_viewport_window)
		        if level_editor_viewport_window then
		            local terrain_make_result = Terrain.make(stingray.Vector3(0,0,0), stingray.Quaternion.identity(),
		                1, {x = 1024, y = 1024, z = 64}, level_editor_viewport_window)
		            print("Terrain spawned", terrain_make_result)
		        end
			"""
		}
	]
}
~~~

`script`

>	Contains the Lua snippet this action will run. This code runs in the editor's Lua environment, where you have full access to the Stingray Lua API. In addition, you can take advantage of all the Lua editing code that the editor uses internally to modify the current level. For example, the snippet above uses functions from the `Editor` and `Terrain` objects that are defined in this Lua editing environment, in order to find the level viewport and to spawn a new terrain. These interfaces aren't currently documented, but you have the full source code in the Stingray core resources, under *core/editor_slave/stingray_editor*.
>
> Make sure you enclose your code in triple-quotes `"""` as in the example.

## Run an operating system process

To make your action run an external program on your computer, use the `process` type:

~~~{sjson}
extensions = {
	actions = [
		{
			name = "open-in-text-editor"
		    type = "process"
			path = "notepad.exe $1"
		}
	]
}
~~~

`path`

>	The program you want to run, followed by any parameters you want to pass on the command line. For example, the path shown above starts the basic Notepad text editor and opens whatever filename is passed to the action when it is invoked. See also [Pass parameters to an action] below.

## Emit an event

Your action can emit an *event* to the editor. Your plug-in (or other plug-ins, or the editor itself) can then respond to this event.

~~~{sjson}
extensions = {
	actions = [
		{
			name = "emit-a-named-event"
		    type = "event"
			event = "my-custom-named-event"
		}
	]
}
~~~

For more information about events, see also ~{ Emit and handle editor events }~.

`event`

>	The name of the event that your plug-in should emit.

## Pass parameters to an action

Any time you invoke an action from another extension (such as from a custom menu or asset type) you can pass parameters to the action. In your action configuration settings, you can refer to those parameters using the variables `$1`, `$2`, `$3`, etc.

For example, say that you define a custom asset type for a new kind of data file that you want your plug-in should recognize. When a user double-clicks one of these assets in the Asset Browser, the following setup invokes the action named `open-in-default-editor`, and passes it the filename of the asset the user clicked. The action uses that parameter to open that asset in the default application associated with its file type.

~~~{sjson}
extensions = {
	actions = [
		{
			name = "open-in-default-editor"
		    type = "process"
			path = "cmd /C start $1"
		}
	]
	asset_types = [
		{
			type = "xml"
			category = "Custom"
			icon = "myPluginImages/xml.svg"
			invoke = "open-in-default-editor $project/$1"
		}
	]
}
~~~

See also ~{ Register a custom asset type }~.

---
Tags:
-	plugin
-	plug-in
---
