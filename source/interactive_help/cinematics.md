# Cinematics

Often, you'll want to create animations for each of your models in a dedicated 3D design tool like Maya or 3ds Max, and import those animations into Stingray as *clips*. The pages under the ~{ Animation }~ section describe how you can use animation controllers to set up the way those clips play back and blend over time, to connect up your animations to other things like Flow, and to layer extra effects like inverse kinematics on top.

But sometimes, you'll need to create animations that you just can't do in an external tool. For example:

-	You may need to synchronize multiple separate units in specific pre-set ways over time to give the appearance of complex interactions between various different level objects.

	To some extent, you can make this work by hooking up Flow events in each unit's animation controller and responding to them by triggering clips on other units, or by triggering clips in scripts. However, this can quickly get difficult to manage as you get more different units involved in the action.

-	You may need to animate objects or parameters that only exist in Stingray, not in your DCC tools. For example, properties for materials, the shading environment, and other entity components.

To handle cases like these, Stingray includes a built-in animation system called *Story*.

While you're working on a level in the Stingray editor, you can use the Story Editor tool to create timelines that animate the positions and properties of your objects over time. Then, you can use Flow or Lua to trigger and control the playback of these stories in response to events in the project at runtime.

The pages in this section provide some details about how to use the Story tool to make your levels come alive.
