
ENV["SR_DOC_EXPORT_DIR"] = "..\\output\\stingray_help\\export_for_localization"
system("ruby ../make_docs.rb --stingray-help --launch")
ENV["SR_DOC_EXPORT_DIR"] = "..\\output\\developer_help\\export_for_localization"
system("ruby ../make_docs.rb --dev-help --launch")
system("pause")
