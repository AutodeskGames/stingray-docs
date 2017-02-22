# Define templates for new assets

You can use the `templates` extension to add:

-	new types of assets that users can create from the **Asset Browser**. In this case, you can define the type of asset, and what happens when a user tries to create a new asset of this type.

-	new template projects that will be listed on the **Templates** tab of the **Project Manager** window.

## Template assets

When a user clicks the ![Create asset icon](../../images/icon_createAsset.png) button in the **Asset Browser**, or right-clicks the resource view and selects **Create** from the drop-down list, the **Asset Browser** shows them a list of the types of assets they can create. A template extension adds a new entry to that list, and associates it with a series of *actions*.

This may be particularly useful if you are adding a new asset type to the editor with an *asset_type* extension, since it provides users an easy way to create new assets of that custom type. For an example of this usage, see the Scaleform Studio plug-in under *editor/plugins/scaleform_studio*.

You might also find it useful to hook into the asset creation menu for other reasons. For example, your plug-in might give users the ability to create standard Stingray assets that are already set up in a certain way, like a set of particle effects preset to simulate common effects like fire, rain, and smoke. In this case, your plug-in could give the user the ability to create a new asset from each of these pre-configured templates.

### Configuration

~~~{sjson}
extensions = {
	templates = [{
		type = "asset"
		name = "My New Asset Type"
		default_name = "default_asset_name"

		// Define the installation instruction actions
		create = ["my_custom_action", "another_action"]
	}]
}
~~~

`type`

>	Use `asset`. Required.

`name`

>	The display name that the **Asset Browser** should use for your template in its asset creation menu.

`default_name`

>	When the user chooses your template in the asset creation menu of the **Asset Browser**, they are prompted to provide a name for the new asset. This value determines the default name that is suggested to them.

`create`

>	An action or an array of actions that will be triggered when the user chooses your template in the asset creation menu of the **Asset Browser**. Each action you provide in this setting can be either the name of an action that you have already set up in the `actions` extension, or an inline action definition. For more information, see ~{ Register an action }~.
>
>	In addition to the `$project` and `$editor` dynamic strings, you can use the following dynamic strings:
>
>	-	`$name`: is replaced by the name the user gives to their new asset when prompted by the **Asset Browser**.
>	-	`$output_dir`: is replaced by the folder within the project in which the user has asked to create the new asset. That is, the folder that is currently selected in the **Asset Browser** when the user chooses your template from the asset creation menu.
>	-	`$type`: is replaced by the value of the `type` parameter.

## Template projects

Template projects that you set up in your plug-in descriptor are listed in the **Templates** tab of the **Project Manager**. Users can use them as starting points for new projects that they create, just like the default templates that ship with Stingray.

This can be useful if you want to provide users with a complete, working project that demonstrates how your plug-in should be used.

You will need to distribute the following files along with your plug-in:

-	the project's *.stingray_project* file.
-	the project's source folder, which contains all of the raw assets used in the project.
-	the project's Wwise folder.

You do not need to distribute any compiled data. The data will all be compiled when the user creates a new project from your project template.

### Configuration

~~~{sjson}
extensions = {
	templates = [{
		type = "project-template"
		path = "project/my_custom_scene.stingray_project"
	}]
}
~~~

`type`

>	Use `project-template`. Required.

`path`

>	The path to the *.stingray_project* file for your template project, relative to the *.plugin* file. Required.

---
Tags:
-	plugin
-	plug-in
---
