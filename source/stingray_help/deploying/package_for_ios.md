# Packaging a game for iOS

To package a project for iOS:

1.	If you haven't done so already, set up the ~{ Requirements for iOS game development }~. This includes running the Stingray iOS re-signing server on a Mac OS X machine on your network, and generating the *.ipa* file for the Stingray engine.
2.	In the Stingray Editor, open the **Deployer** panel to the iOS tab and enter the required information. (See below.)
3.	Click **Package Project for iOS**.

Stingray creates an *.ipa* file for your game, and copies it to the location on your computer that you specify in the **Destination** field.

After deploying from Stingray:

-	To copy your deployed game to a connected device for testing, use iTunes.

-	To distribute your game on the Apple iTunes Store, use the tools provided by Apple. See the [App Distribution Guide](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/Introduction/Introduction.html).

## iOS deployment settings

![iOS Deployer](../images/deployer_ios_3.png)

You can set the following options in the **Deployer** panel for iOS devices, after you have created the *.ipa* file for the Stingray engine.

### Packaging settings

These settings are common for all tabs. See ~{ Using the Deployer panel }~.

### General settings
<dl>
<dt>Title</dt>
<dd>The title of your project. This is the name used by online stores, and the name that shows up under the app. </dd>
</dl>

### Identity settings
<dl>
<dt>Bundle ID</dt>
<dd>The bundle identifier for your app. Make sure this correlates with the provision profile used to re-sign and the iTunes Connect info.</dd>

<dt>Version</dt>
<dd>The application version string.</dd>

<dt>Build</dt>
<dd>The build number string.</dd>
</dl>

### Icons settings

Icons used for your app. If you leave them empty, the **Deployer** uses the default icon for Autodesk Stingray. When you are ready to release your game, you'll need to specify an icon for each listed size.

### Launch Images settings

The Launch images (splash screens) used for your app. If you leave them empty, the **Deployer** uses a default Autodesk Stingray image. When you are ready to release your game, you'll need to specify an icon for each listed size.
