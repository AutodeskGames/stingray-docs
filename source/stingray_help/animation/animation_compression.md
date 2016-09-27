#Animation compression

Animations can consume a lot of memory. To reduce the cost, Stingray uses a lossy compression scheme. When exported, the animation is sampled at 30 Hz and key frames are recorded. During data compilation, the engine tries to fit curves that match these key frames. Then the control points for these curves are compressed, which loses some precision. Finally, during playback, the engine interpolates in the curves to find the pose at a particular time value.
It is important to note that the curves that the engine uses for interpolation are not the same as the "curves" used by your DCC tool (for example, MotionBuilder). The engine uses its own curve format, just for compression, and it won't match the DCC curves.

The compression introduces slight variation in the animations - they will not look exactly the same in-game as in your DCC. You can use the clip settings to control the amount of compression and reduce the error. You can turn compression on or off (per clip) for position, rotation, or scale at any time.

Stingray's lossy animation compression is based on two mechanisms. First, curves are fitted to the data. These curves can be represented with less data than the original animation keys. The curves may not fit the original animation keys exactly, so > this introduces an error in the animation.

Second, the parameters that control the curves are "packed" into fewer bits to consume as little memory as possible. For example, a packed rotation value uses only 4 bytes. A full rotation value uses 16 bytes, so that is a 4x improvement. However, this packing also loses a bit of information and thus introduces an additional variation in the animation.

The result of these variations is that the animated bones are slightly off from where you  expect them to be. These errors are most visible in the extremities (hands and feet), because each step of the node chain introduces additional error. The more parents a bone has, the greater the variation.

If you make a ridiculously long node chain, such as a whip with 100 linked nodes, you will clearly notice the difference.

Usually the variations are so small that you only really notice them when the animated object interacts with other objects. For example, in a walking animation you may notice that the errors cause the feet to slide with respect to the ground. In an animation where the player holds a two-handed weapon you may notice that the two hands slide with respect to one another.

One way of solving such issues is to reduce the amount of compression so that the error is smaller. Another approach is to use a constraint. For example, for the two-handed weapon, one hand can be constrained with respect to the other so that they always stay in the grip formation.

---
Related topics:
- ~{ Animation clip properties }~ (per-clip compression settings)
---
