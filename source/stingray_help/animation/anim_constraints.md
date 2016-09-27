#Animation constraints

A constraint is some kind of transformation that is applied to an animation pose after it has been computed from the animation data.

There are 2 main categorys of constraints, ~{ Animation controller constraints }~ and ~{ HumanIK }~ Constraints.

One of the most common uses of constraints is to slightly retarget animations so that they interact better with objects in the real world. For example, a foot IK constraint might move the characters feet so that they match the curvature of the ground. A position constraint could be used to retarget a pick up animation so that it matches exactly with the object that is being picked up. An aim constraint can be used to change where an animation is aiming.

Constraints are set up in the animation controller.
