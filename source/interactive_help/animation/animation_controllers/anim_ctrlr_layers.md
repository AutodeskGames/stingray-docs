#Animation controller layers

Animation controllers are composed of one or more layers. Each layer has its own state machine and at any one point in time, the unit is in a particular state in each layer.

Animations in higher layers (later in the list) override animations in lower levels based on their blend masks. For example, if the animation in the higher level has a blend mask that includes the arms, it overrides the arm animations in the base layer.

The states in the base layer should always use a blend mask with 100% blending on all nodes, otherwise you will end up with some nodes that don't have any animation and that will look strange.

How you set up the layers depends on how you want to control the character. Typically, you should create one layer for each aspect of the character that you want to be able to animate completely independent of any other aspects.

For example, use one layer for the hand holding a weapon, because you want to be able to animate it into a pistol grip regardless of what the other animations are doing. If you want to control eye movement separately you could add a layer for the eyes.

Just because you have a layer controlling the hand doesn't mean that you have to do all the hand animation in that layer. You can transition to an empty state in the weapon hand layer which lets the underlying animation for the hand shine through.

Each layer has a **Default State** property, which sets the active state for this layer's state machine when the animation controller gets initialized.
