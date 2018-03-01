# Customize the Live VR Minimap

The Live template offers a VR Minimap, which gives you a unique perspective on your scene.

The Minimap automatically works with any content that you add to your level in 3ds Max Interactive. However, you might want to customize which units are shown and hidden in the Minimap. For example, you might want to hide the roof of a building when you view it in the Minimap, so that you can get a good look at the interior.

To do this, you need to assign a category name to each unit you want to exclude, then set the visibility of those categories to `false`.

Models that come to 3ds Max Interactive through the Revit Live service will often be tagged with one of a preset list of category names, like `Roofs` or `Doors`. However, if you are adding your own custom content to the Live template, you will probably have to assign the category yourself using the instructions below.

**To assign a category to a unit:**

1.	Open your unit in the ~{ Unit Editor }~ by double-clicking it in the ~{ Asset Browser }~.

1.	Open the **Script Data** tab on the right side of the Unit Editor.

1.	Click the **+** icon to add a new script data of type "string".

	In the **Key** column, set the name to `Category Name`.

	In the **Default Value** column, set the value to the name of the category you want to assign to your unit. This can be any of the preset values that you'll find in the `settings/vr_settings.ini` file (see below), or any other value you want.

1.	Save the changes to your unit.

**To set the visibility of a category:**

1.	Open the `settings/vr_settings.ini` file in the 3ds Max Interactive **Script Editor** or in a text editor.

1.	Find the `units_excluded_from_minimap` setting (around line 149). This setting contains a list of category names, along with the visibility of that category in the Minimap:

	![](../../images/live_minimap_exclude_roof.png)

1.	If your category name is listed here already, change its value to `false`.

	Otherwise, add a new line, change the category name in the new line to match the category name you assigned to your unit, and set its value to `false`.
