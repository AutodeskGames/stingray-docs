# Define a Stingray Plug-in

Every Stingray plug-in is defined in a data file with the *.plugin* resource type. When you start work on a new plug-in, you have to create one of these files by hand.

This page describes the format of the *.plugin* file, and all of the configuration settings you can use.

>	**NOTE:** At the moment, engine-only plug-ins do not require a *.plugin* file. All that's needed to get an engine-only plug-in to run is to drop its *.dll* file into the engine's plugin folder. However, in future the *.plugin* file will be used for engine plug-ins too, so we recommend always creating one.

## Sample *.plugin* file

The following code block provides a minimal working plug-in definition that you can use as a model to get started developing your own plug-ins. Copy and paste this information into a new text file with the *.plugin* extension, and make it visible to the editor's **Plugin Manager**. For more on using the **Plugin Manager**, see [here](http://help.autodesk.com/view/Stingray/ENU/?guid=__stingray_help_plugins_add_remove_plugins_html).

If you're familiar with the [`package.json` format](https://docs.npmjs.com/files/package.json) used by [node.js](https://nodejs.org/en/), many of these fields will be familiar to you already.

~~~{sjson}
// [Required metadata] about the plug-in, shown in the Plugin Manager.
//
name = "My Custom Plugin"
version = "1.0.0"

// [Optional descriptive metadata] about the plug-in.
//
description = "A minimal custom plug-in that triggers some Javascript code."
author = {
	name = "Stingray"
	company = "Autodesk inc."
	url = "https://gamedev.autodesk.com/"
}

keywords = ["plugin"]
license = {
    type = "MIT"
    url = "https://opensource.org/licenses/MIT"
}
repository = {
    type = "git"
    url = "http://www.github.com/octocat/hello-world.git"
}

// [Extensions] define the ways the plug-in extends Stingray.
// All plug-ins need at least one extension in order to be successfully loaded.
//
extensions = {
	menus = [{
		path = "Edit/Hello world"
		action = {
			type = "js"
			script = """
				console.warn('Hello!')
			"""
		}
	}]
}

// [Dependencies] that your plug-in needs in order to work.
platforms = ["win64"]
dependencies = {
	"stingray" = ">=1.6"
}
~~~

As an alternative, you could copy the *.plugin* file from any of the built-in Stingray plug-ins, or from any of the sample plug-ins, for your starting point. Just make sure you change all the configuration values -- especially the unique `name`.

## Required metadata

Every plug-in definition must have the following settings.

`name`

>	The name to show for your plug-in in the **Plugin Manager**.
>
>	This name must be unique among all loaded plug-ins, so we recommend using something specific that is not likely to conflict with similar plug-ins made by other third-parties.
>
>	TODO:invalid characters! Scopes?

`version`

>	A string that you can use to distinguish different versions of your plug-in that you release. Use the format `<major>.<minor>.<build>` format, where each value is an integer that you increase as you update your plug-in. For example, a version numbered `1.2.300` should precede versions numbered `1.2.305`, `1.3.0`, `2.0.0`, etc.
>
>	See the documentation for the `SemVer` [Semantic Versioning](http://semver.org/) system.

## Optional descriptive metadata

The following parameters are all optional. They are used only for display purposes in the **Plugin Manager**.

`description`

>	A brief summary of what your plug-in does.

`author`

>	Identifies you. This may be either a simple string name, or an object with the following keys (all optional):
>
>	`name`
>
>	>	Your name.
>
>	`company`
>
>	>	The name of your organization.
>
>	`url`
>
>	>	A web address for you or your organization.
>
>	`email`
>
>	>	An e-mail address where users of your plug-in can reach you.

## Optional descriptive metadata for future use

The following parameters are all optional. They are intended for future use, but we do recommend including them now even if they have no immediate use.

`keywords`

>	An array of strings that describe what your plug-in does. These may be used in future to help people find your plug-in.

`license`

>	The software license that you want to govern your plug-in. This indicates the rights that Stingray users have to install, use, modify, and redistribute your plug-in. The value of this property may be a single string value from the [SPDX license list](https://spdx.org/licenses/), or it may be an object that contains the following values:
>
>	`type`
>
>	>	A string description of your license type, usually the name of the license.
>
>	`url`
>
>	>	A web address where a user can read and download a full copy of the license.

`repository`

>	A place where users can download or clone the code for your plug-in, if available. If your plug-in is open-source, including this field can help direct people to the right place in order to contribute to the development of your plug-in. This value should be an object with the following fields
>
>	`type`
>
>	>	A string that describes the type of code repository your plug-in uses, like `svn`, `git`, `bitbucket`, etc.
>
>	`url`
>
>	>	A web address where a user can download and potentially contribute to your plug-in's source code.

## Extensions

Extensions define what your plug-in adds to the Stingray system. Every plug-in needs at least one extension in order for the editor to load it successfully.

-	If your plug-in needs to add new content that should be available to all projects, you'll configure one or more `resources` extension. For details, see ~{ Extend the project content }~.

-	The other extensions that you can configure in this file set up the points of integration between your plug-in and the Stingray editor. For more information on how these extensions work and what extensions you can use in your plug-in, see ~{ Use extensions to define plug-in behaviors }~.

## Dependencies

Stingray is a complex system, with a lot of interactions between different components that change from time to time. It's very likely that you'll intend your plug-in to be used only in some cases -- for example, only on certain platforms, or only against a certain version of Stingray, or only when a certain other plug-in is *also* installed, etc.

You can use the `platforms` and `dependencies` properties to identify exactly what other platforms, plug-ins and versions your plug-in needs.

>	**NOTE:** The dependencies you specify are not currently enforced. However, we encourage you to start including them now. Not only will this give you less to do later when Stingray starts to enforce the versioning, but it can also be helpful in general to identify exactly what your plug-in really depends on.

`platforms`

>	An array of strings that identify the platforms your plug-in is intended to support. Currently, all plug-ins support only `win64` -- see also ~{ Alpha SDK Limitations }~.

`dependencies`

>	An array of items that lists which other Stingray plug-ins your plug-in depends on, and which versions of those other plug-ins must be installed. The key of each item must match the `name` key of another Stingray plug-in, and the value of that key should be a `SemVer` string that denotes the compatible versions of that plug-in.
>
>	For example, `"stingray" >= "1.5"` means that the base Stingray app must be at least version 1.5 in order to successfully load the plug-in. Or, if your plug-in makes use of a new feature introduced by the new `script_editor` plug-in in version 1.6 of Stingray, you might also add `"Script Editor" >= "1.1.0"`. Note that for plug-in dependencies, the version number is the version of the *plug-in* as listed in that plug-in's *.plugin* descriptor file, not the version of Stingray that contains the version of the plug-in you want to match.
