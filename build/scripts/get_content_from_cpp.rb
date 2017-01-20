$script_dir = File.expand_path(File.dirname(__FILE__))

$engine_dir = ENV["SR_SOURCE_DIR"]
if $engine_dir == nil or $engine_dir.empty?
	$engine_dir = "#{$script_dir}/../../stingray"
end
$engine_dir = "#{$engine_dir}".gsub("\\","/")

TAG = "<!-- The following content is automatically generated. Do not edit by hand. -->"

def run_extractions()

	# get the command line parameters for the engine executable.
	in_file = "#{$script_dir}/../../source/stingray_help/reference/_engine_command_line.in"
	markdown_file = "#{$script_dir}/../../source/stingray_help/reference/engine_command_line.md"
	alphabetize = false
	make_toc = false
	should_join_lines = true
	extract(in_file,
			markdown_file,
			alphabetize,
			make_toc,
			should_join_lines,
			"#{$engine_dir}/runtime/application/application_options.cpp")

	# get the console commands.
	in_file = "#{$script_dir}/../../source/stingray_help/reference/_console_commands.in"
	markdown_file = "#{$script_dir}/../../source/stingray_help/reference/console_commands.md"
	alphabetize = true
	make_toc = true
	should_join_lines = false
	extract(in_file,
			markdown_file,
			alphabetize,
			make_toc,
			should_join_lines,
			"#{$engine_dir}/runtime/application/script/interface/*.cpp",
			"#{$engine_dir}/runtime/game/*.cpp")

end

def join_lines(block)
	marker = "__PARAGRAPH_MARKER_DLKSJFJKL_"
	return block.gsub(/\n\s*\n/, marker).gsub(/\s*\n\s*/, ' ').gsub(marker, "\n\n").strip + "\n"
end

# source_files can be any number of files or glob patterns that contain markdown blocks to be extracted.
def extract(in_file, markdown_file, alphabetize, make_toc, should_join_lines, *source_files)

	raise "#{in_file} not found." unless File.exist?(in_file)

	markdown_blocks = []

	# parse each source file.
	source_files.each do |source_file|
		Dir.glob(source_file)  {|thisfile|
			# record each block in the source file into an array of blocks.
			last_was_doc_line = false
			markdown_block = ''
			IO.readlines(thisfile).each do |line|
				is_doc_line = line[/^\s*\/\/\%\s(.*)/]
				markdown_block << $1 << "\n" if is_doc_line
				if !is_doc_line && last_was_doc_line then
					markdown_block = join_lines(markdown_block) if should_join_lines
					markdown_block << "\n"
					markdown_blocks.push(markdown_block)
					markdown_block = ''
				end
				last_was_doc_line = is_doc_line
			end
		}
	end

	# sort all the blocks alphabetically, if needed.
	markdown_blocks = markdown_blocks.sort if alphabetize

	markdown = File.read(in_file)

	# paste the blocks into the target markdown file.
	if markdown[/^#{TAG}.*/m] then
		allblocks = ""
		toc = ""
		markdown_blocks.each do |block|
			toctext = /^\#+\s+(.+)/.match(block.lines.first)
			toc << "*	[" << toctext.captures[0] << "]\n" if toctext
			allblocks << block
		end
		toc << "\n"

		allblocks = toc + allblocks if make_toc
		markdown = markdown.gsub(/^#{TAG}.*/m, "#{TAG}\n\n#{allblocks}")

		File.open(markdown_file, 'w') do |f|
			f.write(markdown)
		end
	else
		raise "Required tag '#{TAG}' not found in markdown file #{markdown_file}."
	end

end

run_extractions()
