# Script interface for animation

To play animations from Flow you can use anything from the **Animation** category in the Flow node reference.

For example, the **Animation/Send Animation Controller Event** Flow node triggers animation controller events.

To receive Flow events from the animation controller, use **Animation/On Animation Controller** Flow Events.

## Playing animations without an animation controller

On some rare occasions you may want to use the animation system without setting up an animation controller, instead doing manual blending between the states. To be able to do that, the unit must have a bones list, but no animation controller. If that is the case, you can manually blend animations by adding these functions to your Lua script:

`Unit.crossfade_animation()`

`Unit.is_crossfading_animation()`

`Unit.crossfade_animation_set_speed()`

`Unit.crossfade_animation_set_time()`

## Scripting the animation controller

To send anim events, set variables and move constraint targets, use the script functions:

`Unit.animation_event()`

`Unit.animation_set_variable()`

`Unit.animation_set_constraint_target()`

`Unit.set_animation_root_mode()`

Check out the Lua API documentation for more thorough descriptions of the script functions mentioned above.
