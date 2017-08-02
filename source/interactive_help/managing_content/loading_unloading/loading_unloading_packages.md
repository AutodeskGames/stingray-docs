# Loading and unloading packages

You can currently load and unload your resource packages only by using the Lua scripting API. Most of the functions you need are available through the `stingray.ResourcePackage` object.

>   **Note:** Before you can use the code below to load the resources declared in a resource package, you must load the *.package* file itself into memory. Include the *.package* resource in your boot package, or in another resource package that is loaded by your boot package. See ~{ About the boot package }~.

## Loading immediately

If you need your resource package to be available immediately in order for your game to be able to move on and do anything else, use the following sequence of calls:

~~~{lua}
-- Create a resource package object from a package file named "levels/city_resources.package"...
local city_package = stingray.Application.resource_package("levels/city_resources")

-- Initiate loading the package...
stingray.ResourcePackage.load(city_package)

-- Make the package contents available in the game,
-- blocking the current thread until the package is fully loaded...
stingray.ResourcePackage.flush(city_package)
~~~

You may need to use this immediate loading approach in order to load resources for the very first thing you show in your game, such as a splash screen or loading screen, unless you already include those resources in your boot package.

## Loading asynchronously

If you defer calling `ResourcePackage.flush()` until a later frame, your game can continue with other tasks while the resource package continues loading in the background. This allows you to smoothly stream content into memory during gameplay without causing the game to freeze up during long content loads.

You can check each frame whether or not the package has completed loading by calling `ResourcePackage.has_loaded()`. When this function returns `true`, then call `ResourcePackage.flush()` to bring the resource package into the game. For example:

~~~{lua}
-- Create a resource package object from its resource name...
local city_package = stingray.Application.resource_package("levels/city_resources")

-- Initiate loading the package...
stingray.ResourcePackage.load(city_package)

...

function update()
    if stingray.ResourcePackage.has_loaded(city_package) then
        stingray.ResourcePackage.flush(city_package)

        -- Create the level and continue the gameplay
        ...
end
~~~

As an alternative to `stingray.Application.resource_package()`, you can also use `stingray.Application.resource_package_from_url()` to download the bundled package content from a location on the Internet. In this case, because the download time may be unpredictable, you should always use this asynchronous loading method in order to avoid having your game become unresponsive while the bundle is downloaded.

## Unloading

Before you unload a resource package, you must make sure that the resources it contains are no longer being used in the game. For example, any units that have been spawned based on unit resources contained in the package must be destroyed.

To unload a package, call the `ResourcePackage.unload()` function, and specify the package object to unload. Always call `Application.release_resource_package()` before you shut down the game, after you are sure that you no longer need the package.

For example:

~~~{lua}
stingray.ResourcePackage.unload(city_package)
stingray.Application.release_resource_package(city_package)
~~~
