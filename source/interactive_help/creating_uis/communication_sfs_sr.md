# Взаимодействие между {{ProductName}} и Scaleform Studio

Плагин Scaleform Studio и {{ProductName}} engine разделяет common Lua virtual machine, что означает что Lua code запущенный из Scaleform Studio (при запущенной интеграции с  {{ProductName}}) может вызывать Lua команды из {{ProductName}}, и что {{ProductName}} может вызывать Lua команды из Scaleform Studio.

Если вы хотите запускать проект Scaleform Studio в stand-alone Scaleform Studio Player, мы рекомендуем для лучшего взаимодействия между  {{ProductName}} и Scaleform Studio использовать `scaleform.Stage.dispatch_event` и собственные слушатели событий в Scaleform Studio и {{ProductName}} Lua скриптах.

Плагин Scaleform Studio также предлагает `scaleform.Stingray.send_message` для отсылки events таких как клики мыши, клавиатуры, касаний из {{ProductName}} в Scaleform Studio.

>  **Note**: Вызов функций {{ProductName}} со Scaleform Studio Lua scripts предотвращает Scaleform Studio project от запуска в режиме stand-alone .


*	Для кастомных events, используйте `scaleform.Stage.dispatch_event`.

	Вы можете отправлять другие типы событий, используя `scaleform.Stage.dispatch_event`, но плагин также обеспечивает прямую поддержку для многих из этих событий с помощью `scaleform.Stingray.send_message`, таких как Keyboard, Mouse, или Touch.

	Полный список типов событий в Scaleform Studio, доступен в Lua reference documentation [here](http://www.autodesk.com/scaleformstudio-help?guid=__lua_ref_enu_scaleform_EventTypes_html).

*	`scaleform.Stage.dispatch_event` немедленно обрабатывает событие.

*	`scaleform.Stingray.send_message` buffers until the next `Update` is called to advance the Scaleform Studio project (s2dproj).

*	Если ваш проект использует Appkit, как все дефолтные шаблоны проектов, то действия игрока с Mouse, Keyboard, и Touch input автоматически передаются в Scaleform Studio из {{ProductName}}.


**Пример: Отсылаем mouse input в Scaleform Studio из {{ProductName}}**


~~~

	--Посылаем движение курсора мыши и события Left Button Down и Up.
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

**Пример: Загружаем шаблон Main Menu используя custom messages**

Из Lua scripts вашего {{ProductName}} project, вы можете загружать Scaleform Studio проект и отсылать кастомные события в проект.

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

**Пример: регистрируем собственного слушателя событий Scaleform Studio в {{ProductName}}**

Он прослушивает все пользовательские события и обрабатывает их с помощью предоставленной функции.

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
