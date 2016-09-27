# Wwise authoring tool

- **Window > Wwise Audio**

Audiokinetic WWise is an industry-leading sound engine for 3D games, offering sound designers a complete pipeline that includes a suite of editing tools for setting up projects, monitoring and debugging playback in the game, and live modification of sound properties.

For more information about Wwise, see:

*	The Audiokinetic Wwise site: <https://www.audiokinetic.com/products/wwise/>
*	The latest full-product documentation from Audiokinetic, available from the **Help** menu of the Wwise authoring tool.

When you launch the Wwise Authoring tool in Stingray, this automatically opens the Wwise project associated with the current game project. (See also ~{ Create or open a Wwise project }~.)

## About the Wwise plug-in

The Wwise plug-in adds the following capabilities to Stingray:

*	Every new Stingray game project is automatically set up with a linked Wwise project.
*	You can export sound banks from Wwise formatted as Stingray resources, and have them placed directly into your Stingray project's data folder.
*	The Wwise runtime engine is integrated into the Stingray runtime engine.
*	The Wwise plugin exposes several functions to the Stingray Lua API, which you can call in your gameplay code to control sound sources, trigger sound events, and modify parameter values. <br>For details, see the `Wwise` and `WwiseWorld` objects in the Stingray Lua API Reference.


