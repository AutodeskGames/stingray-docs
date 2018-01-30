#Smart Placement Tool

The **Smart Placement** tool provides you with an intuitive way to place objects precisely when working in the Level Viewport or editing your scene in VR. This multi-faceted tool lets you snap an object to a surface, align an object, and auto-parent objects. A smart grid lets you measure distances easily, and displays measurements to nearby objects.

The **Smart Placement** and **Smart Surrounding** plugins load automatically when you launch your project. Both of these plugins must be loaded to use the **Smart Placement** tool. From the main menu, select **Smart Placement > Smart Placement Config** from the main tool bar to adjust the **Placement settings** in the window that appears.

>**Important:** The **Placement settings** are disabled by default. You must enable the options mannually.

###Measurements

When enabled, dragging any object shows measurements to nearby objects in centimeters.

![](../../images/smart_placement_measure.png)

###Auto-parenting

Auto-parents child object(s) that are placed on top of a parent object.

In the following example, several objects are placed on top of a white plinth. When auto-parenting is enabled, the objects placed on top of the plinth (children) are auto-parented to the plinth (parent). All auto-parented objects are outlined in blue and move with the parent.

![](../../images/smart_placement_autoParent.png)

###Snap Root To Surface

When enabled, dragging an object's root snaps it to neighboring surfaces.

![](../../images/smart_placement_surfaceSnap.png)

###Snap to Smart Grid

When enabled, the smart grid displays red planes as you drag an object close to a neighboring surface, indicating where your object is snapping.

![](../../images/smart_placement_smartGrid.png)
