# Create splines

Splines are 3D curved paths, commonly used for constricting motion. They are [Bézier curves](https://en.wikipedia.org/wiki/B%C3%A9zier_curve), made up of a series of control points.

A level designer can create complex curves in the interactive editor and save them in the level. The gameplay code can pick up these curves, read their control points, and interpret the data to do something, such as animate a character or a camera.

## Create a spline

1.	Activate the Spline Tool by doing either of the following:

	- From the main menu bar, select **Create > Spline**.

	- In the **Create** window (**Window > Create**), switch to the **Objects** tab and select **Spline**.

1.	In the **Level Viewport**, click to place points in the spline.

	By default, the white curve control points are placed at the same position as you click, making the line segments straight. To offset the curve control points, hold the mouse button down, then drag it away from the black spline point.

1.	Right-click to stop adding points to the spline.

## Edit a spline

1.	Select the spline you want to modify.

1.	Activate the Spline Tool by doing either of the following:

	- From the main menu bar, select **Create > Spline**.

	- In the **Create** window (**Window > Create**), switch to the **Objects** tab and select **Spline**.

1.	With the Spline Tool active:

	-	To add a new point to the spline, shift-click on the spline in between two other points.

	-	To move a black spline point, click it and drag. Control-click and drag to move it freely in 3D instead of on a grid.

	-	To move a single white curve control point, shift-click it and drag.

	-	To move a pair of white curve control points in tandem, click one of them and drag.

## Spline properties

<dl>
<dt>Name</dt>
<dd>Name of the spline. Name must be unique.

> **Note:** The editor gives the spline a unique name when you create it, and prevents you from changing the name to an existing name.

</dd>
</dl>

## Using the spline

The `stingray.Level` object has functions to retrieve splines by name or by index, and to retrieve the list of control points associated with the spline.

~~~{lua}
// get the number of splines in the level:
stingray.Level.num_splines()
// get the control points for a spline, referring to it by its index:
stingray.Level.spline_by_index()
// get the control points for a spline, referring to it by its name:
stingray.Level.spline()
~~~

Once you retrieve the list of control points, it is up to your gameplay code to interpret those points however you want.
