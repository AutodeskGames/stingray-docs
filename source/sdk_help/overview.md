# System Overview

Before you start thinking about how you want to extend Stingray, it's helpful to get a good understanding of how the overall Stingray ecosystem is set up.

You can think of Stingray as three main components working together: the editor, the project, and the engine.

TODO:image

-	The *project* is a collection of different kinds of assets -- 3D objects, materials and textures, levels, Lua scripts, Flow graphs, and other content. Typically, when you're working with Stingray as a user, most of your time is spent bringing assets in to the project, creating new assets, and setting up the way the player interacts with or experiences the scenes you create.

-	The *engine* is a viewer for the project content. There's a different version of the engine app for each different platform Stingray supports. Its job is to load up the assets in the project, and to run [the update loop](extend_engine.md) as long as the app is running: accepting user input, processing events, and rendering the scene.

-	The *editor* is a Windows-only authoring tool that helps you create and set up your project content so that it looks and behaves the way you want it to when you run the project in the engine.

You can create Stingray *plug-ins* that extend each of the three main components: the editor, the engine, and the project. For a complete discussion, see ~{ All the ways you can extend Stingray }~.

## Under the hood

The picture of the three components above is conceptually true when it comes to the general roles of the three components, but in fact the interactions between the editor, project content and engine are much more intricate.

-	The editor runs its own instance of the Windows engine. It uses this engine to load up your project content as you're working on it, and to render your levels and objects into integrated viewports so you can preview your scenes and your assets.

	TODO: screen cap with callouts

-	The project content that you work with in the editor, which you see listed in the **Asset Browser**, isn't exactly the same as the files that the editor's internal engine loads and renders. You author content in raw formats -- FBX files, image formats like .png or .dds files, and often plain-text SJSON files -- but the engine needs these raw assets to be compiled into an optimized binary data format that is different for each supported platform. You can read more about that [in this topic about the asset pipeline](http://help.autodesk.com/view/Stingray/ENU/?guid=__stingray_help_managing_content_content_lifecycle_html).

-	The data compilation step is actually carried out by the engine. The editor triggers this compilation automatically for Windows binaries each time you save changes to an asset. For other platforms, compilation happens when you use the editor to run your project on that platform, mirror the editor a remote device, or deploy your project for that platform.

-	The editor can't always wait for the changes you make to an asset to get saved to disk, compiled to the Windows-specific binary format, and then reloaded into its internal engine. Although that round-trip process does happen behind the scenes when you save changes, you often need instant feedback in the editor while you're making changes like moving objects or adjusting sliders. In order to provide fast feedback about what you're doing in the editor viewports, the engine running inside the editor doesn't load your levels in exactly the same way as it does when you run your game.

	TODO: editor_slave

-	TODO: console connection and logging

-	TODO: Editor is not truly monolithic, it's really a collection of tools.

TODO: image

Even this picture is a little simplified -- for example, it omits details about the way the engine can run as an server when mirroring to remote devices. But it gives you a more detailed picture of how the way the pieces work together.
