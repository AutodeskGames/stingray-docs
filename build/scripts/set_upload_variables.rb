
def yesno
  case $stdin.getch
    when "y" then
      puts("y")
      true
    when "n" then
      puts("n")
      false
    else yesno()
  end
end

def set_upload_variables
  do_prod = "false"
  do_beta = "false"

  puts("Upload build to AKN? y/n")
  if yesno() then
    do_prod = "true"
  else
    puts("Upload build to AKN Beta? y/n")
    if yesno() then
      do_beta = "true"
    end
  end

  ENV["SR_DOC_UPLOAD"] = do_prod
  ENV["SR_DOC_UPLOAD_BETA"] = do_beta
end
