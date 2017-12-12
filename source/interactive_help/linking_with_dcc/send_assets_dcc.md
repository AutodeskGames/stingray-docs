# Send assets to 3ds Max

You can use the following ways to connect or send assets between the Interactive editor and 3ds Max, depending on whether you want to establish a live link (seeing updates in the editor as you edit the asset in 3ds Max), or whether you want to launch and edit the original source scene in 3ds Max.


### Connect 3ds Max and {{ProductName}}

1. To initiate a connection from the {{ProductName}}, send assets to 3ds Max or use **DCC Live Link**.

	When you have different versions of the DCC tools like 3ds Max and Maya installed on the same system, use the **DCC Live Link** (Window > DCC Live Link) option in the Interactive editor to connect with the DCC tools. The **DCC Live Link** displays the default port and the plugin version used to connect to the different DCC editors.

2. To connect from 3ds Max, select **Interactive > Connect**. If connection fails, select **Interactive > Connect Options** to connect to the interactive using the default port.

### Send assets to 3ds Max:

1. In the Interactive editor, right-click an asset in the **Asset Browser** and select **Send to 3ds Max**.

	This launches the asset in 3ds Max. You will find that Connect is enabled in the Interactive menu.

2. Make any edits you want in 3ds Max.

3. Click **Interactive > Update** to send any updates to the interactive editor.

### To edit the original source scene in 3ds Max:

1. In the Interactive editor, right-click an asset in the **Asset Browser** and select **Open Source Asset**.

	The editor detects where the original scene was created, and launches the appropriate DCC tool. You're prompted to manually select an application if the editor can't determine the file origin.

2. Make any edits you want in 3ds Max.

3. When you're ready to reload the asset in the interactive editor, export as an FBX file using **File > Export** option, or **Interactive > Send All/ Send Selection**.

4. Press F5 to refresh the editor if necessary.
