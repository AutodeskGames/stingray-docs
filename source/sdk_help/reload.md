# Reload a plug-in

While you're working on your plug-in, you'll often need to reload it into Stingray in order to test out your latest changes.

You could always shut down your session in the engine and the editor, recopy any files that you want to change (for example, recopy engine *.dll* files into the engine's plug-ins folder) and restart everything. But this is unnecessarily cumbersome and time-consuming. Fortunately, in most cases you can *hot-reload* your plugins, updating the editor and the engine to use your latest content without needing to shut them down.

## Reload an editor plug-in

*	Press **F5** in the editor. This makes the editor re-scan all its plug-in folders and re-load all plug-ins from the latest version of their .*plugin* descriptor files.

*	If your plug-in has added HTML panels or JavaScript modules to the editor, you may also need to press **Alt+F3** to reboot the entire JavaScript environment from scratch. This will re-initialize any script modules and HTML views that your plug-in provides, so that you see your latest changes.

## Reload a content plug-in

When you add or modify any assets in a folder that your plug-in has mounted as a resource library, the editor should automatically detect the changes and recompile the resources. You shouldn't need to do anything special in order to make those resources available, though as always you can press **F5** anytime to force the editor to refresh.

If you're currently testing your level or running your project, just refreshing the resources in the editor won't necessarily make the engine that's running your game start using the updated versions of the assets that you've added or changed. If the engine has already loaded your resources into the running project, it will continue on using the original versions of those assets that it initially loaded. To refresh the engine to use the most recent compiled versions of the assets, you can send the `refresh` command from the editor's status bar to the engine. For details, see [this page](http://help.autodesk.com/view/Stingray/ENU/?guid=__stingray_help_playtesting_send_commands_statusline_html).

>	If you're running your project from its compiled data without the editor open, or if you're running from a standalone deployed build of your project, then you won't be able to hot-reload the modified assets. You need to have the editor open in order to compile the assets for you and to send the reload message to the game.

## Reload an engine plug-in

The engine can automatically hot-reload updated versions of *.dll* plug-ins. When the engine detects a newer version of a plug-in that it has already loaded, *and* that plug-in implements the hot-reload functions in the `PluginApi`, the engine will automatically unload the old version of the *.dll* and load in the new version.

Follow all the steps below to set up your plug-in and your build process to be compatible with hot reloading.

### Step 1. Implement the hot reload interface in your plug-in

When the engine loads the updated version of your plug-in, it always starts with a clean slate. Anything that was computed or stored by the old version of the plug-in is lost during the reload process. However, in many cases, plug-ins rely on stored data that they can't simply recompute after the reload -- like the current state of the plug-in, or records of the units they have spawned in the game world.

Therefore, the engine offers an interface that plug-ins can use to cache this kind of state information, preserving it when the plug-in is unloaded and passing it along to the updated version of the plug-in after the reload.

The `PluginApi` defines two functions that your plug-in must implement:

-	`PluginApi::start_reload()`: The engine calls this function immediately before unloading the current version of your plug-in. It is expected to return a pointer to a single block of memory that contains whatever state information needs to be preserved. It is up to you to allocate this block and pack it with whatever data you need in order for your plug-in to resume where it left off.

	If your plug-in does not need to maintain any state information -- for example, if it simply exposes some new self-contained functions to Lua or implements some Flow nodes -- you can simply return `NULL` from `start_reload()`.

-	`PluginApi::finish_reload()`: The engine calls this function immediately after loading the updated version of your plug-in. It receives the pointer returned by `start_reload`, so that it can unpack the memory block and re-initialize its state based on the contents stored by `start_reload`. It will typically then de-allocate the block, since it will not be needed until the next reload.

	In addition, note that the engine passes this function the `get_engine_api` function so that your plug-in can re-acquire any engine APIs that it needs. If your plug-in saves pointers to engine APIs in its `setup_game()` function, as is done in the sample plug-ins, you will want to move those initializations to a separate function (called, say, `init_apis()`), and then invoke that function from both `setup_game()` and `finish_reload()`.

### Step 2. Build to a hot reload directory

You need to configure your plug-in build process so that your compiled *.dll* file is placed in a folder that the engine scans for updated plug-ins.

By default, the engine scans only the `plugins` sub-folder under the location of its executable file.

You can scan additional folders in either of two ways:

-	From Lua, by calling `stingray.PluginManager.add_hot_reload_directory()`. You could include this Lua call in your project's Lua scripts or in a content plug-in. However, since the path is usually dependent on a particular machine's filesystem and usually only needed during development while you're testing out your plug-in, you will probably find it more convenient to just run the function from the editor's **Status Bar** when you need to enable hot reloads for a given project. For details, see [this page](http://help.autodesk.com/view/Stingray/ENU/?guid=__stingray_help_playtesting_send_commands_statusline_html).

-	By passing the `--plugin-dir <folder_name>` parameter on the command line when you start the engine. If you're testing your project by launching it from the editor, you can configure this command line in the **Connections** panel. For details, see [this page](http://help.autodesk.com/view/Stingray/ENU/?guid=__stingray_help_playtesting_connecting_to_remote_connections_html). This command line will be used any time you use Run Project to launch your project. The command line used when you Test Level is not currently configurable.

### Step 3. Configure pre-build steps

While the engine has a *.dll* file loaded, that file is locked. It cannot be removed or overwritten. This means that compiling or copying your plug-in *.dll* into your hot reload directory will fail if an earlier version of that plug-in is already present.

However, a loaded *.dll* file *can* be renamed. So, you can make the reloading process smooth by setting up pre-build steps for your plug-in to move the existing *.dll* file (and its *.pdb* file, if present) out of the way before adding the new one.

For example:

~~~{nohighlight}
del *.old
rename ${plugin}.dll ${plugin}.dll.old
rename ${plugin}.pdb ${plugin}.${timestamp}.pdb.old
del *.old
~~~

Note that the Visual Studio debugger keeps all its *.pdb* files locked until you shut it down. If you have the debugger connected to the engine when you reload your plug-in, you cannot remove or overwrite any *.pdb* files that are still in use. Therefore, when you rename them in the pre-build step so that your build can create the new *.pdb* file, use a timestamp to make sure that you rename the old file to something unique.

## Hot reload limitations

Hot reloading can be a very effective and convenient way to avoid wasting time shutting down and restarting systems when testing out small iterations on your code and your assets. However, it does have some limitations, and might not work well in all cases.

For example, suppose that your plug-in carries out some operations when it's first initialized. Later, you find that you need to add something else to that initialization sequence. But, when you reload the plug-in, your initialization code doesn't get run again -- the project carries on running from the point it was at before. So any new code that depends on those initialization-time changes might not work as expected.

Hot reloading typically works best when you need to test out small tweaks to parameters and settings, or small changes within existing code blocks. The larger the changes you make, the more you risk running into problems after the refresh.

For a deeper discussion about hot-reloading resources, see [here](http://help.autodesk.com/view/Stingray/ENU/?guid=__stingray_help_playtesting_hot_reload_html). If you're reloading Lua code into the game's Lua environment, see also [this page](http://help.autodesk.com/view/Stingray/ENU/?guid=__stingray_help_creating_gameplay_scripting_with_lua_live_reload_html).
