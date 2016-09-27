# Example Boot Script

This topic contains a sample boot scripts that illustrates the functions and concepts outlined in ~{ Starting Lua from scratch: using a custom boot script }~.

## Minimal example

The following Lua script provides a minimal working game:

~~~{lua}
package = nil
world = nil
viewport = nil
shading_environment = nil
camera = nil
sky = nil
box = nil

function init()
    -- load another resource package here, if needed:
	-- package = stingray.Application.resource_package("test")
	-- stingray.ResourcePackage.load(package)
	-- stingray.ResourcePackage.flush(package)

	world = stingray.Application.new_world()
 	viewport = stingray.Application.create_viewport(world, "default")
	shading_environment = stingray.World.create_shading_environment(world,
		"core/stingray_renderer/environments/midday/midday")
	stingray.World.set_shading_environment(world, shading_environment,
		"core/stingray_renderer/environments/midday/midday")

	local camera_unit = stingray.World.spawn_unit(world, "core/units/camera")
	camera = stingray.Unit.camera(camera_unit, "camera")
	stingray.Camera.set_local_position(camera, camera_unit, stingray.Vector3(0,-10,2))

	sky = stingray.World.spawn_unit(world, 'core/editor_slave/units/skydome/skydome', stingray.Vector3(0,0,0))
	box = stingray.World.spawn_unit(world, 'core/units/primitives/sphere_primitive', stingray.Vector3(0,0,0))
end

function update(dt)
	stingray.World.update(world, dt)
end

function render()
	stingray.Application.render_world(world, camera, viewport, shading_environment)
end

function shutdown()
	stingray.Application.destroy_viewport(world, viewport)
	stingray.World.destroy_shading_environment(world, shading_environment)
	stingray.Application.release_world(world)

    -- free any resource packages you created:
	-- stingray.ResourcePackage.unload(package)
	-- stingray.Application.release_resource_package(package)
end
~~~

This script creates a game world, spawns some built-in units in that world (taken from the core resources folder), and creates a camera to render the world. Then, at each frame, it continually updates and renders the world. Finally, when it shuts down, it destroys and releases all the resources it has created.

Note the use of the global `init()`, `update()`, `render()` and `shutdown()` functions.

In your game, if you want to support more than one world (such as a loading screen world and a main world) you will need to keep track of which world is currently being shown, and make sure to update and render only that world in the `update()` and `render()` callbacks.

## Minimal template

For another, slightly more complex example of a working boot script, create a new project from the "minimal" template, and look at its `boot.lua` file.
