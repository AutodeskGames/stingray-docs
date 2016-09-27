# Parent and child materials

Stingray ships with a core group of standard 'parent' materials that provide many features. When you apply instances of this material to various objects in your level, you're effectively applying a 'child' material which inherits the properties of the parent.

Just like a child bone in a character skeleton hierarchy inherits some of the properties of its parent, (for example, as you rotate a shoulder joint the elbow and wrist joints also rotate), a child material in Stingray inherits certain properties of its parent material. The parent material is set up with certain colors, parameters, and values, and the child inherits those. You can edit and override those attributes on the child material to give the child different colors or other properties, but the setup of the parent material remains the same.

You can take any material in Stingray and make it a parent by clicking **Make Unique** in the **Property Editor**. When you make a unique material, you create whole new parent shader graph. This graph defines which properties are exposed for child instances of the material in the **Property Editor**. (See ~{ Create a parent material }~.)

If you want to edit the parent material graph, for example, to expose an additional color parameter, double-click it to open the ~{ Shader Graph Editor }~. Changes you make to a parent material are automatically inherited by all of its child materials.

If you try to edit the graph of a child material, an **Unable to edit** error displays in the Status bar, advising you to either edit the parent material or make this instance unique.

![](../../images/unable_to_edit.png)

Unable to edit. '<*Material name*>'. Cannot edit child materials. To edit this graph either open the parent material '<*Parent Material name*>' or make this one unique.


---
Related topics:
-	~{ Assign a material to an object }~
-	~{ Standard material properties }~
-	~{ Create a material }~
-	~{ Create a parent material }~
-	~{ Shader Graph Editor }~
---
