
puts("Starting to build the Max Interactive component help...")

$script_dir = File.expand_path(File.dirname(__FILE__))
Dir.chdir("#{$script_dir}")

require 'io/console'
require_relative 'scripts/set_upload_variables'

# Set environment variables used to generate the doc and publish it on AKN.

ENV["SR_DOC_AKN_COMPONENT_ID"] = "Max-Interactive-Help"
ENV["SR_DOC_AKN_PRODUCT"] = "3DSMAX"
ENV["SR_DOC_AKN_RELEASE"] = "2018"
ENV["SR_DOC_PROJECT_TITLE"] = "3ds Max Interactive Help"
ENV["SR_DOC_LOCAL_OUTPUT"] = "max_interactive_help"

ENV["SR_DOC_TITLE_FORMAT"] = "$TITLE$ (3ds Max Interactive Help)"

ENV["SR_DOC_VARIABLES_CONFIG_FILE"] = "variables_max_interactive.config"

set_upload_variables()

system("ruby scripts/make_docs.rb --interactive-help --launch")
system("pause")
