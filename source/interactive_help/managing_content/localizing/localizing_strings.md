# Localizing strings

If you need your game to be translated into multiple languages, one of your key needs will likely be a set of strings for each target language, typically for displaying in some kind of UI.

Stingray offers a built-in mechanism for swapping and accessing localized strings at runtime through the use of *.strings* resources.

## About *.strings* resources

A *.strings* resource is an SJSON file that contains a set of string identifiers along with corresponding string values for different languages. Note that the English strings (identified by the key "en") will be used by default if no other languages is specified.

For exampe, a *menu.strings* resource for localizing menus may look like this:

~~~{sjson}
menu_option_back = {
    en = "Back"
    fr = "Retour"
}
menu_option_forward = {
    en = "Forward"
    fr = "Suivant"
}
menu_option_start = {
    en = "Start"
    fr = "Commencer"
}
menu_option_quit = {
    en = "Quit"
    fr = "Quitter"
}
~~~

## Getting localized strings at runtime

To get a string from a *.strings* resource at runtime, use the `stingray.Localizer` object.

1.	Create a new `Localizer` object by calling the `stingray.Localizer()` function. Pass the name of the *.strings* resource you want it to manage.

2.	Call the `stingray.Localizer.lookup()` function. Pass it your `Localizer` object and the identifier of the string you want to retrieve from the file.

For example:

~~~{lua}
local myLocalizer = stingray.Localizer("menu")
local fwd_string = stingray.Localizer.lookup(myLocalizer, "menu_option_forward")
~~~

To change language, use the `stingray.Localizer.set_language()` function to set the language to one of the language identifiers used in the `.strings` file. After you have changed the language, future calls to `stingray.Localizer.lookup()` will return strings in the new language. Set the language to `en` to go back to English:

~~~{lua}
stingray.Localizer.set_language("fr")
~~~

## Authoring *.strings* resources

You can write a reference *.strings* resource in any text editor.

Since these resource files are essentially just lists of key-value pairs, any external translation providers that you work with should be able to handle these files to create localized versions.

Alternatively, Stingray provides a small utility called the Localizer tool, which you can find at `tools\Localizer.exe` within your Stingray installation directory. You can use this tool to manage the localization of multiple languages at the same time.

<!-- TODO: if we're going to keep this little tool, we should probably say how to use it. -->
