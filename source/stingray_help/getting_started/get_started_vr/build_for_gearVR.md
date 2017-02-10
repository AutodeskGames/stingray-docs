# Build a project for Gear VR

This topic provides an overview of the steps to successfully build and deploy a project for the Gear VR HMD.

1. Log in to your Oculus developer account at [https://developer.oculus.com/osig/](https://developer.oculus.com/osig/) and follow the instructions to generate an osig file for your device.
2. Start your Stingray project using the **VR Gear** template, available in the ~{ Project Manager }~.

  By default, this VR project template is set up to use the Stingray ~{ Mini renderer }~.

  Refer to ~{ Optimize VR content for mobile devices }~ for tips on preparing your content to work with the mini renderer.

3. When your project is ready to deploy to a device, open the **Connections** panel (**Window > Deploy and Connect > Connections**) and add your device target with the correct IP address.
  (See also ~{ Using the Connections panel }~.)

4. Select Android Flavor: "GearVR".
5. In the pop-up that appears, specify the location of the osig file.
6. Run the project.

## Advanced: Faster iteration process (for customers with source access)

After you deploy the project to your device, use the following process to iterate faster.

1. Add your osig file to 'runtime\plugins\gearvr_plugin\resources\app\src\main\assets'.
2. Rebuild android with "make.rb -p android --use-gearvr".
3. Run Stingray with the script 'tools\command_line\gearvr-run.rb'.

> **Tip:** Use remote ADB over TCP to avoid pulling the device out of the HMD for every restart.

To connect:

1. Connect your devices via USB. (See also ~{ Get started on Android }~.)
2. Enter "adb tcpip 5555" and then "adb connect".
3. Unplug your device from the USB and use as usual.

---
Related topics:
- ~{ Template projects }~
- ~{ Mini renderer }~
- ~{ Optimize VR content for mobile devices }~
- ~{ Using the Connections panel }~
- ~{ Get started on Android }~
---
