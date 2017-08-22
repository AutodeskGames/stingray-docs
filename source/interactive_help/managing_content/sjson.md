# About the SJSON data format

Many {{ProductName}} resource files express data using a text-based format based on the widely used [JSON](http://www.json.org/) standard, with a few custom extensions and simplifications that are intended to make the data easier to read, edit and maintain. This format is often referred to as *SJSON*, for *simplified JSON*.

Although many types of resource files are automatically created and kept up to date by the interactive editing tools, there are some kinds of data files that you need to modify by hand. For example, in order to set up different types of collision materials for the physics simulation used in your game, you need to make changes directly in your project's *global.physics_properties* file.

## Example

The following example from a game's *settings.ini* file shows what a small block of SJSON looks like:

~~~{sjson}
// The script that should be started when the application runs.
boot_script = "boot"

// The port on which the console server runs.
console_port = 14030

// Settings for the win32 platform
win32 = {

    /* Sets the affinity mask for
       QueryPerformanceCounter() */
    query_performance_counter_affinity_mask = 0

}

render_config = "core/rendering/renderer"
~~~

For larger examples, you can see the *settings.ini*, *.physics_properties*, or *.shading_environment* files of any project.

>**Note:** You can use the **Script Editor** to open and edit data resource files in your project.

## Modifications from standard JSON

The SJSON format has the following differences from standard JSON:

*	The equal sign `=` is used to define key-value pairs instead of the colon `:`.
*	Quotes around string keys in key-value pairs are optional, unless you need the key to contain either spaces or the equal sign `=`.
*	Commas are optional in object and array definitions.
*	Comments are allowed, using the C and C++ commenting styles:

	*	`//` begins a single-line comment that causes everything to be ignored until the end of the line;
	*	`/* ... */` creates a multi-line comment that causes everything between the asterisks to be ignored.
*	Each SJSON file is always interpreted as a definition for a single object. You can think of this as an implicit set of curly quotes `{ ... }` that surround the contents of the file.

## Using JSON

Note that despite this added flexibility, the SJSON parser is compatible with plain JSON. You can use a regular JSON file as input to the SJSON parser. That means that if you want to write a custom tool for producing data to be consumed by the interactive engine, your tool can export standard JSON.

## Notable exceptions

Several types of data files do not use SJSON, including:

*	Scripts, which are plain Lua files.
*	Raw texture data, which are uncompressed *.dds* files.
*	Imported *.fbx* assets.
*	Scaleform Studio resources, which may include items such as fonts and images.
