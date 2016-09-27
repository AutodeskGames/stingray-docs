# Wwise data

## Game Project Content

The following data files provide Wwise functionality in a game project. See the ~{ WWise Workflow Tutorial }~ for information on working with Wwise in Stingray.

### Lua API

The Wwise Lua Api is exposed in if_wwise.cpp, which is located in the Wwise Plugin C++ project.

### Flow nodes

The Wwise Flow Nodes are made available through the Lua scripts found in the stingray-engine/core/wwise folder. They are a subset of the Wwise Lua API.

### Settings

By default, a newly created Stingray game project will be preconfigured with Wwise enabled. This includes:
- settings.ini wwise section, with wwise enabled.
- A separate Wwise content project directory alongside the new game project's game directory.

### Template

The wwise_authoring template in the editor/templates directory is used to create the Wwise Content project which gets created alongside new Stingray game projects.

### Native C++ API

The wwise_plugin::Wwise and wwise_plugin::WwiseWorldInterface classes can be used on the native side to interact with the Wwise Engine. These two classes are used by the Lua API in if_wwise.cpp to expose Wwise functionality to Lua scripts.
