# Importing Scan Data in Live

Importing Point Cloud Data is no different from importing any other content in 3dsMax Interactive, but there are certain elements to which you may want to pay particular attention.

First, you will need to export your PointCloud to the FBX format. AUtodesk Recap Photo supports this natively and can be used to import/export Point Clouds from other sources to FBX. Once you have the FBX file, simply drag and drop it into your File Browser in 3dsMax Interactive.

Point Cloud Data can be big. One thing to keep in mind is the number of triangles in your mesh. The smoothness and performance of the experience can be influence by many things, so make sure to run a few tests here before moving forward. To view the polycount in 3dsMax Interactive, click on the "View->Performance Hud-> Artist Performance" button in the Level Viewport.

![](../../images/live_scan_data_perfhud.png)

Some issues have been reported with the use of normal maps in conjunction with Point Cloud Data. If your texture seems to be mapped incorrectly, you will want to remove the normal map associated with the material on the Point Cloud Mesh.

Once this is done, simply place the mesh in your level then move/rotate/scale it to the right position. As with all project, you will also want to regenerate the Navigation Mesh and add a physics actor to your mesh (see "Setting up your content")

![](../../images/live_scan_data_normal_map.png)

> This mesh has about 4M triangles, and the normal map has been removed. There is also a single light in the scene, but shadows casting has been disabled on it to help with peformances. It runs at about 100 FPS, at a resolution of 1920x1080p, with a NVIDIA GTX 1060 GPU. Perfect for VR!


