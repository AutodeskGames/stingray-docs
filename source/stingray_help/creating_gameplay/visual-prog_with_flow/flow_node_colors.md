# Flow Node Colors and Types (Level Flow)

Each Flow node can take in certain types of input data, and can produce other kinds of output data. Each of the node's input and output connections uses a color to tell you the type of data it handles.

These colors are always the same across all nodes. Once you get used to the color conventions, it's a quick visual cue that can help you make connections faster without having to look up the nodes in the [Flow node reference](../../../flow_ref/index.html).

![](../../images/node_input_colors.png)

<style>
span.dot {
	display:inline-block;
	width:16px;
	height:16px;
	border-radius:8px;
	position:relative;
	bottom:-2px;
}
</style>

<span class="dot" style="background-color:#2F4DD3"></span> Blue: Numbers.

>	Numbers can be integers or decimals, positive or negative.
>
>	Look under the **Math > Numeric** category for nodes that can help you work with these numbers.

<span class="dot" style="background-color:#8A7F46"></span> Light Brown: Booleans

>	Booleans can be true or false.
>
>	Look under the **Math > Boolean** category for nodes that can help you work with these values.
>
>	A common use for Boolean values is to do something different depending on the value -- see the **Flow Control > Branch** for one way you can choose between two alternative Flow graphs depending on whether an input value is true or false.

<span class="dot" style="background-color:#923930"></span> Dark red: Strings

>	Strings are words or phrases of text.
>
>	Sometimes you are free to enter any text you want for a string. Other times, you may be constrained to certain pre-set values. For example, if a node requires the name of a certain type of resource in your project, you'll be asked to select one of those resources from your project when you click the ![editable](../../images/icon_edit_shader.png) icon.

<span class="dot" style="background-color:#30B27A"></span> Teal: Vector3 data.

>	These usually represent positions or directions in 3D space.
>
>	Look under the **Math > Vector** category for nodes that can help you work with vector data.

<span class="dot" style="background-color:#338EA7"></span> Light blue: Quaternion rotations

>	These values represent rotations in 3D space. Internally, they are expressed as [quaternions](https://en.wikipedia.org/wiki/Quaternion).
>
>	Look under the **Math > Rotation** category for nodes that can help you work with quaternion rotations.

<span class="dot" style="background-color:#639230"></span> Green: Units and entities

>	Each green connection represents an individual unit or entity that has been spawned in a level.
>
>	In Level Flow, use the **Data > Level Unit** and **Data > Level Entity** nodes to select a unit or entity that you've placed in the level. In Unit Flow, or when setting up a Flow component for an entity, use the special **Me** value to refer to the unit or entity that is using your Flow graph.

<span class="dot" style="background-color:#A73051"></span> Maroon: Cameras

>	These connections represent a camera that is owned by a unit.
>
>	The **Camera > Get Active Camera** and **Camera > Set Active Camera** nodes are very handy for working with the camera that is currently being used to render in the main window, but be aware that these nodes only work if your project is using the Appkit. (If you started from a template project and didn't change your boot script, then you're probably using the Appkit).
>
>	You can also use **Unit > Get Unit Camera** to get a camera owned by a particular unit.

<span class="dot" style="background-color:#BD6F38"></span> Orange: Lights

>	These connections represent a light that is owned by a unit.
>
>	Look in the **Lights** category for nodes that you can use to read and modify a light's properties. You can also use **Unit > Get Unit Light** to get a light owned by a particular unit.

<span class="dot" style="background-color:#2D2EAC"></span> Dark blue: Meshes

>	These connections represent a mesh that is owned by a unit.
>
>	You can use **Unit > Get Unit Mesh** to get a mesh owned by a particular unit. At the moment, meshes are mostly useful in order to retrieve the materials that are assigned to its material slots. Use the **Material > Get Mesh Slot Material** and **Material > Get Mesh Slot Material** nodes to do that.

<span class="dot" style="background-color:#C22E66"></span> Magenta: Materials

>	A material connection represents a single instance of a material, which is usually associated with a specific mesh owned by a unit.
>
>	You can get a material from a mesh, using the **Material > Get Mesh Slot Material** and **Material > Get Mesh Slot Material** nodes. Once you have this material, you can use the other nodes in the **Material** category to set new values for input variables exposed by that material.

<span class="dot" style="background-color:#7C5C43"></span> Dark brown: Physics actors

<span class="dot" style="background-color:#BD7E71"></span> Salmon: Physics movers

>	Actors and movers are representations of a solid object inside the physics simulation.
>
>	Usually, you'll retrieve an actor or a mover using the **Unit > Get Unit Actor** or **Unit > Get Unit Mover** nodes. Once you retrieve the object, you can pass it in as an input to the nodes in the **Physics** category to set and retrieve the properties of the object.

<span class="dot" style="background-color:#3F7174"></span> Slate blue: IDs

>	IDs are hashed representations of strings, which the engine uses internally to keep track of names. For most purposes, you probably won't need to use this data type.

<span class="dot" style="background-color:#A6A31C"></span> Yellow: Generic data

>	A few nodes have *generic* input connections, which can accept any type of object listed above.
>
>	For example, the nodes in the **Script** category use generic inputs to accept objects that the node passes on to the Lua function that it runs.

<span class="dot" style="background-color:#737373"></span> Grey: Events

>	Events control the way the Flow graph is evaluated.
>
>	A node is triggered when an event gets passed into one of its *input* event slots. The node performs some action in response to that event, and may pass on an event through one or more of its *output* event slots. This in turn triggers any other nodes that have their input event slots connected to those output events. For a thorough discussion, see also ~{ About Flow Evaluation }~.
