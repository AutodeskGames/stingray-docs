
ENV["SR_DOC_LANG"] = "ja-jp"
ENV["SR_DOC_AKN_LANG"] = "JPN"
ENV["SR_DOC_IMPORT_DIR"] = "..\\output\\stingray_help_ja-jp"
system("ruby ../make_docs.rb --stingray-help --launch")
system("pause")
