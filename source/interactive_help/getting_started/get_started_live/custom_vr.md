# Customize the Live VR experience

One of the main advantages of using the Live template comes from the ability to customize its VR experience by creating your own interactions. You can do this in two ways, by using Level Flow or by Lua scripting.

Creating custom VR behaviors in Live is very similar to the other VR templates -- see ~{ Get started in VR }~ for additional background.

## Custom Flow Nodes

Live includes a few custom VR Flow nodes to help you create simple behaviors in VR. You can wire these nodes into Level Flow graphs that you set up for your project's default level.

Look for the following nodes in the **Live** category, under **Live/VR**:

-	**Get Button:** Gets the status of a specified button on a VR controller: pressed, held, or released.

-	**Controller Pose:** Gets the position and rotation of a specified controller.

-	**Get Controller Index:** Gets the index of the left or right controller.

-	**VR System name:** Gets the name of the current VR system: SteamVR or Oculus.

-	**HMD Pose:** Returns the position and rotation vectors of the head-mounted device (HMD).

-	**Get Tracking Space:** Returns the position and rotation of the tracking space in the level's 3D world space.

-	**Teleport:** Teleport the user and tracking space to a specified location in the level's 3D world space.

-	**Controller Feedback:** Makes the controller vibrate.

The Live template uses "Teleport" instead of "Set Tracking Space" because the latter can affect other components.

> **Note:** There is a known limitation with the "Get Button" node when you use it with the "Upper" button of the Oculus Touch controllers. Because Live uses that button to swap left and right hands, both controllers will always return "Pressed", "Held" or "Released" as the right controller. Therefore you cannot make the distinction between the "Upper" button on the left and right controllers.

## Lua scripting

Most VR-related behaviors and input mappings are defined in the `settings/vr_settings.ini` file. You can modify this file to create custom input mappings and tie them to new behaviors that you create in your own scripts.

>	**Tip:** The `laser_pointer_tool.lua` script is a great example of a simple custom tool. Use it to inspire your own work!

Follow these steps to add a new behavior:

1.	Create a new Lua class for your behavior. Make it inherit from the `VRTool` class.

1.	Implement the `check_dependencies`, `init`, `shutdown`, `update`, `activate` & `deactivate` functions.

1.	Add to the `settings/component_paths.ini` file the path to the file that contains your Lua class.

1.	Add your Lua class to the list of tools in the `vr_tools_manager` section of the `settings/components_config.ini` file.

>	**Remember:** When writing custom behaviors, small steps and frequent testing are the keys to success!
