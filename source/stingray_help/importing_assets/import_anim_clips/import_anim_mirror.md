# Import animation clips with mirrored animation

If you use negative scale values in your DCC tool for mirroring animations, you can still import those animation clips. However, note that the following limitations apply in Stingray:

*	For each bone in Stingray, the scale vector values are either all positive (standard case) or all negative (mirrored case). If all the scale components in the DCC tool don't have the same sign, Stingray forces the same sign for all and compensates with an additional rotation.

*	For any given bone, there is no support for mirror swap along the animation: An animation which begins as a mirror animation (or as non-mirrored) must stay so until the end of the animation. Thus each animation has an implicit mirroring profile (each bone is either mirrored or non-mirrored and this profile is a constant property of the animation).

*	Though animations for a unit can have different mirroring profiles, you can't blend them together. For example, if you have an animation `A` standard for all bones and another one `B` mirrored on one bone you can't create a blended animation `t * A + (1 - t) * B` and any transition between them must be `immediate`. The engine ignores the animation with the smallest blend weight for conflicting bones.

*	Stingray does not support having different mirroring profiles in any given FBX file - all animation in the FBX file must have the same mirroring profile.
