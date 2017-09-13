# Create fur

The standard fur material lets you create realistic short fur that can be applied to assets like bears, cats, and dogs.

>**Note:** Currently, fur is supported on Windows only.

## Step 1. Create a new fur material

1.  Create a new standard material. See ~{ Create a material }~.

2.  Under the **Parent Material** group, set the **Parent Resource** field to point to the default fur material, `core/stingray_renderer/shader_import/_standard_fur`

    This sets up the material so that any mesh it is applied to is shaded with fur.

3.  Set the following fur settings in the **Property Editor**:
    - **Noise Map**
    <br>
    Generates the fur.

    - **Color**
    <br>
    Determines the color of the fur.

      > **Tip:** Best results are achieved when applying a **Color Map** that looks like fur instead of selecting a single **Color**.

    - **Length Mask**
    <br>
    Applies a mask that makes areas of fur on your mesh shorter than the current **Fur Length**. In a grayscale map black means no fur, while white means the mesh uses the full fur length in that area.

    - **Roughness**
    <br>
    Controls the amount of shine on the fur.

    - **Direction Map**
    <br>
    Controls the direction of the fur in tangent space.

    - **Direction Amount**
    <br>
    Controls the amount of the **Direction Map** that is applied to the fur.

    - **Normal Scale**
    <br>
    Controls the strength of the normals that are generated from the fur noise.

    - **Parallax Blur**
    <br>
    Blurs the gaps between the slices of fur. When using longer fur, increase this value.

      > **Tip:** If your fur starts to jitter, reduce the **Parallax Blur** and/or **Fur Length** value(s).

## Step 2. Apply the new fur material to an object

For more information, see ~{ Assign a material to an object }~.

> **Tip:** You can use the **Shell Length** node to determine the length of fur for a particular pixel on your model. When **Shell Length** is 0, there is no fur on that part of your model. In this scenario, you may want to adjust your model’s normals. For example, you can use normal mapping to add a higher level of detail to areas where fur is missing.
