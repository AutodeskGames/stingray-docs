# Animation optimization

##Memory

To minimize animation memory use think about:

- The amount of animation (hours of animated data)
- Animation compression (more compression means less memory use)
- Package organization (organize the animations so that, for example, special animations for cutscenes do not have to be loaded in memory when they aren't needed)

Animation streaming is not supported.

When the engine is running you can use the console command:

> `memory_resources list animation`

To get a list of the loaded animation resources and their sizes:

~~~

  	13:41:40.61  [Application] Obtaining resource statistics. This may take a while...
  	13:41:40.61  [Application] -----------------------------------------------------------------------
  	13:41:40.61  [Application] 19 kB - units/character/animations/onground/revolver/walk/aim/180
  	13:41:40.61  [Application] 17 kB - units/character/animations/onground/revolver/run/aim/180
  	13:41:40.61  [Application] 17 kB - units/character/animations/onground/revolver/run/aim/-90
  	13:41:40.61  [Application] 17 kB - units/character/animations/onground/revolver/run/aim/90
  	13:41:40.61  [Application] 17 kB - units/character/animations/onground/revolver/run/aim/0
  	13:41:40.61  [Application] 16 kB - units/character/animations/onground/revolver/run/aim/-180
  	13:41:40.61  [Application] 16 kB - units/character/animations/onground/unarmed/walk_fwd_lean_left
  	13:41:40.61  [Application] 16 kB - units/character/animations/onground/unarmed/walk_fwd_lean_right
  	13:41:40.61  [Application] 16 kB - units/character/animations/onground/unarmed/walk/fwd/0
  	13:41:40.61  [Application] 16 kB - units/character/animations/onground/revolver/walk/aim/270
  	13:41:40.61  [Application] 15 kB - units/character/animations/onground/revolver/walk/aim/-90
  	13:41:40.61  [Application] 15 kB - units/character/animations/onground/revolver/walk/aim/0
  	13:41:40.61  [Application] 15 kB - units/character/animations/onground/revolver/walk/aim/90
  	13:41:40.61  [Application] 14 kB - units/character/animations/onground/unarmed/run/fwd/lean/right
  	13:41:40.61  [Application] 14 kB - units/character/animations/onground/unarmed/run/fwd/lean/left
  	13:41:40.61  [Application] 14 kB - units/character/animations/onground/unarmed/jog/fwd/0
  	13:41:40.61  [Application] 14 kB - units/character/animations/onground/unarmed/jog/fwd/lean/right
  	13:41:40.61  [Application] 14 kB - units/character/animations/onground/unarmed/run/fwd/0
  	13:41:40.61  [Application] 14 kB - units/character/animations/onground/unarmed/jog/fwd/lean/left
  	13:41:40.61  [Application] 13 kB - units/character/animations/onground/revolver/jog/aim/180
  	13:41:40.61  [Application] 13 kB - units/character/animations/onground/revolver/jog/aim/90
  	13:41:40.61  [Application] 13 kB - units/character/animations/onground/revolver/jog/aim/270
  	13:41:40.61  [Application] 12 kB - units/character/animations/onground/revolver/jog/aim/0
  	13:41:40.61  [Application] 12 kB - units/character/animations/onground/revolver/jog/aim/-90
  	13:41:40.61  [Application] 7 kB - units/character/animations/onground/unarmed/idle/0
  	13:41:40.61  [Application] 7 kB - units/character/animations/onground/revolver/idle
  	13:41:40.61  [Application] 6 kB - units/character/animations/onground/revolver/idle/aim/-90
  	13:41:40.61  [Application] 6 kB - units/character/animations/onground/revolver/idle/aim/0
  	13:41:40.61  [Application] 6 kB - units/character/animations/onground/revolver/idle/aim/90
  	13:41:40.61  [Application] 3 kB - units/character/animations/hands/wpn_colt_idle
  	13:41:40.61  [Application] -----------------------------------------------------------------------
  	13:41:40.61  [Application] Total Memory for animation - 380 kB

~~~

##Animation performance

If your project has lots and lots of animated characters, animation can be one of the more expensive CPU systems in the engine. In that case it makes sense to spend some effort on optimizing your use of animations. (If you only have a few characters, you typically don't have to worry about animation performance.)

Objects within units can move for many different reasons (such as from Lua or Flow programming), but most objects move because they are animated. So most of the time used here comes from the animation system. The more animated characters there are, the more time used.

If you need to optimize animations, try the following things:

- Use simpler blends and mixes. Blend fewer animations together to get the result. (Note that if you blend with a weight of 0 the animation evaluation is automatically optimized away, so you don't have to remove the animations, just make sure that their weights are 0.)

- Use shorter transition times to avoid having multiple animations playing during the transition.

- If you have lots of bones that are only used in cutscenes, consider using a simpler rig for your character.

- Complicated constraints (such as the aim constraint) can be expensive. Avoid using them for unimportant characters.

## Ragdoll performance

Using ragdolls in the animation controller can affect the runtime of the physics system. Simulating many ragdolls is expensive.

One very important thing to watch out for is ragdolls that do not fall asleep properly. For the physics system it's expensive to simulate moving objects, such as a falling body. However, once the body has landed on the ground and is not moving any more, the physics system can "put it to sleep" and the simulation becomes much cheaper.

If a ragdoll is set up badly, it can continue to jerk slightly (in a way that might be hard to notice visually) even after it lands. As a result it will never go to sleep and you will pay the expensive simulation cost until the ragdoll unit is destroyed. If you have many such ragdolls in a level, the physics simulation time can become very large.

To check that your ragdolls fall to sleep property, enable physics debugging with the console command:

> `physics debug on`

Dynamic actors that are "awake" are bright yellow. Sleeping actors are a dull yellow.

Create some ragdolls and make sure that they go to sleep after a while. Try spawning them on different types of ground. Sometimes a ragdoll can sleep fine on flat ground, but will have problems in stairs or on ramps.

## Skeleton LOD performance

Setting up skeleton LODs (levels of detail) improves performance by disabling the animation of small bones (such as fingers) at distances where their movement isn't visible. When animation is disabled for a bone it will freeze in its current position in local space.

Use the **Skeleton Editor** to set up LODs for bones:

In each LOD you specify which bones are active for that LOD. Each LOD contains the bones from the previous LOD as well as any additional bones. (Each LOD builds on the previous LOD.)

LOD levels for the skeleton are not applied automatically, instead it is up to the script to determine which bone LOD level is suitable for a particular unit, depending on how important that unit is, how far away it is from the camera, and so on.

To set which skeleton LOD is used at runtime, put this command in your Lua script:

> `Unit.set_bones_lod(unit, lod_level)`

Note that the LOD levels for the skeleton are not connected to any other LOD systems (such as the LOD system for meshes). You can use skeleton LOD regardless of whether you use mesh LOD. For more information on mesh LOD, see ~{ Level of Detail (LODs) }~.

Skeleton LOD mainly reduces the cost of the animation_blenders (but it can also cut down the cost of other systems). Look at what that cost is, and experiment with LODs (a quick test is to disable everything but the root for all units) to see if using skeleton LOD is worth it in your projects.

## Animation merging

Animation merging is an optimization to reduce the cost of AnimationPlayer::update when you have lots of units, many of which are playing the same animation (for example, a marching army).

Normally, the interactive engine creates a separate animation evaluator for each unit in the engine world. If there are 50 units using a run animation, each unit separately evaluates the pose of the animation at its own local time (t=0.11, t=0.23, t=0.13). An exception is if two units start the run animation at exactly the same time and play it at exactly the same speed. In that case, the two units can share the evaluation. You only need to find out what the run animation looks at for t=0.19 once, and can the reuse that pose for both units.

The animation merging optimization lets more units to share an animation evaluation by relaxing the demands on showing the pose at exactly the right time. For example, suppose one unit wants to evaluate run at t=0.11 and another wants to evaluate it at t=0.13. To improve performance, you can evaluate the animation once att=0.12 and then reuse that for both units. Each unit shows the animation at a slightly different time than expected, but the difference is hardly noticeable.

To enable animation merging, put this command in your Lua script:

> `Unit.set_animation_merge_options(u, "max_start_time", t1, "max_drift", t2, "clock_fidelity", f)`

<dl>

<dt>max_start_time = 0</dt>

<dd>Controls how far into the animation to start, if a character is already playing the desired animation. For example, with a value of 0.2, it's possible to reuse an existing run animation playing at t=0.1, but not one at t=0.3. If there is a playing animation with a suitable t, in some cases jumping into that animation can cause a time discontinuity. If there's no suitable t, the engine creates another animation evaluator.</dd>

<dt>max_drift = 0 </dt>

<dd>When two or more units share the same animation, this parameter controls how much their clocks are allowed to drift apart (because of different animation speeds) before sharing stops and each animation gets its own evaluator. A value of 0.2 s means that as long as the time in each unit does not differ by more than 200 ms, they continue to share the evaluator.</dd>

<dt>clock_fidelity = 1.0</dt>

<dd>To prevent animations from drifting apart, the engine can "cheat" by modifying their animation speeds slightly, so that their time values stay similar. This parameter controls how much the engine can change the speed.

A value of 1.0 means the engine must respect the speed set by the animator 100% and not change it at all.

A value of 0.9 means the engine must only respect the animators speed to 90%. It can speed up or slow down the animation by up to 10% in order to make it synchronize better with other animations.

As described above, animation merging mainly effects the cost of AnimationPlayer::update. Experiment with setting different options for all your units, and see how it effects the time of AnimationPlayer::update to determine if it is worth using animation merging for your project.
</dd>

</dl>
