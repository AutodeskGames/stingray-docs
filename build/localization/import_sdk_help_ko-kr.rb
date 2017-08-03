
ENV["SR_DOC_LANG"] = "ko-kr"
ENV["SR_DOC_AKN_LANG"] = "KOR"
ENV["SR_DOC_IMPORT_DIR"] = "..\\output\\sdk_help_ko-kr"
system("ruby ../make_docs.rb --sdk-help --launch")
system("pause")
