# Stingray 1.9 Release Notes
<a name="top"></a>

Welcome to the Stingray 1.9 (1.9.1358.0) Beta release.

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

## Updated DCC interop plug-ins

This release also includes an updated Stingray DCC Link plug-in to support Maya 2018 and Maya LT 2018. For information on the plug-ins, see ~{ Interop with Maya, Maya LT, or 3ds Max }~.

## Clear coat improvements

![](../images/clear_coat_rn.png)

Clear coat is now more energy conserving, which reduces bloom when using a clear coat material.

## Custom tone mapping

A new shading environment property lets you disable default tone mapping, and extend tone mapping through a custom plugin. See ~{ Shading environment properties }~.

>**Note:** It is recommended that you leave defatult tone mapping enabled unless you are implementing custom post effect features.

## Experimental feature: HoloLens updates

- A new experimental HoloLens project is now available for *source code customers* in the **Online Projects** tab in the **Project Manager**. See ~{ Get started on HoloLens }~.
- A new option (`mesh_both_sides`) has been added to the `Raycast` Lua function that lets you cast a ray against both sides of triangles. This parameter is needed for raycasting against a spatial mapping mesh on HoloLens.

## What else is new?

-	You can now exclude physics actors from navmesh generation by adding their shape templates in the **Excluded Physics Actor Shape Template** field in the ~{ Navigation options }~.
-	We have removed the **History** tool from the Stingray Editor. You can view the list of actions executed and undo/redo actions in the Particle Editor or the Texture Manager.
- The viewport option ![](../images/icon_assetPreview.png) to toggle playing of audio sources in the level is now renamed to **Play Audio Sources**.

## What's new for developers?

### Typescript and the JavaScript API reference

We're starting to move the editor's front-end JavaScript code to [TypeScript](https://www.typescriptlang.org/)! This won't change your life much as a plug-in developer, since the changes for now are mostly about how we manage our own source code in our repo. You can keep doing your editor plug-ins in plain JavaScript the way you have been.

But we wanted to mention that as a result of this change, we're also taking out our old JavaScript API reference docs for now. We don't think this is a terrible loss -- since they never fully covered the whole public API, you often had to go look for functions directly in the editor's source files anyway.

Our hope is that before long we'll be able to leverage the built-in type info in the new TypeScript code to generate a much more complete and more useful reference than we had before.

### Native zip support for editor plug-ins

The `stingray.fs` JavaScript API now offers built-in support for working with *.zip* files:

`stingray.fs.zip(folderPath:string, zipFilePath: string): boolean`

Creates a new zip file from the contents of *folderPath*, and names the new zip file *zipFilePath*. The return value indicates whether the new file was written.

`stingray.fs.zipinfo(zipFilePath: string): array.<{path:string, size:number}>`

Reads a zip file named *zipFilePath*, and returns an array of all objects contained in the zip. Each object in the array has a `path` member that identifies its filename within the zip, and a `size` member that contains its size when uncompressed.

`stingray.fs.unzip(zipFilePath:string, destinationPath: string): boolean`

Reads a zip file named *zipFilePath*, and extracts its contents to the folder named *destinationPath*. The return value indicates whether the extraction was completed successfully.

### Run Lua from JavaScript and get its result in a Promise

The JavaScript `engine-service` offers a new function, `evaluateScript()`. This function runs a Lua script in the engine's Lua environment, and returns a `Promise` that you can use to access the result of that Lua script. This makes it much easier for your plug-in's JavaScript code to get and use the results of Lua snippets, using the same asynchronous mechanism you use to call other JavaScript services provided by the editor.

For example:

~~~{js}
let snippet = "6 * 8";
engineService.evaluateScript(snippet).then(
	function (result) { console.log("The result is: " + result); }
);
~~~

[Return to top](#top)

## What's Fixed

## Previous known limitations:

These were late-breaking issues that affected Stingray 1.8 as known limitations. They really bugged us and we're extra happy to tell you we fixed them in Stingray 1.9.

- GAME-19426 iOS cardboard VR view only renders on part of the screen on iPhone 7 Plus
-	GAME-22597 Newly spawned shading environment entity does not work

## Asset Browser

- GAME-22874 The context menu is shown if releasing the rmb outside the Asset Preview area while zooming
- GAME-22659 Importing a texture when the texture already exists does nothing
- GAME-22495 Drag & drop from Windows Explorer into the Asset Browser from within the same project folder is not supported
- GAME-21855 Clearing Search Input in the Asset Browser results in Error
- GAME-21853 Search Result in Asset Browser does not update on "Search in" Option
- GAME-21075 Asset Browser: Home key doesn't take the cursor to the beginning of the search field
- GAME-12642 Asset Browser: Create Animation Controller should leave the resulting new controller selected
- GAME-21017 Online Assets: Assets sometimes fail to download but give no error
- GAME-20192 Explorer: Renaming a unit breaks link to the asset
- GAME-12478 Goto resource when resource is from core folder navigates incorrectly in the Asset Browser

## General

- GAME-22183 The Save Selected button saves unselected files
- GAME-21743 Color Picker palette file extension contains a redundant parenthesis
- GAME-23820 Crash when toggling Root Motion 'on' in the Asset Preview
- GAME-23465 Viewport doesn't show light grey when resetting the background level in the Skeleton Editor
- GAME-23193 Window > Animation > Anim Clip and Skeleton menu items should be renamed to Clip Editor and Skeleton Editor (to match window titles)
- GAME-22126 Prevent animation compiler from replacing the root node
- GAME-23397 Scatter Brush: "Frequency" property label should be changed to "Relative Frequency" for clarity
- GAME-18689 Failure to create a Scatter Brush if it has the same name as previously deleted brush
- GAME-22894 Script Editor: A new script file is created when docking a script file that was just created
- GAME-22371 Clicking an asset opens a new window instead of bringing forward its editor
- GAME-23092 Undo/Redo on data-service can lead to object being unexpectedly mutated
- GAME-22873 Settings are not stored for viewports
- GAME-21954 Online Assets: Missing textures when moving the environment folder
- GAME-20841 Renaming .texture file doesn't rename dependencies
- GAME-19985 Replacing all usage of a resource in the Dependency window  does not update the references
- GAME-23569 'slot name' conflict from "Sample texture" node in the Material Graph Editor causes a crash
- GAME-16401 Picking a swizzle mask for a material connection doesn't validate input correctly
- GAME-22872 Nodes on Color graph aren't easily visible when working with greys
- GAME-22293 Mouse pointer doesn't indicate that you can select a name
- GAME-20434 Item pick/choose dialogs should clear the selection and disable the Ok button when there are no search filter results
- GAME-21963 No 'Save Changes' prompt when switching levels through the Project Manager
- GAME-20446 Asset Preview shows 'Persp' and 'FullRender' menus that do nothing
- GAME-19951 Asset Preview can end up in the wrong position
- GAME-13947 Asset Preview errors when clicking a .platform.material in the Asset Browser
- GAME-23708 Story: Event tracks throw errors when objects are selected in the viewport
- GAME-23671 Search in the Story Editor doesn't work anymore
- GAME-23653 Story Editor: Capture frames initial resolution is not 1920x1080 even though the dropdown says so
- GAME-23549 Story Editor: The size of the default window doesn't show all the options available in the toolbar
- GAME-22958 Capture Frames window is sometimes created with the title bar outside the monitor borders
- GAME-21614 A Story output fails to fire if an Event track node is placed on or near the last frame
- GAME-23016 The Unit Editor viewport becomes stuck pure white after resizing
- GAME-23537 Spawn Entity from the Asset Browser results in duplicate calls and logs
- GAME-22853 Pressing Spacebar when a checkbox has focus causes exception checkbox.js:45:24 unhandled exceptionTypeError: model is not a function
- GAME-22641 Clicking a transformation field while holding Shift returns unhandled exception
- GAME-22011 Unhandled Exception when attempting to dock an empty window
- GAME-21974 Viewport options window can get into a state where it will not display
- GAME-21569 Cancelling the Save File dialog causes problems in the Save all dialog
- GAME-22291 Explorer and Asset Preview windows sometimes do not populate
- GAME-21551 Explorer: F2 doesn't work to rename layers
- GAME-22957 Cannot use appkit class.lua without the full appkit
- GAME-22202 VR Oculus and Vive: Oculus/SteamVR.set_tracking_space_pose(Matrix4x4) is deprecated. Use Oculus/SteamVR.set_tracking_space(Vector3, Quaternion, Vector3) instead
- GAME-20992 Templates using 'UnitUtils.set_material_selection_color' generate multiple warnings
- GAME-22016 Camera faces the wall when 'Run Project' is used on the 'HTC Vive template'
- GAME-18920 Occulus VR template in 'Esc' won't escape from 'Run Project'
- GAME-16859 Android: Vehicle game is not displaying the steering wheel bitmap
- GAME-23763 Stingray does not recognize that it has lost connection to the license server
- GAME-23750 Stingray does not support idle state for network license timeout period
- GAME-18422 Arial DF font artifacts fixed by increasing character resolution while maintaining texture size
-	GAME-22985 Navigation: "Filter out by Unit subname" is mislabeled as "Filter out by script data"
- GAME-22359 Be able to exclude physics shape templates when generating navmesh

## Audio/Wwise

- GAME-23687 Wwise bank dependency files may have old (unused) keys in them
- GAME-23109 Wwise Exporter temp files are locked before the Exporter can write to them
- GAME-21909 UI text: Viewport "Audio Render Enabled" changed to "Play audio sources"
- GAME-20014 Wwise Editor doesn't close or update when switching projects in Stingray
- GAME-19834 After adding Wwise sounds to a project that had none, a restart is needed for sounds to play
- GAME-15596 Audio preview/playback from the Property Editor can give error "WwisePreview stop event with no playing events."

## Deployer/Connections

- GAME-22411 Connections: No slaving option button is shown if the first localhost entry is changed to another device
- GAME-22052 Deployer: iOS Deployer panel is not grayed out when iOS binaries are not present
- GAME-21804 Android: Terminating the Stingray app on the slaved device incorrectly shows error message "Failed to run project"
- GAME-21764 Each time Run Project is done, another entry appears in the command target pulldown
- GAME-9934 Changing project while slaving doesn't disconnect the remote engines properly

## Engine Core

- GAME-23608 Change Level Flow node does not trigger Project level unload lua callback
- GAME-23093 Camera controls are invisible and functional with GoogleVR
- GAME-23080 Console server Lua commands fail to output traceback to console.exe and editor log
- GAME-22975 Engine crashes when --no-rendering flag is passed at startup
- GAME-22911 Visual Studio debug visualization of plugin types is not working
- GAME-22457 Debug shaders are compiled on Android release builds
- GAME-22173 Invalid format of saved game files causes crashes
- GAME-22076 Certain projects crash on Android 6.0 or greater due to missing permissions
- GAME-21809 Missing Light source level material results in warning at runtime
- GAME-21802 Android: Slaved viewport is stretched after dismissing lock screen on Pixel XL
- GAME-19424 iOS Cardboard renders black if there is a dynamic light
- GAME-18794 Clicking the Test Level button again before the game window appears gives an access violation

## Flow

- GAME-22828 Flow and Particle Editor: cannot open editor if file is saved in a mapped folder
- GAME-20934 Nodes should automatically update for changed External Input/Output pins instead of giving an error
- GAME-18780 Subroutine nodes do not automatically refresh when saved
- GAME-18111 There is no shortcut for going to next/previous search result
- GAME-18106 Re-setting a Flow Subroutine to the same Flow resource clears all connections
- GAME-18099 Undoing removal of object referenced in a Flow node does not restore it in the Flow node
- GAME-18092 Tab quick-search menu doesn't show node tooltips
- GAME-17349 Error message for a missing required input does not get shown in the status bar
- GAME-16558 Double-clicking in the Level Flow Editor while compiling data produces an error
- GAME-15099 Searching nodes inside collapsed groups focus empty space
- GAME-12762 Right-clicking the background should clear the Tab search results
- GAME-12726 "Effect Resource" node "Resource" input should be renamed "Effect"
- GAME-8883 Tab search and right-click context menu can both be on the screen at the same time
- GAME-8094 When a larger node is under a smaller one, it always gets and stays highlighted as if selected
- GAME-5269 Undoing a drag-and-drop into a group leaves the node in the group and requires two Ctrl-Z undos

## Interop

- GAME-23970 Exr image import does not select the HDR template
- GAME-23802 FBX import incorrectly handles 'show' and 'visibility'
- GAME-23735 FBX from 3ds Max crashes Stingray with Access violation
- GAME-23183 StingrayLinkSendTo with -selected sends the whole scene
- GAME-23181 Connection to Stingray doesn't update properly in 3ds Max when Stingray connection changes
- GAME-23122 Crash when importing instanced geometry
- GAME-22666 'Set Engine Resource' from Maya 'level sync' ignores values in dialog
- GAME-22649 Maya > Send to Stingray no longer works in developer builds
- GAME-21933 No feedback to the user when editor external applications path is not set
- GAME-21838 Asset Browser: Should allow import of IVF video files
- GAME-21669 Skeleton creation fails if an FBX is re-imported into same folder, even if the folder is empty
- GAME-21364 Crash after import if the physics actor's nodes are removed from FBX
- GAME-21304 Importing a file with 9000 materials stalls the editor
- GAME-18475 Send to stingray does not always update the unit thumbnail
- GAME-16090 Missing 'indeterminate checkbox style' after selecting 'Show > All Files' in the Export Asset dialog

## Level Editor

- GAME-22876 Moving an object gives error "New poses does not match number of level objects"
- GAME-22491 Stalls in the tree view update while navigating large scenes
- GAME-22378 Gizmo for point lights is hard to select from certain angles
- GAME-22334 Selection ("hot") area for some object gizmo components is smaller than the visual representation
- GAME-22333 Focus does not change when dragging unit into the level viewport
- GAME-21977 Light gizmos not displaying upon importing an FBX file with light
- GAME-18048 Open Level will open a level even when nothing is selected
- GAME-11650 Unit listing is missing in the Grid Size dialog
- GAME-11649 Edit > Duplicate / Delete works even if no unit is selected

## Particles

- GAME-23552 Particle Editor: Points are added to the Particle Scale graph when clicking outside of the graph area
- GAME-23405 Particle effect with collision in 2D rotation mode crashes viewport
- GAME-23202 Particle effect tree does not show the new name of a system after being re-ordered and renamed
- GAME-23185 Particle Editor: Moving particles through the editor breaks the Material resource reference
- GAME-22856 Full Render button in the Particle Editor preview area does nothing
- GAME-22852 Framerate on preview gets progressively worse when more viewport tabs are added
- GAME-22847 Particle Editor: Tilt and Spin in the editor is broken
- GAME-22804 Particle Editor: Shading environment is always set to default
- GAME-22461 Particle Editor: Effect using Tangent and Binormal crashes
- GAME-22371 Clicking an asset opens a new window instead of bringing forward its editor
- GAME-21668 Particle Editor: Root options are shown when selecting the Variables node that has no variables yet
- GAME-21568 Particle Editor: Undo an Add operation resets selection in the tree view
- GAME-20466 Asset Preview of a particle effect does not respect the Asset Preview background setting

## Rendering

- GAME-23618 .exr files are imported with a blue hue
- GAME-23541 VR: Mono view mode is lost when Oculus HMD is worn
- GAME-23129 Crashes involving 'Texture streaming'
- GAME-23052 'Mini renderer' doesn't work on iOS Metal
- GAME-22978 Shader Graph: Channel specification dialog needs input validation (invalid input causes inability to open shader graph)
- GAME-22844 D3D11 doesn't allocate global constant buffer for all shaders
- GAME-22802 Performance issues with onboard GPUs on Windows
- GAME-22751 Crash using terrain on Steam VR
- GAME-22669 Particle Editor: Engine crashes when restarting a project with a particle that is missing its material
- GAME-22655 Perfhud reporting incorrect information
- GAME-22523 VRSLI: Poor rendering quality and screenspace artifacts on Vive and Oculus
- GAME-22462 GoogleVR: Bad rendering with Live dataset on Nexus 6P, Pixel XL on S7
- GAME-22300 Manipulating a light's property after assigning a material breaks light
- GAME-22078 Atlased Shadow Mapping infinite loop
- GAME-22077 Deadlock occurs when `RenderInterface::_message_ring_buffer` is full on render thread
- GAME-21918 Lightmap Error: 'Compiler: Corrupt file: Unexpected end of data'
- GAME-20749 Sharing code between HLSL/GLSL fails to include some blocks
- GAME-20025 Using a Material Resource in a light will break the light
- GAME-18694 Potentially unsafe use of unsigned vs. signed 16-bit indices in MeshGeometry
- GAME-18072 Scaleform UI elements do not work with 'Mini renderer'
- GAME-16543 Lighmapping disables shape morph on baked units
- GAME-14377 'Clear coat' gives excessive bloom (double specular)

## Texture Manager

- GAME-22732 Only one texture is deleted/duplicated at a time when selecting multiple textures
- GAME-22358 Importing FBX with textures does not update the Texture Manager list
- GAME-22195 Long file paths makes it difficult to read the texture name
- GAME-21970 Cut Alpha Threshold slider can have negative values
- GAME-21962 Input image should accept image file instead of textures
- GAME-21961 Pressing Escape in the search/filter field should clear the field
- GAME-21928 Textures thumbnails don't update when changing projects
- GAME-21920 History panel does not use a resizer and is difficult to view
- GAME-21828 Ctrl-Z and Ctrl-Y do not Undo/Redo
- GAME-21803 Texture Manager doesn't update when deleting or duplicating textures until the window is reloaded

## Tools Foundation

- GAME-23560 Capture Frames: Content Browser window is sometimes created with the title bar outside the monitor borders
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

- **GAME-24078 Light baking will not consider units inside an entity**

- **GAME-20689 Remote sync from Wwise editor can't connect to Stingray on Android**

	When you try to connect to an instance of the Stingray engine running on an Android device using the **Remote** sync feature in the Wwise Editor, the connection to the device fails. In some cases, the engine on the device crashes. There is currently no workaround for this issue.

[Return to top](#top)

## Upgrade Requirements

* * *

The full installation guide for Autodesk products including Stingray is included in the Stingray online help, [here](http://www.autodesk.com/stingray-install-ENU "here").

This section explains the improvements and fixes that require specific upgrade steps for users currently using a previous version of Stingray.

### Shader compiler updates

The D3D10 compatibility flag, *D3D10_SHADER_ENABLE_BACKWARDS_COMPATIBILITY*, has been removed from the D3D11 shader compiler. This change affects users with custom shaders. Without the compatibility flag, you can no longer modify shader constants, as they are now considered static.  To modify values, you now need to create local variables.

### Clear coat changes

Updates have been made to improve clear coat. As a result, the behavior of the `Output` node has changed. If your project contains a clear coat material, you may need to adjust your content.

### Entity and component API changes

This release changes the way you interact with entity components in the Lua and C APIs. Each component now requires an ID that is unique within the entity that owns it. You use this ID to retrieve a reference to the individual entity instance from the component manager.

For an overview of how these component IDs and component instances work, check the ~{ Interact with entities during gameplay }~ page.

If you're using *either* the Lua or C APIs to interact with your entities, you'll probably have to update your code:

-	If you create a new component dynamically, you now need to give it an ID.

-	When you destroy an individual component or access information about a component, you will mostly be using references to the component *instances*. You can look up the instance from the component manager based on the component's ID and its entity. Some commonly used component functions, like `get_property()` and `set_property()`, also have new helpers like `get_property_by_id()` and `set_property_by_id()` that do the lookup for you.

-	Component *instances* are volatile. You can't save them and reuse them in future frames. Instead, you'll have to save the component's ID, and use that ID to look up the instance when you need it again in a later frame.

For some background on why we made these changes, see [the blog post](https://gamedev.autodesk.com/blogs/1/post/2892151168947775843).

### Lua API changes

For a complete list of all new, modified, and removed elements in the Lua API in this release, see the [version history](../../lua_ref/versions.html).

If your project contains any API elements that have been modified or removed, you will need to adjust your code accordingly.

The main changes are:

-	The APIs for creating, accessing and managing entity components has changed. See the [Entity and component API changes] section above.

-	Most `HumanIK` functions that previously took a context index now require a unit instead. The functions automatically retrieve the context associated with that unit.

### Xbox One XDK version

Stingray now requires the **October 2016 QFE 2** release of the XDK.

### PlayStation 4 SDK version

Stingray now requires **Version 4.0** of the PlayStation 4 SDK.

If you have trouble upgrading to this version from an older version of the SDK, try deleting any existing files from the `C:\ProgramData\SCE directory` before you install.

## Plug-in SDK changes for developers

If you've used the Stingray SDK to create plug-ins for previous versions of Stingray, this section summarizes the main changes in this release that might affect you.

### Engine C APIs

>	**IMPORTANT NOTE:** Binary compatibility is not guaranteed against the previous version! If you used the C plug-in APIs to create plug-ins for the engine, your plug-in may or may not work correctly against this version of Stingray. It *may* continue to work if your code does not use any of the APIs that have changed since the previous version. However, we strongly recommend getting the latest version of the Stingray SDK header files and re-compiling your plug-in's *.dll* against the new headers.

For a complete list of all new, modified, and removed elements in the engine plug-in API and C script APIs in this release, see the [version history](help.autodesk.com/cloudhelp/ENU/Stingray-SDK-Help/engine_c/versions.html).

### Editor C APIs

For a complete list of all new, modified, and removed elements in the editor plug-in API in this release, see the [version history](help.autodesk.com/cloudhelp/ENU/Stingray-SDK-Help/editor_c/versions.html).

In this release, the editor API has not changed significantly. There are no upgrade requirements; it should be binary compatible and API compatible.

### Editor JavaScript module paths

If your plug-in needs to refer to another script module that you ship with your plug-in, or a script module in a different plug-in, you may need to adjust the path you use when you refer to that module in `require()` and `define()` calls.

You used to be able to start your module paths with the name of your plug-in, and `require.js` would automatically resolve it. In this release:

-	If you're referring to a script file that you ship with your plug-in, we recommend using a simple relative path from the script file that contains the `require()` call to the module you want to invoke. Remove your plug-in name from the start of your path. For example:

	`require(['services/engine-service', 'components/list-view'], function(engineService, listView) { ... })`

-	If you're referring to a script file that is part of another plug-in, you now have to preface the plug-in name with `@` in order for `require.js` to resolve the path. For example:

	`require(['my-module-file', '../subfolder/my-other-module'], function(myModule, anotherModule) { ... })`

-	If you're referring to a service or component built in to Stingray, no change should be needed to your paths:

	`require(['@my-other-plugin/some-module', '@asset-browser/asset-browser-actions'], function(otherPluginModule, assetBrowserActions) { ... })`

[Return to top](#top)
