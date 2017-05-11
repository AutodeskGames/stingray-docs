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

## Visual Studio Code Debugger

This release of Stingray replaces the **Script Debugger** with a Visual Studio Code extension named **Stingray Visual Code Debugger**.

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

## Previous known limitations:

- GAME-19426 iOS cardboard VR view only renders on part of the screen on iPhone 7 Plus
-	GAME-22597 Newly spawned shading environment entity does not work

## Asset Browser

- GAME-22659 Importing a texture when the texture already exists does nothing
- GAME-22495 Drag & drop from Windows Explorer into the Asset Browser from within the same project folder is not supported
- GAME-21855 Clearing Search input in the Asset Browser results in Error
- GAME-21853 Search Result in the Asset Browser does not update on "Search in" Option
- GAME-21017 Online Assets: Assets sometimes fail to download but give no error
- GAME-12642 Asset Browser: Create Animation Controller should leave the resulting new controller selected
- GAME-12478 Goto resource when resource is from core folder navigates incorrectly in the Asset Browser

## General

- GAME-18689 Failure to create a Scatter Brush if it has the same name as previously deleted brush
- GAME-23193 Window > Animation > Anim Clip and Skeleton menu items should be renamed to Clip Editor and Skeleton Editor (to match window titles)
- GAME-22126 Prevent animation compiler from replacing the root node
- GAME-21743 Color Picker palette file extension contains a redundant parenthesis
- GAME-22183 Save Selected saves unselected files
- GAME-22894 Script Editor: A new script file is created when docking a script file that was just created
- GAME-22958 Capture Frames window is sometimes created with the title bar outside the monitor borders
- GAME-21614 Story output fails to fire if an Event track node is placed on or near the last frame
- GAME-23092 Undo/Redo on data-service can lead to object being unexpectedly mutated
- GAME-23343 Searching in the Log Console is really slow
- GAME-22872 Nodes on Color graph aren't easily visible when working with greys
- GAME-21963 No 'Save Changes' prompt when switching levels through the Project Manager
- GAME-20446 Asset Preview shows 'Persp' and 'FullRender' menus that do nothing
- GAME-19951 Asset Preview can end up in the wrong position
- GAME-13947 Asset Preview errors when clicking a .platform.material in the Asset Browser
- GAME-23007 Entity Editor: Sub-menus in the component explorer does not display correctly
- GAME-22985 Navigation: "Filter out by Unit subname" is mislabeled as "Filter out by script data"
- GAME-22359 Navigation: Be able to exclude physics shape templates when generating navmesh
- GAME-22957 Cannot use appkit class.lua without the full appkit
- GAME-22202 VR Oculus and Vive: Oculus/SteamVR.set_tracking_space_pose(Matrix4x4) is deprecated. Use Oculus/SteamVR.set_tracking_space(Vector3, Quaternion, Vector3) instead
- GAME-22813 Explorer: The rename option shouldn't be available in the context menu for multiselection
- GAME-22291 Explorer and Asset Preview windows sometimes do not populate
- GAME-21551 Explorer: F2 doesn't work to rename layers
- GAME-22853 Pressing Spacebar when a checkbox has focus causes exception checkbox.js:45:24 unhandled exceptionTypeError: model is not a function
- GAME-22641 Clicking on a transformation field while holding Shift returns unhandled exception
- GAME-21974 Viewport options window can get into a state where it will not display
- GAME-21569 Cancelling the Save File dialog causes problems in the Save all dialog
- GAME-21824 Wrong frame rate when playing IVF videos
- GAME-18422 Arial DF font artifacts fixed by increasing character resolution while maintaining texture size

## Audio/Wwise

- GAME-23109 Audio: Wwise exporter temp files are locked before exporter can write to them
- GAME-21909 UI text: Viewport "Audio Render Enabled" changed to "Play audio sources"
- GAME-20014 Wwise editor doesn't close or update when switching projects in Stingray
- GAME-19834 After adding Wwise sounds to a project that had none, a restart is needed for sounds to play

## Deployer/Connections

- GAME-22411 No slaving option if the first localhost entry is changed to another device
- GAME-22052 Deployer: iOS Deployer panel is not grayed out when iOS binaries are not present
- GAME-21804 Android: Terminating the Stingray app on the slaved device incorrectly shows error message "Failed to run project"
- GAME-21764 Each time Run Project is done, another entry appears in the command target pulldown
- GAME-9934 Changing project while slaving doesn't disconnect the remote engines properly

## Engine Core

- GAME-23093 Camera controls are invisible and functional with GoogleVR
- GAME-23080 Console server lua commands fail to output traceback to console.exe and editor log.
- GAME-22911 Visual Studio debug visualization of plugin types is not working
- GAME-22576 Escape from basic-template Test Level with a dynamically-spawned ChamfBox gives error "Unloading a locked resource content/models/props/ChamfBox"
- GAME-22457 Debug shaders are compiled on Android release builds
- GAME-22173 Invalid format of saved game files causes crashes
- GAME-22076 Certain projects crash on Android 6.0 or greater due to missing permissions
- GAME-21809 Missing Light source level material results in warning at runtime
- GAME-21802 Android: Slaved viewport is stretched after dismissing lock screen on Pixel XL
- GAME-19424 iOS cardboard renders black if there is a dynamic light

## Flow

- GAME-22828 Flow and Particle Editor: Cannot open editor if file is saved in a mapped folder
- GAME-21290 Flow: Search box cyan highlight frame does not seem to be tall enough (only seen on sides)
- GAME-20934 Flow: Nodes should automatically update for changed External Input/Output pins instead of giving an error
- GAME-18119 Flow: Search bar should only count each field once
- GAME-18111 Flow: There is no shortcut for going to next/previous search result
- GAME-18106 Flow: Re-setting a Flow Subroutine to the same Flow resource clears all connections
- GAME-18099 Undoing removal of object referenced in a Flow node does not restore it in the Flow node
- GAME-18092 Flow: Tab quick-search menu doesn't have tooltips
- GAME-17349 Flow: Error message for a missing required input does not get shown in the status bar
- GAME-12762 Flow: Right-click in the background should clear the Tab search results
- GAME-12726 Flow: "Effect Resource" node "Resource" input should be renamed "Effect"
- GAME-8883 Flow: Tab search and right-click context menu can both be on the screen at the same time
- GAME-8094 Flow: When a larger node is under a smaller one, it always gets and stays highlighted as if selected
- GAME-16558 Double-clicking in the Level Flow Editor while compiling data produces an error
- GAME-15099 Flow: Searching nodes inside collapsed groups focus empty space
- GAME-16369 Error thrown for a Flow node without a unit
- GAME-18780 Subroutine nodes do not automatically refresh when saved
- GAME-5269 Undoing a drag-and-drop into a group leaves the node in the group and requires two Ctrl-Z undos
- GAME-14996 Weird Level Story Flow node context menu labels

## Interop

- GAME-23183 StingrayLinkSendTo with -selected sends the whole scene
- GAME-23181 Connection to Stingray doesn't update properly in 3ds Max when Stingray connection changes
- GAME-23122 Crash importing instanced geometry
- GAME-22666 Maya level sync Set Engine Resource ignores values in dialog
- GAME-22649 Maya -> Send to Stingray no longer works in developer builds
- GAME-21933 No feedback to user when editor external applications path is not set
- GAME-21838 Asset Browser: Should allow import of IVF video files
- GAME-21669 Skeleton creation fails if an FBX is re-imported into same folder, even if the folder is empty
- GAME-21364 Crash after import if the physics actor's nodes are removed from FBX

## Level Editor

- GAME-22378 Gizmo for point lights is hard to select from certain angles
- GAME-22491 Stalls in the tree view update while navigating large scenes
- GAME-22334 Selection ("hot") area for some object gizmo components is smaller than the visual representation
- GAME-22333 Focus does not change when dragging a unit into the level viewport
- GAME-21977 Light gizmos not displaying upon importing an FBX file with light
- GAME-22876 Exception thrown "New poses does not match number of level objects"
- GAME-18048 Open Level will open a level even when nothing is selected

## Particles

- GAME-23552 Particle Editor: Points added to the graph when the user does not click in the graph area
- GAME-23202 Particle Systems are not renamed properly after being re-ordered
- GAME-23185 Particle Editor: Moving particles through the editor breaks the Material resource reference
- GAME-22856 Full Render button in the Particle Editor preview area does nothing
- GAME-22852 Framerate on preview gets progressively worse when more viewport tabs are added
- GAME-22847 Particle Editor: Tilt and Spin in the editor is broken
- GAME-22804 Particle Editor: Shading environment is always set to default
- GAME-22461 Particle Editor: Effect using Tangent and Binormal crashes
- GAME-22371 Clicking on an asset opens a new window instead of bringing forward its editor
- GAME-21668 Particle Editor: Root options are shown when selecting the variable node without variables
- GAME-21568 Particle Editor: Undo an Add operation resets selection in the tree view
- GAME-20466 Asset Preview of a particle effect does not respect the Asset Preview background setting

## Rendering

- GAME-23274 Setting lights to "indirect" will bake 'direct light'
- GAME-23129 Texture streaming crashes
- GAME-23052 mini_renderer doesn't work on iOS Metal
- GAME-22978 Shader Graph: Channel specification dialog needs input validation (invalid input causes inability to open shader graph)
- GAME-22844 D3D11 doesn't allocate global constant buffer for all shaders
- GAME-22802 Performance issues with onboard GPUs on Windows
- GAME-22751 Crash using terrain on Steam VR
- GAME-22655 Perfhud reporting incorrect information
- GAME-22523 VRSLI: Poor rendering quality and screenspace artifacts on Vive and Oculus
- GAME-22077 Deadlock occurs when `RenderInterface::_message_ring_buffer` is full on render thread
- GAME-21918 Lightmapper Error: 'Compiler: Corrupt file: Unexpected end of data'
- GAME-20749 Sharing code between HLSL/HLSL fails to include some blocks
- GAME-16543 Lighmapping disables shape morph on baked units
- GAME-14377 Clear coat - excessive bloom (double specular)

## Texture Manager

- GAME-22732 Texture Manager: Only one texture is deleted/duplicated at a time when selecting multiple textures
- GAME-22389 Texture Manager: When a texture category is deleted, related textures should have their category properties set to "No category."
- GAME-22358 Importing FBX with textures does not update the Texture Manager list
- GAME-22195 Texture Manager: Long file paths makes it difficult to read the texture name
- GAME-22159 Texture Manager: Typo in option 'Generate Mip Step'
- GAME-22068 Texture Manager: Platforms checkbox list should be in a grid format
- GAME-22067 Texture Manager: Filter checklists should have right-justified checkboxes
- GAME-21970 Texture Manager: Cut Alpha Threshold slider can have negative values
- GAME-21962 Texture Manager: Input image should accept image file instead of textures
- GAME-21961 Texture Manager: Pressing Escape in the search/filter field should clear the field
- GAME-21928 Texture Manager: Textures thumbnails don't update when changing projects
- GAME-21920 Texture Manager: History panel does not use a resizer and is difficult to see
- GAME-21889 Texture manager selects all platforms by default
- GAME-21828 Texture Manager: Ctrl-Z and Ctrl-Y do not Undo/Redo
- GAME-21803 Texture Manager doesn't update when deleting or duplicating textures until the window is reloaded
- GAME-21788 Texture Manager: Create Template and Create Category are using the same icon

## Tools Foundation

- GAME-22923 Load dll dependencies when loading editor native extensions
- GAME-22596 Custom allocator for editor ConfigValue API is not used in free()
- GAME-22396 Threading error in Data Compiler - results MUST be posted on the dispatcher
- GAME-22210 Editor viewports are offset when using multiple monitors with mixed 4k and 1080p scaling
- GAME-22199 Saving dialog for unsaved textures, scripts, particles shows after switching projects
- GAME-13991 Multi-monitor setup with different scaling behaves badly
- GAME-13782 Context menu showing at the wrong location if dual monitors have different DPI scaling
- GAME-13781 Mouse interaction and transition between high-DPI and low-DPI monitors


[Return to top](#top)

## Known Limitations

* * *

This section lists known limitations and workarounds for Stingray.

Unless otherwise noted in the **What's Fixed** section, please be aware that this release contains the same **Known Limitations** described in the previous versions of Stingray Release Notes.

> **Note**: We recommended you back up your existing Stingray data or work on a copy of your project when using a beta version of Stingray.

- **GAME-22567 Main window, Project Manager, Getting Started, About Box and possibly other dialogs often come up smaller than they should be (and sometimes offset with blank areas)**

-	**GAME-23257 Directed Learning: Hands-on Training Mission option is not functional anymore**

-	**GAME-23441 Renaming an entity resource that is instanced in a level with changes causes an error**

- **GAME-23579 Android: Connection to device takes much longer (2x-3x) now than before**

-	**GAME-23563 Android: Scaleform buttons flicker/transparency glitches**

-	**GAME-23556 Android: Run Project no longer works reliably and often gets stuck indefinitely at "Installing Android Application"**

	**Workaround:** Retry after exiting and restarting Stingray.


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
