# About baking with the Stingray baker

The Stingray light baker is an experimental new light baking system built in to Stingray.

## What does it bake?

For each surface, the Stingray baker includes in the lightmap:

-	All *indirect* illumination, which hits the baked surface after bouncing off of one or more other surfaces in the scene. This also includes light coming from emissive textures, and environmental light contributed by the sky texture.

-	*Direct* illumination and shadows only from lights that have their **Baked** property enabled.

## How does it bake?

The Stingray baker does multiple passes over the scene, each time progressively refining the result to converge toward a high-quality final solution. This means that you can quickly get a basic idea of what the final result will look like. You can also quit baking when the result stops improving.

Each pass makes use of your computer's GPU to accelerate the rendering. It only proceeds when the Stingray Editor is actively using the GPU. Therefore, you will likely want to set your viewport to update all the time, instead of updating only when the editor is focused. That way, your baking session will continue processing even if you click away from the Stingray Editor or leave your computer.

-	In the viewport, click the options icon ![Options](../../../images/icon_assetPreview.png) in the overlay, and select **Update Mode > Always** from the contextual menu.

## Bake settings

You can use the settings in the **Bake Lightmaps** window to control the way the Stingray baker produces its lightmaps.

![Stingray light baker settings](../../../images/bake_lightmaps_stingray.png)

<dl>

<dt>Lightmap texel scale</dt>
<dd>Controls the size of the lightmaps produced by the baker.

This value multiplies the texture resolution for each target's lightmap. For example, if a target requires a 32x32 texture when the scale is set to 1, it will require a 64x64 texture when the scale is set to 2, 128x128 when the scale is set to 4, etc.

Increasing this number will permit the baker to put more detail into each lightmap, which allows room for higher quality, more precise results. However, increasing this value can actually produce noisier results if there are not enough sample passes to achieve that level of detail. Increasing this value also increases the size in memory of each lightmap, and makes each sample pass take longer.</dd>

<dt>Total sample passes</dt>
<dd>Sets the maximum number of passes the light baker will make.

Increasing this value may improve the quality of the final results, if the number of passes is not high enough to converge on a high-quality result. However, it also makes the full baking session take longer to complete.</dd>

<dt>Skylight intensity</dt>
<dd>Determines how much the skydome texture contributes to the baked lighting.</dd>

<dt>Indirect scale</dt>
<dd>Increases or decreases the strength of the indirect illumination the Stingray baker applies to the surfaces in your level.</dd>

<dt>Emissive scale</dt>
<dd>Increases or decreases the amount of diffuse light cast out into the scene from surfaces whose materials have emissive color and emissive intensity.</dd>

<dt>Diffuse boost</dt>
<dd>Increases or decreases the amount of diffuse light the Stingray baker applies to baked surfaces.

Raising this value causes darker surfaces to become brighter and to bounce more light back out into the scene. This may help you get better results if the materials in your scene are too dark to scatter light effectively.

Note that you may need to set this value very high in order to see the effect.</dd>

</dl>

See also ~{ Lightmap baking settings }~.

## While baking

-	The progress bar in the ~{ Status bar }~ shows the overall progress of the bake, along with the number of the render pass that the baker is currently working on.
-	Click **Cancel** to abandon the current baking session, without saving the progress to date.
-	Click **Pause** to temporarily interrupt the current baking session without discarding the progress to date.
-	Click **Resume** to continue a paused session.
-	Click **Save** to stop the current baking session, saving the lightmaps that have been generated so far.
