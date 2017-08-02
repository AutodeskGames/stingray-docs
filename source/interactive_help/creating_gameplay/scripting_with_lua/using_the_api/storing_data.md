# Storing data in Lua objects

Several different kinds of objects in the Stingray Lua API offer you a generic interface for storing and retrieving data values.

Using this system has some advantages over storing the data in your own Lua variables:

*	The data remains tied to the lifespan of the particular object. When you dispose of the Lua object, the memory is freed up automatically.

*	The memory is allocated on the C side instead of the Lua side, which means it does not need to be handled by Lua garbage collection.

*	The data is packaged with the object, and is available anywhere you can access that object. For instance, the data is available in all your Lua threads, so you can safely store data in your main Lua thread and access it in worker threads. Note, however, that references to Lua tables and functions may only be used within the same Lua context in which they were stored.

Every type of object that offers this data storage mechanism has the following three functions:

~~~{lua}
set_data()
get_data()
has_data()
~~~

The stored data may be:

*	a Lua boolean,
*	a Lua number,
*	a Lua string,
*	a reference to a Lua table or Lua function, or
*	any C-side object. Note that storing a temporary object like a `Vector3` causes the value to be stored permanently; accessing it in future frames is safe.

Each piece of data is indexed by a series of one or more keys, each of which may be either a string or an integer. When you call the `set_data()` function to store a piece of data, you pass the keys as arguments along with the data value you want to store. You can then retrieve the data or check if the data exists by passing the same series of keys to the `get_data()` or `has_data()` functions.

For example, in the following code the value `1` is indexed by a series of two keys, `score` and `headshots`:

~~~{lua}
stingray.Unit.set_data(player, "score", "headshots", 1)
...
local shots = stingray.Unit.get_data(player, "score", "headshots")
~~~
