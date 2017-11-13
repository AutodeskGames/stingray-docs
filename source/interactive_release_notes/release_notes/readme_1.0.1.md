#Stingray 1.0.113.0 Release Notes

This document describes known limitations, workarounds, and other important information about  the 1.0.113.0 release of Autodesk Stingray. It is strongly recommended that you read this document before you run the program.

Unless otherwise noted in the **What's Fixed** section below, please be aware that this release contains the same **Known Limitations** described in ~{ Stingray 1.0 Release Notes }~.

##Known Limitations

This section lists known limitations and workarounds for Stingray 1.0.113.0.

- **GAME-9348** - Enabling **Custom Data Directory** returns an error

	**Workaround:** Do not enable **Custom Data Directory** (in the **Project Settings**).


##What's Fixed

- GAME-2494 StingrayEditorBackend.exe crashing if started without admin rights
- GAME-9562 Switching projects results in unexpected loading of levels from the previous projects
- GAME-9545 **Asset Preview** no longer works for meshes and materials after having previewed a skeleton
- GAME-9528 After a test play level, clicking/double-clicking some assets in **Asset Browser** give errors like [string "return Editor:viewport("fb458e15-2bde-4605-8e..."]:1: attempt to index a nil value
- GAME-9525 If OpenLastProject option, starting Stingray on a new project is really long
- GAME-9506 Right mouse button selects objects
- GAME-9491 Text can be edited in the Player even if TextComponent is not set as Editable
- GAME-9486 Engine crashes re-importing texture used by particle on screen
- GAME-9485 Licensing dialogs are not displaying correctly on high DPI resolutions
- GAME-9477 Saving a level, creating a particle, give "Failed to generate thumbnail for ..." warnings
- GAME-9466 Old level editor viewport not responding to mouse clicks after restarting the engine
- GAME-9441 Games Launcher | Stingray Documentation link is incorrect
- GAME-9439 s2d-content folder missing from installation
- GAME-9438 Terrain undergrowth with artifacts
- GAME-9429 **Asset Browser**: thumbnail no longer shown on renaming a material, and Asset Preview name is not updated
- GAME-9405 Properties panel fields for HAlign/VAlign do not update when switching selection between two actors with text components
- GAME-9352 Dropdown widget does not function properly
- GAME-9348 Enabling "Custom Data Directory" returns an error
- GAME-9336 New flows cannot be opened in old level editor
- GAME-9331 Right click an Asset in the level causes a Lua crash
- GAME-9328 Clicking on Terrain in Level and Finding in Browser causes crash
- GAME-9316 Crash occurs when User create a group in timeline and change the container/animation
- GAME-9312 Material overrides crash the engine
- GAME-9289 Window->Load layout causes a crash
- GAME-9274 Is some cases, the conversion of State Machine from bitsquid data model may fail.
- GAME-9239 **Asset Browser**: create new material/particle menu has overlapping menu items
- GAME-9225 Dragging-and-dropping an asset into the **Level Viewport** does not show the asset outline when the viewport is not focused and is on "When Focused"
- GAME-9222 Disable profiler stall warnings by default
- GAME-9209 Scaleform Studio player does not display content correctly when setting view alignment with the Lua API
- GAME-9208 Crash occurs when user insert actor in a group and by converting to container component
- GAME-9207 Terrain: Crash after saving change to terrain undergrowth unit
- GAME-9191 **Asset Browser**: material thumbnails are sometimes out of sync (display previous color map)
- GAME-9187 Compiling project with terrain object for mobile fails with "DDSImage::save() Invalid texture format!", image\pvr.cpp:236
- GAME-9174 Thumbnail generation fails for imported materials
- GAME-9170 Selecting the current level that was just saved gives "asset_preview_viewport_behavior.lua:563: Level not loaded" / "Current index offset is: 1"
- GAME-9162 Opening the icebergs level crashes engine on assertion failure h != RenderStateObject::NOT_INITIALIZED, render_world.h:262
- GAME-9161 Compiling the Iceberg project spams warning "Data / FBX: FbxSurfaceMaterial 'default' not found referenced by fbx geometry" 1000 times
- GAME-9156 new materials fail to render
- GAME-9138 Terrain: shadows are shaky (depth-only rendering is jittered)
- GAME-9131 Terrain: modifications sometimes do not get saved with the level and are lost
- GAME-9127 Terrain: Any texture plugged into the normal input of the terrain shader makes the normals of the terrain unit go flat
- GAME-9125 Importing a .fbx with both 'Default' and 'default' materials causes problems
- GAME-9123 Skeleton Editor: clicking the gear icon in the viewport returns an error
- GAME-9091 Terrain; Engine crashes when importing a height map
- GAME-9068 Flow: multiple inputs can be connected to a pin that should only allow one connection
- GAME-9063 Sometimes when restarting the engine, it doesnt work.
- GAME-9059 Deleting Materials can cause compile and viewport errors
- GAME-9057 Terrain Undergrowth also appears on other channels
- GAME-9052 Memory Perfhud not rendering text correctly in Test Level mode
- GAME-8988 Animation - Problem with skeleton update and skeleton/unit root movement
- GAME-8939 decal base node shader fails to compile when using texcoord nodes
- GAME-8933 Material variable nodes allow for spaces in "Name" input, which is not allowed for shader parameters
- GAME-8917 Asset Mgmt; Undoing a rename can take several undos going through intermediate names
- GAME-8903 **Explorer** panel Auto-Expand behavior is incorrect.
- GAME-8864 Reloading level does not always show all terrain undergrowth units until view is refreshed
- GAME-8770 Stingray Setup | Launcher is missing product description
- GAME-8765 New warnings on creating a basic-template project: Problem with texture core/editor_slave/units/preview/textures/checkerbox_25_percent_luminance.dds, duplicated with extensions: `.dds, .png`
- GAME-8732 Changing the material_variable node's input type displays the node properties multiple times in UI
- GAME-8710 Make Unique button should turn into "Open Graph" when material contains shader graph
- GAME-8703 Rename material crash if deployer is read only
- GAME-8688 **Unit Editor** viewport not rendering/refreshing properly with window resizing
- GAME-8675 Test level with space-shooter-project flow_space_- GAME gives "Flow: Flow axis node axis value is invalid 45b1e4e6"
- GAME-8516 No animation when using Play Animation in Level Flow
- GAME-8459 **Anim Controller** Editor: flow event's time attribute updates on each key press
- GAME-8311 Stingray setup Readme and System Requirements links go to a non-existent page, give a 404 error page
- GAME-8306 Shader Graph (Flow); Tab Key stop working on second material edit
- GAME-8254 else : [] in sjson not always working
- GAME-7481 Animation controller - Please update animation preview tile unit with the grid texture again.
- GAME-7428 Opening a vr-template project gives Assertion failed `file_exists` at exploded_database.cpp:223
- GAME-7258 Changing bones animation state causes an error
- GAME-7056 Level Editor; Select issue, with small objects in level when you scale the objects up
- GAME-5204 Enable Transparent baking in Beast
- GAME-3632 Level Editor; Comes up with Toolbar buttons missing
- GAME-3227 **Asset Browser**: Deleting currently viewed folder from Windows cause backend crash.
- GAME-3013 Error on trying to delete a folder: 'Index was out of range. Must be non-negative and less than the size of the collection.
