# Cameras

Cameras in {{ProductName}} are your way of viewing your 3d scenes. Because they are necessary to see your world at all, they are one of the most essential parts of {{ProductName}}. Every project uses at least one camera, but often a project will use many different cameras to render the scene from different perspectives.

> ![](../images/icon_video.png) For video tutorials on controlling game cameras, check out <a href="http://area.autodesk.com/learning/series/controlling-game-cameras-in-stingray" target="blank">Controlling Game Cameras</a>.

## Switching cameras

1. Create a camera from the ~{ Create panel }~.

2. In the **Flow Editor**, assign your camera as the active camera.

  	![](../images/active_camera_flow.png)

3. Click the Play icon ![](../images/icon_test_level.png) in the ~{ Toolbar }~, and you can now press C to assume your new camera.

## Setting clipping planes

By default, the interactive engine sets up clipping planes with expected distances for general real world scale. This may not be ideal for your project and sometimes you'll need to adjust your clipping planes accordingly.

**To adjust clipping planes in the viewport:**

1. Click the gear icon in viewport, then select **Viewport Options**.
2. Set the **Near Range** and **Far Range** according to your needs.

**To adjust clipping planes:**

In **Level Flow**, access the camera with the **Get Active Camera** node, then use the **Set Camera Near Range** and **Set Camera Far Range** nodes to set distances as needed.

![](../images/ingame-camera-flow.png)

## Moving cameras

You can control camera movement with many different methods.

-	Use Story to animate cameras. See ~{ Create simple animations with the Story Editor }~.
-	Use Flow or Lua to move the position of cameras. See the Camera category in the [Flow Node Reference](../../flow_ref/index.html) or [Lua API Reference](../../lua_ref/index.html).
-	Link cameras to units that have animated paths or motion.

## Storing the template start camera

The default “fly mode” cameras found in some of the default ~{ Template projects }~ can be useful to switch to and from. Unfortunately, because they are not level units they can be tricky to get at. You can use this simple bit of Flow code to store those cameras for use later on. Use this trick to store any camera so that you can return to it.

  ![](../images/store_camera_flow.png)
