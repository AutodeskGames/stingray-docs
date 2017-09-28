# Tag assets with Level Sync

Tagging assigns a name and target folder for your asset(s), so your DCC tool knows where to export your files. Once Maya, Maya LT, or 3ds Max are linked to the interactive editor, assets can be automatically or manually tagged, and then reproduced with the same layout in your {{ProductName}} level.

## Manually tag your asset(s) with level sync

1.	Link Maya, Maya LT, or 3ds Max with the interactive editor. See ~{ Connect DCC tool and engine viewports }~.

2.	In your DCC tool, select your asset(s) and then select **Interactive > Set Engine Resource**.
The Set Engine Resource window lets you tag the assets you want to export to {{ProductName}}.

3.	In the **Set Engine Resource** window that appears, tag the selected assets using the following fields:

	- **Target Folder:** Sets the path of all the assets to tag. The default path is <i>content/models/[your_scene_name]</i>. If you are working in an unsaved file, the default path is <i>content/models</i>. You can change the default path manually.

	- **Asset Name:** The name of the asset. By default, the node name is used. When multiple assets are selected, this field is disabled.

	- **Result:** When one asset is selected, this field shows the output path  of the single asset.

4. Click **Apply and Close**.

5. Send your assets from your DCC tool. See ~{ Send assets from Maya and Maya LT with Level Sync }~ or ~{ Send assets from 3ds Max with Level Sync }~.

	>	**Note:** Tagging respects instancing. During tagging, the name of the first instance is used as the **Asset Name**, and all instances receive the same tag.

## Automatically tag your asset(s) with level sync

1.	Link Maya, Maya LT, or 3ds Max with the interactive editor. See ~{ Connect DCC tool and engine viewports }~.

2.	Do one of the following:

	-	In your DCC tool, select **Interactive > Set Engine Resource**, and then select **Auto Tag All Untagged**.

	-	In Maya or Maya LT, Select **Stingray > Send All > ![](../../images/opt_box.png)** or **Stingray > Send Selected > ![](../../images/opt_box.png)** and select **Auto Tag**.

		All of the top level nodes are tagged with the default values.

3.	Send your assets from your DCC tool. See ~{ Send assets from Maya and Maya LT with Level Sync }~ or  ~{ Send assets from 3ds Max with Level Sync }~.

---
Related topics:
-  ~{ Send assets from Maya and Maya LT with Level Sync }~
-  ~{ Send assets from 3ds Max with Level Sync }~ 
---
