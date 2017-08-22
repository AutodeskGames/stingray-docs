# Defining resource packages

You define each resource package you want to load into your game in an SJSON file with the *.package* extension. Each package file contains a list of objects, in which the key of each object is a resource type, and the value of each object is a list of resource names.

For example:

~~~{sjson}
level = [
    "levels/city"
    "levels/town"
]

lua = [
    "lua/boot"
    "lua/game"
    "lua/freeflight"
    "lua/thread"
]
~~~

Note that the individual resources are listed without file extensions, since each list of resources refers only to a specific type of resource. For example, in the snippet above, the engine knows that the `levels/city` resource refers to the *levels/city.level* file on disk, since it is specified in the `level` list.

Package files, like other kinds of resources, can live anywhere in your project source folder. All the names of the resources you specify must always be relative to the root of the project, not to the location of the *.package* file.

## Handling dependencies

Whenever the engine loads a resource defined in a package, it automatically loads any other resources that resource refers to. So, for example, when the `levels/city` resource is loaded, any units and textures that have been placed in that level in the editor are also loaded automatically.

> **Note:** Automatic dependency tracking only applies to dependencies that are recorded explicitly in the resources being loaded. This does **not** include resources that are referred to only by Lua scripts. So, for example, if you need your Lua code to spawn a new kind of unit that has not already been placed in the level, you must add that unit resource to one of your package definitions in order for the resource to be available at runtime.

## Using wildcards

You can use the wildcard `*` character in your package files to match any string of characters. You can include it a maximum of one time within each resource name or resource type.

### Using wildcards in resource name

You can use a wildcard wherever you define a resource name. For example:

~~~{sjson}
level = ["levels/jungle/*"]
~~~

This line causes all levels inside the `levels/jungle` folder to be loaded when this package is loaded. (Any other content used in those levels is also loaded.)

A common use of this approach is to load all Lua scripts into the game in the boot package, since these scripts tend to be small in size, and are often needed throughout the game:

~~~{sjson}
lua = ["*"]
~~~

### Using wildcards in resource types

You can also use a wildcard when you specify a resource *type*. For example:

~~~{sjson}
* = ["*"]
~~~

This snippet causes all resources of all types to be loaded into memory when this package is loaded, wherever they are located in the source directory.

Putting this line in the boot package is a useful way of getting up and running quickly, without worrying about how your resources are distributed into packages. However, as your game grows, loading everything at once will produce slower and slower boot times, and will eventually cause the game to run out of memory (especially on platforms with less available memory, like mobile phones).

## Special keys

In addition to lists of resources, your package files can also contain the following special keys. Each key can appear no more than once in each package file.

`IGNORE_DEPENDENCIES = <boolean>`

>	This flag determines whether or not the engine loads any resources that are used by the resources listed in this package. See [Handling dependencies] above. If you set this option to `true`, only the resources that are explicitly listed in this file will be loaded.

`ADD_PACKAGES = []`

>	If you list any `.package` resources in the value of this key, all the resources listed in those packages will be automatically added to the current package.

`SUBTRACT_PACKAGES = []`

>	If you list any `*package` resources in the value of this key, all the resources listed in those packages will be *removed* from the current package.
>
>	This can be useful if you want to set up a *common* package that contains resources used on all levels. You can then subtract that package from each of your level packages. Since the *common* resources will always be loaded, they don't have to be in the individual packages.

`BUNDLE = <boolean>`

>	If you set this value to `false`, no bundle will be generated from this package. This can be useful if you want to define a package only for organizational purposes (e.g. for use with the `SUBTRACT_PACKAGE` setting), but you do not need to use it independently in your game.
