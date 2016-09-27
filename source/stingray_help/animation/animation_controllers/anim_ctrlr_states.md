# Animation controller states

A state corresponds to something the character is doing. States can be things like walking, running, jumping, being idle. Each state is associated with a particular animation, or a mix of animations that play when the character is in that state. The character is in exactly one state at a time (per layer).

In the state graph, states are represented by boxes and arrows that show the possible transitions between states. Transitions are triggered by anim events and the name of the anim event that triggers a particular transition is displayed along the transition arrow.

To work with states in the ~{ Anim Controller Editor }~:

| To  | Do this |
| ------------- | ------------- |
| Select and move states   | Click and drag.  |
| Select multiple states for copying and pasting  | Shift-click. |
| Move a selection of states to a group state  | Drag and drop the selection of states over a group state in the graph or tree view.|
| Create new states  | Right-click on the graph or in the tree view and select from the pop-up menu. |
| Create a transition between two states  | Drag from the little box in the state you want to transition *from* to the state that you want to transition *to*. |

The engine supports a number of different animation state types for achieving different effects. They are described below:

## Clip state

This is the most common state. It is a state that just plays a single animation. The different settings for the state are explained in ~{ Clip state properties }~. (Many of these settings are available in other state types as well.)

## Empty state

An empty state is a state that doesn't play any animation at all. It is useful in higher layers when you want to let underlying layers shine through.

## Additive Clip state

Same as a clip state but plays an additive clip animation. Additive clip animations are applied to the character once all non-additive animations have been evaluated. Typically you put them in a higher layer to apply special effects such as gun recoil or hit reactions.

## Blend states

There are 3 kinds of blends:

- 1D blend space state

- 2D blend space state

- Custom blend state

1D and 2D blend space state are the most simple and straightforward, it's often best to start with these. These states let you put in the animations and give a variable to drive it. You enter numbers for where you want the states to blend in.

The custom blend state is more complex. A custom blend state mixes together a number of animations with different weights.

## Time state

A time state lets you drive the playhead of the state based on a variable. (Every update to the game engine, you’re telling it which frame to evaluate, with a variable.)

Instead of having the time of the clip driven by its own playback, a time state lets you drive the time with a value. This works similarly to Set Driven Key in Maya or Maya LT - you take one parameter and drive it with another. In this case, time is driven by a parameter.

The engine takes an input variable and uses that to control the time of the frame that is shown. Unless the script changes the time variable, the time state will stay frozen on the same frame.

An example where you might use a time state is a howitzer that can be configured to shoot in different angles. You could create an animation that has the howitzer's configuration for each angle, and then use the time variable to set the angle.

For example, the gun points straight ahead, then goes to pointing up. You can use a variable to drive it directly, such as a 0 – 1 float where 0 is forward and 1 is up.

## Ragdoll state

A ragdoll state activates a particular ragdoll. See the description of ragdolls below for information on how to set up a ragdoll.

## Group state

The animation state machine for a complex character can contain hundreds of states. At this point the state graph becomes cluttered and hard to read.

Group states are a way to get around that complexity. They let you organize a set of related states. For example, all states related to climbing (Climbing Up, Climbing Down, Climbing Jump) can be grouped into a single climbing state.

You can create transitions to and from the group state just as you do for other states. By default transitions from a group state apply to all the states in the group state unless you explicitly set the nested state to transition from.

If you want a specific transition for a particular nested state inside this group you can override the transition from all states by creating an additional transition from the group and explicitly setting its **From State** to the nested state you want to transition from.

For transitions to a group state, select which of the nested states the transition to go to in the **To State** drop-down menu. (This is described in more detail in the Transitions section.)

| To  | Do this |
| ------------- | ------------- |
| Navigate inside the group <br>(show the states inside the group state)  | Double click a group state.  |
| Go back outside the group state  | Double-click the background. |
| Create a group state  | Ctrl+ G |
| Ungroup a group state  | Ctrl + Shift + G |
| Move a state into a group  | Drag the state into the group in the Anim Controller window graph or tree view |

You can have multiple nested levels of group states.

You can add constraints and muted layers to group states, and all their children will inherit those. (They don’t have the other things that some other states can have.)

## Shortcut state

In the state graph you can create transitions between states regardless of whether the states are nested in a group.

The purpose of shortcut states is to make it easy to make transitions to and from states that are not located close together in the state machine graph.

A shortcut state is just a reference to a state at some other place in the layer (you cannot create transitions between states on different layers because they are in different state machines).

Target > The state that the shortcut state "points to". By default the Target is This Group. (the group the shortcut is inside).

A transition from this shortcut is treated as a transition from the group. When you put a transition from the shortcut to any other state inside the group, you create a transition from every other state inside the group to the state you just connected.

> **Warning:** Every time the transition is triggered, it can be taken every frame, even while it's blending. If using a shortcut from a group, make sure you're not sending the event every frame because it will transition/blend into itself over and over again.
