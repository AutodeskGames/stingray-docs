# Working with core resources

In addition to the resources that you import and create in the source folder, each project inherits a preset collection of "core" resources. These core resources are installed with {{ProductName}}, and are kept in the `core` folder within the installation directory. When you compile your project, the interactive engine automatically picks up the content from the core folder, compiles the files, and adds them to the project's compiled data.

Otherwise, the interactive engine treats core resources just like any other data resources in your project. If you want to use any of them in the engine at runtime, you need to make sure that they are included in your package definitions. This is typically done in your boot package.

Although many of the core resources are intended primarily to support the interactive editor, there are many that you are likely to want in your final app. For example, you are likely to need the Lua scripts for the Appkit and for the other plug-ins (such as Wwise, Gameware Navigation, or HumanIK). Use the `boot.package` and `main.package` provided with the template projects as a model.

## What's in the core

The core resources contain files with a variety of different purposes, including:

-	The Lua scripts and unit resources that make up the Appkit.
-	Flow node definitions, some with Lua callback functions.
-	Content that configures the way the engine behaves inside the editing tools. For example, this includes Lua scripts that define the way "gizmos" get drawn in the viewports, and the way different viewports behave and interact with the user.
-	Default unit resources that get used to represent things like primitives, lights, and cameras.
-	Resources used by the rendering system, including default materials and shader nodes.

## Core resources in the Asset Browser

By default, the ~{ Asset Browser }~ shows only your project folder. Sometimes, it can also be useful to be able to browse and open core resources. For example, if you are working on Lua code for a project that uses the Appkit, you may want to be able to browse the Appkit and SimpleProject code.

To view core resources, click the configuration icon ![Configuration](../images/icon_gear.png) in the **Asset Browser**, and enable the **Show Mapped Folders** option.

## Overriding core resources

You may want to modify or override the core resources in order to customize them for your own projects. Doing so implies a tradeoff between control and convenience. On one hand, you can take direct control of more of the content that goes into making your app. On the other hand, this may add some extra complexity when you upgrade to a newer version of {{ProductName}}, since each version comes with its own set of core resources.

You can override the core resources in either of two ways:

-	You can simply modify the files in your {{ProductName}} installation directory. Changes that you make here will apply to all of your projects.

	However, each new version of {{ProductName}} that you install will come with its own set of core resources. Therefore, after you install a new version of {{ProductName}}, you'll have to redo your changes in the new core resources in order for your changes to be taken into account when you use the newer version of {{ProductName}}.

-	You can create a `core` folder in your project. Any resources you add to this folder will override resources with the same name from the `core` folder in your installation directory. You can then copy any resources that you want to override for your project from the `core` folder in your installation directory to the `core` folder in your project, and modify them as you see fit.

	However, keep in mind that each new version of {{ProductName}} may make changes in its core resources in order to correct bugs or add new features. If you use this approach to override some (or all) of the default `core` resources, each time you install a new version of {{ProductName}} you should check the latest core resources to make sure that they will still work with your modifications. You may have to merge the latest changes from the default core resources into the ones you've overridden in your project.

Note that if you only want to modify or override some specific Lua code, you likely do not have to modify the core resources at all. Instead, you can redefine the Lua objects or functions that you want to modify within your own Lua code. For more information, see ~{ Customizing the Appkit
 }~.
