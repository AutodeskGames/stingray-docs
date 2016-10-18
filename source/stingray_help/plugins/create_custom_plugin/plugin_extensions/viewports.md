# Viewports

Viewports extension allows a user to to instantiate a viewport in a panel and to control the viewport behavior with a set of custom javascript and lua files. Basically you can write plugin that will package a 3D Viewport and control how the user interacts with the viewport.

## Viewports module
- **$stingray_install_dir\editor\core\extensions\viewports.js**: You can find Jsdoc on the different functions this module provide.
- **$stingray_install_dir\editor\plugins\particle-editor.plugin** : draft of the future Particle editor that will use the viewport extension to instantiate a preview 3D viewport for Particle editing.



## Viewports extension format

```lua
// From article-editor.plugin
extensions = {
	// This is the viewport extension definition that binds the lua and javascript to create a named viewport.
    viewports = [
        {
            name = "particle-viewport"
            engine = "particle_editor/particle-behavior.lua"
            module = "particle-viewport.js"
        }
    ]

	// Map the folder containing the lua file so it is made available to the engine.
    resources = [
        {
            path = "particle_editor"
        }
    ]
```

![particle editor viewport setup](../../../images/particle_editor_viewport_setup.png)

`name`
 > Unique name of the viewport. **Required**. This name must be unique among all views registered within Stingray. This will be used to instantiate the viewport and to send it lua commands.

`engine`
 > Lua file relative to the plugin descriptor file. This file will need to override some of the functions exposed in **$stingray_install_dir\core\editor_slave\stingray_editor\viewport_behavior.lua**

`module`
 > Relative path to a javascript file that will allow you to setup some initialization code before instantiating the viewport as well as to control a lot of the viewport highlevel interaction (ex: mouse behavior). **Required**.

## Viewport setup (javascript)



## Viewport behavior (lua)



## Viewport instantiation (using Mithril)
