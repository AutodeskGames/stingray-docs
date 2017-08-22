# Localizing audio

If you are localizing your game into multiple languages, you will likely need to load and play different audio files for dialogue and voice-overs depending on your game's current language.

If you are using Wwise for your game's audio, you can take advantage of the audio localization system built in to the Wwise editor. The Wwise engine transparently takes care of loading and playing only audio files that match your choice of language.

Setting this up involves assigning the language of each audio file when you import it into your Wwise project, and configuring your game to set the current language for the Wwise engine at runtime.

## Step 1. Set up the Wwise project

In this step, you add support for your target languages into your Wwise project.

1.	Open the Wwise project for your {{ProductName}} project. From the main menu bar in Wwise, select **Project > Languages...**

2.	In the **Language Manager** window, move all the languages you want to support from the Available Languages list into the Project Languages list.

3.	You can set any of your project languages as the "reference" language, and specify whether or not Wwise should fall back on the reference language when a sound does not have a localized audio file in the current language.

3.	Click **OK**.

## Step 2. Import localized audio files

For each sound that you need to localize in your Wwise project:

1.	Import an audio file for the reference language (typically English). In the **Audio File Importer** window, use the following settings:

	-	In the "Import Mode" drop-down box, select "Create new objects".
	-	In the "Import as" drop-down box, select "Sound Voice". Do not choose "Sound FX", as only sound voices can be localized.

2.	Import a localized version of the same audio file for each target language. In the **Audio File Importer** window, select "Localize languages".

	-	In the "Import Mode" drop-down box, select "Localize languages".
	-	The "Import as" drop-down box is disabled.
	-	In the "Destination language" drop-down box, select the language that corresponds to the audio you're importing.

Note that the audio files need to have the same filename in all languages.

For a video overview that illustrates this process, see [this video from Audiokinetic](http://www.youtube.com/watch?v=Sq-Rg5QkQTY). For additional details, see the Wwise documentation.

## Step 3. Set up your gameplay

When you want to change languages in your game at runtime, use the following sequence of events:

1.	Unload any sound banks that you currently have loaded.

	The Wwise engine only loads audio files into memory that match its current language setting. This avoids consuming memory at runtime to hold localized sounds that will likely never be needed. If you have any sound banks already loaded in your game, the new language setting will not affect them. Any sounds you play from those banks will continue to sound in the language that was in effect at the time they were loaded.

	Therefore, if you have any sound banks already loaded, you should consider unloading them before switching languages.

2.	Set the current language.

	In your {{ProductName}} project, you can set the current language for the Wwise project at any time using either of the following methods:

	-	**Flow:** Trigger the **Audio > Wwise > Global > Wwise Set Language** Flow node, and send it the name of the language in the *Name* slot.
	-	**Lua:** Call the `stingray.Wwise.set_language()` function, and pass the name of the language as a parameter.

	The language name you pass to the Flow node or the Lua function must match the name of the language in Wwise, without spaces. For example, `English(US)`, `German`, `Italian`.

3. Load or reload your sound banks. The Wwise engine now loads the audio that matches the new language setting.

---
Related topics:
-	~{ Working with audio }~
-	~{ Load sound banks at runtime }~
---
