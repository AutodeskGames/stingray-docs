# Stingray 1.7 Release Notes
<a name="top"></a>

Stingray 1.7 (1.7.X.0) ...

> **Important**: We strongly recommend that you back up your existing Stingray data or work on a copy of your project when using a beta version of Stingray.

Sections in this topic:

-	[What's New](#whats-new)

	This section lists all the major new features available with this latest version of Stingray.

-	[What's Fixed](#whats-fixed)

	Here you'll find lists of the bugs and known limitations that we fixed, sorted by workflow area.

-	[Known Limitations and Workarounds](#known-limitations)

	This section includes any new known limitations we've found since the last release of Stingray.

-	[Upgrade Requirements](#upgrade-requirements)

	If you're working on a project that you started in an earlier version of Stingray, this section lists the steps you may need to take in order to successfully upgrade to the latest version.

## What's New

* * *

## Entity Editor

A new editor lets you work more efficiently on entities.  
This is also built as a plug-in example for developers who want to build something similar.

## Browse online assets in the Asset Browser
New “Online Assets” folder in the Asset Browser. You can search, browse, find, and import assets directly from online using the AB.

## Improved Capture Frames Tool

Now works through Story, and through Flow or Lua.
Start capturing and the test engine captures the current active Story.

New options in the UI let you select from all available cameras, and set specific resolution to capture.

Note: A story can be set to be played in Ping-Pong Mode or in Loop. Capture Frames only works forward or reverse, but not ping pong.

For updated information, see ~{ Capture Frames Tool }~.

## Better texture import – auto compression

Textures are now automatically compressed when you import them in Stingray.  Depending on the texture type, Stingray assigns the texture template and compression settings for the imported textures for each platform.  Texture compressions are set internally by matching the file suffixes to one of the suffixes defined in the texture templates or by analyzing the content of the file. You can still tweak the textures as required, but you no longer need to manually compress textures on import. For details, see ~{ Import textures}~ and ~{ Create a texture template }~.

## Google Daydream Android support

We now support Daydream devices (Google Pixel phone) with our GoogleVR plug-in. See ~{ Supported platforms }~ for updated information.

## what's new in Interop?

### Level Sync updates

You can now sync your 3ds Maxscene to a Stingray level so that you can quickly use and evaluate Stingray with Max scenes.
Tag assets, send layouts and assets to Stingray.

### Import .exr files as skydome images

Stingray now supports importing .EXR files as skydome images

## Support for Substance files

(This is also built as a plug-in example for people who want to write import plug-ins.)

## Smart Placement Tool

TBC

## What’s new in Rendering

### Physical lights, lumen, and color temperature and hard set falloff

“setup real-world room with materials and match into stingray.”

## What’s New for plugin developers?

### Data driven compression settings

[Return to top](#top)

## What's Fixed

### Animation

### Asset Browser

### Entities

### Flow

### General

### Interop

###Lua

###Particles

### Platform-specific

### Rendering

### Scaleform Studio

### Script Editor

[Return to top](#top)

## Known Limitations

* * *

This section lists known limitations and workarounds for Stingray.

Unless otherwise noted in the **What's Fixed** section, please be aware that this release contains the same **Known Limitations** described in the previous versions of Stingray Release Notes.

> **Note**: We recommended you back up your existing Stingray data or work on a copy of your project when using a beta version of Stingray.

- **GAME-X Heading**

	Paragraph.

	**Workaround:** Placeholder.

[Return to top](#top)

## Upgrade Requirements

* * *

The full installation guide for Autodesk products including Stingray is included in the Stingray online help, [here](http://www.autodesk.com/stingray-install-ENU "here").

This section explains the improvements and fixes that require specific upgrade steps for users currently using a previous version of Stingray.

### Lua API changes

For a complete list of all new, modified, and removed elements in the Lua API in this release, see the [version history](../../lua_ref/versions.html).

If your project contains any API elements that have been modified or removed, you will need to adjust your code accordingly.

-	Note that with the changes to the resource localization system, `stingray.Application.set_resource_property_preference_order()` has been removed.

### Flow node changes

For a complete list of all new, modified, and removed Flow nodes in this release, see the [version history](../../flow_ref/versions.html).

### Visual Studio 2015

Stingray now requires Visual Studio 2015 for rebuilding all components from source code. See ~{ Software requirements }~ for updated information.

[Return to top](#top)
