# Interactive Engine Release Notes
<a name="top"></a>

This version of Autodesk Interactive Engine...

For details on these and more new features, refer to the [What's New](#whats-new) section below.

> **Important**: We strongly recommend that you back up your existing Stingray data or work on a copy of your project when using a beta version of the engine.

Sections in this topic:

-	[What's New](#whats-new)

	This section lists all the major new features available with this latest version of the editing tools.

-	[What's Fixed](#whats-fixed)

	Here you'll find lists of the bugs and known limitations that we fixed, sorted by workflow area.

-	[Known Limitations and Workarounds](#known-limitations)

	This section includes any new known limitations we've found since the last release.

-	[Upgrade Requirements](#upgrade-requirements)

	If you're working on a project that you started in a previous release, this section lists the steps you may need to take in order to successfully upgrade to the latest version.

## What's New

* * *


## What's new for developers?

- The Capture Frames tool now supports capturing of frames in PNG format.
- The Deployer supports bundling a project in a self-extracting zip file instead of creating an installer when you use the deployer panel to create a standalone package of your project for Windows. See the **Self Extracting Zip** option in [Package the project for Windows](http://help-staging.autodesk.com/view/Stingray/ENU/?contextId=package-the-project-for-windows).
- Use the **DCC Live Link** (Window > DCC Live Link) option to connect the interactive to the different version of your DCC tools.
- The PhysX plug-in installer files are no longer included with the Interactive install. Download and install the plug-in from the [PhysX Plugins Download]( http://www.autodesk.com/physx-plugins-download) page.

[Return to top](#top)

## What's Fixed

## Asset Browser

-

## General

-

## Audio/Wwise

-

## Deployer/Connections

-

## Engine Core

-

## Flow

-

## Interop

-

## Level Editor

-

## Particles

## Rendering


## Texture Manager

## Tools Foundation


[Return to top](#top)

## Known Limitations

* * *

This section lists known limitations and workarounds for Interactive.

- **Placeholder**

	Placeholder.

[Return to top](#top)

## Upgrade Requirements

* * *

The full installation guide for Autodesk products including Stingray is included in the Stingray online help, [here](http://www.autodesk.com/stingray-install-ENU "here").

This section explains the improvements and fixes that require specific upgrade steps for users currently using a previous version of Stingray.

### Placeholder

### Lua API changes

For a complete list of all new, modified, and removed elements in the Lua API in this release, see the [version history](../../lua_ref/versions.html).

If your project contains any API elements that have been modified or removed, you will need to adjust your code accordingly.

The main changes are:

## Plug-in SDK changes for developers

If you've used the Stingray SDK to create plug-ins for previous versions of Stingray, this section summarizes the main changes in this release that might affect you.

### Engine C APIs

>	**IMPORTANT NOTE:** Binary compatibility is not guaranteed against the previous version! If you used the C plug-in APIs to create plug-ins for the engine, your plug-in may or may not work correctly against this version of Stingray. It *may* continue to work if your code does not use any of the APIs that have changed since the previous version. However, we strongly recommend getting the latest version of the Stingray SDK header files and re-compiling your plug-in's *.dll* against the new headers.

For a complete list of all new, modified, and removed elements in the engine plug-in API and C script APIs in this release, see the [version history](help.autodesk.com/cloudhelp/ENU/Stingray-SDK-Help/engine_c/versions.html).

### Editor C APIs

For a complete list of all new, modified, and removed elements in the editor plug-in API in this release, see the [version history](help.autodesk.com/cloudhelp/ENU/Stingray-SDK-Help/editor_c/versions.html).

In this release, the editor API has not changed significantly. There are no upgrade requirements; it should be binary compatible and API compatible.

[Return to top](#top)
