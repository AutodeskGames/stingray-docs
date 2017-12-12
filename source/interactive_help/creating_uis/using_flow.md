# Using Flow for UI control

In addition to using scripts to control communication between Scaleform Studio and {{ProductName}}, we provide a basic set of Flow nodes to facilitate communication between the two systems.

<dl>

<dt>Scaleform Load Project</dt>

<dd>This node loads a Scaleform Studio project.  This node must be called before using any other Scaleform Flow nodes.

The ProjectName argument is the name of the project with the .s2dproj extension, for example: MyProject.s2dproj.

The BundlePath argument is the relative path to the root of the {{ProductName}} project, for example: content/ui/MyProjectFolder</dd>

<dt>Scaleform Load Project and Scene</dt>

<dd>This node loads a Scaleform Studio project.  This node must be called before using any other Scaleform Flow nodes. If a scene is provided it will set that scene as the start up scene.

The Project argument allows you to select the resource id of the Scaleform Studio project to load.

The Scene argument allows you to select the resource id of the Scaleform Studio scene associated with the project.
This node returns a boolean value to indicate if the project was successfully loaded.
</dd>

<dt>Scaleform Unload Project</dt>

<dd>This node clears the currently loaded project.  It should be used before switching projects or before shutting down.</dd>

<dt>Scaleform Dispatch Custom Event</dt>

<dd>This node sends a custom event to the currently loaded Scaleform Studio project. Any custom event listener will be notified and can check to see if the custom event is something to which they should respond.

The Event argument is a string which contains the name of the event and a colon delimited series of arguments, for example: `MyEvent:40:AString:true` would dispatch an event named MyEvent with arguments `40`, `AString` and `true`. In the appropriate event handler, the name string would be processed to extract the data. </dd>

<dt>Scaleform Register Custom Event Listener</dt>

<dd>This node registers a listener for a custom event in the interactive engine. Any custom event which is not registered will be ignored.

The Event argument should be the name of the custom event independent of any data, for example: for a name string of MyEvent:40:true the name of the event to register is just MyEvent.</dd>

<dt>Scaleform Unregister Custom Event Listener</dt>

<dd>This node causes a registered listener to stop listening for a custom event.

The Event argument should be the name of the custom event independent of any data, for example: MyEvent.</dd>


<dt>Scaleform Unregister All Event Listeners</dt>

<dd>This node unregisters all registered events.</dd>


<dt>Scaleform Check Custom Event Listeners</dt>

<dd>This node checks to see if a custom event that has been registered has occurred at some prior time. If the event has occurred, the event data payload will be returned and the event cleared from the event list to prevent double eventing.

The EventName argument is the name of the event to check for, for example: MyEvent

The EventPayload return will be name of the dispatched event.  For Flow, we recommend at this time using colon delimited data strings, for example: MyEvent:40:AString:true.

The EventFound will trigger if the event is found, thus continuing the flow processing chain.</dd>


<dt>Timeline</dt>

<dd>Timeline events all take a full path to a given actor, for example: Scene0.Actor1.Actor2.Actor3 and performs the requested action if the specified actor has a timeline associated with it. Use the Copy Clipboard icon next to actor name in the Scaleform Studio Editor to get the path.

<dl><dt>Scaleform Goto Frame and Play</dt>

<dd>Goes to a specified frame on the timeline and begins the animation at that point.</dd>

<dt>Scaleform Goto Frame and Stop</dt>

<dd>Goes to a specified frame on the timeline and stops the animation at that point.</dd>

<dt>Scaleform Goto Label and Play</dt>

<dd>Goes to a specific label on the timeline and begins the animation at that point.</dd>

<dt>Scaleform Goto Label and Stop</dt>

<dd>Goes to a specified label on the timeline and stops the animation at that point.</dd>

<dt>Scaleform Play</dt>

<dd>Begins playing the animation from the current timeline position.</dd>

<dt>Scaleform Stop</dt>

<dd>Stops playing the animation at the current timeline position.</dd></dl></dd>

</dl>

![](../images/studio_flow.png)
