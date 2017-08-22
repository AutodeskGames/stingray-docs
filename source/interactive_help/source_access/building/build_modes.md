# About engine build configurations

This topic contains some information for developers about the different build configurations offered in the {{ProductName}} build system.

## Setting the build configuration

By default, `make.rb` only builds the `dev` configuration.

You can specify the configuration you want to build by adding the `--config` option to the command line when you call the `make.rb` script. For example:

```
> make.rb --config release
```

## Comparison

configuration   compiler optimizations   game creation code   full debugging options
--------------  -----------------------  -------------------  -----------------------
`dev`           yes                      yes                  no
`debug`         no                       yes                  yes
`release`       yes                      no                   no

## `dev`

This is the only build mode of the engine that works with the editor, and contains all functionality needed to create game content and compile data. Use this build mode for most tasks during your game production cycle.

## `debug`

This build mode turns on internal error checking, such as asserts. However, because it disables all compiler optimizations, it typically runs much more slowly than the `dev` configuration. It is therefore recommended for use only when necessary. For example, you may want to run the engine in the `debug` configuration if you need to debug engine code.

## `release`

This build mode is intended only for final builds of a game or application. It strips from the engine all code that is intended only for use during the production cycle, such as console communication, data compilation, etc. This makes your game run as efficiently as possible.

## .pdb files

By default, all configurations generate *.pdb* files. This makes it easier for customers with source access (and for Autodesk support) to track down the cause of any crashes that may occur in the engine and tools, regardless of which configuration was used to build the binaries.

You can disable the generation of these *.pdb* files by adding the `--nodebug` option to the command line when you call `make.rb`.
