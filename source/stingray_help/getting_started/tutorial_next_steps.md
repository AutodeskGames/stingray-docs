# Next steps!

Once you've finished the **Help > Hands-on Training Mission**, you'll have a pretty good idea of how to use Stingray. You'll be ready to dive into some more detail, so here's a few things you might want to investigate!

-	Play around with your project's visual look by trying out ~{ The Shading environment and post effects }~. The shading environment offers tons of settings for physical camera emulation (like bloom, lens distortion, depth of field, etc.), plus special rendering effects like fog and ambient occlusion.

-	The template projects are set up with pretty basic lighting -- in most templates, there's just a single directional light to simulate the sun and sky lighting. But there are lots of ways you can change up the lighting in your level with other dynamic lights like spots and omni-directional lights. You can also try *baking* the lighting, if you want to achieve ultra-realistic results with soft shadowing and color bleeding. See the ~{ Lighting }~ section for more.

-	Get into ~{ Scripting with Lua }~! Every project uses at least a little Lua -- a *boot script* that creates worlds and loads levels into the engine. Most of the templates use the `Appkit` -- a set of scripts that come with Stingray in the `core` resources -- which provides some default behavior. Get started by starting up a basic template and looking into the files under the `script/lua` folder, especially the `project.lua` file, where you can start adding in your own bits of code into entry points like the `update()` function.

	These docs include a full [Lua API reference](../../lua_ref/index.html) that you'll use a lot to browse and understand the different objects and functions you can use.

-	Particle effects are fun to play with, and really useful for simulating all kinds of dynamic effects like rain, snow, moving fog, fire and smoke, etc. Try creating one and playing around with its parameters. For docs, see ~{ Create and edit particle effects }~, or [follow along with this tutorial](https://www.youtube.com/playlist?list=PLTjhBiJe1i2GoHq_WmjKKSU9ZWYV5tkJB)!

-	In addition to bringing models in from modeling tools like 3ds Max and Maya, you can sculpt and paint your own models, called *terrains*, right in the Stingray editor. These terrains are usually used for large-scale landscape and ground surfaces. See the ~{ Terrain tool }~.

-	You can also create animations right in the editor, using our Story tool. This is great for animating resources that aren't imported from other tools, like cameras or entities. You can use Story to do things like animate a camera to fly through a level following a set path. You can also use Story to animate multiple different units together, even if you've imported those units separately. See the pages under ~{ Cinematics }~.

-	If you're already knowledgeable about working in other game engines, you might be wondering how to build up your own *entities* out of modular *components*. We're working on making our entity system into a full-fledged system for authoring any kind of interactive game objects -- it's still a work in progress, but you can read more about the current possibilities under ~{ Using Entities in your Project }~.

	This is actually great material for all users to know, as we envision the entity system being used for more and more different things as time goes on, eventually replacing units.

-	Got an iOS or Android device that you want to try out with Stingray? Have a look under the ~{ Supported platforms }~ for more information about requirements and pre-requisites for your platform. Once you've installed everything you need and made sure your device is compatible with Stingray, you can see ~{ Connecting to a remote device }~ for details on mirroring your editor viewport on the device and testing out builds. You can also try making a standalone build and running it on your device -- see ~{ Deploying and Building }~.

-	Every project has a *settings.ini* file that offers a ton of options about how the editor and all of its subsystems work. You can poke around in here to see what you can do. For more info on all the settings, see [this reference page](../reference/engine_settings.html).

-	Have a look through some of our [tutorials](../../tutorial_link/tutorials_on_area.html) and [videos](https://www.youtube.com/user/autodeskgameshowtos/videos) for more things you can try out.

Have fun, and keep us all posted at [the forums](http://forums.autodesk.com/t5/stingray-forum/bd-p/800) to let us know how you're getting along!
