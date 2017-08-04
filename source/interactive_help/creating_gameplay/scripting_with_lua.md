# Scripting with Lua

The Stingray engine contains a versatile, built-in scripting component that provides control over gameplay and user interactions through Lua scripts. Most of the engine's subsystems are exposed to the scripting engine, allowing you to write virtually your entire game in Lua if you like.

This document gives an overview of how the Lua scripting engine is connected to the C++ engine, and how you can get your Lua scripts to run in the game. It also offers some tips on the best practices for using the Stingray Lua API, and help on using the Stingray **Script Editor**.

The topics in this document do not provide detailed descriptions of how the different engine subsystems work, even those that expose objects and functions to the Lua API (such as the physics or rendering systems). To understand those systems, begin by looking in the rest of the Stingray Help for conceptual information and overviews about how the subsystems work and how to use them in the editing tools. Then you can consult the API reference for a details on the scripting interface exposed by those subsystems.

For the detailed reference companion to all the objects and functions exposed in the Stingray Lua API, see [here](../../lua_ref/index.html).

## About Lua

Lua is a simple, lightweight, powerful and fast scripting language.

Since its initial release in the mid-1990s, Lua has risen to a place of prominence in the game design industry. Even programmers and game designers who have not yet used Lua themselves in a game project will likely recognize the name, as Lua has been used as the scripting engine for many of the most popular and influential games over the last 20 years, covering a wide variety of genres on all platforms. The list includes *Baldur's Gate*, *World of Warcraft*, *Angry Birds*, *Crysis*, and many others.

For an overview, see <http://en.wikipedia.org/wiki/Lua_(programming_language)>.

## Useful links about Lua

*	The official Lua site provides details about the language and its history, including its reference documentation. It also offers several ways to connect to the Lua users community, through forums and mailing lists.

	<http://www.lua.org/start.html>

*	The official Lua site also provides the helpful book *Programming in Lua*, which gives a good introduction to the various parts of the core Lua libraries:

	<http://www.lua.org/pil/contents.html>

*	Lua-users.org is a site run by and for programmers using Lua. It offers a wiki rich in useful tutorials and snippets, and an archive of the official Lua mailing list.

	<http://lua-users.org/>
