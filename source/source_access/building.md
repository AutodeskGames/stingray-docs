# Building Stingray from source

This topic describes how to build the Stingray engine and editing tools from a local copy of the source code and libraries.

## Pre-requisites

-	You must have an up-to-date local copy of the source code for all platforms you need. That means the main `stingray` repository, as well as the submodules for any private console platforms that you have access to.
-	You must have installed all the tools described in the `readme.md` file for your branch of the Stingray source repository.
-	You must have the `SR_LIB_DIR` environment variable set up to point to your Stingray library directory. See ~{ Library dependencies }~.

## Things to know about the build system

### `make.rb`

-	The main entry point to the build system is the `make.rb` script at the top level of the Stingray source code repository. Use this script to build all the parts of the product, on all target platforms, in all build configurations.
-	`make.rb` relies on CMake to set up and carry out the builds for the runtime engine, and invokes the `msbuild` tool to build the C# solutions for the Stingray Editor back-end application and legacy editing tools.

### Platforms

-	The editing tools can only be built on Windows, for the 64-bit Windows target platform.
-	The runtime engine can be built on Windows for all target platforms except iOS. It must be built on a Mac OS X machine for iOS.

### Outputs

By default, `make.rb` places all generated binaries and other required files under the `build/binaries` sub-directory. In a full build on Windows, this output directory contains:

-	`core`: Lua scripts for the editor viewports and renderer settings.
-	`editor`: the Stingray Editor executables.
-	`engine`
    -	`<platform>`: The engine runtime and data compiler for each platform.
-	`tools`: Legacy Bitsquid tools, such as the Unit Editor and Material Editor.
-   `tools_external`: Third-party editing tools.

You can specify a different output location using the `--output` command-line option.

## Building on Windows

The simplest way to build everything is to run `make.rb` on a 64-bit Windows machine.

```
> make.rb
```

This downloads all required libraries to your computer. Then it builds the Stingray Editor, the runtime engine, and the legacy authoring tools using the default `dev` build configuration (see ~{ About Stingray build configurations }~). It also copies the `core` content files required by the Stingray Editor to the output directory.

## Building the engine for other platforms

To build the runtime engine for a specific platform, add the `--platform` command-line parameter.

For example:

```
> make.rb --platform android
```

Accepted platform values are `win32`, `win64`, `ios`, `android`, `xb1`, `ps4`.

### iOS

To build the engine for iOS, note that you must run the `make.rb` script on a Mac. Specifying the platform target is optional, since iOS is the only target that can be built on the Mac.

#### iOS with Xcode 8

Code signing is mandatory in Xcode 8. If you are using iOS 8, you need to set one additional environment variable before you run `make.rb`: `SR_IOS_DEVELOPMENT_TEAM`. Set its value to the numeric identifier of your Apple Development Team. For example:

`export SR_IOS_DEVELOPMENT_TEAM=5557727`

### Xbox One

To build the engine for Xbox One:

-	you must have the `DurangoXDK` environment variable set up to point to the directory in which you have installed the Xbox One platform SDK.

This environment variable should already be set up by the SDK installer.

### PlayStation 4

To build the engine for PlayStation 4:

-	you must have the `SCE_ROOT_DIR` environment variable set up to point to the root directory in which you have installed the PlayStation 4 platform SDK.
-	you must have the `SCE_ORBIS_SDK_DIR` environment variable set up to point to the directory that contains the version of the platform SDK required by Stingray.

These environment variables should already be set up by the SDK installer.

## Customizing builds

Once you have the default build process working, you can try customizing it to add or remove support for various features and components.

You can control the behavior of the `make.rb` script by specifying a variety of options on the command line. For details on these, run:

```
> make.rb --help
```

If you want to customize the build process further, start by studying all the steps in `make.rb` carefully to understand the main steps in its process. The CMake build relies on scripts located in the `cmake` sub-directory, and configuration files distributed throughout the source tree. If you are familiar with CMake, you can modify these files yourself if you need to make granular changes to the build.

For background information that can help you understand how the system works, see the [CMake documentation](http://www.cmake.org/documentation/).
