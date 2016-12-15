# Create a custom component

The goal of the entity system is to allow you to easily create your own kinds of components, expose them to the Stingray Editor for level designers to work with, and handle them in your project's gameplay code at runtime.

In this release, you can design your own components that handle arbitrary data values.

## Overview: to create and use a custom component

1.	You define your new component by creating a new *.component* resource in your project's source folder. See the sections below for details.

1.	Restart the Stingray Editor and load your project. (The list of available components in the project is not yet refreshed automatically.)

1.	Assign your new component type to an entity the same way you would assign any built-in component. See ~{ Assign components to an entity }~.

1.	Set up the component data values for that entity in the ~{ Property Editor }~.

1.	Either place the entity in a level or spawn it dynamically in your Lua gameplay code.

1.	In your Lua gameplay code, you can use the `stingray.DataComponent` manager to access your entity's component and to read or write its values. See ~{ Interact with entities during gameplay }~.

## Component examples

The best way to understand how to create your own custom *.component* resource is to start from a working example.

Each of the global lighting and post-effects offered by the shading environment is wrapped in a data component. You can use these examples as models for your own types of data components, to see examples of the different kinds of fields that the data component and the editor can handle.

See the *.component* files under `core/stingray_renderer/shading_environment_components`.

## The *.component* structure

The following block shows a sample *.component* resource. This example defines a data component that stores two numeric data values.

~~~{sjson}
export = "#component"
types = {
    component = {
        type = ":struct"
        implements = {
            "core/types/component" = true
        }
        fields = {
           str_data = {
                type = ":number"
                default = 18
                min = 1
                max = 200
                editor = {
                    label = "Strength"
                    step = 1
                }
            }
           tough_data = {
                type = ":number"
                default = 10
                min = 1
                max = 200
                editor = {
                    label = "Toughness"
                    step = 1
                }
            }
        }
        editor = {
            category = "Custom component"
            priority = 1200
            icon = "signal"
        }
        metadata = {
            name = "My Game Combat Stats"
            component = "data"
            tags = ["custom_combat_stats"]
        }
    }
}
~~~

Most of this structure should remain the same in your own component. The following sections describe the elements that you will want to customize.

`fields`

>   This section defines the data that your component will handle.
>
>   Each field associates a name (e.g. `str_data` in the example above) with a description of the data stored in that field. This description includes the type of data that is stored in the field (i.e. strings, numbers, booleans, resource names, colors, etc.), default values, accepted values, and metadata about the field that instructs the Stingray Editor how to display it in the ~{ Property Editor }~ panel.
>
>   These data descriptions (and the *.component* resource type itself) rely on an internal data typing system. In future releases, as the entity and type systems achieve greater stability and more general usefulness, we do intend to provide full details about how this type system works, what all of the built-in types are, and how you can even extend them to create your own custom data types.
>
>   For now, if you want to experiment with creating your own components, it's best to stick with the working examples provided by the built-in shading environment components. By looking at the kinds of values that you can set for each shading environment component in the **Property Editor**, and looking at how those fields are set up in the corresponding *.component* resource, you should be able to figure out how to make your custom component handle the same type of data.

`editor`

>   This section provides metadata that configures the way your component appears in the ~{ Property Editor }~ panel of the Stingray Editor.
>
>   `category`
>
>   >	This is a display name for your component. It is used to identify your component in the list of available components that can be added to an entity and in the list of entity components in the tree view of the **Property Editor**. It is also used to group together the data fields managed by this component under the tree view.
>
>   `priority`
>
>   >	Controls the placement of this component's settings in the **Property Editor**, relative to other components assigned to the same entity. Components with the lowest priority values are listed toward the top of the panel.
>
>   `icon`
>
>   >	Customizes the icon that appears next to this component's category name in the tree view of the **Property Editor**. This uses names from the web application icons listed on this page: <http://fontawesome.io/icons/>.

`metadata`

>   This section provides metadata about your component.
>
>   `name`
>
>   >	The editor uses this name in the UI to identify your custom component type. Make sure this is unique among all kinds of components, otherwise users will have no way to distinguish which is which. A good way of avoiding collisions with other component names is to include your project name or plug-in name in your component name.
>
>   `component`
>
>   >	This value determines which built-in component manager system will be used to handle your custom component. In this release, always choose `data` here in order to make your custom component handled as a data component.
>
>   `tags`
>
>   >	A list of tags that can be used to identify or retrieve instances of your component type. This is currently only used internally to identify shading environment components. In your custom component, just make sure to replace the `shading_environment` tag with one that is more descriptive of your component.
