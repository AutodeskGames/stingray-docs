# Designing a packaging strategy

{{ProductName}} does not place any restrictions or requirements on package structure. You can organize your resources into packages in any way that you decide is appropriate for your game. As long as as all the resources that the game needs at runtime are present in memory, it makes no difference to the engine how they got there.

There are a wide variety of strategies you can use for dividing your resources into packages. Which way you choose to do it in your game will likely depend on a variety of factors, including:

-	the size of your resources in memory,
-	the memory limits of your target platform,
-	your project's gameplay,
-	your tolerance for complexity in your project setup and scripts.

This page describes some common ways of structuring packages. You can adopt any of these strategies, combine them together, or do something completely different.

## One package per level

For games that have sequential levels, a common approach to packaging assets for runtime streaming is to define one package for each level. When the player finishes a level, you unload the package for the old level, load in the package for the new level, and then start the new level.

## One package per level with a separate loading world

As your levels get bigger and require more assets in order to start up, the time it takes for the levels to load increases. A common way to deal with this is to create a very small "loading" world, which is shown during the level transitions while each new level is being loaded. So, for example, a level transition might follow this pattern:

`load transition world => show transition world => unload old level => begin loading new level => show new level => unload transition world`

If your transition world is small enough to keep in memory at the same time as your other levels, you can load it in once at the start of your game (say, in your boot package) and keep it persistent in memory until the game shuts down. This avoids the delay involved in loading it during each level transition. So, the level transition patter becomes:

`switch to transition world => unload old level => begin loading new level => switch to new level`

## Multiple streaming packages per level

If your game has larger worlds, you may find that areas that you want to appear to the player as a single place might be too large to fit in memory as a single level with a single resource bundle. In this case, you will need to divide the area's assets into multiple packages, and load them in and out depending on the player's location.

For example, when the level begins, you stream in a package of assets that are used in the area surrounding the player. As the player approaches one of the edges of the area, you load in a package that contains the assets for an adjacent area, and spawn the units there or load a new level into the game to make those units appear in the adjacent area. When the player reaches the boundary, the new content is ready and the area appears seamlessly connected. Then, when the player gets far enough from the first area, you can unload its resource package from memory.

## Layered or modular packages

You don't have to divide a level's assets into packages according to their location or placement in the world. You can divide them according to any kind of scheme that suits the way you plan to use the assets in-game.

For example, you could make a base package that contains terrain and scenery, and stream in additional packages on top. For example, you might keep the assets for each character and enemy in its own package, and load in only the packages that correspond to the players or enemies that are actually used in the level.

This can help keep down the size of the resources you load into memory for each level, particularly if you determine at runtime which assets you're actually going to need. It also promotes the ability to re-use assets across multiple levels without duplicating them on disk in multiple bundles. However, the downside is that the more packages you create, the more complexity may be involved in managing when your game streams those packages in and out at runtime.
