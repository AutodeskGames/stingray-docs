# Ways to run your game

You can start your game in multiple different ways to test out various aspects of your content and gameplay.

## ![Play](../images/icon_Play.png) Test Level

You can launch your game on your local machine from the Stingray Editor, and have it start up with the current level you have opened in the Stingray Editor. This is a fast way to drop in and out of a level to test your changes.

Use any of the following methods:

-	From the main menu, select **Edit > Level Testing > Test Level**.
-	Use the **F8** hotkey.
-	Click the ![Play](../images/icon_Play.png) icon in the **Level Viewport** panel.

> **Note:** it is up to the project's Lua boot code to support starting with the current level. If you use the Appkit's `SimpleProject` in your game (like any of the template projects provided with Stingray), this is done for you. If you write your own Lua boot script, you will need to support it yourself if you want. See ~{ Loading the current level for testing }~.

## ![Run](../images/icon_playGame.png) Run Project

You can launch the game as a standalone playable application on your local machine, and on any other remote target that you have set up in the **Connections** panel. This is a good way to test the full game on any target platform as you work, starting from the very beginning of the game.

Use any of the following methods:

-	From the main menu, select **Edit > Level Testing > Run Project**.
-	Click the ![Run](../images/icon_playGame.png) icon next in the Level Viewport panel or the Connections panel.

See also ~{ Connect to a remote device }~.

## ![Link](../images/icon_linkConsole.png) Mirroring the viewport to a remote device

You can run the Stingray engine by itself on a console or mobile platform, and connect to it from the Stingray Editor running on your Windows machine. The editor sends your game data over the network to the remote engine, making the display of the console or mobile platform reflect the current viewport of the editor.

In effect, this mode is not really a playtest, since you are not running your gameplay code on the target platform. However, you can see the way your assets and materials will look on the various targets. This is a convenient way to compare the look of your game on multiple platforms at the same time.

See also ~{ Connect to a remote device }~.

## Deploy and Launch

After you use the **Deployer** panel to create a standalone package of your game for a specific platform, you can run that standalone package to test out the real performance and behavior of the game in its final state.

Running a deployed build is the only way to test your game using the bundled data in its final state. It is therefore the best option to use when measuring things  like data loading times. It is also the only way to prepare a build for distribution as a standalone application for all platforms.

For details on using the **Deployer** to produce bundled, distributable builds of your game, see ~{ Deploying and building }~.

## Start engine from the command line

On Windows, you can start the Stingray engine application from a command prompt, and provide parameters on the command line to control its behavior. For example, you can tell it to launch with the compiled data from a particular directory, to compile or bundle data only, or to listen for connections from a given IP address.

For details on all the parameters the engine accepts, see ~{ Stingray engine command-line reference }~.
