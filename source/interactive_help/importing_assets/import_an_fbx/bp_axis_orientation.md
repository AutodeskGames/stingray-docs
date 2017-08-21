# Best practices: preserving axis orientation

{{ProductName}} uses Z Up as the orientation axis. If you export the FBX file with a different axis orientation such as Y (the default Up Axis for Maya and Maya LT), the model isn't oriented as expected in {{ProductName}}.

Do the following in your {{ProductName}} project to have the model face the right direction:

* Enable **Create an extra root by default on asset import** in File > Settings > Project Settings.
* Set `reverse-forward-axis = true`  in your *.stingray_project* file.

  >This is the recommended setting. After an asset is imported, the setting is stored with the FBX file, and not read from *.stingray_project*.

{{#if Stingray}}
  >(For advanced users.) For backwards compatibility with scenes authored for Bitsquid, you can set `reverse_forward_axis = false` so that imported scenes get rotated 180 degrees.
{{/if}}
