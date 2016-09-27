# Best practices: preserving axis orientation

Stingray uses Z Up as the orientation axis. If you export the FBX file with a different axis orientation such as Y (the default Up Axis for Maya and Maya LT), the model isn't oriented as expected in Stingray.

Do the following in your Stingray project to have the model face the right direction:

* Enable **Create an extra root by default on asset import** in File > Settings > Project Settings.
* Set `import-reverse-forward-axis = true`  in your  project settings.ini.  Learn more on the import axis setting in  ~{ Stingray engine settings.ini file reference }~.
