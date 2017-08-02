
puts("Starting to build the Interactive Release Notes...")

$script_dir = File.expand_path(File.dirname(__FILE__))
Dir.chdir("#{$script_dir}")

require 'io/console'
require_relative 'scripts/set_upload_variables'

set_upload_variables()

system("ruby scripts/make_docs.rb --interactive-release-notes --launch")
system("pause")
