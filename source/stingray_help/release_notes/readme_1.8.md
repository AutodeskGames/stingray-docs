# Stingray 1.8 Release Notes
<a name="top"></a>

Stingray 1.8 (1.8.X.0) ...

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

## Particle Editor updates

-	You can copy and paste particle effect systems and controllers. Select a system or controller, and either right-click to select Copy (and Paste) or use the Ctrl + C, Ctrl + V hotkeys to copy and paste the systems.

-	Drag and drop the systems around to reorder the effects in a particle.

-	A default particle material gets created when you create a new particle effect.

See ~{ Create and edit particle effects }~.

## Asset Browser improvements

Searching for online assets indicates the number of results next to the **Online Assets** in the tree view of the **Asset Browser**. You can clear the *Search* results by clicking the Clear icon in the Search field.

![](../images/online_assets_locate.png)

You can also locate an online asset installed in your project using a new option **Locate in Project** from the **Online Assets** view. Select an installed asset (indicated with a green checkmark) and either click the ![](../images/icon_asset_browser_locate.png) icon or right-click and select **Locate in Project**. See ~{ Asset Browser }~.

## Capture Frames Tool updates

You can now define the capture range in your story using the Capture Frames Tool. Instead of recapturing your entire story after making a fix, specify the capture range in frames or seconds, and then quickly recapture.

- ~{ Capture Frames Tool }~
- ~{ Capture frames to disk }~

## Texture Manager

Check out the revamped **Texture Manager** with improved texture loading and filtering.

## Google VR updates

- Easy way to change the cardboard settings

## Physically-based light parameters

Physically based light parameters have been exposed through entities. The **Temperature** parameter controls the light color and **Lumens** controls the light intensity. Adjusting these parameters gives your scene more relevant lighting, like light falloffs that occur with real lights.

## Light baker improvements

A new non-interactive light baking mode has been added to the Stingray baker to better control memory consumption. Instead of baking everything in the scene and showing the progress, this new mode bakes one object in the scene completely and then outputs the lightmap, saving memory in the process. Disable **Interactive** baking in the **Light Baking** window to turn on this mode. Non-interactive baking is also the default baking mode when you launch a baking session from the command line. See ~{ Trigger lightmap baking from the command line }~.

## Interop: Updated DCC link plug-in for 3ds Max 2018

This release of Stingray ships with an updated Stingray DCC Link plug-in to support 3ds Max 2018 and 3ds Max 2017. See ~{ DCC tool plug-in }~.

## What's New in documentation?

- Press F1 to open Stingray Help while using the Editor
- Better filters to refine Search results

## Stingray resource files

You can use the **Script Editor** to open and edit Stingray resource files like

-	 Render Configuration (.render_config),
-	 Shader Node (.shader_node),
-	Shader (.shader),  
-	Shading Environment Mapping (.shading_environment_mapping),
-	Entity Component (.component),
-	Stingray Create Panel Object (.object_creator_item),
-	Physics Properties (.physics_properties ),
-	Network Config (.network_config),
-	Surface Properties (.surface_properties), and
-	Stingray Type Description(.type) files.

## What's New for developers?

- Finer control on the data compiler so you can compile only specific assets
- Boot script hook

## What else is new?

- Motion Blur is now disabled in the default shading environment. (See ~{ Shading environment properties }~.) You can turn Motion Blur on if you want to create a slightly blurred effect when the camera is moving.

[Return to top](#top)

## What's Fixed

### Previous known limitations:

These were late-breaking issues that affected Stingray 1.7 as known limitations. They really bugged us and we're extra happy to tell you we fixed them in Stingray 1.8.

- GAME-21615: First frames rendered by Capture Frames tool are not part of the animation in the story
- GAME-20834: Level Sync from 3ds Max (using 'Level Send All') stalls at the end of the import process

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

-	The setting names accepted by `Unit.set_animation_bone_mode()` and returned by `Unit.animation_bone_mode()` have been renamed to remove the `delta_` prefix. This better describes the effect of each setting.

### Flow node changes

For a complete list of all new, modified, and removed Flow nodes in this release, see the [version history](../../flow_ref/versions.html).

[Return to top](#top)
