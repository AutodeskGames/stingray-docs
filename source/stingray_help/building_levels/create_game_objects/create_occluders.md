# Create occluder boxes

Occluder boxes are gizmo units that let you occlude objects that are behind other objects and not render them. For example, when rendering the interior of an architectural scene, you can prevent objects behind a wall or room from being displayed and hide them by occluding. Occluder box supports occluding of shadow casting of light if the occluder is placed between the light source and the object.  For instance,  you can control the light shining on skyscrapers and buildings.  Occlusion culling gives you significant performance improvements as the shadows and geometry of occluded objects are not considered by hardware resources and can be used to optimize the rendering.

Occlusion culling can be used to optimize scene rendering in terrain systems or architectural scenes, avoid shadow light casting on buidlings, perform particle system culling, and add collsion for physics objects.

For occlusion culling, Stingray uses frustum culling and first performs sphere culling to check the frustum plane against the sphere radius of objects in the world space. Objects passing the sphere test go through object-oriented bounding box culling (OOBB) where the bounds of the object are tested against the frustum plane. Finally, objects that pass the frustum - OOBB testing is rendered. For more details on frustum culling in Stingray see [here](https://gamedev.autodesk.com/blogs/1/post/353597490642337181).

In the level viewport, you can place the occluder box in front of the object to block the object’s geometry, while still calculating the shadows. Or you can place them on top of an object to block the light's shadow properties. For example, consider placing an occluder box on top of a building to block off the light shadows from affecting the interior of a closed building.

## Create an occuluder box

1. Do either of the following:

  	- From the main menu bar, select **Create > Occluder Box**.
  	- In the **Create** window (**Window > Create**), switch to **Helpers** tab and select Occluder Box from the **Rendering** section.
  	

2. In the level viewport, place the occluder box in front of the unit to cull so that one side of the occluder box covers the mesh of the unit.

  	The occluder box is a transparent yellow box and is invisible when you run the project.


3. Adjust the scale of the occluder box to fully cover the unit.  As you adjust the box to cover the bounds of the unit, the unit is culled and disappears from the viewport. Along with the main occluded unit, other objects get culled if they are within the bounds of the occluder box.

  	![](../../images/example_occluder.png)

4. On test playing the level, the culled units are invisible if they are within the range of the camera.
