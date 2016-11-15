# Extend the project content

You can use the `resources` extension to make new resources available for use in the editor. When your plug-in is loaded, users are able to work with these resources like any other assets in their project or in the core resources folder.

For example, you could accompany your plug-in with a *.script_flow_nodes* file that defines some custom Flow nodes. A user with your plug-in installed would then be able to add your custom nodes into their Flow graphs. Or, your plug-in could include pre-made assets like units, materials and particle effects for users to drop directly into their levels.

Each folder that you share through a resource extension is treated as a "mapped folder", similar to the core resources folder. That means:

-	the **Asset Browser** does not show the assets by default. They will only be shown when the **Show mapped folders** or **Show all files** options are active.
-	the assets in your shared folder are read-only. In order to modify them, a user would need to duplicate them in the project folder.

See also ~{ Working with core resources }~.

## Configuration

Every resource extension accepts just one configuration parameter:

~~~{sjson}
extensions = {
	resources = [
		{
			path = "my-plugin-assets"
		}
	]
}
~~~

`path`

>	The path to a folder that contains the resources you want to make available to the editor. This path is relative to the location of your *.plugin* file.

## Resource extensions and resource packages

Stingray offers a system for streaming bundles of resources in and out of memory while the game is running. This is typically used when a project grows too large to fit all resources into memory at the same time. For background information, see the pages under ~{ Loading and unloading content at runtime }~.

If a project that uses custom resource packages like this also uses any resources shared by a plug-in's resource extensions, that project's authors need to make sure that their resource packages also include whatever resources it needs from the plug-in's resource folders.

---
Tags:
-	plugin
-	plug-in
---
