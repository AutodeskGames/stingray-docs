
ENV["SR_DOC_EXPORT_DIR"] = "..\\output\\stingray_help\\export_for_localization"
system("ruby ../make_docs.rb --stingray-help --launch")
ENV["SR_DOC_EXPORT_DIR"] = "..\\output\\source_access_help\\export_for_localization"
system("ruby ../make_docs.rb --source-access-help --launch")
ENV["SR_DOC_EXPORT_DIR"] = "..\\output\\sdk_help\\export_for_localization"
system("ruby ../make_docs.rb --sdk-help --launch")
system("pause")
