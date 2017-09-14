# Dealing with localization hand-offs

The Stingray Help is currently translated into Korean and Japanese. This directory contains some scripts that help with handing off the content to the localization team, and consuming the translated docs.

The process should be pretty push-button, as long as you have the regular requirements for building the docs installed. For details, see the [docs/readme.md](../../readme.md) file.

## Exporting content for localization

When the content for a given release is ready, and you want to hand it off to localization:

1. Run the `export_for_localization.rb` script in this directory. This runs a regular build of the English docs, and writes out a "raw" export of the content for the localization team to work with into this folder:

	`export_for_localization`

3. Create a .zip package of the `export_for_localization` folder you created, and send it to Loc.

This single package includes the content for all "flavours" of the product docs, with conditional markings and variable names intact. Those will be finalized later, when you import the translated content that comes back from localization.

## Importing translated content

The HTML files the localization team works with are in an intermediate state. They still need some processing in order to be ready for the online AKN presentation format. To finish the processing:

1.	Copy the translated content given to you by localization into a language-specific sub-folder under `stingray-docs/output/import_from_localization`. The name of this sub-folder should be the language and country code of the localized content. For example:

	-	`stingray-docs/output/import_from_localization/ko-kr`
	-	`stingray-docs/output/import_from_localization/ja-jp`

	Each of these language folders should contain the set of sub-folders that were exported for localization, like `interactive_help`, `lua_ref`, `shaders_ref`, `flow_ref`, etc.

3.	In the `stingray-docs/build/localization` folder, run the `import_from_localization` script.

You'll be asked what language the content you're importing is in, and what flavour of the interactive help you want to build. Then it'll run a regular doc build, asking you if you want to upload the localized build to AKN production staging or beta staging. However, this build will grab the content from the localized folder you set up above instead of from the regular English source location.

  > Tip: If you don't immediately see the new content on AKN staging, you can confirm the docs are getting pushed to AKN by looking in the AKN publishing tool to check timestamps.
