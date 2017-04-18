# Starting Lua from a template: Using the Appkit

Stingray includes a set of helpful Lua scripts in the `core` resources. These scripts, called the **Appkit**, provide a basic structure or harness for a typical 3D interactive project.

The Appkit includes several basic services that are common to most kinds of projects, including:

-	Window management for platforms that use windows
-	World management: updating, rendering, and so on.
-	Level management: loading and unloading, applying lightmaps and shading environments, updating loaded Scaleform Studio projects at each frame, triggering Flow events.
-	Showing an initial splash screen while the rest of the project content loads up in the background.
-	Managing cameras, and integrating the location of the current camera with the Wwise audio, scatter and terrain systems.
-	Getting input from various types of platform-specific input controllers and unifying that input into higher-level constructs.
-	A modular component system that lets you assign managed components to other Lua objects, and which you can extend by defining your own kinds of managed components.

The Appkit also comes with some related Flow nodes and unit resources that help to simplify game development. This includes nodes to get and set the active camera, to change the current level, and to print debug text to the screen.

The Appkit is optional; you do not have to use it in your project. However, all of the template projects provided with Stingray start out using the Appkit by default. Therefore, if you are starting from a template, you will have the Appkit set up already in your project.

If you do choose to use the Appkit, you can customize it as much or as little as you want. You can rewrite or override any or all of its systems, or you can use it as-is if it provides you with all you need to get your game working the way you envision it.

The topics in this section provide some information that might help you get started understanding the way the Appkit is set up, how you can take advantage of it in your own project, and how you can use, modify and extend its modules.

You can also browse the Appkit source code here in the help, within the Lua API reference. See the modules under `Appkit`.
