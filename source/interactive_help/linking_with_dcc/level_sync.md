# Level Sync with 3ds Max

You can link and export entire scenes built in 3ds Max directly to {{ProductName}}. Once 3ds Max is linked to the Interactive editor, scene assets can be automatically or manually tagged, and then reproduced with the same layout in your {{ProductName}} level. Modifications you make to the assets in 3ds Max are then updated inside the {{ProductName}} editor. This makes it easier to build, iterate, review and change scenes, without having to manually reproduce layouts in both tools.

## Tag assets with Level Sync

Tagging assigns a name and target folder for your assets, so 3ds Max knows where to export your files.

### Manually tag your asset(s) with Level Sync

1.	In 3ds Max, select your assets and then select **Interactive > Level Sync Settings**.
2.	In the **Level Sync Settings** window that appears, tag the selected assets to export using the following fields:

	- **Target Folder:** Sets the path of all the assets to tag. The default path is <i>content/models/[your_scene_name]</i>. If you are working in an unsaved file, the default path is <i>content/models</i>. You can change the default path manually.

	- **Asset Name:** The name of the asset. By default, the node name is used. When multiple assets are selected, this field is disabled.

	- **Result:** When one asset is selected, this field shows the output path  of the single asset.

3. Click **Apply and Close**.

4. Send your assets from 3ds Max. See  ~{ Send assets from 3ds Max with Level Sync }~.

	>	**Note:** Tagging respects instancing. During tagging, the name of the first instance is used as the **Asset Name**, and all instances receive the same tag.

5. Link 3ds Max and {{ProductName}} viewports (**Interactive > Live Camera Tracking**). This lets you review the scene in the interactive viewport and update them by sending new or updated scene assets with Level Sync.

### Automatically tag your asset(s) with level sync

1.	In 3ds Max, select **Interactive > Level Sync Settings**, and then select **Auto Tag All Untagged**.

  	All of the top level nodes are tagged with the default values.

3.	Send your assets from 3ds Max.
