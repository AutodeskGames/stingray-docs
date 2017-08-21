# The Shading environment and post effects

Every time a game viewport renders a view of a game world, it needs to have a *shading environment*: a collection of global settings that affect the way the scene is lit and rendered, and that apply post-processing effects to the image.

The shading environment is not a unit like most other kinds of game objects that you place or spawn in your levels. It is an *entity*: a kind of object that is made up of modular *components*. In this case, each component of the shading environment entity is responsible for storing configuration settings that relate to a particular lighting or post-processing effect.

See ~{ Shading environment properties }~ for descriptions of all the settings you can modify in the shading environment, and ~{ Change shading environment properties }~ for details on the different ways you can change these properties.

## About shading environments, worlds and levels

Each level can have one and only one shading environment entity. When you create a new level, it automatically gets a new environment preset with default values for a clear sunny day, including a default image texture for the sky. Any settings you modify for that shading environment in the interactive editor get saved in your level and used every time your level is loaded.

If you ever want to start your level over with the default settings, you can delete the shading environment entity from the ~{ Explorer panel }~ and re-create it by choosing **Create > Shading Environment** from the main menu and giving it a new name.

Note that if you load multiple levels into the game world at the same time, the shading environment from the last level loaded is used.

Since a shading environment is an entity, you can also save a level's shading environment out to a *.entity* resource file in your project in order to reuse the same settings in other levels. See ~{ Share a shading environment between levels }~.
