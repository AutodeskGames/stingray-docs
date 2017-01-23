#Send assets to a DCC tool

There are two ways to connect or send assets between Stingray and your DCC tool, depending on whether you want to establish a live link (seeing updates in Stingray as you edit the asset in your DCC tool), or whether you want to launch and edit the original source scene in your DCC.

###To establish a live editing link between Stingray and your DCC tool:

1. Right-click an asset in the **Asset Browser** and select **Send to** > *Product Name*.

	This launches the asset in your DCC tool of choice. A small green "Connected to Stingray" message displays near the bottom of the interface.

2. Make any edits you want in the DCC tool.

3. Click **Update** next to the "Connected to Stingray" message to send any updates to Stingray.

###To edit the original source scene in your DCC tool:

1. Right-click an asset in the **Asset Browser** and select **Open Source Asset**.

	Stingray detects where the original scene was created, and launches the appropriate DCC tool. You're prompted to manually select an application if Stingray can't determine the file origin.

	>	**Note:** If you have both Maya and Maya LT installed, Stingray uses Maya to launch FBX files. Maya LT only launches if the original scene is an .mlt file.

2. Make any edits you want in the DCC tool.

3. When you're ready to reload the asset in Stingray, export as an FBX file using **File > Export** options, the **Game Exporter**, or **File > Send to Stingray**.
4. Press F5 to refresh in Stingray if necessary.

---
Related topics:
- ~{ Connect DCC tool and Stingray viewports }~
- ~{ Setup the DCC tool plug-in }~
---
