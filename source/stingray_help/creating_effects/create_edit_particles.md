# Create and edit particle effects

> ![](../images/icon_video.png) For video tutorials on creating particle effects, see <a href="https://www.youtube.com/playlist?list=PLTjhBiJe1i2GoHq_WmjKKSU9ZWYV5tkJB" target="blank">Particle Effects in Stingray</a>.

**To create a particle effect:**

1.	In the **Asset Browser**, navigate to your project /contents folder and create a new sub-folder for your particle effects.

2.	 Right-click in file view area and select **Create > Particle Effect**, or click the **Create Asset** icon ![](../images/icon_createAsset.png) and select **Create Particle Effect**.

2.	Enter a name for the new particle effect.

	A particle asset is created in the **Asset Browser**.

	![](../images/create_particle.png)

3.	Select the particle effect asset and view its properties in the **Property Editor**.

	You now have a particle effect asset, and you can start to modify its properties to determine what the effect looks like.

**To edit a particle effect:**

The main way you'll work with particles is by modifying the properties of the particle system.  Particle systems are simply a group of commands that guide each of your particles from their birth to their death.

The default particle system is called System1, and you can add and remove components to any system to customize the particle effect. Each particle effect can have multiple systems, and each system can have multiple components.

1. Select a particle effect asset in the **Asset Browser**.

	The particle system properties is displayed in the **Property Editor**.

	![](../images/particle_properties.png)

2. Select System 1.

	![](../images/particle_system1.png)

	Selecting **System 1** shows you the general, overall properties of this particle system.

	In the default system properties, you can edit the system name, set the particle life span (min/max values) in time in seconds, or control the spawn position with the **Offset**, **Tilt**, and **Spin** properties.

3. Expand System 1 to view the default components.

	By default, this system contains Emitter:Rate, Size, Color, and Billboard Visualizer components. For your particle effect to work properly you only need an **Emitter:Rate** and a **Size** component.

6. Select each component to view the properties available for editing.

**To add additional systems to a particle effect:**

-	Right-click the particle system (System 1) and select Add System.

	![](../images/particle_add_system.png)

**To add components to a system:**

- Right-click the system root and select the component you want to add.

**To remove components from a system: **

Right-click and select **Remove Component**.

> **Tip:** When you select the particle effect in the **Asset Browser**, the effect plays in the **Asset Preview**. When working with particle effects, click the gear icon ![](../images/icon_assetPreview.png) in the **Asset Preview** and select **Update Mode > Always**.

---
Related topics:
-	'~{ Example workflow: Create a particle effect }~'
---
