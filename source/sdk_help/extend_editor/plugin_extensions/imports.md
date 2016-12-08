# Create a new importer

You can use the `imports` extension to make your plug-in handle the process of importing new assets of a specified file type. Each time a user imports a file of the type you specify, the engine calls your plug-in to handle reading that file and converting it to standard Stingray assets (like *.texture* files).

Once your importer is in place, users are able to import your custom file type using any of the import methods supported by the Stingray editor:

-	Drag and drop into the **Asset Browser**:

	![drag and drop](../../images/import_drag_drop.gif)

-	The **Import** button in the **Asset Browser**:

	![import button](../../images/import_button.png)

-   The **File > Import** menu:

	![import menu](../../images/import_file_menu.png)

## Configuration

You configure an `imports` extension in your *.plugin* descriptor file as follows:

~~~{sjson}
// The editor/plugins/asset_browser/asset-browser.plugin file defines different importers:
imports = [
    {
        types = ["fbx", "bsi"]
        label = "Scenes"
        regroup = true
        priority = 1 // Low priority because there is a dialog involved.
        options = {
            types = ["types/material_import_options", "types/scene_import_options"]
            validate = {
                type = "js"
                module = "asset-browser-actions"
                function_name = "validateSceneImportSettings"
            }
        }
        do = "import-fbx"
    }

    {
        types = ["dds", "tga", "png", "jpg", "jpeg", "tif", "tiff"]
        label = "Textures"
        regroup = true
        do = "import-core-assets"
    }

    {
        types = ["srz", "zip"]
        label = "Packages"
        regroup = true

        do = [
            {
                type = "js"
                module = "asset-browser-actions"
                function_name = "importPackages"
            }
        ]
    }
]
~~~

`types`

>	The list of file extensions the plug-in can import. **Required**.

`label`

>	A descriptive label that groups your `types` together in file selector dialogs. **Required**.
>
>	![import file selector](../../images/import_file_selector.png)

`regroup`

>	A Boolean value that determines whether multiple assets should be imported in a single batch operation, or as separate actions that are run in sequence. If you set this value to `true`, each action that you specify in the `do` setting will get passed the list of all files that the user has requested to import. If you set this value to `false`, your `do` actions will be passed one asset at a time, and re-invoked with the next asset until all assets have been imported. **Optional**.

`do`

>	An action or an array of actions that the editor will run when the user imports a file of the type that this importer handles. See ~{ Register an action }~. **Required**.

`priority`

>	If multiple importers are registered to handle the same type of files, this number defines their relative priority. This determines the order in which the editor runs the importers: plug-ins with **lower** priority are run first. **Optional**.

`options`

>	Custom user-defined SJSON data that the editor passes to each of the `do` actions in the import sequence. For example, the *.fbx* import extension shown above includes a `.type` file specification used by the generic import dialog, and a validation function. See below for more details. **Optional**.

## FBX importer

The Stingray **Asset Browser** plug-in contains import extensions for several different file types. You can find all their definitions in *editor/plugins/asset_browser/asset-browser.plugin*.

Let's look at the *.fbx* file importer to see how it works. Here is its configuration:

~~~{sjson}
{
    types = ["fbx", "bsi"]
    label = "Scenes"
    regroup = true
    priority = 1 // Low priority because there is a dialog involved.
    options = {
    	// Specifies how to populate the Generic Import Dialog
        types = ["types/material_import_options", "types/scene_import_options"]

        // Function used to validate importation settings while the user is in the Generic Import Dialog.
        validate = {
            type = "js"
            module = "asset-browser-actions"
            function_name = "validateSceneImportSettings"
        }
    }

    do = {
        name = "import-fbx"
        type = "js"
        module = "asset-browser-actions"
        function_name = "importFbx"
    }
}
~~~

The `importFbx` function is quite complicated -- it handles popping the import settings dialog, merging the dialog options with the default values for the options, then triggering the importat process itself.

Let's look at `importFbx` to see the parameters the engine passes to it during the import:

~~~{js}

// options: corresponds to the options objects in the import extension descriptor above.
// previousResult: if there was a previous importer in the chain of importation, these are all the results (compilation results, asset created).
	// previousResult[0]: compilation information
    // previousResult[1]: an object packaging all created/modified/removed assets during importation
// assets: the list of files to import
// directory: the destination directory where the importation is to happen, relative to the project.
// flags: a set of flags passed by the editor for importation. Currently, the flag.reImport value indicates that an asset needs to be reimported.
importFbx: function (options, previousResult, assets, directory, flags) {
    let sceneImport = new SceneImport(options, flags, processFlags, showDialog, null, options.validate);

    return sceneImport.doImport();
}
~~~

This excerpt from `asset-browser-actions.js` showcases what happens during the `sceneImport.DoImport` call:

~~~{js}

importFbx: function (options, previousResult, assets, directory, flags) {
    let sceneImport = new SceneImport(options, flags, processFlags, showDialog, null, options.validate);
    return sceneImport.doImport();
}

// From SceneImport class:
doImport() {
    return projectUtils.getSettings(fbxImportSettings)
    	// Lots of chaining of processing to ensure default Fbx importation options are properly saved/merged with user defined importation options:
        .then(this.processInfo.bind(this))
        .then(this.processImportOptions.bind(this))
        .then(this.importDefault.bind(this))
        .then(function (categories) {
            if (!projectService.showCreateExtraRoot) {
                let mesh = _.find(categories, {'id': 'mesh'});
                if (mesh) {
                    mesh.definitions.fields.CreateExtraRoot.editor.showLabel = false;
                    mesh.definitions.fields.CreateExtraRoot.editor.showValue = false;
                }
            }

            // Importation without a dialog: import fbx directly
            if (this.hideDialog)
                return importService.importFbx(this.importAssets, this.defaultSettings, this.hideDialog);

            let title = 'Import FBX';
            if (this.flags && this.flags.reImport)
                title = 'Re-Import FBX';

            // Trigger the importation dialog. This will evenetually called the importservice to trigger fbx importation.
            return this.showDialog(categories, this.importAssets, title, this.validation);
        }.bind(this));
}

// Show dialog for Fbx import:
var showDialog = function (categories, assets, title, validation) {
    if (!title)
        title = 'Import';

    return assetUtils.trackFileSystemChanges(function () {
        return hostService.openDialog(title,
                [{ assets: assets, categories: categories, plugin_name: 'asset-browser', validate: validation }],
                require.toUrl('core/views/import-dialog'),
                { width: 430, height: 760 })
            .then(function (result) {
                if (result.accepted) {
                    var data = result.data[0];
                    projectUtils.setSettings(fbxImportSettings, data.options);
                    return Promise.all([
                        waitForImportCompletedPromise(),

                        // calls to the importService to effectively do Fbx import.
                        importService.importFbx(data.assets, data.options)
                    ]);
                }
            });
    });
};
~~~

## Extend importation of already registered file

Each file type can be handled by multiple different import extensions. The engine invokes all the importers in the order of their priority. This allows you to extend the behavior when importing file types that are already handled by other plug-ins. For example, you could extract additional information from the file, or tweak the assets that were created during the previous import sequence.

For example, here is an importer that extends the asset browser's default *.fbx* importer to list in the console all of the assets that were created during the import.

Here's the extension definition in the *.plugin* file:

~~~{sjson}
// From asset-browser.plugin
{
    types = ["fbx"] // Another importer for Fbx
    label = "Fbx Log"
    regroup = true
    priority = 1000 // Will run AFTER normal Fbx importation
    do = {

         type = "js"
         module = "asset-browser-actions"
         function_name = "fbxImportLog"
     }
}
~~~

And here is the `fbxImportLog` function that logs the results:

~~~{js}
fbxImportLog: function (options, previousResult, assets, directory, flags) {
    let fbxImportReport = previousResult[1];

    console.log('Fbx Importation Log:');
    console.log('New asset created', fbxImportReport.added);
    console.log('Existing assets modified', fbxImportReport.changed);
    console.log('Assets remove', fbxImportReport.removed);
}
~~~

## Font importation and the generic import dialog

Stingray also supports a font importer that makes use of the generic import dialog.

~~~{sjson}
// From font-importer.plugin:
imports = [
    {
        types = ["ttf" "ttc" "otf" "otc" "cff" "woff" "fnt" "pfa" "pfb" "pfr"]
        label = "Font"
        options = {
            types = ["font-import-options"]
            validate = {
                type = "js"
                module = "font-importer-module"
                function_name = "validateImportOptions"
            }
        }
        do = [

            // Step 1 - Open dialog with the import options
            {
                type = "js"
                module = "font-importer-module"
                function_name = "fontImporterDialog"
            }

            // Step 2 - Import actual asset as a Stingray resource
            {
                type = "js"
                module = "font-importer-module"
                function_name = "importFontFile"
            }
        ]
    }
]
~~~

Let's look at how the Import Dialog is setup:

~~~{js}
// From font-importer-module.js
function fontImporterDialog (importOptions, previousResult, file, destination, flags) {
    if (!_.isArray(file)) file = [{ file: file, directory: destination }];

	// Loop over the different type files spcified in importOptions.
    let types = importOptions.types[0].types;
    let categories = [];

    // Create a list of categories with all the different properties specified in the type descriptor:
    let categoryNames = Object.keys(types);
    _.each(categoryNames, function (categoryName) {
      let category = {};
      category.id = categoryName;
      category.options = types[categoryName].editor;
      category.definitions = {
          type: types[categoryName].type,
          fields: types[categoryName].fields
      };

      category.default_values = dataTypeService.createDefaultValue(types[categoryName]);
      category.default_values.Name = fsUtils.getFileName(file[0].file, true);
      categories.push(category);
    });

	// Pop the Generic Import Dialog passing it the properties to show:
    return hostService.openDialog('Distance Field Font Importer',
          [{ assets: file, categories: categories, plugin_name: 'font-importer', validate: importOptions.validate }],
          require.toUrl('core/views/import-dialog'),
          { width: 510, height: 430 });
}
~~~

The `importFont` is interesting in how it runs a command tool to extract data from the font file and then writes textures assets:

~~~{js}
function importFontFile (importOptions, dialogResult, file, destination/*, flags*/) {
  if (!dialogResult.accepted) {
      return console.info('Font import has been cancelled.');
  }

  var importOptions = dialogResult.data[0].options;
  if (!importOptions)
      throw new Error('Nothing to import');

  return projectService.relativePathToAbsolute(destination).then(function (absoluteDestination) {
    absoluteDestination = fsUtils.cleanPath(absoluteDestination);
    return projectService.absolutePathToRelative(absoluteDestination+"/"+importOptions.Name).then(function (assetpath){
      return locatorService.getToolChainDirectory().then(function (tccDir) {

		 // Start a command line tool to generate an atlas from a font:

          var cmd_Args = ["-generateAtlas", file, "-size", `${importOptions.CharWidth}`, `${importOptions.CharHeight}`, "-pxrange",`${ importOptions.PixelRange}`, "-autoframe",
                          "-atlasRange", `${importOptions.UnicodeRangeStart}`, `${importOptions.UnicodeRangeEnd}`, "-atlasItemsPerRow", `${importOptions.ItemsPerRow}`,
                          "-o", `${absoluteDestination}/${importOptions.Name}.dds`, "-outputFontInfo", `${absoluteDestination}/${importOptions.Name}.font`];
          if(importOptions.BlackBorder)
            cmd_Args.push("-blackBorder");

          if(!importOptions.Autoscale) {
            cmd_Args.push("-scale");
            cmd_Args.push(`${importOptions.Scale}`);
          }

          // hostService allows to start external process and wait for their execution to be done:
          var msdfgenExe = fsUtils.join(tccDir, "tools", "msdfgen.exe");
          return hostService.startProcess(msdfgenExe, cmd_Args, {
            UseShellExecute: true,
            CreateNoWindow: true,
            WorkingDirectory: absoluteDestination,
            WaitForExit: true
          });
      }).then(function (/*processDescriptor*/) {
          // Write a material file in the folder where we started the font importation:
          // fileSystemService allows to read/write files. There are even function to write Json files directly.
          return fileSystemService.writeJSON(`${absoluteDestination}/${importOptions.Name}.material`, {
              shader: "gui:DEPTH_TEST_ENABLED:DIFFUSE_MAP:MEDIAN_BIT_ALPHA",
              textures: {
                diffuse_map: `${assetpath}`
              }
          });
      }).then(function () {

      	  // Writes a texture file for the newly generated atlas.
          return fs.writeJSON(`${absoluteDestination}/${importOptions.Name}.texture`, {
              common: {
                input: {
                  filename: `${assetpath}`
                },
                output: {
                  apply_processing: true,
                  category: "",
                  cut_alpha_threshold: 0.5,
                  enable_cut_alpha_threshold: false,
                  format: "R8G8B8A8",
                  mipmap_filter: "box",
                  mipmap_filter_wrap_mode: "mirror",
                  mipmap_keep_original: false,
                  mipmap_num_largest_steps_to_discard: 0,
                  mipmap_num_smallest_steps_to_discard: 0,
                  resident_mips: 0,
                  srgb: true,
                  streamable: false
                }
              }
          });
      }).then(function() {
        return fs.copy(file, absoluteDestination+"/"+fsUtils.getFileName(file));
      });
    });
  });
}
~~~

## Using the generic import dialog

The generic import dialog uses type descriptors to automatically populate a dialog that contains a property editor widget. You provide it with a `.type` file that defines the structure of the data you want users to be able to configure in the input dialog, and the dialog takes care of setting up a property editor widget to show that data.

As an example ,here is an excerpt from the `font-import-options.type` file:

~~~{sjson}
export = "#fonts"
types = {
	fonts = {
		type = ":struct"
		editor = {
			label = "Distance Field Options"
		}
		fields = {
			AdvancedOptions = {
				type = ":bool"
				default = false
				editor = {
					label = "Distance Field Options"
					description = "Options for generating distance field font resources"
					showLabel = false
					showValue = false
					enable_category = true
				}
			}
			Name = {
				type = ":string"
				default = ""
				editor = {
					label = "Name"
					description = "Name of the font asset"
				}
			}
			CharWidth = {
				type = ":number"
				default = 32
				min = 1
				editor = {
					label = "Character Width"
					description = "Image width of each character in pixels"
					step = 1
				}
			}
			CharHeight = {
				type = ":number"
				default = 32
				min = 1
				editor = {
					label = "Character Height"
					description = "Image height of each character in pixels"
					step = 1
				}
			}
		}
	}
}
~~~

Basically, this is an SJSON file that specifies how a specific piece of data should be interpreted and edited. The Stingray property editor uses the `.type` file to populate itself automatically and to edit a JSON data model:

![font_importer_dialog](../../images/font_importer_dialog.png)

For more information about `.type` files, see ~{ The Stingray Type System }~. For more about how your type can control what is shown in the property editor, see the ~{ Built-in metadata properties }~.
