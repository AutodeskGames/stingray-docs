# VR in Stingray

The Stingray engine has all of the VR systems implemented in it for the Oculus Rift, the HTC Vive, and other mobile VR devices. Using the Stingray Editor, you can use these systems to build truly immersive experiences for VR in a simple and intuitive fashion.

The following three features optimize general VR performance in Stingray.

## Compound Frustum

 In Stingray, the camera frustum is used in the following stages of the pipeline:

 - To optimize rendering by performing frustum culling:  This step gathers and prepares all objects for rendering that are either partially or totally inside the camera view volume while the others are discarded.

 - To compute cascaded shadow maps: This step reduces perspective aliasing.

 - During the clustered deferred shading pass: This step voxelizes the view volume and stores the different local light contributions inside the affected voxel buckets.

 Doing these three different actions twice for each eye is costly and unnecessary. Considering that the general view direction of each eye is equivalent and the interpupillary distance is quite small, it’s worth computing a single enclosing frustum to minimize computations on the render and GPU threads.

## Hidden Area Mask

 The Hidden Area Mask uses a mesh to cull out pixels that are not visible in the final image as seen through an HMD (Head Mounted Display). In other words, this is the first mesh to be drawn in the depth stencil buffer when in VR mode. This ensures post processing is only applied on visible pixels. For example, in the following image, the black pixels represent the hidden areas on the HMD.

 >**Note:** The Hidden Area Mask is provided through the HMD software development kit and is only available for the HTC Vive.

 ![VR Templates](../images/vr_hidden_area.png)

## Instanced Stereo Rendering

 Instanced Stereo Rendering is an optimization that makes it more efficient for Stingray to render stereoscopic images for VR headsets. It uses hardware accelerated geometry instancing to produce both the left and right eye version of the scene during a single rendering pass instead of two.

 Distinct eye transforms are stored in the constant buffer and stereo rendering is handled by the vertex shaders. Even instances use the left eye matrices and are shifted left, while odd instances use the right eye matrices and shifted right. The clip plane is dynamically adjusted to prevent spill over to opposite eyes.

 Instanced stereo rendering is built in to the default renderer provided with Stingray, and all material and post effect shaders are VR-enabled to implement this optimization.
