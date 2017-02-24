# Trigger lightmap baking from the command line

You can start the Stingray engine application from a command-line prompt, and provide parameters on the command line to trigger lightmap baking.

## To trigger lightmap baking from the command line

1.  Open a command prompt and change to the following directory:

		C:\Program Files\Autodesk\Stingray\<version>\engine\win64\dev

2.  Enter the following command:

    ~~~
    stingray_win64_dev.exe --toolchain "C:\Program Files\Autodesk\Stingray\<version>" --ini core/stingray_renderer/light_baker/standalone/light_baker --project-root <absolute path of the project's source data> --level <path of level to bake> --viewport-provider`
    ~~~

- --toolchain should point to the absolute path of your binaries directory.

  	For example, `C:\Program Files\Autodesk\Stingray\1.7.0`

- --project-root should point to the absolute path of your project's source data.

	For example, `C:/Stingray_Projects/New_Project`

- --level should point to the path of the level you want to bake.

	For example, `level content/levels/basic`

---
Related topics:
- ~{ Stingray engine command-line reference }~
---
