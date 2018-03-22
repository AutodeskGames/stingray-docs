# Trigger lightmap baking from the command line

You can start the interactive engine application from a command-line prompt, and provide parameters on the command line to trigger lightmap baking.

>	**Note:** Non-interactive baking is the default baking mode when you launch a baking session from the command line. See ~{ Baking with the built-in light baker }~.

## To trigger lightmap baking from the command line

1.  Open a command prompt and change to the following directory:

		`C:\Program Files\Autodesk\ {{SR_DOC_SHORT_NAME}}\<version>\engine\win64\dev`

2.  Enter the following command:

	~~~
	{{SR_DOC_EXE_PREFIX}}_win64_dev.exe --toolchain "C:\Program Files\Autodesk\ {{SR_DOC_SHORT_NAME}}\<version>" --ini core/stingray_renderer/light_baker/standalone/light_baker --project-root <absolute path of the project's source data> --level <path of the level to bake, relative to the project root> --viewport-provider
	~~~

-	`--toolchain` should point to the absolute path of your binaries directory. Most users will find this under `C:\Program Files\Autodesk\ {{SR_DOC_SHORT_NAME}}\<version>`.

{{#unless MaxInteractive}}
  	If you build your engine from source, and the root folder of your source code repository is at `C:\git\interactive`, your binaries directory is typically located here: `C:\git\interactive\build\binaries`.
{{/unless}}

-	`--project-root` should point to the absolute path of your project's source data.

	For example, `C:\Interactive_Projects\New_Project`

-	`--level` should point to the path of the level you want to bake.

	For example, `level content/levels/basic`

---
Related topics:
- ~{  Engine command-line reference }~
---
