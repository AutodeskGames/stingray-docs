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

## Browse online assets in the Asset Browser

See the new **Online Assets** folder in the ~{ Asset Browser }~. You can browse, find and import assets directly from online to your project. Right-click an online asset and select **Import Asset** to download and import the asset package to the project folder. Updated topic include: ~{ Download assets and example projects }~.

## Improved Capture Frames Tool

The **Capture Frames** Tool is now integrated into the **Story Editor** workflow, and can also be initiated through Flow or Lua. New options in the **Capture Frames** window let you select from all available cameras, and set a specific resolution to capture. In the **Story Editor**, create a story and then click ![Capture Frames](../images/icon_capture_frame.png) to open the **Capture Frames** window. Start capturing and the test engine captures the currently active Story.

>**Note:** A story can be set to be played in **Ping Pong** Mode or in **Loop**, but capture frames only works in forward or reverse, and not ping pong.

## Better texture import with automatic compression

Textures are now automatically compressed when you import them in Stingray. Depending on the texture type, Stingray assigns the texture template and compression settings for the imported textures for each platform. Texture compressions are applied by texture file suffix match or by image analysis. You can still tweak the textures as required, but you no longer need to manually compress textures on import. For details, see ~{ Import textures}~ and ~{ Create a texture template }~.

## What's new in VR: Google Daydream support, plus new VR templates

- Support for Gear VR, Google Daydream Android devices, plus Google Cardboard (iOS and Android)
- New VR project templates to support rendering on those devices
- The VR Oculus SDK has been upgraded to V1.10.1.0. See ~{ Supported platforms }~.

Stingray 1.7 introduces our GoogleVR plug-in, which adds support for Google Cardboard on iOS, as well as Google Daydream devices and controllers. Google Cardboard for Android is also supported on Daydream devices.

To support rendering your VR projects on these devices, the **Templates** tab in the **Project Manager** now includes two templates: VR Google and VR Gear.

![](../images/wn_templates.png)

Use these templates to start building your VR projects for Google Daydream devices and GearVR devices.

## Particle Editor

In previous versions of Stingray, you created and edited particle effects using the **Asset Browser**, **Property Editor**, and **Asset Preview**. With Stingray 1.7, we're pleased to give you a standalone **Particle Editor** that streamlines the workflow for particle artists. Select **Window > Particle Editor** from the main menu, or double-click an existing particle effect in the **Asset Browser** to launch the new tool.

## Better network workflows: Run multiple local game instances

The **Connections** panel now lets you add multiple localhost PC targets, which means you can automatically start multiple targets with separate command lines on your local machine when you click **Run Project** ![](../images/icon_runProject.png). This makes it easier to debug and look at the console output for multiple targets using the editor engine instance dropdowns. See also ~{ Using the Connections panel }~. 

## Import font files

You can now import font files to generate font resources to render text with sharp edges and preserve them when scaling. When you import font files, this generates the multi-channel signed distance field resources to display the font in your project. This feature is enabled by the *Distance Field Font Importer* plug-in, which is automatically enabled in the **Plugin Manager**. (See ~{ Add and remove plug-ins using the Plugin Manager }~.)

  > **Note:** This feature is still under active development.

To import fonts:

1. Right-click in the **Asset Browser** and select **Import Asset** from the pop-up menu.
2. Browse to select a font and click **Open**.
3. In the window that appears, enable the **Distance Field Options** check box, change any settings as required, then click **Import**.

## Copy and paste keyframes in Story Editor

Copy keyframes and paste them on the current time in the timeline or on the cursor position using either the hotkeys or by right click context menu in the **Story Editor**. You can also copy keys from multiple tracks and paste them on other tracks based on the order of track selection.

## Trim animation clips

You can now edit the length of animation clips by trimming in the Anim Clip Editor or by modifying the trim values in the ~{ Animation clip properties }~. See ~{ Trim animation clips }~.

## Visual mesh raycasting

Stingray 1.7 provides new functionality that lets you lets you check for intersections with visual meshes within a specified Unit.

For complete documentation, refer to the Lua documentation (stingray.Unit.mesh_pick_raycast) and the [Flow node documentation](../../flow_ref/index.html) (**Unit > Mesh Pick Raycast**).

  > **Important:** For units containing high density meshes, the raycast does impact performance.

An example Flow graph:

![](../images/mesh_pick_raycast_eg.png)

## Entity updates

A new Tag component lets you associate a set of tags with an entity and quickly find all entities that have a certain tag. See also ~{ Using Entities in your Project }~.

![](../images/wn_entity_tag.png)

In addition, new Flow nodes for entities let you get and set entity properties so that you can interface with entities in Flow similar to the way you've been able to use them with Lua and Story previously.

New Flow nodes include:

- Get Component Bool Property
- Get Component Float Property
- Get Component Quaternion Property
- Get Component String Property
- Set Component Vector Property

- Set Component Bool Property
- Set Component Float Property
- Set Component Quaternion Property
- Set Component String Property
- Set Component Vector Property

  > For a complete list of all new, modified, and removed Flow nodes in this release, see the [version history](../../flow_ref/versions.html).

## What's new in Interop?

### Level Sync updates

You can now update existing assets when using level sync with Maya. When **Update Existing Assets** is enabled in the **Send Level** window (**Singray > Send Selected/Send All >** ![Option Box](../images/opt_box.png)), modifications to geometry in Maya get pushed to Stingray on level sync.

### Import .EXR files as skydome images

Stingray now supports high definition range EXR files for image based lighting. Import (or drag and drop to Asset Browser) .EXR files to use as skydomes in your level. Updated topics include: ~{ Supported file formats }~ and ~{ Create a skydome texture }~.

## What's new in Rendering

### Light baking improvements

- You can now bake based on selection. After making a selection in your scene, open the **Light Baking** window (**Window > Lighting > Light Baking**) and click the new **Bake Selection** button to start a partial baking session. See ~{ Bake lightmaps }~.
- Click **Clear** in the **Light Baking** window to quickly delete and unmap all lightmaps on disk.
-	Beast is now deprecated, use Stingray light baker instead.  

##Texture Manager updates

- A new **Cubemap Category Filter** in the **Texture Manager** lets you filter out cubemaps from your list.
-	New **HDRI/Skydome** category filter and texture template for imported skydome images.

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

- **GAME-19871 Too easy to remove lightmaps, this needs a popup with a warning**

	The new **Clear** button in the **Light Baking** window deletes all lightmaps on disk and unmaps them. This is a powerful operation that requires a MessageBox asking if the user actually intended to perform this action.

	**Workaround:** None.

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

Stingray now requires Visual Studio 2015 for rebuilding all components from source code. See [Software requirements](http://help.autodesk.com/view/Stingray/ENU/?guid=__source_access_getting_started_software_requirements_html) for updated information.

[Return to top](#top)
