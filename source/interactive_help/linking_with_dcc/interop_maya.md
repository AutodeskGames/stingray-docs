# Interop with Maya and Maya LT

Connecting {{ProductName}} to Maya and Maya LT follows the same workflow as you use to connect to 3ds Max.

The DCC Link interop plug-in which is automatically installed with {{ProductName}} enables live linking between the {{ProductName}} and the DCC tool (Maya and Maya LT). For Maya, the interop plug-in installs here: `C:\ProgramData\Autodesk\ApplicationPlugins\InteractiveDCCLink_Maya2018.bundle\Contents\plugins`

## Verify the interop plug-in connection

1. Open {{ProductName}} and select **File > Settings > Editor Settings**.
2. In the **Property Editor**, navigate to select the .exe file wherever you installed Maya or Maya LT.

	>**Tip:** If you have both Maya and Maya LT installed, the editor uses Maya to launch FBX files. If you prefer to launch Maya LT instead, remove the path to Maya in your **Editor Settings**, then restart the editor.

3.  In Maya and Maya LT, enable the `interactive_link.mll` plug-in using the Plug-in Manager (**Windows > Settings/Preferences > Plug-in Manager**). To load the plug-in on startup, ensure *Loaded* and *Auto Load* options are on.
4.  Verify the Interactive menu in the Maya/Maya LT menu bar is active.
5. If for any reason you need to manually reinstall the plug-in, locate the plug-in installer `DCCLink.msi` within the install directory. By default: `\ProgramFiles\Autodesk\ {{ProductName}}\version\extras`.
6.  Double-click `DCCLink.msi` and then click **Install Now**.

    A message displays when the installation is complete.

## Establish connection with Maya

1. In the Interactive editor, select **Window > DCC Live Link** and click **Connect** for Maya.

	 A small green "Connected to Interactive" message displays near the bottom of the interface in Maya.

2. If you want to start a connection from Maya, select **Interactive > Connect**. If connection fails, select **Interactive > Connect > ![](../images/opt_box.png)** and enter `32010` as the port ( as indicated in the **DCC Live Link**) to connect to the interactive.

## Send assets and materials from {{ProductName}}

With any operation that you want to perform whether its sending assets, tagging assets or connecting the viewports, you need to establish a connection with Interactive first. Use the **DCC Live Link** option or the **Send to** workflow to establish a connection with the DCC.

**To send assets to Maya:**

1. Right-click an asset in the **Asset Browser** and select **Send to Maya**.

	 This launches the asset in Maya.

2. Make any edits you want in Maya. Click **Update** next to the "Connected to Interactive" message in Maya to send any updates to the interactive editor.
3. To edit the original source scene in your DCC tool, right-click an asset in the **Asset Browser** and select **Open Source Asset**.

	 The editor detects where the original scene was created, and launches the appropriate DCC tool. You're prompted to manually select an application if the editor can't determine the file origin.

	 >**Note:** If you have both Maya and Maya LT installed, the editor uses Maya to launch FBX files. Maya LT only launches if the original scene is an .mlt file.


**To send a new material to Maya:**

1. Right-click in the **Asset Browser**, and select **Create > Material (Standard)**.

    For more information, see ~{ Create a material }~.

2. In the dialog box that appears, enter the name of the new material.

	The new material appears in the **Asset Browser**.

3. Make changes to your material in the **Property Editor** and click ![](../images/icon_save.png) to save your changes.

4. In the **Asset Browser**, right-click the material and select **Send to Maya**.

    When you select the material using **Hypershade** in Maya and view a property editor such as the **Attribute Editor**, the material **Engine Resource** path points to the material's location in your interactive project.

    The name you enter in Maya is also used as the material name in {{ProductName}}. For example, if you enter myPBS in the **Engine Resource** attribute/parameter, then select **File > Send to Interactive** (in Maya/Maya LT), the material is called myPBS.material in {{ProductName}}.

## Send assets and materials from Maya

**To send assets from Maya:**

1. Load the {{ProductName}} project where you plan to use the assets.
2. Establish a connection with Maya.
3. With your model selected in Maya, select **File > Send to Interactive > All** to export the whole scene, or **File > Send to Interactive > Selection** to export only selected objects.
4. In the file browser that appears, navigate to where you want to save the FBX file within your interactive project, enter a new filename if needed, and click **Export All** or **Export Selection**.
5. In the **Import FBX** options window that appears, set options to import your asset with textures and materials. See ~{ Import a model with textures and materials }~.
6. Click **Import**.

	The assets export to your interactive project, into the specified directory. The FBX file is available immediately in the **Asset Browser**, and you can place the imported assets into your level. Any materials associated with the imported objects are created as separate files alongside the asset in the project folder.

7. If you continue to work on the assets in Maya, select **Update** (next to the green "Connected to Interactive" message at the bottom right) at any time to refresh the assets in {{ProductName}}.

**To send materials from Maya:**

1. In Maya, create a new StingrayPBS shader. See ~{ ShaderFX shader graphs }~.

3. In the **Attribute Editor**, enter a path and a name for the material in the **Engine Resource** attribute.

    For example, if you want the material, named myPBS, to be stored in the materials folder of the project you currently have open in the interactive editor, enter `content/materials/myPBS` in the **Engine Resource** attribute.

    > **Note:** The name you enter in Maya is also used as the material name in {{ProductName}}. For example, if you enter myPBS in the **Engine Resource** attribute, the material is called myPBS.material in {{ProductName}}.

4. In the **Hypershade** (**Windows > Material/Texture Baking Editors > Hypershade**), select the StingrayPBS material, then select **File > Send to Interactive > Selection** from the main menu bar.

    The material is sent to the Interactive editor and appears in the **Asset Browser**. Its shader graph remains the same after the transfer.

5. In the Interactive editor, you can edit material attributes using the **Property Editor**, or click **Make Unique** to edit the graph in the **Shader Graph Editor**.

   >	**Tip:** If you make any changes to assets, click **Update** (next to the green "Connected to Interactive" message at the bottom right in Maya) to refresh the other viewport.


## Tag assets with Level Sync

1. To manually tag assets to reproduce them with the same viewport in the Interactive editor, select your assets in Maya and then select **Interactive > Set Engine Resource**.

2.	In the **Set Engine Resource** window that appears, tag the selected assets using the following fields:

	- **Target Folder:** Sets the path of all the assets to tag. The default path is <i>content/models/[your_scene_name]</i>. If you are working in an unsaved file, the default path is <i>content/models</i>. You can change the default path manually.

	- **Asset Name:** The name of the asset. By default, the node name is used. When multiple assets are selected, this field is disabled.

	- **Result:** When one asset is selected, this field shows the output path  of the single asset.

3. Click **Apply and Close**.

4. Send your assets with Level Sync from Maya.

5. To automatically tag your asset(s) with level sync, select **Interactive > Send All > ![](../images/opt_box.png)** or **Interactive> Send Selected > ![](../images/opt_box.png)** and select **Auto Tag**.

	All of the top level nodes are tagged with the default values.

## Send assets from Maya with Level Sync

> **Note:** Currently, level sync only supports scenes from Maya and Maya LT that use the Y-up world coordinate system.

1. Tag the assets you want to send to {{ProductName}}.

2. Select **Interactive > Send Selected > ![](../images/opt_box.png)** to send selected assets and select **Interactive > Send All > ![](../images/opt_box.png)** to send all assets with level sync.

4.	(Optional) In the **Send Level** window that appears, turn on **Send Missing Assets** to ensure assets that are missing from the project are included in the export.

5. Click **Apply and Close**

	The assets are sent to the {{ProductName}} editor and are added to the current level.

>**Note:** After level-syncing your assets, you can still make updates to your assets in Maya or Maya LT and send them to {{ProductName}}. Turn on **Update Existing Assets** in the **Send Level** window before sending your scene.
