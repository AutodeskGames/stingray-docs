# Extend the editor

Our goal is for the editor's plug-in system to be flexible enough to accommodate literally any project editing tasks. We know we're not quite there yet, but you can already do great things with this framework! We're hoping that if you decide to join in the fun of adding new features to the editor, you'll consider sharing your work with the rest of the user community -- and most definitely share with us your feedback about your experiences at:

>	<http://www.autodesk.com/stingray-forums>

## Plug-in development overview

1.	Every plug-in is defined by a *.plugin* resource file. This file contains metadata about your plug-in, and a set of *extensions* that define what the plug-in does when it's loaded. You will need to create one of these *.plugin* files for your plug-in.

	An easy way to get started is to copy the minimal description from the ~{ About plug-in definitions }~ page.

2.	Install and load the plug-in using the **Plugin Manager**, and verify that its minimal menu action is working. This way you will be able to test the plug-in as you make changes.

	See ~{ Add and remove plug-ins using the Plugin Manager }~.

3.	Start setting up your plug-in's extensions to define the behaviors it adds to the Stingray editor. To get familiar with the possibilities, see the other pages in this section, particularly the ones under ~{ Use extensions to define plug-in behaviors }~.

	For working illustrations of the concepts described in these docs, look at the set of plug-ins that are included in this release of Stingray. You'll find them under the *editor/plugins* folder in your Stingray installation folder.

	Depending on what you want your plug-in to do, you may need to accompany your *.plugin* file at this point with other resources like HTML and JavaScript files, additional content resources, etc.

4.	Reload, test, and iterate.

	Any time you change your plug-in description, you can reload it into the Stingray editor by pressing **F5**.

	Any time you need to reload a JavaScript module that the plug-in has already loaded, you can completely refresh the editor front end to use your latest code by pressing **Alt+F3**.

	See also these ~{ Tips for developing plug-ins }~, which includes more advice on working in the editor's JavaScript environment.

## Distributing your plug-in

When you're ready for others to try out your plug-in, you'll have to package up and distribute the *.plugin* file you've created, along with any other files it depends on. You can use any mechanism you like for this; there are no restrictions. Post the files on GitHub, post a zip for download, share it by e-mail, etc.

The important thing is for the other user to get the files locally on their computer. They then have to install and load it using the **Plugin Manager**.

Note that the **Plugin Manager** automatically finds any plug-ins that are contained inside the current project folder. So, if you're distributing a whole project that requires the use of your custom plug-in, you can just include your plug-in in with the project data instead of distributing the plug-in separately. (The other person will still need to tell the **Plugin Manager** to load the plug-in though.)

## About editor and engine plug-ins

The Stingray ecosystem currently has two different levels of plug-ins: *editor* plug-ins and *engine* plug-ins.

The role of an editor plug-in is to help the user work with the data in the project source directory in order to set up the content for the project.

Often, an editor plug-in only needs to interact with types of content resources that are already handled natively by the Stingray engine, or it helps a user work more effectively with those types of resources during their production phase. This is the case for most of the plug-ins that come built in with Stingray.

For example, the **Dependency** panel helps to track the relationships between the resources in the project as you work on your project, but it doesn't need to add any new functionality into the runtime engine in order to do its job. Similarly, the **History** panel follows the editing operations you make in the editor UI, but doesn't have any effect on how the engine runs your project.

As another example, a custom editor plug-in might programmatically place entities or units in the current level according to user-specified parameters. A plug-in like this would be automating some of the typical tasks involved in creating content in a level. Once the level is saved with those new units in it, the engine automatically handles creating the units at runtime just as if they had all been placed by hand in the editor. In this example, again, an editor plug-in is all that's needed; it doesn't change anything about the way the runtime engine works.

On the other hand, if you need to make the Stingray runtime engine behave differently when you play your project, you might need to create an engine-level plug-in using the engine's own plug-in API. This might be the case if you need to integrate third-party "middleware" into Stingray -- for example, we've written engine plug-ins that integrate third-party SDKs like Oculus and Steam, and our own SDKs like Gameware Navigation and HumanIK.

Sometimes you might need to have *both* an an editor plug-in that helps to create some type of data in the project, *and* an engine-level plug-in that defines how that data gets compiled, loaded and used in the runtime game. For example, we ship an editor plug-in for Scaleform Studio that tells the **Asset Browser** what to do with Scaleform Studio data files, and an engine-level plug-in for Scaleform Studio that makes the runtime engine capable of loading and rendering the data in those *.s2d* projects.
