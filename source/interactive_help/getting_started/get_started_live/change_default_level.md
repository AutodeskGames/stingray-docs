# Change the default level for the Live template

Most 3ds Max Interactive templates, including Live, are set up with a default startup level. This defines the level that the engine loads when you use **Run Project** ![Run project](../../images/icon_run_project.png) in the editor, and when you run a deployed, standalone build of your project.

When you create a new project from the Live template, this default level is set to `content/levels/empty.level`. When you import a project created by the Live service, the default level is already set to the level that contains the Revit model. Either way, you can modify the default level to make the project open a new level that you've created from scratch.

To change the default level:

1.	Open the `settings/revit_live_scene_settings.ini` file in a text editor.

1.	Find the `default_level` setting, and modify it to the name of the level that you want your project to load by default. Like any other resource name in 3ds Max Interactive, this resource name should be relative to the root folder of your project.
