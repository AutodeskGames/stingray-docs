#Setup the DCC plug-in

To allow your DCC to discover the link to Stingray, install the DCC Link plug-in included with your Stingray install, and then point Stingray to the DCC application.

###Install the DCC plug-in

1. Double-click the StingrayDCCLink.msi located here within your Stingray install directory: `\Program Files\Autodesk\Stingray\<*version*>\extras`

2. Click **Install Now**.

	The plug-in installer runs, and a 'Success' message displays when the install is complete.

	When installed correctly, you can find the plug-ins in your C:\ProgramData\Autodesk\ApplicationPlugins directory.

	For example, the 3ds Max plug-in installs here:
	C:\ProgramData\Autodesk\ApplicationPlugins\StingrayDCCLink_Max2017.bundle\Contents\plugins

3. Do any of the following:

	- In Maya and Maya LT, enable the stingray_link.mll plug-in using the Plug-in Manager (**Window > Settings/Preferences > Plug-in Manager**).
	- In 3ds Max, point to the plug-in install location by selecting **Customize > Configure System Paths**, and adding the install path to '3rd Party Plugins'.

### (Optional) Point Stingray to where you have the DCC installed
Stingray automatically detects your DCC if you installed it to the default location. If you installed the DCC to a custom location, do the following to point Stingray to the application.

1. In Stingray, select **File > Settings > Editor Settings**.

2. In the **Property Editor**, navigate to select the DCC .exe file (for example maya.exe) wherever you installed the software.
For example: `C:\My Software\Autodesk\<*version*>\bin\maya.exe`

> **Tip:** If you have both Maya and Maya LT installed, Stingray uses Maya to launch FBX files. If you prefer to launch Maya LT instead, remove the path to Maya in your **Editor Settings**, then restart Stingray.

---
Related topics:
- ~{ Connect DCC and Stingray viewports }~
- ~{ Send assets to a DCC}~
---
