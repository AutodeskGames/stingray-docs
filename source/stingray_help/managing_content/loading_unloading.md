# Loading and unloading content at runtime

The template projects supplied with Stingray are configured to load all resources in the project into memory when the game starts up, and to keep all those resources in memory until the game shuts down. This is a convenient way for small projects and prototypes to make sure that the resources used in the game are always available when they are needed at runtime without additional configuration.

However, as you add more and more resources to your project, and the memory size of your data increases, your startup times will get longer and longer. Eventually, your game will simply run out of memory.

To avoid this, you can divide your game's resources up into packages. You load these packages into memory when you need them, and unload them from memory when you are done with the resources they contain.

## Packages and game compilation

When you deploy a build your game, each package that you create is *bundled* into a single data file that contains all of the resources defined in the *.package* resource. This ensures that each package ends up in a contiguous block of memory on disk, which minimizes the time it takes to load the resources from the game DVD or hard disk.

For more background, see ~{ About the content lifecycle }~.

## Defining and using your own packages

Each game has a *boot package*, which is automatically loaded at startup. For details about the boot package and its requirements, see ~{ About the boot package }~.

For details on configuring your own packages and streaming them in and out of memory at runtime, see ~{ Defining resource packages }~ and ~{ Loading and unloading packages }~.
