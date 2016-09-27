# Test a level

There are quick ways to step into your level as you work on it, without needing to compile or run the entire project.

**To play the level**

1. Click the Play icon ![](../images/icon_Play.png) in the ~{ Toolbar }~.

	This launches the **Test Level** window, which lets you step into the world you've been building, and interact with all the game play elements you've added.

2. Navigate the test level using the following hotkeys:

	- Move forward: W
	- Move left: A
	- Move back: S
	- Move right: D


> **Tip:** To keep the mouse cursor visible when you enter Test Level mode, add the following lines to your project Lua file (found here: *script/lua/project.lua*):

```
function Project.update(dt)
 if stingray.Window then
  stingray.Window.set_show_cursor(true)
  stingray.Window.set_clip_cursor(false)
 end
end
```
**To enter game navigation mode**

1. Right-click and hold in the viewport to flip to game navigation mode, then use hotkeys to navigate. See ~{ Navigate in the Level Viewport }~ .

---
Related topics:
-	~{ Test a project }~
---
