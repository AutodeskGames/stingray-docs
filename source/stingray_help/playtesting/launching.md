# Ways to run your project

You can start your project in multiple different ways to test out various aspects of your content and gameplay.

## ![Play](../images/icon_test_level.png) Test Level

You can launch your project on your local machine from the Stingray Editor, and have it start up with the current level you have opened in the Stingray Editor. This is a fast way to drop in and out of a level to test your changes.

Use any of the following methods:

-	From the main menu, select **Edit > Level Testing > Test Level**.
-	Use the **F8** hotkey.
-	Click the ![Play](../images/icon_test_level.png) icon in the **Level Viewport** panel.

> **Note:** it is up to the project's Lua boot code to support starting with the current level. If you use the Appkit's `SimpleProject` in your game (like any of the template projects provided with Stingray), this is done for you. If you write your own Lua boot script, you will need to support it yourself if you want. See ~{ Loading the current level for testing }~.

Also, it's important to note that the Test Level doesn't handle loading resources in exactly the same way as your final app will. When you test the level, the engine automatically loads each resource that it needs directly from your project's data folder when it's needed, whether or not that resource is included in any resource packages, and whether or not your project loads any resource packages at all. So, when testing the level, you don't have to worry about resource management at all. (See also ~{ Loading and unloading content at runtime }~.)

## ![Run](../images/icon_run_project.png) Run Project

You can launch the project as a standalone playable application on your local machine, and on any other remote target that you have set up in the **Connections** panel. This is a good way to test the full project on any target platform as you work, starting from the very beginning.

Use any of the following methods:

-	From the main menu, select **Edit > Level Testing > Run Project**.
-	Click the ![Run](../images/icon_run_project.png) icon next in the Level Viewport panel or the Connections panel.

See also ~{ Connect to a remote device }~.

When you use Run Project, the engine uses the resource package system to manage loading and unloading content. So you need to have your resources assigned to packages and loaded up before you try to use them. In this mode, each individual resource is still loaded up from its individual binary data file in your project's compiled data folder. Later, when you deploy, these individual binary data files will get aggregated into bundles -- one bundle for each *.package* resource. See also ~{ Loading and unloading content at runtime }~ and ~{ About the content lifecycle }~.

## ![Link](../images/icon_linkConsole.png) Mirroring the viewport to a remote device

You can run the Stingray engine by itself on a console or mobile platform, and connect to it from the Stingray Editor running on your Windows machine. The editor sends your project data over the network to the remote engine, making the display of the console or mobile platform reflect the current viewport of the editor.

In effect, this mode is not really a playtest, since you are not running your gameplay code on the target platform. However, you can see the way your assets and materials will look on the various targets. This is a convenient way to compare the look of your scenes on multiple platforms at the same time.

See also ~{ Connect to a remote device }~.

## Deploy and Launch

After you use the **Deployer** panel to create a standalone package of your project for a specific platform, you can run that standalone package to test out the real performance and behavior of the project in its final state.

Running a deployed build is the only way to test your project using the bundled data in its final state. It is therefore the best option to use when measuring things  like data loading times. It is also the only way to prepare a build for distribution as a standalone application for all platforms.

For details on using the **Deployer** to produce bundled, distributable builds of your project, see ~{ Deploying and building }~.

## Start engine from the command line

On Windows, you can start the Stingray engine application from a command prompt, and provide parameters on the command line to control its behavior. For example, you can tell it to launch with the compiled data from a particular directory, to compile or bundle data only, or to listen for connections from a given IP address.

For details on all the parameters the engine accepts, see ~{ Stingray engine command-line reference }~.

---
Related topics:
-	~{ Test and build a project }~
---
