# Supported file formats

This page lists the different types of content you can import into your Stingray projects.

## Textures

-	PNG
-	JPG
-	RAW
-	TGA/TARGA
-	TIF/TIFF. **Note:** Stingray does not support importing 32-bit TIFF files.
-	EXR. **Note:** Stingray does not support multilayer EXR files.
-	DDS. The Stingray engine can render imported DDS textures as-is without additional conversion or compression. Use DDS format if you want to pre-set your image sizes and compression in a 2D texturing tool instead of setting up your textures in the Stingray ~{ Texture Manager }~. See also ~{ Recommended texture compression settings }~.

## Models, materials and animations

Use the FBX format to import 3D meshes, materials, and animations into Stingray.

>	**Note:** Stingray does not support OBJ files out-of-the-box. For a sample plug-in that demonstrates how you could extend Stingray to bring in OBJ models, see [the SDK sample repository](https://github.com/AutodeskGames/stingray-plugin-api-samples/tree/master/samples/mesh_import) and [the import extensions page in the SDK Help](http://help.autodesk.com/view/Stingray/ENU/?guid=__sdk_help_extend_editor_plugin_extensions_imports_html).

## Audio

You can import any type of audio file [supported by Wwise](https://www.audiokinetic.com/library/edge/?source=Help&id=what_media_files_are_supported). Most projects use WAV files.

## Fonts

You can import the following types of fonts into Stingray as *.font* resources, which you can use with the Lua `stingray.Gui` API:

-	TTF
-	TTC
-	OTF
-	OTC
-	CFF
-	WOFF
-	FNT
-	PFA
-	PFB
-	PFR

For details, see ~{ Import fonts }~.

## About output formats

Stingray doesn't have "output formats" that you can open in other applications. Instead, the final result that you create from a Stingray project *is its own* application.

When you deploy your project for a target platform (like Windows, iOS or Android), Stingray creates a package that gathers together several things: the Stingray runtime engine; additional libraries the engine depends on; and data files that contain optimized binary representations of your project's resources. You distribute these packages for other people to run on their computers or devices.

For more information, see ~{ About the content lifecycle }~.
