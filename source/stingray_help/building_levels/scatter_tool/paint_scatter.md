# Paint with the Scatter Tool

## To create a scatter brush
1. Right-click anywhere in the **Asset Browser** and select **Create > Scatter Brush**.
2. A **Scatter Brush** panel appears in the **Property Editor**.
3. Click ![](../../images/icon_add_scatter_unit.png) in the bottom right corner.
4. In the **Content Browser** that appears, select a unit to scatter in your scene.

	You can scatter any unit, but scattering units with lights and particle effects may affect performance. It is recommended that you create specific units that are only used with your scatter brush.

5. In the **Toolbar**, click ![](../../images/toolbar_icon_scatter.png).
6. In the **Content Browser** that appears, select your scatter brush.

	 > **Tip:** After you load your first scatter brush, it loads automatically each time you enter **Scatter Tool** mode. If you have more than one brush in your project, right-click ![](../../images/toolbar_icon_scatter.png) and select **Select Brush** to switch brushes.

## To paint scatter
1. Load the scatter tool. See ~{ Scatter Tool }~.
2. Create a scatter brush.
3. Adjust the ~{ Scatter Tool Properties }~ to control the **Frequency** and **Orientation** of your scatter.
3. Click-drag the scatter indicator in your scene to paint. You must scatter on an existing unit. You can not scatter in an empty viewport or on units that have existing scatter.
4. Use the following hotkeys to adjust your scatter brush:
  	- Adjust brush size: B + drag
  	- Remove painted scatter: Ctrl-drag
  	- Undo last painted brush stroke: Ctrl + Z
  	- Redo last painted brush stroke: Ctrl + Y
5. Set the ~{ Scatter Pool Settings }~ to control how and when your scattered units are rendered.
