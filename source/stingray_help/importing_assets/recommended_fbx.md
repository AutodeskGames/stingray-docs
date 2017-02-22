# Recommended FBX settings for export to Stingray

This topic lists the recommended settings for what to include as you export a scene from Maya, Maya LT, or 3ds Max. In the export options windows, you can find the following settings under **File Type Specific Options**.

**Hint:** Most automatic conversions are disabled in the **Export settings** (Smooth Mesh, Curves, Deformers, and so on).  We recommend that you convert these to polygons before exporting if you need to export the detail from such modifiers.

###Geometry

Under **Geometry**, set the following:

- Smoothing Groups is On
- Split Per-Vertex Normals is Off
- Tangents and BiNormals is Off
- Smooth Mesh is Off
- Selection Sets is Off
- Convert to Null Objects is Off
- Preserve Instances is Off
- Referenced Assets Content is Off
- Triangulate is Off

###Animation

- Animation is On<br>

	Under **Extra Options**:

	- Use Scene Name is Off
	- Remove Single Key is Off
	- Quaternion Interpolation Mode is Resample as Euler Interpolation.

	Under **Bake Animation**:

	- Bake Animation is Off

	Under **Deformed Models**:

	- Deformed Models is Off

	Under **Curve Filters**:

	- Curve Filters is Off

	Under **Constant Key Reducer**:

	- Constant Key Reducer is Off

	Under **Geometry Cache Files**:

	- Geometry Cache Files is Off

	Under **Constraints**:

	- **Constraints** is Off

	- **Skeletal Definitions** is Off


###Advanced Options

Under **Units**:

- **Units** is set to **Automatic**

> **Note:** There is a known limitation related to units when exporting PhysX data from Maya or Maya LT. See ~{ Install the PhysX plug-in for your DCC tool }~.

Under **Connections**:

- **Input Connection** is Off

Under **Axis Conversion**:

- In Maya: **Up Axis** is set to Y
- In 3ds Max: **Up Axis** is set to Z

---
Related topics:
-	~{ Export an FBX file to use in Stingray }~
---
