# Modifying the Bounding Box in Live

 In Live, the Bounding Box determines where the camera starts, so that it sees your entire model. By default, the bounding box will encompass your entire scene. If you wish to modify this, you can change the bounding box settings to look for a particular Category Name, in the "settings/component_setting.ini" file.

For example, say I have a "TownHouse" Unit that I wish to include in the Level's Bounding Box. I will start by opening the "settings/component_settings.ini" file and add a line at Line 14, under BoundingBox->family_filters to the include a custom family type:
town_houses = true

![](../../images/live_bouding_box_whitelist.png)

> Don't forget to add a comma at the end of the previous line!

Then I can open my TownHouse Unit in the Unit editor and add some Script Data to it. Under the Script Data tab, click on the + sign and add a string. Change the script data name to "Category Name" and its value to "town_houses". 

![](../../images/live_bbox_scriptdata.png)

This will tell Live that my new TownHouse unit is of the "town_houses" category. The line we added to the component_settings.ini file will tell Live that all units that are part of the "town_houses" category should be included in the BoundingBox. All of this logic is handled in the Lua scripts included in Live, and are available for inspection/modification, but most people will choose to simply interface with these settings files.

To view the BoundingBox, hit Ctrl+Alt+D when the project is running to open the Debug Menu, and select "Bounding Box".
