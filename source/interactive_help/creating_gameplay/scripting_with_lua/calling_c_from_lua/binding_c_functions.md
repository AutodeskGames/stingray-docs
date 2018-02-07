# Extending Lua to C using custom bindings

The Lua language includes a built-in binding layer that provides interoperability with C. If you have a C library that you want to call from Lua, you can include code in your library that exposes selected variables and functions from your C code into the Lua environment. Once you load the C library in your Lua script, you can then invoke these exposed functions and use these exposed variables directly in your Lua code.

This process is sometimes referred to as making an "extension module" or "extension library".

For background information, see the chapter about C libraries in the [Programming in Lua](http://www.lua.org/pil/26.2.html) book, or the main [Lua documentation](http://www.lua.org/manual/5.1/manual.html#3).

## Step 1. Get LuaJIT

The runtime Lua environment hosted by the interactive engine is powered by the LuaJIT library, which offers a very fast script interpreter and just-in-time compiler. You need to include a header file from this library, and link your C library against the LuaJIT library for your target platform.

{{#unless MaxInteractive}}
**If you have access to the {{ProductName}} source code:**

-	You can use the LuaJIT libraries that you will find in your library dependencies folder (`SR_LIB_DIR`).

**If you do not have access to the {{ProductName}} source code:**
{{/unless}}

1.	Download LuaJIT from its [project page](http://luajit.org/download.html) or from the Git repository given at that site.

	{{ProductName}} uses **version 2.1.0**. You must get the same version.

2.	Follow the instructions on [the LuaJIT installation page](http://luajit.org/install.html) to build the LuaJIT binaries for your target platform and processor architecture (e.g. x86 vs. x64 on Windows).

### Using Lua 5.1 instead

LuaJIT 2.x is supposed to be binary-compatible with Lua 5.1. That means that you should be able to compile and link your module with an official distribution of Lua 5.1 instead of needing to use LuaJIT. Similarly, if you're using a third-party module, you may even be able to use a pre-compiled *.dll* of the module, if it was compiled against Lua 5.1 for the same platform and processor as your app (e.g. Windows 64-bit).

## Step 2. Write your C code and bindings

Suppose that you have a simple C function such as the following, which calls the Windows operating system to display a dialog box:

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

To expose this function to the Lua environment through the Lua binding layer:

1.	Include the `lauxlib.h` file from the LuaJIT distribution.

2.	Write a wrapper function in C that reads input values from the Lua stack passed to it as a parameter, calls the function being exposed, and pushes any return values back to the Lua stack.

	To read values from the stack, you can a set of built-in functions provided by Lua, like `lua_toboolean`, `lua_tonumber` and `lua_tostring`.

	To push values back to the stack, use functions like `lua_pushboolean`, `lua_pushnumber` and `lua_pushboolean`.

	The `lauxlib.h` file also defines some helpful macros that simplify dealing with common cases. For example, `luaL_optstring` reads a string from the stack if the item at the specified index is a string, and returns a default value otherwise.

	For details on all of these, see the [functions list](http://www.lua.org/manual/5.1/manual.html#3.7) in the Lua documentation.

3.	Write a function named `luaopen_<dll_name>`, where `<dll_name>` matches the name of the dynamic library that contains this function. This function will be called automatically behind the scenes when you load your library into the Lua environment. The body of this function should register whatever wrapper functions and variables you want to make usable from your Lua scripts.

	The easiest way to do this is by calling the `lua_register()` function, which associates a variable name in the Lua environment with a C function.

For example:

~~~{c}
#include "lua/lauxlib.h"

// This function is a C wrapper that reads input values from the Lua stack
// that is passed as a parameter, and pushes return values back to the stack.
// It gets invoked when a function named "confirm" is called in a the Lua script.
int lua_confirm(lua_State* L)
{
	const char* message = luaL_checkstring(L, 1);
	const char* title = luaL_optstring(L, 2, "");
	int result = confirm(title, message);
	lua_pushnumber(L, result);
	return 1;
}

// This function is run automatically when the library is loaded into
// the Lua environment. It exposes the C wrapper function to Lua.
int __declspec(dllexport) luaopen_my_module(lua_State* L)
{
	lua_register(L, "confirm", lua_confirm);
	return 0;
}
~~~

## Step 3. Compile your library

You must compile your C code into a dynamically linked library for your target platform. Use your preferred tool for compiling C, whether an IDE like Visual Studio or a build system like CMake.

In order to do this, you will need to:

-	Add the LuaJIT or Lua 5.1 include directory to the include directories used to compile your code.
-	Link against the LuaJIT library or the Lua 5.1 library for the same platform and processor architecture.

## Step 4. Invoke your C code from Lua

In your project's Lua script:

1.	Load your library by calling the `require()` function.

2.	Call your C function by the name you assigned to it in the `lua_register()` function.

For example:

~~~{lua}
-- Load the C library.
require('my_module')

-- Call the function.
local response = confirm("Important message!", "Do you really want to do that?")

-- Handle the return value.
if response then
	-- the player clicked "Yes"
else
	-- the player clicked "No"
end
~~~

If you are using the Appkit in your project, you could put this code in your *script/lua/project.lua* file in order to make it run when the engine is started.

Note that after you load the library into the Lua environment, you can then invoke the loaded functions at any time you need them. So, you can require the library once when the engine is initialized, then call the functions from your scripts or from custom Flow nodes.

## Step 5. Make your library available to the engine

See ~{ Packaging a dynamically linked library }~.
