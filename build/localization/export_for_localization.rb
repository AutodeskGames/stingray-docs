
puts("Exporting the Interactive Component Help for localization...")

ENV["SR_DOC_UPLOAD"] = "false"
ENV["SR_DOC_UPLOAD_BETA"] = "false"

ENV["SR_DOC_AKN_COMPONENT_ID"] = "LOCALIZATION-EXPORT-UNUSED"
ENV["SR_DOC_AKN_PRODUCT"] = "LOCALIZATION-EXPORT-UNUSED"
ENV["SR_DOC_AKN_RELEASE"] = "NA"
ENV["SR_DOC_PROJECT_TITLE"] = "LOCALIZATION-EXPORT-UNUSED"
ENV["SR_DOC_LOCAL_OUTPUT"] = "interactive_help"

ENV["SR_DOC_TITLE_FORMAT"] = "$TITLE$"

ENV["SR_DOC_VARIABLES_CONFIG_FILE"] = "variables_stingray.config"

ENV["SR_DOC_EXPORT_DIR"] = "..\\..\\output\\export_for_localization"
system("ruby ../scripts/make_docs.rb --interactive-help")
system("pause")
