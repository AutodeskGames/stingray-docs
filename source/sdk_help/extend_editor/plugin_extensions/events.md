# Respond to an editor event

You can use the `events` extension to make your plug-in listen for named events in the editor, and respond by carrying out actions.

For more information on editor events, see also ~{ Emit and handle editor events }~.

## Configuration

Each event extension requires the following configuration parameters.

~~~{sjson}
extensions = {
	events = [
		{
			on = "event-name"
			do = [
				"first_action"
				"second_action"
			]
			for = "global"
			options = {
				...
			}
		}
	]
}
~~~

`on`

>	The name of the event that will trigger this extension. Required.

`do`

>	An action or an array of actions that will be carried out when this extension is triggered. Each action value can be either the name of an action that you have already set up in the `actions` extension, or an inline action definition. For more information, see ~{ Register an action }~. Required.

`for`

>	Determines the scope within which the plug-in looks for events. Accepted values: `global`, `engine`, `editor`,`window`, `view`. Optional; default value is `global`.

`options`

>	An object that will get passed as an argument to each of the `do` actions. Optional.
