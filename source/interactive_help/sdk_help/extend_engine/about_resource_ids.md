# About resource names and IDs

Many different kinds of things in your project can be identified by string names. For example: resources and assets have path names within the project like "content/models/floor"; they also have type names like "unit" or "material"; level objects like units and entities have names that you can set in the editor; materials have slot names; flow nodes have named input and output ports.

This is convenient to keep things easily readable and understandable by humans. However, it's inefficient to store and use these strings in the engine at runtime. To maximize performance, and to make sure that each identifier occupies a predictable and consistent amount of memory, the engine converts most strings to a *hashed* value internally.

For example, a unit that you refer to as `content/models/floor` is known inside the engine as `0xc9f385895440595d`.

When you use the C plug-in and scripting APIs directly from an engine plug-in, you typically need to identify your resources and level objects by providing hashed ID values instead of strings. You can construct these hash values using classes provided in `stingray_plugin_foundation/id_string.h`:

-	Use the `IdString32` class if the function you want to call requires an `unsigned` value. The names of these parameters often have the `_id32` suffix (but not always!).

-	Use the `IdString64` class if the function you want to call requires a `uint_64` value. The names of these parameters often have the `_id64` suffix (but not always!).

These classes work the same way, the only difference is the total addressable space -- that is, the number of different strings they can represent without collisions.

>	**NOTE:** When you call functions in the Lua script API, you can generally pass in strings *or* IdString32 / IdString64 Lua objects. The Lua API implementation converts these input strings automatically into hashed values of the appropriate size before calling out to the C API.

## One-way transformation

Converting a string to a hash is a one-way transformation. You can get from a string to a hash, but you can't get back to the original string if all you have is the hash. If you call an engine API function that returns a hashed ID back to you, you can

## Example

Here's the definition of the `UnitCApi::set_material()` function from `c_api_unit.h`, which you can call to change the material resource that is assigned to a material slot name for a unit:

~~~c
uint64_t        (*set_material) (UnitRef, unsigned slot_name_id32, uint64_t material_resource_name_id64, const char *optional_debug_material_resource_name, unsigned debug_suppress_slot_assignment_warning);
~~~

-	The `slot_name_id32` parameter, which specifies the name of the material slot you want to change, is an `unsigned` value. We'll use an `IdString32` to construct it.

-	The `material_resource_name_id64` parameter, which specifies the name of the material resource you want to assign to that slot, is a `uint64_t` value. We'll use an `IdString64` to construct it.

-	This function, like some others you'll see in the API, also accepts a `const char*`! But this value is *only* used in case an error occurs, so that the function can log a meaningful message. (Since the hash conversion is one-way only, the function can't get back the original name that the ID was created from.) This string isn't really used to identify the material slot or the resource in the engine, and it's not saved after the function completes. It's just there as an optional convenience to make debugging easier.

If all you have in your plug-in is the original string IDs you want to refer to, you can call this function as follows:

~~~c
#include <plugin_foundation/id_string.h>
using namespace stingray_plugin_foundation;

...

	_c_api->Unit->set_material(unit_ref, IdString32("material_slot_name").id(), IdString32("content/materials/orange").id(), "orange", 0);
~~~

Generally we recommend that your plug-in follow the same principle as the engine: whenever you need to store string identifiers, construct `IdString32` or `IdString64` objects instead of saving `const char*` or string variables.
