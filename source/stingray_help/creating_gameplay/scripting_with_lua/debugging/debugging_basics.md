# Debugging basics

For novice programmers, writing code can be an intimidating enough task on its own. Many shy away from learning how to use tools to help debug that code, concentrating instead on "simpler" ways to get feedback from the code, like printing debug messages.

However, learning to use debugging tools effectively is a worthwhile investment. It can make you far more efficient at isolating problems, but also encourages a mindset and coding habits that help avoid producing similar bugs in future.

Like programming itself, debugging works best when you approach the problem in a structured way rather than diving in just anywhere. Make *hypotheses* about your code first, and use the debugging tools to test those hypotheses. For example, where do you think the problem might be located? Why? How would you tell if the problem occurs there or not? What assumptions does your code make? How could you test whether or not those assumptions are really valid?

Asking yourself questions like these can help keep you focused on finding the point at which the result you are *expecting* diverges from the result you are really *getting*, and why.

## The debugging workflow

Using a debugger to track down problems in your code typically follows three main steps, outlined below.

1.	**Pause execution.**

	The game evaluates Lua code a lot faster than you can follow. You have to pause or *break* the game in order to give yourself time to think and look around.

	You typically pause a game by setting markers called *breakpoints* at specific lines in your Lua scripts. Do this in the **Script Editor** by clicking in the left margin next to the line numbers or by pressing **F9**. When the game is running your Lua script and it reaches that line, it will automatically pause the game.

	You can also pause a running game at any time by hitting the pause icon in the toolbar of the **Script Editor** or **Debugger View**.

2.	**Inspect the code.**

	While your game is broken, you can access information about the state of the Lua environment. You can check the values that are assigned to local variables in the **Debugger View**, or by hovering over them in the **Script Editor**.

	You can modify local variables in the **Debugger View**, and continue the game using the modified value. You can also modify your scripts in the **Script Editor** while paused, and reload them into the game. See also ~{ Reloading Lua code }~.

3.	**Advance.**

	Once you have learned all you can from the state of the code at one break point, you have several options for getting to another break point. You can *step* line-by-line through the script, executing one line at a time and pausing after each. While stepping, you can choose whether you want to descend into . Alternatively, you can also *continue*, which resumes the regular flow of the game until the next breakpoint is hit or you pause the game again.

	You can advance the code using the debugging controls in the toolbars of the **Script Editor** and the **Debugger View**. For details, see ~{ Using the Debugger View }~.

If you have not been able to identify and fix your problem, make a new hypothesis and test again.
