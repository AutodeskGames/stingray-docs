# Built-In Types Reference
This reference details the built-in types and the set of supported properties that can be used to customize them. For an overview of type declarations and the type file format, refer to the ~{ Stingray Type System }~ document.

* Types with the `equatable` trait should be used when you need to determine that two values are equivalent. They are ideal for use as dictionary keys, testing set membership, etc.
* Types with the `mutable` trait can be mutated in-place. Everything holding a reference to a mutable data structure will see the change after it is applied.
* Types with the `simple` trait describe raw JSON values in their uncustomized form, but will lose the `simple` type trait if customized.
* Types with the `virtual` trait will be refined into a non-virtual type at runtime based on the data.

### WARNING: Under Active Development
The dynamic type system is still under active development, and this reference might contain inaccuracies. Expect things to change. Properties marked `Speculative` have not been implemented yet, but currently seems like a good idea to us. Properties marked `Legacy` should be considered deprecated, and will likely be removed in a future revision.

--------------------------------------------------------------------------------

## `:array` (simple)
An immutable collection of values. Arrays can be used to store raw buffers such as animation or geometry data. If you need a mutable collection you should prefer a `:dict` or `:struct` in order to support collaborative editing and merging. If you have a collection of `equatable` values where order is not important, but you need to be able to add and remove entries, consider using a `:set`.

Property |Type   |Default |Description
---------|-------|--------|-----------
`value`  |`Type` |`:value`|The type of the values stored in the array.

### Example
```
{
    type = ":array"
    value = ":number"
}
```
--------------------------------------------------------------------------------

## `:bool` (equatable, simple)
A simple boolean value. Can be either `true` or `false`.

Property |Type     |Default|Description
---------|---------|-------|-----------
`default`|`Boolean`|`false`|The default value of the property when initialized or reset.

--------------------------------------------------------------------------------

## `:dict` (mutable, simple)
A mutable associative dictionary mapping keys to values.

Property |Type     |Default  |Description
---------|---------|---------|-----------
`key`    |`Type`   |`:string`|The type of the keys stored in the dictionary.
`value`  |`Type`   |`:value` |The type of the values stored in the dictionary.

### Example
```
{
    type = ":dict"
    key = ":guid"
    value = ":string"
}
```
--------------------------------------------------------------------------------

## `:enum` (equatable)
A value that must be one of a predefined set of valid values.

Property |Type           |Default  |Description
---------|---------------|---------|-----------
`value`  |`Type`         |`:string`|The type of value that the enum can represent. Must have the `equatable` trait.
`cases`  |`Array<TValue>`|`[]`     |An array of all possible values for the enum type. Cannot be empty.
`default`|`TValue`       |`null`   |The default value of the property when initialized or reset. Must be a value from the `cases` array.

### Supported editor metadata properties
The following `editor` metadata properties affect how the `:enum` type behaves inside editors.

Property     |Type                    |Default|Description
-------------|------------------------|-------|-----------
`case_labels`|`Object<TValue, String>`|`{}`   |A mapping of values to labels overriding case labels in dropdowns, etc.

### Example
```
{
    type = ":enum"
    value = ":string"
    cases = [
        "AmbientLight"
        "OmniLight"
        "SpotLight"
    ]
    default = "OmniLight"
    editor = {
        case_labels = {
            "OmniLight" = "Omnidirectional Light"
        }
    }
}
```
--------------------------------------------------------------------------------

## `:guid` (equatable)
A universally unique identifier. Will be initialized to a new unique id.

#### No customizable properties.

--------------------------------------------------------------------------------

## `:interface` (virtual)
Used whenever a collection or property should refer to a type that can only be decided at run-time. For example, you might have a collection of shapes, but different kinds of shape can have additional properties based on its type. The shapes collection could use an `:interface` for its value type that describes the common properties that we require for all shapes. The interface also specifies a refinement strategy for how the concrete type of a value can be decided upon.

Property  |Type         |Default |Description
----------|-------------|--------|-----------
`refine`  |`TypeRefiner`|`null`  |Strategy to use when deciding the concrete type of the value at run-time.
`protocol`|`Type`       |`:value`|(Speculative) A Type declaration to check conformance against.

### Type refiners
We currently only support one type refiner.

#### `:key`
Refines the type by looking up a type from the value of a key inside an Object.

Property|Type    |Default |Description
--------|--------|--------|-----------
`key`   |`String`|`"type"`|The name of a property that is assumed to exist on Objects that are assignable to our interface type.

### Example
Here is an interface declaring a Flow Node type below our core folder. In order to decide the concrete type at run-time, use the value of the `"type"` property of the Object, which will typically be a type resource name or a short type alias string.
```
// core/types/flow_node.type
export = {
    type = ":interface"
    refine = {
        type = ":key"
        key = "type"
    }
}
```
Let's look at a game-specific `:struct` implementing the interface. The `implements` declaration tells the type system to resolve the short type alias `"sword_trail"` to our concrete type, `game/types/sword_trail_flow_node` in the context of the virtual type `core/types/flow_node`. If we do not want to use a short type alias, we can simply state `"core/types/flow_node" = true` in our `implements` declaration instead.
```
// game/types/sword_trail_flow_node.type
export = {
    type = ":struct"
    implements = {
        "core/types/flow_node" = "sword_trail"
    }
    fields = {
        ...
    }
}
```
And here's an example usage of the interface, a type file describing the `.flow` file format. Our set of nodes can contain any struct that declares it implements the `core/types/flow_node` interface.
```
// core/types/flow.type
extension = "flow"
export = {
    type = ":struct"
    fields = {
        nodes = {
            type = ":dict"
            key = ":guid"
            value = "core/types/flow_node"
        }
    }
}
```
Based on these type declarations we are now able to determine that the first element in our collection of nodes inside this `.flow` file is of type `game/types/sword_trail_flow_node`, as we know that `nodes` is a `:dict` of values of type `core/types/flow_node`, of which the specified entry refines into the concrete type `game/types/sword_trail_flow_node` because the `type` of the Object is `"sword_trail"`.
```
// game/units/guard/guard.flow
nodes = {
    "2c91b841-a48f-49cb-8a48-9e5f2d5550e1" = {
        type = "sword_trail"
        variable_values = {
            parent_node = "right_hand"
            axis = "z"
            sword_length = 1.1
            ...
        }
    }
    ...
}
```
--------------------------------------------------------------------------------

## `:number` (equatable, simple)
A numeric value. Numbers are always represented as double-precision floating point values in JSON files, but can be customized to represent array indices, etc.

Property |Type    |Default    |Description
---------|--------|-----------|-----------
`default`|`Number`|`0`        |The default value of the property when initialized or reset.
`max`    |`Number`|`Infinity` |The maximum allowable value of the property.
`min`    |`Number`|`-Infinity`|The minimum allowable value of the property.

### Supported editor metadata properties
The following `editor` metadata properties affect how the `:number` type behaves inside editors.

Property|Type    |Default |Description
--------|--------|--------|-----------
`step`  |`Number`|`null`  |Step value to use when incrementing / decrementing the value.

### Example
```
{
    type = ":number"
    min = 0
    max = 1
    default = 0.5
    editor = {
        step = 0.1
    }
}
```
--------------------------------------------------------------------------------

## `:resource`
A reference to another file in the project. References are represented as a dictionary with two special keys, and tells the data compiler that there is a relationship between this file and the referenced file. The required keys are `$resource_name` and `$resource_type`. Both are expected to be string values. Resource names are project-relative forward-slash-separated file paths without the file extension, such as `"core/units/camera"`. Resource types are just file extensions without the leading dot. So a reference to the default camera unit looks like this in JSON files:
```
{
    "$resource_name" = "core/units/camera"
    "$resource_type" = "unit"
}
```
Some kinds of references might support multiple resource types. To cope with this, the `extension` property can specify an array of file extensions or a single extension as a string.

Property   |Type                         |Default|Description
-----------|-----------------------------|-------|-----------
`default`  |`ResourceReference`          |`null` |The default value of the property when initialized or reset.
`extension`|`String` or `Array<String>`  |`[]`   |A single file extension or a list of allowed extensions.

### Example
```
{
    type = ":resource"
    extension = ["fbx", "bsi"]
}
```
--------------------------------------------------------------------------------

## `:set` (mutable)
A mutable unordered collection of simple equatable values. Sets are represented as regular JavaScript arrays in JSON files.

Property |Type    |Default |Description
---------|--------|--------|-----------
`value`  |`Type`  |`:value`|The type of the values stored in the set. Must have the `equatable` trait.

### Example
```
{
    type = ":set"
    value = ":string"
}
```
--------------------------------------------------------------------------------

## `:string` (equatable, simple)
An immutable UTF-8 encoded string.

Property |Type    |Default|Description
---------|--------|-------|-----------
`default`|`String`|`""`   |The default value of the property when initialized or reset.

--------------------------------------------------------------------------------

## `:struct` (mutable)
A complex type that can contain typed fields, user-interface metadata and sub-element declarations. Structs are represented as regular JavaScript objects in JSON files. The default state of the struct is determined by the defaults of its fields, but can be overridden using nested property-override declarations (detailed elsewhere). A struct can specify a set of interfaces that it confirms to, allowing us to have collections that contain several types of struct. For more information about interfaces, refer to the `:interface` type reference entry.

Property    |Type                             |Default|Description
------------|---------------------------------|-------|-----------
`fields`    |`Object<String, Type>`           |`{}`   |A mapping of field names to their respective types.
`implements`|`Object<Type, true or String>`   |`{}`   |A mapping of `:interface` types to their short type name, or `true` if not using an alias.

### Example
```
{
    type = ":struct"
    fields = {
        nodes = {
            type = ":dict"
            key = ":string"
            value = "#node"
        }
        geometries = {
            type = ":dict"
            key = ":string"
            value = "#geometry"
        }
    }
}
```
--------------------------------------------------------------------------------

## `:switch` (virtual)
Used when data formats can vary in ways that can only be decided by examining the data itself. Can be configured to switch on field values, their types, or the type of the JSON value itself. In most cases you should use the `:interface` type instead, as it allows new implementers to be added without modifying the `:switch` declaration. However, the `:switch` type can still be useful in some scenarios.

Property |Type                  |Default|Description
---------|----------------------|-------|-----------
`on`     |`String`              |`null` |What the switch will examine. Either `":type"` or `":value"`.
`of`     |`String`              |`null` |Optional key to extract the examined value from if the value is a dictionary.
`cases`  |`Object<String, Type>`|`{}`   |A mapping of keys to types. For supported `":type"` keys, see below.
`default`|`String`              |`null` |A key from the `cases` dictionary whose type we will resolve to if there is no match.

### Supported `:type` keys
When switching `on` `":type"`, JSON values will resolve to names of built-in simple types, or `":null"` if the value cannot be determined.

JSON value|Resulting case key
----------|-----------------------
`null`    |`":null"`
`false`   |`":bool"`
`42`      |`":number"`
`"diane"` |`":string"`
`[1, 2]`  |`":array"`
`{"a": 1}`|`":dict"`

### Example: switching on `:type`
Due to an oversight, we have a data structure that contains a field that can either be an array or a dictionary. In order to handle both variants, we declare our field as a `:switch` type that will switch on the `":type"` of the value.
```
{
    type = ":switch"
    on = ":type"
    default = ":dict"
    cases = {
        ":array" = {
            type = ":array"
            value = {
                type = ":resource"
                extension = "material"
            }
        }
        ":dict" = {
            type = ":dict"
            key = ":string"
            value = {
                type = ":resource"
                extension = "material"
            }
        }
    }
}
```
### Example: switching on `:value`
In this example our data can contain two kinds of lights, `"omni"` or `"spot"`, with differing properties. Assuming the JSON value we're looking at is a dictionary, we examine the value associated with the `"light_type"` key. If it is `"spot"`, we treat the dictionary as a `:struct` with `range` and `angle` fields. If the `"light_type"` is `"omni"` we treat it as having just a `radius` field instead. Since the `default` case is `"omni"`, new instances of our type will be omni lights. We will also assume it is an omni light if we're unable to access or match the `"light_type"` key to any of the keys in the `cases` dictionary.

Note that you would probably not want to use a `:switch` in this particular situation, as it limits your light type options to the cases specified inside the type declaration. Instead, you should consider creating an `:interface` type that other types of light can choose to implement.
```
{
    type = ":switch"
    on = ":value"
    of = "light_type"
    default = "omni"
    cases = {
        "omni" = {
            type = ":struct"
            fields = {
                radius = ":number"
                ...
            }
        }
        "spot" = {
            type = ":struct"
            fields = {
                range = ":number"
                angle = ":number"
                ...
            }
        }
    }
}
```
--------------------------------------------------------------------------------

## `:value` (simple, virtual)
A variant data type that can represent any simple type (i.e. any JSON value).

#### No customizable properties.
