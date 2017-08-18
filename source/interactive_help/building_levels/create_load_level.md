# Create or load a level

  > **Note:** You can open and edit one level at a time in the interactive editor.

**To create a new level**

1.	Select **File > New Level**.

	This creates a new level. You can start placing objects into the level, creating gameplay, and so on.

	> **Tip:** By default, the new level is created from the template level defined in the project settings. If you want to open a specific level each time you create a new level, change the **Default Level Template** setting (**File > Settings > Projects Settings**). The level you specify loads automatically when you open your project.

1.	Select **File > Save Level**, then enter a name for your level.

	Level files are saved with the extension `.level`. In the template projects, all the built-in level files are saved in the `content/levels` folder. You can keep to this convention, or save your levels in any other location within your project's source folder.

Every new level comes with a few useful helpers, which you can find listed in the ~{ Explorer panel }~:

-	A default Shading Environment, which controls a variety of aspects about the way your level is lit and rendered. For details, see ~{ The Shading environment and post effects }~.

-	A skydome unit, which provides a backdrop for all the other objects you add to the scene. You'll see this unit listed in the Explorer. You can set up the sky's image texture and its effects on the way your scene is lit in the properties of the Shading Environment. See ~{ Lighting and the sky }~. Note that the default skydome is placed in a frozen "background" layer. If you want to rotate it, you can unfreeze the layer. See ~{ Organize level objects in layers }~.

-	A directional light that simulates the light coming from the sun. You can select the light in the Explorer or the viewport, and use the settings in the ~{ Property Editor }~ to change the rotation, color and intensity of this light. See ~{ Light sources }~.

**To load an existing level**

Do either of the following:

- Use the **Asset Browser** to navigate to the levels folder in the current project, then double-click to load the level you want.

- Select File > Open Level, select a level from the Open Level window and click **Ok**.<br>

  The level loads in the **Level Viewport**.

---
Related topics:
-	~{Level Viewport}~

---
