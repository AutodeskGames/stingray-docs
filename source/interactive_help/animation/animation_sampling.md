#Animation sampling

Stingray animations are sampled at 30 Hz. It is important to understand that all the engine sees are snapshots of the animation taken at 30 Hz intervals, so if your objects are rotating really fast, information can be lost.
For example, suppose you have made an object that spins at 30 revolutions per second. When this object is sampled, the engine will in fact see a stationary object because every 1/30th of a second when the animation is sampled, it will have made a full revolution and be back in the same place.

If you need to import objects that rotate faster than 15 revolutions per second your only recourse right now is to animate the object in slow-motion and then speed up that slow-motion animation during playback.

Stingray samples and evaluates all animations in the local space of each node. This is usually the best choice because typically each node has a small and simple movement with respect to its parent, but it can have a very complicated movement in world space. For example, consider a rotating dagger, in a rotating hand at the end of a rotating arm. Each node has a simple rotating movement with respect to its parent, but the resulting movement of the dagger in world space can trace a complicated orbit.

In some situations where you have the opposite problem, an object that has a complicated movement in local space, but a simple movement in world space. This typically happens when an object is somehow constrained in world space.

Consider a character wearing a ball and chain. Suppose the character does a whip-like motion with the chain, but that the ball is so heavy that it doesn't move. In this case the ball has a very simple movement in world space (it doesn't move at all), but a very complicated movement in local space (because all of its parents are moving). You might even run into sampling problems, because the ball might rotate faster than 15 revolutions per second in local space, even though it is stationary in world space.

In this case, a good solution is to relink the character, so that the heavy ball is not linked to the end of the chain. Instead, link the ball's node directly to the unit's root node. This will give the ball a local space movement that is just as simple as it world space movement (resting).

The same technique can be used for other issues caused by long node chains. Since animations are evaluated in local space, errors propagate along the node chain. If you animate a whip as a long chain of nodes, the error at the tip of the whip can be quite large. You can get around that by linking all nodes in the whip to the root node, instead of linking them in a sequence as you would normally do. This reduces the error at the cost of (possibly) slightly larger animation files.

Another way of dealing with objects that are constrained in world space, is to use an explicit constraint to lock it in world space. This explicit constraint can then compensate for any errors that might occur in the node chain.
