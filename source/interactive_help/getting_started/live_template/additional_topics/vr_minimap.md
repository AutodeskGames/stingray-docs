#Customizing the VR Minimpa in Live

The Minimap is a popular feature in VR, but you might wish to customize which Units are shown or hidden in it. For example, you might want to hide the roof of your model when in the minimap, so that you can get a good look inside it.

To include or exclude units from the minimap, the process is very similar to including/excluding units from the Bounding Box.

AS an example, let's say I want to exclude "Roof" Units from the minimap. Open the "settings/vr_settings.ini" file and look for "units_excluded_from_minimap" (usualy at line 149). You can choose to modify which categories will be included/excluded from the minimap by changing the values here between "true" and "false". In our case, to exclude the roof, we will change the line ""Roofs" = false," to ""Roofs" = true,". You can also add you own category name, as explained in the "Modifying the Bounding Box" section.

![](../../images/live_minimap_exclude_roof.png)