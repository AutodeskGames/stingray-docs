#Create a physics actor

To define how a spawned object moves or interacts in your game world, you set it up as a physics actor. For example, to add collision to an object, you configure the mesh by adding a physics actor using the **Unit Editor**.

Refer also to ~{ Basic physics concepts }~ for more detailed information on worlds, actors, and shapes.

1. In the **Asset Browser**, navigate to select the unit.

2. Double-click the unit to launch the ~{ Unit Editor }~.

3. In the **Unit Editor** tree view, right-click the asset and select **Create Physics Actor** from the pop-up menu.

	> **Tip:**  Ctrl+click to select multiple objects, then right-click and select **Create Physics Actors**.

4. Select the newly created actor in the tree view.

	The actor properties display in the properties panel on the right in the **Unit Editor**.

5. In the properties panel, set the following:
	- **Actor Template**: Set this mode to determine whether the actor moves (**Dynamic**) or never moves (**Static**) and collides with other actors. For example, you might set a ball actor to **Dynamic**, and the floor plane to **Static** so that the ball doesn't simply fall forever in the physics world.
	- For dynamic actors, set the **Mass** value to represent the weight of the object.
		(For example, 0.08Kg for the weight of a pinball.)
	- Ensure that **Enabled** is on.
	- Under the **Shape** heading, select a **Type** that approximately matches the shape of your object. For example, select **Sphere** for a ball, or **Capsule** for a bone. Note that the **Mesh** type is not supported for **Dynamic** actors.

8. Close the **Unit Editor** window and click **Save** when prompted.

---
Related topics:
-	~{ Global physics properties }~
-	~{ Unit Editor }~

Tags:
- collision
---
