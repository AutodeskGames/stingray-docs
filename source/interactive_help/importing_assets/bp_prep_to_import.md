# Best practices: how to prepare a model for import

-	Name your materials

	The editor imports the names of the materials attached to your object(s). Label materials logically (in 3ds Max or Maya) to avoid confusion later.

-	Material Paths

	All material resource paths must be valid for automatic texture import to work.

	>	**Tip:** Using relative paths is the safest way to ensure that if you move your project folder, your materials remain connected.

-	Center Your Object to World

	The centerpoint of the world in 3ds Max or Maya becomes the center point for your object after you import it into {{ProductName}}.  Generally, you want to center your objects to allow for easy placement in your {{ProductName}} scenes.

-	Center Pivot

	Unless you have a special need for the pivot to be off center, make sure you have centered your pivot to the world.

-	Delete non-essentials

	This includes any non-essential geometry, bones, cameras, lights and so on. When exporting your model, include only the object(s) required.

-	Freeze Transformations (Maya) or Reset X Form (3ds Max)

	Freeze transformations or Delete x-form before exporting static objects.

-	Delete history

	Delete your history prior to export. (Delete All History in Maya.)

-	Remove Parents

	Remove any non-critical parent-child relationships. If you need to keep some, ensure they are properly named to avoid confusion later.

---
Related topics:
-	~{ Export an FBX file to use in {{ProductName}} }~
-	~{ Recommended FBX settings for export to {{ProductName}} }~
---
