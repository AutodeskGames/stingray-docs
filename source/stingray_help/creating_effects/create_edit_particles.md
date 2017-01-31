# Create and edit particle effects

![UPDATED](../images/updated.png)

> ![](../images/icon_video.png) For video tutorials on creating particle effects, see <a href="https://www.youtube.com/playlist?list=PLTjhBiJe1i2GoHq_WmjKKSU9ZWYV5tkJB" target="blank">Particle Effects in Stingray</a>.

[![NEW](../images/new.png "What else is new in v1.7?")](../release_notes/readme_1.7.html) The **Particle Editor** Tool (**Window > Particle Editor**) lets you create new particles, modify them and preview the effects in the viewport within the tool. You can open and modify multiple particles at the same time, view History ![](../images/icon_partEd_history.png) of actions performed, and use the Respawn ![](../images/icon_particle_respawn.png) and Pause/Resume ![](../images/icon_partEd_pause.png) icons to respawn the particle effect and pause/resume the particle effects preview.

**To create a particle effect:**

1.	In the **Asset Browser**, navigate to your project /contents folder and create a new sub-folder for your particle effects.

2. Do any of the following:

	-	[![NEW](../images/new.png "What else is new in v1.7?")](../release_notes/readme_1.7.html) In the **Particle Editor**, click **New** ![](../images/icon_createAsset.png) to create a particle effect asset and then **Save** ![](../images/icon_save.png) to enter a name for the particle effect.

	-	Right-click in file view area of the **Asset Browser** and select **Create > Particle Effect**, or click the **Create Asset** icon ![](../images/icon_createAsset.png) and select **Create Particle Effect**. Enter a name for the new particle effect.


	A particle asset is created in the **Asset Browser**.

	![](../images/create_particle.png)

3.	[![NEW](../images/new.png "What else is new in v1.7?")](../release_notes/readme_1.7.html) Select the particle effect asset and either double-click or in the **Property Editor**, click **Open in Editor**. The particle effect asset launches in the **Particle Editor**.

	You now have a particle effect asset, and you can start to modify its properties to determine what the effect looks like.

**To edit a particle effect:**

The main way you'll work with particles is by modifying the properties of the particle system.  Particle systems are simply a group of commands that guide each of your particles from their birth to their death.

The default particle system is called System1, and you can add and remove controllers to any system to customize the particle effect. Each particle effect can have multiple systems, and each system can have multiple controllers.

1. [![NEW](../images/new.png "What else is new in v1.7?")](../release_notes/readme_1.7.html) Select a particle effect asset in the **Asset Browser** and double-click to open it in the **Particle Editor**. You can also open a particle effect asset using the Open icon ![](../images/icon_scriptEd_Open.png) in the **Particle Editor**.

	The particle system properties is displayed in the **Particle Editor**.

	![](../images/particle_properties.png)

2. Select System 1.

	![](../images/particle_system1.png)

	Selecting **System 1** shows you the general, overall properties of this particle system.

	In the default system properties, you can edit the system name, set the particle life span (min/max values) in time in seconds, or control the spawn position with the **Offset**, **Tilt**, and **Spin** properties.

3. See the components of System 1.

	By default, this system contains Emitter:Rate, Size, Color, and Billboard Visualizer components. For your particle effect to work properly you only need an **Emitter:Rate** and a **Size** component.

6. Select each component to view the properties available for editing.

**To add additional systems to a particle effect:**

-	Right-click the particle system (System 1) and select Add System.

	![](../images/particle_add_system.png)

**To add controllers to a system:**

- Right-click the system root and select the component you want to add.

**To remove controllers from a system: **

Right-click and select **Remove Controller**.

> **Tip:** When working with particle effects, click the gear icon ![](../images/icon_assetPreview.png) in the **Asset Preview** of the **Particle Editor** and select **Update Mode > Always**.

---
Related topics:
-	'~{ Example workflow: Create a particle effect }~'
---
