# Creating a database of DLC content

Stingray offers an optional mechanism that you can use to track and identify the DLC bundles that you create and install for your game. If you use this system when you create DLC packages, your runtime Lua scripts can retrieve information about all DLC bundles currently installed with your game.

This can help if you do not want to hard-code information about your DLC modules into your gameplay scripts, so that you do not have to patch your main game code every time you add new downloadable content.

This system builds on the basic patching and DLC systems explained in ~{ Patching your game }~ and ~{ Downloadable content (DLC) and other extras }~. Make sure that you understand the basic processes explained in those topics before you start here.

## Step 1. Create *.dlc* resources

For each *.package* resource that you create for a DLC module, create a *.dlc* resource somewhere in your project source directory. This file is an SJSON resource that contains information about your module:

-	a `name` key that specifies an ID for the DLC bundle.
-	a `package` key that specifies the name of the *.package* resource that contains the content for your DLC module.

For example:

~~~{sjson}
name = "Continuing Adventures"
package = "packages/continuing_adventures"
~~~

When you build your game project, each of these *.dlc* resources is written to a separate bundle in a `dlc` sub-folder.

## Step 2. Access the DLC information in Lua

Use the functions exposed by the `stingray.DLC` object to scan for DLC data in the game data folder. For example:

~~~{lua}
-- start scanning the game data for DLC information...
stingray.DLC.scan_for_dlc()
...

-- when the scan has completed...
-- (note that this may not be in the same frame the scan was launched.)
if stingray.DLC.scan_done() then
	-- get the information found by the scan...
	local res = stingray.DLC.scan_result()
	for _,entry in ipairs(res) do
		local name = entry.name
		local package = entry.package
		...
		-- evaluate whether any of the packages need to be loaded.
		-- if a package needs to be loaded, pass its package value in
		-- a call to stingray.Application.resource_package() and load
		-- the package. See also ~{ Loading and unloading packages }~.
	end
end
~~~

The `DLC.scan_result()` function returns a list of tables, each of which contains the name and package recorded in one of the *.dlc* resources you set up.

## Step 3. Add the DLC bundles into your patch

When you make a patch to include your new DLC content bundles, you must make sure that you also include the DLC configuration bundle that corresponds to your new *.dlc* resource file. This bundle is located in the *dlc* directory.

If you already have one or more other bundles in the DLC directory, and you are not sure which one you need to include in your patch, you can use the **ID Lookup** tool to determine which bundle corresponds to your resource. See ~{ About compiled resource names }~.

Alternatively, if you bundled your game through the Stingray Engine **Deployer**, you can look through the output in the **Compiler Server** window to find the name assigned to your *.dlc* resource.

## Using multiple packages per DLC

Each *.dlc* resource file can only register one package resource. If you want to have the content for a single DLC module split across multiple bundles, you can either:

-	Make the one package you refer to in the *.dlc* file automatically include the resources for all of the other packages you need. See the `ADD_PACKAGES` key under ~{ Defining resource packages }~.
-	Make the one package you refer to in the *.dlc* file include additional scripts that are responsible for loading and unloading the extra packages for the DLC, and set up your main gameplay code to look for and run such a file in any DLC package that you load.
