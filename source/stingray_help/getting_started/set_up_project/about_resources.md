# About resources

A Stingray game is made up of many data files, also known as *resources*. Each resource contains a small piece of the game's content, such as a texture or a character definition, that gets loaded into the game at runtime and used according to the gameplay rules you set up in Stingray.

Some of these resources contain content that you create in other content creation tools, like Maya, 3ds Max, or a texture painting application. These kinds of assets you import into your Stingray project. See the section on ~{ Importing assets }~.

Other kinds of resources you create and modify using the Stingray editing tools. Note that the Stingray resources are case sensitive.

## Core resources

Your project will also use a set of basic resources called "core" resources. These resources don't live in your project's source folder, and aren't visible in the **Asset Browser**. Instead, they accompany the Stingray application in your Stingray installation directory, and they are shared between all the projects you create.

One of the most important things for you to know about in the core resources is the *Appkit*, which is a collection of Lua scripts that provides support for some basic gameplay needs out of the box. For more on the appkit, see ~{ Scripting with Lua }~.

For a more in-depth discussion, see ~{ Working with core resources }~.

## The SJSON data format

Most of the resources that you work with in the Stingray editing tools are stored in your project's source folder in a human-readable data format called *SJSON*, for *simplified JSON*. As you work in the editing tools, the data in these resource files will get automatically updated. However, since the files are text-based, you can also modify them by hand.

For more details, see ~{ About the SJSON data format }~.

## Names and types

Each piece of content in your Stingray project is uniquely identified by a name and type. You will need to use these names and types in order to refer to the different resources in your project as you build your game.

-	The type of each resource is determined by its file extension.
-	The name of each resource is determined by its placement within the project. It is the fully qualified path to the file from the root of the project, using forward-slashes as separators, omitting the file extension.

For example, the *content/materials/floor.material* file within the project's source directory is a resource of type `material`. which you can refer to using the resource name `content/materials/floor`.

  > **Note:** When you need to refer to a resource by name, you need to use the name exactly in this formulation. It is a unique name, not a path: you cannot substitute backslash characters, and you cannot use relative or absolute disk paths.

  > **Note:** Periods in file and folder names are sometimes used for special purposes. For example, the *.s2d* folders created by Scaleform Studio are treated as a single resource by the engine, even though they are folders containing multiple files. Plugins can extend the engine with other types that behave the same way. Periods are also often used as suffixes for localization and platform mapping. I.e. `floor.ps4.material` to indicate a PS4-specific version of `floor.material`. For more information on this, see ~{ Localizing resources }~. Be aware when using periods in files and folder names to not use a suffix that has a special meaning, such as `.s2d` or `.ps4`. These special meanings are configured in `settings.ini`, so you can change them if you need to.
