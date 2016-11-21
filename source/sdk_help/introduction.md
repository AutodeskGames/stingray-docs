# Welcome to the Stingray SDK

The Stingray SDK is what we call the collection of programming APIs and extensibility features that you can use to create plug-ins that customize and extend Stingray.

Use this SDK if you want to do things like:

-	Add new content editing workflows and tools into the editor;

-	Import new kinds of art assets that Stingray doesn't support out-of-the-box;

-	Integrate the editor and/or the runtime engine with third-party libraries, applications, web services, or data sources;

-	Generate new content programmatically on the fly during the game;

-	Write your own gameplay interaction code in C instead of using Flow or Lua;

-	And many more.

Any customer can use the Stingray SDK to make these kinds of plug-ins. You don't need to have access to the Stingray source code. (Though, if you want source access for other reasons, you can get it! See [the Source Access Help](http://www.autodesk.com/stingray-help?contextId=DEVELOPER_HOME) for details.)

## To get started:

1.	Make sure you take the time to understand how Stingray works. If you're new to Stingray, you'll want to start by creating some projects and getting used to creating content in the Stingray environment before you jump in to writing your plug-in.

	You'll also need a good idea of how all the pieces of the Stingray ecosystem work together internally under the hood, so that you can plan out what your plug-in will need to do and how it will need to tie in to the overall system. See the ~{ System Overview }~ and ~{ All the Ways You can Extend Stingray }~.

2.	Get the ~{ Example Plug-ins }~. You'll want to have as many real working examples as you can, so we're working on fleshing out a set of plug-ins that show how to extend the editor and the engine in different ways.

3.	Create a new empty folder for your plug-in. You'll put all the files your plug-in needs in here.

	In this folder, you'll have to create a new *.plugin* file to describe your plug-in. This descriptor contains metadata about your plug-in, and a set of *extensions* that define what the plug-in should do when it's loaded. An easy way to get started is to copy the minimal description from the ~{ Define a Stingray Plug-in }~ page, or copy one from a sample plug-in.

3.	Install and load your plug-in into the editor and/or the engine, so that you can test it out as you work. You'll need to use the editor's **Plugin Manager** to find and load your *.plugin* file. You'll also need to manually copy any *.dll* files that you build for the engine into the `engine/<platform>/<config>/plugins` folder inside your Stingray installation folder.

	For details on installing plug-ins in the editor, see [this page](http://www.autodesk.com/stingray-help?contextId=install_plugins).

4.	Get working!

	The sections on [extending the editor](./extend_editor.html), [extending the engine](./extend_engine.html) and [extending the project content](./extend_content.html) describe how to go about setting up your plug-in to hook in to the different parts of the Stingray system.

5.	While you're working on your plug-in, you'll probably need to reload it often so that you can test and iterate on your latest changes. See ~{ Reload a Plug-in }~.

6.	When your plug-in is ready, you'll need to package it up and distribute it to whoever else will need to use it. See ~{ Distribute and Install a Plug-in }~.
