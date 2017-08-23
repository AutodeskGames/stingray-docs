# Lua or Flow: which do I use?

With {{ProductName}}, you have the choice between two primary ways of setting up interactive gameplay: Flow visual programming, and Lua scripting. You are free to choose either, or you can use both in tandem. So how do you choose?

The answer really depends on a number of factors that are specific to your project design and the team you work in. For example, the size and style of your project, the size of the team, your level of programming experience and experience working in other interactive engines.

This page provides some food for thought as you plan out your approach to authoring gameplay.

## Flow is a great choice because:

-	It is the easiest way to respond to the various kinds of events and triggers that can happen when a player experiences the interactive content at runtime.
-	Authoring Flow graphs is visual and intuitive, so even team members who have never programmed before can come up with complex and interesting player interactivity.
-	Designers can quickly prototype new ideas.
-	Using Unit Flow can help you keep your various types of units self-contained, so that their behaviors are self-contained and free of dependencies.

The biggest downsides of Flow are:

-	As the size of your project grows, your Flow graphs can become very large and unwieldy to maintain. You may be able to mitigate this somewhat by organizing your Flow graphs into chunks, saving those chunks as sub-flows, and calling them when needed by using the **External > Flow Subroutine** node.
-	You cannot debug Flow while it is being evaluated. The best you can do is to use the nodes in the **Debug** category to print strings to the log or to the display.

## Lua is a great choice because:

-	The Lua API is more extensive, and offers access to functions and subsystems that you can't call from Flow (unless you extend Flow with your own custom nodes). For example, things like loading and unloading resource packages can only be done in Lua.
-	Logic is typically much easier to code in Lua: things like comparisons, if-then-else constructions, loops.
-	Lua is typically more efficient, especially when you have loops that iterate many times.
-	You can debug your Lua code as it is running, set breakpoints, and view the current values of your variables. This becomes a larger and larger benefit as your gameplay becomes more complicated.

The biggest downsides of Lua are:

-	People who have not done much programming before may find Lua difficult or intimidating.
-	If you start from scratch, it can be challenging to structure your gameplay code in a sensible way -- to figure out what you need to happen at each step, how to code it, and how to organize the code into modules. To get started, use the Appkit that is built in to the template projects. It at least provides you with a basic framework that you can extend with your own customizations.

## The best choice of all:

Using both Lua and Flow together in combination, you can take advantage of the strengths of both approaches.

-	Programmers can use Lua to code logic into reusable functions, which they expose in custom Flow nodes.
-	Level designers invoke those custom nodes from Flow when that gameplay logic is needed.

This offers the best of both worlds. Your level designers benefit from the ability to construct interactive experiences out of building blocks without going to the deepest level of programming logic. They can also prototype creative new gameplay ideas on their own in Flow, and hand off to programmers for polishing, improvements to the algorithms or performance, or to make future maintenance easier. Meanwhile, your programmers benefit from the wider API available in Lua, the familiar scripting environment, and the possibility to use standard development tools like [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=jschmidt42.stingray-debug) to debug the behavior.

See also ~{ Communicating between Flow and Lua }~.

## What about C?

If you are an experienced programmer, you may want to use custom C or C++ code in your project. C code will typically run faster, so it can be useful for times where performance is key. Also, you may want to integrate third-party libraries or re-use existing C code.

If you can package your code into a dynamically linked library, you may be able to make Lua bindings for your functions, which you can call from the engine's Lua environment. Or, you may be able to use the LuaJIT FFI library to call the C functions directly from your Lua code. For details, see ~{ Calling C code from Lua }~ and its sub-topics.

Alternatively, you may be able to use the native plug-in APIs exposed by the interactive engine to write your own engine-level plug-in. See ~{ The Interactive Plug-in SDK }~.
