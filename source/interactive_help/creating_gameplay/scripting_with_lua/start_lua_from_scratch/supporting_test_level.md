# Loading the current level for testing

When a user working in the interactive editor tests the current level (e.g. using the ![Play](../../../images/icon_test_level.png) button), the editor does some special things in the engine's Lua environment that make it possible for the startup code to figure out what level to load. The Appkit handles this automatically, but if you are using a custom boot script you will have to handle a few things in your startup code.

## Level content

When the user starts testing a level, the current contents of the level may not yet have been saved in the editor. In order to allow the playtest to use the most recent unsaved content, the editor compiles it to a temporary level resource named `__level_editor_test`. It also creates a temporary resource package for the level and its resources, which is also named `__level_editor_test`.

Your code will have to load this resource package and level.

## Test variables

The editor also creates the following special variables in the Lua environment:

-	`LEVEL_EDITOR_TEST`: if `true`, the project has been started in the Test Level mode.

-	`LEVEL_EDITOR_TEST_LEVEL_NAME`: the *original* resource name of the current level, if any.

	For example, if you open a level named `content/levels/city.level` in the editor, the `LEVEL_EDITOR_TEST_LEVEL_NAME` variable will be set to match that name, even though the current content for the level ought to be read from the temporary `__level_editor_test` level.

	If the level has never been saved, this variable will be `nil`.

-	`LEVEL_EDITOR_TEST_READY`: if `true`, your code can go ahead and load the test level.

	The first time the engine calls your `init()` function during a level test, this value will always be `false`. Your implementation of `init()` should handle the case where `LEVEL_EDITOR_TEST` is `true` but `LEVEL_EDITOR_TEST_READY` is `false` by skipping any setup steps that depend on having the level in place. The editor will then re-call the global `init()` function with `LEVEL_EDITOR_TEST_READY` equal to `true` after it finishes some additional initialization steps of its own.

## Camera position and rotation

The editor also records the position and rotation of the main viewport's camera in the `stingray.Application` object. You can retrieve these values if you want to make the test level start at the current camera coordinates used in the editor.

To retrieve the values as `stingray.Vector3` objects, use the following calls:

~~~{lua}
local position = stingray.Application.get_data("LevelEditor", "camera", "position")
local rotation = stingray.Application.get_data("LevelEditor", "camera", "rotation")
~~~
