# Batch import assets

[![NEW](../images/new.png "What else is new in v1.5?")](../release_notes/readme_1.5.html)

You can manually batch import multiple FBX files and textures to your project.

* Copy the asset files to your project.
* Select **File > Batch Import** to trigger importing of scenes and textures files.

    The batch import scans all the files in your project like scenes, images, textures, and

    * creates a .unit file for any FBX file that doesn't have one.
    * creates a .texture file for any missing textures.
    * reimports an FBX file if it’s newer than an existing .dcc_asset file.

* Add common images and other files to a `.stingrayignore` file (see ~{ Ignore files in the project folder }~) to exclude them from batch import.
