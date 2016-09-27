# Reloading resources

You can make a running Stingray game reload most types of resources live, without needing to stop and restart the whole game. Viewing the effects of your changes immediately in the context of the real game can help you shorten your iteration time and work more efficiently.

This page describes how to get live reloading working in your environment, what it can do, and what it cannot do.

## Step 1. Start the game

You can live reload resources for any game that is running from the compiled data folder for your game project. That means you can start your game using either of the main playtesting modes:

-	**Edit > Level Testing > Test Level** (or **F8**), which opens your current level.
-	**Edit > Level Testing > Run Project** which starts your project as a standalone game.

## Step 2. Recompile the resource

The source data files for your resources live in your project folder, but running games read *compiled* versions of that data from your project's `_data` folder. (See ~{ About the content lifecycle }~.)

Therefore, when you edit the source data file for a resource, you have to recompile that resource into the compiled data folder before it can be loaded in game.

The Stingray Editor automatically recompiles most kinds of resources immediately when you save them. However, some kinds of data, like Lua files, are not immediately recompiled. Also, if you modify resources outside of the editing tools (for example, if you modify physics properties in your project's `global.physics_properties` file in a text editor), you may need to instruct the editor to recompile them.

To force a compilation of any recently modified resources:

-	Press **F5** in the Stingray Editor, or select **Edit > Level Testing > Refresh** from the main menu.

## Step 3. Reload the resource

If your game has already loaded the old version of the resource that you have just modified, it will not automatically detect and reload your modifications. You must instruct your game to check for any resources that have been modified since they were loaded.

To trigger a reload, send your game the `refresh` console command through the Stingray Editor "Status bar". See ~{ Send commands from the Status bar }~.

Make sure that:

-	You have the Status bar set to the **Command** option instead of the **Lua** option.
-	You have selected the right instance of the engine in the drop-down list in the Status bar.

If you want to reload a script running in a standalone game, you can send the command using the **External Console** application. Launch the External Console by selecting **Window > External Console**  from the main menu (or **Alt + 2**).

## Limitations of live reloading

Not *all* types of resources will show your changes immediately in the game.

In particular, once you have loaded a level into your game, any changes to the data that are maintained in its  *.level* resource are not immediately updated in the game when you send the `refresh` command. For example, you will not see the results of changes in unit and trigger placement, material assignments, or level flow connections. To see the effects of these kinds of changes, restart the level.

---
Related topics:
-	~{ Reloading Lua code }~
-	~{ Console commands }~
---
