# Texture Manager

- **Window > Texture Manager**

Use the **Texture Manager** to import textures and manage texture settings.

In the **Texture Manager** you'll create a texture-resource, which refers to an input image file. The texture-resource settings define how the file is handled by the data compiler, for example if the texture should be compressed.

You can edit the following settings:

<dl>
 <dt>Input Image</dt>
 <dd>The original image file that the selected texture refers to. This is the uncompressed image, which goes through processing during data compilation and ends up as a compiled texture resource. In most cases you won't change this, since it can be confusing when a texture file isn't referencing an image file with the same name. However, it can be useful if you need to have differences across platforms, for example if you need to have a texture that represents Xbox One controller buttons on Xbox One and PlayStation 4 controller buttons on PlayStation 4.
 </dd>

 <dt>Category</dt>
 <dd>Can be used for organizing textures. You can filter your textures by **IBL-Probe**, **Light/IES**, **Albedo**, **Albedo Opacity**, **HDRI/Skydome**, or **Linear Greyscale**. Note that this only changes the category for the chosen platform. The most common case is to have the same category for a texture across all platforms, so make sure to select the correct platforms before changing the category. The category can also be used for dropping mip steps at runtime.</dd>

 <dt>Apply Processing</dt>
 <dd>When off, the **Input Image** passes through data compilation without any processing or mip step generation. This means that none of the options below the **Apply Processing** option have any effect. This is useful for exotic textures.</dd>

<dt>Output Format</dt>
<dd>This drop-down list lets you select a compression format that you want the texture to go through during data compilation.

Selecting different formats for different platforms on the same texture is broadly useful since the texture format support differs between platforms. Consult the platforms specifications to find out which output formats are applicable to which platforms.

> **Note**: For iOS and Android, compressed textures must be power of two textures. If compressing into PVRTC format, textures must be square in addition to being power of two textures on any hardware.
</dd>

 <dt>Discard The Largest/Smallest x Mip Steps</dt>
 <dd>Enter a value in one of these two fields to drop mip steps from the compiled texture. This lowers the texture resolution (if you drop any of the largest mip steps). This saves disk space and video memory when running the game on the chosen platforms.

 >**Note:** If skipping the largest mip steps on any compressed textures, the textures need to be be data-compiled again to fix the colors being in wrong space in the mip levels.

 </dd>

 <dt>Generate Mip Steps</dt>
 <dd>Use this drop-down menu to specify whether the original mip levels in the **Input Image** should be kept during compilation, or whether mip maps should be generated for the image using one of the two available mip step generation filters.</dd>

 <dt>sRGB</dt>
 <dd>When on, the texture goes through gamma correction during data compilation. Turn off for textures you don't want to be gamma corrected, for example normal maps.</dd>

 <dt>Cut Alpha Threshold</dt>
 <dd>When generating mip maps for textures with alpha, the opaque areas can start shrinking for the lower mip steps due to problems with the alpha coverage test. To counter this, enable Cut Alpha and set the threshold value. Setting the threshold to a value similar to the Alpha Mask Clip of the material usually gives a good result.</dd>

<dt>Streamable</dt>
<dd>Select this option to make the engine defer loading more detailed mip levels for this texture from disk until they actually are needed for rendering. For details, see ~{ Texture streaming }~.</dd>

<dt>Resident mip levels</dt>
<dd>When a texture is marked as streamable, this value determines how many mip levels of the image are kept in memory at all times. For details, see ~{ Texture streaming }~.</dd>

</dl>

---
Related topics:
-	~{ Import textures }~
-	~{ Edit Texture settings }~
-	~{ Create a texture category }~
---
