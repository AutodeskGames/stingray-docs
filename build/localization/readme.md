# Dealing with localization hand-offs

The Stingray Help is currently translated into Korean and Japanese. This directory contains some scripts that help with handing off the content to the localization team, and consuming the translated docs.

The process should be pretty push-button, as long as you have the regular requirements for building the docs installed. For details, see the [docs/readme.md](../../readme.md) file.

## Exporting content for localization

When the content for a given release is ready, and you want to hand it off to localization:

1. In your local stingray-docs/output folder, create empty folders named 'export_for_localization' in the following 3 locations:

`stingray_help/export_for_localization`
and
`source_access_help/export_for_localization`
and
`sdk_help/export_for_localization`

2. Run the `export_for_localization.rb` script in this directory. This runs a regular build of the English docs, and writes out a "raw" export of the content for the localization team to work with. (Into the folders you created in step 1.)

3. Create .zip packages of the three `export_for_localization` folders you created, and send them to Loc.

## Importing translated content

The HTML files the localization team works with are in an intermediate state. They still need some processing in order to be ready for either the online AKN or offline ADE-2.1 presentation formats. To finish the processing:

1. In the config_stingray_help.xml and/or config_stingray_developer_help.xml file (located in `docs/build` folder) set post_to_AKN to true.

2.	Copy the localized content into a `docs/output/stingray_help_<lang-code>` folder and/or a `/docs/output/developer_<lang-code>` folder.

For example, to build the Korean docs you'd need a `docs/output/stingray_help_ko-kr` folder, which contains the folders `flow_ref`, `lua_ref`, `stingray_help`, etc.

And to build the Korean developer docs, you need `/docs/output/developer_ko-kr`, which contains the folders `developer` and `images`.

3.	Run the appropriate `import_<lang-code>` script in this directory (import_stingray_help_ko-kr.rb,  import_developer_ko-kr.rb, or both). These run a regular doc build, but grab the content from the `docs/output/stingray_help_<lang-code>` and `/docs/output/developer_<lang-code>` folders instead of the regular English source location.
