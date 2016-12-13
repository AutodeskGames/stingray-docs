# Create a texture template

![UPDATED](../../../images/updated.png)

A texture template is a file in your project that looks like a normal texture file (in terms of file format), usually set up by the technical artist on a project team. The template typically contains the texture resource settings and compression formats of the texture on different platforms.

The **Texture Manager** includes default texture templates such as

-	Normal template for normal map textures.
-	Linear grayscale template for greyscale textures.
-	Albedo opacity template for textures with alpha channel.
-	Albedo template for textures without alpha channel.
-	Roughness/Metallic/AO template for RMA textures.
-	Lightmap template for lightmap textures.

[![NEW](../../../images/new.png "What else is new in v1.7?")](../../../release_notes/readme_1.7.html)

In addition to the texture settings, you will find suffixes denoting the texture types defined in the texture templates. These are used to assign the texture templates to the textures you import by matching the file suffix to the suffix defined in one of the templates.

~~~{sjson}

// Albedo
suffixes = [ "albedo", "diffuse", "color",  "_df", "_c"]

// Albedo_opacity
suffixes = ["_albo", "_dfo", "albedo-opacity", "diffuse-opacity", "color-opacity"]

//Normal:
suffixes = [ "normals", "normal", "_norm", "_n", "_nm", "_nrm" ]

//Linear Greyscale:
suffixes = [ "roughness", "metalness", "_ao", "_rough", "_metal", "_r", "_m", "bump", "_bmp" ]

//Roughness/Metallic/AO:
suffixes = ["rma"]

//HDR/Skydome:
Suffixes = [ "skydome", "hdri", "_hdr" ]
~~~

You can customize the texture templates to add texture suffixes of your own and use them on texture import. The texture templates are located in `core/texture_categories` folder within your Stingray install. See ~{ Working with core resources }~ for details on overriding the texture template resources.

You can create texture templates to quickly configure imported textures without having to use the **Texture Manager**.

To create a new template:

1. Select one (and only one) texture in the **Texture Manager**.
2. Select **File > Save Settings As Template**.

	The window that appears shows how the actual template file will look internally, what settings it will contain for each platform, and what settings they have in common.

	![](../../../images/saveSettings_asTemplate.png)

3. Click **OK** to save this as a new texture template.

4. In the **Save As** dialog box, ensure that you save the texture template within your project and give it a good name, since the interface name is based on this file name.

Once saved, your texture template is available within the **Quick Texture Import** window. See ~{ Import textures }~.

---
Related topics:
-	~{ Texture Manager }~
-	~{ Import textures }~
---
