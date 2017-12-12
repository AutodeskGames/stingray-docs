#Stingray 1.0 Release Notes

This document describes known limitations, workarounds, and other important information about  the 1.0 release of Autodesk Stingray. It is strongly recommended that you read this document before you run the program.

##Known Limitations

This section lists known limitations and workarounds for Stingray.

- **GAME-2494: Stingray Editor fails to start on non-English Windows systems**

	Workaround: Launch the Stingray Editor as an Administrator.

- **GAME-8902: Stingray Editor locks up if a file in the project folder named `__sync_file_events.stingtmp` is read-only**

	**Workaround:** Do not place this file in your source control system.

- **GAME-8892: Wwise: Game projects with spaces in path cannot export**

	**Workaround:** Do not use spaces in Wwise game projects.

- **GAME-8700: Interop: 'Send to Maya' for Maya LT on Steam opens Maya but does not connect**

	**Workaround:** Please launch Maya LT from Steam first.

- **GAME-8977: Interop: Cannot right-click in Asset Browser and select 'Open Source Asset' with Maya LT on Steam**

	**Workaround:** None.

- **GAME-8805: Flow: "Custom script node ... is missing" errors on switching projects**

	**Workaround:** None required. The game is not actually affected, even when this error displays.

- **GAME-8899: iOS generate engine: Can't write .ipa file to C:\Program Files when running Stingray with regular user rights**

	**Workaround:** Run Stingray process as an Administrator before generating the engine ipa file.

- **GAME-9125: Stingray crashes if you have multiple materials of the same name but with different case, such as ‘foo’ and ‘Foo’.**

	**Workaround:** Always use completely unique names for materials.

