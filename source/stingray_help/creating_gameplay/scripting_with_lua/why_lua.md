# Why Lua?

There are three main contenders for a gameplay programming language:

*	C/C++, optionally with dynamic loading and/or an interpreter to make it "more dynamic".
*	C#/Java, for example by Mono integration.
*	Lua/Python/Ruby, or another "dynamic" language.

Using C++ is already possible with Stingray, since the core engine is written in C++. However, we believe that many designers need a more lightweight, friendlier option for scripting gameplay: one that doesn't require frequent recompiling of code, and that doesn't require extensive formal training in programming.

C# and Java may be faster than the "dynamic" languages, and they do offer better refactoring tools, but they also come with heavy runtime environments. It is also debatable whether or not they are different %i enough from C++ to have a big impact on the productivity of gameplay programmers.

Unlike C#, which offers limited support for *Edit and Continue* on Windows, using a dynamic scripting language offers the great advantage of hot-reloading scripts during gameplay on any target platform, decreasing iteration times for designers. But which of the many languages is most appropriate?

## Advantages of Lua

Of the dynamic languages, Lua is a standout for several reasons.

### Speed
Using the LuaJIT just-in-time compiler, the execution speed of Lua outperforms other dynamic languages on many benchmarks, often approaching the speed of compiled languages. LuaJIT is typically rated as being among the fastest dynamic language implementations available.

### Simplicity
Lua has a very small, elegant and clean implementation that is easy to understand by becoming familiar with a few powerful core concepts that you can combine in interesting ways.

### Minimal runtime
Lua's runtime is exceptionally small in memory size, without sacrificing any flexibility and power.

### Familiarity
Lua already has a long history of use in the game industry, and is used as the scripting engine behind some of the most massively popular titles of the last two decades. Game designers and programmers are likely to have at least some passing familiarity with Lua already, and are also likely to encounter it again in future in their careers.

## Disadvantages of Lua

The main drawbacks of Lua are:

### Speed on consoles
Consoles and iOS do not allow just-in-time compilation. Therefore, the speed of Lua can be slow compared to C++, especially for math-intensive operations.

On these platforms we run LuaJIT in interpreter-only mode, which is still very competitive with other non-JITed language implementations. We also attempt to address this problem by making the Lua/C++ binding as lightweight as possible, and by making it easy to move costly operations to C++.

### Garbage collection
Garbage collection is not a good fit for real-time applications. Lua's incremental garbage collector ameliorates the problem, but walking the heap looking for garbage is still a costly operation.

We address this in our APIs by generating as little garbage as possible, and by keeping the majority of the data in C rather than in Lua. Gameplay programmers writing their own scripts should also take care not to generate excessive amounts of garbage. <!-- TODO: See also Optimizing memory usage and performance. -->

### No static typing
Dynamic typing is often faster during initial development. However, during later stages, type annotation provides valuable documentation, and compile-time checks make refactoring (such as renaming or removing a method) a lot easier. We believe that for big projects, static typing is usually a win.

To address this, we are working on a system that will provide users with type validation for the functions and objects in our Lua APIs when using the code editor widget embedded in the Stingray editor.

### No native threading
Lua has no native threading support. Threading has to be done by having a separate Lua state running on each thread. On the other hand, the thread programming model offered by most languages (i.e. a shared state with explicit synchronization) is generally too complicated to use in gameplay programming anyway.

A model with separate "worker Lua states" that can accept and process "jobs" from the main state (similar to the model proposed by [LuaLanes](http://cmr.github.io/lanes/)) is typically easier to work with.

# Conclusion

Ultimately, we believe that the disadvantages of Lua are outweighed by its benefits, particularly since many of the disadvantages can be mitigated somewhat by careful handling.
