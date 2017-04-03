# Creating User Interfaces

Most interactive 3D projects need to use some kinds of 2D elements to communicate information to the player, and to give the player a simple way to communicate intentions or commands back to the gameplay logic. For example, you might want to use 2D elements for:

-	Menus and input buttons,
-	Text that provides information about the scene or the objects in the scene,
-	Heads-up displays (HUDs), like targeting reticules, mini-maps, health bars, and hints about the controls available to the player.

You have a few different options for creating and managing these UI elements in Stingray.

## Scaleform Studio

Stingray ships with a standalone UI creation tool called Scaleform Studio, and a plug-in integration that makes the UIs you create in Scaleform Studio UIs show in the engine viewport.

You use the Scaleform Studio editor to create *.s2d* projects that contain visual elements like images, text and drawings. You can create timeline animations that move these visual elements around and change their state, and assign Lua scripts to the elements in order to make them respond to triggers that happen during the project. You can then import your Scaleform project into your Stingray project, and use Flow or Lua in Stingray to launch the UI and handle its events.

Scaleform Studio could be a great option for you if:

-	You want a full-featured set of tools to design your 2D elements and animations.
-	You want to build complex UIs with many interrelated elements.
-	You need your UI to accept input from the user, and you want a built-in framework for listening and respond to interaction events like mouse clicks on your widgets.

The other topics in this section explain the basics of integrating a Scaleform Studio UI into your game in Stingray.

For complete information about working in the Scaleform Studio Editor to set up the visual elements of your UI, visit the [Scaleform Studio Help](http://www.autodesk.com/scaleformstudio-help). (Also available from the **Help** menu in the Scaleform Studio editor.)

## The built-in Gui system

The Stingray engine offers a built-in system for drawing 2D shapes, images and text in the engine viewport. The editor uses this system to draw things like menus, volumes, prototypes and triggers in its embedded viewport. You can also use it in your own gameplay and plug-in code.

This could be a great option for you if:

-	You want a script-based system with a fine level of granularity that you can build your own layers on top of.
-	You mostly want to *show* 2D elements, with limited need for built-in interactivity. (With the Gui system, you need to set up things like handling mouse picking yourself.)
-	You want to show 2D elements placed in the 3D world at arbitrary positions and rotations.
-	You want to control your UI from within a plug-in that extends the Stingray engine. The Gui system is exposed in both Lua and C.

For more information about the Gui system and how it works, see the documentation for the `stingray.Gui` Lua object.

## Community-supported options

If you're willing to try a community-supported alternative to the built-in Stingray UI tools, you might be interested in this option.

### HTML5 and JavaScript

The [Stingray HTML5](https://github.com/jschmidt42/stingray-html5) plug-in lets you create your UI elements in HTML and JavaScript. This plug-in integrates the Chrome Embedded Framework (CEF) into the Stingray engine. It uses CEF to load HTML content either from a project folder or from a URL, and to render that content inside the engine. It also passes player mouse clicks through to CEF, so that your web content can respond by triggering JavaScript.

This could be a great option for you if:

-	Your project is for Windows platforms only,
-	You are already comfortable with HTML5 and JavaScript development,
-	You don't need UIs with transparency.
