# ShaderFX shader graphs

The standard material that you can create and assign in the interactive editor uses a physically based shader graph, built with ShaderFX nodes, that respects the laws of physics and energy conservation. The Interactive PBS (physically based shader) lets you balance diffusion/reflection and microsurface detail/reflectivity using roughness, normal, and metallic maps. For more information about built-in shader nodes, see the [Shader Node Reference](../../../shaders_ref/index.html).

The Interactive (Stingray) PBS is also available in Maya 2016, Maya LT 2016, 3ds Max 2016 and higher. This means you can create an Interactive (Stingray) PBS node in these design tools, build its shader graph using ShaderFX nodes, then import the scene into {{ProductName}}. The model will look exactly the same, and the imported graph will be the same, including all input connections and nodes. See also ~{ Linking with {{ProductName}} }~.

> **Note:** If the shader uses a custom preset, the preset shader graph is also exported.

Refer to the following topics for information on creating physically based shaders in ShaderFX:

- [About ShaderFX](https://help.autodesk.com/view/3DSMAX/2018/ENU/?guid=GUID-D7F76613-E3E3-473E-A26D-717BB135BD17)
- [ShaderFX introductory sample workflow](https://help.autodesk.com/view/3DSMAX/2018/ENU/?guid=GUID-32B0ECB1-F1F7-4DB6-9B8E-27DCC9D54BF0)
- [Create a Stingray Physically Based Shader](https://help.autodesk.com/view/3DSMAX/2018/ENU/?guid=GUID-7EEAC650-7D26-40AE-AC14-577F7A2EF2B3)
- [Export a Stingray Physically Based Shader](https://help.autodesk.com/view/3DSMAX/2018/ENU/?guid=GUID-6AFA6767-10BE-42E7-B26F-0BF84F1D4E8A)

In the interactive editor, you'll use the ~{ Shader Graph Editor }~ to create and edit shader graphs. See ~{ Create or edit shader graphs }~.

---
Related topics:
- ~{ Create a parent material }~
- ~{ Linking with {{ProductName}} }~

Tags:
- physically-based shader
---
