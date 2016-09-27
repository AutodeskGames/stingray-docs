# Template projects

The Stingray Editor ships with a few sample projects to help you get started. By default, template projects install in the following location: `C:\Program Files\Autodesk\Stingray\<version>\editor\templates`, and are available from the **Project Manager** every time you start Stingray or select **Templates** tab in the **Project Manager**.

> ![](../../images/icon_video.png) You can find video walkthroughs of each template <a href="https://www.youtube.com/playlist?list=PLTjhBiJe1i2FMurxvbVZymn2vxC1S-WqU" target="blank">here.</a>

![](../../images/template_projects.png)

The best way to start a new project is always to clone an existing one, like the basic project, rather than starting completely from scratch. This ensures you have the correct project structure built in when it's time to compile your game.

If you want to start with nothing in your project, use the `empty` project to start.

> **Tip:** To change the project thumbnail that displays for your project, replace the thumbnail.png image in the sample project folder. The default project thumbnails are 512 x 512 pixels.

## basic

This template has a basic level with units and shows simple FX, shaders, and meshes in a simple shading environment.

It also includes a basic script that lets you spawn a free camera and a walk around camera, then swap between the two by pressing F2.

## character

This template includes a basic shooter level with an animated 3D character. It's set up using Lua script. It has an animation controller, simple character animation examples, and the Lua script in player.lua that shows how they are all hooked up. The character shoots a simple physics-based projectile.

## empty

This template defaults back to core/appkit and loads minimal level with a simple camera.

## vehicle

This template is a simple vehicle level. It contains a driveable four-wheeled vehicle and the accompanying Lua script to set up the vehicle and the driving physics.

## vr_oculus

This template has a simple Oculus VR level with a floor plan to walk around in. Currently for Windows only. It also includes a basic script that lets you spawn a free camera and a walk around camera (again, swap the two by pressing F2).

Use an Oculus Rift for projects based on this template.

> **Tip:** If the performance is lower for the vr_oculus template projects, make sure that the editor is **not** set to **Update Mode > Always** in the viewport.

## vr_steam

This VR template project is set up to showcase the use of Flow in VR to accomplish various tasks and useful VR interactions. It is recommended to use a higher end machine as this was tested on higher end graphics cards.

Use a Steam VR device to visually interact with the scenes in this template.

---
Related topics:
-	~{ About the project structure }~
-	~{ Project Manager }~
---
