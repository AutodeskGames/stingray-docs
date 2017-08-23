# Change the default evaluation frame rate

You can change the default frame rate used in all editor panels that have a viewport, including the **Level Viewport**, **Asset Preview**, and so on. This can be particularly useful when you want to preview how your content will look on systems that use different fps settings.

By default, all editor viewport panels display your level at 60 fps, which you'll likely use for example if your target platform is PS4 or Xbox One. For VR platforms, the max framerate is set to be higher than 60 fps to avoid stuttering on VR headsets when you test a level or run a project. You can also change the framerate in the Editor depending on the VR device tested. For target frame rates on supported VR devices, see ~{ Supported platforms }~.

>**Note**: If you prefer to avoid consuming too much memory when testing projects not running on VR devices, enable vsync (in your project’s *settings.ini* file) or add a call to `Application.set_time_step_policy` in your `init()` to manually throttle the max frame rate.

**To change the default frame rate:**

1. From the main menu bar, select **File > Settings > Editor Settings**.

	The Editor Settings display in the ~{ Property Editor }~.

2. Adjust the **Viewport max framerate** value to set the frame rate you want.
