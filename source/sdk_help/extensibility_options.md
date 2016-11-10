# All the ways you can extend Stingray

TODO: all the extensibility options, plus when and how you'd use them

-	editor plugin
	-	typically uses JS, may also include Lua
	-	optionally calling out to C
-	content plugins
	-	usually content is part of the project
	-	can be shared as a plugin in order to make it part of any projects
	-	use the "resources" extension
	-	can contain any content you would have in a project, like 3D assets, scripts, custom script Flow nodes
-	engine plugins
	-	a DLL written in C
-	custom Flow nodes
	-	implemented in Lua
	-	implemented in C, in an engine plugin
-	loading a C DLL into Lua as an extension module, or via FFI
