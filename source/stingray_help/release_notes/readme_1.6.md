# Stingray 1.6 Release Notes
<a name="top"></a>

Stingray 1.6 (1.6.1011.0) focuses on delivering great workflows between 3ds Max and Stingray, making it easy to send scenes from Max and produce stunning real-time renders with Stingray. With the new Render to Frames tool, you can now capture high quality videos of your interactive projects and share online.

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

### Better interop with 3ds Max

New level sync workflows let you automatically rebuild your 3ds Max scenes in Stingray. Once 3ds Max is linked to the Stingray editor, scene assets can be automatically or manually tagged, and then reproduced with the same layout in Stingray. Modifications you make to the assets in 3ds Max are then updated inside Stingray. This makes it easier to build, iterate, review and change scenes, without having to manually reproduce layouts in two tools. This workflow also brings more Vray material properties into the Stingray shader, ensuring your Vray materials look and feel the same in Stingray as they do in 3ds Max. See ~{ Level Sync with Maya, Maya LT, or 3ds Max }~.


![](../images/sr-to-3ds.png)

### Capture frames to disk

You can now capture the active camera or viewport and save frames to disk in the OpenEXR file format. The new Capture Frames tool also supports capturing frames on a test engine. For more information, see ~{ Capture Frames Tool }~.

### Open SDK for engine plug-ins (alpha)

You can now write plug-ins for the Stingray engine in C without needing source code access! This greatly improves the ability for all customers to extend Stingray. You can hook the runtime engine in to other third-party libraries and middleware SDKs, support your own custom data types, write your own gameplay code in C, and more.

For details on getting started, see the [Stingray SDK Help](http://www.autodesk.com/stingray-help?contextId=SDK_HOME).

### Improvements and additions for editor plug-ins

-	You can use the new `viewports` extension to incorporate an engine viewport into your plug-in's panels and views, with full control over what the engine in that viewport loads, and over how the user interacts with the viewport. [See here for details](http://help.autodesk.com/view/Stingray/ENU/?guid=__sdk_help_extend_editor_plugin_extensions_viewports_html).

-	You can add new contextual actions for the editor to show when users right-click an asset or a level object in an engine viewport. [See here for details](http://help.autodesk.com/view/Stingray/ENU/?guid=__sdk_help_extend_editor_plugin_extensions_contextual_actions_html).

-	You can now call out from the editor's JavaScript environment to C functions you provide in a *.dll* file. [See this overview](http://help.autodesk.com/view/Stingray/ENU/?guid=__sdk_help_extend_editor_native_extensions_html).

-	You can use the `views` extension to set up named views and panels, which you can then open from other extensions in your plug-in, or even from other plug-ins. [See here for details](http://help.autodesk.com/view/Stingray/ENU/?guid=__sdk_help_extend_editor_plugin_extensions_views_and_dialogs_html).

### Procedural meshes in Lua

You can now use Lua to create new geometry on the fly as your project is running. You can create meshes, apply materials, and have the resulting objects be lit and shaded dynamically like any other object that you placed in the scene using the Stingray editor.

![Procedural mesh example](../../lua_ref/procedural_meshes.gif)

Here's [the sample code](../../lua_ref/exa_ex__snippets_proc__meshes.html) for the scene above to get you started.

### Improved lightmap baker

The revamped Stingray and the Beast lightmap bakers now reflect more meaningful baker settings. See ~{ About baking with the Stingray baker }~ and ~{ About baking with Beast }~ for the updated options.

## What's New in Rendering

### Light baking improvements

The following Improvements to light baking and post-processing effects (SSAO, SSR) increase the lighting quality and performance of architectural visualization scenes:

- Ambient occlusion is now automatically baked and stored in the alpha channel of your lightmaps.
- New shading environment properties help you control how to apply baked AO and SSAO to your final scene. You can also run SSAO in screen space or world space. See ~{ Shading Environment Properties }~.
- A new screen space reflection algorithm reflects GGX and matches up with pre-convoluted IBL reflection probes.
- Normalization of lightmap resolution is now based on the UV space area.
- UV seam fixup now automatically runs as a post-processing effect when you bake lightmaps.
- Improved interaction with a lightmapped level, such as material management and object manipulations, without losing the lightmap.

### VR Improvements

- When running or testing your game using a VR app, the game image appears in your HMD (head mount display) and on your mirror window (your monitor). Set the new vr_mirror_mode setting in the settings.ini to mono (default) or stereo to control the display on the mirror window. See ~{ Stingray engine settings.ini file reference }~.
- Instanced stereo rendering is now built in to the default renderer provided with Stingray, and all material and post effect shaders are now VR-enabled to implement this optimization. See ~{ VR in Stingray }~.
- The VR Oculus Touch template now supports input from the Oculus Remote and Oculus Touch Controler. The template now ships with Oculus flow nodes. See ~{ Template projects}~.
- The VR SDK Version has been upgraded to 1.7.0.0. See ~{ Supported platforms }~.

## Ready to learn Stingray?

With Stingray 1.6, we aim to give you two things you need when learning anything new: more time, and some advice on where to start!

Hobbyists, enthusiasts, and early adopters can now run Stingray using a non-commercial Startup license. If the 30-day trial period didn't give you enough time, check out the [terms and conditions](http://www.autodesk.com/company/legal-notices-trademarks/terms-of-service-autodesk360-web-services/autodesk-web-services-entitlements/stingray-startup-license) to see if you're eligible for the non-commercial license. Updated steps to install using this license are included in the [Stingray Installation Supplement](http://help.autodesk.com/view/Stingray/ENU/?guid=GUID-2835E17D-888F-459E-A622-0CD8ED983A91) topic.

In addition, if you're tired of searching for and watching tutorial videos, pop open the Stingray **Help** menu and select the brand new top-secret Stingray **Hands-on Training Mission**. We've added 5 quick, *interactive* tutorial lessons that take you through the Stingray basics, and get you well on your way to creating your own project. (Pssst - it's not really a secret. Let us know what you think!) We added a note about this in the ~{ Getting Started }~ topic.

<iframe width="854" height="480" src="http://player.ooyala.com/iframe.html?pbid=6055f5a2061d4016b11ebf1fa8a7751e&amp;platform=html-fallback&amp;ec=luNHlvNzE6jwDXsnEs7PWQYH5vEvraL9" frameborder="0" allowfullscreen></iframe>

## What else is new?

### Conditional transitions in Animation Controller

The animation controller adds a new node, TransitionSwitch to control the flow of transitions at runtime by evaluating an expression. This expression is defined in the TransitionSwitch and can use Animation Controller variables and functions ("sin", "cos", "abs", etc.). Any transition incoming into a TransitionSwitch, called  TransitionSwitchEntry, is triggered by an Anim Event, and one of the outgoing transitions, called TransitionSwitchExit, is taken depending on the outcome of the expression evaluated against the interval range values for this exit defined in the TransitionSwitch. See ~{ Animation controller states }~.

### Cloth simulation improvements

When importing a cloth object, you do not need to manually add the APEX cloth definitions to the corresponding physics file. The cloth definitions are imported along with the object and you can now add the cloth resources to the object in the Unit Editor. See ~{ Enable APEX Cloth }~.

### Flow support for entities

You can now use Flow to control entities:

-	We've added [several new nodes](../../flow_ref/cat_Entity.html) that you can use to spawn entities dynamically in the level, to set and retrieve data in your entities' components, and to respond to entities being spawned and unspawned.

-	You can use the new Flow component to assign a Flow graph to an entity. You can use these Flow components to set up reusable behaviors for your entities, much like the way that each type of unit has its own Unit Flow. See ~{ Set up an entity's behavior using Flow or Lua }~.

### Stingray file extension

Stingray projects now use the unique file extension *.stingray_project*, making it easy to find and open projects. Double-click the *.stingray_project* file to open the project in the Editor. Updated Help topics include: ~{ Open an existing project }~ and ~{ About the project structure }~.

### Removed restrictions on periods in file and folder names

In previous versions of Stingray, the `.` character had a special meanings when used in the names of resources and folders -- to denote resource *variants*. This meant that you weren't free to name your files and folders the way you wanted, and it could sometimes cause problems when importing source art files with periods in their names. All of these restrictions have been lifted; you are now free to use periods in resource names as much as you want.

### Simplified texture import

Stingray includes new texture categories and templates such as Normal, Linear Greyscale, Albedo, Albedo Opacity and Roughness/Metallic/AO to help you categorize textures and apply texture settings. The newly added texture templates in the **Texture Manager** come with default compression settings to work on each supported platform. The textures imported in your project are now assigned the default compression settings. See ~{ Import a model with textures and materials }~.

### Download new plug-ins

Download new Stingray plug-ins and update existing ones using the **Get more plugins** selection in the **Plugin Manager**. Select any of the available plugins and click **Install** to download it. See ~{ Add and remove plug-ins using the Plugin Manager }~.

### Switch between DX11 and DX12 when rendering

Source customers can now toggle between DX11 and DX12 as the viewport renderer in the Editor (**Edit > Engine > Renderer**). Note that this option is available only if you compile the engine with `--use-d3d12` flag, provided your engine supports DX12. See ~{ Switch between DX11 and DX12 }~.

### FBX Version 2017.1

This release of Stingray picks up the latest version of FBX (2017.1), which provides various security improvements.

### Protect dev-only Lua functions

Some functions in the Lua API are intended for use only during development, but not in your final release. For example, this is true for anything relating to debugging, using console connections with the editor, autoloading resources, performance monitoring, etc. Since these functions aren't available in the release build, trying to call one of them from your gameplay code crashes the engine.

To avoid the possibility of letting any calls to these functions slip through the cracks when you release your game, you can now ask the development build of the engine to print a warning whenever one of these functions is called.

Use the `stingray.Application.toggle_dev_only_warnings()` function to turn these warnings on and off. Then, before you release, check that you're not seeing any of these warnings turn up in your logs.

## Experimental features

### Faster launching of projects in a browser

Stingray now runs projects quickly in a web browser using WebGL. The launching process has been updated to load the content from a URL instead of packaging the compiled data to a separate folder and reading the data. The URL also displays the location of the content folder. See ~{ Run your project in a browser using WebGL }~. Also check out the updated settings if you ~{ Use Mozilla Firefox to run your project }~.

[Return to top](#top)

## What's Fixed

### Animation

- GAME-6577 For looping animation, ensure first and last keys use same compression flag
- GAME-17610 Anim Controller Editor: Each editable object should remember its editing state (opened/closed categories)
- GAME-17608 Anim Controller Editor: Should be able to sort events by name, time, creation order
- GAME-17607 Anim Controller Editor: Disable Ctrl+Left/Right navigation when textfield is selected
- GAME-17727 Anim Controller Editor: Bug in marker time fixing on load
- GAME-17611 Anim Controller Editor: List of Flow event in the context menu of timeline right-click context menu should be sorted alphabetically
- GAME-17613 Anim Controller Editor: Ctrl+S should save the controller, not the level
- GAME-17615 Anim Controller Editor: Shortcut states should have their own names

### Asset Browser

- GAME-17964 Asset Browser location not remembered between sessions
- GAME-17525 Renaming a folder to have a dot/period works but trying to rename it back fails with "Source path is equal to Destination path"
- GAME-17958 Pressing 'F' to frame after dragging a mesh from Asset Browser doesn't work

### Entities

- GAME-18039 Creating an entity with an invalid name may fail silently
- GAME-16798 Creating a new entity should leave it selected and showing in the Property Editor

### Flow

- GAME-4408 Delay node does not execute when attached to external event from unspawned unit
- GAME-17256 Trying to access actor of unit that has PhysX actor gives access violation
- GAME-18511 Get Camera Vertical FOV, Near Range, Far Range don't work properly
- GAME-13555 Quit node exits Test Level but gives error "Testing failed. See logs."
- GAME-8004 Tooltip for object under cursor should be hidden on right-click context menu
- GAME-17745 "VR Un-Link Tracker" node is not unlinking the correct object
- GAME-18513 Custom fields in dynamic section of flow nodes is broken

### General

- GAME-16358 Perfhud is displayed on top of viewport buttons
- GAME-13641 Test Level window sometimes opens completely offscreen
- GAME-14095 Double-clicking on a color swatch sometimes opens both the Color Picker Simple and the Color Picker dialogs
- GAME-18137 Remove editor viewport stalls by debouncing camera sync
- GAME-12932 During Test Play switching back to Editor and doing F8 causes error "simple_project.lua:101: Level not loaded: `__level_editor_test`"
- GAME-18233 Don't use light with mesh as default light in the preview viewport of editors
- GAME-16615 When using scrollwheel or spinner-dragging to change multiple transformation fields all the fields should update
- GAME-18172 Markers are blurry on close-up
- GAME-18284 Disable non-applicable properties for non-offset animation
- GAME-17469 Terrain: creation dialog fields need better input validation.
- GAME-18383 Terrain: missing input validation on empty Height Map Resolution gives
 failure on compiling, "Height field cooking failed", "Assertion failed `_buffer->size() >= size` at `input_archive.inl:42`"
- GAME-12089 Terrain: Terrain creation dialog needs Size limits
- GAME-18304 Engine crash with "Terrain loaded while other terrain is loaded"
- GAME-16481 Avoid Javascript error when the invoke array of an asset_type extension is empty
- GAME-16252 Editor should limit numbers to 32bit as default
- GAME-16203 Rename level_flow_editor plugins to flow_editor
- GAME-15040 Plugin Manager: Copy action does not resolve paths with spaces
- GAME-16488 Failed to re-use open-editor script editor named action
- GAME-16477 Updating an plugin asset type extension is not auto updated in the asset browser
- GAME-18639 Dialogs can end up behind the main editor window
- GAME-18852 Z also toggles position snap. It should only toggle rotation snap
- GAME-17320 Entering a very large rotation value crashes the engine
- GAME-14960 Missing Yes/No shortcut keys in Save Changes dialog
- GAME-17483 Wwise deadlock in update_async_reads
- GAME-18460 About Box: Product License Information button doesn't do anything
- GAME-18344 Content: Primitive units use the actor type "mesh" instead of a simplified volume

### Interop

- GAME-10354 Using 'Send to Stingray' from DCC does not cause the Asset Browser to have spinning compiling icons
- GAME-15883 Send All from 3ds Max does not work correctly when using localized file names
- GAME-15884 Localized node names from 3ds Max do not transfer correctly
- GAME-17620 Material names containing periods do not import

###Lua

- GAME-17572 Hot reloading no longer works in Stingray 1.4 or 1.5
- GAME-17327 The DynamicData objects returned from the LevelResource are missing functions

###Particles

- GAME-15985 Entering a longer value for a particle system Total gives "Error compiling resource" error
- GAME-16834 Changing total Particles crashes particle compilation
- GAME-17903 Extra x64 in Windows exe name

### Platform-specific

- GAME-18416 Rebuilding GearVR on Android target does not initiate redeploy
- GAME-16980 Expose sceKernelIsNeoMode to Lua on PS4
- GAME-16712 PS4: Add threading to trophies
- GAME-17948 PS4: Terrain crashes game on PS4 in debug builds
- GAME-17450 SteamVR crash on startup if Steam not running

### Rendering and VR

- GAME-18313 Particles shader does not show unless base color is set
- GAME-17703 Make Occluder function with local lights
- GAME-17394 Baker: Skylight leakage through transparent surfaces
- GAME-17410 Baker: Fails to serialize global light baking properties
- GAME-17244 Baker: Material fails sometimes for some objects
- GAME-13000 Baker: Make sure baker doesn't pause when editor loses focus
- GAME-12884 Light-baking data lost after changes are made in the Property Editor
- GAME-13975 Mesh loses Lightmap when applying a new material
- GAME-17340 Creating a custom 'light base' (material resource) is broken
- GAME-17644 Recursive shader_source includes causes crash
- GAME-13536 Texture Manager: thumbnails often don't get properly generated (blank gray or wait icon)
- GAME-13417 Reflection Probe seems broken on XB1
- GAME-17592 Shadow ignored/pops on objects set in a distance greater than 250
- GAME-17279 Render target mip-map mismatch
- GAME-14778 Many (450+) ShaderCompiler warnings when live linking character-template project to PS4
- GAME-13704 Reflection Probe: Glossiness in SSR vs probe reflections differs a lot
- GAME-16978 Bad error messages in PS4 renderer
- GAME-17227 Old PS4 shader does not work in V1.5
- GAME-16935 Spotlight with scale applied can cause staircase effects with materials containing density
- GAME-13222 Beta Lightmapper will pause if the UI is set to background
- GAME-17816 Shadow mesh lacks normal information
- GAME-13322 Changing property on a material output node does not dirty flag the material resource
- GAME-15534 VR: Test Level button launches viewport at 60fps instead of required 90fps
- GAME-16968 VR: Culling on objects linked to tracker is wrong
- GAME-17435 VR Units linked to HMD need to have their culling structures updated
- GAME-18269 VR: Support mono/stereo mirror view when running VR app
- GAME-13738 'TAA' visualization modes are broken in VR renderpipe
- GAME-13735 'Reconstructed Normals' visualization mode is broken using VR renderpipe
- GAME-13737 'Depth of Field' visualization mode is broken in VR renderpipe

### Script Editor

- GAME-12328 Red error X flag can appear on wrong line (error line number gets out of sync)
- GAME-16089 Cannot open files from mapped folders (ex. from core/appkit)
- GAME-10477 Debugger: breakpoints on comment lines should be flagged or moved to next line of code

[Return to top](#top)

## Known Limitations

* * *

This section lists known limitations and workarounds for Stingray.

Unless otherwise noted in the **What's Fixed** section, please be aware that this release contains the same **Known Limitations** described in the previous versions of Stingray Release Notes.

> **Note**: We recommend you back up your existing Stingray data or work on a copy of your project when using a beta version of Stingray.

- **GAME-18398 After opening a v1.5 project in Stingray v1.5, all existing v1.6 projects require migration**

	After you launch Stingray 1.6 beta and create a project, if you then open Stingray 1.5 and work on your existing 1.5 projects, you'll be prompted to migrate your Stingray 1.6 projects the next time you work with Stingray 1.6 beta.

	**Workaround:** Click Ok when prompted to migrate your 1.6 projects, even though migration isn't actually required.

- **Projects built on previous VR templates will not work in Stingray 1.6**

	Stingray 1.6 is a significant update for VR, and as a result projects built with the previous VR templates no longer work. You'll need to manually migrate assets from your previous VR projects into the updated VR templates. We apologize for this, but we hope the improvements we've made for VR help to ease the pain.

	The Stingray renderer now implements instanced stereo rendering, which removes the need for the previous vr_renderer.render_config. In addition, we've added Flow nodes for SteamVR and Oculus to remove any tracking lag. Check out the What’s New section of the release notes for more details on the VR improvements.

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

### Forward axis settings

To preserve the forward direction in imported assets, set the forward axis setting (`reverse_forward_axis`)   in *.stingray_project*  instead of *settings.ini*. See ~{  Best practices: preserving axis orientation }~.

In projects that you migrate from earlier versions of Stingray, the forward axis setting is still read from *settings.ini*.

### Localized resources and resource variants

If you have an existing project that uses the old Stingray resource property system to denote different variants of your resources, you may need to do some additional customization in your *.stingray_project* file. The engine no longer automatically recognizes resources as being variants based on the `.` character in their resource names. Now, a new `data_compiler` setting in the *.stingray_project* file tells the data compiler exactly which suffixes it should treat as property names. This applies both for platform property names (like `.ps4` or `.ios`) and for language and content property names (like `.en`, `.ja` or `.lowres`). This gives you even more control over the property system, and eliminates restrictions on using periods in file and folder names.

To set up the compiler so that resource suffixes work the same way they did previously for platforms, you'll need to make sure that your *.stingray_project* file contains a `data_compiler` block like the ones you'll find in the latest project templates:

~~~{sjson}
data_compiler = {
	file_folder_extensions = [
		".s2d"
	]
	resource_overrides = [
		{
			platforms = [
				"win32"
			]
			suffix = ".win32"
		}
		{
			platforms = [
				"ps4"
			]
			suffix = ".ps4"
		}
		{
			platforms = [
				"xb1"
			]
			suffix = ".xb1"
		}
		{
			platforms = [
				"ios"
			]
			suffix = ".ios"
		}
		{
			platforms = [
				"android"
			]
			suffix = ".android"
		}
	]
}
~~~

If you also use different versions of your resources for different languages, you'll have to also include your language suffixes:

~~~{sjson}
data_compiler = {
	resource_overrides = [
		{suffix = ".ja", flags = ["ja"]}
		{suffix = ".fr", flags = ["fr"]}
	]
}
~~~

You'll also have to change the way that you identify which of these language flags should be active, by calling the new `stingray.Application.set_resource_override(flag_name, priority)` function.

For complete details, see ~{ Localizing resources }~.

### Advance notice: moving to Visual Studio 2015

This is planned to be the last release of Stingray to support Visual Studio 2012 for rebuilding all components from source code. The develop branch has already moved to Visual Studio 2015.

[Return to top](#top)
