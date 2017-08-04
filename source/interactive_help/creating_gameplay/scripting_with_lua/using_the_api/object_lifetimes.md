# Object lifetimes and userdata binding

In order to achieve the best possible balance between programming convenience and runtime efficiency, different kinds of objects in the Stingray Lua API are bound to C++ in different ways. These different binding strategies have practical consequences on the way you must interact with these different kinds of objects in your own scripts. This page outlines the principal binding strategies used in the Stingray API.

## Light userdata binding

This is the most common binding strategy in the Stingray API, used for many core object types such as `Units` and `Actors`. In this case, the object is bound as a light userdata, which means that the Lua side just stores a raw pointer to a corresponding C object, with no metatable and no type information.

Since light user data does not have a metatable, you cannot use the colon syntax to call object functions. For example, this code produces an error:

~~~{lua}
unit:set_name("x")
~~~

Instead, you must explicitly look up the method in the class table `Unit`, and pass the individual unit object as a parameter:

~~~{lua}
stingray.Unit.set_name(unit, x)
~~~

You may be able to improve execution speed by making a local cache of methods that you use more frequently, as follows:

~~~{lua}
local unit_set_name = stingray.Unit.set_name
unit_set_name(unit, x)
~~~

Light userdata objects are never owned by Lua, since they don't have garbage collection. Instead, you must explicitly tell C to create and destroy the objects by calling functions provided in the Lua API. For example, if you spawn a unit by calling `World.spawn_unit()`, you must eventually destroy the unit by calling the matching `World.destroy_unit()` function:

~~~{lua}
unit = stingray.World.spawn_unit(world, "car")
stingray.World.destroy_unit(world, unit)
~~~

The C side provides limited type checking for light userdata objects. If you run into a situation where the C side does not recognize a type mismatch, contact Autodesk Support about adding additional type checks.

## Full userdata binding

Full userdata binding means that all of the memory used by the object is allocated and maintained on the Lua side. Even though C code can access the data maintained in the object, the Lua side is responsible for controlling the lifespan of the object.

In some respects, full userdata is the most convenient binding approach. It allows each type of object to have its own metatable, so that it can be used with the colon calling syntax, and it can have customized operators for arithmetical operations:

~~~{lua}
object:call()
c = a + b
~~~

In addition, there is no need to explicitly call `destroy()` functions when you are finished with an object of this type. When the last reference to an object bound in this way is released, the Lua garbage collector automatically handles releasing the memory.

However, using full userdata is expensive in memory, since they are allocated on the heap. They also may affect CPU usage, since they are subject to the automatic Lua garbage collection system. The more such objects we have, the more time-consuming the garbage collection will be. It is very costly to temporarily allocate full userdata objects just to garbage collect them a few frames later. This is especially true for operations that create a lot of temporary objects, such as mathematical operations on vectors and quaternions.

Therefore, full user data bindings are typically used only for the following cases:

*	Objects that need to be owned by the Lua side, since full userdata binding is the only way to get the object into the garbage collector. For example, the raycast objects created by `PhysicsWorld.make_raycast()` don't need to be explicitly destroyed by the user; they are automatically collected by the garbage collector.

*	Where a very small number of a given object are needed, and those objects typically exist for a longer time. For example, the `World` and `PhysicsWorld` objects. Since only a few instances of these classes ever exist, the cost of using full userdata instead of light userdata is negligable.

You can use the colon calling syntax to call functions in these kinds of objects. For example:

~~~{lua}
ray:cast(from, to, len)
~~~

However, using the same syntax as you use for light userdata objects gives your code a consistent look, which can make it easier to understand and maintain. In addition, using the dot calling syntax means that you do not always need to remember which objects are fully bound and which are lightly bound:

~~~{lua}
stingray.Raycast.cast(ray, from, to, len)
~~~

## Singleton binding

This binding strategy is used for objects that are true singletons, where there only exists one such object in the entire application. Examples include `stingray.Application`, a singleton representing the application itself; and `stingray.Mouse`, a singleton representing the (primary) mouse.

When you call functions of a singleton, you must use the dot calling syntax. However, you do not need to pass any object of that type as a parameter, since the functions always operate on the same singular object.

For example, to check if a mouse button has been pressed, you can just write:

~~~{lua}
if stingray.Mouse.pressed(0) then
    ...
end
~~~

## Temporary binding

A temporary binding is used for objects that need to be owned on the Lua side, but are so short-lived that using full userdata is prohibitively expensive.

The typical example is objects that store transforms and mathematical data, such as vectors, quaternions and matrices. In order for these objects to be C-owned, Lua programmers would have to allocate and release every instance explicitly, which would be tedious and error-prone. But these objects cannot be full user data objects either, since the strain on the garbage collector would be too high.

The best (though by no means perfect) compromise is to consider these types of objects as temporary. Each of these math objects is represented by a light userdata on the Lua side, which points into a buffer of temporary objects on the C side. Each frame, the buffer of temporary objects on the C side is reset so that they can be reused the next frame.

This means that on the Lua side, you can use `stingray.Vector3` objects with good performance, and without worrying about allocating and deallocating the individual objects.

However, you must be aware that the objects are only temporary. You cannot store a `Vector3` in a Lua variable and use it in the next frame. The `Vector3` is only valid during the frame in which it was allocated. If you want to save it and use it later you must store it in a more permanent way.

For example:

*	You can cache a temporary object in a unit's script data:

	~~~{lua}
    stingray.Unit.set_data(player, "position", stingray.Vector3.add(a,b))
    ~~~

*	You can use a "box" object that corresponds to your object type: a full userdata object that persists across frames and is capable of storing the values from a temporary object. For instance, to store a `Vector3` object, you would use the `stingray.Vector3Box` class, a "box" that can hold a `stingray.Vector3` value.

	~~~{lua}
	box = stingray.Vector3Box()
	box:store( stingray.Vector3(10,0,0) )
	pos = box:unbox()
	~~~

Note that every time you call `stingray.Vector3Box()` you allocate a new object for the box on the heap, so you should avoid doing this too often. A good practice is to create all the boxes you will need to use in an `init()` method, and then just use the `store()` function of the `stingray.Vector3Box` class to update the contents of the box.

There are corresponding classes for quaternions and matrices: `stingray.QuaternionBox` and `stingray.Matrix4x4Box`.
