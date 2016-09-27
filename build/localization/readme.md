# Dealing with localization hand-offs

The Stingray Help is currently translated into Korean, and soon will be translated into Japanese. This directory contains some scripts that help with handing off the content to the localization team, and consuming the translated docs.

The process should be pretty push-button, as long as you have the regular requirements for building the docs installed. For details, see the [docs/readme.md](../../readme.md) file.

## Exporting content for localization

When the content for a given release is ready, and you want to hand it off to localization, run the `export_for_localization.rb` script in this directory. This runs a regular build of the English docs, and writes out a "raw" export of the content for the localization team to work with. This raw export is written to:

`docs/output/stingray_help/export_for_localization`
and
`docs/output/developer_help/export_for_localization`

## Importing translated content

The HTML files the localization team works with are in an intermediate state. They still need some processing in order to be ready for either the online AKN or offline ADE-2.1 presentation formats. To finish the processing:

1. In the config_stingray_help.xml and/or config_stingray_developer_help.xml file (located in `docs/build` folder) set post_to_AKN to true.

2.	Copy the localized content into a `docs/output/stingray_help_<lang-code>` folder and/or a `/docs/output/developer_<lang-code>` folder.

For example, to build the Korean docs you'd need a `docs/output/stingray_help_ko-kr` folder, which contains the folders `flow_ref`, `lua_ref`, `stingray_help`, etc.

And to build the Korean developer docs, you need `/docs/output/developer_ko-kr`, which contains the folders `developer` and `images`.

3.	Run the appropriate `import_<lang-code>` script in this directory (import_stingray_help_ko-kr.rb,  import_developer_ko-kr.rb, or both). These run a regular doc build, but grab the content from the `docs/output/stingray_help_<lang-code>` and `/docs/output/developer_<lang-code>` folders instead of the regular English source location.
