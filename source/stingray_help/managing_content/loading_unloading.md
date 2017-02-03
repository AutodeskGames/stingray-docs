# Loading and unloading content at runtime

Assets like units, textures, and audio files all take up memory when you use them in your project. The bigger the asset -- the more complicated your unit meshes, the more detailed your textures and the longer and higher resolution your audio files -- the more memory they take.

There's a lot you can do to optimize your resources so that they take up less memory (see ~{ Optimize memory usage }~). However, as you add more and more resources to your project, the total memory size of your data increases, and your startup times get longer and longer. Eventually, your project will simply run out of memory.

To avoid this, you can divide your game's assets up into *resource packages*. You load these packages into memory when you need them, and unload them from memory when you are done with the resources they contain.

## Packages and game compilation

When you deploy a build your game, each package that you create is *bundled* into a single data file that contains all of the resources defined in the *.package* file. This ensures that each package ends up in a contiguous block of memory on disk, which minimizes the time it takes to load the resources from the game DVD or hard disk.

For more background, see ~{ About the content lifecycle }~.

## Defining and using your own packages

Each game has a *boot package*, which is automatically loaded at startup. For details about the boot package and its requirements, see ~{ About the boot package }~.

For details on configuring your own packages and streaming them in and out of memory at runtime, see ~{ Defining resource packages }~ and ~{ Loading and unloading packages }~.
