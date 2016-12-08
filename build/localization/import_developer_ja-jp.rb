
ENV["SR_DOC_LANG"] = "ja-jp"
ENV["SR_DOC_LANG_AKN"] = "JPN"
ENV["SR_DOC_IMPORT_DIR"] = "..\\output\\developer_ja-jp"
system("ruby ../make_docs.rb --dev-help --launch")
system("pause")
