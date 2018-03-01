# Live settings

Much of the runtime behavior of the Live interface is determined by configuration files that you'll find in the `settings` folder of your project.

Open up any of these files in the 3ds Max Interactive **Script Editor** or in any text editor to see what settings they offer, and to try out the effect of changing values.

-	`behavior_settings.ini`: Contains behavioral settings common to multiple behaviors in Live, such as navigation speed and mouse sensitivity.

-	`component_paths.ini`: Contains references to all the component scripts that Live uses, so that the template's main Lua script can load them all automatically.

-	`component_config.ini`: Defines which components should be loaded by Live.

-	`component_settings.ini`: Exposes many settings common to all Live components.

-	`input_settings.ini`: Defines which inputs from controllers and keyboards get mapped and used in the runtime engine. The inputs you define raise events through the `Project.EventManager`, which the Live script components subscribe to for notifications of new inputs and events.

-	`navigation_settings.ini`: Contains all settings related to navigation modes in Live.

-	`revit_live_scene_settings.ini`: Contains empty settings that get overwritten by the Live data.

-	`vr_settings.ini`: Contains all settings related to VR, including navigation, input mappings, and tools settings.
