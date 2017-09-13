# Using the SimpleProject

The `SimpleProject` object, which the template projects use by default to handle the world and level management systems provided by the Appkit, offers you several ways to customize its behavior in your own project code.

As described in ~{ Understanding the Appkit structure }~, the `main.lua` boot script used by the template projects automatically looks for your custom code in a `script/lua/project.lua` file in your project directory. If you want to make any of the customizations or extensions described below, do them in this `project.lua` file or in another script file loaded by `project.lua`.

## Configuring the SimpleProject

The `SimpleProject` exposes some configuration parameters in the `SimpleProject.config` variable. You can override the default values of these variables in your own projects by setting the new values in your `project.lua` script.

For example:

~~~{lua}
SimpleProject.config.standalone_init_level_name = "content/levels/splash_screen"
SimpleProject.config.create_free_cam_player = false
~~~

The general configuration values you can set are:

| Variable name | Description |
| ------------- | ----------- |
| `standalone_init_level_name` | The resource name of the first level in your project. The SimpleProject will automatically load this level when the engine is started. |
| `camera_unit` | The resource name of the unit resource that the SimpleProject will spawn if it needs to create a player-controlled camera. |
| `camera_index` | The index of the camera that the SimpleProject will retrieve from the unit it creates for player-controlled cameras. You should not need to change this value. |
| `shading_environment` | The resource name of a shading environment that the SimpleProject will use. If you set this value, it will override any shading environments set for your levels in the interactive editor.  |
| `create_free_cam_player` | Determines whether or not the SimpleProject automatically creates a player-controlled camera in each level it creates. |
| `free_cam_tracks_listener` | Determines whether or not the Appkit's free cam is set as a listener for audio events. |
| `exit_standalone_with_esc_key` | Determines whether or not the engine app will quit when the player presses the `Esc` key. Used only when the project is not being tested through the editor's Test Level feature. |
| `stop_world_sounds_on_level_change` | Determines whether or not any sounds playing in the current level will be stopped when you request the SimpleProject to change levels. |
| `dont_capture_mouse_at_startup` | When set to `true`, the player will be free to move the mouse cursor outside the bounds of the engine app's window. |
| `viewport` | Sets the name of the viewport created by the Appkit. Optional, if omitted, the default value is `default`. |

Loading screen configuration parameters (see also ~{ Work with the Appkit loading screen }~):

| Variable name | Description |
| ------------- | ----------- |
| `loading_screen_materials` | A list of material resources that the loading screen will show in order when the project first loads. |
| `loading_screen_start_package` | The name of the *.package* resource that contains the materials listed under `loading_screen_materials`. The loading screen will automatically load this bundle of resources into memory when the project first loads. |
| `loading_screen_end_package` | The name of a *.package* resource that will be loaded into memory in the background while the loading screen materials are visible. After this package is fully loaded, the loading screen will permit the user to move on to the first level in the project. |
| `loading_screen_shading_env` | The name of a *.shading_environment* resource that defines the shading environment parameters for the loading screen's level. **Note:** this resource must be loaded in your *boot* package. |

For default values, see the `core/appkit/simple_project.lua` code.

## Extending the SimpleProject

At specific moments in the lifespan of the engine, the SimpleProject calls out to an *extension project*. The extension project is a Lua table that you can set up with one or more of the following functions:

| Function name | Description |
| ------------- | ----------- |
| `on_level_load_pre_flow()` | Called each time you change the current level managed by the SimpleProject. (See [Changing levels] below.) This function is called just before triggering the **Event > Level Loaded** event in the new level's Flow graph. |
| `on_init_complete()` | Called after the SimpleProject has finished all of its initialization tasks when the engine is first launched, including loading the starting level. |
| `on_level_shutdown_post_flow()` | Called each time you change the current level managed by the SimpleProject. (See [Changing levels] below.) This function is called just after triggering the **Event > Level Shutdown** event in the closing level's Level Flow, and just before destroying the `stingray.Level` object. |
| `update(dt)` | Called every frame, immediately after updating the engine world. This function is called with one parameter: the time step since the last call to `update()`, in seconds. |
| `render()` | Called every frame, immediately before rendering the engine world. |
| `shutdown()` | Called when the engine shuts down, immediately before shutting down the engine world and closing the main window. |

If you create a global variable named `Project` in your `project.lua` file, the `main.lua` boot script will automatically set up that object as the extension project for the SimpleProject. You can see how this is done in the `script/lua/project.lua` file in any of the template projects. A short example:

~~~{lua}
Project = Project or {}

function Project.on_init_complete()
	print("Successfully initialized!")
end

function Project.update(dt)
	print("Updated with a delta time of " .. tostring(dt))
end

function Project.on_level_load_pre_flow()
	print("Loading a new level! Resource name: " ..  SimpleProject.level_name)
end
~~~

You can set a different Lua object as the extension project if you want, by setting the value of the `SimpleProject.extension_project` variable to point to your custom object. For example:

~~~{lua}
SimpleProject.extension_project = MyOtherLuaObject
~~~

## Overriding the SimpleProject

If you want to customize the behavior of the SimpleProject beyond what it permits through its configuration parameters and extension functions, you can redefine any of the SimpleProject functions in your own code.

For example, the default update function for the SimpleProject updates the Appkit first in every frame, which also updates the engine world and advances the physics simulation. It calls your project's `update()` function afterward. Say that you want to break this update loop into separate pre-update and post-update functions that do separate things before and after each engine world update. You can redefine the `SimpleProject.update()` function in your `project.lua` file as follows:

~~~{lua}
function SimpleProject.update(dt)
	if LEVEL_EDITOR_TEST and not LEVEL_EDITOR_TEST_READY then return end

	local extension_project = SimpleProject.extension_project
	if extension_project and extension_project.pre_update then
		extension_project.pre_update(dt)
	end

	Appkit.update(dt)

	if extension_project and extension_project.post_update then
		extension_project.post_update(dt)
	end

	if SimpleProject.config.exit_standalone_with_esc_key and Keyboard.pressed(Keyboard.button_id('esc')) and Appkit.is_standalone() then
		shutdown()
		Application.quit()
	end
end
~~~

Note that when you redefine an existing function in this way, the old implementation is lost.

Another way you could handle this is to cache the existing function implementation under another name, and call it from your new code. For example:

~~~{lua}
SimpleProject.base_update = SimpleProject.update
function SimpleProject.update(dt)
	if LEVEL_EDITOR_TEST and not LEVEL_EDITOR_TEST_READY then return end

	-- add a new call to a pre-update function.
	local extension_project = SimpleProject.extension_project
	if extension_project and extension_project.pre_update then
		extension_project.pre_update(dt)
	end

	-- call the old update() implementation.
	SimpleProject.base_update(dt)
end
~~~

## Changing levels

The `SimpleProject` always loads one of the following levels on startup:

-	If the project is being run through the interactive editor's Test Level feature, it will load the level currently open in the editor.

-	Otherwise, it will load the level whose resource name is specified in its `SimpleProject.config.standalone_init_level_name` variable.

Once this first level is loaded, you can tell the SimpleProject to change levels in either of two ways:

-	**FLOW:** Use the **Level > Change Level** node.

-	**LUA:** Call the `SimpleProject.change_level()` function, and pass the resource name of the level you want it to load.

	Alternatively, you can call the `SimpleProject.unload_level(old_level_name)` and `SimpleProject.load_level(new_level_name)` separately.

The SimpleProject will take care of unloading the current level, loading the new level, creating a default camera if needed, and managing the new level through the Appkit.
