# Define previews for custom assets

You can use the `previews` extension to define the way the **Asset Preview** panel behaves when the user selects an asset of a specific type in the **Asset Browser**. If your plug-in adds a new type of resource to Stingray, this is a helpful way to provide users working in the editor with some visual feedback to distinguish between different resources of the same type within the project.

## How it works

The **Asset Preview** is an editor panel that hosts an engine viewport. The basic appearance and behavior of this panel and viewport are pre-set, but each preview extension can specialize that behavior for a specific type of resource. The preview extension does this by associating the resource type with script modules. The editor loads these modules when the user selects a resource of the specified type in the **Asset Browser**, and uses them as long as that resource is selected.

You can provide:

-	an optional JavaScript module that is invoked when the user selects and de-selects an asset of the specified type. Use this module if you want to carry out actions in the editor's JavaScript environment in response to the change in selection.

-	an optional Lua module that defines the behavior of the engine running behind the viewport. For example, you can make the engine spawn new assets, respond to keypresses over the viewport, etc. In most cases, you will want to set up one of these modules in order to make the viewport display the visual representation of the selected asset.

## Examples

The preview extension can be a little tricky to set up, since it involves setting up the plug-in configuration, the JavaScript module and the Lua module to all work together. Fortunately, you have some examples in the standard Stingray plug-ins that you can use as models for your own plug-ins:

-	The `blend_shapes` plug-in gives a good example of how a custom plug-in can use *resource*, *asset_type* and *preview* extensions together to define a new kind of asset. The *blend_shapes/preview-blend-shapes.js* and *blend_shapes/preview-blend-shapes.lua* files define the JavaScript and Lua modules used by its preview extension.

-	The `asset_preview` plug-in contains several different preview extensions for Stingray resources, like materials, textures, particle effects, and animations. Each is slightly different, so this is a good place to look to see a variety of different approaches.

	For example, the material preview extension is set up with a Lua module (*preview_behaviors/preview-material.lua*) that spawns a new sphere and assigns it the material the user has currently selected. On the other hand, the preview module for textures (*preview_behaviors/preview-texture.lua*) uses the `stingray.Gui` Lua API to render the texture in front of the viewport camera.

## Writing a JavaScript preview module

If you choose to provide a JavaScript module for your preview extension, your module should return an object that implements whichever of the JavaScript preview extension functions you need for your plug-in -- for example, `setup()`, `clear()`, `title()`, etc.

For example:

~~~{js}
define([], function () {
    'use strict';

	var MyAssetBehavior = {
		setup: function (config, asset, viewportName, $scope) {
            // ... do setup tasks here...
		}
	};

	return MyAssetBehavior;
});
~~~

For details on all the functions you can define in your module, and the parameters that the engine passes to those functions when it invokes them, see the comments in the *core/js/extensions/preview-behaviors.js* file and the JavaScript modules in the standard Stingray plug-ins that contain preview extensions.

## Writing a Lua preview module

If you choose to provide a Lua module for your preview extension, your module should return an object that implements a set of required functions. The *asset_preview* plug-in contains a base implementation of all of these functions in the *asset_preview/preview-behaviors/preview-base.lua* file. Typically, you will want to base your own Lua object on this base interface, and implement only the functions you need in order to customize the viewport and engine behavior the way you want it for your asset type.

For example:

~~~{lua}
local BasePreviewBehavior = require("preview_behaviors/preview-base")
local MyAssetPreviewBehavior = class(BasePreviewBehavior, MyAssetPreviewBehavior)

-- overrides BasePreviewBehavior.init(), calling the base implementation
function MyAssetPreviewBehavior:init (resource, asset_preview)
	BasePreviewBehavior.init(self, asset, asset_preview)

	-- ... do any custom Lua initialization here ...
end

-- ... reimplement other functions from the base here ...

return MyAssetPreviewBehavior
~~~

For a list of all the functions you can use in your Lua preview extension module, see the base interface defined in the *asset_preview/preview-behaviors/preview-base.lua* file.

## Configuration

Each preview extension requires the following configuration parameters.

~~~
extensions = {
	previews = [
		{
			type = "resource_type"
			name = "Resource Type"
			title = "Asset Preview Title"
			modules = ["my-resource-type-module.js" "my-resource-type-module.lua"]
			config = {
				enableViewportSettings = true
				viewportMenuEntries = {
					Physics = true
				}
			}
		}
	]
}
~~~

`type`

>	The resource type (i.e. the file extension) that will be associated with this preview extension. Most Stingray resources (like *.unit*, *.material*, *.texture*, etc.) already have built-in preview behaviors, so this will typically be a new kind of resource that your plug-in adds to Stingray. Required.

`name`

>	A display name for the asset type. Required.

`title`

>	The title that will be displayed in the **Asset Preview** when the user selects an asset of the specified type in the **Asset Browser**. Required.
>
>	In addition to the `$project` and `$editor` dynamic strings, you can use the following dynamic strings:
>
>	-	`$asset`: will be replaced by the resource name of the item currently selected in the **Asset Browser**.
>	-	`$type`: will be replaced by the `type` value above.
>
>	You can also make a custom `title()` function in your JavaScript module to take more direct control over the title, if needed.

`modules`

>	An array of all JavaScript and Lua modules that will define the behavior of the **Asset Preview** panel and its viewport when the user selects an asset of the given type in the **Asset Browser**. These file names must be specified relative to the location of your *.plugin* file. Required.
>
>	Note that if you include a Lua module, that module must also be in a mounted resource path used by the editor. That means, the module must be in the project source directory, in the core resources folder, or in a folder that is identified by a *resource* extension that you have configured for this plug-in (or one set up by a different installed plug-in, like the standard *asset_preview* plug-in). If the Lua module is not present in one of these paths, the editor will be unable to load it into the engine. See also ~{ Extend the Project Content }~.

`config`

>	An object that defines what kind of settings the user can configure for the viewport in the **Asset Browser**. Optional.
>
>	The editor reads the following keys from this file. In addition, since this object is passed to the `setup()` function in the JavaScript module you provide under the `modules` setting (if any), you can add your own keys to this object and read them back in your module.
>
>	`enableViewportSettings`
>
>	>	Determines whether the **Asset Preview** should show the settings icon ![Settings icon](../../images/icon_gear.png). If you set this value to `true`, use the `viewportMenuEntries` object to configure which settings are visible to the user in this menu, and the `defaultViewportSettings` object to set the default values of those settings.
>
>	`viewportMenuEntries`
>
>	>	Determines which viewport settings the user can control.
>	>
>	>	Some of these settings are found under the **View** menu inside the viewport itself, and some of these settings are found under the settings menu ![Settings icon](../../images/icon_gear.png) when `enableViewportSettings` is set to `true`.
>	>
>	>	All of the following settings are optional. If omitted, each of these settings is shown or hidden according to the default values shown below. Note that for settings that have a state the user can change, the default value of that setting -- as opposed to the *visibility* of the setting -- is set by the `defaultViewportSettings` object, listed after these default visibility settings.
>	>
>	>	`Grid`
>	>
>	>	>	Shows or hides the viewport's **View > Grid** menu item. Default is `true`.
>	>
>	>	`Gizmos`
>	>
>	>	>	Shows or hides the viewport's **View > Gizmos** menu item. Default is `true`.
>	>
>	>	`PerfHud`
>	>
>	>	>	Shows or hides the viewport's **View > Performance HUD** menu item. Default is `true`.
>	>
>	>	`Meshes`
>	>
>	>	>	Shows or hides the viewport's **View > Meshes** menu item. Default is `false`.
>	>
>	>	`Bones`
>	>
>	>	>	Shows or hides the viewport's **View > Bones** menu item. Default is `false`.
>	>
>	>	`RootMotion`
>	>
>	>	>	Shows or hides the ![Settings icon](../../images/icon_gear.png) **> Root Motion** menu item. Default is `false`.
>	>
>	>	`FollowCamera`
>	>
>	>	>	Shows or hides the ![Settings icon](../../images/icon_gear.png) **> Follow Camera** menu item. Default is `false`.
>	>
>	>	`Physics`
>	>
>	>	>	Shows or hides the ![Settings icon](../../images/icon_gear.png) **> Physics** menu item. Default is `false`.
>	>
>	>	`Flow`
>	>
>	>	>	Shows or hides the ![Settings icon](../../images/icon_gear.png) **> Flow** menu item. Default is `false`.
>	>
>	>	`PlaybackRate`
>	>
>	>	>	Shows or hides the ![Settings icon](../../images/icon_gear.png) **> Playback Rate** menu item. Default is `false`.
>	>
>	>	`BoneSize`
>	>
>	>	>	Shows or hides the ![Settings icon](../../images/icon_gear.png) **> Bone Size** menu item. Default is `false`.
>	>
>	>	`ResetToggles`
>	>
>	>	>	Shows or hides the ![Settings icon](../../images/icon_gear.png) **> Reset Toggles** menu item. Default is `true`.
>
>	`defaultViewportSettings`
>
>	>	Defines the default values for the settings listed above under `viewportMenuEntries`.
>	>
>	>	Note that this object contains the default value of the configuration setting itself, while `viewportMenuEntries` determines only the *visibility* of that setting. So, for example, `defaultViewportSettings.gizmoVisibility` controls whether or not gizmos are shown by default in the viewport, while `viewportMenuEntries.Gizmo` controls whether or not the **Gizmos** menu option is visible to the user.
>	>
>	>	`gridVisibility`
>	>
>	>	>	Controls the default setting of the viewport's **View > Grid** menu item. May be either `true` or `false`.
>	>
>	>	`gizmoVisibility`
>	>
>	>	>	Controls the default setting of the viewport's **View > Gizmos** menu item. May be either `true` or `false`.
>	>
>	>	`perfHudVisibility`
>	>
>	>	>	Sets which performance HUDs should be active in the viewport. Accepts an array containing one or more of the following values: `artist`, `audio`, `culling`, `fps`, `lua`, `memory`, `network`.
>	>
>	>	`showMesh`
>	>
>	>	>	Controls the default setting of the viewport's **View > Meshes** menu item. May be either `true` or `false`.
>	>
>	>	`showSkeleton`
>	>
>	>	>	Controls the default setting of the viewport's **View > Bones** menu item. May be either `true` or `false`.
>	>
>	>	`hasRootMotion`
>	>
>	>	>	Controls the default setting of the ![Settings icon](../../images/icon_gear.png) **> Root Motion** menu item. May be either `true` or `false`.
>	>
>	>	`doesFollowCamera`
>	>
>	>	>	Controls the default setting of the ![Settings icon](../../images/icon_gear.png) **> Follow Camera** menu item. May be either `true` or `false`.
>	>
>	>	`doesApplyPhysics`
>	>
>	>	>	Controls the default setting of the ![Settings icon](../../images/icon_gear.png) **> Physics** menu item. May be either `true` or `false`.
>	>
>	>	`doesApplyFlow`
>	>
>	>	>	Controls the default setting of the ![Settings icon](../../images/icon_gear.png) **> Flow** menu item. May be either `true` or `false`.
>	>
>	>	`playbackSpeed`
>	>
>	>	>	Controls the default setting of the ![Settings icon](../../images/icon_gear.png) **> Playback Speed** menu item. This setting is a percentage expressed as a decimal number. A value of `1` indicates 100%, a value of `0.8` indicates 80%, a value of `1.5` indicates 150%, etc.
>	>
>	>	`skeletonBoneSize`
>	>
>	>	>	Controls the default setting of the ![Settings icon](../../images/icon_gear.png) **> Bone Size** menu item. This setting is a percentage expressed as a decimal number. A value of `1` indicates 100%, a value of `0.8` indicates 80%, a value of `1.5` indicates 150%, etc.
>	>

---
Related topics:
-	~{ Extend the Project Content }~

---
