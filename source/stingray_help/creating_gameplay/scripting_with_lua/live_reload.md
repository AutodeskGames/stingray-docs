# Reloading Lua code

Like most other kinds of Stingray resources, you can modify and recompile your Lua scripts while your game is running, and have the game reload them on the fly. This is a powerful mechanism that allows you to shorten your iteration time while debugging and testing new changes. For background on live reloading of Stingray assets in general, see also ~{ Reloading resources }~.

This page describes how to recompile and reload your Lua scripts, and details a few special considerations that apply when reloading Lua scripts into the game.

## To reload a Lua script

1.	Make changes in your script and save it in your project folder.

2.	Scripts are not re-compiled immediately when you save them. You must force your script to be recompiled. In the Stingray Editor, press **F5** or select **Edit > Level Testing > Refresh** from the main menu. This updates your compiled data folder with the new version of the script.

3.	Make your game reload the script by issuing the `refresh` console command through the Status bar. If you are running the project in standalone mode, use the **External Console**. See ~{ Send commands from the Status bar }~.

See also ~{ Reloading resources }~.

## Special considerations

When the engine reloads a Lua file, it simply re-runs the whole file. This re-evaluates all definitions and re-defines all variables and functions. This can sometimes have some unexpected side effects.

### Initializations

The first thing to realize is that although the functions you define in your script will be redefined in the runtime Lua environment to match your new code, those functions will not necessarily be *called*.

For example, if you rewrite the global `init()` function in your boot script, those changes will have no effect on the current game state, since the `init()` function was called at the time the game was originally started, with its old content. Therefore, any definitions that it performed are still in force, and anything you do in your new implementation will not take effect.

This same consideration applies to other kinds of object initialization as well. For example, suppose you initialize a unit with a certain set of characteristics at the time it is spawned. Then you modify the function that spawns the unit to change those characteristics, and reload the scripts. Your changes will not apply to any units that have already been spawned, though they may apply to new units that you spawn after reloading (assuming that your new code is correctly called when the new units are spawned).

### Redefining cached global tables

When you create a new table variable, Lua uses a *reference* to make that variable point to the table. If you make a second variable equal to the first, the second variable stores the same reference. If you then re-define the first variable afterward to point to a new table, the second variable will continue to point to the *original* table.

For example, suppose that you are using the Appkit in your project, and you have a `project.lua` script that contains the following code:

~~~{lua}
Project = {}

function Project.update(dt)
	print("hello.")
end
~~~

When your game starts up, the Appkit's `SimpleProject.extension_project` variable stores a reference to your `Project` table as follows:

~~~{lua}
if Project then
	SimpleProject.extension_project = Project
end
~~~

Suppose you change the string printed by your `Project.update()` function, and reload your `project.lua` script file. You might expect to see the new string printed in the log every frame, but in fact the game continues to print the old string.

The cause of this behavior is that when the game re-runs the line:

~~~{lua}
Project = {}
~~~

the effect is to create a *new* table reference and store it in the global `Project` variable. That new table gets assigned the `update()` implementation with the new string. However, the `SimpleProject.extension_project` variable is still pointing to the *old* table that had been previously referred to by the global `Project` variable.

To avoid this problem, when you define a global table it is good practice to use this formulation:

~~~{lua}
Project = Project or {}
~~~

With this formulation, when the script is reloaded and that line is re-run, the `Project` variable already exists, so no new table is created. Instead, any function and member definitions in the rest of the file will be applied to the existing table. Therefore, changing the string printed by the `update()` function would be taken into account by the `SimpleProject` at every frame.

### Other kinds of cached values

If your script caches other kinds of non-table values, those cached values will not be updated unless the code that initialized the variable is run again.

For example, suppose you have the following code:

~~~{lua}
Project = Project or {}

function Project.update(dt)
	print("hello.")
end
~~~

As discussed in the preceding section, if you store a variable that points to the `Project` table elsewhere and call its `update()` function each frame, the call will always use the latest version of the `Project.update()` function after a reload. However, if you store a variable that points *directly* to the `Project.update()` function itself, that variable will continue to use the *old* function definition after a reload.

The same applies to other Lua variable types, like strings and numbers.
