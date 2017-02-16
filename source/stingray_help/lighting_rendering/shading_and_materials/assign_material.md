#Assign a material to an object

![UPDATED](../../images/updated.png)

Materials for meshes are assigned in the unit itself. When you place instances of the unit in a level, they inherit the material you have specified in the parent unit. You can assign different materials either to the parent unit for the entire project, or to individual instances of that unit within a level.

For example, your project uses a wooden box unit and you place multiple instances of that unit throughout your project levels. If you decide to tweak the color of the wood material, you can edit the material for the parent box unit, and the change is automatically applied to all instances of the box in your project.

If however you decide you need the same box, only metal, you can select any single instance of the wooden box and override the material properties for that box to make it into a metal box.

[![NEW](../../images/new.png "What else is new in v1.7?")](../../release_notes/readme_1.7.html) All stingray materials support negatively scaled objects.

## Assign a material to a unit for the entire project

1.	Double-click a unit in the **Asset Browser** to open the **Unit Editor**.

2.	In the **Unit Editor**, select the **Materials** tab, then click the folder icon and browse to select a .material file.

	This sets the material for the unit in the entire project. All instances of this unit receive the new material, unless they already use their own modified version of the material.

## Assign a material to an instance of a unit in a level

Do any of the following:

-	Select the unit in the **Explorer** panel or the **Level Viewport**, then click the **Material** drop-down in the **Properties** panel to select a different material.

-	Drag and drop a material from the **Asset Browser** onto the **Property Editor**.

	Note: If you clear the material after dragging and dropping, the unit reverts back to using the default material of its parent.

-	Drag and drop a material from the **Asset Browser** onto an object in the **Level Viewport**.

	> **Tip:** Hover your cursor over an object to preview the material on the object before it is assigned. The original material reappears when you move your cursor away from the object.

-	Select the **Place Tool** ![](../../images/icon_PlaceTool.png), then select a material from the **Asset Browser** and hover your cursor over an object to preview the material or click the object to assign the material.

---
Related topics:
-	~{ Standard material properties }~
---
