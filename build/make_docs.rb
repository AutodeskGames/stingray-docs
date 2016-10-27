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
	$doctools_dir = "#{$script_dir}/ixg-doc-tools"
else
	puts "Overriding this repo's copy of IXG doc tools to use the %IXG_DOCTOOLS_DIR% location: "
	puts "#{$doctools_dir}"
end


$options = {}
def parse_options(argv, options)
	opt_parser = OptionParser.new do |opts|
		opts.banner = "Usage: make_docs.rb [options]"
		opts.on("--all", "Build all docs.") { |v| options[:all] = v }
		opts.on("--verbose", "Print verbose details.") { |v| options[:verbose] = v }
		opts.on("--[no-]dev-help", "Build the Stingray Developer Help for source customers.") { |v| options[:dev_help] = v }
		opts.on("--[no-]stingray-help", "Build the main Stingray Help.") { |v| options[:help] = v }
		opts.on("--[no-]tutorials", "Build the Stingray tutorials.") { |v| options[:tutorials] = v }
		opts.on("--[no-]source-access-help", "Build the Stingray Source Access Help.") { |v| options[:source_access_help] = v }
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
	if not ENV["SR_DOC_LANG_AKN"] then
		ENV["SR_DOC_LANG_AKN"] = "ENU"
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

$output_dir = "#{$script_dir}/../output"
def make_output_dir()
	unless Dir.exists?($output_dir)
		FileUtils.mkdir_p($output_dir)
	end
end

def build()
	if $options[:dev_help] or $options[:all]
		puts "Generating HTML for Stingray Developer Help..."
		puts "NOTE: this build is deprecated in English. It is only kept temporarily to support localizing old content..."
		output_path = "output/developer_help/#{$lang_dir}/preview"
		system("#{$doctools_dir}/tools/ADE-HTML-2.1-tools.exe", "#{$script_dir}/config_developer_help.xml")
		puts "Done. Look under #{output_path}."
		if $options[:dev_help] and $options[:launch]
			system("start", "#{$script_dir}/../#{output_path}/index.html")
		end
	end

	if $options[:source_access_help] or $options[:all]
		puts "Generating HTML for Stingray Source Access Help..."
		output_path = "output/source_access_help/#{$lang_dir}/preview"
		system("#{$doctools_dir}/tools/ADE-HTML-2.1-tools.exe", "#{$script_dir}/config_source_access_help.xml")
		puts "Done. Look under #{output_path}."
		if $options[:source_access_help] and $options[:launch]
			system("start", "#{$script_dir}/../#{output_path}/index.html")
		end
	end

	if $options[:tutorials] or $options[:all]
		puts "Building the Stingray Tutorials..."
		output_path = "output/tutorials/#{$lang_dir}/preview"
		system("#{$doctools_dir}/tools/ADE-HTML-2.1-tools.exe", "#{$script_dir}/config_tutorials.xml")
		puts "Done. Look under #{output_path}."
		if $options[:tutorials] and $options[:launch]
			system("start", "#{$script_dir}/../#{output_path}/index.html")
		end
	end

	if $options[:help] or $options[:all]
		puts "Generating HTML for main Stingray help..."
		output_path = "output/stingray_help/#{$lang_dir}/preview/"
		# Run reference doc generation in the engine submodule
		ENV["SR_DOCTOOLS_DIR"] = $doctools_dir
		ENV["SR_DOC_DIR"] = "#{$script_dir}/.."
		system("ruby", "../stingray/docs/build/make_docs.rb", "--shader-ref")
		system("ruby", "../stingray/docs/build/make_docs.rb", "--flow-ref")
		system("ruby", "../stingray/docs/build/make_docs.rb", "--lua-ref")
		ENV["SR_DOC_DIR"] = ""
		ENV["SR_DOCTOOLS_DIR"] = ""
		# Generate the main help and bundle it
		system("#{$doctools_dir}/tools/ADE-HTML-2.1-tools.exe", "#{$script_dir}/config_stingray_help.xml")
		puts "Done. Look under #{output_path}."
		if $options[:help] and $options[:launch]
			system("start", "#{$script_dir}/../#{output_path}/index.html")
		end
	end
end

parse_options(ARGV, $options)
validate_options()
make_output_dir()
build()
