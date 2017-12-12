#Standard material properties

The following properties display in the ~{ Property Editor }~ when you select a standard material in the **Asset Browser**.

##Parent Material

<dl>
<dt>Make Unique</dt>
<dd>Creates an entirely new parent material with a unique shader graph. See ~{ Create a parent material }~.
</dd>

<dt>Name</dt>
<dd>Lists the parent material for the selected child material.</dd>

</dl>

##Settings

This section includes properties that give general control over the  object's surface. Use these properties to assign texture files to the material. Texture files allow for pixel-based control of an object's surface.

> **Note:** If your material will use textures, you must import the textures before you can assign them to a material.  See ~{ Import textures }~.

Click the browse icons to select and assign texture files for **Roughness**, **Emissive**, **Color**, **Normal**, **Metallic**, and **AO Map**, then use the check boxes to enable or disable these resources.

<dl>

 <dt>Use Color Map</dt>

 <dd>Toggles which input to use.

  When on, uses the **Color** map specified.

  When off, uses the color you set using the Color Picker. (Click the **Base Color** input box to open.)</dd>

 <dt>Base Color</dt>
 <dd>Click this color input box to select the color of your material.</dd>

 <dt>Use Normal Map</dt>
 <dd>Toggles whether the material uses the **Normal** map specified.
 </dd>

 <dt>Use Metallic Map</dt>
 <dd>Toggles which input to use.

 When on, uses the **Metallic** texture specified.

 When off, uses the value from the **Metallic** spinner.
 </dd>

 <dt>Metallic</dt>
 <dd>With **Use Metallic Map** turned off, use this spinner to control how metallic the surface is.
 The greater the value the more metallic.
 </dd>

 <dt>Use Roughness Map</dt>
 <dd>Toggles which input to use for roughness.

  When on, uses the **Roughness** texture specified.

  When off, uses the **Roughness** spinner.
 </dd>

<dt>Roughness</dt>
 <dd>When **Use Roughness Map** is off, use this spinner to control how shiny or rough the surface is.

 The lower the value, the more smooth and reflective the material.

 Increasing the value diminishes the smoothness and reflectivity.

 See ~{ Reflections }~ for more information.
 </dd>

<dt>Use Emissive Map</dt>
 <dd>Toggles which input to use for emissivity.

  When on, uses the **Emissive** texture specified.

  When off, uses the color you set using the **Color Picker**. (Click the **Emissive** color input box to open.)
 </dd>


<dt>Emissive</dt>
 <dd>When **Use Emissive Map** is off, adjusts the color of your materials emissive (glowing) quality.
 </dd>

<dt>Emissive Intensity</dt>
 <dd>When **Use Emissive Map** is off, use this spinner to adjust the intensity of your materials emissive (glowing) quality.
 </dd>

<dt>Use AO Map</dt>
 <dd>When on, uses the **Ao Map** specified.
   </dd>

<dt>UV Offset</dt>
 <dd>Adjusts texture positioning.
   </dd>

<dt>UV Scale</dt>
 <dd>Adjusts texture tiling.
   </dd>
</dl>

---
Related topics:
- ~{ Assign a material to an object }~
- ~{ Edit a child material }~
---
