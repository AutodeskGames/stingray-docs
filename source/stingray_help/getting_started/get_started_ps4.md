# Get started on PlayStation 4

TODO

## First-time setup

In order to connect the Stingray Editor to a PlayStation 4 device, or to build and deploy your game for PlayStation 4, you must follow the steps listed on this page on your Windows development machine.

### Get the Stingray PlayStation 4 distribution

The parts of Stingray related to PlayStation 4 are only distributed to teams that are registered with Sony as PlayStation 4 developers. You need to get this distribution and install it on your computer.

Registered PlayStation 4 developers can download the distribution from the Autodesk Game Developer Center, at <http://gamedev.autodesk.com/>.

If you need to register for a new account, or if you need to add PlayStation 4 access rights to your account, you can do so through the site.

### PlayStation 4 platform SDK

If you want to connect your Windows development machine to your PlayStation 4 for mirroring or running your project, you will need to install the PlayStation 4 platform SDK.

You need **version SR_DOC_PS4_SDK_VERSION**. Other versions may or may not be compatible.

You can get the SDK using the SDK Manager utility, available to registered developers on the Sony DevNet: <https://ps4.scedev.net/>.

The **Deployer** does not require the SDK in order to package your game, although you may need it in order to prepare your final distribution.

### Troubleshoot connecting to PS4

In some cases when connecting to a PS4, you may encounter errors like the following:

> Connections: Failed to connect to "PS4". Please ensure the PlayStation 4 engine run-time can be accessed at <IP address>. Error Invalid DevKit: <IP Address>'

> [INFO] No DevKits found

We recommend the following troubleshooting steps:

- On the PS4 system, make sure that the  Debug Settings > Network > Network Interface **Selection** setting is set to **Routing Information** and not **Always LAN**.

- Make sure that the devkit has not expired.

- Check that your IP settings are correct both in the **Deployer** and in the game.
