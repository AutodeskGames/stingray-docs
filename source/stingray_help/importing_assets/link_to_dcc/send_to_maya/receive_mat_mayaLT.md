# Receive materials from Maya, Maya LT, or 3ds Max

With the DCC Link plug-in installed, you can import Stingray Physically Based Shaders (PBS) directly to your project. When you receive your material from Maya, Maya LT, or 3ds Max, the look of the shader and the graph remains the same, including all of the input connections and nodes.

**To import a Stingray PBS material to your Stingray project**

1. In Stingray, establish a connection with Maya, Maya LT, or 3ds Max. See ~{ Send assets to a DCC tool }~.

2. In your DCC tool, create a new StingrayPBS shader. See ~{ ShaderFX shader graphs }~.

3. In the **Attribute Editor** (Maya/Maya LT), or **Material Parameter Editor** (3ds Max) enter a path and a name for the material in the **Engine Resource** attribute.

	For example, if you want the material, named myStingrayPBS, to be stored in the materials folder of the currently opened Stingray project, enter content/materials/myStingrayPBS in the **Engine Resource** attribute.

	> **Note:** The name you enter in the DCC tool is also used as the material name in Stingray. For example, if you enter myStingrayPBS in the **Engine Resource** attribute, the material is called myStingrayPBS.material in Stingray.

4. Do one of the following to send the material:

	-	(Maya/Maya LT) In the **Hypershade** (**Windows > Material/Texture Baking Editors > Hypershade**), select the StingrayPBS material, then select **File > Send to Stingray > Selection** from the main menu bar.
	
		![](../../../images/send_to_hypershade.png)
	
	-	(3ds Max) Select the object with materials you want to send to Stingray, then select **Stingray > Materials > Send Selected** from the main menu bar.

	The material is sent to Stingray and appears in the **Asset Browser**, and the shader graph remains the same.

	![](../../../images/send_to_asset_browser.png)

5. In Stingray, edit material attributes using the **Property Editor**, or click **Make Unique** to edit the graph in the **Shader Graph Editor**.

---
Related topics:
- ~{ Import a model with textures and materials }~
- ~{ Receive assets from Maya or Maya LT }~
- ~{ Interop with Maya, Maya LT, or 3ds Max }~
---
