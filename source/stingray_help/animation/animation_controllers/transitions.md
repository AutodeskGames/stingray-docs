# Animation controller transitions

![UPDATED](../../images/updated.png)

A transition controls how the animation controller moves from one state to another: when the transition happens and how it is blended.

<dd>

<dt>From State</dt>
<dd>The state or nested state that this transition goes from.</dd>

<dt>To State</dt>
<dd>The state or nested state that this transition goes to.</dd>

<dt>On</dt>
<dd>The event that triggers this transition.</dd>

<dt>Blend Duration</dt>
<dd>The time in seconds that the blend transition takes. A value of 0 means the animation jumps directly from one state to another, which looks jerky, unless the animation poses in the two states match exactly.

A blend time of 0.2 s means that the animation pose from the From State blends to the animation pose of the To State over 0.2 s.

> **Note:** The blend time does not affect which state the state machine is "in", only what you see visually. Regardless of the blend time, the state machine goes immediately to the **To State**. The blend time just controls how long it takes to full blend out of the From State animation.

</dd>

<dt>Mode</dt>

<dd>Specifies how the animation time gets synchronized between the From State and To State and adds additional controls for when the transition is allowed to happen. The following values are possible:
<dl>

<dt>Immediate<dt>
<dd>The From State exits immediately and the To State is entered at a time t=0.</dd>

<dt>Wait Until End</dt>

<dd>The machine waits until the **From State** has finished playing (actually a bit sooner, to make room for the blend time), then it transitions to the **To State** att=0.

Until the transition happens, the machine is still in the **From State**. If another transition can be taken in the meantime, the **Wait Until End** transition is canceled and the other transition happens instead.</dd>

<dt>Sync-Beat-Closest-Immediate</dt>

<dd>Uses the animation beats created in the **Anim Clip** Editor and tries to match beats in the animation of the **From State** with beats in the animation from the **To State**.

In this mode, the state machine finds the closest beat to the current time before or after the current frame in the from animation (e.g. right). It then immediately transitions to the to state and starts at the time where the first beat with that name occurs. This ensures that the from pose is close to the to pose.


  > **Important:** The beat has to occur in the **To** animation as well as the **From** animation for the transition to be taken at all. See also ~{ Add beats and flow events to animation clips }~.

<dt>Sync-Beat-Wait-Until-Beat</dt>

<dd>In this mode, the machine finds the next beat in the from animation. It then waits until the first beat with the same name occurs and transitions to the to state and starts at the time where the first beat with that name occurs.

Just as with wait transitions, if a different transition happens before the beat transition is taken, the queued beat transition is canceled.

  > **Important:** The beat has to occur in the **To** animation as well as the **From** animation for the transition to be taken at all. See also ~{ Add beats and flow events to animation clips }~.

</dd>

<dt>Sync-Percentage-Immediate</dt>

<dd>The *from* state is exited immediately, and the *to* state is entered at the percentage of the *from* state that has been played. So if 25% of the *from* animation has been played when the transition is taken, the machine jumps in to the *to* state at 25% of its time line.</dd>

<dt>Sync-Inverse-Percent-Immediate</dt>
<dd>Same as Sync-Percentage-Immediate, but the from percentage is inversely synced with the to percentage. If the from animation is at 25%, enters the to animation at 75%.

This is useful to synchronize animations that are the inverse of each other, for example *climb up* and *climb down*.
</dd>
</dl>
<dt>Beat</dt>

<dd>If specified, the transition happens if the next beat in the animation is the specified beat. (Or the closest beat, if beat-closest is used.)

Only take effect if the **Mode** type uses a beat. Required if you have selected a mode that uses beats.

This can be used to take different transitions based on the same anim event.

For example, a run state could transition either to a left jump or right jump depending on which foot is forward.

</dd>
</dd>

##Group transitions

For a transition between two group states you can use a group transition. With a group transition, you specify with a list for each substate in the from state which substate in the to state it should go to.

Group transitions are useful when you have group states with similar substates. For example, you may have an entire movement graph that deals with unarmed character and a very similar movement graph for an armed character. When the character equips a weapon, you want to go from an unarmed state to the corresponding armed state.

To create a group transition, drag a transition between two group states.

To convert the group transition to a simple transition, right-click and select **Convert to Simple Transition**.

The editor automatically tries to match up nested states with the same names in the *From* state and the *To* state. If you have created more nested states since you created the transition, click **Update Auto-Mapping**.

## Conditional transitions

[![NEW](../../images/new.png "What else is new in v1.6?")](../../release_notes/readme_1.6.html)

Conditional transitions let you control the flow of transitions in the state machine at runtime with an expression evaluation.  Use a TransitionSwitch node to transit from one state to another at runtime based on the evaluation of the TransitionSwitch node expression. 

For example, you can use conditional transitions if you have a character having different movements depending on a layer seed set at runtime using C or LUA. See also ~{ Animation controller states }~.
