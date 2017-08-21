# Loading and running your own script files

Even small projects typically need multiple Lua script files in order to keep all the necessary gameplay code organized. For example, the Appkit contains a boot script, plus several additional script modules that the boot script requires.

This page describes what you need to do in order to make sure that your own script files make it into the game, and that the code in those files is accessible both to your boot script and your custom Flow nodes.

## Step 1. Include your scripts in a resource package

The interactive engine treats Lua scripts exactly like any other kind of data file. Just like any other resources you want to use, you need to put your scripts into a resource package so that the game can load them into memory at runtime.

For details on defining packages, see ~{ Loading and unloading content at runtime }~.

## Step 2. Load the script package

Once you have your scripts in a defined resource package, you need to tell the game engine when you want to load that package in your gameplay code.

Since Lua scripts are typically small, and are often useful throughout the whole length of the game, you may want to keep all your Lua scripts together in a single package and load them all up at initialization time. To do this, you can either:

*	Put all of your scripts into your boot package, so that the game will load them all at initialization time. See ~{ About the boot package }~.
*	Load and unload the resource package that contains your scripts explicitly at startup and shutdown. If you are writing a custom boot script, load it in the `init()` function of your boot script, and unload it in your `shutdown()` function. If you are using the Appkit, do it in `Project.on_init_complete()` and `Project.shutdown()`.

However, if you want to have different scripts in memory at different times in your game, you can separate them into different resource packages and load and unload them at other times. The important thing is that they are already in memory when they are loaded into the Lua environment (see the next step).

## Step 3. Require or load the Lua file

Once you have loaded the resource packages that contain your Lua files into memory, you cannot use the functions and data in those Lua files until you bring them into the game's Lua environment.

To do this, you call standard Lua functions for interpreting files, like `require()` and `dofile()`. Make sure that you identify the Lua script file using its resource ID: i.e. the path to the file relative to the root of your data directory, using forward-slashes as delimiters, and with **no** file extension.

This is typically done at initialization time. For example, if you are using a custom boot script, you would do this either in the boot script or in another script required by the boot script. If you are using the Appkit, you can do it your `project.lua` script file. However, you could also load new Lua script content at any other time if necessary.

## Example

The following snippet shows how to load a package, import the contents of a script file, and eventually unload the package at shutdown:

~~~{lua}
package = nil
...
function init()
	...
	package = stingray.Application.resource_package("packages/myScripts")
	stingray.ResourcePackage.load(package)
	stingray.ResourcePackage.flush(package)
	require "main/scripts/gameplay"
	...
end
...
function shutdown()
	...
	stingray.ResourcePackage.unload(package)
	stingray.Application.release_resource_package(package)
	...
end
~~~
