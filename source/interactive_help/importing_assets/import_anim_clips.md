# Import animation clips

1. In the **Asset Browser**, navigate to the folder where you want to import animation clips.

	In general, it's a good idea to keep animation clips in a separate folder alongside the units they will animate. <br>For example, `content/models/my_Character/animations`

	This helps you keep track of which animations belong to which character. Prefixing your animation clips with  the character name is also a good habit. For example, an idle animation for a predator character would be chr_predator_idle.fbx.

1. Right-click in your animation folder and select **Import Asset**.

1. Browse to select an FBX animation clip and click **Open**.

1. In the **Import FBX** options, set the following:

	- Turn on **Animation**.

	- If you didn't create your own folder in step one, turn on **Create Animation Folder**.

	- To select a target skeleton, select **Target skeleton** in **Skeleton**, and in **Target Skeleton**, select the skeleton of the target character unit. <br>Example: `content/models/my_character/CharacterName`

	- Turn off all other options except for **Animation**.

	The animation clip is imported, applied to the character, and starts to playback in the **Asset Preview** window.

	All of the animation curves are displayed in the ~{ Animation clip properties }~.

5. In the animation clip properties, toggle **Import Transform Curves**, **Import Blend Shape Channel Curves**, or **Import Extra Curves** to control the type of curves that are evaluated during playback.

6. You can trim the imported animation clips in the ~{ Animation Clip Editor }~. See ~{ Trim animation clips }~.

---
Related topics:
-	~{ Recommended FBX settings for export to Stingray }~
---
