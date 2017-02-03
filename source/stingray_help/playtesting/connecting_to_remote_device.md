# Connect to a remote device

If you plan to release your game on one or more non-Windows platforms, such as iOS devices, Android devices, or dedicated gaming consoles, you will frequently need to test out your project on those targets. For example, you will need to check the way your assets and levels are rendered, and to check that your gameplay is working as expected. However, it would be time-consuming to deploy a full standalone version of your game to the device or console each time you want to test a change.

Stingray offers two different lightweight mechanisms for testing your content on your target devices without needing to go through the full cycle of building and deploying the game. In both of these scenarios, the Stingray engine is installed by itself on the target device, and the Stingray Editor sends your project data over the network or USB connection to the device.

-   **Option A: Mirroring the Stingray Editor viewport**

    You can connect the Stingray Editor on your Windows development machine to the Stingray engine on the target device. This connection makes the device display mirror the viewport of the Stingray Editor. As you work in the Editor on your Windows machine, Stingray will automatically update the data and viewport on the device.

    With this connection option, you can visually inspect how your game assets will render on a target platform while you navigate and modify the current level in the Stingray Editor viewport.

    Mirroring is also sometimes referred to as *slaving*, *linking*, or *live-linking*.

-   **Option B: Running the project**

    You can have the Stingray Editor send all of your project data to the Stingray engine on the target device, and start the game from the beginning. This allows you to test your gameplay code on the target platform in a standalone mode, just as if you went through the full build and deployment cycle.

    On some platforms (iOS and Android), you can even save your project data on the device. This allows you to run the game again on the device using the latest set of data without needing the device to be connected to the Stingray Editor at all.

## To connect to a remote device

1.	You'll use the **Connections** panel to set up the editor to communicate with your device. See ~{ Using the Connections panel }~ for basic instructions on how to use this panel.

2.	Follow any specific directions for your device type on the following pages:

	-	~{ Get started on Android }~
	-	~{ Get started on iOS }~
	-	~{ Get started on PlayStation 4 }~
	-	~{ Get started on Xbox One }~

**Note:** you cannot currently connect to a remote Windows host for viewport mirroring or running the project.
