# Debugging Lua

Only one thing is certain in programming: there will be bugs. And the more of your project's behavior you set up in Lua, the more bugs there will be.

Fortunately, you don't have to just sit and take it -- you can fight back, by using a *debugger* to track down and eliminate the pests.

## About the Visual Studio Code extension

The best way to debug your {{ProductName}} Lua code is using our extension for the free, open-source [Visual Studio Code](https://code.visualstudio.com/) editor. With our extension, you can connect Visual Studio code to any running instance of the engine, set breakpoints, trace through your code, send console commands and Lua snippets to the engine, and much more.

If you're already familiar with using a debugger, head over to [the extension's homepage](https://marketplace.visualstudio.com/items?itemName=jschmidt42.stingray-debug) for specifics about how to set it up and use it.

## Debugging basics

For novice programmers, writing code can be an intimidating enough task on its own. Many shy away from learning how to use tools to help debug that code, concentrating instead on "simpler" ways to get feedback from the code, like printing debug messages.

However, learning to use debugging tools effectively is a worthwhile investment. It can make you far more efficient at isolating problems, but also encourages a mindset and coding habits that help you avoid producing similar bugs in future.

Like programming itself, debugging works best when you approach the problem in a structured way rather than diving in just anywhere. Make *hypotheses* about your code first, and use the debugging tools to test those hypotheses. For example, where do you think the problem might be located? Why? How would you tell if the problem occurs there or not? What assumptions does your code make? How could you test whether or not those assumptions are really valid?

Asking yourself questions like these can help keep you focused on finding the point at which the result you are *expecting* diverges from the result you are really *getting*, and why.

### The debugging workflow

Using a debugger to track down problems in your code typically follows three main steps, outlined below.

1.	**Pause execution.**

	The game evaluates Lua code a lot faster than you can follow. You have to pause or *break* the game in order to give yourself time to think and look around.

	You typically pause a game by setting markers called *breakpoints* at specific lines in your Lua scripts. Do this in Visual Studio Code by opening the Lua file that contains the code you want to interrupt, and clicking in the left margin next to the line numbers. When the game runs your Lua script and reaches that line, it will automatically pause the game.

	You can also pause a running game at any time by hitting the pause icon in the Visual Studio Code debugging toolbar while you're connected to the engine.

2.	**Inspect the code.**

	While your game is broken, you can access information about the state of the Lua environment. You can check the values that are assigned to local variables under the **Variables** section of the debugging tab, or by hovering over the variables in the code editor view.

	You can modify local variables, and continue the game using their modified values. You can also modify your scripts in the code editor view while paused, and reload them into the game. See also ~{ Reloading Lua code }~.

3.	**Advance.**

	Once you have learned all you can from the state of the code at one break point, you have several options for getting to another break point.

	You can *step* line-by-line through the script, executing one line at a time and pausing after each. While stepping, you can choose whether you want to descend into the current function or step over it to the next line. Alternatively, you can also *continue*, which resumes the regular flow of the game until the next breakpoint is hit or you pause the game again.

	While you're debugging, Visual Studio Code opens a floating toolbar that you can use to control these operations.

If you have not been able to identify and fix your problem, make a new hypothesis and test again.

## Other ways to debug

If you are interested in other ways to get information out of the in-game Lua environment, see ~{ Ways to get runtime feedback }~. This topic describes how to use Lua `print` statements and functions in the engine's runtime Lua API to send messages to the **Log Console** panel.

## Debugging and build configs

You can only debug the engine while it's running in `dev` configuration. For performance and security, the `release` config of the engine is optimized to remove the console connections that the debugger depends on for exchanging messages with the engine.

That means that you can debug:

-	when you use Test Level to launch your project from the interactive editor. ![Test Level](../../images/icon_test_level.png)
-	when you use Run Project to launch your project from the interactive editor, on any target platform. ![Test Level](../../images/icon_run_project.png)
-	the engine that the editor runs internally.
-	a standalone build that you package with the `dev` configuration.

But you can't debug:

-	a standalone build that you package with the `release` configuration.

---
Related topics:
-	~{ Ways to get runtime feedback }~
-	~{ Log Console }~
---
