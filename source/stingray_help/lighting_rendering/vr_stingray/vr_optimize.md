# Optimize VR content

When you start to optimize your VR content, it's a good idea to reduce or eliminate all non-essential rendering costs in order to get good baseline performance. Once everything renders at a consistent framerate for VR, you can start adding optional features one by one, making sure each additional feature does not adversely impact performance. Some of the typical problems you may encounter are covered in the following checklist:

- Is overdraw set too high?
- Am I running too many expensive post-processes?
- Am I rendering too many polygons?
- Am I running out of GPU texture memory?
- Am I casting too many shadows? (batches)

## Overdraw and Anti-aliasing

The anti-aliasing and overdraw settings are stored in your settings.ini file, under **render_settings**. You can set anti-aliasing to **taa_enabled** (default) or **fxaa_enabled**. Start with FXAA, which is less expensive.
Overdraw is a multiplier on your output resolution. If overdraw is set to 1.5, the image is rendered 1.5 times the size of the output resolution, then downsized as an anti-aliasing method. Stingray VR templates run at 1.6 by default, but you can lower this setting to at least 1.4 as a starting point. See ~{ Stingray engine settings.ini file reference }~.

## Post Processes

When optimizing your VR project, first turn off all post-processes until all areas of your scene are performant, and you have milliseconds to spare for enhancing the quality of your scene with post processes. At that point, you can start turning on post-processes one at a time, making sure that you aren’t losing necessary framerates. Most post processes can be disabled by selecting the shading environment entity in your level and disabling each post process in the **Property Editor**.

>**Note:** Bloom and Auto-Exposure are the only processes enabled by default in the Stingray VR templates.

## Poly Reduction

Typically polygon count is not a problem, as Stingray can handle a lot of polygons very efficiently. Architectural vizualization interiors usually have very reasonable poly counts, aside from specific assets. Assets from photogrammetry for example, or plants, and sometimes insignificant models that happen to have high polygon counts can simply be replaced. If you need to do some poly reduction, you can use 3ds Max or Maya.

## Texture Blowout

To determine if you are running out of texture memory, you can use a tool like Process Explorer. Once you’ve confirmed that you have a problem with texture memory, you need to resize and compress your textures. You can use the ~{ Texture Manager }~ to set compression settings for your textures.

## Shadow casting

Shadow casting in real-time rendering is expensive. You can make simple changes to reduce the amount of shadow casting that is happening per frame. First, to determine if shadow casting is a problem use the Artist Performance HUD (**View > Performance HUD > Artist Performance**). You can reduce shadow casting in the following ways:

- Disable mesh shadow casting in the following cases: objects that are fully in shadow do not need to cast shadows; objects whose shadows are never going to be visible such as floors.
- Create shadow proxies for high polygon assets that do not necessarily need highly detailed shadows.
- Bake lighting for most lights if your scene is mostly static (objects do not move, lights do not move).

## Batching

When the engine prepares to render a surface, it dispatches draw calls to the GPU in batches. There is some amount of overhead in the dispatching process. Rendering too many batches creates overhead build up, lowering performance. Use the following methods to reduce batches:

- Reduce materials: Each material on a mesh increases its batch count by one. When possible, simplify the unit to a single material.
- Use shadow proxies: The shadow proxy of a unit with many materials can be reduced to a single material, reducing draw calls.
- Merge batches: When the engine has multiple instances of the same geometry with the same material(s), and the material supports instancing, then these geometry instances can be merged into a single batch, and all the data for these objects get sent to the GPU in one batch.
- Optimize materials: Replace the standard material with simpler materials to get the most performance.
