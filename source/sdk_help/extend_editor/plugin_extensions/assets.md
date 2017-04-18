# Register a custom asset type

You can use the `asset_types` extension to define how the editor should display and handle custom resource types in your project.

You might do this if you want your plug-in to help the user create and modify different kinds of files than the ones that are already handled by the Stingray editor. When you register a custom asset type, you can customize the way your resource files are shown in the **Asset Browser**, and what happens when one of your assets is opened (i.e. when a user double-clicks it in the **Asset Browser**).

-	You might also want to accompany your custom asset type extension with a *template* extension, which can create new assets of your custom type. See ~{ Define templates for new assets }~.
-	You also might want to set up a *preview* extension, which determines the behavior of the **Asset Preview** panel when the user selects an asset of your type in the **Asset Browser**. See ~{ Define previews for custom assets }~.
-	If you can use SJSON for storing your custom asset data, you can take advantage of some of the built-in editing and asset creation features offered by the editor. See ~{ Editing custom asset types }~.

## Configuration

Asset type extensions accept the following parameters.

~~~{sjson}
extensions = {
	asset_types = [
		{
			type = "csv"
			name = "Comma-separated data"
			description = "A data file exported from another application."
			category = "Custom"
			icon = "img/csv.svg"
			invoke = "open_in_spreadsheet $project/$1"
		}
	]
}
~~~

`type`

>	The resource type (that is, the file extension) of the asset type you want to register. Required.

`name`

>	A display name for this asset type. Optional.

`description`

>	A general description for this type of resource. Optional.

`category`

>	When you filter assets in the **Asset Browser**, you can use this category name to show and hide assets of your custom type. Optional.

`icon`

>	If specified, the **Asset Browser** uses this image as the thumbnail for all instances of this resource type in the project. The path must be relative to the location of your *.stingray_plugin* file. Optional.

`invoke`

>	An action or an array of actions that will be triggered when the user double-clicks an asset of this type in the Asset Browser. Each action can be either the name of an action that you have already set up in the `actions` extension, or an inline action definition. For more information, see ~{ Register an action }~.
>
>	In addition to the `$project` and `$editor` dynamic strings, you can use `$1` in this setting to specify the path within the project of the asset being invoked. So, you can get the full path to the asset file using `$project/$1`.
>
>	This setting is optional. If omitted, double-clicking an asset of this type in the **Asset Browser** has no effect.

---
Tags:
-	plugin
-	plug-in
---
