# Library dependencies

This topic describes how to set up a local revision of the Stingray source code on your computer with the libraries required to rebuild the engine and editing tools.

Each revision of the Stingray source code depends on a specific set of base libraries. This includes libraries for middleware SDKs like HumanIK, digital content creation tools like 3ds Max and Maya, languages like Lua and GLSL, utilities like QT and LuaJIT, etc.

Each time you get a new local revision of the source code, you should use one of the methods below to get the library versions that correspond to the revision you have checked out.

>   **Note**: Each closed platform repository has its own set of library requirements. If you use any closed console platforms, make sure you have your submodules up to date.

>   **Note**: The first time you get library dependencies, it will take some time to complete all the required downloads. Subsequent builds based on the same revision will not need to download anything. Subsequent builds based on future revisions will only need to download the libraries that have changed since the version you last downloaded.

**To set up your library directory:**

You have to specify a location on your computer where you want the Stingray build tools to store and access the libraries needed to build binaries from your source code revision.

-   Create an environment variable named `SR_LIB_DIR`. Set its value to an empty directory on your computer where you want the libraries to be copied. Make sure that you have at least 40 GB of space.

-   By default, temporary files are created in your system's temp folder during the download process. These files may be large, so you can put them elsewhere by setting your preferred path in the value of the `SR_TMP_DIR` environment variable.

**To get the libraries automatically when you build:**

By default, the `make.rb` script, which you use to build Stingray, will automatically get all the libraries it needs in order to build all of the targets you have asked it to build.

If you want to *prevent* it from updating the libraries you currently have installed, pass it the `--no-update` command-line parameter.

See also ~{ Building Stingray from source }~ for more details on `make.rb`.

**To manage your libraries manually:**

The `make.rb` script internally uses a package management utility called `spm` to fetch and manage libraries. If you want, you can invoke the `spm` utility directly. For example:

-   `> spm.rb install --all` downloads all missing libraries.
-   `> spm.rb update` updates all libraries that you currently have downloaded to the versions needed for your source code revision, but does not download additional libraries that you don't yet have.
-   `> spm.rb help` prints a detailed list of all `spm` usage commands.

This script requires some additional Ruby gems. If you do not have them installed, it will prompt you to install them the first time you run it.

## Additional libraries

There are some libraries for optional third-party integrations that Autodesk is not permitted to redistribute directly. If you want your game to support the systems listed below, you must copy the required versions of the libraries manually into the location specified by your `SR_LIB_DIR` environment variable.

### Steam

Steam integration requires version **SR_DOC_STEAMWORKS_VERSION** ONLY of the Steamworks SDK.

1.  Download the required version from:

    <https://partner.steamgames.com/downloads/list>

2.  Extract the zip to a local folder.

3.  To make the Stingray build system able to find the SDK, you can do either of the following:

    -   Copy the extracted files to a directory named `steamworks` within your Stingray libraries directory. The build process will look for files in `<SR_LIB_DIR>/steamworks/sdk`.

    -   If you want the Steamworks SDK to reside in a different location on your system, set up an environment variable named `SR_STEAM_ROOT` and set it to point to the `sdk` subdirectory.
