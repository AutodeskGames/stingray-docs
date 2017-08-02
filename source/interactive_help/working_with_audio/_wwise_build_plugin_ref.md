# Wwise plugin build reference

## Plugin Source and Libraries

The Wwise Plugin is distributed with Stingray by default. The plugin project source code can be found in stingray-engine/plugins/wwise_plugin. The libraries can be found in the lib/wwise_* folders and the correct library is automatically configured when setting up the wwise_plugin.

## Engine Plugin Setup

The Wwise plugin is added to the engine by default in Stingray. The Wwise plugin engine configuration steps in this section are provided for reference - they are not needed if using the default Stingray installation engine configuration.

1. Configure the Wwise Plugin projects.

  	The following command creates a Visual Studio 2012 Wwise Plugin project for Windows, PS4, Xbox One, iOS, and Android. Remove or add platforms as needed and as supported. The Wwise Plugin project can also be built using Visual Studio 2015 (vc140) for Windows and Xbox One.

  	From the stingray-engine source root directory, call the following:

 	 ```{nohighlight}

  		ruby.exe plugins/wwise_plugin/create_configs.rb --development-platform=msvc --development-platform-versions=2012 --build-windows --build-ps4 --build-xb1 --build-ios --build-android --plugin-name=wwise_plugin --plugin-directory=plugins/wwise_plugin
  	```

2. Configure the engine solution to include the Wwise Plugin.

  	The following command creates the engine solution for Visual Studio 2012, Windows, PS4, and Xbox One, and includes the Wwise Plugin generated in step 1.

  	From the stingray-engine source root directory, call the following:

  	```{nohighlight}

  		ruby.exe create_configs.rb --development-platform=msvc --development-platform-versions=2012 --build-windows --build-ps4 --build-xb1 --data-compile-android --data-compile-ios --use-wwise
     ```

3. The WwiseModule editor module is currently included by default.

## Tools

Wwise tools are included with Stingray:

- Stingray's tools/wwise_exporter.exe is included to export Wwise sound banks to the Stingray game project. This project is built using the wwise_exporter project in the all_tools.sln tools Visual Studio solution.

- The Wwise Authoring Tool and its associated data and help files are included in the tools_external/Wwise directory.

## Building the documentation

Run *documentation/plugins/wwise/generate_chm.rb* to build a HTML help *.chm* file with this high-level documentation.
