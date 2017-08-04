# Emit and handle editor events

While a user works in the editor, their actions trigger *events* in the JavaScript environment. Other editor sub-systems and plug-ins listen for these events and respond to them by carrying out more actions -- which may in turn emit more events for other systems to respond to.

You can connect your plug-in to this event framework by listening for events that happen in the editor, and by emitting new events of your own.

## Responding to an event

You can make your plug-in listen for and respond to events by:

-	configuring an `event` extension in your *.stingray_plugin* file to carry out an action or a set of actions when the event occurs. See ~{ Respond to an editor event }~.

-	calling the `on()` function exposed by the *event-service* module to register a JavaScript function that the editor will automatically call when the event occurs. For example:

	~~~{js}
	require(["services/event-service"], function (eventService) {
			eventService.on("my-custom-named-event", function() { console.warn("Event triggered!"); } )
		})
	~~~

## Emitting a new event

You can make your plug-in send out a new event to all listeners in the editor by:

-	configuring an `action` extension in your plug-in to emit a named event. Set the `type` of the action to `event`, and the `event` to the name of the event you want to emit. See ~{ Register an action }~.

-	calling the `emit()` or `offer()` functions exposed by the *event-service* module. Use `emit()` to trigger all listeners that have been registered to respond to the named event. Use `offer()` to only trigger *one* listener.

## Finding out event names

You need to use event names as a key when you register a listener. So, in order to take full advantage of the event framework in your plug-in, you need to know the names of the events that the editor emits, and when those events occur.

We are currently working on putting together an exhaustive list that includes all events, whether they are triggered in the editor's JavaScript layer, the plug-in layer, or the back-end C# layer. We'll make that list public as soon as possible.

For now, your plug-in will mostly be limited to respond to events that you trigger from your own plug-in. However, you can also look through the editor's JavaScript modules and the standard Stingray plug-ins to look for calls to the `on()`, `emit()` and `offer()` functions of the event service.
