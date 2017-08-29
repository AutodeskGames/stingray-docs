# Downloadable content (DLC) and other extras

You may at some point want to enhance your interactive application with extra content that is added on to a base install -- for example, downloadable content (DLCs) that you distribute through an online store or web site. You can do this with {{ProductName}} in much the same way that you can provide patches to update existing app content.

With {{ProductName}}, there is no difference in principle between DLCs and regular content. You build the new content for your DLC using the standard editing tools, organize it into new *packages*, and compile those packages into *bundles*. You distribute these bundles to people as patches that install the new bundles alongside the already existing data bundles for your application.

Although anyone who installs the patch receives the bundled data, you might want your app to make that data available only to authorized people who have purchased an entitlement. You would typically do this in your Lua gameplay code, as shown below.

Therefore, when a user buys a DLC from an online service, what the user receives from the asset store is typically not the full DLC content, but just an account setting or an entitlement that your gameplay code uses to decide whether or not the DLC content installed in the patch should be visible to the player.

See also ~{ Patching your app }~ for background on the patching system.

## Step 1. Create the DLC content

To create content for a DLC, you work in the {{ProductName}} editing tools as normal, creating new content like units, levels, and scripts. You then put this new content into one or more new *.package* resources that you create. For details, see ~{ Defining resource packages }~.

## Step 2. Update gameplay code

Since a DLC package is just like any other resource package, you can load it into the engine the same way. For example:

~~~{lua}
local dlc = stingray.Application.resource_package("packages/test_dlc")
stingray.ResourcePackage.load(dlc)
stingray.ResourcePackage.flush(dlc)
~~~

See also ~{ Loading and unloading packages }~.

Typically, however, you would first check the player's authorization to access the content. For example, this code checks whether or not the player has purchased and installed from Steam an app with a specified ID:

~~~{lua}
if stingray.Steam.is_installed(test_dlc_app_id)
	local dlc = stingray.Application.resource_package("packages/test_dlc")
	stingray.ResourcePackage.load(dlc)
	...
end
~~~

## Step 3. Create and distribute the patch

Once you have built and bundled your project with the DLC packages included, you have to create a new patch for your app. This new patch includes a patch bundle for each of the new packages that you have created for your added content.

The patch may also involve one or more patch bundles for other pre-existing content packages, if you needed to update any of the gameplay resources in those other packages in order to support the new DLC. For example, if you had to add new script calls to load and unload the DLC package as shown above.

For details on how to create a patch, see ~{ Patching your app }~.

## Using DLC bundles in non-bundled mode

If you are running the engine with data that is compiled but not bundled, you may get the following error:

> Package not loaded: packages/test_dlc

To run in non-bundled mode, you need to add references to your new DLC packages into your *boot.package* file. For details, see ~{ Loading and unloading content at runtime }~.
