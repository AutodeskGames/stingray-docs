# Export Wwise sound banks

(BankExport)


This topic describes how to make Wwise sound bank information available to a Stingray game project.

## File formats

The wwise export step copies wwise generated bank and stream files to the Stingray game project, renaming them with new file types and adding platform specific naming. In addition a wwise_dep file is created per sound bank. These dependency files are the resources which must be referred to in packages such as boot package.

## Export location

By default, sound banks export assets formatted for Stingray to the "wwise" directory of the game project. This is configured in the post bank generation steps in the Project Settings for the Wwise project.

## Note on relative paths

The stingray.wproj file has per-platform post bank generation steps. These can be viewed in the Project Settings in the Wwise Authoring Tool.

By default these paths are configured to be relative from the WWise project location, and they point to the game project and the toolchain tools project.

Bank generation will fail to export if the Wwise project is in a different relative location to either the game project or tools project. If you want to maintain your Wwise project and your Stingray game project in different relative locations, you must update the bank generation steps manually to point to the correct locations.

## Note on absolute paths

If the Stingray tools are located on a different hard drive than the game project, an absolute path will be configured to reference the *wwise_exporter.exe* tool in the post bank generation steps. In this case, to minimize issues with source control, each team user can install the Stingray tools on the same drive letter in the same path.
