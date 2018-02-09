# Live settigns

3dsMax Interactive being data-driven, we have exposed a multitude of behaviors in Live through .ini files, which are all in a human-readable format (JSON). These include settings such as navigation speeds, modes, teleport behaviors, icons, debugging tools, component definition etc. In this section, we will give an overview of what each of these setting files, found in the "/settings" folder, does.

- behavior_settings.ini: Contains behavioral settings common to multiple behaviors in Live, such as navigation speed, mouse sensitivity, etc.
- component_paths.ini: Contains references to all the component scripts that Live uses. These are used to be able to include and load them automatically.
- component_config.ini: Defines which components should be loaded by Live
- component_settings.ini: Exposes many settings used by all the Live components.
- input_settings.ini: This settings file defines which inputs will get mapped and used in Live. The input defined will raise an event through the EventManager.
- navigation_settings.ini: Contains all settings relevant to navigation modes in Live.
- revit_live_scene_settings.ini: This file contains empty settings that get overwritten by the Live data
- vr_settings.ini: Contains all settings relevant to VR, including navigation, input mappings, tools settings, etc.
