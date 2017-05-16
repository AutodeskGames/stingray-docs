-- @adoc lua
-- @exa ex_snippets.save_load Saving and loading data
-- @des This example shows how you can use the [stingray.SaveSystem] interface to save runtime data to
-- a file on disk and read it back into the project later.
--
-- Note that saving and loading operations both involve accessing the hard disk, which can be slow.
-- Therefore, both saving and loading are *asynchronous* operations that happen in the background while
-- the next lines in your code continue to run. They probably won't actually finish until a future frame.
-- This means that your data won't be available right away. You have to check back with the [stingray.SaveSystem]
-- every frame to see if it's finished.
--
-- Each time you ask the [stingray.SaveSystem] to save or load some data, it gives you a *token* that identifies
-- that particular request. After you make the request, you can call [stingray.SaveSystem.progress()] and pass it the
-- token to get a table that contains the status of that request. If you asked the [stingray.SaveSystem] to load data,
-- that status table will also contain the loaded data in its `.data` field.
--
-- When the save or load request is done, and you've read the data out of the status table, you should
-- call [stingray.SaveSystem.close()] and pass it your token in order to clear the memory being used by that request.
--
-- This simplified sample uses the `9` and `0` keys to trigger saves and loads respectively.


-- cache tokens in variables that will persist to future frames
save_filename = "my_data_file"
save_token = nil
load_token = nil

-- this update code is taken from a `project.lua` file in one of the standard Stingray template projects that
-- uses the Appkit.
function Project.update(dt)

	-- some data to test our save and load code.
	-- replace this with your own data.
	local data_to_save = {
		string_field = "hello world!",
		table_field = {
			boolean_one = true,
			boolean_two = false
		}
		-- let's use a random number that gets re-generated each frame, so we can tell
		-- that we're loading the same data we last saved.
		number_field = stingray.Math.random(0,100),
	}

	-- translate error codes into something human-readable and log them.
	function handle_error(code)
		if save_progress.error == "STINGRAY_SAVEDATA_ERROR_MISSING" then
			print("The file you're looking for does not exist.")
		elseif save_progress.error == "STINGRAY_SAVEDATA_INVALID_FILENAME" then
			print("The filename you've asked for isn't valid on this platform.")
		elseif save_progress.error == "STINGRAY_SAVEDATA_IO_ERROR" then
			print("A disk error occurred reading or writing data.")
		elseif save_progress.error == "STINGRAY_SAVEDATA_BROKEN" then
			print("Your save data seems to be corrupted.")
		elseif save_progress.error == "STINGRAY_SAVEDATA_UNSUPPORTED_VERSION" then
			print("The data was saved using an older version of Stingray, and isn't compatible with this version.")
		end
	end

	-- this helper function checks the different states a progress token can have, and
	-- decides how to handle each one.
	function check_token(token)
		if token then
			local save_progress = stingray.SaveSystem.progress(token)
			if not save_progress then return end
			if save_progress.error then
				print("An error occurred in the save or load operation!")
				handle_error(save_progress.error)
			elseif save_progress.done then
				print("Completed.")
				stingray.SaveSystem.close(token)
				-- For load operations, we return the loaded data.
				-- For save operations, we return true to indicate the token has been cleared.
				return save_progress.data or true
			elseif save_progress.progress > 0 then
				local percentage = save_progress.progress * 100
				print(tostring(percentage) .. "% completed.")
			end
		end
		return false
	end

	-- when the project needs to save some data:
	-- if a save isn't already in progress, start one and get a token.
	if stingray.Keyboard.pressed(stingray.Keyboard.button_id("9")) and not save_token then
		save_token = stingray.SaveSystem.auto_save(save_filename, data_to_save)
		print("The saved random number is: " .. tostring(data_to_save.number_field))
	end
	-- if a save is currently in progress:
	if save_token then
		-- if the save operation is done, clear the cached token.
		if check_token(save_token) then save_token = nil end
	end

	-- when the project needs to load some data:
	-- if a load isn't already in progress, start one and get a token.
	if stingray.Keyboard.pressed(stingray.Keyboard.button_id("0")) and not load_token then
		load_token = stingray.SaveSystem.auto_load(save_filename)
	end
	-- if a load is currently in progress:
	if load_token then
		-- if the load operation is done
		local retrieved_data = check_token(load_token)
		if retrieved_data then
			-- clear the cached token
			load_token = nil
			-- and do something with the data read from the save file.
			-- replace this with your own code.
			print("Data retrieved.")
			print("String field: " .. retrieved_data.string_field)
			print("Number field: " .. tostring(retrieved_data.number_field))
			print("The number should match the last saved number shown in the console log.")
			print("Nested boolean field one: " .. tostring(retrieved_data.table_field.boolean_one))
			print("Nested boolean field two: " .. tostring(retrieved_data.table_field.boolean_two))
		end
	end

end

-- @adoc lua
-- @exa ex_snippets.save_load Saving and loading data
