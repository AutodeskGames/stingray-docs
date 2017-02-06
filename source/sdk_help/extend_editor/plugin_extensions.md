# Use extensions to define plug-in behaviors

*Extensions* define the points of integration between your plug-in and the Stingray editor: that is, the things that your plug-in changes or adds to the editor when it's loaded.

The editor's plug-in system defines a number of different kinds of extensions that you can use in your plug-in:

-	`menus` add new items to the main menus of the Stingray editor, like **File**, **Edit**, **Window**. See ~{ Create a new menu item }~.

-	`actions` define reusable commands or script blocks that you can refer to from other extensions in your plug-in. See ~{ Register an action }~.

-	`services` add new JavaScript worker services to the editor. Your plug-in (or other plug-ins) can require and use these services in exactly the same way as the standard Stingray editor services. See ~{ Register a custom service }~.

-	`asset_types` tell the **Asset Browser** how to handle new types of data files in the project -- that is, files whose extensions don't match any known asset types. See ~{ Register a custom asset type }~.

-	`templates` identify pre-made assets or projects that you provide with your plug-in, which the editor can use to create new assets and projects. See ~{ Define templates for new assets }~.

-	`previews` control the way the **Asset Preview** behaves when the user selects a given type of resource in the **Asset Browser**. See ~{ Define previews for custom assets }~.

-	`migrations` offer your plugin a chance to carry out some actions the first time the editor loads a project while this version of your plugin is installed.

-	`events` register your plug-in to listen for editor events with a given name, and to carry out an action or a set of actions when that event happens. See ~{ Respond to an editor event }~ for configuration instructions, and ~{ Emit and handle editor events }~ for more background about events.

-	`views` give names to custom UI panels and dialogs that your plug-in adds to Stingray. You can then open these named views from other extensions in your plugin (e.g. from menu items), or even from other plug-ins. See ~{ Create a named panel or dialog }~.

-	`viewports` help you integrate an engine viewport into your plug-in's views and panels, like the ones you see in the **Level Viewport** or the **Asset Preview**. See ~{ Create a custom engine viewport }~.

Every plug-in needs to have at least one of these extensions. There is no limit to the number of extensions that a plug-in can have.

## Configuring extensions

You set up extensions in your *.plugin* resource file, in the `extensions` object:

~~~{sjson}
extensions = {
	actions = [
		{
			...
		}
	]
	menus = [
		{
			...
		}
		{
			...
		}
	]
	asset_types = [
		{
			...
		}
	]
}
~~~

Each type of extension the editor supports has its own named list inside the `extensions` object -- like `menus` and `actions` above. Each of these lists can have any number of objects inside it, each of which configures a single instance of that type of extension. So, for example, the configuration above registers one new action, two new menu items, and one new asset type.

Each type of extension has its own set of configuration parameters too, which you need to set up. See the other pages in this section for details on the parameters required for each different extension type.

## String variables in extension data

Most of the configuration parameters you set for the extensions in your plug-in are string values. In these values, you can use some special placeholder values that the editor automatically replaces.

Currently, you can use the following variables:

-	`$project`: This string is replaced by the path to the current project's source folder.

-	`$editor`: This string is replaced by the directory that contains the Stingray editor executable: that is, the `editor` folder under your Stingray installation directory.

Some extensions also add more of these dynamic strings. See the pages in this section for details.

---
Tags:
-	plugin
-	plug-in
---
