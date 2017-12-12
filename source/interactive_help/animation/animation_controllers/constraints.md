# Animation controller constraints

A constraint is an mathematical operation that gets applied to the pose of a state after the animations have been evaluated.

Typically constraints are used to slightly retarget animations in order to ensure good interactions between the animation and real world objects that might not be exactly where the animation expects them to be. For example, ensuring that the foot connects to the ground, or that the player's hand grasps a door handle correctly.

Typically also, constraints use some form of IK to make sure that the adjustments they make to the animation look good (meaning that they match what the human body can do, or what an animator would do if she hand-animated the bone to the right position).

Constraints are applied to the pose of a state. That means they blend correctly together with the state. (For example, if one state has constrained the hand to a door knob and we transition to a different state with a free hand, the constraint blends away with the same speed as the state transitions.) They also work correctly with blend sets and layering.

Types of constraints:

## Position constraint

This is a very simple constraint, mostly for testing purposes, that just moves the bones in the blend mask to the constraint target position (based on the bone weight in the blend mask).

<dl>

<dt>Blend Mask</dt>

<dd>Specify which bones to apply this constraint to.</dd>

<dt>Target</dt>

<dd>Specifies the constraint target that gives the position that these bones should be moved to.</dd>

</dl>

##Aim constraint

An aim constraint is a special constraint used to adjust aiming animations so that the character can aim at anything.

To use an aim constraint, add an aiming reference bone to your rig. Animate the reference bone to place it where the character aims in the animation.

When the aim constraint is active, it reorients the bones in the blend mask so that they are aimed towards the constraint target rather than towards the reference point. The reorientation is relative, so the bones still animate, but relative to the target rather than relative to the reference point.

<dl>

<dt>Blend Mask</dt>
<dd>Specifies the bones to be reoriented by the aim constraint. Typically you would use 100% for the arm bones and a partial opacity (50%) for the spine bone so that you get a gradual reorientation along the bone chain.</dd>

<dt>Target Ref Bone</dt>
<dd>The reference bone to use for the aim constraint.</dd>

<dt>Constraint Target</dt>
<dd>The constraint target to use for the aim constraint.</dd>

</dl>
