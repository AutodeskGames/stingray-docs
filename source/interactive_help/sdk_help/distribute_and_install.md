# Distribute and Install a Plug-in

Once you have your plug-in set up and working well in your own {{ProductName}} installation, you'll probably be excited to distribute it to others in the community. We hope you will! Customers are already taking {{ProductName}} in fascinating new directions -- and with the help of developers like you this process will only accelerate.

This page covers some things you need to know about getting a plug-in up and running on someone else's system for the first time.

## What you have to do

Get your *.stingray_plugin* file, along with all the other files your plug-in depends on, to your end-user somehow.

There are no requirements on how you should do this -- you could post a zip for download on the web or on your organization's intranet, you could share the files on [GitHub](http://www.github.com/), you could make an installer, you could send a zip by e-mail, post it on [the Area](http://area.autodesk.com/), charge money for it on [Creative Market](https://creativemarket.com/), whatever works for you.

>	**NOTE:** We're working on opening up the [Gamedev portal](https://gamedev.autodesk.com/stingray/plugins) for third-party developers to post their plug-ins, sample projects and custom assets. This is where the editor finds all the online content it offers in the **Project Manager**, **Plugin Manager** and **Asset Browser**. We're not quite done yet, but stay tuned and we'll let you know when it's ready.

## What your plug-in user has to do

First of all, your end-user has to get your plug-in files through whatever means you've chosen to distribute them, and put them somewhere locally on the machine where they have {{ProductName}} installed.

Then, they need to use the editor's **Plugin Manager** to install and load the plug-in. For details on this, see ~{ Customize {{ProductName}} using Plug-ins }~.

Ideally, anything else that's necessary would happen automatically. However, depending on what your plug-in adds to the {{ProductName}} system, your user may have a few extra steps to do:

-	**If your plug-in includes *.dll* files that the engine needs to load at runtime**: By default, when a user deploys a standalone build of their project, only the plug-in *.dll* files that ship with {{ProductName}} get copied to the final output folder. Your user will need to manually make the deployment process include the *.dll* files from your plug-in. They can either:

 	a)	copy the *.dll* files manually to the output folder after the deployment is done, or

	b)	modify the `engine/<platform>/<config>/package.manifest` file, which tells the deployer what files to ship with the project. They must add the relative path and filename of the *.dll* to the list of files in this manifest along with the other plug-in entries, and save the changes.

-	**If your plug-in adds content that needs to be present in the engine at runtime:** The user may need to add your plug-in content to their resource packages in order to make sure that your content gets loaded. They can add this to their *boot.package* file, or to another package that they load on-demand. For more, see ~{ Loading and unloading content at runtime }~.

-	**If your plug-in needs to add any Lua scripts to the project content:** Your plug-in's scripts won't get loaded by default into the project's Lua environment at runtime. Your user will have to adjust their project's Lua code in order to `require` those added script files. So, for example, if your plug-in contains some custom Flow nodes that are implemented in accompanying Lua scripts, the user needs to `require` those scripts from within their own gameplay code in order for the Flow nodes to work.

	Another way to get around this might be to create a *.dll* file that extends the runtime engine to load the necessary Lua files when the engine starts up the project (see the `lib_loadfile()` function in the engine's `LuaApi`).

## Option: including the plug-in in a project

If you want to distribute the whole source folder for a project, so that others can load up the project and edit it in the editor, you don't have to send your plug-ins along in separate packages.

If you put a plug-in folder *inside* the project, the editor will be able to see it *only* when that project is loaded. This may be useful if your project needs a particular version of a plug-in in order to work, but it's not important for the user to be able to use that plug-in with other projects too.

Note that although the editor will find the plug-in and show it in the **Plugin Manager** automatically, all the other extra manual steps above are still needed.
