# Next steps

Once you've tried out a project or two and poked around the Stingray editor a bit, you'll be ready to dive into some more detail. Here's a few things you might want to investigate...

## Add some new content

Most of the content that you see in your Stingray levels -- like 3D models, materials, textures, and animations -- aren't actually created in Stingray. You typically create these assets in a digital content creation tool like Maya or 3ds Max, export them to *.fbx* files, and then import them into Stingray.

If you know how to create *.fbx* files, try importing some into your Stingray project. It's as easy as dropping them into the ~{ Asset Browser }~ -- just cast an eye over the recommended settings and best practices in the ~{ Importing Assets }~ section of the docs.

If you don't have any *.fbx* files of your own handy, don't feel bad -- you have some free sample assets you can play around with. Look for them in the **Asset Browser**, under **Online Assets > Units**.

Stingray creates a new *unit* resource in your project for each object you import. Once you have your new unit in your project, you can just drag and drop it from the **Asset Browser** into the viewport to add it to a scene.

>	**Tip:** If you're using Maya or 3ds Max, Stingray comes with some interop plugins that make it even easier to keep your assets in sync. See ~{ Interop with Maya, Maya LT, or 3ds Max }~.

## Tweak the look and the lighting

Play around with your level's visual look by trying out ~{ The Shading environment and post effects }~. The shading environment offers tons of settings for physical camera emulation (like bloom, lens distortion, depth of field, etc.), plus special rendering effects like fog and ambient occlusion.

The template projects are set up with pretty basic lighting -- in most templates, there's just a single directional light to simulate the sun and sky lighting. But there are lots of ways you can change up the lighting in your level with other dynamic lights like spots and omni-directional lights. You can also try *baking* the lighting, if you want to achieve ultra-realistic results with soft shadowing and color bleeding. See the ~{ Lighting }~ section for more.

## Add some user interactions

Most of the Stingray template projects and online examples come with some built-in support for basic user interactions like moving the camera around. But there are an infinite number of other ways that you can make your project's levels respond to the player's actions.

Get started adding user interactions with our visual scripting system, called Flow. We give you a bunch of boxes that represent events that can happen in the project, and actions that the engine can take. You wire these boxes together, building up complex flow charts, which we call *graphs*, that define what the project should do in what order. See ~{ Visual programming using Flow }~ for more.

On the other hand, if you're happier with code, get into ~{ Scripting with Lua }~! Every project uses at least a little Lua -- a *boot script* that creates worlds and loads levels into the engine. Most of the templates use the `Appkit` -- a set of scripts that come with Stingray in the `core` resources -- which provides some default behavior. Get started by starting up a basic template and looking into the files under the `script/lua` folder, especially the `project.lua` file, where you can start adding in your own bits of code into entry points like the `update()` function.

These docs include a full [Lua API reference](../../lua_ref/index.html) that you'll use a lot to browse and understand the different objects and functions you can use.

## Work with another platform

Got an iOS or Android device that you want to try out with Stingray?

Check the ~{ Get started on Android }~ and ~{ Get started on iOS }~ pages to see what you'll need to install and set up. Afterward, you'll be ready to connect the editor to your device so that you can mirror the editor's viewport, run your project on the device, and deploy a full build.

## Do some home cooking in Stingray

The Stingray editor doesn't just import content that you've created in other apps like Maya or 3ds Max. There are also some kinds of assets you create right in the Stingray editor. For example:

-	*Particle effects* are fun to play with, and really useful for simulating all kinds of dynamic effects like rain, snow, moving fog, fire and smoke, etc. Try creating one and playing around with its parameters. For docs, see ~{ Create and edit particle effects }~, or [follow along with this tutorial](http://area.autodesk.com/learning/creating-particle-effects-in-stingray)!

-	When you import 3D meshes, they'll probably come along with some *.material* resources that define the way the mesh surface interacts with light in the scene -- its color, reflectance, roughness, etc. But you can also create new materials in the Stingray editor. Use a standard material as a pre-set, and customize its properties by setting values in the ~{ Property Editor }~. Or you can take total control over your material by wiring up its *shader graph*. For more, see the pages under ~{ Shading }~.

-	You can use our ~{ Story Editor }~ tool to create timeline animations for objects in your levels. This is great for animating level objects that aren't imported from other tools, like cameras or entities. You can use Story to do things like animate a camera to fly through a level following a set path. Or, you can use Story to animate multiple independent units together even when you've imported them from separate *.fbx* files. See the pages under ~{ Cinematics }~ for more.

-	You can use the Stingray editor to scuplt and paint a special kind of 3D surface called a *terrain*. These are usually used for large-scale landscapes and ground surfaces. See the ~{ Terrain tool }~.

## Learn more about project runtime settings

Every project has a *settings.ini* file that offers a ton of options about how the editor and all of its subsystems work. By tweaking these settings, you can control many aspects of the way the game runs and renders your content. For more info on all the settings, see [this reference page](../reference/engine_settings.html).

## Try out the entity system

If you're already knowledgeable about working in other game engines, you might be wondering how to build up your own customized game objects out of modular components. We're working on making our entity system into a full-fledged system for authoring any kind of interactive game objects -- it's still a work in progress, but you can read more about the current possibilities under ~{ Using Entities in your Project }~.

This is actually great material for all users to know, as we envision the entity system being used for more and more different things as time goes on, eventually replacing units.

## And more

Have a look through some of our [tutorials](../../tutorial_link/tutorials_on_area.html) and [videos](https://www.youtube.com/user/autodeskgameshowtos/videos) for more things you can try out.

Have fun, and keep us all posted at [the forums](http://forums.autodesk.com/t5/stingray-forum/bd-p/800) to let us know how you're getting along!
