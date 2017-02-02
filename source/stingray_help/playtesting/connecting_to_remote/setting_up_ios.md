# Setting up remote connections for iOS

To connect the Stingray Engine to an iOS device:

1.	If you haven't done so already, follow the first-time setup instructions under ~{ Get started on iOS }~.

2.	Plug your device in to a USB port on your Windows machine.

3.	Install the development version of the Stingray engine *.ipa* to the iOS device using iTunes.

	a)	Add the Stingray engine to your iTunes app library. You can either drag and drop it to the **My Apps** area, or select **Add File to Library...** from the main menu.

	b)	Sync your device. The engine app should be copied over to the device.

4.	Start the engine on the device.

	**NOTE:** The first time you run the Stingray engine on your iOS device, you will probably need to configure iOS to *trust* it. For details, see [this page](https://support.apple.com/en-us/HT204460) from Apple about how to trust a new app developer in your iOS settings.

	Once the app has started, it will wait for an incoming connection from the Stingray Editor, showing the following information:

	![](../../images/connecting-ip.png)

5.	In the Stingray Editor, use the **Connections** panel to set up the connection to the IP address shown on the device, then mirror or run project.

	For details, see ~{ Using the Connections panel }~.

>	**Note:** The engine app on the device must be in this waiting state in order for the Stingray Editor to initiate a connection. That means that each time you want to run your project or mirror your viewport, you have to close and restart the engine on the device.

## Editor and engine versions

The version of the Stingray Editor running on your Windows development machine *must* match the version of the Stingray engine that you generate and install on your iOS device. For example, version `1.5` of the Stingray Editor can only connect to a version `1.5` of the Stingray engine running on the device.

In addition, you should typically use the `development` configuration of the Stingray engine in order for the Stingray Editor to connect to the engine. The `debug` configuration will also work, but will alert you of a version mismatch between the Editor and the engine. The `release` configuration will not accept connections at all from the Stingray Editor.

However, you will need to use the `release` configuration when you eventually create final builds of your game using the **Deployer** panel. See also ~{ Packaging a game for iOS }~, and ~{ About engine configurations }~.

---
Tags:
- connect ipad
---
