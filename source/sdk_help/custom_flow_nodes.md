# Create Custom Flow Nodes

TODO:

-	in Lua or in C
-	in either case, you make an sjson definition (though two different formats!), and you create some code that defines how the node is implemented
-	use script flow nodes if you want to write something that can be embedded relatively easily into a project, and maybe easier to write
-	use C flow nodes if you need the fastest performance, or if you need your Flow nodes to call out to other C code (like other third-party libraries)
