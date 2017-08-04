# Navigation queries

Gameware Navigation provides a set of high-performance runtime queries for use against the NavData you have loaded into memory. You can use these queries to answer a wide range of perceptual questions about your terrain and your characters' movement opportunities, such as:

* Can a character move from here to there in a straight line?
* What are the triangles and their tag around a given position?
* What is the shortest path between two positions?

Several of these queries are exposed to Stingray through functions in the Lua API.

Note that all the queries provided by Gameware Navigation rely on NavData. Therefore, in order to run a query successfully in your gameplay Lua code, you must have already pre-generated a NavMesh for your level. For details, see the topics on [level editing](level_editing_navigation.html) and [NavMesh generation](navmeshgeneration.html).

For the full list of queries that you can run in your game, see the list of functions exposed by the `GwNavQueries` and `GwNavAStar` objects in the Stingray Lua API documentation, available [here](http://www.autodesk.com/stingray-help/?guid=__lua_ref_index_html).
