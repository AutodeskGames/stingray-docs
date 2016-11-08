
filename = ARGV[0]
file_handle = File.open(filename, "rb")
file_content = file_handle.read
file_handle.close()

if not file_content.include? "\\file" and not filename.include? ".md"
	file_content = file_content + "\\n\\n/*! \\file */"
end

puts file_content