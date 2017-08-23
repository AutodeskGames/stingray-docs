# Shading

The topics in this section describe how to control the way the surfaces of your 3D objects are rendered in the engine, by designing materials and assigning them to your models.

## About materials, shaders, textures and 3D assets

Assets that contain modeled 3D meshes usually also contain some information about how those meshes are supposed to be rendered, or *shaded*. The terminology involved sometimes differs between different tools and applications, but the principles are more or less the same.

Each mesh usually has one or more *materials* assigned to its faces. Each one of these materials is a collection of settings that define specific aspects of the way that surface should look. This includes things like what color the surface is, how smooth or rough it is, and so on. So one material might make a model look like it's made of wood, and another material might make a model look like shiny red metal.

Materials may also use *textures* to vary their characteristics over the surface. A texture is essentially a two-dimensional color image that is wrapped around the 3D model when it is rendered. The way that the 2D color image is applied to the faces of the 3D model is defined by a *UV set* that accompanies the mesh: a mapping between the vertices of the 3D mesh and the two-dimensional image space (UV space).

The settings recorded in the material are interpreted by a *shader*: a program that runs on the graphics card to perform the final rendering of the surface and draw it on screen. Each material in {{ProductName}} contains a configurable *shader graph*: a set of instructions for the shader that tells it how to calculate the final results you want to see based on the settings defined in the material and the capabilities of the renderer. You can edit a material's shader graph by connecting nodes in a visual programming interface, either within the interactive engine or within your modeling tool.

## Material design workflows

You can set up materials inside your modeling tool and import them into your project, or you can set up your materials from scratch inside the interactive editor.

### Importing from the art design tool

Artists set up a model's materials and UV unwrapping inside a 3D design tool like Maya, Maya LT, or 3ds Max, usually hand-in-hand with the design of the mesh. Textures may be authored in these tools, in specialized surface sculpting and painting tools like Mudbox, or in 2D image processing tools like Photoshop.

Once the artist has the model looking exactly the way they want it to look in the design tool, they export the model to *.fbx* and import it into the {{ProductName}} project as a new *.unit* resource. The import process creates a new *.material* resource for each different material used by the model, and a new *.texture* resource for each texture those materials use. As long as the materials used by the model in the design tool are compatible with {{ProductName}}, the model will look just the same in the interactive engine as it does in the design tool.

See also ~{ Import a model with textures and materials }~.

{{ProductName}} uses a physically based shader that aims to provide realistic shading results in diverse lighting evironments. This same shader is also available in Maya and 3ds Max, provided by the DirectX ShaderFX system. For best results when importing your materials, use Stingray ShaderFX materials in Maya or 3ds Max. See also ~{ ShaderFX shader graphs }~. Other types of materials, including standard materials, may bring in color and texture values, but may appear subtly different in the interactive engine due to differences in the way the shader calculates the appearance of the surface based on the way it interacts with incoming light.

### Tweaking imported materials

Since the materials that get imported along with a 3D model are represented by their own resources inside your project, you can tweak those materials within the interactive editor if you need to override values set by the artist.

If an imported material is not compatible with {{ProductName}}, it will be represented in the engine viewport with a standard {{ProductName}} physically based material, set to a default plain grey. In this case, you will need to set up all the settings for the material, such as colors and roughness, within the interactive editor.

See also ~{ Edit a child material }~.

### Creating from scratch in the interactive editor

You can also create new materials within the editor from scratch.

On their own, these materials don't do anything when you create them, since they aren't used to shade any surfaces. However, you can assign any material in your project to any *material slot* exposed by any mesh. This lets you customize imported models, and primitive objects like spheres and cubes that you create in a level, by swapping new materials in place of the default ones.

See also ~{ Assign a material to an object }~
