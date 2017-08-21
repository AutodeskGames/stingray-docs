# Extending Lua to C using the LuaJIT FFI library

The runtime Lua environment hosted by the interactive engine is powered by the LuaJIT library. LuaJIT offers a very fast script interpreter and just-in-time compiler, in addition to several extensions to the base Lua API. One of these additional modules is its **FFI** library, which aims to allow easy access to C functions and data structures from Lua scripts without requiring any custom bindings on the C side.

If you have C code in a dynamically linked library, you should be able to take advantage of the FFI library to access that code from your project's Lua scripts.

>	**Note:** If you are new to LuaJIT FFI, see [this page](http://luajit.org/ext_ffi.html) for an introduction to the concepts and syntax involved.

This page shows a simple example of how to set this up. For more complex examples, use the information provided in the [FFI tutorial](http://luajit.org/ext_ffi_tutorial.html), [FFI API](http://luajit.org/ext_ffi_api.html) and [FFI semantics](http://luajit.org/ext_ffi_semantics.html) pages in the LuaJIT documentation.

## Step 1. Write and compile your C code

When you use the FFI library to access C code, you do not have to write any special binding code. Your code should be plain C. For example, the following code declares a function that calls the Windows operating system to display a dialog box:

~~~{c}
#include <windows.h>

bool __declspec(dllexport) confirm(const char *title, const char *message)
{
	int message_type = MB_YESNO | MB_TASKMODAL;
    int response = MessageBox(NULL, message, title, message_type);
	if (response == IDYES) { return 1; }
	return 0;
}
~~~

When you compile this code into a library, there is no need to link your C library expressly against LuaJIT, since your code has no dependency on Lua at all.

If you want to use functions from a third-party library instead of writing your own C code, you can usually use the library as-is as long as it has been compiled for the right processor architecture.

Note that:

-	You must compile your DLL for 64-bit targets. The engine will be unable to load your DLL if you compile for 32-bit targets.

-	The functions that you want to invoke through FFI must be exposed in your DLL as C code, to avoid the [function name mangling](https://en.wikipedia.org/wiki/Name_mangling) introduced by C++ compilers. If you want to write your DLL in C++ and compile it with a C++ compiler, make sure that you enclose the functions you want to expose inside an `extern "C" { ... }` block.

## Step 2. Load and call the C code

To invoke your C code from within your project's Lua scripts:

1.	Load the LuaJIT FFI library by calling `require('ffi')`.

2.	You need to provide LuaJIT with some knowledge about the C data structures, variables and functions that you will be calling. To do this, you declare them in your Lua scripts, *using standard C syntax*, in a string that you pass to the `ffi.cdef` function.

3.	Load your C library by calling the `ffi.load()` function. Unlike an extension library that contains bindings between Lua and C, you do not use the `require` function.

4.	Call your C code.

For example:

~~~{lua}
-- Load the LuaJIT FFI library.
ffi = require 'ffi'

-- Declare the C function.
ffi.cdef[[int confirm(const char *title, const char *message);]]

-- Ask LuaJIT to load the library that contains the function.
my_module = ffi.load('my_module')

-- Call the function.
local response = my_module.confirm("Important message!", "Do you really want to do that?")

-- Handle the return value.
if response then
	-- the player clicked "Yes"
else
	-- the player clicked "No"
end
~~~

If you are using the Appkit in your game, you could put this code in your *script/lua/project.lua* file in order to make it run when the game is started.

Note that after you do steps 1-3 to bring the C constructs into the Lua environment, you can then invoke the functions at any time you need them. So, you can do steps 1-3 once during your game's initialization, then call the functions from your scripts or from custom Flow nodes.

## Step 3. Make your library available to the engine

See ~{ Packaging a dynamically linked library }~.
