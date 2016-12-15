# Animation clip properties

![UPDATED](../images/updated.png)

The following settings are available in the ~{ Property Editor }~ when you select an animation clip in the **Asset Browser**.

##Animation
<dl>
<dt>Untrimmed Duration</dt>
<dd>Displays the length of the original clip (in seconds).</dd>

<dt>[![NEW](../images/new.png "What else is new in v1.7?")](../release_notes/readme_1.7.html) Compiled size</dt>
<dd>The size in bytes of the compiled clip.</dd>

<dt>[![NEW](../images/new.png "What else is new in v1.7?")](../release_notes/readme_1.7.html) Trimming Start</dt>
<dd>The new start time of the clip (in seconds).</dd>

<dt>[![NEW](../images/new.png "What else is new in v1.7?")](../release_notes/readme_1.7.html) Trimming End</dt>
<dd>The end time of the trimmed clip (in seconds).</dd>

<dt>Is Additive Anim</dt>
<dd>When on, the animations play back as an overlay on top of another animation. A typical use would be for weapon recoil. You could play that animation, snapping back the gun, on top of an existing animation that the gun was already involved in.
<br>
Additive animations are treated differently than other animations (that's why you need to indicate if an animation is an additive animation). In an additive animation the first frame is discarded. Instead, it is used as a reference point for the following frames. So the animation is recorded relative to the first frame and then that relative animation can be played on top of other animations.
</dd>

<dt>Reference Pose Source</dt>
<dd>Lets you select the source (**First Frame**, **Skeleton Base Pose**, or **First Frame of Alternate Clip**) that is used to compute the offset animation. </dd>

<dt>Alternative Clip</dt>
<dd>When **Reference Pose Source** is set to **First Frame of Alternate Clip**, the base pose used to compute the offset animation is extracted from the **Alternative Clip** selected.</dd>

<dt>Preview Base Clip</dt>
<dd>Since an additive animation is played "on top" of other animations, it does not make much sense to preview the animation "by itself".
<br>
This option lets you choose a base animation for previewing additive animations. When you preview a base clip, you see it played "on top" of the base animation. </dd>

<dt>Import Transform Curves </dt>
<dd>When on, embeds the local transform curve in the runtime resource, so the curves are evaluated during playback. Turn off this option to disable transform curves during playback.</dd>

<dt>Import Blend Shapes </dt>
<dd>When on, embeds the blend shapes channel curves in the runtime resource, so the curves are evaluated during playback. Turn off this option to disable blend shape curves during playback.</dd>

<dt>Import Extra Curves</dt>
<dd>When on, embeds the extra animated property curves (property of material, property of a node, or property of a node attribute) in the runtime resource, so the curves are evaluated during playback. Turn off this option to disable property curves during playback.</dd>

</dl>


##Animation Compression
These settings let you change compression per clip to control accuracy. See also ~{ Animation compression }~.
<dl>
<dt>Position Compression</dt>
<dd>When on, positions are bit-packed from 12 bytes to 6 bytes, introducing a variance of up to 1 mm.</dd>

<dt>Rotation Compression</dt>
<dd>When on, rotations are bit-packed from 16 bytes to 4 bytes, introducing a variance of up to 0.1 degrees.</dd>

<dt>Scale Compression</dt>
<dd>When on, scale is compressed.</dd>

<dt>Position Tolerance</dt>
<dd>The variance (in meters) allowed when curve-fitting the position. A lower value gives a smaller error, but less compression.</dd>

<dt>Rotation Tolerance</dt>
<dd>The variance (in radians) allowed when curve-fitting the rotation.</dd>

<dt>Scale Tolerance</dt>
<dd>The variance allowed when curve-fitting the scale.</dd>
</dl>

##Transform curves
<br>
A read-only list of the names of each transform curve imported with the animation clip.

##Property curves
<br>
A read-only list of the names of each property curve imported with the animation clip.

> **Note:** The **Property curves** section only appears when the animation clip has extra animated property curves (ie. an animated material property, like color).

---
Related topics:
- ~{ Animation compression }~
---
