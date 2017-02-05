# Customizing the Appkit

If you want to use the Appkit in your game, but you want to customize some specific aspects of its behavior, there are several possible approaches you can follow. These are described in the following sections. Each has its own benefits and drawbacks. You can choose whichever you feel is most appropriate for the scope and nature of the modifications you want to make to the Appkit code.

## Option 1. Copying the Appkit into your project

You can copy the Appkit scripts and other resources into a `core/appkit` folder within your project's source folder, and change the copies freely. You can take all of the Appkit, or only selected files. Any resources you copy into the project will override the default versions of those resources.

Autodesk generally recommends using this approach whenever possible.

**Benefits and drawbacks:**

-	Your changes will not affect any other projects that you create with Stingray. Other projects will use the default Appkit from the core resources as usual, or they can have their own set of customizations.

-	Your changes remain isolated from the product installation folder, so your game will use the same code regardless of what version of Stingray you use.

	On the other hand, this means that when you upgrade to a new version of Stingray you might not benefit immediately from any additions, improvements or bug fixes that are made to the Appkit in the new version. You would need to merge the new Appkit code into your project's modified scripts.

-	Distributing your project for use by other people remains easy, since everything you need to share is contained in your project source folder.

-	It's easy to track your modifications in the same version control system you use for the rest of your project resources without the need to add parts of your installation folder into version control.

-	On the downside, this approach involves duplicating code and resources. If you have multiple projects ongoing, and you want to use the same modifications in all your projects, it can be challenging to keep all these copies in sync.

**To use this approach:**

Copy the `core/appkit` folder from your Stingray installation folder into your project, or take just the files you want to modify.

Make sure that any files you copy use the same path within your project's resources as they did previously within the installation directory. For example, a file named *core/appkit/lua/player_util.lua* within the core resources should still be found at *core/appkit/lua/player_util.lua* relative to the root of your project's source folder.

## Option 2. Modifying the Appkit core resources

You can change the Appkit script files in place within your Stingray installation directory. For example, *C:\\Program Files\\Autodesk\\Stingray\\\<version\>\\core*.

**Benefits and drawbacks:**

-	Your changes will apply to all projects that you open with this version of Stingray. You only have to make your modifications in one place.

-	Distributing your project's source and dealing with version control becomes more difficult, since you now have resources located in your application's installation directory in addition to the ones in your project's source folder.

-	When you upgrade to a new version of Stingray, your modifications will not be used until you copy or merge your customizations from the old version's core resources folder into the new version's core resources.

## Option 3. Overriding the Appkit in your project code

In your project's Lua scripts, you can redefine selected Lua objects and functions defined in the Appkit scripts.

For a code example, see the [Overriding the SimpleProject](using_simpleproject.html#overriding-the-simpleproject) section in the topic ~{ Using the SimpleProject }~. You can use this same approach to override the behavior of any other function, variable or object in the Appkit.

**Benefits and drawbacks:**

-	This is a quick and dirty way to make small overrides or test things out.

-	Your changes will not affect any other projects that you create with Stingray. Other projects will use the default Appkit from the core resources as usual, or can have their own set of customizations.

-	When you upgrade to a new version of Stingray, your project will benefit from any additions, improvements or bug fixes that are made in the new version in any parts of the Appkit that you have not overridden.

 	On the other hand, changes in the new version's Appkit scripts may break your overrides. For example, a function that you override may be renamed in the new version of Stingray, meaning that your override never gets called; or the function may have its parameters or return values changed in the new version, meaning that your override will not behave as expected.

-	The more extensively you override the base Appkit code inside your project, the more disjointed your codebase becomes, and the more difficult it is to follow the path of code execution when tracking down problems.

---
Related topics:
-	~{ Working with core resources }~

---
