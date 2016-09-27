# About the boot package

Every game must have at least one package, called the *boot package*. This package is automatically loaded when the game starts up, kick-starting the resource loading process.

You specify the boot package in the `boot_package` setting of your game's *settings.ini* file. See ~{ Stingray engine settings.ini file reference }~.

## Requirements

At a minimum, the boot package **must** contain:

-	The Lua boot script that is specified in the project's *settings.ini* file, and any other Lua script files required by that boot script.

## Recommendations

It is generally recommended that the boot package also contain:

-	All the `core` resources.

	Many features that help you author content in the Stingray editor are based on content in the core folder. For example, many Flow nodes rely on node definitions and Lua scripts located in the core resources -- some come from the Appkit, some from plug-ins like Scaleform Studio, HumanIK or Gameware Navigation. In addition, the Stingray rendering pipeline relies on data files stored in the `core` folder.

	It is not *required* that you include all the `core` resources in your boot package; you could pick and choose only the specific pieces of content that you actually use in your game. However, including the whole `core` folder avoids the possibility of accidentally leaving out important resources.

-	All the other Lua scripts in your project.

	This is not absolutely required; you can include your custom Lua scripts in other packages and load them in and out of memory during the course of your game. However, these script files tend to be relatively small in memory, so keeping them all loaded during the whole course of the game tends to simplify writing and debugging your gameplay code.

-	Any *.script_flow_nodes* resources that define custom Flow nodes in your project, along with any Lua scripts that contain the callback functions those nodes rely on.

	Loading these files in your boot package avoids the possibility of a flow graph for a character or a level accidentally trying to use a custom node that is not defined, or trying to invoke a Lua function that does not exist in the current Lua environment. See also ~{ Creating custom flow nodes }~.

-	All the other *.package* resources in your project.

	In bundled builds of your game, this is not necessary. Packages will always load correctly regardless of whether or not you have explicitly loaded their *.package* resources into memory.

	However, while running the game from compiled (non-bundled) data, you do need to have the *.package* resources available in order for the game to know which resources it needs to load for each package. It's easiest to add them all to the boot package, so that you will never try to load a package whose *.package* resource is unavailable.
