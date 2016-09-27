# Debugging Lua

The Stingray Editor contains an integrated debugging system for the Lua code that runs in your game. This section describes how you can use it to track down problems and unexpected behaviors in your Lua scripts.

The integrated debugging system works when you test your game in the Stingray Editor, and when you use the Run Project command to run the game from the Stingray Editor.

For details on using this system, see ~{ Debugging basics }~ and ~{ Using the Debugger View }~.

If you are interested in other ways to get information like variable values from the in-game Lua environment, see ~{ Ways to get runtime feedback }~. This topic describes how to use Lua `print` statements and functions in the Stingray runtime Lua API to send messages to the **Log Console** panel.

## Debugging standalone games

If you want to debug the Lua code running in a standalone game that is not connected to the Stingray Editor -- that is, a game that you launch either by selecting **Edit > Level Testing > Run Project** from the main menu, or by starting up a deployed build of the game -- you can use the **External Console** application (Hotkey: Alt + 2).

The debugger in the **External Console** has most of the same features available in the integrated debugger.

---
Related topics:
-	~{ Using the Script Editor }~
-	~{ Ways to get runtime feedback }~
-	~{ Log Console }~
---
