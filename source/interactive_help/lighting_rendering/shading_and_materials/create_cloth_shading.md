# Simulate cloth

You can create a cloth material and adjust the falloff to simulate fuzzy cloth types.

**To simulate cloth shading**

  1. Create a standard material. See ~{ Create a material }~.
  2. In the Property Editor, click Make Unique.
  <br>
  This creates a new parent material with a unique shader graph.
  3. Click ![Open Shader Graph](../../images/button_openShaderGraph.png) to open the ~{ Shader Graph Editor }~.
  4. In the **Shader Graph Editor**, select the **Standard Base** node.
  5. In the **Property Editor**, set the **Material Type** to **Cloth**.
  6. Select the Standard Base node, and edit the **Cloth Falloff** property.
  The higher the **Cloth Falloff** value, the fuzzier your cloth appears.
