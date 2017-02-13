# The Stingray Type System

Stingray contains an internal data typing system that is based around `.type` files. These files, which are stored in SJSON in the project content, describe the properties and relationships between complex data types. The editing tools and the data compiler scan the project for type files, and use them to reason about the SJSON data file formats that make up the project content. This information can be used to customize user interfaces, determine which files are affected by a rename, and validate property values.

At the lowest level, Stingray supports a few pre-defined built-in data types that are based loosely on the values supported in the JSON file format. These built-in types are then used to describe more complex *compound* types such as colors, cameras and lights. These in turn eventually can be built into type descriptions for richer file formats such as units or levels.

>	**NOTE: Under Active Development!** Expect things to change as this system matures.

## Type file usage in Stingray

Type files are already used in a few places in Stingray:

-	The `.component` files that the entity system uses to represent custom types of data components are based on the type system. For details, see [Create a custom component](http://help.autodesk.com/view/Stingray/ENU/?guid=__stingray_help_using_entities_create_custom_component_html).

-	Some plug-ins use type files as a way to define their own data types, and the way those data types get edited in the Stingray editor. See ~{ Editing custom asset types }~ for a look at how we use `.type` files to describe how to edit `.scatter_brush`, `.blend_shape` and `.capture_settings` in the editor UI.

-	See also ~{ Create a new importer }~ to see how you can customize a new generic import dialog using a `.type` file.

You don't have to use the `.type` file mechanism in your own plug-in, but it can make things easier if your use case is similar to the ones above.

## Built-in types

The built-in types are basically a superset of the types supported in the JSON file format, with a few notable differences in order to simplify collaborative editing. Built-in types are always prefixed by the `:` character, to differentiate them from any user-defined types that you might create in your plug-in.

* `:array` - A simple **immutable** collection of values, used to store raw buffers such as animation or geometry data.
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

The built-in types are the only parts of the type system that are hard-coded. In order to introduce an additional built-in type, you would need to modify the editing tools or the data compiler, but you should rarely need to do so. You can customize most of the built-in types using additional properties to specify things like valid ranges, default values, etc. Refer to the ~{ Built-in types reference }~ for the full list of supported type properties for each built-in type.

## Type declarations

In its bare form, a type declaration is an SJSON object with a `type` key that refers to another known type. The object can optionally contain additional type-specific properties that customize the type, like `min` and `max` in this example:

~~~{sjson}
{
    type = ":number"
    min = 0
    max = 1
}
~~~

Since it is quite common for type declarations to not require customizations, you can use the name of the type as shorthand for an uncustomized type, without needing to use the `type = ` key. The following two type declarations are equivalent:

~~~{sjson}
{
	type = ":number"
}
~~~

~~~{sjson}
":number"
~~~

## Type file format

Let's look at a simple example - a type file that declares a 3D vector type that others can use.

~~~{sjson}
// core/types/vector3.type
export = {
    type = ":struct"
    fields = {
        x = ":number"
        y = ":number"
        z = ":number"
    }
}
~~~

Here, the file `core/types/vector3.type` exports a type declaration that describes a simple struct made up of floating point values.

Under the hood, the entire object that contains the `type = ":struct"` property gets dispatched to the `:struct` type customizer, which emits a new type definition based on the supplied properties. In this case, the `:struct` type customizer is hard-coded to look for a property named `fields`, and expects it to be a dictionary that maps field names to types. It sees that our `:struct` should have `x`, `y` and `z` fields, all of which are uncustomized `:number` values. (For a list of all properties supported by the `:struct` type customizer, refer to the ~{ Built-in types reference }~).

The `:struct` type customizer emits a new type that represents our vector. We make this type definition available for use by other type files by assigning it to the `export` key in the `.type` file. Other `.type` files can now refer to our vector type by specifying the resource name of our `.type` file in their own type declarations. For example:

~~~{sjson}
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
~~~

Note that user-defined types can be further customized by overriding their properties using a nested dictionary. In the above type example, the `position` field uses an instance of our custom `core/types/vector3` type without customization. But, for the `scale` field, it overrides the `default` property of the `x`, `y` and `z` fields.

## Private types

A type file can contain multiple type declarations. Only one of the types -- the *exported* type -- is made visible to the outside. However, the other types that are defined in the file can be freely referred to within that file. This allows you to build up very complex data types within a single `.type` file, and to re-use more atomic data types multiple times within the exported type.

In this scenario, the private type declarations need to be put below the root-level `types` key in the type file. You can then refer to these types from elsewhere in the type file by prefixing the type key with a hash character:

~~~{sjson}
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
~~~

Here we declare type that we'll use to represent a direction, whose components are kept within the `[-1, 1]` range. The direction type refers to the private `#component` type for each of its `x`, `y` and `z` fields. The `export` property at the root level references the `#direction` type, which exposes it as `core/types/direction` (the name of our type file) to the rest of the world. Other type files can now refer to the direction type directly, but they *cannot* refer to the component type directly. They may *use* the component type as a constituent that makes up a direction, but they cannot re-use the private type on its own.

## Using type files to describe file formats

The primary use for type files is to describe the structure and semantics of other SJSON-based file formats. A type file can be associated with a particular resource type, which tells the editing tools how to interpret the information inside these files. To associate a type file with a resource type, set the `extension` property in the type file to the name of the resource type your file describes (that is, the extension used by those resource files):

~~~{sjson}
// core/types/unit.type
extension = "unit"
export = {
    type = ":struct"
    fields = {
        ...
    }
}
~~~

## Type metadata

All types have an optional `metadata` block that you can use to store data about the type itself. This is read by the data compiler and the Stingray editor in some circumstances, and might affect how they treat the type. Typically you won't be using the `metadata` block unless you've made custom additions to the data compiler or the editor code itself.

## Editor metadata

In addition to the type `metadata` block, types can set editor-only metadata in an `editor` block. This is read by the Stingray editor, and controls the way the type is presented inside property editors, etc. For example, here we present a `:number` property using the built-in `adskPropertySlider` control. The editor metadata can contain `control`-specific properties such as a `step` setting for the slider.

~~~{sjson}
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
~~~

In the future it will be possible to add game-specific widgets to your project, but for now we only support a limited set of built-in widgets. For a comprehensive list of controls and their available properties, see the ~{ Built-in metadata properties }~.

Note that you can customize the `editor` metadata properties, just like any other property on a type. Therefore, it is possible to specify sensible defaults in a shared type file and then override its label and description as needed:

~~~{sjson}
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
~~~

## Type file properties reference

This section lists all the supported top-level properties of a type file.

Property    |Type                    |Default|Description
------------|------------------------|-------|-----------
`export`    |`Type`                  |`null` |The type that should be associated with our type resource name. This value can be an inline type description, or a reference to a type that is defined in the `types` block.
`extension` |`String`                |`null` |Optional file extension to associate with the exported type.
`references`|`Object<String, String>`|`{}`   |(Deprecated) Optional map of implicitly referenced file extensions by name. When our type is referenced, these files will be too if they exist.
`types`     |`Object<String, Type>`  |`{}`   |Optional map of internal type keys to type declarations. One of these could be exported by using the `#`-prefixed key for the `export` property.

### Example

~~~{sjson}
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
~~~

---
Related topics:
-	~{ Built-in types reference }~
-	~{ Built-in metadata properties }~
---
