# Share a shading environment between levels

If your project has multiple levels that need relatively consistent shading environment settings, you may want to share the same settings between all those levels so that you only have to change them in one place.

Since a shading environment is an entity, you can take advantage of entity inheritance to do this in a very flexible way, while retaining the ability for each level to override any settings that are needed only in that level.

**To share a shading environment:**

1.	Open a level, and save its shading environment as a new *entity asset*. This creates a new *.entity* asset in your project that has all the same settings as your level's shading environment. It also automatically sets the new entity as the *inherited asset* for the shading environment entity in your level. For details, see ~{ Create a new entity asset }~.

1.	Save the first level.

1.	Open a second level, and delete its existing shading environment entity from the ~{ Explorer panel }~.

1.	Place your new shading environment entity asset into the second level by dragging it from the ~{ Asset Browser }~ and dropping it into the viewport. This adds a new entity to the level that inherits all the components and properties of the entity asset. See ~{ Place an entity in a level }~.

1.	Save the second level.

1.	Repeat steps 3-5 for any other levels you want to use the same settings.

**When you want to make a change apply to all levels:**

Select the *entity asset* in the **Asset Browser** and make your changes in the ~{ Property Editor }~.

Since the entity asset is inherited by the shading environment entity within each of the levels, any changes you make in the asset's properties will automatically apply to all of your levels (unless an entity has already overridden that setting: see below).

Alternatively, you could make a change to the shading environment entity within one of your levels, and *transfer* that entity's settings back up to the inherited entity asset. See also ~{ Apply or discard overrides }~.

**When you want to make a change apply only to one level:**

Open the level, select its shading environment entity in the **Explorer** panel, and modify the settings in the **Property Editor**.

Since the entity in the level inherits from the entity *asset*, any modifications you make to it directly will override its inherited settings only within the current level. The inherited entity asset will be unaffected, as will all other entities that inherit from that entity asset.

---
Related topics:
-	~{ Using Entities in your Project }~
---
