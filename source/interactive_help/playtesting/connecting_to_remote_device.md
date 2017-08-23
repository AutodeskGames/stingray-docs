# Connect to a remote device

If you plan to release your interactive app on one or more non-Windows platforms, such as iOS devices, Android devices, or dedicated gaming consoles, you'll want to test out your project on those targets frequently. For example, you'll need to check the way your assets and levels are rendered, and to check that your gameplay is working as expected. However, it would be time-consuming to deploy a full standalone version of your app to the device or console each time you want to test a change.

{{ProductName}} offers two different lightweight mechanisms for testing your content on your target devices without needing to go through the full cycle of building and deploying the project. In both of these scenarios, the interactive engine is installed by itself on the target device, and the editor sends your project data over the network or USB connection to the device.

-   **Option A: Mirroring the editor viewport**

    You can connect the interactive editor on your Windows development machine to the engine on the target device. This connection makes the device display mirror the viewport of the editor. As you work in the editor on your Windows machine, it automatically updates the data and viewport that are visible in the engine running on the device.

    With this connection option, you can visually inspect how your assets will render on a target platform while you navigate and modify the current level in the editor viewport.

    Mirroring is also sometimes referred to as *slaving*, *linking*, or *live-linking*.

-   **Option B: Running the project**

    You can have the editor send all of your project data to the engine on the target device, and start the project from the beginning. This allows you to test your gameplay code on the target platform in a standalone mode, just as if you went through the full build and deployment cycle.

    On some platforms (iOS and Android), you can even save your project data on the device. This allows you to run the project again on the device using the latest set of data without needing the device to be connected to the editor at all.

## To connect to a remote device

1.	You'll use the **Connections** panel to set up the editor to communicate with your device. See ~{ Using the Connections panel }~ for basic instructions on how to use this panel.

2.	Follow any specific directions for your device type on the following pages:

	-	~{ Get started on Android }~
	-	~{ Get started on iOS }~
	-	~{ Get started on PlayStation 4 }~
	-	~{ Get started on Xbox One }~

**Note:** you cannot currently connect to a remote Windows host for viewport mirroring or running the project.

>	**Tip:** The first time you connect to a project on a new target platform, it takes some time to compile the project data. This can be a lengthy process if the project is big. But don't worry, you only have to do this once. Once the initial file has completed, you only have to recompile the data that has actually changed, so future compiles will run much faster.
