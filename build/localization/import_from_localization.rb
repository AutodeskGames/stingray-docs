$script_dir = File.expand_path(File.dirname(__FILE__))
Dir.chdir("#{$script_dir}")

require 'io/console'

puts("Importing content from localization...")

def get_language
  case $stdin.getch
    when "1" then
      ENV["SR_DOC_LANG"] = "ko-kr"
      ENV["SR_DOC_AKN_LANG"] = "KOR"
      puts ("KOREAN it is!")
      true
    when "2" then
      ENV["SR_DOC_LANG"] = "ja-jp"
      ENV["SR_DOC_AKN_LANG"] = "JPN"
      puts ("JAPANESE it is!")
      true
    else get_language()
  end
end

$flavour = "stingray"

def get_flavour
  case $stdin.getch
    when "1" then
      puts ("Stingray it is!")
      true
    when "2" then
      $flavour = "max_interactive"
      puts ("3ds Max Interactive it is!")
      true
    when "3" then
      $flavour = "maya_interactive"
      puts ("Maya Interactive it is!")
      true
    else get_flavour()
  end
end

puts("What language am I importing? Choose a number:")
puts("1: Korean")
puts("2: Japanese")
get_language()

puts("What flavour of interactive help should I build? Choose a number:")
puts("1: internal Stingray component")
puts("2: 3ds Max Interactive")
puts("3: Maya Interactive")
get_flavour()

ENV["SR_DOC_IMPORT_DIR"] = "..\\..\\output\\import_from_localization\\#{ENV["SR_DOC_LANG"]}"

puts("Reading localized content from #{ENV["SR_DOC_IMPORT_DIR"]}.")

system("ruby ../make_#{$flavour}_help.rb --launch")
