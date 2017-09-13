# The IK stack

HumanIK in {{ProductName}} provides a stack of IK behaviors that you can apply to your characters simultaneously. For example, you might want the character to do all of the following at once:

 - maintain floor contact
 - look at the player
 - point at a place of interest in the scene

There are two components to the workflow when setting up the IK behavior stack in {{ProductName}}. First, you declare or set up everything the character needs for IK during gameplay. Next, you'll test the level to try out and fine tune the constraints that you declared.

## Step 1. Declare your IK intentions

Using Flow or Lua, equip the character with all the IK behaviors it needs in the level during gameplay.

The simplest way to make these declarations is to use Flow. For example, if you know "My character needs to have precise floor contact, needs to look at specific points, and needs to aim at this target", you can declare all of those required constraints using the **HumanIK > Character Add Constraints** category in the Flow editor.

For more information on the HumanIK flow nodes available and the IK behaviors you can add to the stack, refer to the Flow node reference and look for the HumanIK category. (To add HumanIK nodes to your flow graph, right-click and select from the **HumanIK > Character Add Constraints** category.)

## Step 2. Dynamic fine tuning

Once you've declared all of the IK behaviors a character can have, you'll test the level to see the dynamic mix of behaviors from your IK stack.

To tweak the blending in and out of constraints, start to add nodes from the **HumanIK > Character Tune Constraints** category to your flow graph. (Again, you can do this work in Flow or Lua.) For example, add a Set Blend Alpha node to trigger/turn on the blend factor and turn a constraint on.

If you set up a Look At constraint in step 1, you will now specify the targets to aim at. As you blend in the constraint, you can see the character's Look At behavior start to happen on screen.

## Example

1. Set up a Look At constraint.

  	By default, the constraint is disabled, meaning its Blend Factor is 0.

2. Set up Character Tune Constraints.

  	Enemies are coming in gameplay mode, Flow sequence sets blend factor for the look at constraint to 1, so automatically you see your character looking at a specific enemy.
