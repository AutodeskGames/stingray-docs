
puts("Starting to build the Stingray interactive component help...")

$script_dir = File.expand_path(File.dirname(__FILE__))
Dir.chdir("#{$script_dir}")

require 'io/console'
require_relative 'scripts/set_upload_variables'

# Set environment variables used to generate the doc and publish it on AKN.

ENV["SR_DOC_AKN_COMPONENT_ID"] = "Interactive-Help"
ENV["SR_DOC_AKN_PRODUCT"] = "Stingray"
ENV["SR_DOC_AKN_RELEASE"] = "NA"
ENV["SR_DOC_PROJECT_TITLE"] = "Stingray Interactive Help"
ENV["SR_DOC_LOCAL_OUTPUT"] = "interactive_help"

ENV["SR_DOC_TITLE_FORMAT"] = "$TITLE$"

ENV["SR_DOC_VARIABLES_CONFIG_FILE"] = "variables_stingray.config"

set_upload_variables()

system("ruby scripts/make_docs.rb --interactive-help --launch")
system("pause")
