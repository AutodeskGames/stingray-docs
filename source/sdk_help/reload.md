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

While the engine is running, the *.dll* files that it has loaded are locked and read-only. You can't replace or delete the files with newer versions. However, you can give the engine a folder that you want it to scan for newer versions of its installed plug-ins.

Call the `stingray.Application.set_plugin_hot_reload_directory()` function, and pass it the absolute path to the folder on your computer.

If the engine finds a newer version of a *.dll* file in one of these hot reload folders that matches a plug-in currently loaded in the engine, it copies the *.dll* from the hot reload folder into its plugins folder to overwrite the older version. Typically, you would set the hot reload folder to whatever folder you compile your plug-in binaries to. That way, any time you rebuild in Visual Studio, your plug-in will automatically be refreshed in the engine.

You could include this Lua call in your project's Lua scripts or in a content plug-in. However, since the path is usually dependent on a particular machine's filesystem and usually only needed during development while you're testing out your plug-in, you will probably find it more convenient to just run the function from the editor's **Status Bar** when you need to enable hot reloads for a given project. For details, see [this page](http://help.autodesk.com/view/Stingray/ENU/?guid=__stingray_help_playtesting_send_commands_statusline_html).

Note that you may need to do some extra work in your plug-in code to support hot reloading. The best way to make your plug-in handle hot reloading smoothly is to keep *all* of the state information required by your code in a single binary blob. Then, you can implement the `PluginApi.start_reload` and `PluginApi.finish_reload` functions in your plug-in to temporarily cache the blob of state data before the reload starts, and resume from that cached data after the new code has been loaded.

## Hot reload limitations

Hot reloading can be a very effective and convenient way to avoid wasting time shutting down and restarting systems when testing out small iterations on your code and your assets. However, it does have some limitations, and might not work well in all cases.

For example, suppose that your plug-in carries out some operations when it's first initialized. Later, you find that you need to add something else to that initialization sequence. But, when you reload the plug-in, your initialization code doesn't get run again -- the project carries on running from the point it was at before. So any new code that depends on those initialization-time changes might not work as expected.

Hot reloading typically works best when you need to test out small tweaks to parameters and settings, or small changes within existing code blocks. The larger the changes you make, the more you risk running into problems after the refresh.

For a deeper discussion about hot-reloading resources, see [here](http://help.autodesk.com/view/Stingray/ENU/?guid=__stingray_help_playtesting_hot_reload_html). If you're reloading Lua code into the game's Lua environment, see also [this page](http://help.autodesk.com/view/Stingray/ENU/?guid=__stingray_help_creating_gameplay_scripting_with_lua_live_reload_html).
