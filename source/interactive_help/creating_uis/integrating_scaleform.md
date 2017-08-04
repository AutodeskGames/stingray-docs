# Integrating a Scaleform Studio project into Stingray

Most Stingray template projects (except for 'empty') include two UI templates that load when you run the project:

*	a player HUD (currently enabled only for PC, please see the associated Lua)
*	a main menu (available on all platforms by default).

The 'empty' template contains an empty Scaleform Studio project to help you get started, but it doesn't include the scripts found in other templates.

You can modify these templates to suit your game project, or create a new Scaleform Studio project and import it to your Stingray project.

### To import your own Scaleform Studio project to Stingray

1. Import your Scaleform Studio project to Stingray using the **Import** button in the Stingray **Asset Browser**.

 	This adds the project to a *s2d_projects* folder (which is created if it does not already exist).

2. Optional:  In your Stingray project, delete the Scaleform Studio templates located in *content/ui* folder.

	If you delete these files from disk, you also need to modify the `boot.package` file found in the template to delete the projects from the s2d section.

	The `boot.package` file includes all files within the Stingray project, so it's a good practice to add any Scaleform Studio project you import to the s2d section.


### To replace the main menu template in a Stingray project

1. Edit the `main_menu` script (located in *script/lua* folder) to load your project instead of the default template menu project, as follows:

	*	Change the project name with its relative path in  `scaleform.Stingray.load_project_and_scene("content/ui/simple_menu.s2d/simple_menu")`
command.
	*	Disable the `dispatch_event` calls, as they are only relevant for the `simple_menu`.

2. The `main_menu` file also includes a custom event listener which checks for events dispatched from Scaleform Studio.

	Modify the custom event handler function to listen for your Scaleform events and perform actions accordingly.

### To change or load a Scaleform Studio level

The Stingray templates load the appropriate template level by default. To change this or to add a new level:

1. Go to `project.lua`, add your level to the `Project.level_names = {}` line and invoke this level in `main_menu.lua` when an action is performed.

	For instance, in the basic template, modify the line `SimpleProject.change_level(Project.level_names.basic)` to point to your level instead of the basic level.
2.	You can either run the project or the menu level to test loading of your new level.

### Create a new Scaleform Studio project in Stingray

You can create Scaleform Studio projects in Stingray without importing them from Scaleform Studio.

1. In the **Asset Browser**, right-click in the folder where you want your Scaleform Studio project, and select **Create > Scaleform Studio Project**.

2. Enter a name for your project. This creates a Scaleform Studio project.

3. Double-click the project (or right-click, select **Open**) to open it in Scaleform Studio.
