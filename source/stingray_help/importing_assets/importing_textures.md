# Import textures

> **Note:** Materials and textures can be included when importing a FBX file. See also ~{ Import a model with textures and materials }~.

For more information on supported file types, see ~{ Supported file formats }~.

**To import texture files independently:**

1.	In the **Asset Browser**, browse to the location where you want to import texture files.

2.	Click **Import**, browse to select one or more image files, and click **Open**. Stingray will bring the selected image files into the project, and create a new *.texture* resource for each.

    By default, Stingray assigns an appropriate texture template and compression settings for different target platforms as you import the textures. Stingray can apply the texture compression either by texture file suffix comparison or by image analysis. You can also modify the **Project Settings** to control the texture template assignment during import. See ~{ Edit project settings }~.

3. To set up additional properties for a new texture, double-click it in the Asset Browser to open it in the ~{ Texture Manager }~.

## Quick texture import

If your images are in *.dds* format, and you want to assign a template of processing settings or a category name to multiple textures at the same time, you can import your images using the **Texture Manager**.

1.	Make sure your *.dds* files follow the requirements outlined under ~{ DDS texture file settings for Stingray }~.

1.	Copy your image files into your project.

1.	Open the **Texture Manager** by choosing **Window > Texture Manager** from the main Stingray menu.

1.	In the **Texture Manager**, choose **File > New Texture From DDS...**. The **Choose DDS** window opens, which lists all *.dds* files in your project that are not already associated with a texture resource.

1.	In the **Choose DDS** window, select your new image files and click **OK**. The **Quick Texture Import** window opens, where you can set the texture processing template and category that will be applied to each new texture, or to all textures. Click **OK** when done.

See also ~{ Create a texture category }~ and ~{ Create a texture template }~.

---
Related topics:

- ~{ DDS texture file settings for Stingray }~
- ~{ Texture Manager }~
- ~{ Create a texture category }~
- ~{ Create a texture template }~
- ~{ Edit project settings }~

---
