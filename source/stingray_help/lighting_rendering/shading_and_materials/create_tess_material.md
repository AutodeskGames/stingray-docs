# Create a tessellation material

[![NEW](../../images/new.png "What else is new in v1.7?")](../../release_notes/readme_1.7.html)

1. Do the following to create a new empty material for customization:
  - In the **Asset Browser**, navigate to the folder where you want to create the material.
  - Right-click in that folder and select **Create > Material (Empty)**.
  - In the dialog box that appears, enter a name for your new material.
    This creates a new material that contains only one **Output > Standard Base** node by default.
  - In the **Property Editor**, click ![Open Shader Graph](../../images/button_openShaderGraph.png).
1. In the Shader Graph Editor, select the **Standard Base** node.
1. In the **Property Editor**, enable **Hardware Tessellation**.

	 ![](../../images/enable_hard_Tess.png)

1. In the Shader Graph Editor, plug in values to the tessellation specific inputs. See ~{ Create or edit shader graphs }~.
1. Assign the material to a mesh with some amount of existing tessellation.
