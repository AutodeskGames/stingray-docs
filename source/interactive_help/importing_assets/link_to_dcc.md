# Interop with Maya, Maya LT, or 3ds Max

>**Note:** Interop with {{ProductName}} is supported as of Extension 1 for Maya 2016, Maya LT 2016, and 3ds Max 2016. Releases prior to those are not supported.

{{ProductName}} includes an interop plug-in to support linking to your **DCC** (digital content creation) tool.

The interop plug-ins (for Maya, Maya LT and 3ds Max) are automatically installed in your `C:\ProgramData\Autodesk\ApplicationPlugins` directory. For example, the 3ds Max plug-in installs here: `C:\ProgramData\Autodesk\ApplicationPlugins\StingrayDCCLink_Max2018.bundle\Contents\plugins`

> **Note:** In this help, we use the term **DCC** tool when we're referring to your content creation tool (such as Maya, Maya LT, or 3ds Max). (DCC = digital content creation).

With this interop plug-in loaded, you can do either of the following:

1. ~{ Connect DCC tool and editor viewports }~
2. ~{ Send assets to a DCC tool }~

> **Tip:** For more information in the Maya or Maya LT Help, look for the topic *Work with Stingray game engine*.

## Troubleshoot interop plug-in installation

If your DCC tool fails to discover the link to {{ProductName}}, you can try the following:

**Manually install the interop plug-in:**

1. Double-click the StingrayDCCLink.msi located here within your {{ProductName}} install directory: `\Program Files\Autodesk\Stingray\<*version*>\extras`

2. Click **Install Now**.

    The plug-in installer runs, and a 'Success' message displays when the install is complete.

3. Do any of the following:

	 - In Maya and Maya LT, enable the `stingray_link.mll` plug-in using the Plug-in Manager (**Window > Settings/Preferences > Plug-in Manager**). To load the plug-in on startup, ensure *Loaded* and *Auto Load* options are on.
	 - In 3ds Max, add the install path `C:\ProgramData\Autodesk\ApplicationPlugins\StingrayDCCLink_Max2018.bundle\Contents\plugins` to **Customize > Configure System Paths > 3rd Party Plugins**.

**Point {{ProductName}} to where you have the DCC tool installed:**

The {{ProductName}} editor automatically detects your DCC tool if you installed it to the default location. If you installed the DCC tool to a custom location, do the following to point the editor to the application.

1. In the interactive editor, select **File > Settings > Editor Settings**.

2. In the **Property Editor**, navigate to select the .exe file (for example maya.exe) wherever you installed the DCC tool.

	For example: `C:\My Software\Autodesk\<*version*>\bin\maya.exe`

> **Tip:** If you have both Maya and Maya LT installed, the editor uses Maya to launch FBX files. If you prefer to launch Maya LT instead, remove the path to Maya in your **Editor Settings**, then restart the editor.

---
Tags:
- DCC
- DCC definition
---
