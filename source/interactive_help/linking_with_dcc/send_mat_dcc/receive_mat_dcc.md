# Receive materials from 3ds Max

You can also import Interactive Physically Based Shaders (PBS) that you create in 3ds Max directly to your {{ProductName}} project. When you receive your material from 3ds Max, the look of the shader and the graph remains the same, including all of the input connections and nodes.

**To import a Stingray PBS material to your {{ProductName}} project**

1. In the Interactive editor, establish a connection with 3ds Max. See ~{ Send assets to 3ds Max }~.

2. In 3ds Max, create a new Interactive PBS shader or select an existing one. See ~{ ShaderFX shader graphs }~.

3. In the **Material Parameter Editor** enter a path and a name for the material in the **Engine Resource** attribute.

	For example, if you want the material, named myPBS, to be stored in the materials folder of the project you currently have open in the Interactive editor, enter `content/materials/myPBS` in the **Engine Resource** attribute.

	> **Note:** The name you enter in 3ds Max is also used as the material name in {{ProductName}}. For example, if you enter myPBS in the **Engine Resource** attribute, the material is called myPBS.material in {{ProductName}}.

4. Select the object with materials you want to send to {{ProductName}}, then select **Interactive > Material Send Selected** from the main menu bar.

	The material is sent to the Interactive editor and appears in the **Asset Browser**. Its shader graph remains the same after the transfer.

	![](../../images/send_to_asset_browser.png)

5. In the Interactive editor, you can edit material attributes using the **Property Editor**, or click **Make Unique** to edit the graph in the **Shader Graph Editor**.

---
Related topics:
- ~{ Import a model with textures and materials }~
- ~{ Receive assets from 3ds Max }~
- ~{ Linking with {{ProductName}} }~
---
