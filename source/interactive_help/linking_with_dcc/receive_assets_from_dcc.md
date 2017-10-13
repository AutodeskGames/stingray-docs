# Receive assets from Maya, Maya LT, or 3ds Max

With the {{ProductName}} engine and Maya, Maya LT, or 3ds Max on the same system, you can export scenes directly to your {{ProductName}} project with no polygon count restriction.

To send assets to {{ProductName}}:

1.  Open {{ProductName}} and load the project where you plan to use the assets.
2.  Establish a connection with your DCC tool.
3.  With your model selected in DCC, do one of the following:

    -   (3ds Max) Select **Interactive > Send All** to export all assets in the scene, or **Interactive > Send Selection** to export only selected assets.
    -   (Maya/Maya LT) Select **File > Send to Interactive > All** to export the whole scene, or **File > Send to Interactive > Selection** to export only selected objects.

4.  In the file browser that appears, navigate to where you want to save the FBX file within your interactive project, enter a new filename if needed, and click **Save** (3ds Max) or **Export All** or **Export Selection** (Maya/Maya LT).

5. In the **Import FBX** options window that appears, set options to import your asset with textures and materials. See ~{ Import a model with textures and materials }~.
6. Click **Import**.

    The assets export to your interactive project, into the specified directory. The FBX file is available immediately in the **Asset Browser**, and you can place the imported assets into your level. Any materials associated with the imported objects are created as separate files alongside the asset in the project folder.

7. If you continue to work on the assets in your DCC tool, select **Interactive > Update** (3ds Max) or **Update** (next to the green "Connected to Interactive" message at the bottom right in Maya) at any time to refresh the assets in {{ProductName}}.
