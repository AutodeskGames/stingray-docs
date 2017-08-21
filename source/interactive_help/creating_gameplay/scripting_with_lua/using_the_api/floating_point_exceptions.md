# Avoiding floating-point exceptions

Mathematical operations in Lua that cannot return numeric results, such as dividing by zero, do not generate errors, Instead, they return non-numeric values such as `NaN` or `INF`. These values can then propagate through the code, since adding or multiplying a `#NaN` value results in another `#NaN`. Eventually, the value will end up in some system where it causes trouble and may make the engine crash. However, since this problem may occur some time after the initial mathematical operation that originally produced the `#NaN` value, it can be difficult to track down the real problem.

In order to avoid these problems, the interactive engine includes an optional mechanism for provoking exceptions whenever a floating-point operation returns one of these non-numeric values. The exception will result in an error message that helps you track down the source of the math operation.

To enable this mechanism, set the `floating_point_exceptions` value to *true* in your game's *settings.ini* file:

~~~{sjson}
win32 = {
	floating_point_exceptions = true
}
~~~

It is highly recommended that you enable this mechanism in your development builds, and disable it only for the final release of your game.

## Third-party modules

Third-party code is not always written to be FPU-safe. For example, there are legitimate reasons to work with `#Infs` and `#NaNs`. Sometimes code wants to work with such values wihout generating crashes.

If you use a module that provokes exceptions from the engine, you have two options:

*	Disable floating-point exceptions in *settings.ini*, and rely on other means of finding floating point errors instead.
*	Enable FPU exceptions, but avoid writing Lua code that triggers FPU exceptions in your module, if possible.

### LuaJIT

Unfortunately, the third-party LuaJIT module used by the engine can generate FPU exceptions in some select circumstances. However, disabling FPU exceptions for all of LuaJIT would mean that we would be unable to detect floating-point errors in any gameplay code, which would make floating-point exceptions mostly useless as a debug help tool.

Currently, we only know of one case where legitimate Lua code triggers an exception from LuaJIT: using a number greater than `2^31` as a table index. For example:

~~~{lua}
t = { [math.pow(2,31)] = 1 }
~~~

Therefore, when running with floating-point exceptions enabled in your game settings, you must always make sure your table keys are smaller than `2^31` in order to avoid triggering a floating-point exception in LuaJIT.

If you find any other valid Lua operations that cause floating-point exceptions in LuaJIT or any other code module built in to {{ProductName}}, please contact Autodesk Support and let us know.
