# Ignore files in the project folder

Typically, your Stingray project source folder contains only files used by the Stingray game engine and editor. If you need to store additional kinds of data files that you need for your project in your source folder, you can do so freely. In most cases, the engine and editor will simply ignore the unknown files.

However, occasionally you may need to explicitly tell the engine and editor to ignore a certain file or set of files.

For example, you may need to store non-Stingray files that have an extension that conflicts with a Stingray resource type. In this case, you will want to avoid having Stingray treat those files as resources. Or, you might want to ignore certain files in order to take control over what assets are available to level designers, or what resources the engine compiles each time the project is built.

## To ignore a set of files

Create a plain-text file named `.stingrayignore` in your project source directory. Specify the files and folders you want to ignore, using the same syntax as the `.gitignore` file used by the Git version control system.

For example:

```
# ignore a specific file:
content/obsolete/yellow.material

# ignore a folder and all files and other folders it contains:
content/obsolete

# ignore all files within a folder but not the folder itself:
content/obsolete/**

# ignore all files with a given extension in a given sub-folder:
content/obsolete/*.lua

# ignore all files with a given extension in any sub-folder:
content/**/*.lua
```

For background information on `.gitignore` files and details about their pattern format, see the [Git documentation](http://git-scm.com/docs/gitignore#_pattern_format).

>	**Tip:** By default, Windows Explorer won't let you name a file `.stingrayignore`, since it only allows files that have both a name and an extension. However, you can get around this limitation by naming the file `.stingrayignore.` with an extra `.` at the end. Windows Explorer will remove the trailing period automatically.

## The effect of ignoring files

Adding a `.stingrayignore` file has the following effects:

-	The Stingray Editor does not show any matching files and folders in the **Asset Browser**, regardless of its filter settings.
-	The engine does not compile any matching resources for any target platforms.

Note that the Stingray Editor reads the `.stingrayignore` file when the project is loaded. If you change the `.stingrayignore` file while your project is open in the editor, you will have to close and re-open the current project in order for your changes to be applied in the Asset Browser.
