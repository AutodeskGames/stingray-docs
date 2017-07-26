# Calling C code from Lua

You can make your project's Lua scripts execute C code. This can be useful for times where performance is key, since a function written in C will typically run faster than the equivalent function in Lua. In addition, you might be able to use this approach to integrate third-party libraries or re-use existing C code written for a different application.

To do this, you have a few options:

-	You can write *bindings* in your C code, which expose your C functions and variables into the Lua environment when your C library is loaded. You can do this both for your own custom code and for functions defined in third party libraries. For complete details, see ~{ Extending Lua to C using custom bindings }~.

-	Some third-party libraries have Lua bindings already available. These may be written by the library's creators, or by the community in the case of open-source libraries. If you can find a library that has pre-written Lua bindings, you may be able to use them as-is. However, it's likely that you will still need to re-compile the library in order to link against the same version of the LuaJIT library that is used in Stingray. See ~{ Extending Lua to C using custom bindings }~, skipping the steps about how to write the Lua bindings.

-	You can use the LuaJIT FFI library to load a plain C library without any special bindings, and call its functions directly from your Lua environment. See ~{ Extending Lua to C using the LuaJIT FFI library }~.

In all cases, you need to compile your C code into a dynamically linked library, and make that library available to the engine for loading at runtime.

>	**Note:** The material in this section is recommended for programmers with prior experience writing and compiling C code. C can be difficult for beginners to get used to on its own, even without the added complexity of managing the binding layer or the type conversions involved in using the FFI library.

## Platform support

You can only run C code in a dynamically linked library if your game targets a platform that supports dynamic linking and that links dynamically to LuaJIT.

-	Only <span style="color:#007700">**Windows**</span> targets are fully supported.
-	On <span style="color:#CC0000">**iOS**</span> and <span style="color:#CC0000">**Android**</span>, the engine supports dynamic linking at runtime, but links statically against LuaJIT. In addition, you cannot yet package your dynamic libraries into your deployed applications.
-	The <span style="color:#CC0000">**Xbox One**</span> and <span style="color:#CC0000">**PlayStation 4**</span> consoles do not support dynamic linking at all. If you need to run custom C code on consoles, you will need to link your code in statically and recompile the engine from source. See below.

## Another option: writing an engine plug-in

If you need to run C code on a platform that doesn't support dynamic linking, or if you can't get your code to work from Lua using either of the approaches described in the topics in this section, your other option is to use the plug-in API exposed by the Stingray engine.

This currently requires access to the Stingray source repositories; contact an Autodesk representative for details. See also the [Stingray Developer Help](http://www.autodesk.com/stingray-help?contextId=DEVELOPER_HOME).
