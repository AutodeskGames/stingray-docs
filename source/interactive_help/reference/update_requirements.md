# Update requirements

This page is for people who have already been using an earlier version of 3ds Max Interactive to work with a content project, and want to update to the latest version.

As we work on improving the interactive engine and editing tools, we sometimes need to make changes that affect the way your content looks or behaves in the engine. We do our best to handle these changes automatically, by migrating your project content the first time you load it up in a newer version of the editor.

However, we've made 3ds Max Interactive a flexible set of tools for you to create unique content in ways that we can't always predict ahead of time, and we like it that way. That means that we can't always handle everything automatically. Each time you update to a new version of the engine and tool set, you may need to make some small adjustments to your content so that it will continue to work the way you're expecting.

This page summarizes those adjustments.

>	**Tip:** See also [What's New in 3ds Max](?guid=GUID-363CEC29-BDC2-441B-AD22-674CD7A95593) to read about the new features we've introduced in this release.

## 3ds Max and 3ds Max Interactive versions

It may be useful for you to know which releases of 3ds Max include which versions of the 3ds Max Interactive engine:

| 3ds Max release | 3ds Max Interactive release |
| --------------------------------------------- |
| 2018 Update 4   | 2.0                         |
| 2018 Update 3   | 1.8                         |
| 2018 Update 2   | 1.8                         |
| 2018 Update 1   | 1.8                         |

## Clear coat changes

We've improved our clear coat rendering effect to be more realistic and physically plausible. If your project contains any clear coat materials, check to make sure that you're still getting the visual results that you want.

## Shader compiler updates

The D3D10 compatibility flag, *D3D10_SHADER_ENABLE_BACKWARDS_COMPATIBILITY*, has been removed from the D3D11 shader compiler. This change affects users with custom shaders. Without the compatibility flag, you can no longer modify shader constants, as they are now considered static. To modify values, you now need to create local variables.

## Entity and component API changes

This release changes the way you interact with entity components in the Lua and C APIs. Each component now requires an ID that is unique within the entity that owns it. You use this ID to retrieve a reference to the individual entity instance from the component manager.

For an overview of how these component IDs and component instances work, check the ~{ Interact with entities during gameplay }~ page.

If you're using *either* the Lua or C APIs to interact with your entities, you'll probably have to update your code:

-	If you create a new component dynamically, you now need to give it an ID.

-	When you destroy an individual component or access information about a component, you will mostly be using references to the component *instances*. You can look up the instance from the component manager based on the component's ID and its entity. Some commonly used component functions, like `get_property()` and `set_property()`, also have new helpers like `get_property_by_id()` and `set_property_by_id()` that do the lookup for you.

-	Component *instances* are volatile. You can't save them and reuse them in future frames. Instead, you'll have to save the component's ID, and use that ID to look up the instance when you need it again in a later frame.

For some background on why we made these changes, see [the blog post](https://gamedev.autodesk.com/blogs/1/post/2892151168947775843).

## Lua API changes

For a complete list of all new, modified, and removed elements in the Lua API in this release, see the [version history](?guid=__lua_ref_versions_html).

If your project contains any API elements that have been modified or removed, you will need to adjust your code accordingly.

The main changes are:

-	The APIs for creating, accessing and managing entity components has changed. See the [Entity and component API changes] section above.

-	Most `HumanIK` functions that previously took a context index now require a unit instead. The functions automatically retrieve the context associated with that unit.

## Xbox One XDK version

Stingray now requires the **October 2016 QFE 2** release of the XDK.

## PlayStation 4 SDK version

Stingray now requires **Version 4.0** of the PlayStation 4 SDK.

If you have trouble upgrading to this version from an older version of the SDK, try deleting any existing files from the `C:\ProgramData\SCE directory` before you install.

# Plug-in SDK changes for developers

If you've used the Stingray SDK to create plug-ins for previous versions of Stingray, this section summarizes the main changes in this release that might affect you.

## Engine C APIs

>	**IMPORTANT NOTE:** Binary compatibility is not guaranteed against the previous version! If you used the C plug-in APIs to create plug-ins for the engine, your plug-in may or may not work correctly against this version of Stingray. It *may* continue to work if your code does not use any of the APIs that have changed since the previous version. However, we strongly recommend getting the latest version of the Stingray SDK header files and re-compiling your plug-in's *.dll* against the new headers.

For a complete list of all new, modified, and removed elements in the engine plug-in API and C script APIs in this release, see the [version history](?guid=__engine_c_versions_html).

## Editor C APIs

For a complete list of all new, modified, and removed elements in the editor plug-in API in this release, see the [version history](?guid=__editor_c_versions_html).

In this release, the editor API has not changed significantly. There are no upgrade requirements; it should be binary compatible and API compatible.

## Editor JavaScript module paths

If your plug-in needs to refer to another script module that you ship with your plug-in, or a script module in a different plug-in, you may need to adjust the path you use when you refer to that module in `require()` and `define()` calls.

You used to be able to start your module paths with the name of your plug-in, and `require.js` would automatically resolve it. In this release:

-	If you're referring to a script file that you ship with your plug-in, we recommend using a simple relative path from the script file that contains the `require()` call to the module you want to invoke. Remove your plug-in name from the start of your path. For example:

	`require(['services/engine-service', 'components/list-view'], function(engineService, listView) { ... })`

-	If you're referring to a script file that is part of another plug-in, you now have to preface the plug-in name with `@` in order for `require.js` to resolve the path. For example:

	`require(['my-module-file', '../subfolder/my-other-module'], function(myModule, anotherModule) { ... })`

-	If you're referring to a service or component built in to Stingray, no change should be needed to your paths:

	`require(['@my-other-plugin/some-module', '@asset-browser/asset-browser-actions'], function(otherPluginModule, assetBrowserActions) { ... })`
