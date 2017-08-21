# Navigation options

Select **Window > Navigation** in the interactive engine to access the following **Navigation Options**.

##Generate

<dl>

<dt>Limited memory mode</dt>
<dd>Limits the memory usage for NavMesh generation by using temporary files on disk. Can be much slower.</dd>

<dt>Generate NavMesh</dt>
<dd>Click to generate NavData.</dd>

<dt>Delete NavMesh</dt>
<dd>Click to delete the generated NavData.</dd>

<dl>

##Database

These options specify which Navigation database the generated NavMesh will belong to.

<dl>

<dt>Database Name</dt>
<dd>Name of the database which must be unique.</dd>

<dt>Database ID</dt>
<dd>ID of the database which must be unique and in the range [0, database_count-1] where database_count is the value passed to `stingray.GwNavWorld.create(transform, database_count)`.</dd>

</dl>

##Consumption

These options specify how to generate the NavMesh.

<dl>

<dt>Excluded custom script data</dt>
<dd>By default, the NavMesh generation consumes the Render meshes of __all Units__ except if script data of the Unit contains:
<li> one of the script data listed into `Excluded custom script data` field (a comma-separated list)</li>
<li> `gwnavgenexcluded` script data set to `true`</li>
<li> `LevelEditor/is_gizmo_unit` set to `true`</li>
<li> one of these script data: `GwNavBoxObstacle`, `GwNavCylinderObstacle`, `GwNavTagBox`, `GwNavBot` which represent Units that can be moved at runtime</li>
</dd>

<dt>Consume Mesh</dt>
<dd>Select which mesh of a Unit is consumed for the NavMesh generation.
 <li>  `Render Mesh` : consume the mesh used for rendering the Unit.</li>
 <li>  `Physics Actor` :  consume the physics actors of Unit.</li>
 The behavior can also be overridden at the Unit level by adding boolean script data `gwnavgen_fromphysicsmesh` and/or `gwnavgen_fromrendermesh`.
 <br/>**Note** that terrains (heightfield physics actors) are always consumed regardless of `Consume Mesh` value, though script data exclusion still applies.
</dd>

<dt>Excluded Physics Actor Shape Template</dt>
<dd>When `Physics Actor` is selected to consume meshes, the NavMesh generation will consume all static actors except if their shape template is listed in the `Excluded Physics Actor Shape Template` field (a comma-separated list)</dd>

<dt>Terrain Sampling</dt>
<dd>Terrain sampling size in meters. If set to 0, the sampling consumes the heightfield as-is.</dd>

<dt>Autoseed script data</dt>
<dd> Comma separated list of script data. All units that have one of these script data (e.g. `GwNavBot`, `GwNavTagBox`, `MyJump`, `MySpawn`...) will create a seedpoint at their position as if they add a `gwnavseedpoint` script data set to `true`</dd>

<dt>Level Offset</dt>
<dd>Offset to apply to the current level for NavMesh generation.</dd>

</dl>

##Entity Settings

<dl>

<dt>Entity radius</dt>

<dd>The radius (or half-width) of the character, in meters, that will use the NavData at runtime. Default 0.4.

This value is used to prevent characters from colliding with walls at runtime by keeping the navMesh borders at a distance from the walls.</dd>

<dt>Entity height</dt>

<dd>The height, in meters, of the characters that can use this NavMesh, in meters. Default 1.6.</dd>

<dt>Slope max</dt>

<dd>The maximum slope, in degrees, for a triangle in the terrain mesh to be considered navigable.

Determines how steep a slope a character can traverse in its normal walking movement. For example, a mountainside (SlopeMax=80) might be easy for a giant spider or a mountain goat to traverse, but impossible for a human.

The maximum difference in altitude that the character that will use the NavData at runtime can traverse in its normal movement.</dd>

<dt>Step max</dt>

<dd>The maximum difference in altitude, in meters, that is considered navigable between neighboring pixels in the raster created from the terrain mesh.</dd>

</dl>

##NavMesh

<dl>
<dt>Raster precision</dt>

<dd>Determines the approximate width and length of each pixel used to rasterize the input triangles. Default is 0.2.

>**Note:** To make sure this value is a multiple of the original rasterization pixel size, any value less than twice the pixel size is clamped to the pixel size, values between 2.0f and 3.0f times the pixel size are clamped to twice the pixel size.

</dd>

<dt>Altitude tolerance</dt>

<dd>The maximum difference in altitude that may exist between the NavMesh and the original terrain mesh.

Specifies how precisely the generated NavMesh follows the altitude of the original terrain mesh. The higher the value, the closer the match, which produces a NavMesh with more, smaller triangles.</dd>

<dt>Min surface</dt>

<dd>Sets the minimum navigable surface area, in square meters, that any isolated area of NavMesh can occupy. Default 0.5.

Any NavMesh with a total surface area smaller than this value is discarded unless a SeedPoint is placed in this region.</dd>

<dt>Cell size</dt>

<dd>Sets the size (length and width) of the internal cell partitioning grid. Default is 20.
Sets the number of raster pixels that make up the length and width of each cell.</dd>

</dl>

## Multilevels

<dl>

<dt>Use Multilevels generation</dt>
<dd> Click to enable multilevels generation.</dd>

<dt>Regenerate NavMesh for all levels</dt>
<dd>Regenerate NavMeshes of all levels using cached input from previous generation of other levels (i.e., .ClientInput files). To regenerate .ClientInput run generation of each level individually. Also, note this is automatically checked if settings were changed.</dd>

<dt>Multilevels Resource Name</dt>
<dd>Resource name for Multilevels file.</dd>

<dt>Multilevels List</dt>
<dd>Resource name of all levels implied in multilevels generation. If this level is not in the list, this field would be automatically filled if `Multilevels Resource Name` sjson file contains an `initial_level_offset_list` object associating levels to their offset. The offset of current level will also be updated accordingly. If no such entry is found, this level will be added to this list.</dd>

</dl>

##Level Viewport Options

<dl>

<dt>Render NavMesh</dt>
<dd>Controls whether the NavMesh (once generated) displays on top of the consumed level geometry.</dd>

<dt>Render NavMesh for neighbor levels</dt>
<dd>Render NavMesh of neighbor levels in multilevels build only apply if **Render NavMesh** is checked.</dd>

</dl>

###Selection

These parameters have no effect on the generation. They are only there to help understand which Units are taken into account or not.

<dl>

<dt>Filter out by script data</dt>

<dd>Comma separated list of script data. Units with one of these script data listed here won't be selected when clicking on one of the select buttons.</dd>

<dt>Filter out by Unit subname</dt>

<dd>Comma separated list of string. Units whose name contains one of the listed strings won't be selected when clicking on one of the __Select Units__ buttons.</dd>

<dt>Select Units included into NavMesh generation.</dt>

<dd>This button selects all units that will be included in the NavMesh Generation. Useful to verify what the generation will take into account. Some units can be hidden from the results by using the filters.</dd>

<dt>Select Units excluded from NavMesh generation.</dt>

<dd>This button selects all units that will NOT be included in the NavMesh Generation. Useful to verify what the generation will take into account. Some units can be hidden from the results by using the filters.</dd>

<dl>

---
Related topics:
-	~{ Gameware Navigation }~
-	~{ Generate navigation mesh }~
---
