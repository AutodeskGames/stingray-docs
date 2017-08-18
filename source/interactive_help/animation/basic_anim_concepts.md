# Basic animation concepts

##Skinning

When you animate units you typically want to skin them so that you get a smooth mesh, but in the interactive engine there is no direct connection between animation and skinning.

Skinning affects how a mesh is drawn, when the nodes in the scene tree are in a particular arrangement. It doesn't affect their movement.
Animation affects how the nodes move, not how they are rendered.

So you can have a skinned object without animation. For example, you can make a tree with skinned branches that can be moved to create variations. You can also have an animated object without skinning - for example a rigid door that opens or closes with an animation.

##Animations

An animation consists of a number of frames. Each frame records the local position and rotation and scale of every node. When the animation is played, the bones of the unit are positioned in these recorded poses.

The engine does not play back the exact recorded frames. Instead, it interpolates between the frames to show the animation at the engine's current time. For example, if frames have been recorded for every 0.1 s and the engine's current time is 0.73 s, then the engine blends 70 % of the 0.7 frame with 30 % of the 0.8 frame to get an approximation of what the animation looks like at 0.73 s.

The interpolation allows animations to be played back at a higher frame rate than they were recorded or in slow motion. It also avoids the aliasing effects that would otherwise occur if the engine time step was slightly different than the animation frame time. However, it means that as an animator, you don't see the exact frames you created in-game, only interpolations between those frames.

##Types of animation playback

The interactive engine supports different types of animation playback:

1.	Story animations.

    For animations that you apply to multiple units within a level, you can create simple animations using the ~{ Story Editor }~.

2.	Clips with Flow or Lua.

    For more complex movements required per unit, you can import animation clips, then trigger them using Flow or Lua. This workflow is good for things like inanimate objects (doors opening, and so on).

3.	Animation controllers.

    For character animation. (Although, an inanimate object with complicated motion might benefit from an animation controller as well.)
