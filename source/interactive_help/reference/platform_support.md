# Supported platforms

Anyone can use {{ProductName}} to create projects that run on Windows PC, iOS, Android, or in a web browser. If you're licensed by Sony as a PlayStation 4 developer, or by Microsoft as an Xbox One developer, you can also create projects for these consoles.

This page describes the models of mobile and VR devices and the web browsers that {{ProductName}} supports for deploying your projects.

>	**NOTE:** This page describes the requirements for playing back a project that you've already created and deployed using the interactive editor. For the requirements you need in order to run the editor and create the project content, see ~{ System Requirements }~.

## iOS Device Compatibility

The engine only supports iOS devices compatible with Metal and OpenGL ES 3.0, as shown below:

| Device Name | GPU |
|---|---|
| iPad Air 2 Wi-Fi<br>iPad Air 2 Wi-Fi + Cellular | Apple A8 GPU |
| iPad mini 3 Wi-Fi<br>iPad mini 3 Wi-Fi + Cellular | Apple A7 GPU |
| iPhone 6 and iPhone 6 Plus | Apple A8 GPU |
| iPhone 5s | Apple A7 GPU |
| iPad Air Wi-Fi<br>iPad Air Wi-Fi + Cellular | Apple A7 GPU |
| iPad mini 2 Wi-Fi<br>iPad mini 2 Wi-Fi + Cellular | Apple A7 GPU |

## iOS Version Compatibility

The engine supports iOS devices running **iOS {{SR_DOC_IOS_VERSION}}**.

## Requirements for Running the iOS Packaging Server

In order to package iOS apps from Windows, you need to run the {{SR_DOC_FULL_NAME}} iOS Packaging Server on a Mac. This package server is included in the {{ProductName}} installer. For details on finding and using it, see ~{ Get started on iOS }~.

Your Mac device must be using at least *Mac OS X {{SR_DOC_MACOS_VERSION}}* and must have *Xcode {{SR_DOC_XCODE_VERSION}}* installed. Please download these from <https://developer.apple.com/downloads>.

We recommend you disable auto update on your Apple development machine. <!-- If you already have a newer version of Xcode installed (Xcode 7), you can simply delete that from your application folder and copy the one you have downloaded from the Apple website there. -->

## Android Device Compatibility

The engine supports Android devices with Tegra K1 GPUs, the ARM Mali series of GPUs, or Qualcomm Adreno 330, Adreno 420, and Adreno 430 GPUs, such as:

| Device Name | GPU |
|---|---|
| Samsung Galaxy 7 | Mali |
| NVidia Shield Tablet | Tegra K1 |
| Samsung Galaxy Tab Pro 8 | Adreno 330 |
| Samsung Galaxy Note 4 | Adreno 420 |
| Sony Experia Z3+ | Adreno 430 |

> **Important:** These devices are listed as examples only. In some regions, these devices ship with different GPUs.
> Confirm that your target Android device uses the GPU you expect before trying to deploy your interactive app. When you start the engine, the device GPU brand is printed in the system log, but there are also various online resources or apps that can help you determine the GPU used in a specific device.

## Android Version Compatibility

The engine officially supports only Android devices running **version {{SR_DOC_ANDROID_VERSION}}** or higher.

Devices running older versions may or may not work as expected.

## Supported Rendering frameworks

- DX11 (Xbox One and Windows)
- DX12 (Xbox One and Windows)
- OpenGL (Android, Mac OS, Linux)
- Metal (iOS)
- GNM (PlayStation 4)

## Supported VR development kits

| HMD Device | Target Frame Rate | VR SDK Version |
|------------|-------------------|-----|
| Oculus Dk2 | 75 fps            | 1.13.0.0  |
| Oculus Rift | 90 fps            | 1.13.0.0  |
| HTC Vive       | 90 fps            | 1.0.0  |

>**Note:** The Oculus Remote and Oculus Touch Controller are supported.

>**Note:** {{ProductName}} also supports Google Cardboard for iOS and Android, and Android Google Daydream with controller support.

## Supported web browsers

If you plan to run your project in a browser, the engine requires WebAssembly and WebGL 2.0 (including OpenGL ES 3.0 and GLSL 3.00), which are currently supported by Google Chrome (Version 57) and Mozilla Firefox (Version 52). (Both of these browsers support WebAssembly 1.0 and WebGL 2.0 by default, with no extra configuration required.)

See also ~{ Get started for the Web }~.

## Platform libraries

{{ProductName}} is built with the following set of libraries for its target platforms. You may need this information for compatibility.

| Platform | IDE | SDK |
|---|---|---|
| Windows 32/64bit | Visual Studio {{SR_DOC_VISUAL_STUDIO_VERSION}} | |
| Android | Visual Studio {{SR_DOC_VISUAL_STUDIO_VERSION}} | NVIDIA CodeWorks for Android {{SR_DOC_CODEWORKS_VERSION}} |
| iOS | Xcode {{SR_DOC_XCODE_VERSION}} | iOS SDK {{SR_DOC_IOS_SDK_VERSION}} |
| PlayStation 4 | Visual Studio {{SR_DOC_VISUAL_STUDIO_VERSION}} | ORBIS SDK {{SR_DOC_PS4_SDK_VERSION}} |
| Xbox One | Visual Studio {{SR_DOC_VISUAL_STUDIO_VERSION}} | XDK {{SR_DOC_XDK_VERSION}} |

---
Tags:
- hardware support
---
