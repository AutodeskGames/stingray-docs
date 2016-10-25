# Mini Renderer

To achieve the higher resolution and framerate required for VR, we built a special, lightweight rendering pipe tailored specifically for mobile VR, which we call the mini renderer (core/stingray_renderer/mini_renderer).

The default Stingray rendering pipe (core/stingray_renderer/renderer) is designed to run on high-end mobile devices with a maximum resolution of 1280x720, targeting 30 FPS. For VR that is not enough; typical GearVR applications run in 1024x1024 per eye and must hit 60 FPS to avoid motion sickness.

The mini renderer is dependent on baking all lighting. It currently doesn't have any solution for specular lighting, only diffuse.

> **Note:** These guidelines are based on a scene running on a Galaxy Note 4.

## Prepare your scene for the mini renderer

1. Ensure that the lighting in your scene, both direct and indirect, is baked. For more information, see ~{ Light baking }~.
2. Use the following guidelines to prepare the geometry, materials, and textures in your scene:

  > **Note:** The following are rough estimates based on our own measurements. Keep in mind that all stats displayed in the editor will double when rendering in stereo. Figures listed below are total frame counts so you'll need to divide them by two to get a better mapping to editor statistics.

  General:

  - Keep number of draw calls below 200 draw calls per frame.

  Geometry:

  - Keep total number of primitives below 300,000 per frame.

  Materials:

  - Avoid using any 1-bit alpha masking
  - Keep transparent materials to a minimum
  - Keep anisotropic texture filtering to a minimum
  - Keep you shader graphs as simple as possible, don't rely on default FBX Shader

  Textures:

  - Compress all textures (ETC2)
  - Always use mip-maps

## Enable the mini renderer in your project

  1. Select **File > Settings > Editor Settings**.
  2. In the **Property Editor** turn on **Enable experimental editor features**.
  3. In the **Asset Browser**, select your settings.ini file.
  4. In the **Property Editor** set **render_ config** to **core/stingray_renderer/mini_renderer.**
