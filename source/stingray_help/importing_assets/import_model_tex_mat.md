# Import a model with textures and materials

[![UPDATED](../images/updated.png "What else is new in v1.6?")](../release_notes/readme_1.6.html)

With a properly configured FBX file, you can automatically import a model with its texture resources applied.

> **Note:** You can also export scenes or selected objects and their materials directly into Stingray using Maya or Maya LT. See ~{ Interop with Maya, Maya LT, or 3ds Max }~.

**To prepare, then import your FBX file:**

1. Use a logical naming convention for the materials attached to your object.

	The material names are brought into Stingray just as they are in the FBX file.

2. Ensure that the path to any texture files associated with the material resolve correctly.

	During import, this lets Stingray recreate the materials and reconnect the associated texture files.

3. In Stingray, open the **Asset Browser** and navigate to the folder where you want to import your model.

4. Click **Import**.

5. In the **Import FBX** options, do the following:
	- Ensure that **Materials** is on.
	- Ensure that **Shared Materials** is on.
<br>
	Stingray looks in your project for existing materials. If a matching material is found, it is assigned to the model on import.
	- Ensure that **Create Materials Folder** is on.
<br>
	Stingray automatically places any materials associated with the imported objects into a separate folder.
	- Ensure that **Textures** is on.
	- Turn on **Shared Textures**.
<br>
	Stingray looks in your project for existing textures. If a matching texture is found, it is assigned to the model on import.
1. Click **Import**.

	On import, any materials associated with the imported objects are placed in a separate folder in the Stingray directory.

	[![NEW](../images/new.png "What else is new in v1.6?")](../release_notes/readme_1.6.html) The imported textures are assigned texture templates with default compression and other processing settings for compilation on different target platforms. For example, imported normal map textures are assigned the normal texture template.

	![](../images/stingray_couch_assets.png)

> **Note:** To merge meshes that share the same material, you need to enable **Combine Meshes** and **Combine by Material** options; combining meshes by material won't occur if **Combine Meshes** option is disabled.

---
Related topics:
- ~{ Edit a child material }~
---
