# Distribute and Install a Plug-in

Once you have your plug-in set up and working well in your own Stingray installation, you'll probably be excited to distribute it to others in the community. We hope you will! Customers are already taking Stingray in fascinating new directions -- and with the help of developers like you this process will only accelerate.

This page covers some things you need to know about getting a plug-in up and running on someone else's system for the first time.

## What you have to do

Get your *.plugin* file, along with all the other files your plug-in depends on, to your end-user somehow.

There are no requirements on how you should do this -- you could post a zip for download on the web or on your organization's intranet, you could share the files on [GitHub](http://www.github.com/), you could make an installer, you could send a zip by e-mail, post it on [the Area](http://area.autodesk.com/), charge money for it on [Creative Market](https://creativemarket.com/), whatever works for you.

## What your plug-in user has to do

First of all, your end-user has to get your plug-in files through whatever means you've chosen to distribute them, and put them somewhere locally on the machine where they have Stingray installed.

Then, they need to use the Stingray editor's **Plugin Manager** to install and load the plug-in. For details on this, see [the main Stingray help](http://help.autodesk.com/view/Stingray/ENU/?guid=__stingray_help_plugins_add_remove_plugins_html).

Ideally, anything else that's necessary would happen automatically. However, depending on what your plug-in adds to Stingray, your user may have a few extra steps to do:

-	If your plug-in includes any *.dll* files that extend the runtime engine, your user must copy all of these to the engine's plugins folder: *engine/<platform>/<config>/plugins*, under your Stingray installation directory. The engine has separte folders for different platforms (`win32` and `win64`), and for different configurations (most notably `dev` and `release`). If you distribute your plug-in with multiple *.dll* files for those different platforms and configs, each *.dll* has to go to its corresponding location.

	Note that the user should not copy any *.dll* files that extend only the editor. They should stay at the location set for them in the *.plugin* file. See ~{ Call out to C code from JavaScript }~.

	Keeping this straight can be confusing for the person installing the plug-in, so you may need to tell them exactly which *.dll* files need to go where. (If you choose to write an installer for your plug-in, this is a good step to automate.)

-	By default, when the user deploys a standalone build of their project, only the plug-in *.dll* files that ship with Stingray get copied to the final output folder. To make the deployment process include your plug-in *.dll* files, your user will have to either:

 	a)	copy them manually to the output folder after the deployment is done, or

	b)	modify the `engine/<platform>/<config>/package.manifest` file, which tells the deployer what files to ship with the project. They must add the relative path and filename of the *.dll* to the list of files in this manifest along with the other plug-in entries, and save the changes.

-	By default, the template projects that come with Stingray load all resources in the project at startup. If your user has set up a custom system for streaming resources in and out of memory dynamically using resource packages, and if your plug-in adds content that needs to be present in the game at runtime, the user may need to add your plug-in content to their resource packages in order to make sure that your content gets loaded.

-	If your plugin needs to add any Lua scripts to the project content, those scripts won't get loaded by default into the project's Lua environment at runtime. Your user will have to adjust their project's Lua code in order to `require` those added script files. So, for example, if your plug-in contains some custom Flow nodes that are implemented in accompanying Lua scripts, the user needs to `require` those scripts from within their own gameplay code in order for the Flow nodes to work.

	Another way to get around this might be to create a *.dll* file that extends the runtime engine to load the necessary Lua files when the engine starts up the project (see the `lib_loadfile()` function in the engine's `LuaApi`).

## Option: including the plug-in in a project

If you want to distribute the whole source folder for a project, so that others can load up the project and edit it in the Stingray editor, you don't have to send your plug-ins along in separate packages.

If you put a plug-in folder *inside* the project, the editor will be able to see it *only* when that project is loaded. This may be useful if your project needs a particular version of a plug-in in order to work, but it's not important for the user to be able to use that plug-in with other projects too.

Note that although the editor will find the plug-in and show it in the **Plugin Manager** automatically, all the other extra manual steps above are still needed.
