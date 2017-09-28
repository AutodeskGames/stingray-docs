# Enable 3ds Max Interactive Live Link

A plugin called DCC Link connects 3ds Max and 3ds Max Interactive when they are installed on the same system, giving you a smoother connection between the two, and supporting your asset creation workflow.

> **Important:**  If you have previously installed a standalone version of Autodesk Stingray (including Stingray 1.8 or any newer beta version of Stingray), you'll need to manually uninstall your existing DCC Link plugin before installing 3ds Max Interactive. Otherwise, our installer mistakenly detects that you have a newer version of the plugin and won't install the latest. After you uninstall your existing version of the plugin (using Windows Control Panel), the correct DCC Link plugin installs correctly when you install 3ds Max Interactive, or you can install it manually using the following steps.

## Install the DCC plug-in

You can manually install the DCC plug-in that enables the Live Link:

1.  Locate the plug-in installer DCCLink.msi within the install directory. By default: `\ProgramFiles\Autodesk\3dsMaxInteractive\version\extras`.
2.  Double-click `DCCLink.msi` and then click **Install Now**.

    A message displays when the installation is complete.

3.  Open 3ds Max Interactive.
4.  Click **File > Settings > Editor Settings**.

    The Editor Settings and External Applications rollouts appear in the Property Editor.

5.  In the 3ds Max Path in the External Applications rollout, enter the location of your 3ds Max application if it is not already listed.
6.  Open 3ds Max and verify the Interactive menu in the menu bar is active.

---
IncludeIf:
-	MaxInteractive

---
