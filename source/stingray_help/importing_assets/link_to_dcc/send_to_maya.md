#Send materials to Maya, Maya LT, or 3ds Max

You can easily send and update materials between Stingray and Maya, Maya LT, or 3ds Max using the **Send to** command.
By default, materials are automatically sent with a unit when it is transferred between Stingray and your DCC.

> **Tip:** To change this behavior, select **File > Settings > Editor Settings** and disable **Send materials with unit**.

**To send a material from Stingray to your DCC**

1. Establish a connection with Maya, Maya LT, or 3ds Max. See ~{ Send assets to a DCC }~.

2. Right-click in the **Asset Browser**, and select **Create > Material (Standard)**.

    For more information, see ~{ Create a material }~.

2. In the dialog box that appears, enter the name of the new material.

	The new material appears in the **Asset Browser**.

3. Make changes to your material in the **Property Editor** and click ![](../../images/icon_save.png) to save your changes.

4. In the **Asset Browser**, right-click the material and select **Send to <your DCC tool>**.

   When you select the material in your DCC (using **Hypershade** in Maya or **Material Editor** in 3ds Max) and view a property editor (such as the **Attribute Editor** in Maya or the **Material Parameter Editor** in 3ds Max), the material **Engine Resource** path points to the material's location in Stingray.

   The name you enter in the DCC is also used as the material name in Stingray. For example, if you enter myStingrayPBS in the **Engine Resource** attribute/parameter, then select **File > Send to Stingray** (in Maya/Maya LT) or **Stingray > Materials > Send Selected** (in 3ds Max), the material is called myStingrayPBS.material in Stingray.

**To send a unit from Stingray to your DCC with material updates**

1. In the **Asset Browser**, right-click the unit and select **Send To <your DCC tool>**.

2. In the dialog box that appears, click **Yes** to overwrite the existing material and import the material from Stingray into your scene.

  If a material with the same **Engine Resource** path already exists, it is replaced with the material from Stingray.

> **Tip:** Select **File > Settings > Editor settings** and deselect **Prompt overwrite sent materials** to turn off this prompt.
