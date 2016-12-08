<!--

    IMPORTANT NOTE!

    This document is partially generated (everything below the Parameters section).

    You should not edit this part of the document directly, instead edit the source file:

        application/application/application_options.cpp

    And then run:

        ruby update_engine_command_line_parameters.md

    To update the parameter list.
-->

# Stingray engine command-line reference

The Stingray engine accepts all command-line parameters detailed on this page.

If you launch the Stingray engine from a command-line prompt, you can use these parameters to specify the project data the game should load, to kick off the compilation and/or bundling processes, or to control other specific aspects of the engine operation.

You can also provide command-line parameters when you set up a target in the Connections panel of the Stingray Editor. See ~{ Using the Connections panel }~.

All parameters are optional, unless otherwise specified.

## Accessing command-line parameters

In your gameplay code, you can access all of the command-line parameters that were used to start the engine by calling the `stingray.Application.argv()` function. You can use this to read and respond to any of the parameters listed on this page, or to custom parameters whose names and significance you define.

## Examples

### Running the engine

Run the engine using the project settings from a particular toolchain directory (this will also compile the data if necessary):

```{nohighlight}
stingray_win64_dev_x64.exe --toolchain C:\work\toolchain
```

Run the engine using compiled data from a particular folder:

```{nohighlight}
stingray_win64_dev_x64.exe --data-dir D:\Projects\testbed_data\win32
```

Run the engine using bundled data:

```{nohighlight}
stingray_win64_dev_x64.exe --bundle-dir D:\Projects\testbed_data\win32_bundled
```

Run the engine using streamed data from a TCP/IP file server. The `--data-dir` is the directory on the file server the engine should use. The `--secret` should match the content of a `.stingray-asset-server-secret` file in that directory.

```{nohighlight}
stingray_win64_dev_x64.exe --host 172.64.22.32 --data-dir D:\Projects\testbed_data\win32 --secret PqdjliMO52Tu4As+FxuJig==
```

### Compiling data

Cross-compile project data from the toolchain settings for a particular platform (`win32`, `xb1`, `android`, `macosx`, `ios`, `ps4`) :

```{nohighlight}
stingray_win64_dev_x64.exe --compile-for ps4 --toolchain C:\work\toolchain
```

Cross-compile and bundle project data using the toolchain settings:

```{nohighlight}
stingray_win64_dev_x64.exe --compile-for ps4 --bundle --toolchain C:\work\toolchain
```

Compile Win32 project data using a mapped core folder:

```{nohighlight}
stingray_win64_dev_x64.exe --compile --source-dir D:\projects\testbed --data-dir D:\projects\testbed_data\win32 --map-source-dir core C:\work\toolchain
```

Compile and bundle Win32 project data:

```{nohighlight}
stingray_win64_dev_x64.exe --compile --bundle --source-dir D:\projects\testbed --data-dir  D:\projects\testbed_data\win32 --bundle-dir  D:\projects\testbed_data\win32_bundled --map-source-dir core C:\work\toolchain
```

## Parameters

<!-- The following content is automatically generated. Do not edit by hand. -->

### General

#### --

Specifies the end of the list of arguments for the engine. Any arguments following `--` are assumed to be arguments for the game. They will be ignored by the engine but be available in `Application.argv()`. (Note that `Application.argv()` also includes all engine arguments.)

### Toolchain

#### --toolchain *DIRECTORY*

When this parameter is used, you don't have to specify `--data-dir`, `--bundle-dir` or `--source-dir`, instead your current project settings will be read from the folder `DIRECTORY/settings` and the directories will be inferred from there.

When you use the `--toolchain` parameter the data will first be compiled to the data directory and then the engine will be launched with that data. If you combine it with the `--bundle` parameter, the data will be bundled and then run from the bundle directory.

You can also use `--toolchain` with `--compile-for`. In that case, the data will be compiled for the specified platform and then the executable will exit.

### Runtime

#### --data-dir *DIRECTORY*

Specifies the directory for compiled data.

When running the engine, data will be read from this directory if specified.

When `--compile` is used, this parameter specifies the destination for the data that the engine compiles for your project.

#### --bundle-dir *DIRECTORY*

Specifies the directory for bundled data.

When running the engine, bundled data will be read from this directory if specified.

When `--bundle` is used, the compiler will build bundled data to this directory.

#### --bundle-url *URL*

Specifies an URL to load bundled data from. When running, the engine will stream bundle data from this HTTP directory.

#### --ini *FILE*

Tells the engine to load the settings from the specified `.ini` file instead of `settings.ini`.

#### --no-rendering

This disables all rendering functionality. It is used to save memory and processing time when you want to run the engine as a server.

#### --silent-mode

Tells the engine to boot in silent mode. In this mode, the engine won't prompt on asserts and errors

#### --init-forward

Tells the engine to perform initialization in forward mode. In this mode, the entire engine initialization is done before the update loop. This is default on all platforms except WebGL.

#### --init-deferred

Tells the engine to perform initialization in deferred mode. In this mode, part of the engine initialization is done in the update loop. This is the default on WebGL.

### Console

#### --port *PORT*

Specifies the TCP/IP port that the engine's console server will be hosted on. External tools can connect to this port to communicate with the running engine.

On most consoles, where only one copy of the engine can run at a time, the engine will use port 14030 unless one is specified with this parameter.

On Xbox One, port 4601 will be used, since that is the default port for XboxOne desktop connections.

On PC where there can be many engine instances running simultaneously, the console server will use a random free port unless one is specified. On the PC, the *Console* finds running game engines to connect to by searching for running executables called "stingray_*.exe" with open TCP/IP ports

#### --wait-for-debugger

Tells the engine to wait for a connection to the editor's Lua debugger and after receiving all debugging information (such as breakpoints). This ensures that the debugger can fully initialized before running, this solution is more robust than --wait.

#### --wait *SECONDS*

Tells the engine to wait for a connection to the logging console for the specified number of seconds before running. This ensures that the logging console captures early output from the game.

#### --wait-after-error *SECONDS*

Tells the engine to wait for a connection to the logging console if an error occurs. This ensures that early errors are captured by the logging console.

### Data Compiler

#### --compile

Instructs the engine to compile the data in your project's source directory instead of running the game.

If you use this parameter, you must also provide:

*	The source directory for the project, using the `--source-dir` parameter.

*	The destination for the compiled data, using the `--data-dir` parameter.

#### --bundle

Instructs the engine to create a bundle from the compiled data for your project instead of running the game.

If you use this parameter, you must also provide:

*	The directory that contains the compiled data, using the `--data-dir` parameter.

*	The destination for the bundled data, using the `--bundle-dir` parameter.

#### --source-dir *DIRECTORY*

When `--compile` is used, this parameter specifies the location of your project's source folder.

#### --compile-for *PLATFORM*

When `--compile` or `--bundle` is used, this parameter tells the engine which platform you want to compile the data for. The *platform* value may be `win32`, `ps4`, `android`, `ios` or `xb1`.

#### --continue

When `--compile` or `--bundle` is used, this parameter tells the engine to continue and run the game after completing the data compilation and/or bundling steps. Note that you cannot use this parameter when you are cross-compiling for a different platform than you are running on.

#### --enable-remote-cache

When this flag is enabled, the compiler will query the network for compiled data before compiling locally. This can speed up compilation times (but can also make compile issues harder to debug). When the flag is enabled, the compiler will look for a cache server for compiled files at an address specified by the environment variable `SR_REMOTE_CACHE_IP` and query it for compiled versions of certain file types.

#### --strip-debug

Tells the data compiler that debug information should be stripped from `.lua` files during compilation.

#### --map-source-dir *MAPPED_DIRECTORY* *ROOT*

This parameter can be used to map a source path to a different directory than the `--source-directory`. It is most commonly used to map the core folder, i.e.:

``` --map-source-dir core c:\work ```

This will cause any source path in the `core` folder to be loaded from `c:\work\core` instead of from `SOURCE_DIRECTORY/core`.

You could use this to specify other shared folders than `core`.

Note that the second argument to `--map-source-dir` specifies the *root* directory in the other location, not the directory of the mapped dir. The mapped directory name will be joined to this root.

#### --serial-compile

Tells the engine to compile in serial (no parallelization). This is typically used to debug the data-compile (as running in serial is simpler to understand). It can also be used if the parallel compile fails consistently as a way to continue working.

#### --resource-flag-true FLAG

Specifies that resources should be compiled with the assumption that the specified flag is true.

#### --resource-flag-false FLAG

Specifies that resources should be compiled with the assumption that the specified flag is false.

### Actions

#### --hold

Only used for debugging. Says that the engine should freeze in the boot process, so that you have a chance to attach a debugger to it before continuing.

#### --version

This will make the engine print its version number.

#### --dump-physics-metadata

Tells the engine to dump a physics metadata file after booting. This file is needed for each platform that we want to compile physics objects for. Pre-built files are found in `core/physx_metadata` so you should never need to use this parameter.

#### --thumbnail-server

Tells the engine to boot in *Thumbnail Server* mode. In this mode, the engine will listen to requests to generate thumbnail images for project resources and service them.

#### --run-unit-tests

Tells the engine to run its unit tests.

#### --test-for-minutes #### --test-for-hours

Enable long running unit tests `--test-for-minutes` and `--test-for-hours`

#### --only-test NAME

Only tests that match the specified `NAME` will be run.

#### --use-hard-asserts

Do a hard assert for each test, instead of reporting errors at the end.

#### --test-disk

Allow unit tests to touch the disk.

#### --test-network

Allow unit tests to use the network.

### File Client

#### --host *IP*

Used to run the engine with data streamed from a *File Server*. The engine will try to contact a file server at the specified *IP* address and stream the project from its `--data-dir` or `--bundle-dir`.

You can use a comma-separated list of IPs if you want to try to connect to multiple servers.

You can specify multiple host arguments to look for a file server on multiple addresses. This can be useful when the file server is a machine with multiple network cards.

#### --secret *SECRET*

A security option that prevents the file client to read arbitrary directories on the file server. In order to connect the client must specify a secret that matches the content of a `.stingray-asset-server-secret` file in the directory that is being served.

#### --no-file-cache

On mobile devices, the engine will cache the served files locally in order to speed up the streaming over wifi. If you for some reason want to disable that cache, you can use this parameter.

#### --file-cache-dir *DIR*

You can use this parameter to specify a different directory for the file cache than the default. You can also use it to enable file caching on non-mobile platforms.

#### --clear-file-cache

When this argument is used, all files in the local file cache are cleared.

#### --warm-file-cache

When this argument is used, all the streaming resources are touched at the boot of the engine, causing them to be cached locally so that they don't stall on later playback.

#### --install-dir *DIR*

When this argument is used, all the content from the file server will be installed locally in the specified directory, so that the engine can run without connection to the file server later.

#### --install-default

As `--install-dir` but uses a default directory for installation. Only available on iOS.

### Asset Server

#### --asset-server

Tells the engine to boot in *Asset Server* mode. In this mode the engine will listen for requests to compile data on port 14032 and service those requests.

### Editor

#### --editor-ini *FILE*

When this parameter is used, the engine will first load its settings from `settings.ini` (or whatever has been specified with the `--ini` parameter), then it will load the settings from the file specified in `--editor-ini` and use that to override the settings from `settings.ini`.

This is typically used to start the engine in editor mode.

#### --pumped

Forces the engine into pumped mode, where it won't advance to a new frame unless it is explicitly told to do so (over the TCP/IP connection).

#### --session-id *ID*

This sets an integer that can be queried with `Application.session_id()` to distinguish between multiple running copies of the application.

### Android

#### --apk-assets

#### --apk-ext-assets

#### --obb-dir

#### --cache-dir

#### --persistent-cache-dir

#### --save-dir

These are internal parameters used by the Java layer to pass information to the executable on Android.

### Window

#### --disable-default-window

This disables automatic window creation and puts the responsibility for windows creation on the gameplay layer

#### --viewport-provider *PORT*

Tells the engine to boot in *Viewport Provider* mode. In this mode the engine doesn't create its own window.

#### --rect *X* *Y* *WIDTH* *HEIGHT*

Specifies the dimensions of the engine main window.

#### --no-console

Do not let the engine automatically attach to the parent process console automatically

#### --window *HWND*

Specifies that the engine main window should be created as a child window to the specified window. (Windows only.)

#### --no-raw-input

Disables the use of raw WM_INPUT messages in the engine.
