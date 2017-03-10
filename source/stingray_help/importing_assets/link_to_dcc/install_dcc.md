#DCC tool plug-in

Stingray automatically installs the DCC Link plug-in to support the DCC tools in your `C:\ProgramData\Autodesk\ApplicationPlugins` directory.

For example, the 3ds Max plug-in installs here:
`C:\ProgramData\Autodesk\ApplicationPlugins\StingrayDCCLink_Max2018.bundle\Contents\plugins`

If your DCC tool fails to discover the link to Stingray, verify the DCC Link plug-in included with Stingray is installed, and then point Stingray to the DCC application.

### (Optional) Install the DCC tool plug-in

1. Double-click the StingrayDCCLink.msi located here within your Stingray install directory: `\Program Files\Autodesk\Stingray\<*version*>\extras`

2. Click **Install Now**.

	The plug-in installer runs, and a 'Success' message displays when the install is complete.

3. Do any of the following:

	- In Maya and Maya LT, enable the stingray_link.mll plug-in using the Plug-in Manager (**Window > Settings/Preferences > Plug-in Manager**).
	- In 3ds Max, point to the plug-in install location by selecting **Customize > Configure System Paths**, and adding the install path to '3rd Party Plugins'.

### (Optional) Point Stingray to where you have the DCC tool installed
Stingray automatically detects your DCC tool if you installed it to the default location. If you installed the DCC tool to a custom location, do the following to point Stingray to the application.

1. In Stingray, select **File > Settings > Editor Settings**.

2. In the **Property Editor**, navigate to select the .exe file (for example maya.exe) wherever you installed the DCC tool.
For example: `C:\My Software\Autodesk\<*version*>\bin\maya.exe`

> **Tip:** If you have both Maya and Maya LT installed, Stingray uses Maya to launch FBX files. If you prefer to launch Maya LT instead, remove the path to Maya in your **Editor Settings**, then restart Stingray.

---
Related topics:
- ~{ Connect DCC tool and Stingray viewports }~
- ~{ Send assets to a DCC tool }~
---
