# Set up the Live template

Once you have imported your content and added it to your level, you will need to set up a few things so your content interacts properly with all the runtime features of the Live template.

## Set up points of view

When you run a project based on the Live template, you have an easy way to move the camera between a list of pre-selected points of view on the scene. You can click the **Views** button on the right to see a list of all these points of view.

By default, a level has only one of these points of view set up -- the **Home** view. This default point of view is automatically computed by the project's Lua gameplay scripts when the project starts up, but you can influence its placement. See ~{ Modify the Live Home view }~.

You can also add your own points of view to the list by adding new camera objects to your level. Each camera you place in the level ends up as one entry in the list of points of view.

The display name for each point of view is taken from the `Name` script data key on its corresponding camera unit, if that script data exists. To customize the default display name, you need to add this script data to the camera unit, then customize its value for each camera you place in your scene.

1.	Add a camera to your level from the **Create** panel.

1.	Right-click the new camera in the viewport, and choose **Open Selected in Unit Editor**.

1.	Open the **Script Data** tab on the right side of the Unit Editor.

1.	Click the **+** icon to add a new script data of type "string".

	In the **Key** column, set the name to `Name`.

	In the **Default Value** column, set the value to a default name, like "Point of View".

1.	Save the camera unit in the **Unit Editor**, and go back to the main 3ds Max Interactive window.

1.	In the **Level Viewport**, select the camera you placed in the scene. In the **Property Editor** panel, you should see the script data key you just added, listed at the bottom. Change its value to a descriptive name for this camera's point of view, and save your project.

From now on, you only have to do step 6 for each new camera you add.

>	**Tip:** The easiest way to get a camera to show exactly what you want it to show is to set its point of view in the **Level Viewport** while in first-person mode. Switch the **Level Viewport** to show the level from the camera's viewpoint by clicking **Persp** at the top left of the viewport, then choosing the camera you want to set up from the **Cameras** sub-menu. Navigate in the level viewport until you see the point of view that you want to feature, then switch back to the **Persp** camera and save your level.

## Set up Tap and Go navigation

The Tap & Go navigation mode relies on a special kind of data called a Navigation Mesh, which represents the walkable areas of your terrain -- all the places that are flat enough to stand on, far enough from obstacles, with enough vertical space for a person to fit.

You need to re-generate this data any time you add a new unit to your level that you want to be walkable using Tap & Go mode.

1.	Open the **Navigation** panel: from the main menu, select **Window > Navigation**. (Note: not **Window > Navigation Lab**).

1.	Click **Generate NavMesh**. You should see a blue triangular mesh appear over all the areas that will be navigable using Tap & Go mode.

The default parameters in the **Navigation** panel create a navigation mesh that is appropriate for most people. You can experiment with the effect of changing these parameters to see how the walkable area is affected.

For more information on navigation and the navigation mesh, see the pages under the ~{ AI and pathfinding }~ section, especially ~{ Generate the navigation mesh }~.

## Set up physics

The Live template relies on physics data for several things, including navigation using the W, A, S and D keys, landing from Orbit mode, and the teleportation laser in VR mode. In order for these features to work with your own units, you must add static physics actors to your units.

The easiest way to add physics to a unit is to right-click it in the **Asset Browser** and select **Create Static Physics** from the contextual menu.

For more information on this topic, see ~{ Create a physics actor }~ and the rest of the pages in the ~{ Physics }~ section.

## Customize resource loading

The Live project does not automatically load all project resources into the game engine at runtime. Its boot package is set up to only load certain types of resources from certain folders in the project.

Typically, all new content that you add to your level should get included in the boot package automatically, as long as your level is saved under the `content/levels` folder. The boot package is set up to load levels from `content/levels`, and levels are automatically packaged with all their units included.

However, if you set up your own Flow or Lua scripts that spawn additional units dynamically, or if you keep content outside of the folders already used by the Live project, you may need to update the `boot.package` file to make sure that your content gets included in the bundle and loaded at runtime.

For details on packages, see the section on ~{ Loading and unloading content at runtime }~.

>	**Tip:** If you receive warnings about missing units, or you see unexpected purple question marks or purple materials when you run your project, the problem is almost certainly that the data is missing from the boot package. If all else fails, you can try adding a new line to the start of your boot package: `* = ["*"]`. This line makes the boot package include all resource types from everywhere in the project. However, this is not generally recommended, since it may result in loading extra resources that you don't really need at runtime, increasing the memory usage and loading time for your project.
