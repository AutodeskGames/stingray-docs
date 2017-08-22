# About engine configurations

The interactive engine comes in multiple different flavors, called "configurations".

The only real rule to remember is that you should always use the `Release` configuration to do any builds of your game that you distribute.

Otherwise, the difference between these configurations comes down to a tradeoff between the ability to debug what's going on inside the engine on one hand, and getting optimal performance and speed on the other hand.

## Comparison

`Release`

>	The `release` configuration is the smallest, fastest, most highly optimized version of the engine. It achieves this optimization by omitting a lot of code that is only useful during your project's design and development phase -- like error reporting, console connections to the editor, and performance HUDs. Always try to use this configuration for builds of your game that you intend to distribute outside your organization or team.

`Development`

>	The `dev` or `development` configuration is the one you'll use the most while you're actively working on your project. It's almost as fast and optimized as `release`, but it offers many features that are crucial during your development phase, like two-way communications with the editor. In addition, this configuration is somewhat more forgiving than `release`: you can deploy your project even if it contains compilation warnings.

**Note:** Developers with source access can also build the engine with a third configuration, `debug`, which lets you attach an external debugger like Visual Studio to trace function calls and data values in the C++ code that runs inside the engine. See ~{ About engine build configurations }~.

## When you deploy your project

When you use the **Deployer** panel to create a standalone build of your project for a target platform, you can choose which engine configuration to use for your deployment.

-	Try to use the `release` option whenever possible.
-	Use `development` if your project has content warnings that prevent you from using `release`, but you still need to make a build you can test on its own or distribute within your organization.

See also ~{ Using the Deployer panel }~.

## If you need to run the engine on its own

Occasionally, you may need to launch the engine application directly. In this case, the configuration you'll want to choose depends on what you are trying to accomplish. That said, it's generally safest to use `development` unless you know that you need a version that you can debug, or a version that has all the final optimizations of the `release` configuration.

For example, in order to connect the interactive editor to an instance of the engine that is running on an iOS device, you need to copy the iOS version of the engine over to the device and launch it. In this case, you'd almost always want to use the `development` configuration of the engine. See also ~{ Get started on iOS }~.
