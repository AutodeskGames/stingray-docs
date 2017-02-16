
ENV["SR_DOC_LANG"] = "ja-jp"
ENV["SR_DOC_LANG_AKN"] = "JPN"
ENV["SR_DOC_IMPORT_DIR"] = "..\\output\\sdk_help_ja-jp"
system("ruby ../make_docs.rb --sdk-help --launch")
system("pause")
