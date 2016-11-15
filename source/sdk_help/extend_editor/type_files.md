# Stingray Type System
Type files describe properties and relationships between complex data types. The tools and data compiler scan the project for type files, and use them to reason about the simple JSON data file formats that represent project content. This information is used to customize user-interfaces, determine which files are affected by a rename, and validate property values.

At the lowest level, we support a few pre-defined data types based loosely on the values supported in the JSON file format. These built-in types are then used to describe more complex types such as colors, cameras and lights, which eventually compose into type descriptions for rich file formats such as units or levels.

### WARNING: Under Active Development
The dynamic type system is still under active development, and this document might contain inaccuracies. Expect things to change. Properties marked `Legacy` should be considered deprecated, and will likely be removed in a future revision.

## Built-in types
The built-in types are basically a superset of the types supported in the JSON file format, with a few notable differences in order to simplify collaborative editing. They are all prefixed by the `:` character to differentiate them from user-defined types.

The built-in types are the only parts of the type system that are hard-coded. In order to introduce an additional built-in type, you would need to modify the tools or the data compiler, but you should rarely need to do so. Most of the built-in types can be customized using additional type properties to specify valid ranges, etc. Refer to the ~{ Built-In Types Reference }~ for a list of supported type properties for each built-in type.

* `:array` - A simple **immutable** collection of values used to store raw buffers such as animation or geometry data.
* `:bool` - A simple boolean value, either `true` or `false`.
* `:dict` - A simple mutable dictionary mapping keys to values.
* `:enum` - A value that must be one of a predefined set of valid values.
* `:guid` - A universally unique identifier. Represented as a string in JSON files.
* `:interface` - A virtual data type that specifies a protocol for concrete types to implement.
* `:number` - A simple numeric value. Represented as a double-precision floating-point value in JSON files.
* `:resource` - A reference to another file in the project.
* `:set` - A mutable unordered collection of simple equatable values.
* `:string` - A simple immutable UTF-8 encoded string.
* `:struct` - A complex mutable type that can contain typed fields and implement interfaces.
* `:switch` - A virtual data type that will resolve to one of the specified types after examining the data itself.
* `:value` - A virtual data type that can represent any uncustomized simple type (i.e. any json data basically).

## Type declarations
In its bare form, a type declaration is a JSON object with a `type` key referencing another known type. The object can optionally contain additional type-specific properties that customize the type:
```
{
    type = ":number"
    min = 0
    max = 1
}
```
Since it is quite common for type declarations to not require customizations, you can use the name of the type as shorthand for an uncustomized type. The following two type declarations are equivalent:
```
{ type = ":number" }
```
```
":number"
```


## Type file format
Let's look at a simple example - a type file declaring a 3D vector type that others can use.
```
// core/types/vector3.type
export = {
    type = ":struct"
    fields = {
        x = ":number"
        y = ":number"
        z = ":number"
    }
}
```
Here, the file `core/types/vector3.type` exports a type declaration describing a simple struct of floating point values. Internally the entire object containing the `type = ":struct"` property gets dispatched to the `:struct` type customizer, which emits a new type definition based on the supplied properties. In this case, the `:struct` type customizer is hard-coded to look for a property named `fields`, and expect it to be a dictionary mapping field names to types. It sees that our `:struct` should have `x`, `y` and `z` fields that are all uncustomized `:numbers`. For a list of all properties supported by the `:struct` type customizer, refer to the ~{ Built-In Types Reference }~.

The `:struct` type customizer emits a new type that represents our vector. We make this type definition available for use by other type files by assigning it to the `export` key. Other type files can now use our vector type by specifying the resource name of our type file in their own type declarations:
```
// core/types/pose.type
export = {
    type = ":struct"
    fields = {
        position = "core/types/vector3"
        rotation = "core/types/quaternion"
        scale = {
            type = "core/types/vector3"
            fields = {
                x = { default = 1 }
                y = { default = 1 }
                z = { default = 1 }
            }
        }
    }
}
```
Note that user-defined types can be further customized by overriding its properties using a nested dictionary. Here we customize the `core/types/vector3` type for our `scale` field by overriding the `default` property each of its `x`, `y` and `z` fields.

## Using type files to describe file formats
The primary use for type files is to describe the structure and semantics of other JSON-based file formats. A type file can be associated with a particular resource type, letting the tools know how to interpret the information inside these files. To associate a type file with a resource type, simply set the `extension` property to the file extension of the resource type:
```
// core/types/unit.type
extension = "unit"
export = {
    type = ":struct"
    fields = {
        ...
    }
}
```

## Type file usage in Stingray

See ~{ Custom Asset Editing }~ to see how we use `.type` files to describe how to edit `.scatter_brush`, `.blend_shape` and `.capture_settings`. See also ~{ Create a new importer }~ to see how the new Generic Import dialog can be customized using .type file. See `editor\plugins\font_importer\font-import-options.type` and `editor\plugins\asset_browser\types\scne_import_options.type` for these usages.

The Entity system uses `.component` files having the same syntax as `.type` to describe how components data is structured.

## Private types
In order to represent complex file formats, a type file can contain multiple type declarations. Only one of the types - the exported type - will be made visible to the outside. In this scenario the private type declarations need to be put below the root-level `types` key in the type file. These types can be referenced inside the type file itself by prefixing the type key with a hash character:
```
// core/types/direction.type
export = "#direction"
types = {
    direction = {
        type = ":struct"
        fields = {
            x = "#component"
            y = "#component"
            z = "#component"
        }
    }
    component = {
        type = ":number"
        min = -1
        max = 1
    }
}
```
Here we declare another type representing a direction, whose components are kept within the [-1, 1] range. The direction type references the private `#component` type for each of its `x`, `y` and `z` fields, and the `export` property at root level references the `#direction` type, exposing it as `core/types/direction` (the name of our type file) to the rest of the world.

## Type metadata
All types have an optional `metadata` block for storing data about the type itself. This is read by the data compiler or the editor in some circumstances, and might affect how they treat the type. Typically you won't be using the `metadata` block unless you've made custom additions to the data compiler or the editor code itself.

## Editor metadata
In addition to the type `metadata` block, types can optionally specify editor-only metadata below the `editor` block. This is read by the editor, and can be used to control how the type is presented inside property editors, etc. For example, here we present a `:number` property using the built-in `adskPropertySlider` control. The editor metadata can contain `control`-specific properties such as a `step` setting for the slider.
```
{
    type = ":number"
    min = 0
    max = 100
    default = 50
    editor = {
        label = "Health"
        description = "Initial health of the entity"
        priority = 140
        control = "adskPropertySlider"
        step = 10
    }
}
```
In the future it will be possible to add game-specific widgets to your project, but for now we only support a limited set of built-in widgets. For a comprehensive list of controls and their available properties, refer to the ~{ Built-In Properties Reference }~.

Note that `editor` metadata properties can be customized, just like any other property on a type. Thus, it is possible to specify sensible defaults in a shared type file and then override its label and description as needed:
```
{
    type = ":struct"
    fields = {
        bloom_tint = {
            type = "core/types/color"
            editor = {
                label = "Tint"
                description = "Bloom tint color"
            }
        }
    }
}
```

## Type file properties reference
This reference lists all the supported top-level properties of a type file.

Property    |Type                    |Default|Description
------------|------------------------|-------|-----------
`export`    |`Type`                  |`null` |The type that should be associated with our type resource name. Can be an actual type or a reference to a type from the `types` dictionary.
`extension` |`String`                |`null` |Optional file extension to associate with the exported type.
`references`|`Object<String, String>`|`{}`   |(Legacy) Optional map of implicitly referenced file extensions by name. When our type is referenced, these files will be too if they exist.
`types`     |`Object<String, Type>`  |`{}`   |Optional map of internal type keys to type declarations. One of these could be exported by using the `#`-prefixed key for the `export` property.

### Example
```
// core/types/unit.type
{
    export = "#unit"
    extension = "unit"
    references = {
        anim = "unit_anim"
        flow = "flow"
        mesh = ["fbx", "bsi"]
        physics = "physics"
    }
    types = {
        unit = {
            type = ":struct"
            fields = {
                lights = {
                    type = ":dict"
                    key = ":string"
                    value = "#light"
                }
                ...
            }
        }
        light = {
            type = ":struct"
            fields = {
                color = "core/types/color"
                ...
            }
        }
    }
}
```

## Further reading
* ~{ Built-In Types Reference }~
* ~{ Built-In Properties Reference }~

---
Tags:
-	plugin
-	plug-in
---

