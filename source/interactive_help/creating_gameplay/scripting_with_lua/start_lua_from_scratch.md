# Starting Lua from scratch: using a custom boot script

Every {{ProductName}} project has a single *boot script* -- a Lua file that the engine loads into memory and runs immediately on startup. The role of the boot script is to provide definitions for a set of functions that the engine calls at pre-determined points in its startup, update and shutdown processes. By implementing these functions in your own boot script (or in other script files that are loaded by your boot script) you can take control over the way the engine loads and unloads packages and levels, renders worlds, and responds to changing gameplay conditions and user interactions.

## Specifying the boot script

You identify the boot script file in your project's *settings.ini* file, in the value of the `boot_script` property. For example:

~~~{sjson}
boot_script = "scripts/lua/boot/boot"
~~~

Note that, like other resources, the path is expected to use `/` as a directory separator, and to omit the extension of the Lua script file.

For details on the *settings.ini* file, see ~{ settings.ini file reference }~.

## Functions called by the engine

The interactive engine calls the following global Lua functions, which you can customize in your boot script:

### init()

This function is called once and only once, immediately after the boot script is loaded and executed.

It typically begins the process of loading resource packages that will be needed immediately, and may display a simple splash screen or loading screen.

### update(deltaTime)

This function is called once every frame of the engine's main loop. It is passed one argument: the time step since the last update.

This function is a good place to carry out any incremental updates that you need to perform at each frame, and to respond to events that may have occurred since the previous call to `update()`.

At some point in its calculations, this function usually calls the `World.update()` function of the current world, which advances the world by the specified time step. This in turn updates any animations and physics simulations currently being carried out in that world.

### render()

This function is called once every frame of the engine's main loop, after the `update()` function has completed.

It is expected to instruct the engine what rendering tasks it needs to perform in the current frame. Typically, this function will call the `Application.render_world()` function in order to render the current world for the player. It may also set up objects related to rendering, such as cameras, viewports, and shading environments.

### shutdown()

This function is called once, when the engine shuts down.

It is expected to destroy or release all objects in use, such as viewports, shading environments and worlds, and to unload and release all resource packages that still remain in memory.

---
Related topics:
-	~{ Loading and unloading content at runtime }~
-	~{ Loading and running your own script files }~
---
