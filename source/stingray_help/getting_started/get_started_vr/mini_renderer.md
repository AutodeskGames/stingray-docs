# Mini renderer

To achieve the higher resolution and framerate required for VR, we built a special, lightweight rendering pipe tailored specifically for mobile VR, which we call the mini renderer (core/stingray_renderer/mini_renderer). This render is used by default in the VR Google and VR Gear template projects.

The default Stingray rendering pipe (core/stingray_renderer/renderer) is designed to run on high-end mobile devices with a maximum resolution of 1280x720, targeting 30 FPS. For VR that is not enough; typical GearVR applications run in 1024x1024 per eye and must hit 60 FPS to avoid motion sickness.

The mini renderer is dependent on baking all lighting. It currently doesn't have any solution for specular lighting, only diffuse.

## To enable the mini renderer in your project:

  1. Select **File > Settings > Editor Settings**.
  2. In the **Property Editor** turn on **Enable experimental editor features**.
  3. In the **Asset Browser**, select your settings.ini file.
  4. In the **Property Editor** set **render_ config** to **core/stingray_renderer/mini_renderer.**

See also ~{ Optimize VR content for mobile devices }~ for more information on preparing your scenes for the mini renderer.

---
Related topics:

- ~{ Template projects }~
- ~{ Supported platforms }~

Tags:
- mini renderer
---
