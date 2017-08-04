
ENV["SR_DOC_LANG"] = "ja-jp"
ENV["SR_DOC_AKN_LANG"] = "JPN"
ENV["SR_DOC_IMPORT_DIR"] = "..\\output\\source_access_help_ja-jp"
system("ruby ../make_docs.rb --source-access-help --launch")
system("pause")
