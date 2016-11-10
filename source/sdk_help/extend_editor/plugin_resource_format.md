# About plug-in definitions

Every Stingray editor plug-in is defined in a data file with the *.plugin* resource type. To create a new plug-in, you have to create one of these files by hand.

This page describes the format of the *.plugin* file, and all of the basic configuration settings you can use.

## Sample *.plugin* file

The following code block provides a minimal working plug-in definition that you can use as a model to get started developing your own plug-ins. Copy and paste this information into a new text file with the *.plugin* extension, and make it available to the Plugin Manager using one of the methods described under ~{ Add and remove plug-ins using the Plugin Manager }~.

~~~{sjson}
// Required metadata about the plug-in, shown in the Plugin Manager.
//
name = "My Custom Plugin"
version = "1.0.0"

// Optional metadata about the plug-in.
//
description = "A minimal custom plug-in that triggers some Javascript code."
author = {
	name = "Stingray"
	company = "Autodesk inc."
	url = "https://gamedev.autodesk.com/"
}

// Extensions define the ways the plug-in extends the editor.
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
~~~

## Required metadata

Every plug-in definition must have the following settings.

`name`

>	The name to show for your plug-in in the **Plugin Manager**.

`version`

>	A string that you can use to distinguish different versions of your plug-in that you release. Use the format `<major>.<minor>.<build>` format, where each value is an integer that you increase as you update your plug-in. For example, a version numbered `1.2.300` should precede versions numbered `1.2.305`, `1.3.0`, `2.0.0`, etc.

## Optional metadata

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

## Extensions

Extensions define what your plug-in adds to the Stingray editor. Every plug-in needs at least one extension in order for the editor to load it successfully.

For more information on how extensions work and what extensions you can use in your plug-in, see ~{ Use extensions to define plug-in behaviors }~.

## Thumbnail images

The Plugin Manager displays a thumbnail image for each plug-in.

To customize this image for your plug-in, put a file named `thumbnail.png` in the same folder as your *.plugin* file.

---
Tags:
-	plugin
-	plug-in
---
