# Software requirements

This topic lists the third-party software that you must install in order to rebuild the Stingray engine and editor from source.

>	**NOTE:** You only need Visual Studio to rebuild the engine and editing tools from source code. You don't need it to run a version of Stingray that you install on your computer, or to make a game using Flow and Lua.

## Version requirement summary

This table provides an at-a-glance summary of **only** the tools that require specific versions, for quick reference. See the sections below for more details and for additional tools.

Software						|	Version
----------------------------	|	----------------------------------------
Ruby							|	**SR_DOC_RUBY_VERSION** or later
Visual Studio 		 			|	**SR_DOC_VISUAL_STUDIO_VERSION** or later (with exceptions, see below)
QT Add-in for Visual Studio		|	**SR_DOC_QT_ADDIN_VERSION** ONLY
NVIDIA CodeWorks for Android	|	**SR_DOC_CODEWORKS_VERSION** ONLY
PlayStation 4 SDK				|	**SR_DOC_PS4_SDK_VERSION** ONLY
Xbox One XDK					|	**SR_DOC_XDK_VERSION** ONLY
Xcode and iOS					|	**Xcode SR_DOC_XCODE_VERSION** and **iOS SR_DOC_IOS_VERSION**

## About development and target platforms

The Stingray Editor and legacy Bitsquid editing tools only run on Windows. They can only be built on Windows development machines.

The runtime game engine supports several platforms, including mobiles and consoles. Most of these platforms are also built on Windows development machines.

However, the iOS version of the runtime engine can only be built on Mac OS X. If you want to be able to use your custom builds of the runtime game engine on iOS, you will need a Mac.

## All development machines, for all target platforms

You must install the following tools on all of your Windows and Mac OS X development machines.

### Git

All Stingray source code is distributed through Git.

You will need to install Git on your computer, if you do not already have it installed. Download it here:

<http://git-scm.com/downloads>

You may also want to install a visual Git client, such as Sourcetree or TortoiseGit. For a list of available options, see here:

<http://git-scm.com/downloads/guis>

You can carry out various Git tasks using its command-line tools, any of a wide variety of visual tools, and the web-based GitHub interface. Therefore, this documentation does not go into detail about how exactly to accomplish common tasks such as forking, pulling, making pull requests, etc. If you are not already familiar with Git, you should invest some time up front into getting a basic understanding of how it works.

### Ruby

We use [Ruby](https://www.ruby-lang.org/en) to create build projects and to download library dependencies. We recommend version SR_DOC_RUBY_VERSION or later.

Download an installer for Windows here:

<http://rubyinstaller.org/downloads>

Ruby 2.x is pre-installed with recent versions of Mac OS X. If you have an older version, you must update to 2.0 or later. See <https://www.ruby-lang.org/en/documentation/installation/>.

## Windows development machines, for all target platforms

You must install the following tools on your Windows development machines, no matter what target platforms you intend to support.

### Microsoft Visual Studio

We use Visual Studio SR_DOC_VISUAL_STUDIO_VERSION to compile code on Windows.

Note that the free Express version is **not** sufficient.

You may be able to use later versions of Visual Studio to build for some target platforms. However, when compiling against the Xbox One XDK, only **2012 update 4** is supported.

### QT Add-in for Visual Studio 2012

The Stingray Editor project uses QT for its window framework. In order to re-build the Stingray Editor, you will need to install the QT Add-in for Visual Studio 2012. You need version **SR_DOC_QT_ADDIN_VERSION**. Download it from this link:

<http://SR_DOC_QT_DOWNLOAD_URL>

### Microsoft Expression Blend SDK

In order to re-build the legacy Bitsquid authoring tools, you will need the Microsoft Expression Blend SDK for .NET 4.0. You can download it here:

<http://www.microsoft.com/en-us/download/details.aspx?id=10801>

## Windows development machines, for Android support

If you need your engine and editing tools to support Android platforms, install the following on your Windows development machine.

### NVIDIA CodeWorks for Android

Install the NVIDIA CodeWorks for Android **version SR_DOC_CODEWORKS_VERSION**. Only this version is currently supported.

You can download it here:

<https://SR_DOC_CODEWORKS_DOWNLOAD_URL>

To get to this download link, you must register for a free membership in the NVIDIA GameWorks developer program.

Before you run the installer, make sure that no older Tegra Android Development Pack installers from NVIDIA NSight are present in the same folder. This avoids the possibility of accidentally installing versions of the software that are incompatible with the versions required by Stingray.

## Windows development machines, for PlayStation 4 support

If you need your engine and editing tools to support PlayStation 4, install the following on your Windows development machine.

### PlayStation platform SDK

Install the PlayStation 4 platform SDK, **version SR_DOC_PS4_SDK_VERSION**. Only this version is currently supported.

You can get the SDK using the SDK Manager utility, available to registered developers on the Sony DevNet: <https://ps4.scedev.net/>.

## Windows development machines, for XBox One support

If you need your engine and editing tools to support Xbox One, install the following on your Windows development machine.

### Xbox One platform SDK

Install the XDK: the Xbox One platform libraries. You need the **SR_DOC_XDK_VERSION** release. Other versions may or may not be compatible.

You can download the SDK from the Microsoft Game Developer Network Portal, available to registered developers at <https://developer.xboxlive.com/>.

## Mac OS X development machines, for iOS support

If you need your engine and editing tools to support iOS, install the following tools on your Mac.

### Xcode

You must use Xcode SR_DOC_XCODE_VERSION, which includes the iOS SDK SR_DOC_IOS_SDK_VERSION. You can download it from <https://developer.apple.com/downloads>.

We recommend you disable auto update on your Apple developement machine.

Note that if this is your first time doing iOS development, you will also have to register with the Apple Developer Program in order to set up Xcode with a signing identity for your organization. See <http://developer.apple.com> if you need more information.
