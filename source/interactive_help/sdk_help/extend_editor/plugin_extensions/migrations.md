# Migrate an older project

You can use the `migrations` extension to make each version of your plug-in carry out a set of actions when the user loads an older project for the first time.

The typical use for this extension is to upgrade data assets managed your plug-in when the format of that data changes between two versions of your plug-in.

For example, say that version `1.0.5` of your plug-in saves some custom data in an asset within the project. However, in version `1.0.6` of your plug-in, you need to change the structure of that data such that your plug-in is no longer compatible with the data created by version `1.0.5`. In this case, you can create a migration extension in version `1.0.6`. When the editor loads a project that has not yet been used with version `1.0.6`, it will invoke the actions you define in that migration extension. This gives your plug-in a chance to update the old data in the project to your new format before the project is fully loaded.

## How it works

Each migration extension has a *patch ID* that identifies it. Each time the editor runs a migration extension for a project, it saves the current version of that plug-in in the project settings, along with a list of all migration *patch IDs* it has ever run for that plug-in. These patch IDs tell the editor which migrations have already been applied to the current project for that plug-in, so that the data migration will not happen multiple times to the same project.

Whenever the editor loads a project, it iterates through each active plug-in's migration extensions, and compares the configuration of each one against the data saved in the project. For each migration extension, the editor runs its configured migration actions only if *both* of the following conditions are true:

-	The plug-in version that was used for the last migration (saved in the project settings) is *lower* than the version configured in the migration extension, *or* no last migrated version has been recorded in the project for this plug-in yet (meaning this plug-in has never run any migrations on this project before).

-	The patch ID configured for the migration extension is also *not* yet listed in the project.

If the editor does run the migration actions for a migration extension, it then saves that extension's patch ID into the project so that the migration will not be run again on that project.

## Configuration

Migration extensions accept the following parameters.

~~~{sjson}
extensions = {
	migrations = [
		{
			id = "GUID-2565-5475-AB6678DFE"
			version = "1.0.4"
			do = [
				"migration_action_1"
				"migration_action_2"
			]
			rollback = [
				"undo_action_2"
				"undo_action_1"
			]
			deferred = false
		}
	]
}
~~~

`id`

>	A string value that is used to identify the changes applied by this migration extension. This value must be unique across all of the migration extensions that you configure for your plug-in. See [How it works] above. Required.

`version`

>	A plug-in version number that is compared against the last version number saved in the project for your plug-in. See [How it works] above. Optional. If omitted, the migration patch will only be applied if no other migration patches have ever been recorded for this plug-in with the current project.

`do`

>	An action or an array of actions that the editor will carry out if it determines from the `id` and `version` settings that the project needs to be migrated. Each action can be either the name of an action that you have already set up in the `actions` extension, or an inline action definition. For more information, see ~{ Register an action }~. Required.
>
>	Your action should produce a string value. This value will be saved in the project settings along with this ID, to indicate the result of this plug-in migration.
>
>	-	If your action points to a function that is defined in a script module, your function can simply return the string you want to save.
>
>	-	If your action is defined inline in your plug-in, you can return the string as follows:
>
>		~~~{js}
>		{
>			name = "migration_action_1"
>			type = "js"
>			script = """
>				// ... do migration tasks here
>				"the string to be saved"
>			"""
>		}
>		~~~

`rollback`

>	An action or an array of actions that the editor will carry out if it needs to rollback this migration. These actions should undo whatever modifications the `do` parameter does. Each action can be either the name of an action that you have already set up in the `actions` extension, or an inline action definition. For more information, see ~{ Register an action }~. Optional.

`deferred`

>	Determines whether the migration actions should be delayed until after the project is fully loaded and the editor starts its internal instance of the Stingray engine. This can be useful if your migration action depends on having the engine environment in place in order to do what it needs to do. For example, if you want your action to run a Lua script, or if you depend on some other services provided by the engine. Optional; the default value is `false`.
