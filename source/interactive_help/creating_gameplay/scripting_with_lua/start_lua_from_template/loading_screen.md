# Work with the Appkit loading screen

The more content you add to your project, the longer it takes for the engine to load that content into memory.

If you put all your content into your *boot.package*, which the engine loads at startup before doing anything else, the users running your project will be stuck staring at a black screen until the package is loaded. For big projects, you can minimize this effect by dividing your project content up into multiple resource packages that you load and unload on the fly. But even so, it can take some time for the first level to load in.

To avoid this problem, the Appkit offers a built-in module that loads a sequence of ultra-lightweight splash screens immediately, giving a player some visual feedback while the real loading happens in the background. It simplifies managing the transitions between the visuals, handles all the package loading mechanics for you, and takes care of monitoring when the player can be permitted to skip ahead.

The Stingray template projects already make use of this loading screen, so if you start a project from a template you'll have a default Stingray logo already set up. Follow the instructions on this page to customize the default behavior, or to add the loading screen to any project that uses the Appkit and its default `SimpleProject`.

## How it works

In order to set up your loading screen effectively, you'll need to understand a little about how it works.

When the `SimpleProject` first starts up, it checks its `SimpleProject.config.loading_screen_materials` configuration parameter to see if there are any loading screens it should show.

If it finds one or more loading screens there, it checks the `loading_screen_start_package` setting for the name of a resource package it should load. If it finds one, it loads that package immediately.

The engine shows a black screen until this package is fully loaded, just like it does when it loads the boot package at startup. So this loading screen startup package should be kept as small as possible, with only the resources that are really needed to show the splash screens. (You could leave this out and simply add your loading screen materials to the boot package. However, the `loading_screen_start_package` gets unloaded automatically when the loading screen is done, which avoids keeping resources around in memory that won't get used again.)

Once the start package is fully loaded, the loading screen checks its `loading_screen_end_package` setting to get the name of a package it should start loading in the background while it's showing the images. Typically, this package should contain the bulk of the content that is needed for the project's starting level -- or *all* the levels in the project, if you haven't set up multiple content packages for your project. While this main content package is being loaded, the loading screen has to block the player from skipping ahead, since the first level in the project is not yet ready to be started.

Meanwhile, the loading screen creates a simple 2D quad that fills the whole viewport (using the `stingray.Gui` Lua API). It then starts applying each of the `loading_screen_materials` to that quad in order, with fade-in and fade-out transitions between them.

Once the loading screen finishes loading the main content package, it allows the player to skip the remainder of the loading screens by hitting the `esc` key. If this happens, or if the loading screen has finished showing all the materials configured for it, the `SimpleProject` moves on to load the startup level set in its `standalone_init_level_name` configuration parameter. Finally, the loading screen is free to unload its `loading_screen_start_package`.

## Make your own loading screens

You're not stuck with the default Stingray logo -- you can set up your project to show any logos and splash screens you like.

1.	Create a new *.material* resource in your project for each screen you want to show. You'll need to use an *unlit* material -- see ~{ Unlit materials }~.

	If all you want is to render a single texture image, you can set the *core/appkit/materials/loading_screen* resource as the parent for your new material. Then, in the ~{ Property Editor }~, set the **Color Map** for the material to point to the texture you want to show.

	Or, you can edit your material's shader graph to achieve whatever effect you want. See ~{ Create or edit shader graphs }~ and ~{ Shader Graph Editor }~.

	>	**Tip:** Use the **Animation > Flipbook** node in your shader graph to make your splash screen move!

1.	Make a *.package* file that contains only the resources you need to support these materials. If you're starting from a template project, you can add your materials to the *loading_screen.package*. For example:

	~~~{sjson}
	material = [
		"content/loading_screens/*"
		"core/appkit/materials/loading_screen*"
	]
	~~~

1.	Set up the `SimpleProject.config` object in your project's Lua code. If you're starting from a template project, you'll do this in the *script/lua/project.lua* file.

	You'll need to add each of your materials to the `loading_screen_materials` list. If you want to show multiple logos or splash screens one after another, add them all to the list in the order you want them to appear. For example:

	~~~{lua}
	SimpleProject.config = {
		...
		loading_screen_materials = {
			"content/loading_screens/my_company_logo",
			"content/loading_screens/a_partner_logo",
			"core/appkit/materials/loading_screen"
		},
		...
	}
	~~~

	If you use a different arrangement of resource packages from the default ones in the template, also make sure that you set up the `loading_screen_start_package` and `loading_screen_end_package` correctly.

	See also ~{ Using the SimpleProject }~ for descriptions of all the `SimpleProject.config` settings.

## Customize the timing

You can control how long the loading screen shows each material, and how long it takes for them to fade in and out.

You set this up in the `Appkit.LoadingScreen.config` Lua object. For example, you can add the following to your *project.lua* file where you set up the `SimpleProject.config`:

~~~{lua}
local loading_screen = Appkit.LoadingScreen or {}
local loading_config = loading_screen.config or {}

loading_config.fade_in_time = 0.5       -- sets the time it takes to fade in to max opacity
loading_config.display_time = 3         -- the time that the material remains at max opacity
loading_config.fade_out_time = 0.5      -- the time it takes to fade out to black
~~~

All time values are expressed in seconds.

## More detailed customization

The `SimpleProject` loading screen is a good way to get your project showing something to the player more quickly when it first starts up. It's also a good model for how you can write Lua code to handle loading resource packages in and out of memory at runtime in your game.

You can also control its behavior to a large extent through its configuration parameters, and by creating unique materials in the shader graph editor. However, you may want to further customize the behavior of the loading screen for your own project.

If you need to do this, we recommend copying the *core/appkit/lua/simple_project.lua* and *core/appkit/lua/loading_screen.lua* files into your project. As long as you make sure that they have the same relative path within your project, they will override the versions in the Stingray core resources. Then you can modify the copies inside your project folder to customize the behavior as you need.

See also ~{ Customizing the Appkit }~ and ~{ Working with core resources }~.
