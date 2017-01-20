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
stingray_win64_dev.exe --toolchain C:\work\toolchain
```

Run the engine using compiled data from a particular folder:

```{nohighlight}
stingray_win64_dev.exe --data-dir D:\Projects\testbed_data\win32
```

Run the engine using bundled data:

```{nohighlight}
stingray_win64_dev.exe --bundle-dir D:\Projects\testbed_data\win32_bundled
```

Run the engine using streamed data from a TCP/IP file server. The `--data-dir` is the directory on the file server the engine should use. The `--secret` should match the content of a `.stingray-asset-server-secret` file in that directory.

```{nohighlight}
stingray_win64_dev.exe --host 172.64.22.32 --data-dir D:\Projects\testbed_data\win32 --secret PqdjliMO52Tu4As+FxuJig==
```

### Compiling data

Cross-compile project data from the toolchain settings for a particular platform (`win32`, `xb1`, `android`, `macosx`, `ios`, `ps4`) :

```{nohighlight}
stingray_win64_dev.exe --compile-for ps4 --toolchain C:\work\toolchain
```

Cross-compile and bundle project data using the toolchain settings:

```{nohighlight}
stingray_win64_dev.exe --compile-for ps4 --bundle --toolchain C:\work\toolchain
```

Compile Win32 project data using a mapped core folder:

```{nohighlight}
stingray_win64_dev.exe --compile --source-dir D:\projects\testbed --data-dir D:\projects\testbed_data\win32 --map-source-dir core C:\work\toolchain
```

Compile and bundle Win32 project data:

```{nohighlight}
stingray_win64_dev.exe --compile --bundle --source-dir D:\projects\testbed --data-dir  D:\projects\testbed_data\win32 --bundle-dir  D:\projects\testbed_data\win32_bundled --map-source-dir core C:\work\toolchain
```

## Parameters

<!-- The following content is automatically generated. Do not edit by hand. -->


