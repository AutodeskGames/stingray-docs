# Test and build a project

Typically, when you're working in the interactive editor you're either setting up a scene with some 3D content, or setting up some ways for a user to experience that scene and interact with it. Although you see your scene in the editor's viewport, the way you interact with the scene while you're editing isn't the same as the way a player or user will interact with it when they experience your project.

As you work on your project, you'll often want to try out the levels and interactions that you're building in the editor, to make sure that everything will work as you're expecting when a player experiences it. You have a few ways that you can do this, described below.

## ![](../../images/icon_runProject.png) Test the whole project

Use the ![controller](../../images/icon_runProject.png) button in the ~{ Level Viewport }~ panel to start up your project content in a standalone application.

This is a great way to test, because:

-	you get to play your content from the beginning, exactly as your users will experience it. This includes any menu screens and level transitions that your project is set up to run.
-	it's easy to launch while you're working in the editor.
-	you can test other connected devices too, like your phone or tablet. See your platform's Getting Started page, and the pages under ~{ Connect to a remote device }~.
-	you can use the **Status Bar** to send commands and scripts to the engine.
-	all output from the engine is captured in the editor's **Log Console**.

## ![](../../images/icon_test_level.png) Test only the current level

In the interactive editor, you always work on one level at a time. While you have a level open, you'll likely want to test out the experience of running that particular level a lot. Use the ![](../../images/icon_test_level.png) button in the **Level Viewport** ~{ Toolbar }~ to quickly step in to your current level.

This is a great way to test, because:

-	you get to skip straight to the level you're focused on, without having to navigate through any menus or other levels.
-	it's easy to launch while you're working in the editor.
-	you can use the **Status Bar** to send commands and scripts to the engine.
-	all output from the engine is captured in the editor's **Log Console**.

## Deploy your app

Ultimately, the people who experience the content you're building won't see the interactive editor at all. You *deploy* your project -- that is, you package it up into a standalone form. On Windows, this is an executable *.exe* application accompanied by some *.dll* libraries and data files; on mobile platforms, it's a simple app. Anytime you're ready, you can deploy your project for whatever target platform you want to test or distribute.

This is a great way to test, because:

-	it's the final package or app that you'll distribute to your end users, in a standalone format, so you'll get the best picture of how your final results will look to a player.
-	if you use the `release` configuration to package the project, it'll be secure and optimized for best performance. All the code for things that aren't necessary in the final build, like connecting to the **Log Console**, is stripped out.

See ~{ Package the project for Windows }~, or the Getting Started page for your platform.

---
Related topics:
-	~{ Ways to run your project }~
-	~{ Ways to get runtime feedback }~
-	~{ Supported platforms }~
---
