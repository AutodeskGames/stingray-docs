# Set VR mirror mode

[![NEW](../images/new.png "What else is new in v1.6?")](../release_notes/readme_1.6.html)

After mirroring your viewport to a VR app, you can adjust the mirror window display. See ~{ Connecting to a remote device }~ for more information.

  >**Note:** The vr_ mirror_mode must be set for each new project.

**To set the VR mirror window mode**

1. Open your project's **setting.ini** file in a text editor of your choice, find the render_settings section and set one of the following:
  - vr_ mirror_mode = "mono"
    Mono mode (default): One image displays in the mirror window.
  - vr_ mirror_mode = stereo
    Stereo mode: Two images display in the mirror window, simulating two eye fields.
