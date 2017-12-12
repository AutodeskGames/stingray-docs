
puts("Starting to build the Maya Interactive component help...")

$script_dir = File.expand_path(File.dirname(__FILE__))
Dir.chdir("#{$script_dir}")

require 'io/console'
require_relative 'scripts/set_upload_variables'

# Set environment variables used to generate the doc and publish it on AKN.

ENV["SR_DOC_AKN_COMPONENT_ID"] = "Maya-Interactive-Help"
ENV["SR_DOC_AKN_PRODUCT"] = "MAYAUL"
ENV["SR_DOC_AKN_RELEASE"] = "2018"
ENV["SR_DOC_PROJECT_TITLE"] = "Maya Interactive Help"
ENV["SR_DOC_LOCAL_OUTPUT"] = "maya_interactive_help"

ENV["SR_DOC_TITLE_FORMAT"] = "$TITLE$ (Maya Interactive Help)"

ENV["SR_DOC_VARIABLES_CONFIG_FILE"] = "variables_maya_interactive.config"
ENV["SR_DOC_AKN_JOB_SPEC_PARAMS"] = "<parameter name=\"applies-to\">MAYALT=2018</parameter>"

set_upload_variables()

system("ruby scripts/make_docs.rb --interactive-help --launch")
system("pause")
