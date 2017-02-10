# Troubleshooting common issues

This page lists some common problems that you may run into when using Stingray.

For strategies you can use to get a better idea of what's going on in a running game, see also ~{ Ways to get runtime feedback }~.

## Game crashes without errors / crashes at startup

If your game crashes without sending any errors to the ~{ Log Console }~, you are probably running out of memory on your target platform. This is particularly likely if the crashes occur when running on iOS or Android, but not when testing on a Windows PC.

If the crash occurs at startup, the cause is usually that the boot package is attempting to load too many resources into memory. This is likely to happen eventually if your boot package uses wildcards to load in all resources of certain types.

For help, see the list of techniques under ~{ Optimize memory usage }~, and consider setting up multiple resource packages that your project can load and unload dynamically. See ~{ Loading and unloading packages }~.

## Fatal error when testing levels

Shut down Stingray and delete the `editor.config` file. You can find this file at `C:\Users\<user name>\AppData\Local\Autodesk\Stingray\Settings\editor.config`. When you restart, the problem should be corrected.

## General misbehavior

If things aren't working the way you expect, give the following options a try and see if any of them correct the problem.

-	Press F5 in the Stingray Editor to trigger compilation of any updated project resources.

-	Choose **Edit > Engine > Restart Engine** from the main menu, or press `Ctrl+F6`. This closes down and restarts the instance of the Stingray engine that the Stingray Editor runs internally.

-	Shut down and restart the Stingray Editor.

-	Try deleting your compiled data directory and restarting the the Stingray Editor. This should force all your resources to be recompiled.

-	Try running the Stingray Editor as Administrator.

-	Check for the presence of read-only files in your project and data folders. If you find any, make them writeable by checking them out of version control or by modifying their file properties.

-	Try deleting your "toolchain" folder, which you can find under `C:\Users\<user name>\AppData\Local\Autodesk\Stingray`. This will empty the list of projects in the ~{ Project Manager }~, but you can get them back. See ~{ Open an existing project }~.

-	Make sure the editor is **not** set to **Update Mode > Always** in the viewport if the performance is lower for the vr template projects.

## Common errors and warnings

>	`Connections: Failed to connect to "PS4". Please ensure the PlayStation 4 engine run-time can be accessed at <IP address>. Error Invalid DevKit: <IP Address>``

-	On the PlayStation 4 system, go to **Debug Settings > Network > Network Interface** and ensure that the **Selection** setting is set to *Routing Information* and not *Always LAN*.

-	Make sure that your PlayStation 4 devkit has not expired.

-	Check that your IP settings are correct both in the **Deployer** and in the game.
