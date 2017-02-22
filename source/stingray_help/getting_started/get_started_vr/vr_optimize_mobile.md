# Optimize VR content for mobile devices

Along with using the ~{ Mini renderer }~, keep the following guidelines in mind when you're developing a VR project for mobile devices.

1. Ensure that the lighting in your scene, both direct and indirect, is baked. For more information, see ~{ Light baking }~.
2. Use the following guidelines to prepare the geometry, materials, and textures in your scene:

  > **Note:** The following are rough estimates based on our own measurements, and based on a scene running on a Galaxy Note 4. Keep in mind that all stats displayed in the editor will double when rendering in stereo. Figures listed below are total frame counts so you'll need to divide them by two to get a better mapping to editor statistics.

  General:

  - Keep number of draw calls below 200 draw calls per frame.

  Geometry:

  - Keep total number of primitives below 300,000 per frame.

  Materials:

  - Avoid using any 1-bit alpha masking
  - Keep transparent materials to a minimum
  - Keep anisotropic texture filtering to a minimum
  - Keep your shader graphs as simple as possible. Avoid using materials based on the "standard" Stingray material. Although this standard material offers many properties and customization options that make it easy to use, it is not optimized for fast performance on the GPU. For best performance, create your own graphs with a minimum of branching and logic.

  Textures:

  - Compress all textures (ETC2)
  - Always use mip-maps
