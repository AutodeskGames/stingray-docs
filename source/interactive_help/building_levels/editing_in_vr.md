# Edit a level in VR

![NEW](../images/new.png)

While you have a level open in the 3ds Max Interactive editor, and a supported VR device hooked up to Steam on your PC, you can use your VR headset to enter your level in virtual reality. While in VR, you can use your controllers to move around the scene, and to select, move and delete objects in the level.

VR editing works for any level in any project. It works even if you didn't start your project from the **Desktop VR** template, and even if you're not planning on deploying your project with support for VR.

>	**Tip:** You can combine VR level editing with the new **Live Transform Tracking** mode in 3ds Max in order to edit your Max scene live in VR! Just do a level sync from 3ds Max and activate the live transform mode before you switch to 3ds Max Interactive and start editing your level in VR. For details, see ~{ Level Sync with 3ds Max }~.

> **Note:** Projects that use the minimap renderer or any custom render config are not guaranteed to work with VR editing.

## Requirements

-	Either the **HTC Vive** or **Oculus Rift** headset.

-	Both of the hand-held controllers that go with your headset.

-	Install Steam, and make sure that your headset and controllers are detected by Steam and working correctly.

## Start VR editing

1.	From the main menu in 3ds Max Interactive, choose **Window > Level Viewport VR**.

1.	Click the **Start VR** button, or the ![Play](../images/icon_test_level.png) icon in the toolbar of the **Level Viewport VR** panel.

1.	Grab your controllers and put on your headset!

While the level is open in VR editing mode, the **Level Viewport VR** panel shows a preview of what the headset is looking at, and the usual **Level Viewport** panel is temporarily disabled.

>	**Note:** The ![Play](../images/icon_test_level.png) button is slightly different from the regular **Level Viewport** panel.
>
>	When you press play in the **Level Viewport**, your project is launched in the interactive engine, starting in your current level. Any Lua gameplay code and Level Flow graphs that you've set up for your project are evaluated, so that you can test the interactive features you've built into your level. It's a preview of exactly how your level should look and act after you deploy your project and launch it on your target platform.
>
>	When you press play in the **Level Viewport VR**, you enter the editor's representation of your level in VR. That means that your project's Lua gameplay code and your level's Flow graphs are not evaluated, and no physics simulation is running. It's simply a way to set up the 3D scene from a more immersive point of view. Your ability to move around and interact with the environment is based on scripts and plugins that work only within the context of the editor, but these scripts and plug-ins *not* available when you deploy your project (even though some features, like the teleport movement, are similar to what you'll find in the **Desktop VR** template).

## Quit VR editing mode

Press the ![Stop](../images/icon_stop.png) icon in the **Level Viewport VR** panel. You can restart VR editing at any time.

## Troubleshooting

When you start editing in VR on an Oculus headset, you may see an old still image superimposed on your view of the level.

-	If this happens, shut down and restart both the Oculus app and Steam VR.

-	This can happen if your project uses the desktop VR template, and if you have already launched your project from the editor using either the Test Level ![Play](../images/icon_test_level.png) or Run Project ![Play](../images/icon_run_project.png) button.

	To avoid this happening in future, try not to test or run a VR project from the editor before using the **Level Viewport VR**.
