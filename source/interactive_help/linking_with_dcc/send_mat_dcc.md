# Send materials to Maya, Maya LT, or 3ds Max

You can easily send and update materials between {{ProductName}} and Maya, Maya LT, or 3ds Max using the **Send to** command. By default, materials are automatically sent along with each unit when you transfer the unit between {{ProductName}} and your DCC tool.

> **Tip:** To change this behavior, select **File > Settings > Editor Settings** and disable **Send materials with unit**.

**To send a material from the interactive editor to your DCC tool**

1. Establish a connection with Maya, Maya LT, or 3ds Max. See ~{ Connect to a DCC tool }~.

2. Right-click in the **Asset Browser**, and select **Create > Material (Standard)**.

    For more information, see ~{ Create a material }~.

2. In the dialog box that appears, enter the name of the new material.

	The new material appears in the **Asset Browser**.

3. Make changes to your material in the **Property Editor** and click ![](../images/icon_save.png) to save your changes.

4. In the **Asset Browser**, right-click the material and select **Send to <your DCC tool>**.

    When you select the material in your DCC tool (using **Hypershade** in Maya or **Material Editor** in 3ds Max) and view a property editor (such as the **Attribute Editor** in Maya or the **Material Parameter Editor** in 3ds Max), the material **Engine Resource** path points to the material's location in your interactive project.

    The name you enter in the DCC tool is also used as the material name in {{ProductName}}. For example, if you enter myPBS in the **Engine Resource** attribute/parameter, then select **File > Send to Interactive** (in Maya/Maya LT) or **Interactive > Material Send Selected** (in 3ds Max), the material is called myPBS.material in {{ProductName}}.

**To send a unit from the interactive editor to your DCC tool with material updates**

1. In the **Asset Browser**, right-click the unit and select **Send To \<your DCC tool\>**.

2. In the dialog box that appears, click **Yes** to overwrite the existing material and import the material from {{ProductName}} into your scene.

    If a material with the same **Engine Resource** path already exists, it is replaced with the material from {{ProductName}}.

    > **Tip:** Select **File > Settings > Editor settings** and deselect **Prompt overwrite sent materials** to turn off this prompt.
