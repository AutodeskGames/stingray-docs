# Connect DCC tool and {{ProductName}} viewports

With the {{ProductName}} DCC link plug-in installed and loaded for your DCC tool, you can establish a live viewport connection between your DCC tool and the interactive editor. This allows you to navigate your scene in both DCC and {{ProductName}} simultaneously.

>	**Note:** To see assets you're working on in the interactive editor inside a scene in your DCC tool, you must also send the objects to the DCC. See ~{ Connect to a DCC tool }~.

## Procedure

To connect viewports:

1. Send your assets from your DCC tool to {{ProductName}}, and then place them in the viewport.
2. In your DCC tool (Maya, Maya LT, or 3ds Max), enable **Interactive > Live Camera Tracking**.
3. Navigate through the scene.

    While **Live Camera Tracking** is enabled, the viewport in each linked application also controls the viewport in the other. For example, when you move the camera in the interactive editor viewport, you also move the camera in the DCC viewport. When you move the camera in your DCC viewport, you also move the camera in the interactive editor viewport.

   >	**Tip:** If you make any changes to assets, click **Interactive > Update** (3ds Max) or **Update** (next to the green "Connected to Interactive" message at the bottom right in Maya) to refresh the other viewport.
