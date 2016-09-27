# Supported platforms

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
| iPad mini 2 Wi-Fi<br>iPad mini Wi-Fi + Cellular | Apple A7 GPU |

## iOS Version Compatibility

The Stingray engine only supports iOS devices running **iOS 9**.

## Requirements for Running the Stingray iOS Packaging Server

In order to package games from Windows you need to run the Stingray iOS package server on a Mac device with *Mac OS X 10.10 (Yosemite)* and *Xcode 7*. Please download these from <https://developer.apple.com/downloads>. We recommend you disable auto update on your Apple development machine. <!-- If you already have a newer version of Xcode installed (Xcode 7), you can simply delete that from your application folder and copy the one you have downloaded from the Apple website there. -->

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

The Stingray engine officially supports only Android devices running **version 5** or higher.

Devices running Android 4.x may or may not work as expected.

## Supported VR development kits

| HMD Device | Target Frame Rate | VR SDK Version |
|------------|-------------------|-----|
| Oculus Dk2 | 75 fps            | 1.4.0.0  |
| Oculus Rift | 90 fps            | 1.4.0.0  |
| HTC Vive       | 90 fps            | 1.0.0  |

## Platform libraries

Stingray is built with the following set of libraries for its target platforms. You may need this information for compatibility.

| Platform | IDE | SDK |
|---|---|---|
| Windows 32/64bit | Visual Studio 2012, Update 5 | |
| Android | Visual Studio 2012, Update 5 | NVIDIA CodeWorks for Android 1R4 |
| iOS | Xcode 7 | iOS SDK 9 |
| PlayStation 4 | Visual Studio 2012, Update 5 | ORBIS SDK 3.5 |
| Xbox One | Visual Studio 2012, Update 5 | XDK March 2016 QFE 5 |

---
Tags:
- hardware support
---
