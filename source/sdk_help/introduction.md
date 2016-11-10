# Welcome to the Stingray SDK

The Stingray SDK is what we call the collection of programming APIs and extensibility features that you can use to create plug-ins that customize and extend Stingray.

Use this SDK if you want to do things like:

-	Customize content editing workflows and tools in the editor;

-	Import new kinds of assets that Stingray doesn't support out-of-the-box;

-	Integrate the editor and/or the runtime engine with third-party libraries, applications, web services, or data sources;

-	Generate new content programmatically on the fly during the game;

-	Write your own gameplay interaction code in C instead of using Flow or Lua;

-	And many more.

Any customer can use the Stingray SDK to make these kinds of plug-ins. You don't need to have access to the Stingray source. (Though, if you want source access for other reasons, you can get it! See [the Source Access Help](http://www.autodesk.com/stingray-help?contextId=DEVELOPER_HOME) for details.)

## To get started:

1.	Make sure you take the time to understand how Stingray works. If you're new to Stingray, you'll want to start by creating some projects and getting used to creating content in the Stingray environment before you jump in to writing your plug-in.

	You'll also need a good idea of how all the pieces of the Stingray ecosystem work together internally under the hood, so that you can plan out what your plug-in will need to do and how it will need to tie in to the overall system. See the ~{ System Overview }~.

2.	Get the sample plug-ins. You'll want to have as many real working examples as you can, so we're working on putting together a set of plug-ins that show how to extend the editor and the engine in different ways.

 	Clone or download a zip from the GitHub repository, at <https://github.com/AutodeskGames/stingray-plugin-api-samples>.

3.	Set up a basic *.plugin* file that describes your plug-in. Every plug-in is defined by one of these files. It contains metadata about your plug-in, and a set of *extensions* that define what the plug-in should do when it's loaded.

	An easy way to get started is to copy the minimal description from the ~{ Define a Stingray Plug-in }~ page.

3.	Install and load your plug-in into the editor and/or the engine, so that you can test it out as you work. You'll need to use the editor's **Plugin Manager** to find and load your *.plugin* file. You'll also need to manually copy any *.dll* files that you build for the engine into the `engine/<platform>/<config>/plugins` folder inside your Stingray installation folder.

	For full details on installing plug-ins, see [this page](http://www.autodesk.com/stingray-help?contextId=install_plugins).

4.	Get working!

	The sections on extending the editor and extending the engine describe how to go about setting up your plug-in to integrate with the editor and engine.

5.	While you're working on your plug-in, you'll often need to reload it so that you can test and iterate on it. See ~{ Reload a Plug-in }~.

6.	When your plug-in is ready, you'll need to package it up and distribute it to whoever will need to use it. See ~{ Distribute a Plug-in }~.
