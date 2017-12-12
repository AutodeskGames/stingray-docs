# Visually debug navigation

This document describes how to use the Navigation Lab to visually debug the way Gameware Navigation is running inside the interactive engine.

The Navigation Lab is a tool that live connects to the engine and displays most Gameware Navigation objects and attributes. It can also display custom information that you send using our provided Lua methods.

You can disconnect any time from the live view and scrub back in time to analyze the scene frame by frame, while toggling various sets of information and freely moving the camera.

# The NavigationLab

The NavigationLab is available for Windows only, and located in the *tools_external/navigation/bin* directory within your {{ProductName}} installation folder.

Check the Gameware Navigation reference manual for a guide on how to use the NavigationLab.

# Game camera

In the Navigation Lab, select the Game camera mode in the Camera toolbox to have the Navigation Lab match the engine camera.

This requires that you set at each frame the engine's camera position and attitude for Gameware Navigation.

~~~{lua}
local pos = Camera.world_position(camera)
local camera_pose = Camera.world_pose(camera)
local forward = Matrix4x4.forward(camera_pose)
local up = Matrix4x4.up(camera_pose)
GwNavWorld.set_visual_debug_camera_transform(self.nav_world, pos, pos + forward, up)
~~~

If you integrated the `NavWorld` lua object in your project (see the [runtime integration](runtimeintegration.html) topic) just call the function `GwNavWorld:visual_debug_camera(camera)`.
