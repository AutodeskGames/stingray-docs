# Stingray 1.9 Release Notes
<a name="top"></a>

Stingray 1.9 (1.9.X.0) ...

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

## Physically-based lights

![](../images/physical_lights_rn.png)

The new **Physical Light** entity lets you use data from real-world lights to create a realistic distribution of light in your scene. You can add a **Physical Light** from the **Create** panel, and adjust its **Brightness** and **Temperature** using new sliders in the **Property Editor**.  To emulate the distribution of a real-world light source, import an IES Light Profile and assign it to your light. Physical lights are fully compatible with the light baker, so your lights appear when you bake your scene. See ~{ Physically Based Lighting }~ and ~{ Create a physical light }~.

## Capture Frame Tool updates

The Capture Frames tool has now been updated to be a frame capturing interface plugin tool with a separate encoder plug-in using the OpenEXR format (.exr). You can extend the encoder plug-in with other encoder formats to capture frames in different file formats.

## Favorites in Asset Browser

You can add frequently used assets or folders as favorites ![](../images/icon_asset_favorites.png) to the **Favorites** directory in the **Asset Browser**. Check the favorite icon ![](../images/icon_asset_set_favorite.png) or right-click in the **Asset Browser** and select **Add to Favorites** to mark an asset or folder as favorite. You can also drag and drop assets and folders to the **Favorites** directory. For more information, see ~{ Asset Browser }~.

## Texture Manager improvements

Continuing the improvements from the previous release, the **Texture Manager** tool is looking better than ever. The platform list looks crisp and compact, and headers added to the texture view list lets you view textures in an organized manner. You can organize your textures in the Texture Manager by sorting them by size, date modified or name. The Texture Manager also now preserves the state of UI layout you adjust like filters enabled or resized filter views.

![](../images/wn_updated_texture_manager.png)

-	~{ Create a texture template }~
-	~{ Create a texture category }~

## Debug projects in Visual Studio Code

You told us that you wanted to debug your projects in a dedicated, full-featured development and debugging environment, and we listened! As of now, you can use our [Stingray extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=jschmidt42.stingray-debug) to set and trigger breakpoints in Lua code, step through your code, trace variable values, send commands and Lua to the engine, read console messages, and more!

We're so happy about this new workflow, and so confident that you'll love it too, that we've removed the old integrated **Script Debugger** from the Stingray editor.

## FBX Version 2018.1.1

This release of Stingray picks up the latest version of FBX (2018.1.1), which provides various improvements and bug fixes.

## Clear coat improvements

Clear coat is now more energy conserving, which reduces bloom when using a clear coat material.

## Experimental feature: HoloLens updates

A new HoloLens project is now available in the **Online Projects** tab in the **Project Manager**.

## What else is new?

-	Removed the **History** tool from the Stingray Editor. You can view the list of actions executed and undo/redo actions in the Particle Editor or the Texture Manager.

[Return to top](#top)

## What's Fixed


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

### Flow node changes

For a complete list of all new, modified, and removed Flow nodes in this release, see the [version history](../../flow_ref/versions.html).

[Return to top](#top)
