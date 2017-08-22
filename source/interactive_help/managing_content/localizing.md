# Localizing your game

When developing your game, you may find it necessary at times to use different versions of a resource or asset depending on the game state, the player's preferences, the target platform, and so on. The classic example of this is when you need to translate your game into multiple different languages: each different language requires a whole new set of text, audio files, and possibly some new textures.

You could always store these different content variants in different resources, and use your Lua gameplay code or Flow graphs to decide which version of the resource you want to use. For example, you might have one unit that represents an intact building, and a separate unit that represents the building at a later stage of the game after an explosion has damaged its facade.

However, this approach does not scale well. As the number of variant resources you have increases, it becomes increasingly tedious and error-prone to manage by hand which resources get loaded.

{{ProductName}} offers some built-in mechanisms to make this process easier, depending on the type of resource you are dealing with. This section describes these different mechanisms and some approaches you can use to handle multiple versions of your game assets and resources.
