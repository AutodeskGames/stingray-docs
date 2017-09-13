# Wwise authoring tool

- **Window > Wwise Audio**

Audiokinetic WWise is an industry-leading sound engine for 3D games and simulations, offering sound designers a complete pipeline that includes a suite of editing tools for setting up projects, monitoring and debugging playback, and live modification of sound properties.

For more information about Wwise, see:

*	The Audiokinetic Wwise site: <https://www.audiokinetic.com/products/wwise/>
*	The latest full-product documentation from Audiokinetic, available from the **Help** menu of the Wwise authoring tool.

When you launch the Wwise Authoring tool from the interactive editor, it automatically opens the Wwise project associated with the {{ProductName}} project you're currently working on. (See also ~{ Create or open a Wwise project }~.)

  > **Important:** If you experience issues connecting to {{ProductName}} from Wwise, you may need to add an exception or to your firewall. In addition, the following UDP ports must be open for Wwise remote sync functionality: 24024, 24025, and 24026. For more information, refer to the Wwise documentation.

## About the Wwise plug-in

The Wwise plug-in adds the following capabilities to {{ProductName}}:

*	Every new project you create in the editor is automatically set up with a linked Wwise project.
*	You can export sound banks from Wwise formatted as {{ProductName}} resources, and have them placed directly into your project's data folder.
*	The Wwise runtime engine is integrated into the {{ProductName}} runtime engine.
*	The Wwise plugin exposes several functions to the {{ProductName}} Lua API, which you can call in your gameplay code to control sound sources, trigger sound events, and modify parameter values. <br>For details, see the `Wwise` and `WwiseWorld` objects in the Lua API Reference.
