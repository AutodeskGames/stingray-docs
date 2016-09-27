#Terrain tool

The Stingray terrain tools let you create and edit terrain meshes by sculpting, and by importing and exporting terrain files that you work on in other applications.

In the Stingray engine, terrains are internally represented as a unit and two textures. One of the textures is a height map: a single channel texture that describes the height of the terrain.

The other texture is a material map, which you can use to texturize the terrain. This texture is a normal 4 channel 2D texture with channels mapped to the textures that you want in-game, letting you paint different textures onto the terrain by painting on a material map channel.

![](../images/terrain_assetbrwser.png)
