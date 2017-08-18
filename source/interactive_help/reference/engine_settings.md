# `settings.ini` file reference

<a name="top"></a>

Every {{ProductName}} project needs to have a *settings.ini* file at the root of the project folder. This file contains a variety of settings that the engine uses to initialize its subsystems. It expresses the data using the SJSON format. See ~{ About the SJSON data format }~.

If you've created a new project based on any of the default ~{ Template projects }~, you already have a *settings.ini* file created for you, pre-configured with default settings.

This topic describes all the settings that you can configure in this file in order to modify the behavior of the engine.

- [Generic settings](#generic-settings)
- [Windows settings](#windows-settings)
- [Render settings](#render-settings)
- [Content errors and warnings](#error-levels-and-fallback-resources)
- [Renderer](#renderer)
- [Texture streaming](#texture-streaming)
- [Performance HUD setting](#performance-hud-setting)
- [Log directory](#log-directory)
- [Save directory](#save-directory)
- [Wwise settings](#wwise-settings)
- [PhysX settings](#physx-settings)
- [Custom settings](#custom-settings)
- [Script data](#script-data)
- [Network settings](#network-settings)
- [User settings](#user-settings)
- [Log consoles](#log-consoles)
- [Crash report](#crash-report)
- [Steam settings](#steam-settings)
-	[XB1 settings](#xb1-settings)

## Special file and path name variables

When you set a path and/or filename as the value of a setting in this file, you can include the following variables in the path. The engine automatically expands them to appropriate values for the current user, platform and time.

*	**%APPDATA%**: The folder reserved for storing data related to the current user. (Available on Windows and iOS)
*	**%HOSTNAME%**: The name of the computer. (Available on Windows only)
*	**%DATE% or %UTCDATE%**: The local or UTC date, in the form YYYY-MM-DD.
*	**%TIME% or %UTCTIME%**: The local or UTC time, in the form HH.MM.SS.
*	**%RANDOM%**: Eight random letters.
*	**%SESSION%**: A random hexadecimal string that identifies this play session. This could be used to match different logs from the same play session.
*	**%SAVEDATA%**: The engine's data storage directory on iOS.
*	**%OBBPATH%**: The engine's data storage directory on Android.
*	**%STEAMUSER%**: The current Steam user's application data directory. Available only when Steam is enabled and the application can find a valid app ID. If Steam is enabled but no Steam user is logged in, this falls back to **%APPDATA%**.

## Generic settings

`boot_script = "core/appkit/lua/main"`

> This specifies the Lua resource that is the boot script for the game. In the boot script, you can check the flag `LEVEL_EDITOR_TEST` to determine if you are running the game stand-alone or from within the **Level Editor** and take the appropriate action. See also ~{ Example Boot Script }~.

`boot_package = "boot"`

> This is the package that the boot script exists in and it contains a number of other resources that are needed at boot time.

`autoload = true`

> In Debug and Development configurations, autoload disables the package loading system and directly loads resources as needed. Disable autoload during development to test package file configurations and to minimize loaded assets.

`build = 1`

> This specifies a build number for a game release. This is used to tag Steam mini dumps on Windows for example.

[Back to top](#top)

## Windows settings

> All Windows-specific settings are placed within a `win32` block like this.

~~~{sjson}
win32 = {
	crash_dump = false
	crash_dump_path = "%APPDATA%\\Company\\Project\\dumps\\dump-%UTCDATE%-%UTCTIME%-%RANDOM%.dmp"

	window_name = "Stingray Vehicle Project"
	floating_point_exceptions = true

	input = {
		keyboard = "windows"
		mouse = "windows"

	renderer = {
		screen_resolution = [ 1280, 720 ]
		adapter_index = 0
		fullscreen_output = 0
		fullscreen = false
		aspect_ratio = -1
		d3d_debug = false
    	//vsync = false
	}
~~~

`window_name = "Project"`

> This is the name that is printed in the window title bar if the game is running in windowed mode.

`floating_point_exceptions = true`

> Causes the Stingray engine to throw an exception when a floating-point math operation fails. For details, see ~{ Avoiding floating-point exceptions }~.

`input = {`

> `keyboard = "windows"`
>
> > Specifies the keyboard driver that to use, can be *windows* or *keystate*.
>
> `mouse = "windows"`
>
> > Specifies the mouse driver to use. Only *windows* can be specified.
>
> `query_performance_counter_affinity_mask = 0`
>
> > Locks `QueryPerformanceCounter()` queries to a single core.

`renderer = {`

> `screen_resolution = [ 1280, 720 ]`
>
> Sets what screen resolution to use when booting the renderer. Defaults to *1280x720*
>
> `adapter_index = 0`
>
> Sets which Adapter index (*read:* GPU) to use when booting the renderer. Defaults to *0*
>
> `fullscreen_output = 0`
>
> Sets which screen to use as full screen output device. Defaults to *0*.
>
> `fullscreen = false`
>
> Sets if engine should boot in full screen or windows mode. Defaults to *false*. (Overrides the borderless_fullscreen and maximized_window options.)
>
> `aspect_ratio = -1`
>
> Overrides aspect ratio calculation based on resolution (calculated as width / height) with something else. Defaults to *-1* (width/height)
>
> `d3d_debug = false`
>
> Enables D3D debug layer, only available if DXSDK is properly installed on the development machine.
>
> `vsync = false`
>
> Enables or disables *vsync*, or vertical synchronization, which constrains the apparent frame rate of the game to the refresh rate of the display. Enabling vsync may correct problems with screen "tearing" when the frame rate of the game is greater than the refresh rate of the display. However, it may cause the apparent frame rate of the game to drop noticeably when the frame rate drops below the refresh rate of the display. For a good explanation, see [here](http://hardforum.com/showthread.php?t=928593). The default is `false`.

`disable_implicit_sli = true`

> VR SLI improves performance for VR applications, and uses multiple GPUs to accelerate stereo rendering. When a machine has two Nvidia GPUs connected by the SLI bridge, the driver takes care of utilizing the two GPUs while running on D3D11.
>
> When set to true, this setting tells the driver to stop using both GPUS, and the application takes care of utilizing the two GPUs instead.
>
> **Note:** This setting must be used in conjunction with the `nv_vr_sli_enabled` setting. Both settings must be manually added to the settings.ini file when working in the VR templates.

`crash_dump = false`

> If this is set to false, this disables crashdumps in development builds. If Steam is used, crashdumps are always enabled for release builds.

`crash_dump_path = "%APPDATA%\\Company\\Project\\dumps\\dump-%UTCDATE%-%UTCTIME%-%RANDOM%.dmp"`

> This sets the path and filename where the engine saves crash dumps. If omitted, it writes the dumps to the current directory, with the name `dump-%UTCDATE%-%UTCTIME%.dmp`.
>
>	For a list of the special tags you can use in this path, see [Special file and path name variables].
>
> In release builds using Steam, the dumps are always stored in the steamapps directory where the game is stored.


[Back to top](#top)

## Render settings

~~~{sjson}
render_settings = {
	//sun_shadows = true
	//sun_shadow_map_size = [ 2048, 2048 ]
	// Only on PC, PS4, XB1: medium == 4 tap PCF, high == 5x5 PCF
	// Ignored on mobile
	//sun_shadow_map_filter_quality = "high"
	//local_lights_shadow_map_filter_quality = "high"

	//deferred_local_lights_cast_shadows = true
	//forward_local_lights_cast_shadows = true
	//local_lights_shadow_atlas_size = [ 2048, 2048 ]

	//particles_local_lighting = true
	//particles_receive_shadows = true
	//particles_tessellation = true
	//particles_cast_shadows = false

	//local_lights = true
	//fxaa_enabled = false
	//taa_enabled = true
	//motion_blur_enabled = true
	//ao_enabled = true
	//ao_half_res = false
	//dof_enabled = true
	//bloom_enabled = true
	//ssr_enabled = true
	//ssr_high_quality = false
	//lens_quality_enabled = true
}
~~~

`vr_supported = true`

> Sets the renderer to support VR. This setting is only available in the VR templates.

`vr_hmd_resolution = [2160, 1200]`

> Specifies the Head Mount Display (HMD) resolution. This setting is only available in the VR templates.

`vr_target_scale = 1.4`

> Scale of the VR render target for super sampling. Reduces aliasing artifacts. This setting is only available in the VR templates.

`vr_mirror_mode = mono`

> Can be "mono" (default) or "stereo". When running or testing your game using a VR app, the game image appears in your HMD (head mount display) and on your mirror window (your monitor). The vr_mirror_mode property lets you control the display on the mirror window. This setting is only available in the VR templates.

`nv_vr_sli_enabled = true`

> Boots the renderer into a mode where both GPUs are used for VR.

> **Note:** This setting must be used in conjunction with the `disable_implicit_sli` setting. Both settings must be manually added to the settings.ini file when working in the VR templates.

[Back to top](#top)

## Error levels and fallback resources

With this section, you can control how the runtime responds to asset errors by demoting some errors to warnings. Doing so prevents the runtime from triggering an assert in case of an asset error and instead try to continue to run. Usually this is handled by replacing the broken asset with a fallback asset.

All tools are configured to run as fault tolerant as possible to avoid tearing down the runtime during content authoring.

~~~{sjson}
`error_levels = {`
	// Treat semantic mismatches between vertex data and vertex shader as warnings, output warning message and ignore draw call
	semantic_mismatch = "warning"

	// Treat missing materials from .material files as warnings
	missing_material = "warning"

	// To be able to package and ship an application with missing resources you'll need to specify the fallback resources in the fallback_resource_package
	fallback_resource_package = "core/fallback_resources/fallback_resources"

	// In case a resource lookup fails, warn and fallback to specified fallback_resource
	missing_resources = {
		shader = { fallback_resource = "missing_shader" }
		texture = { fallback_resource = "core/fallback_resources/missing_texture" }
		unit = { core/fallback_resources/missing_unit }
		material = { core/fallback_resources/missing_material }
	}
}
~~~

`semantic_mismatch = "warning"`

> Can be *"warning"* or *"error"*. Defaults to *"error"*. Setting *semantic_mismatch="warning"* makes the engine treat semantic mismatches between vertex data and vertex shader as warnings - outputs a warning message and ignores the draw call.

`missing_material = "warning"`

> Treat missing materials from .material files as warnings.

`fallback_resource_package = "core/fallback_resources/fallback_resources"`

> In case a resource lookup fails, warn and fallback to the specified fallback_resource.

`missing_resources = {`

> To be able to package and bundle an application with missing resources you'll need to point out a resource package containing the fallback resources. By default this package is already setup for you in: core/fallback_resources/fallback_resources.

`shader = { fallback_resource = "missing_shader" }`

> If the engine fails to look up a specified shader, use the shader specified in *fallback_resource* instead.

`texture = { fallback_resource = "core/fallback_resources/missing_texture" }`

> If the engine fails to look up a specified texture, use the texture specified in *fallback_resource* instead. Remember that you'll need to list this resource in the *fallback_resource_package* if you intend to bundle and ship a game with these fallbacks enabled.

`unit = { core/fallback_resources/missing_unit }`

> If the engine fails to look up a specified unit, use the unit specified in *fallback_resource* instead. Remember that you'll need to list this resource in the *fallback_resource_package* if you intend to bundle and ship a game with these fallbacks enabled.

`material = { core/fallback_resources/missing_material }`

> If the engine fails to look up a specified material, use the material specified in *fallback_resource* instead. Remember that you'll need to list this resource in the *fallback_resource_package* if you intend to bundle and ship a game with these fallbacks enabled.

[Back to top](#top)

## Renderer

`render_config = "core/rendering/renderer"`

> Specifies the render_config file to use for the game.

[Back to top](#top)

## Texture streaming

The following settings configure the memory reserved by the texture streaming system.

These settings must be specified inside platform-specific blocks like this, using the keys `win32`, `android`, `ios`, `xb1`, or `ps4`:

~~~{sjson}
win32 = {
	streaming_texture_pool_size = 256
	streaming_buffer_size = 24
}
ios = {
	streaming_texture_pool_size = 128
	streaming_buffer_size = 16
}
~~~

`streaming_texture_pool_size`

>	Specifies the maximum amount of memory, in MB, that the texture streaming system can allocate to share between all of the streamable textures it loads into your game.
>
>	For details, see ~{ Texture streaming }~.

`streaming_buffer_size`

>	Specifies the amount of memory, in MB, that the texture streaming system uses for loading new textures in from disk.
>
>	For details, see ~{ Texture streaming }~.

## Performance HUD setting

`performance_hud = "core/performance_hud/performance_hud"`

> Specifies a configuration file to be used for the in-game performance HUDs.

[Back to top](#top)

## Log directory

`<platform>.local_console_log`

>	Specifies a file name where console logs will be stored. `<platform>` can be `ios`, `android`, `win32`, and so on.
>
>	For a list of the special tags you can use in this path, see [Special file and path name variables].

~~~{sjson}
android = {
	local_console_log = "%OBBPATH%/log.txt"
}
~~~

[Back to top](#top)

## Save directory

`<platform>.save_dir`

>	Specifies a directory for the Lua `SaveSystem` interface to write and read its data files on Windows and iOS. `<platform>` can be `ios` or `win32`. (On Android and PlayStation 4, save paths are not configurable.)
>
>	For a list of the special tags you can use in this path, see [Special file and path name variables].

~~~{sjson}
ios =
	save_dir = "%SAVEDATA%/empty"
}
~~~


[Back to top](#top)

## Wwise settings

~~~{sjson}
wwise = {
	enabled = true
	data_dir = "content/audio"

	// The below settings can be used to tune memory and performance of Wwise.
	//memory_manager = {
	//	max_num_pools = 64
	//}
	//stream_manager = {
	//	memory_size = 65536
	//}
	//io_device = {
	//	memory_size = 2097152
	//	memory_alignment = 4
	//	granularity = 16384
	//	max_concurrent_io = 8
	//	max_cache_ratio = 1
	//	target_buffering_length = 16384
	// Toggle between Deferred Wwise IO hook and Blocking Wwise IO Hook
	//	use_blocking_io = false
	//}
	//sound_engine = {
	//	pool_size = 16777216
	//	pool_ratio_threshold = 0.5
	//	command_queue_size = 262144
	//	continuous_playback_look_ahead = 1
	//	num_samples_per_frame = 1024
	//}
	// Platform-specific sound engine settings below
	//xb1 = {
	//	lower_engine_default_size = 16384
	//	lower_engine_ratio_threshold = 1
	//	num_refills_in_voice = 4
	//	shape_default_pool_size = 0
	//	xma_max_voices = 128
	//}
	//android = {
	//	sample_rate = 0
	//}
	// Settings for the connection to the Wwise Authoring Tool Profiler
	//communication = {
	//	enabled = true
	//}
~~~

`enabled`

>	Determines whether or not the Wwise integration is enabled in the engine. This will disable all sounds in your game, so you would typically only disable this setting for temporary testing and debugging purposes.

`data_dir`

>	The folder within your Stingray project that the Wwise authoring tool will target when exporting your sound banks.

`memory_manager`

>	`max_num_pools`
>
>>	Sets the maximum number of memory pools for the Wwise engine. See the [Wwise SDK documentation](https://www.audiokinetic.com/library/2015.1.7_5584/?source=SDK&id=struct_ak_mem_settings_a5b9332565e635f851511aba9cb113183.html#a5b9332565e635f851511aba9cb113183).

`stream_manager`

>	For background about configuring the Wwise Stream Manager, see [this page](https://www.audiokinetic.com/library/2015.1.7_5584/?source=SDK&id=streamingmanager__settings.html) in the Wwise SDK documentation.
>
>	`memory_size`
>
>>	Sets the size of the memory pool for the Wwise Stream Manager. See the [Wwise AkStreamMgrSettings::uMemorySize parameter](https://www.audiokinetic.com/library/2016.1.0_5775/?source=SDK&id=struct_ak_stream_mgr_settings_ad3446cc132746013bf789ebb04382bf0.html#ad3446cc132746013bf789ebb04382bf0).

`io_device`

>	For background about configuring the I/O device for the Wwise Stream Manager, see [this page](https://www.audiokinetic.com/library/2015.1.7_5584/?source=SDK&id=streamingmanager__settings.html) in the Wwise SDK documentation.
>
>	`memory_size`
>
>>	Sets the size of the I/O memory pool for the Wwise engine. See the [Wwise AkDeviceSettings::uIOMemorySize parameter](https://www.audiokinetic.com/en/library/2015.1.6_5553/?source=SDK&id=struct_ak_device_settings_a75893592924a59881fe2cbca4e4ddd04.html#a75893592924a59881fe2cbca4e4ddd04).
>
>	`memory_alignment`
>
>>	Sets the alignment of the I/O memory pool for the Wwise engine. See the [Wwise AkDeviceSettings::uIOMemoryAlignment parameter](https://www.audiokinetic.com/library/2016.1.0_5775/?source=SDK&id=struct_ak_device_settings_ae4d4ef1d88e6a43dd134845f18e26b42.html#ae4d4ef1d88e6a43dd134845f18e26b42).
>
>	`granularity`
>
>>	Sets the granularity of Wwise I/O requests, in bytes per request. See the [Wwise AkDeviceSettings::uGranularity parameter](https://www.audiokinetic.com/library/2015.1_5418/?source=SDK&id=struct_ak_device_settings_abd4879bfd150b9a2f898102e3815dbe2.html#abd4879bfd150b9a2f898102e3815dbe2).
>
>	`max_concurrent_io`
>
>>	Sets the maximum number of simultaneous I/O transfers. See the [Wwise AkDeviceSettings::uMaxConcurrentIO parameter](https://www.audiokinetic.com/library/2015.1_5418/?source=SDK&id=struct_ak_device_settings_af49f8b3af816b58296e952b20de2d7a3.html#af49f8b3af816b58296e952b20de2d7a3).
>
>	`max_cache_ratio`
>
>>	Determines whether or not data caching is enabled. See the [Wwise AkDeviceSettings::fMaxCacheRatio parameter](https://www.audiokinetic.com/library/2015.1.7_5584/?source=SDK&id=streamingmanager__settings.html).
>
>	`target_buffering_length`
>
>>	Sets the desired stream buffer length. See the [Wwise AkDeviceSettings::fTargetAutoStmBufferLength parameter](https://www.audiokinetic.com/library/2015.1_5418/?source=SDK&id=struct_ak_device_settings_af396c1626da7df1bbb6d9129e132b02f.html#af396c1626da7df1bbb6d9129e132b02f).
>
>	`use_blocking_io`
>
>>	Determines whether or not the Wwise I/O scheduler is set to `AK_SCHEDULER_BLOCKING`. See the [AkDeviceSettings::uSchedulerTypeFlags](https://www.audiokinetic.com/library/2015.1.7_5584/?source=SDK&id=struct_ak_device_settings_a33461d7baeb7e03b9ab339f5a929e82c.html#a33461d7baeb7e03b9ab339f5a929e82c).

`sound_engine`

>	Configures the WWise sound engine. For helpful tips on optimizing memory usage, see [this page](https://www.audiokinetic.com/library/2015.1_5418/?source=SDK&id=goingfurther__optimizingmempools.html) in the Wwise documentation.
>
>	`pool_size`
>
>>	Sets the size of the default memory pool for the Wwise engine. See the [Wwise AkInitSettings::uDefaultPoolSize parameter](https://www.audiokinetic.com/library/2015.1_5418/?source=SDK&id=struct_ak_init_settings_ab1f63134901eae5a8f89b249e85b2b7c.html#ab1f63134901eae5a8f89b249e85b2b7c).
>
>	`pool_ratio_threshold`
>
>>	Sets the percentage of occupied memory where the sound engine should enter in Low memory Mode. See the [Wwise AkInitSettings::fDefaultPoolRatioThreshold parameter](https://www.audiokinetic.com/library/2015.1_5418/?source=SDK&id=struct_ak_init_settings_a18f13342d221a75006e049093c24d563.html#a18f13342d221a75006e049093c24d563).
>
>	`command_queue_size`
>
>>	Sets the size of the command queue. See the [Wwise AkInitSettings::uCommandQueueSize parameter](https://www.audiokinetic.com/library/2015.1_5418/?source=SDK&id=struct_ak_init_settings_afd6ada0769c6316e7950961c38cc09d0.html#afd6ada0769c6316e7950961c38cc09d0).
>
>	`continuous_playback_look_ahead`
>
>>	The number of quanta the engine looks ahead when streaming. See the [Wwise AkInitSettings::uContinuousPlaybackLookAhead parameter](https://www.audiokinetic.com/library/2015.1_5418/?source=SDK&id=struct_ak_init_settings_a2baedc80c64280eb0db21f94fe7ed78f.html#a2baedc80c64280eb0db21f94fe7ed78f).
>
>	`num_samples_per_frame`
>
>>	Sets the number of samples per audio frame. See the [Wwise AkInitSettings::uNumSamplesPerFrame parameter](https://www.audiokinetic.com/library/2015.1_5418/?source=SDK&id=struct_ak_init_settings_a2438a18ece872c83175f70d7f70d659b.html#a2438a18ece872c83175f70d7f70d659b).

platform-specific sound engine settings common to all platforms:

>	`lower_engine_default_size`
>
>>	Sets the size of the default memory pool for the Wwise lower engine. See the [Wwise AkPlatformInitSettings::uLEngineDefaultPoolSize parameter](https://www.audiokinetic.com/library/2015.1_5418/?source=SDK&id=struct_ak_platform_init_settings_a40a6eb4f29f8d3761772a5c8ec485167.html#a40a6eb4f29f8d3761772a5c8ec485167).
>
>	`lower_engine_ratio_threshold`
>
>>	Sets the percentage of occupied memory where the sound engine should enter in Low memory mode. See the [Wwise AkPlatformInitSettings::fLEngineDefaultPoolRatioThreshold parameter](https://www.audiokinetic.com/library/2015.1_5418/?source=SDK&id=struct_ak_platform_init_settings_aeae076dad1a51e2272441ddddda126ca.html#aeae076dad1a51e2272441ddddda126ca).
>
>	`num_refills_in_voice`
>
>>	Sets the number of refill buffers in the voice buffer. See the [Wwise AkPlatformInitSettings::uNumRefillsInVoice parameter](https://www.audiokinetic.com/library/2015.1_5418/?source=SDK&id=struct_ak_platform_init_settings_a953085ec90c00bf53ddafc8af700277d.html#a953085ec90c00bf53ddafc8af700277d).

`xb1`

>	Sound engine settings specific to the Xbox One platform.
>
>	`shape_default_pool_size`
>
>>	Sets the size of the SHAPE memory pool for the Wwise engine. See the [Wwise AkPlatformInitSettings::uShapeDefaultPoolSize parameter](https://www.audiokinetic.com/library/2015.1_5418/?source=SDK&id=struct_ak_platform_init_settings_a923d2df6afbe6efdd9975bb3de955b2b.html#a923d2df6afbe6efdd9975bb3de955b2b).
>
>	`xma_max_voices`
>
>>	Maximum number of hardware-accelerated XMA voices. See the [Wwise AkPlatformInitSettings::uMaxXMAVoices parameter](https://www.audiokinetic.com/library/2015.1_5418/?source=SDK&id=struct_ak_platform_init_settings_a02915351cbd48982f22b68c3b812a5f5.html#a02915351cbd48982f22b68c3b812a5f5).

`android`

>	Sound engine settings specific to the Android platform.
>
>	`sample_rate`
>
>>	Sets the sampling rate. See the [Wwise AkPlatformInitSettings::uSampleRate parameter](https://www.audiokinetic.com/library/2015.1_5418/?source=SDK&id=struct_ak_platform_init_settings_a2bf6f000f256b146d6cd36401a234b85.html#a2bf6f000f256b146d6cd36401a234b85).

`communication`

>	`enabled`
>
>>	Determines whether or not the Wwise Authoring Tool Profile can connect to the Stingray engine.

[Back to top](#top)

## PhysX settings

All PhysX-related settings are placed in a PhysX block like this:

~~~{sjson}
physx = {

	cpu_dispatcher_threads = 2
	gpu_acceleration = true

	win32 = {cpu_dispatcher_threads = 4}
	android = {cpu_dispatcher_threads = 4}

	step_frequency = 60
	max_substeps = 16
}
~~~

Generic options are placed in the root block. You can override these generic settings for any one platform by specifying them in the platform specific blocks.

`cpu_dispatcher_threads = 2`

> Specifies the number of CPU threads that PhysX should use.

`gpu_acceleration = false`

> Specifies whether PhysX should use GPU acceleration or not.

`step_frequency = 60`

> Specifies the frequency of PhysX substeps. 60 means physics is stepped at 60 Hz.

> **Note:** If less time has passed in the scene than the step length (1/60 = 17 ms) the engine will step with the time that has actually passed. So by setting the substep frequency to a low value (say 15) you will get variable time stepping (as long as the frame length doesn't exceed 1 / 15).

> Variable stepping can make physics behave more erratically, so use it with care. On the other hand, it means that only a single substep is needed, regardless of how much time has passed, so performance is better.

`max_substeps = 4`

> Specifies the maximum number of substeps that physics should take every frame. A value of 4 means that a maximum of 4 substeps will be taken every frame. With 4 substeps at 60 Hz the maximum time that physics can process per frame is 4 / 60 = 67 ms. If frames are longer than that, the physics will run in slow-motion with respect to the rest of the game.

`async_timestep = false`

> If set to *true*, the physics time step will run asynchronously with the rest of the engine. This means that keyframed physics lag one frame with respect to graphics. On the other hand, it can increase performance.

`swept_integration = true`

> Set this to *false* to disable support for swept integration in PhysX scenes. This can improve performance if you don't need swept integration support.

`apex_cloth = true`

> Set this to *true* to activate apex cloth. See ~{ Enable Apex Cloth }~.

`apex_cloth_lod_unit_cost` and `apex_lod_resource_budget`

> Configures the cloth simulation budget.

[Back to top](#top)

## Custom settings

You can specify additional settings files to load and merge with the current file using:

`INCLUDE = ["custom_settings", "more_settings"]`

This can be a string or an array of strings. Objects in the included settings files will be merged and other things, like numbers or arrays for example, will simply override the settings in the starting settings file. So if *settings.ini* looks like this:

~~~{sjson}
INCLUDE = "test"
overwritten = false
scope = {
	overwritten = false
	not_overwritten = "yes"
}
~~~

and **test.ini** contains the following:

~~~{sjson}
overwritten = true
scope = {
	overwritten = true
	added = 5
}
~~~

then the actual loaded settings will be:

~~~{sjson}
overwritten = true
scope = {
	overwritten = true
	not_overwritten = "yes"
	added = 5
}
~~~

 > **Note:** INCLUDEs can be put inside an object and in that case the included file will be loaded inside that object and not at the root level.

[Back to top](#top)

## Script data

Use the `script_data` block to set custom information that your project's Lua script can read by calling `Application.settings()`.

`script_data = {
	project_script = "path/to/appkit/project/boot/script"
}`

`project_script`

>	If you are using the Appkit, you can use this setting to specify the name of the *.lua* script that the Appkit should load at startup. This setting is optional; if you omit it, the Appkit will look for a `script/lua/project.lua` file. Note that like most resource settings, you don't need to add the *.lua* extension at the end of the resource name.

[Back to top](#top)

## Network settings

All network settings that are not platform-specific are placed within a network block.


~~~{sjson}
network = {
	reliable_send_buffer_size = 8192
	reliable_receive_buffer_size = 8192
	log = "%APPDATA%\\Company\\Project\\network_logs\\network-%UTCDATE%-%UTCTIME%-%RANDOM%.ndp"
	...
}
~~~

`reliable_send_buffer_size = 8192`

> This setting is only available in development builds to make it possible to quickly tweak the value. It does not exist in release builds. It sets the size in bytes of each buffer used to store reliable messages that has not been acknowledged on the remote peer yet.

`reliable_receive_buffer_size = 8192`

> This setting is only available in development builds to make it possible to quickly tweak the value. It does not exist in release builds. It sets the size in bytes of each buffer used to store incoming reliable messages from each peer.

`log = "%APPDATA%\\Company\\Project\\network_logs\\network-%UTCDATE%-%UTCTIME%-%RANDOM%.ndp"`

> This setting is only available in development builds. It causes the engine to write all network communication data to a file so that you can analyze it later.
>
>	For a list of the special tags you can use in this path, see [Special file and path name variables].

[Back to top](#top)

## User settings

`user_settings = "%APPDATA%\\Company\\Project\\user_settings.config"`

>	Sets the file where user settings will be stored.
>
>	For a list of the special tags you can use in this path, see [Special file and path name variables].

[Back to top](#top)

## Log consoles

`local_console_log = "%APPDATA%\\Stingray\\network-test\\console_%RANDOM%.txt"`

>	Specifies a path and filename where the engine will save its console logs. Optional.
>
>	For a list of the special tags you can use in this path, see [Special file and path name variables].

`remote_console_log = "\\\\dc01\\public\\temp\%HOSTNAME%\%UTCDATE%-%UTCTIME%.txt"`

>	Specifies a path and filename where the engine will copy its full console log when the project quits. Optional.
>
>	For a list of the special tags you can use in this path, see [Special file and path name variables].

[Back to top](#top)

## Crash report

`crash_report = "%APPDATA%\\Company\\Project\\crash_reports\\crash-%UTCDATE%-%UTCTIME%-%RANDOM%.txt"`

>	Specifies a path and filename where the engine will write a crash report in the event of a fatal error. These can help debug problems after the game has been released. Currently, crash reports are only supported for release builds running under Windows.
>
>	For a list of the special tags you can use in this path, see [Special file and path name variables].

[Back to top](#top)

## Steam settings

All Steam specific settings are placed within a steam block like this.

~~~{sjson}
steam = {
	enabled = true
}
~~~

`enabled = true`

This can be used to turn off Steam support. The default is that Steam is enabled. When Steam is enabled, the Steam singleton will exist and otherwise it will not exist.

`notification_position = "bottom-right"`

> This specifies where the steam popup notifications appears on screen. Possible values are:
>
> * **top-left**
> * **top-right**
> * **bottom-left**
> * **bottom-right**

[Back to top](#top)

## XB1 settings

The following settings define the XB1 APU heap allocation size.

~~~{sjson}
xb1 = {
	//memory = {
	//	apu_heap_size = 67108864
	//	apu_heap_non_cached_size = 1048576
	//}
}
~~~

`apu_heap_size`

>	Specifies the amount of cached heap memory allocated for XB1 APU.

`apu_heap_non_cached_size`

>	Specifies the amount of non-cached heap memory allocated for XB1 APU.

[Back to top](#top)

---
Related topics:
- ~{ About the project structure }~
---
