# Stingray 1.6 Release Notes
<a name="top"></a>

Stingray 1.6 Beta (1.6.932.0) focuses on delivering great workflows between 3ds Max and Stingray, making it easy to send scenes from Max and produce stunning real-time renders with Stingray. With the new Render to Frames tool, you can now capture high quality videos of your interactive projects and share online.

> **Important**: We strongly recommended that you back up your existing Stingray data or work on a copy of your project when using a beta version of Stingray.

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

New level sync workflows let you automatically rebuild your 3ds Max scenes in Stingray. Once 3ds Max is linked to the Stingray editor, scene assets can be automatically or manually tagged, and then reproduced with the same layout in Stingray. Modifications you make to the assets in 3ds Max are then updated inside Stingray. This makes it easier to build, iterate, review and change scenes, without having to manually reproduce layouts in two tools. See ~{ Level Sync with Maya, Maya LT, or 3ds Max }~.

### Capture frames to disk

You can now capture the active camera or viewport and save frames to disk in the OpenEXR file format. The new Capture Frames tool also supports capturing frames on a test engine. For more information, see ~{ Capture Frames Tool }~.

### Improved Stingray and Beast lightmap baker options

The revamped Stingray and the Beast lightmap bakers now reflect more meaningful baker settings. See ~{ About baking with the Stingray baker }~ and ~{ About baking with Beast }~ for the updated options.


## Experimental features

### Faster launching of projects in a browser

Stingray now runs projects quickly in a web browser using WebGL. The launching process has been updated to load the content from a URL instead of packaging the compiled data to a separate folder and reading the data. The URL also displays the location of the content folder. See ~{ Run your project in a browser using WebGL }~. Also check out the updated settings if you ~{ Use Mozilla Firefox to run your project }~.

### Light baking improvements

Improvements to light baking and post-processing effects (SSAO, SSR) increase the lighting quality of architectural visualization scenes.  If you bake lighting, ambient occlusion is now automatically baked and stored in the alpha channel of your lightmaps. New shading environment properties help you control how to apply baked AO and SSAO to your final scene.

## Other Benefits

### New Stingray file extension

Browsing for Stingray projects has been made easy in this Stingray release. Stingray projects have a new unique file extension *.stingray_project* that you can use to open the projects. Double-click the *.stingray_project* file to open the project in the Editor.

### Simplified texture import

Stingray includes new texture categories and templates such as Normal, Linear Greyscale, Albedo, Albedo Opacity and Roughness/Metallic/AO templates to easily categorize textures and apply texture settings. The newly added texture templates in the **Texture Manager** come with default compression settings for each supported platform, allowing your textures to work on all platforms.  The textures imported in your project are now assigned the default compression settings.

[Return to top](#top)

## What's Fixed

### Animation

- GAME-6577 For looping animation, ensure first and last keys use same compression flag
- GAME-17610 Anim Controller Editor: Each editable object should remember its editing state (opened/closed categories)
- GAME-17608 Anim Controller Editor: Should be able to sort events by name, time, creation order
- GAME-17607 Anim Controller Editor: Disable Ctrl+Left/Right navigation when textfield is selected
- GAME-17727 Anim Controller Editor: Bug in marker time fixing on load
- GAME-17611 Anim Controller Editor: List of Flow event in the context menu of timeline should be sorted alphabetically
- GAME-17613 Anim Controller Editor: Ctrl+S should save the controller, not the level
- GAME-17615 Anim Controller Editor: ShortcutStates should have their own names

### Asset Browser

- GAME-17964 Asset Browser location not remembered between sessions
- GAME-17525 Renaming a folder to have a dot/period works but trying to rename it back fails with "Source path is equal to Destination path"

### Entities

- GAME-18039 Creating an entity with an invalid name may fail silently
- GAME-16798 Creating a new entity should leave it selected and showing in the Property Editor

### Flow

- GAME-4408 Delay node does not execute when attached to external event from unspawned unit
- GAME-17256 Trying to access actor of unit that has PhysX actor gives access violation

### General

- GAME-16358 Perfhud is displayed on top of viewport buttons
- GAME-13641 Test Level window sometimes opens completely offscreen
- GAME-14095 Double-clicking on a color swatch sometimes opens both the Color Picker Simple and the Color Picker dialogs
- GAME-18137 Remove editor viewport stalls by debouncing camera sync
- GAME-17469 Terrain: creation dialog fields need better input validation.
- GAME-12932 During Test Play switching back to Editor and doing F8 causes error "simple_project.lua:101: Level not loaded: `__level_editor_test`"
- GAME-18233 Don't use light with mesh as default light in the preview viewport of editors
- GAME-16615 When using scrollwheel or spinner-dragging to change multiple transformation fields all the fields should update
- GAME-18172 Markers are blurry on close-up
- GAME-18284 Disable non-applicable properties for non-offset animation
- GAME-18383 Terrain: missing input validation on empty Height Map Resolution gives failure on compiling, "Height field cooking failed", "Assertion failed `_buffer->size() >= size` at `input_archive.inl:42`"
- GAME-16481 Avoid Javascript error when the invoke array of an asset_type extension is empty
- GAME-16252 Editor should limit numbers to 32bit as default
- GAME-16203 Rename level_flow_editor plugins to flow_editor
- GAME-15040 Plugin Manager: Copy action does not resolve paths with spaces
- GAME-16488 Failed to re-use open-editor script editor named action
- GAME-16477 Updating an plugin asset type extension is not auto updated in the asset browser

### Interop

- GAME-10354 Using 'Send to Stingray' from DCC does not cause the Asset Browser to have spinning compiling icons
- GAME-15883 Korean characters do not come over correctly with send all from 3dsmax to Stingray
- GAME-15884 Node names in stingray do not match those in the Max scene using Korean characters
- GAME-17620 Periods/Dots '.' in material names prevent import into stingray

### Launcher

- GAME-16328 Updates take longer to appear than in the Desktop Manager
- GAME-16692 Search doesn't work in the Update tab
- GAME-17522 Mudbox Learning link takes to the Stingray docs
- GAME-17521 ReMake Learning and Documentation takes to the Stingray docs
- GAME-17512 FBX Review documentation points to the Maya LT 2017 overview
- GAME-16738 Clear Filters button looks like misaligned
- GAME-16736 Assets tab always shows the same assets in the first page for all programs
- GAME-16565 Download Progress bar only shows up after 23% of download completion
- GAME-16766 No message is displayed when no assets are found

###Lua

- GAME-17572 Hot reloading no longer works in Stingray 1.4 or 1.5
- GAME-17327 The DynamicData objects returned from the LevelResource are missing functions.
- GAME-14261 Crash in release for Lua calls to functions that are only exposed in dev builds

###Particles

- GAME-15985 Entering a longer value for a particle system Total gives "Error compiling resource" error
- GAME-16834 Changing total Particles crashes particle compilation
- GAME-17903 Windows exe renamed stingray_win64_dev.exe

### Platform-specific

- GAME-16903 HTML5 (WebGL2): After the first click, clicking in the game and moving the mouse in any direction sends the camera pointing up at the sky
- GAME-18416 Rebuilding GearVR on Android target does not initiate re-deploy
- GAME-16980 Expose sceKernelIsNeoMode to Lua on PS4
- GAME-16781 Remove legacy platforms from stingray-testbed
- GAME-16712 PS4 - Add threading to Trophies
- GAME-17450 SteamVR crash on startup if Steam not running

### Rendering

- GAME-18313 Particles shader does not show unless base color is set
- GAME-17703 Make Occluder function with local lights
- GAME-17394 Baker: Skylight leakage through transparent surfaces
- GAME-17410 Baker: Fails to serialize global light baking properties
- GAME-17244 Baker: Material fails sometimes for some objects
- GAME-17340 Creating a custom 'light base' (material resource) is broken
- GAME-17644 Recursive shader_source includes causes crash
- GAME-17435 VR Units linked to HMD need to have their culling structures updated
- GAME-13738 'TAA' visualization modes are broken in VR renderpipe
- GAME-13735 'Reconstructed Normals' visualization mode is broken using VR renderpipe
- GAME-13737 'Depth of Field' visualization mode is broken in VR renderpipe
- GAME-13536 Texture Manager: thumbnails often don't get properly generated (blank gray or wait icon)
- GAME-13417 Reflection Probe seems broken on XB1
- GAME-17592 Shadow ignored / pops on objects set in a distance greater than 250
- GAME-17279 Render target mip-map mismatch
- GAME-18269 VR: Support mono/stereo mirror view when running VR app
- GAME-14778 Many (450+) ShaderCompiler warnings when live linking character-template project to PS4
- GAME-13704 Reflection Probe: Glossiness in SSR vs probe reflections differs a lot
- GAME-16978 Bad error messages in PS4 renderer
- GAME-17745 "VR Un-Link Tracker" flow node is not unlinking the correct object.
- GAME-17227 Old PS4 shader does not work in V1.5
- GAME-16935 Spotlight with scale applied can cause staircase effects passing through a density set material
- GAME-17948 PS4: Terrain crashes game on PS4 in debug builds
- GAME-16968 VR: Culling on objects linked to tracker is wrong

### Scaleform Studio

- GAME-16456 WebGL switching back and forth between fullscreen mode breaks the UI

### Script Editor

- GAME-12328 Red error X flag can appear on wrong line (error line number gets out of sync)
- GAME-16089 Cannot open files from mapped folders (ex. from core/appkit)
- GAME-10477 Debugger: breakpoints on comment lines should be flagged or moved to next line of code

[Return to top](#top)

## Known Limitations

* * *

This section lists known limitations and workarounds for Stingray.

Unless otherwise noted in the **What's Fixed** section, please be aware that this release contains the same **Known Limitations** described in the previous versions of Stingray Release Notes.

> **Note**: We recommended you back up your existing Stingray data or work on a copy of your project when using a beta version of Stingray.

- **GAME-18398 After opening a v1.5 project in Stingray v1.5, all existing v1.6 projects require migration**

	After you launch Stingray 1.6 beta and create a project, if you then open Stingray 1.5 and work on your existing 1.5 projects, you'll be prompted to migrate your Stingray 1.6 projects the next time you work with Stingray 1.6 beta.

	**Workaround:** Click Ok when prompted to migrate your 1.6 projects, even though migration isn't actually required.

- **Previous VR templates will not work in v1.6. Expect to port any previous VR projects to use the new templates.**

	Stingray 1.6 is a significant update for VR. Instanced stereo rendering has now been implemented as a first class citizen of our base renderer which removes the need for the previous `vr_renderer.render_config`. Extra flow nodes for SteamVR and Oculus have also been provided to remove any tracking lag. 


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

-	This release mostly features the addition of several Flow nodes for working with entities.

-	Only one node has been removed: **Application > Get Source Platform**.

[Return to top](#top)
