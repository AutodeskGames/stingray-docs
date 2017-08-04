# Previewing animation

The various preview windows in the animation tools and the ~{ Asset Preview }~ window let you see how the compressed animation will look in-game. You can use the playback control to play back the animation at various speeds and see if the compression causes any undesired artifacts.

If you create an **Animation/On Animation Controller Flow Events** node in the unit Flow graph, an event with the same name gets emitted from that node when the animation is being played. This lets you connect specific things that happen in the animation (such as foot plants) with sound or particle effects.

You can add Flow events either in the ~{ Animation Clip Editor }~ or in the animation controller. Flow events created in the animation controller are specific to a particular animation state and occur whenever that state is played, regardless of what mix of animations the state is playing.

Flow events from the **Anim Clip** Editor are owned by the animation, so they will be triggered whenever the animation is played regardless of what state it belongs to.

---
Related topics:
- ~{ Add beats and flow events to animation clips }~
- ~{ Visual programming using Flow }~
---
