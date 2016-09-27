# Disable the Wwise plugin

Wwise can be disabled per game project and the entire integration can also be removed from the engine.

## Engine

Configure the engine without the --use-wwise parameter. Optionally remove associated content in the lib/wwise_* folders, and the tools/wwise_exporter.exe file.

## Editor

Remove the WwiseModule. Optionally remove associated content in tools_external/wwise folder.

## Game Project

Remove the wwise section from settings.ini, or set enabled to false within the wwise section. Optionally remove associated assets in the "wwise" export folder and the Wwise Content project folder outside of the game project folder.
