# Get started on Android

TODO

## Check the supported devices

TODO

## First-time setup

In order to connect the Stingray Editor to an Android device, or to build and deploy your game for Android devices, you have to set up the requirements listed on this page on your Windows development machine.

### Install Java

You need both the Java Development Kit (JDK) and the Java Runtime Environment (JRE).

Stingray requires at least version 7, but we recommend using the latest update of version 8.

You can download the JDK from the [Oracle Java SE site](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html). The JDK package contains a full version of the JRE, so you should not have to install the JRE separately.

### Install the Android SDK and tools

![UPDATED](../images/updated.png)

If you don't already have the Android SDK installed on your computer,

1.	Download the Android Standalone Tools: <https://dl.google.com/android/repository/tools_r25.2.3-windows.zip>
1.	Unzip the package, and run `tools/android.bat` to launch the Android SDK Manager.
1.	In the SDK Manager, install the following:
    - Android 7.1.1 SDK Platform (API 25)
    - Android 5.0 SDK Platform (API 21)
    - Android SDK Tools 25.2.2
    - Android SDK Platform-tools 25
    - Android SDK Build-tools 25

### Check your environment variables

After you install Java and the Android SDK:

-	Make sure that the `JAVA_HOME` environment variable is set to point to the correct installation folder. For example, `C:\Program Files\Java\jdk1.8.0_80`.
-	Make sure that the `ANDROID_HOME` environment variable is set to point to the correct installation folder. For example, `C:\Program Files (x86)\Android\android-sdk`.
-	Find the `adb.exe` tool in your Android SDK installation directory, and add its location to your `PATH` environment variable. This tool is typically found under `%ANDROID_HOME%\platform-tools`, but it may be in a different location on your system. For example, `D:\android\tools_r25.2.3-windows\platform-tools`.

### Make a default keystore for app signing

When you deploy a project to a standalone *.apk* application, Stingray needs to sign your app using a keystore that you have set up on your system. If you do not specify a keystore when you deploy, Stingray relies on a default "debug" keystore. Most versions of the Android SDK generate this default keystore automatically when you install the Android SDK, but some may not.

Look for the default keystore at this location: `C:\Users\<username>\.android\debug.keystore`.

If the `debug.keystore` file is not present on your system, you will have to create it manually. Run the following command at a command prompt:

~~~{nohighlight}
> "%JAVA_HOME%\bin\keytool.exe" -genkey -v -keystore "%USERPROFILE%/.android/debug.keystore" -storepass android -alias androiddebugkey -keypass android -dname "CN=Android Debug,O=Android,C=US" -validity 10000 -keyalg RSA
~~~

Note that the debug keystore expires 365 days after creation. If your default keystore has expired, delete the `debug.keystore` file and re-create it using the command line above. See also the [Android developer help](http://developer.android.com/tools/publishing/app-signing.html).

### Set up your Android Debug Bridge USB drivers

In order to connect the Stingray Editor to your device over a USB connection, or to install apps to your device using the Android Debug Bridge, you need to have USB drivers installed on your computer that are compatible with your device.

Which drivers you should use, and how to install those drivers, depends on the make and model of your Android device.

For details, check your device manufacturer's documentation or support site, or consult the official [Android developer site](http://developer.android.com/tools/extras/oem-usb.html).

### Restart

After installing the pre-requisites and setting the environment variables listed above, restart your computer.

## Mirroring

## Deploying
