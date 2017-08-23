# Overview: how the engine uses Lua

There are two main ways that you can get your Lua scripts evaluated at runtime.

## In response to predefined events

At regular, pre-determined points in the interactive engine's initialization, main loop, and shutdown processes, the engine calls out to a small, preset number of global functions in the Lua environment.

If you have code that you want to be run periodically every frame, or when your app starts up and shuts down, you can implement these functions yourself.

You can do this in a *boot script* -- a script file that the engine loads on startup. For details, see ~{ Starting Lua from scratch: using a custom boot script }~.

The Lua Appkit, which is provided in the `core` resources and which is used by default in all the template projects, is already set up with a boot script that runs some helpful code for managing worlds and levels in the engine. You can extend or override these default modules with your own code. For details, see ~{ Starting Lua from a template: using the Appkit }~.

## In response to Flow

*Flow* is the name given to the node-based visual programming language provided in the level editor tools for visual scripting of interactive behaviors. See also ~{ Visual programming using Flow }~.

Although Flow already contains a variety of built-in nodes for carrying out common tasks and handling common events, you can also create your own custom Flow nodes that call out to your Lua code when they are triggered.

This approach is useful if you have code that needs to be called in response to a particular event during the lifespan of a level or a unit, or if you want to set up your level designers with the ability to call your custom scripts at a time of their choosing.

For details, see ~{ Create custom Flow nodes in Lua }~ and ~{ Communicating between Flow and Lua }~.
