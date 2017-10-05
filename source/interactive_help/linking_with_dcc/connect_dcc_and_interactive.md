# Connect DCC tool and {{ProductName}} viewports

With the {{ProductName}} DCC link plug-in installed and loaded for your DCC tool, you can establish a live viewport connection between your DCC tool and the interactive editor. This allows you to navigate your scene in both DCC and {{ProductName}} simultaneously.

>	**Note:** To see assets you're working on in the interactive editor inside a scene in your DCC tool, you must also send the objects to the DCC. See ~{ Send assets to a DCC tool}~.

## Procedure

To connect viewports:

{{#unless MayaInteractive}}

1. Send your assets from 3ds Max to 3ds Max Interactive, and then place them in the viewport.
2. In 3ds Max, enable **Interactive > Live Camera Tracking**.

{{/unless}}

{{#if MayaInteractive}}

1. Send your assets from Maya to Maya Interactive, and then place them in the viewport.
2. In Maya, enable **Stingray > Live Camera Tracking**, and then enable either of the following in the same menu:

    - Viewport Camera Link (as Master) (makes the Maya viewport control the interactive viewport)
    - Viewport Camera Link (as Slave) (makes the interactive viewport control the Maya viewport)

{{/if}}

3. Navigate through the scene.

As you adjust your view (move the camera) in one viewport, the other viewport also updates.

While **Live Camera Tracking** is enabled, the viewport in each linked application also controls the viewport in the other. For example, when you move the camera in the interactive editor viewport, you also move the camera in the DCC viewport. When you move the camera in your DCC viewport, you also move the camera in the interactive editor viewport.

>	**Tip:** If you make any changes to assets, click **Interactive > Update** to refresh the other viewport.
