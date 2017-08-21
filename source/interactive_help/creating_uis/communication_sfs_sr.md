# Communication between {{ProductName}} and Scaleform Studio

The Scaleform Studio plug-in and the {{ProductName}} engine share a common Lua virtual machine, which means that Lua code run by Scaleform Studio (when running integrated with {{ProductName}}) can invoke Lua commands from {{ProductName}}, and that {{ProductName}} can invoke Lua commands from Scaleform Studio.

If you want your Scaleform Studio project to run in the stand-alone Scaleform Studio Player, we recommend that most communication between {{ProductName}} and Scaleform Studio be handled using  the `scaleform.Stage.dispatch_event` and custom event listeners in the Scaleform Studio and {{ProductName}} Lua scripts.

The Scaleform Studio plug-in also provides `scaleform.Stingray.send_message` for sending events like mouse, keyboard, touch events from {{ProductName}} to Scaleform Studio.

>  **Note**: Calling {{ProductName}} functions within Scaleform Studio Lua scripts prevents the Scaleform Studio project from running in stand-alone mode.


*	For custom events, use `scaleform.Stage.dispatch_event`.

	You can send other event types using `scaleform.Stage.dispatch_event`, but the plug-in also provides direct support for many of these events with `scaleform.Stingray.send_message`, such as Keyboard, Mouse, or Touch.

	For a complete list of event types in Scaleform Studio, refer to the Lua reference documentation [here](http://www.autodesk.com/scaleformstudio-help?guid=__lua_ref_enu_scaleform_EventTypes_html).

*	`scaleform.Stage.dispatch_event` processes the event immediately.

*	`scaleform.Stingray.send_message` buffers until the next `Update` is called to advance the Scaleform Studio project (s2dproj).

*	If your project uses the Appkit, like all of the default template projects, the player's Mouse, Keyboard, and Touch input is automatically passed to Scaleform Studio from {{ProductName}}.


**Example: Sending mouse input to Scaleform Studio from {{ProductName}}**


~~~

	--Send Mouse Cursor motion and Left Button Down and Up events.
	scaleform.Stingray.send_message("mouse_move" ,
		stingray.Mouse.axis(stingray.Mouse.axis_index("cursor"), stingray.Mouse.RAW, 3).x,
		stingray.Mouse.axis(stingray.Mouse.axis_index("cursor"), stingray.Mouse.RAW, 3).y)

	--Left Mouse Button Down
	if(stingray.Mouse.pressed(stingray.Mouse.button_index("left"))) then
		scaleform.Stingray.send_message("mouse_down",
			stingray.Mouse.axis(stingray.Mouse.axis_index("cursor"), stingray.Mouse.RAW, 3).x,
		 stingray.Mouse.axis(stingray.Mouse.axis_index("cursor"), stingray.Mouse.RAW, 3).y, 0)
	end

	--Left Mouse Button Up
	if(stingray.Mouse.released(stingray.Mouse.button_index("left"))) then
		scaleform.Stingray.send_message("mouse_up",
			stingray.Mouse.axis(stingray.Mouse.axis_index("cursor"), stingray.Mouse.RAW, 3).x,
			stingray.Mouse.axis(stingray.Mouse.axis_index("cursor"), stingray.Mouse.RAW, 3).y, 0)
 	end

~~~

**Example: Loading a Main Menu template using custom messages**

From Lua scripts in your {{ProductName}} project, you can load a Scaleform Studio project and send custom events to the project.

~~~

	scaleform.Stingray.load_project("template_menu.s2dproj", "content/ui/template_menu")
	scaleform.Stage.dispatch_event( { eventId = scaleform.EventTypes.Custom, name = "set_title",
							    data = "Main Menu" } )
	scaleform.Stage.dispatch_event( { eventId = scaleform.EventTypes.Custom,
	                            name = "add_menu_item",
					            data = { itemText="Basic Level",
	                                     keyText=Appkit.Util.plat("1", "a", "1", "cross") } } )
	scaleform.Stage.dispatch_event( { eventId = scaleform.EventTypes.Custom,
	                            name = "add_menu_item",
	                            data = { itemText="Exit",
	                                     keyText=Appkit.Util.plat("esc", "b", "esc", "circle")} } )

~~~

**Example: Registering a Scaleform Studio custom Listener in {{ProductName}}**

This listens for all custom events and processes them using a provided function.

~~~

	customListener = scaleform.EventListener.create(customListener, MainMenu.on_custom_event)
    scaleform.EventListener.connect(customListener, scaleform.EventTypes.Custom)

~~~

This custom function listens for an event and record which menu button is pressed.

~~~

	MainMenu.action = nil
	function MainMenu.on_custom_event(evt)
		if evt.name == "button_pressed" then
			if evt.data.button_type == "menu_item" then
				MainMenu.action = evt.data.button_id
			end
		end
	end
~~~
