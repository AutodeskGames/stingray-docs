# Place an entity in a level

Placing an entity in a level creates a new entity definition within that level. Changes to the new entity get saved within that level's *.level* resource when you save the level in the Stingray Editor.

When you load the level into your game at runtime, all of these placed entities are automatically spawned and added to the game world, with all of the components and property values you set up in the editor.

**To place an empty entity:**

An empty entity has no components and does not inherit from any entity asset. It is a blank slate for you to customize by adding new components.

1.	Open the ~{ Create panel }~ to the **Objects** tab.

1.	Click the **Empty Entity** object.

1.	Give your new entity a name, and click **OK**.

**To place an existing entity asset:**

Placing an existing entity asset into a level automatically sets the new entity to inherit components and settings from the entity asset.

1.	In the ~{ Asset Browser }~, find the entity asset you want to place into the level.

1.	Drag and drop the entity over the ~{ Level Viewport }~. Or, right-click the entity asset in the **Asset Browser** and choose **Spawn Entity** from the contextual menu.

Your new level is updated with a new entity definition that shares the same name as the parent entity asset you used to create it.
