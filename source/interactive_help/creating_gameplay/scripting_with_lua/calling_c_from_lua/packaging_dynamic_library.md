# Packaging a dynamically linked library

If your project's Lua code relies on C functions in a dynamically linked library, you will need to make sure that the interactive engine can find and load your dynamic library at runtime.

## For development

In order to launch your content from the interactive editor using either the Test Level or Run Project methods, you will need to make your dynamic library available to the instance of the engine that the editor runs internally.

The easiest way to do this is to place your dynamic library in the engine's directory within your {{ProductName}} installation folder. For example,

`C:\Program Files\Autodesk\ {{SR_DOC_SHORT_NAME}}\<version>\engine\win64\dev`

You could put it in a sub-directory within this location, as long as you add the relative path to the `require` call that loads the library in your project's Lua script.

## For deployment

When you deploy your project, you'll also need to copy your dynamic library to the final output folder.

For Windows targets, you can automate this task by editing the *package.manifest* file that you'll find within the `engine` directory in your {{ProductName}} installation folder. Add the relative path and filename of your library to the list of files in this manifest, and save your changes. From now on, when you deploy your app, your dynamic library will automatically be copied to the same relative path in your app's deployment directory.

<!-- For Android targets, TODO!!! -->
