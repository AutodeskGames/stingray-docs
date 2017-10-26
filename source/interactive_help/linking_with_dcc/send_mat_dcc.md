# Send a material to 3ds Max

You can easily send and update materials between {{ProductName}} and 3ds Max using the **Send to** command. By default, materials are automatically sent along with each unit when you transfer the unit between {{ProductName}} and 3ds Max.

> **Tip:** To change this behavior, select **File > Settings > Editor Settings** and disable **Send materials with unit**.

**To send a new material from the Interactive editor to 3ds Max**

1. Establish a connection with 3ds Max. See ~{ Send assets to 3ds Max }~.

2. Right-click in the **Asset Browser**, and select **Create > Material (Standard)**.

    For more information, see ~{ Create a material }~.

2. In the dialog box that appears, enter the name of the new material.

	The new material appears in the **Asset Browser**.

3. Make changes to your material in the **Property Editor** and click ![](../images/icon_save.png) to save your changes.

4. In the **Asset Browser**, right-click the material and select **Send to 3ds Max**.

    In 3ds Max, when you select the material using **Material Editor** and view a property editor (such as the **Material Parameter Editor**), the material **Engine Resource** path points to the material's location in your interactive project.


**To send a unit from the Interactive editor to 3ds Max with material updates**

1. In the **Asset Browser**, right-click the unit and select **Send To 3ds Max**.

2. In the dialog box that appears, click **Yes** to overwrite the existing material and import the material from {{ProductName}} into your scene.

    If a material with the same **Engine Resource** path already exists, it is replaced with the material from {{ProductName}}.

    > **Tip:** Select **File > Settings > Editor settings** and deselect **Prompt overwrite sent materials** to turn off this prompt.
