
require 'io/console'

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

$script_dir = File.expand_path(File.dirname(__FILE__))
Dir.chdir("#{$script_dir}")

puts("Starting to build the Interactive Release Notes...")

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

system("ruby scripts/make_docs.rb --interactive-release-notes --launch")
system("pause")
