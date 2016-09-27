# Lightmap baking settings

The main settings that you'll use to control light baking are found in the **Bake Lightmaps** dialog box (**Window > Lighting > Bake Lightmaps**).

There are also a few other settings to be aware of. Note that most of these settings apply both to Beast and to the Stingray baker, even when they specify "Beast" in the UI.

-	Properties per unit:

	-	Select a unit. In the ~{ Property Editor }~, under the **Beast** group, you will find an **Enabled** checkbox. This option enables or disables baking for all meshes *and* all lights associated with this unit.

-	Properties per mesh:

	-	Each mesh that you bake uses its second UV set (*uv1*) to unwrap its baked lightmaps. Depending on how much space is assigned to each part of your mesh in this UV set, the baked light will have higher or lower resolution. See ~{ Unwrap UVs for light baking }~.

	-	Select a unit. In the tree view of the  ~{ Property Editor }~, under the **Beast Settings** node, select a mesh to see its additional bake settings.

		![](../../../images/beast_settings_perMesh.png)

		**Bake target**: Enable or disable this option to enable or disable baking a lightmap for this mesh.

		**Contributes**: Determines whether light that bounces off this mesh continues to contribute to lighting other objects in the scene.

		**Texel scale**: Stingray bakes multiple unwrapped objects into the same 1024x1024 texture atlas. Increase this value for more important objects in order to assign them more space in the atlas.

-	Properties per light. Select a light. In the tree view of the  ~{ Property Editor }~, you'll find its additional bake settings:

	-	Under the **Light** category, the **Baked** setting determines whether or not the light *only* contributes to the baked lightmaps. When selected, the light will contribute to baked direct and indirect light, but will not contribute to real-time dynamic lighting at all.

	-	Under the **Beast Light Settings** category, the **Indirect Intensity** setting adjusts how strongly the indirect light emitted by this light affects nearby surfaces. Used only by Beast, not by the Stingray baker.

-	Global lighting settings in the shading environment. See ~{ Shading environment properties }~.

	-	The texture set for the **Skydome map** will contribute to the way your objects are lit. Note that when baking, the intensity of the sky is not taken from the shading environment; it is set in the **Bake lightmaps** window.

	-	The **Baked Diffuse Tint** and intensity settings adjust the color and brightness of the baked lightmaps for all meshes in the scene.
