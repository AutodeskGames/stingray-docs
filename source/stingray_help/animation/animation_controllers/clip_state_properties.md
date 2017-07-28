# Clip state properties

## General

<dl>

<dt>Name</dt>
<dd>The name of the state. States are identified by their name. You cannot create two states with the same name in the same graph.</dd>

<dt>Loop</dt>

<dd>When on, the animation plays as a continuous loop. If not, the character freezes at the last frame of the animation.</dd>

<dt>Blend mask</dt>

<dd>Specifies the nodes that the animation can play on. The default is (All Bones), meaning that all bones should be affected. For animations in the base layer, you should always use (All Bones). For animations in higher layers, you can use a different blend mask, so that the higher layer animation only overrides those nodes.</dd>

<dt>Randomize</dt>

<dd>(Available only for the clip state.) The clip state can pick a random animation from a supplied set of variations. This setting lets you control how the randomization works when the animation is looping.

<dl>Possible values are:

<dt>On Entry</dt>

<dd>The animation is randomized only on entry, the same animation is used for each iteration of the loop.</dd>

<dt>Every Loop</dt>

<dd>Every loop iteration, a new animation is picked at random.</dd>

<dt>Never Twice in a Row</dt>

<dd>Every loop iteration, a new animation is picked at random. To avoid repetition, the same animation is never picked for two loop iterations in a row.</dd>
</dl></dd>

</dl>

## Animation

<dl>
<dt>Emit end Anim event</dt>

<dd>For non-looping animations you can use this to specify that an anim event should automatically be emitted when the end of the animation is reached. (It's actually emitted slightly before the end of the animation is reached, to account for the transition blend time.) This way you can create a state that automatically continues into a different state when the end is reached. For example, a jump state could transition into a land state.</dd>

<dt>Playback rate<dt>

<dd>The speed at which the animation should play. The default value of 1 means that it plays at the same speed as it was authored. You can speed up or slow down the animation as desired.
<br>
The speed can be a number, but you can also write in an expression, so you can use a variable to control it. For example you can set it to run_speed to have it controlled by the run_speed variable.
<br>
The Stingray animations are compressed and optimized for forward play. Don't play animations with a negative speed, instead create a separate animation that moves backwards.</dd>

<dt>Animations and Weights<dt>
<dd>A list of the animations that should be played in this state. The actual animation that gets played is picked at random from the list. You can set the weights to change the probabilities that a certain animation is picked. An animation with weight 10 is 10 times as likely to be picked as one with weight 1.</dd>

</dl>


## Constraints

Provides a list of constraints that should be applied when the state machine is in this state.
<br>
In this section you add the constraint or layer.

## Muted Layers

Allows the animation to mute animations from higher layers. For example, an animation in the base layer that needs to animate the hand can mute theweapon_hand layer to get full control of the hand.
<br>
Muted layers still react to events, take transitions and change state. Their animations are just not visible. It is as if the animations had been played with a zero blend set.

## Flow Events

Let you create flow events that occur at certain points in the time line when the state is played. See also ~{ Add beats and flow events to animation clips }~.
<br>
Use these events when they are emitted with the On Animation Controller Flow Events node in a unit’s Flow graph. An event with the same name gets emitted from that node when the animation is being played. This lets you connect specific things that happen in the animation (such as foot plants) with sound or particle effects.

There are four types of markers you can create in the time line:

<dl>

<dt>Flow Event</dt>

<dd>Triggers the External In Event in the unit's flow with a name matching the event’s name when the animation reaches the trigger's time value.</dd>

<dt>Enter Flow Event</dt>

<dd>A trigger that is triggered when the state is entered. Unlike a regular trigger placed at t=0, an enter trigger will always be triggered, even if the transition jumps into the middle of the animation, and it will not be triggered by loop iterations. Enter triggers can thus be used to track important state changes in the machine.</dd>

<dt>Exit Flow Event<dt>

<dd>Same as enter flow event, but triggered whenever the state exits, even if it hasn't reached the end of the animation.</dd>

<dt>Anim Event</dt>
<dd>Emits the animation event with the specified name that the animation state controller responds to.

<br>
If you jump into a state with percent-sync or beat-sync the triggers before the point where you jump in are ignored, except enter flow events, which are never ignored.
<br>
In a Time State all flow events except enter and exit flow events are ignored.</dd>

</dl>
