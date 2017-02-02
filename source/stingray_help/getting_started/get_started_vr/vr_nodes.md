# VR Flow nodes

For reference information on all VR Flow nodes, go to the [Stingray Flow Node Reference](../../../flow_ref/index.html). This topic provides a general overview of nodes available in some of the VR template projects.

## General VR Flow node descriptions

- Input nodes

    Used for Button presses, touch input, or haptic feedback

- Linking nodes

    Used for attaching objects in your scene to the devices that are tracked by the VR system, like your controllers of HMD (Head Mounted Display)

- Device Poses nodes

    Provide information about where your tracked devices are located and how they are oriented

- Tracking Space nodes

    Used for mapping the real-world tracking space defined by your VR system into the virtual environment of your project

- Effect nodes

    Let you create simple Fade In/Fade Out effects

    > **Note:** Effect nodes are only available in the Vive template.

Although there are a few discrepancies between the Oculus nodes and the Vive nodes, most of the essential functionalities remain the same. These nodes, in conjunction with the other default Flow nodes, cover all of the functionality necessary to implement any behavior you want for either device.

## SteamVR Flow node

The following Flow nodes are available when you load the VR HTC Vive template:

![VR Templates](../../images/vr_steamvr_nodes.png)

Some example links to the Flow reference:

- **SteamVR Button > Input > SteamVR Button**
- **Steam VR > Link > SteamVR Clear All Links**
- **SteamVR > SteamVR Get Tracking Space**

# Oculus Flow nodes

The following Flow nodes are available in the Oculus template:

![VR Templates](../../images/vr_occulus_nodes.png)

Some example links to the Flow reference:

- **Oculus > Input > Oculus Button**
- **Oculus > Link > Oculus Link Node To Tracker**
- **Oculus > HMD Pose**
