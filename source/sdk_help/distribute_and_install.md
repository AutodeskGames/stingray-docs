# Distribute and Install a Plug-in

notes:

-	installing with engine plug-ins means copying the dlls to the right plugins folder
-	deploying with dll plugins requires the user to adjust their manifest file to package the DLLs
-	if your plugin adds content to the project, the user may need to add that content to their resource packages if they don't use the default auto-loading
-	if your plugin wants to add Lua scripts and/or custom Lua flow nodes, you'll need to either have the user require those lua files in their project lua code, or else write an engine DLL that brings those Lua scripts into the lua environment.
