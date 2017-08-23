# Export Wwise sound banks

This topic describes how to make Wwise sound bank information available to a {{ProductName}} project.

## File formats

The wwise export step copies wwise generated bank and stream files to the interactive project, renaming them with new file types and adding platform specific naming. In addition a *.wwise_dep* file is created per sound bank. These dependency files are the resources which must be referred to in packages such as boot package.

## Export location

By default, the Wwise project is set up to export sound bank assets to the "wwise" directory of your interactive project. This is configured in the post bank generation steps in the Project Settings for the Wwise project.

## Note on relative paths

When the interactive editor creates a new Wwise project, it sets up some post-generation steps that tell the Wwise authoring tool to copy the generated sound banks into the source folder of the {{ProductName}} project. This configuration uses a relative path from the location of the Wwise project to the {{ProductName}} project. This means that your Wwise project and your {{ProductName}} project must remain in the same relative location on disk. If the relative path from the Wwise project to your interactive project is different, the Wwise authoring tool won't be able to export the sound banks into your interactive project.

If you want to move your Wwise project so that it is in a different location relative to your interactive project, you must update these bank generation steps manually to point to the correct location.

You can do this in the Wwise Authoring Tool:

1.	Select **Project > Project Settings...** from the main menu.

1.	On the **Soundbanks** tab of the **Project Settings** window, find the "Post-Generation Step" list.

1.	For each platform in turn, double-click the entry in the list. In the **Post-Generation Step Editor** window that appears, find the relative path to your {{ProductName}} project in the **Commands** box and adjust it to the new relative path. By default, this will look something like `"$(WwiseProjectPath)\../my_project_name"`

## Note on absolute paths

If the {{ProductName}} tools are located on a different hard drive than the project's source folder, an absolute path will be configured to reference the *wwise_exporter.exe* tool in the post bank generation steps. In this case, to minimize issues with source control, each team user can install the {{ProductName}} tools on the same drive letter in the same path.
