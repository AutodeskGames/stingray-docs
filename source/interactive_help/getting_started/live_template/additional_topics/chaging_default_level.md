# Changing the default Level in Live

Most 3dsMax Interactive templates have a "default level", i.e. a level which is opened whenever you hit "Run Game" or when you deploy the project. The same is true in Live.

To modify the default level, simply open the "settings/revit_live_scene_settings.ini" file and modify the name and path of the level you wish to load by default. The path should be relative to your project root folder. When a project is imported from the Live service, the default Level will already be set to the level containing the Revit model that was prepared, which can be changed in the same way.
