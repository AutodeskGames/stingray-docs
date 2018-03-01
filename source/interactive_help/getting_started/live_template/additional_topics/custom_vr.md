# Customizing the VR Experience

One of the main advantages of using the Live template comes from the ability to customize the VR experience and create your own custom interactions. This can be done in two ways, either using Level Flow or Lua scripting. Creating custom VR behaviors in Live is very similar to the other templates (~{ Get started in VR }~)

**Custom Flow Nodes** 
Live includes a few custom VR Flow nodes to facilitate the creation of simple custom behaviors in VR. The following nodes are available in Live, under Live/VR:

- Get Button: Gets the status (pressed, held, released) of a specified button on a VR controller
- Controller Pose: Gets the position & rotation of a specified controller
- Get Controller Index: Gets the index of the Left or Right controller
- VR System name: Gets the name of the current VR System (SteamVR or Oculus)
- HMD Pose: Return the position & rotation vectors of the HMD
- Get Tracking Space: Return the position/rotation of the tracking space
- Teleport: Teleport the user and tracking space to a specified location
- Controller Feedback: Make the controller vibrate

> Live uses "Teleport" instead of "Set Tracking Space" because it can affect other components.
> There is a known limitation with the "Get Button" node when using it with the "Upper" button with the Oculus Touch controllers. Because Live uses that button to swap left and right hands, both controllers will always return "Pressed", "Held" or "Release" as the right controller. Therefore you cannot make the distinction between the "Upper" button on the left and right controllers.

**Lua Scripting** 

> Disclosure: This section assumes a working knowledge of LUA

Most VR-related behaviors and input mappings are defined in the settings/vr_settings.ini file. You modify this file to create custom input mappings and tie them to new behaviors that you created.

> the laser_pointer_tool.lua script is a great example of a simple custom tool. Use it to inspire your own work!

Follow these steps to add a new behavior:
- Create a new Lua class for your behavior, that inherits from "VRTool"
    - Implement the check_dependencies, init, shutdown, update, activate & deactivate functions
- Add its path to the settings/component_paths.ini file
- Add your LUA class to the list of tools in the vr_tools_manager section, in the settings/components_config.ini file

> When writing custom behaviors, small steps and frequent testing are the keys to success!