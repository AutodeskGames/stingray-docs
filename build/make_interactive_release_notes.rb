
puts("Starting to build the Interactive Release Notes...")

$script_dir = File.expand_path(File.dirname(__FILE__))
Dir.chdir("#{$script_dir}")

require 'io/console'
require_relative 'scripts/set_upload_variables'

# Set environment variables used to generate the doc and publish it on AKN.

ENV["SR_DOC_AKN_COMPONENT_ID"] = "Stingray-Release-Notes"
ENV["SR_DOC_AKN_PRODUCT"] = "Stingray"
ENV["SR_DOC_AKN_RELEASE"] = "NA"
ENV["SR_DOC_PROJECT_TITLE"] = "Stingray Component Release Notes"
ENV["SR_DOC_LOCAL_OUTPUT"] = "stingray_release_notes"

set_upload_variables()

system("ruby scripts/make_docs.rb --interactive-release-notes --launch")
system("pause")
