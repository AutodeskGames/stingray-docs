
puts("Starting to build the Interactive Component internal help...")

$script_dir = File.expand_path(File.dirname(__FILE__))
Dir.chdir("#{$script_dir}")

require 'io/console'
require_relative 'scripts/set_upload_variables'

# Set environment variables used to generate the doc and publishing it on AKN.

set_upload_variables()

system("ruby scripts/make_docs.rb --interactive-help --launch")
system("pause")
