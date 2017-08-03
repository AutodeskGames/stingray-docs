#******************************************************************************
#
# make_docs.rb - handles doc build tasks
#
# This file can be called on its own, if you specify which parts of the doc
# you want to build on the command line. There are also dedicated scripts for
# building the various parts on their own.
#
#******************************************************************************

require 'optparse'
require 'fileutils'

$script_dir = File.expand_path(File.dirname(__FILE__))
Dir.chdir("#{$script_dir}")

$doctools_dir = ENV["IXG_DOCTOOLS_DIR"]
if $doctools_dir == nil or $doctools_dir.empty?
	$doctools_dir = "#{$script_dir}/../ixg-doc-tools"
else
	puts "Overriding this repo's copy of IXG doc tools to use the %IXG_DOCTOOLS_DIR% location: "
	puts "#{$doctools_dir}"
end

$engine_dir = ENV["SR_SOURCE_DIR"]
if $engine_dir == nil or $engine_dir.empty?
	$engine_dir = "#{$script_dir}/../../stingray"
else
	puts "Overriding this repo's copy of the Stingray engine source to use the %SR_SOURCE_DIR% location: "
	puts "#{$engine_dir}"
end

$options = {}
def parse_options(argv, options)
	opt_parser = OptionParser.new do |opts|
		opts.banner = "Usage: make_docs.rb [options]"
		opts.on("--all", "Build all docs.") { |v| options[:all] = v }
		opts.on("--verbose", "Print verbose details.") { |v| options[:verbose] = v }
		opts.on("--[no-]interactive-release-notes", "Build the internal release notes for the Stingray component.") { |v| options[:interactive_release_notes] = v }
		opts.on("--[no-]interactive-help", "Build the main Stingray Help.") { |v| options[:interactive_help] = v }
		opts.on("--[no-]launch", "Launch the things you have built in the default browser.") { |v| options[:launch] = v }
	end

	# Parse options
	begin
		opt_parser.parse(argv)
	rescue OptionParser::ParseError => e
		puts e
		puts
		puts opt_parser
		exit 1
	end

	return opt_parser
end

def validate_options()
	if not ENV["SR_DOC_LANG"] then
		ENV["SR_DOC_LANG"] = "en-us"
	end
	if not ENV["SR_DOC_AKN_LANG"] then
		ENV["SR_DOC_AKN_LANG"] = "ENU"
	end
	if not ENV["SR_DOC_EXPORT_DIR"] then
		ENV["SR_DOC_EXPORT_DIR"] = ""
	end
	if not ENV["SR_DOC_IMPORT_DIR"] then
		ENV["SR_DOC_IMPORT_DIR"] = ""
	end
	$lang_import_dir = ENV["SR_DOC_IMPORT_DIR"]
	$lang_dir = ENV["SR_DOC_LANG"]
end

$output_dir = "#{$script_dir}/../../output"
def make_output_dir()
	unless Dir.exists?($output_dir)
		FileUtils.mkdir_p($output_dir)
	end
end
$output_path_segment = ENV["SR_DOC_LOCAL_OUTPUT"]

def build()

	if $options[:interactive_release_notes] or $options[:all]
		puts "Generating HTML for the interactive component internal release notes..."
		output_path = "output/#{$output_path_segment}/#{$lang_dir}/preview"
		system("#{$doctools_dir}/tools/ADE-HTML-2.1-tools.exe", "#{$script_dir}/../config/interactive_release_notes.xml")
		puts "Done. Look under #{output_path}."
		if $options[:interactive_release_notes] and $options[:launch]
			system("start", "#{$script_dir}/../../#{output_path}/index.html")
		end
	end

  if $options[:interactive_help] or $options[:all]
		puts "Building the interactive component help..."
		output_path = "output/#{$output_path_segment}/#{$lang_dir}/preview/"
		if $lang_import_dir == ""
			# Run reference doc generation in the engine submodule
			ENV["SR_DOCTOOLS_DIR"] = $doctools_dir
			ENV["SR_DOC_DIR"] = "#{$script_dir}/../.."
			#system("ruby", "#{$engine_dir}/docs/build/make_docs.rb", "--shader-ref")
			#system("ruby", "#{$engine_dir}/docs/build/make_docs.rb", "--flow-ref")
			#system("ruby", "#{$engine_dir}/docs/build/make_docs.rb", "--lua-ref")
			ENV["SR_DOC_DIR"] = ""
			ENV["SR_DOCTOOLS_DIR"] = ""
			puts "Getting latest command docs..."
			system("ruby", "#{$script_dir}/get_content_from_cpp.rb")
		end
		# Generate the main help and bundle it
		puts "Generating and bundling the full help..."
		ENV["SR_ENGINE_DIR"] = "#{$engine_dir}".gsub("/","\\")
    ENV["SR_PLUGINS_DIR"] = "#{$script_dir}/../../stingray-plugin-api-samples"
		system("#{$doctools_dir}/tools/ADE-HTML-2.1-tools.exe", "#{$script_dir}/../config/interactive_help.xml")
    ENV["SR_PLUGINS_DIR"] = ""
		ENV["SR_ENGINE_DIR"] = ""
		puts "Done. Look under #{output_path}."
		if $options[:interactive_help] and $options[:launch]
			system("start", "#{$script_dir}/../../#{output_path}/index.html")
		end
  end

end

parse_options(ARGV, $options)
validate_options()
make_output_dir()
build()
