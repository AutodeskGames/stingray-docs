# Reloading resources

While you're working on your project's assets -- for example, tweaking the properties of a material or a particle effect -- it's usually easier to get the effect you want if you can see your changes immediately in the context of your scene.

The interactive editor's asset preview and level editing viewports always show you the most up-to-date changes to your assets and scenes. But, sometimes you'll want to see your modifications live in the engine, running on the final target platform for your project.

This page explains how you can get a running instance of the engine to "hot-reload" an asset: that is, to reload it immediately into memory and show you the very latest changes.

## Refresh assets automatically

Whenever you change an asset in your project, the editor automatically refreshes each connected engine to show the latest changes. This works for any engine that you launch using the Test Level ![Test Level](../images/icon_test_level.png) or Run Project ![Run Project](../images/icon_run_project.png) button.

This helps you work seamlessly whenever you're working on an asset that is saved in its own data file in the project folder.

-	**Materials** and **particle effects** are updated immediately in the engine any time you modify the object's properties in the editor. This provides you with immediate feedback while you make even small adjustments, like dragging sliders and picking colors.

-	For most other types of assets, such as unit resources, terrains, and animation controllers, you have to save your modifications to the file on disk. The editor detects the modification to the file on disk, re-compiles the resource, and refreshes the engine.

-	**Levels:** If you use the interactive editor to change any information that is saved in a *.level* resource -- such as moving objects around in the scene, placing new units, changing the properties of the entities or units that you've placed in the level, or modifying the Level Flow graph -- the editor treats your *.level* asset exactly the same as the other kinds of assets described above. It automatically recompiles the level resource, then asks all connected engines to refresh the level with the new content.

	However, if the connected engine *currently* has that modified level loaded up at the time that you save your modifications to the level, you won't be able see your changes immediately. You'll have to exit and restart that level in the engine in order for your changes to appear.

## Force assets to recompile

The source data files for your resources live in your project folder, but the engine loads *compiled* versions of that data from your project's `_data` folder. (See ~{ About the content lifecycle }~.) So, whenever you modify the source data file for a resource, that asset has to be recompiled into the compiled data folder before it can be loaded in game.

As mentioned above, the editor automatically recompiles most kinds of resources immediately when you save them. However, one exception is Lua files -- if you modify one or more scripts in your project, you'll have to ask the editor to recompile them for you. You'll have to do the same if you modify resources outside of the editing tools (for example, if you modify physics properties in your project's `global.physics_properties` file in a text editor).

To force a compilation of any recently modified resources:

-	In the interactive editor, press **F5** or select **Edit > Level Testing > Refresh** from the main menu.
-	If you're not running the editor, you can launch the engine from the command line with the `--compile` flag. See also the ~{ Engine command-line reference }~ for more.

## Force a refresh

Every time you modify or recompile an asset in the editor, the editor automatically refreshes the modified content in all connected instances of the engine. That includes its own internal engine, and all engines you launched through the editor's Test Level and Run Project buttons.

However, sometimes you might need to force an engine to refresh itself from the latest compiled content. For example, if you have your project running in the engine, and you make some changes to an asset using a different editing tool (for example, while debugging your Lua scripts in Visual Studio Code), you will need to send a command to the engine to tell it to refresh the assets it currently has loaded.

To trigger a reload, send the `refresh` console command to the engine. You can send this through the editor's **Status bar** (see ~{ Send commands from the Status bar }~, or from the [Visual Studio Code debugging plug-in](https://marketplace.visualstudio.com/items?itemName=jschmidt42.stingray-debug).

Make sure that:

-	If using the Status Bar, you have it set to the **Command** option instead of the **Lua** option, and you have selected the right instance of the engine in the drop-down list.
-	If using Visual Studio Code, you preface the command name with `--`, like `--refresh`.

---
Related topics:
-	~{ Reloading Lua code }~
-	~{ Console commands }~
---
