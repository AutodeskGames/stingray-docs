# Packaging a dynamically linked library

If your project's Lua code relies on C functions in a dynamically linked library, you will need to make sure that the Stingray engine can find and load your dynamic library at runtime.

## For development

In order to launch your game from the Stingray Editor using either the Test Level or Run Project methods, you will need to make your dynamic library available to the instance of the Stingray engine that is called by the Editor.

The easiest way to do this is to place your dynamic library in the engine's directory within your Stingray installation folder. For example,

`C:\Program Files\Autodesk\Stingray\<version>\engine\win64\dev`

You could put it in a sub-directory within this location, as long as you add the relative path to the `require` call that loads the library in your project's Lua script.

## For deployment

When you deploy your project, you'll also need to copy your dynamic library to your game's final output folder.

For Windows targets, you can automate this task by editing the *package.manifest* file that you'll find within the engine's directory in your Stingray installation folder. Add the relative path and filename of your library to the list of files in this manifest, and save your changes. From now on, when you deploy your game, your dynamic library will automatically be copied to the same relative path in the game's deployment directory.

<!-- For Android targets, TODO!!! -->
