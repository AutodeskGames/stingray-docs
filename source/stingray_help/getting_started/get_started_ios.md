# Get started on iOS

TODO

## Check the supported devices

TODO

## First-time setup

In order to connect the Stingray Editor to an iOS device, or to build and deploy your game for iOS devices, you must follow the steps listed on this page on your Windows and Mac OS X development machines.

### Set up and run the iOS Package Server

The **Stingray iOS Packaging Server** lets you package and re-sign the Stingray engine and your iOS game from your Windows development machine.

Due to restrictions from Apple, the iOS packaging process cannot be fully completed on a Windows machine only. Some steps can only be completed on a computer running Mac OS X. This is where the **Stingray iOS Packaging Server** comes in.

You will need to install and run the server application on a Mac. For system requirements, see ~{ Supported platforms }~.

1.	Locate the packaging app within your Stingray install directory.  For example: `\Program Files\Autodesk\Stingray\<version>\tools\Autodesk Stingray iOS Package Server.app`

2.	Copy the app to the Applications folder on your Mac.

3.	Run the app. The following window appears:

	![Package Server](../../images/ios_package_server.png)

4.	Enter the information required to start the server:

	<dl>
	<dt>Signing Certificate</dt>
	<dd>*[Required]* Specifies the certificate you want to use for signing your apps. Note you should use the Distribution certificate when you create a final version of your app that you plan to upload to iTunes Connect.
	<br>

	> **Note:** The drop-down list shows all certificates installed on the machine. If you don't see anything there, and have to enter the value manually, chances are that you don't have the certificate installed on your machine. This may cause the packaging process to fail.</dd>

	<dt>Mobile Provision</dt>
	<dd>*[Required]* Point to the the mobile provision file associated with your signing certificate. You can download this from your [Apple Developer Center](http://developer.apple.com) page.
	<br>

	> **Note:** If you're not using an Enterprise provision profile (which lets you install on any device), make sure that you have added the devices you plan to use for testing to this provision profile. If you used Xcode to develop on this device previously, it is automatically added.</dd>

	<dt>Entitlements</dt>
	<dd>*[Optional]* You can set the entitlements file, if desired. If not, it will be automatically generated. You can generally leave this setting blank.</dd>
	</dl>

5.	Start the server by pressing the play button. (At any time, press the stop button to stop the server.)

	When the server starts, you'll see the IP address that you will need to enter in order to generate the IPA for the Stingray engine, and in order to package your game for iOS.

	You will also see a list of all requests coming in from Stingray Editor applications running on your network:

	![Package Server Running](../../images/ios_package_server_running.png)

	>	**Tip:** Double-click a status message to view the full log data.

### Generate IPA files for the Stingray engine

Stingray does not ship with signed versions of the engine runtime ready to use on iOS. You need to generate *.ipa* files for the engine using your own signing certificate.

To generate the engine *.ipa* files:

1.	Set up the iOS Package Server as described above.

2.	In the Stingray Editor on your Windows development machine, open the **Deployer** panel to the iOS tab.

	![Deployer for iOS without engine IPA](../../images/deployer_ios_1.png)

3.	Select an engine configuration. You'll need to generate the "Development" *.ipa* in order to connect the Stingray Editor to an iOS device for testing, and you'll need to generate the "Release" *.ipa* for your final deployment. See also ~{ About engine configurations }~.

4.	Click **Generate Engine IPA**.

	The file is created and saved in your Windows user directory, typically under `AppData\Local\Autodesk\Stingray\engine\ios\<configuration>`.

Once the *.ipa* file for the engine is available, the **Deployer** panel is updated to show all of the options you can set when you deploy a full standalone build of your game. See also ~{ Deploying and building }~.
