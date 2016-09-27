# Create a clear coat material

 The clear coat shader lets you simulate a translucent layer of film on a surface. For example, you can use clear coat to create colored films on metal, like car paint.

 **To create a clear coat material**

1. Create a standard material. See ~{ Create a material }~.
2. In the **Property Editor**, click **Make Unique**.
 <br>
 This creates a new parent material with a unique shader graph.
3. Click ![Open Shader Graph](../../images/button_openShaderGraph.png) to open the ~{ Shader Graph Editor }~.
4. In the **Shader Graph Editor**, select the **Standard Base** node.
5. In the **Property Editor**, set the **Material Type** to **Clear Coat**.
6. Select the **Standard Base** node, and edit the **Clear Coat Roughness** property.
<br>
 A higher **Clear Coat Roughness** value produces a rougher clear coat layer.
