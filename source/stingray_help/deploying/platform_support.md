# Supported platforms

![UPDATED](../images/updated.png)

Anyone can use Stingray to create games that run on Windows PC, iOS and Android. If you are licensed by Sony as a PlayStation 4 developer, or by Microsoft as an Xbox One developer, you can also create games for these consoles.

This page describes the models of mobile devices Stingray supports. See also the other topics in this section for additional installation requirements for developing games for all of these target platforms.

## iOS Device Compatibility

The Stingray engine only supports iOS devices compatible with Metal and OpenGL ES 3.0, as shown below:

| Device Name | GPU |
|---|---|
| iPad Air 2 Wi-Fi<br>iPad Air 2 Wi-Fi + Cellular | Apple A8 GPU |
| iPad mini 3 Wi-Fi<br>iPad mini 3 Wi-Fi + Cellular | Apple A7 GPU |
| iPhone 6 and iPhone 6 Plus | Apple A8 GPU |
| iPhone 5s | Apple A7 GPU |
| iPad Air Wi-Fi<br>iPad Air Wi-Fi + Cellular | Apple A7 GPU |
| iPad mini 2 Wi-Fi<br>iPad mini 2 Wi-Fi + Cellular | Apple A7 GPU |

## iOS Version Compatibility

The Stingray engine only supports iOS devices running **iOS SR_DOC_IOS_VERSION**.

## Requirements for Running the Stingray iOS Packaging Server

In order to package games from Windows you need to run the Stingray iOS package server on a Mac device with *Mac OS X SR_DOC_MACOS_VERSION* and *Xcode SR_DOC_XCODE_VERSION*. Please download these from <https://developer.apple.com/downloads>. We recommend you disable auto update on your Apple development machine. <!-- If you already have a newer version of Xcode installed (Xcode 7), you can simply delete that from your application folder and copy the one you have downloaded from the Apple website there. -->

## Android Device Compatibility

The Stingray engine supports Android devices with Tegra K1 GPUs, the ARM Mali series of GPUs, or Qualcomm Adreno 330, Adreno 420, and Adreno 430 GPUs, such as:

| Device Name | GPU |
|---|---|
| Samsung Galaxy 7 | Mali |
| NVidia Shield Tablet | Tegra K1 |
| Samsung Galaxy Tab Pro 8 | Adreno 330 |
| Samsung Galaxy Note 4 | Adreno 420 |
| Sony Experia Z3+ | Adreno 430 |

> **Important:** These devices are listed as examples only. In some regions, these devices ship with different GPUs.
> Confirm that your target Android device uses the GPU you expect before trying to deploy your game. When you start Stingray, the device GPU brand is printed in the system log, but there are also various online resources or apps that can help you determine the GPU used in a specific device.

## Android Version Compatibility

The Stingray engine officially supports only Android devices running **version SR_DOC_ANDROID_VERSION** or higher.

Devices running older versions may or may not work as expected.

## Supported VR development kits

![UPDATED](../images/updated.png)

| HMD Device | Target Frame Rate | VR SDK Version |
|------------|-------------------|-----|
| Oculus Dk2 | 75 fps            | 1.10.0.0  |
| Oculus Rift | 90 fps            | 1.10.0.0  |
| HTC Vive       | 90 fps            | 1.0.0  |

>**Note:** The Oculus Remote and Oculus Touch Controller are also supported.

## Platform libraries

Stingray is built with the following set of libraries for its target platforms. You may need this information for compatibility.

| Platform | IDE | SDK |
|---|---|---|
| Windows 32/64bit | Visual Studio SR_DOC_VISUAL_STUDIO_VERSION | |
| Android | Visual Studio SR_DOC_VISUAL_STUDIO_VERSION | NVIDIA CodeWorks for Android SR_DOC_CODEWORKS_VERSION |
| iOS | Xcode SR_DOC_XCODE_VERSION | iOS SDK SR_DOC_IOS_VERSION |
| PlayStation 4 | Visual Studio SR_DOC_VISUAL_STUDIO_VERSION | ORBIS SDK SR_DOC_PS4_SDK_VERSION |
| Xbox One | Visual Studio SR_DOC_VISUAL_STUDIO_VERSION | XDK SR_DOC_XDK_VERSION |

---
Tags:
- hardware support
---
