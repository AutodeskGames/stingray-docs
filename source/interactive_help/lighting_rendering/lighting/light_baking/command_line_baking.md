# Trigger lightmap baking from the command line

You can start the interactive engine application from a command-line prompt, and provide parameters on the command line to trigger lightmap baking.

>	**Note:** Non-interactive baking is the default baking mode when you launch a baking session from the command line. See ~{ Baking with the built-in baker }~.

## To trigger lightmap baking from the command line

1.  Open a command prompt and change to the following directory:

		`C:\Program Files\Autodesk\Stingray\<version>\engine\win64\dev`

2.  Enter the following command:

	~~~
	stingray_win64_dev.exe --toolchain "C:\Program Files\Autodesk\Stingray\<version>" --ini core/stingray_renderer/light_baker/standalone/light_baker --project-root <absolute path of the project's source data> --level <path of the level to bake, relative to the project root> --viewport-provider
	~~~

-	`--toolchain` should point to the absolute path of your binaries directory. Most users will find this under `C:\Program Files\Autodesk\Stingray\<version>`.

  	If you build your engine from source, and the root folder of your source code repository is at `C:\work\stingray`, your binaries directory is typically located here: `C:\work\stingray\build\binaries`.

-	`--project-root` should point to the absolute path of your project's source data.

	For example, `C:\Interactive_Projects\New_Project`

-	`--level` should point to the path of the level you want to bake.

	For example, `level content/levels/basic`

---
Related topics:
- ~{ command-line reference }~
---
