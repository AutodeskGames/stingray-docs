# Export an FBX file to use in {{ProductName}}

The simplest way to send assets to {{ProductName}} from other Autodesk applications is to use the DCC tool link plug-in. (Refer to ~{ Interop with Maya, Maya LT, or 3ds Max }~.) However, you can also export assets using the standard FBX export in each application.

If you're exporting a file from Maya or Maya LT, note the following limitations:

- If the export UpAxis option does not match whatever is the world-up for the current scene, lights and camera may not be oriented properly in {{ProductName}}.
- There is a known limitation when exporting PhysX data from Maya or Maya LT. See ~{ Install the PhysX plug-in for your DCC tool }~ for details.

###To export your entire scene from Maya or Maya LT

1. Select **File > Export**.
2. Specify FBX as your file type.

###To export your entire scene from 3ds Max
1. Select **File > Export > Export**.
2. Specify FBX as the file type.

###To export elements of your scene in Maya or Maya LT
1. Select the elements you want to export.
2. Select File > Export Selected
3. Specify FBX as the file type.

###To export elements of your scene in 3ds Max
1. Select the elements you want to export.
2. Select **File > Export > Export Selected**.
3. Specify FBX as the file type.

---
Related topics:
-	~{ Recommended FBX settings for export }~
---
