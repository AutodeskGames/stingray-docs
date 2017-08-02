# Open an existing project

The Stingray Editor keeps track of the projects you create and work on. You can easily re-open any project when you launch the editor, or by opening the **Project Manager** from the **File** menu.

You can also double-click a Stingray project file (`.stingray_project`) to open the project in the Stingray Editor, provided no other projects are running at the moment.

Sometimes, however, you may want to open an existing project that somebody else has created, but that doesn't yet show up in your **Project Manager**. For example, this will happen if you want to open a game kit that you download from [the Gamedev portal](http://www.autodesk.com/stingray-online-projects). See also ~{ Download assets and example projects }~.

**To open an existing project for the first time:**

1.	Open the **Project Manager**. Do this either by launching the Stingray Editor or by selecting **File > Project Manager** from the main menu of the Stingray Editor.

2.	Open the **My Projects** tab.

	![Add Existing](../images/project_manager_add_existing.png)

3.	Click **Add Existing** and browse to the location of your project on your local computer. Select the project's *.stingray_project* file and click **Open**.

	This adds the selected project to the *Projects* area of the **My Projects** tab.

	>	**Note:** If the project you want to open was created with a version of Stingray before 1.7, it might not have a *.stingray_project* file. If so, change the dialog's filter to look for `All Files (*.*)` instead of `Stingray Projects (*.stingray_project)`, and select your project's *settings.ini* file.

5.	(Optional) If your project was created using an earlier version of Stingray, do one of the following in the dialog box that appears:
	- Click **Yes**.
	<br>
	Stingray migrates the entity and level files, and opens your project in the Editor. After migration, your project can no longer be opened with older versions of Stingray.

		> **Note:** During migration Stingray creates a .backup file containing the original contents of each migrated file. You can remove these files after successfully migrating your project.

		>	**Note:** A .stingray_project file and a project.settings file are created for each project that you migrate from earlier versions of Stingray.

	- Click **No**.
	<br>
	Stingray does not migrate your project, and it does not open in the Editor.
