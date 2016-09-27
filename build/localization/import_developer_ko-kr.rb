
ENV["SR_DOC_LANG"] = "ko-kr"
ENV["SR_DOC_LANG_AKN"] = "KOR"
ENV["SR_DOC_IMPORT_DIR"] = "..\\output\\developer_ko-kr"
system("ruby ../make_docs.rb --dev-help --launch")
system("pause")
