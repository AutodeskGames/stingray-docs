# Import an FBX file

Start the interactive editor, and load the project in which you want to use your assets.

(For example, if you have your own characters and animation, you might create your project using the 'empty' template. If you want to experiment with a character already set up, you can use the 'Character' template. See also ~{Set up a project}~ and ~{ Template projects }~.)

Using the FBX file format, you can import static or skinned meshes and their associated textures, as well as animation files.

1. In the ~{Asset Browser}~, navigate to the `content/models` folder of your project where you want to place the FBX file.

2. Create a new folder to contain the imported files.

3. In the **Asset Browser**, click **Import**.

4. Navigate to select the file you want, then click **Open**.

5. In the window that appears, set the **Import FBX** options you want and click **Import**.

    For example, turn on the following options:

    -	**Textures** to import embedded textures.
    -	**Materials** to import materials.
    -	**Animation** to import animation clips.
    -	**Generate UVs for Light Baking** to generate UVs for light baking.
	-	Mikktspace support consistently generates tangent spaces for an imported mesh. The **Tangent** option lets you **Calculate** (default) tangents using mikktspace tangent generation or **Import** vertex tangents. **Calculate** is recommended to achieve the smallest vertex count.

The FBX file, including any data you specified in the FBX Import options, is imported to the selected folder in the **Asset Browser**. You can then select and place it in the level.

Selecting the file in the **Asset Browser** also makes it display in the **Asset Preview**. If the imported file has animation, you can also preview the animation.

---
Related topics:
-	~{ Import textures }~
---
