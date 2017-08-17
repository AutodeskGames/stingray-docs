# Sending Assets

With the 3ds Max Interactive engine and 3ds Max on the same system, you can export scenes directly to your 3ds Max Interactive project with no polygon count restriction.

To send assets to 3ds Max Interactive:

1.  Open 3ds Max Interactive and load the project where you plan to use the assets.
2.  In 3ds Max, select **Interactive > Connect** from the menu bar.
3.  To overwrite materials that may already be in 3ds Max Interactive, select **Interactive > Overwrite Materials**.

	**Note:** This is important if you have previously sent this mesh and its materials to 3ds Max Interactive. When Overwrite Materials is off, materials are only created if they are missing in 3ds Max Interactive, but they are not updated if they already exist. This can be useful if you have made changes to the material in 3ds Max Interactive and you do not want 3ds Max to overwrite them as you update the mesh.

4.  Do one of the following:

    -   If you want to export all assets in the scene, select **Interactive > Send All **.
    -   If you want to export only selected assets, select **Interactive > Send Selection**.

    The Save dialog appears.

5.  Select or create the folder where you want the assets to save.
6.  Enter a File name.
7.  Click **Save**.

	**Note:** The transfer may take a few minutes.

    The assets export to your 3ds Max Interactive project, into the specified directory. The FBX file is available immediately in the 3ds Max Interactive Asset Browser, and you can place the imported assets into your level. Any material associated with the objects you send are created as separate files alongside the asset in the 3ds Max Interactive directory.

8.  If you continue to work on the asset(s) in 3ds Max, select **Interactive > Update** at any time to refresh the asset(s) in 3ds Max Interactive.

---
IncludeIf:
-	MaxInteractive

---
