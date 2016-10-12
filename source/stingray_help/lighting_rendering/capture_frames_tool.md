#Capture Frames Tool

[![NEW](../images/new.png "What else is new in v1.6?")](../release_notes/readme_1.6.html)

The **Capture Frames** Tool lets you render frames to disk. The following **Capture Settings** can be adjusted to control your output. See ~{ Capture frames to disk }~ for more information.

> **Note:** The Capture Frames Tool is a plugin and must be loaded from the **Plugin Manager**.

![](../images/capture_settings.png)

<dl>

<dt>Capture Source</dt>
<dd>Lets you select the the source to capture: your test engine or one of the editor viewports.</dd>
</dl>

##General
<dl>

<dt>Output Directory</dt>
<dd>The directory where your output is saved.</dd>

<dt>File Name</dt>
<dd>The name that is used for each file(s) that is saved.</dd>

<dt>File Type</dt>
<dd>Lets you select a file type for your output. Currently, frames are exported using the OpenEXR format (.exr). The tool delivers three different buffers in OpenEXR when it captures:

-   Final: The final output image in sRGB colorspace.
-   HDR: An HDR version in linear colorspace.
-   Depth: A stabilized depth channel.</dd>

</dl>

##Capture settings
<dl>
<dt>Frame Rate</dt>
<dd>The frame rate that is used to simulate the game or editor playback while capturing.</dd>

<dt>Render Frames to Disk</dt>
<dd>Click **Start Capturing** or **Stop Capturing** to begin or end your capture.</dd>
