#Animate a shading environment with the Story Editor

By default, shading environments are contained in entities. You can animate entities in the **Story Editor**.

1. Select a shading environment entity from the **Explorer** panel.

2. In the **Story Editor** (**Window > Story Editor**), click ![](../images/icon_storyEd_addNew.png) to add a new story.

	Stingray automatically adds the the entity to a new entity track within the story.

3. Right-click the track to see the entity's components and component properties. For more information on individual components, see ~{ The Shading environment and post effects }~.

4. Select **Global Lighting > Skydome Intensity**.

	**Skydome Intensity** is added to a new track in the story.

5. Scrub to the frame or time you want in the **Story Editor** timeline, then press S or click ![](../images/icon_storyEd_addkey.png) to set a keyframe.

	The key uses the default value of the component property. For example, the default value of **Skydome Intensity** is 1.

6.  Scrub to another frame in the **Story Editor** timeline.

7.  Increase the **Skydome Intensity** value using the edit key fields in the **Story Editor** toolbar.

    > **Note**: When animating a property of a unit or entity, editing values in the **Property Editor** has no effect on keys in the **Story Editor**. When animating a unit transform (position, rotation, scale), you can use the **Property Editor** to edit animation values.

8.  Press S or click ![](../images/icon_storyEd_addkey.png) to set a keyframe.

9.  Interpolate between the values to see the lighting effects in the **Level Viewport**.

---
Related topics:
-	~{ Story Editor }~
-	~{ The Shading environment and post effects }~
-	~{ Create simple animations with the Story Editor }~
---
