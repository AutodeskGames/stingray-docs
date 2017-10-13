# Enable {{ProductName}} Live Link

{{ProductName}} includes an interop plug-in called DCC Link to support linking to your **DCC** (digital content creation) tool.

{{#if MayaInteractive}}

The DCC Link plug-in connects 3ds Max and 3ds Max Interactive when they are installed on the same system, giving you a smoother connection between the two, and supporting your asset creation workflow. The DCC Link plugin is automatically installed in your `C:\ProgramData\Autodesk\ApplicationPlugins` directory. For example, the 3ds Max plug-in installs here: `C:\ProgramData\Autodesk\ApplicationPlugins\InteractiveDCCLink_Max2018.bundle\Contents\plugins`

{{/if}}


>**Notes:** Interop with {{ProductName}} is supported as of Extension 1 for Maya 2016, Maya LT 2016, and 3ds Max 2016. Releases prior to those are not supported.
> In this help, we use the term **DCC** tool when we're referring to your content creation tool (such as Maya, Maya LT, or 3ds Max). (DCC = digital content creation).

> **Important:**  If you have previously installed a standalone version of Autodesk Stingray (including Stingray 1.8 or any newer beta version of Stingray), you'll need to manually uninstall your existing DCC Link plugin before installing {{ProductName}}. Otherwise, our installer mistakenly detects that you have a newer version of the plugin and won't install the latest. After you uninstall your existing version of the plugin (using Windows Control Panel), the correct DCC Link plugin installs correctly when you install {{ProductName}}, or you can install it manually using the following steps.



## Install the DCC plug-in

You can manually install the DCC plug-in that enables the Live Link:

1.  Locate the plug-in installer DCCLink.msi within the install directory. By default: `\ProgramFiles\Autodesk\ {{ProductName}}\version\extras`.
2.  Double-click `DCCLink.msi` and then click **Install Now**.

    A message displays when the installation is complete.

3.  Open {{ProductName}} and select **File > Settings > Editor Settings**.
4.  In the **Property Editor**, navigate to select the .exe file wherever you installed the DCC tool.

    For example: `C:\My Software\Autodesk\<*version*>\bin\maya.exe`

    >**Tip:** If you have both Maya and Maya LT installed, the editor uses Maya to launch FBX files. If you prefer to launch Maya LT instead, remove the path to Maya in your **Editor Settings**, then restart the editor.

5.  Open your DCC tool, and do any of the following:

    - In 3ds Max, add `C:\ProgramData\Autodesk\ApplicationPlugins\InteractiveDCCLink_Max2018.bundle\Contents\plugins` to **Customize > Configure System Paths > 3rd Party Plugins**.
    - In Maya and Maya LT, enable the `interactive_link.mll` plug-in using the Plug-in Manager (**Window > Settings/Preferences > Plug-in Manager**). To load the plug-in on startup, ensure *Loaded* and *Auto Load* options are on.
7.  In your DCC tool, verify the Interactive menu in the menu bar is active.
