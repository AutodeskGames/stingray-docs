# Stingray 1.6 Release Notes
<a name="top"></a>

Stingray 1.6 (1.6.XXX.X)...

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

### Level Sync with 3ds Max

New level sync workflows let you automatically rebuild your Vray scenes in Stingray. Once 3ds Max is linked to the Stingray editor, scene assets can be automatically or manually tagged, and then reproduced with the same layout in Stingray. Modifications you make to the assets in 3ds Max are then updated inside Stingray. This makes it easier to build, iterate, review and change scenes, without having to manually reproduce layouts in two tools. See ~{ Level Sync with Maya, Maya LT, or 3ds Max }~.

### Capture viewport frames

You can now capture the active camera or viewport and save frames to disk in the OpenEXR file format. The new Capture Frames tool also supports capturing frames on a test engine. For more information, see ~{ Capture Frames Tool }~.  

### Improved Stingray and Beast lightmap baker options

The revamped Stingray and the Beast lightmap bakers now reflect more meaningful baker settings. See ~{ About baking with the Stingray baker }~ and ~{ About baking with Beast }~ for the updated options.


## Experimental features

### Faster launching of projects in a browser

Stingray now runs projects quickly in a web browser using WebGL. The launching process has been updated to load the content from a URL instead of packaging the compiled data to a separate folder and reading the data. The URL also displays the location of the content folder. See ~{ Run your project in a browser using WebGL }~. Also check out the updated settings if you ~{ Use Mozilla Firefox to run your project }~.

### Heading

Paragraph.

## Other Benefits

### Heading

Paragraph.

[Return to top](#top)

## What's Fixed

### Animation tools

### Asset Browser

### Asset Preview

### Dependency Tool

### Entities

### Flow

### General

### Interop

### Launcher

### Platform-specific

### Project Manager

### Property Editor

### Rendering

### Scaleform Studio

### Script Editor

### Shader Graph Editor

### Terrain

[Return to top](#top)

## Known Limitations

* * *

This section lists known limitations and workarounds for Stingray.

Unless otherwise noted in the **What's Fixed** section, please be aware that this release contains the same **Known Limitations** described in the previous versions of Stingray Release Notes.

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

### Material node changes

For a complete list of all new, modified, and removed material shader nodes in this release, see the [version history](../../shader_ref/versions.html).

[Return to top](#top)
