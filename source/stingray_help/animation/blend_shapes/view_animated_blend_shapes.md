# View animated blend shape targets in Stingray

After you create blend shapes in your DCC and import them in to Stingray, any animated target shapes you added to your base object in your DCC are not automatically visible. You can use animation controllers or flow to setup your animation in Stingray.

## View the animated targets in Stingray using animation controllers

1. In the **Asset Browser**, right-click your imported unit and select **Create Animation Controller**.
2. Double-click **yourname.anim_controller**.
	<br>
	In this example, the animation controller is named morphing.anim.controller.
3. Enter a name for your animation controller and click Ok.
3. In the ~{ Anim Controller Editor }~ that appears, delete any nodes that appear in the node graph.
4. In the Tree view, select the **Base** layer.
	<br>
	![](../../images/morph_base.png)
5. In the **Asset Browser**, navigate to your animation folder, and drag and drop the imported anim_clip file into the **Anim Controller Editor**'s node graph.
6. In the Tree view, select the **Base** layer and ensure the **Default State** is set to your anim_clip file.
	<br>
	![](../../images/morph_base_layer.png)
7. Click ![](../../images/icon_save.png) to save your changes.
	<br>
	Your animation appears in the animation preview .
8. In the **Asset Browser**, drag your unit into the level to see the animation playback on your object.

## View the animated targets in Stingray using flow
In order to replicate the behavior that , you can compose a level flow graph that looks like the following images.

1. Do one of the following to use flow with your targets:
	- Use flow with a **Level unit**.
		Set the **Level Unit** to your imported blend shape, and set the **Channel Name** to one of your target shapes.
		<br>
		![](../../images/blend_shape_flow_unit.png)
	- Use flow with spawning.
		<br>
		![](../../images/blend_shape_spawn.png)
		
		This flow graph features a character as the blend shape with targets that each represent a different facial expression.
