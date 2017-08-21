# Managing worlds, levels and cameras through the Appkit

If you are starting with a template project, the `SimpleProject` will take care of calling the services provided by the Appkit for managing game worlds and levels, and will set up a default camera. See ~{ Using the SimpleProject }~.

However, if you choose not to use the `SimpleProject`, or if you want to override its default behavior, you will have to call functions exposed by the Appkit in order to make it manage your game worlds and levels. This page introduces some of the world and level management functions offered by the Appkit.

## Managing worlds

The Appkit uses a `WorldWrapper` object to manage a single game world that you create. The `WorldWrapper` updates its managed world each frame, rendering each frame with the current camera and shading environment. It also does a few other things, including:

-	Managing the list of enabled cameras.
-	Storing and updating an `Appkit.DebugScrollbox` for debug printing to screen.

To make the Appkit manage a game world that you create:

~~~{lua}
local Project.world = stingray.Application.new_world()
local world_wrapper = Appkit.manage_world(Project.world)
~~~

To get the `WorldWrapper` that manages a given game world:

~~~{lua}
-- Returns nil if the specified world is not managed by the Appkit.
local world_wrapper = Appkit.get_managed_world(Project.world)
~~~

In order for the `WorldWrapper` to automatically render your game in the default viewport it creates, you need to create a camera and set it as the active camera for the level. For example:

~~~{lua}
local camera_unit = stingray.World.spawn_unit(world, "core/appkit/units/camera/camera")
local camera_object = stingray.Unit.camera(camera_unit, 1)
world_wrapper:set_camera_enabled(camera_object, camera_unit, true)
	-- use false to disable the camera later, if you want to create a different camera.
~~~

You can also do this last step by enabling and disabling a `CameraWrapper` object that you create. See [Managing cameras] below.

## Managing levels

The Appkit uses a `LevelWrapper` to manage a single game level that you load into the game world. The `LevelWrapper` does the following:

-	Loads the shading environment specified for the level in the interactive editor, if any.
-	Spawns the level background.
-	Loads the level's baked lighting, if any.
-	Manages cameras that are set as active cameras, but that are not managed by an `Appkit.CameraWrapper`. For example, camera units that you place in the Level Editor.
-	Provides level object management so that other scripts can register Lua objects with a Level to receive update and shutdown calls automatically.

The `LevelWrapper` works with the `ComponentManager` to allow components to be ticked per level. It also works with the `Appkit` object to allow for different tick ordering relative to the `World` update.

To load a level and register it for management by the Appkit:

~~~{lua}
local Project.level = stingray.World.load_level(world, level_resource_name)
local level_wrapper = Appkit.manage_level(Project.level)
~~~

To get the `LevelWrapper` that manages a given game level:

~~~{lua}
-- Returns nil if the specified level is not managed by the Appkit.
local level_wrapper = Appkit.get_managed_level(Project.level)
~~~

You can also register custom functions that will be called when a managed level is loaded or unloaded. This mechanism is used by the Appkit's **Level > Change Level** Flow node and by the `SimpleProject.change_level()` function. For example:

~~~
Appkit.custom_unload_level_function = Project.unload_level
Appkit.custom_load_level_function = Project.load_level
~~~

To stop the Appkit from managing a level so that you can unload the level from the world:

~~~{lua}
Appkit.unmanage_level(level)
~~~

## Managing cameras

The Appkit offers a wrapper for cameras that automatically integrates the location of the camera into other systems that rely on the location of an observer, like Wwise audio, terrain decoration, and scattering. You can add a wrapper for any camera that you create in your Lua code:

~~~{lua}
local camera_owner = {}
local camera_unit = World.spawn_unit(world, "core/appkit/units/camera/camera")

-- create the CameraWrapper
local camera_wrapper = Appkit.CameraWrapper(camera_owner, camera_unit, 1)
camera_wrapper:set_local_position(view_position)
camera_wrapper:set_local_rotation(view_rotation)

-- enabling has the same effect as calling WorldWrapper.set_camera_enabled(),
-- as long as the camera was created in the world currently managed by the Appkit.
camera_wrapper:enable()
~~~

## Example boot script

The following boot script uses the Appkit to manage world rendering for a single world, with no support for the editor's Test Level feature. See also ~{ Understanding the Appkit structure }~.

~~~{lua}
require 'core/appkit/lua/app'

Project = Project or {}
Project.world = Project.world or nil
Project.shading_environment = Project.shading_environment or nil
Project.camera_unit = Project.camera_unit or nil

-- Init - called by engine
function init()
    if LEVEL_EDITOR_TEST and not LEVEL_EDITOR_TEST_READY then
        print("Waiting for test level initialization...")
        return
    end

    -- Performs basic application setup
    Appkit.setup_application()
    stingray.Window.set_clip_cursor(true)

    -- Load a world with a default shading environment
    Project.world = stingray.Application.new_world()
    local world_wrapper = Appkit.manage_world(Project.world)
    Project.shading_environment = stingray.World.create_shading_environment(Project.world, "core/stingray_renderer/environments/midday/midday")
    world_wrapper:set_shading_environment(Project.shading_environment, "core/stingray_renderer/environments/midday/midday")

    -- A camera is provided to render the world
    local camera_unit = stingray.World.spawn_unit(Project.world, "core/appkit/units/camera/camera")
    Project.camera_unit = camera_unit
    world_wrapper:set_camera_enabled(stingray.Unit.camera(camera_unit, 1), camera_unit, true)
end

-- Update - called by engine
function update(dt)
    if LEVEL_EDITOR_TEST and not LEVEL_EDITOR_TEST_READY then return end
    Appkit.update(dt)
end

-- Render - called by engine
function render()
    if LEVEL_EDITOR_TEST and not LEVEL_EDITOR_TEST_READY then return end
    Appkit.render()
end

-- Shutdown - called by engine
function shutdown()
    if LEVEL_EDITOR_TEST and not LEVEL_EDITOR_TEST_READY then return end

    Appkit.shutdown() -- Appkit shutdowns managed objects so call it first

    stingray.World.destroy_shading_environment(Project.world, Project.shading_environment)
    Project.shading_environment = nil

    stingray.Application.release_world(Project.world) -- destroying the world destroys its units as well
    Project.world = nil
end

return Project
~~~
