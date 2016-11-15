# Built-In Properties Reference
Stingray Property Editor supports a wide range of property types. This reference details the built-in Property Editor widgets and the set of supported properties that can be used to customize them.

There are 2 major ways of specifying properties: using the editor block in a `.type` file (see ~{Stingray Type System}~) or using the pure javascript compact notation (see {Property Editor Usage}).

--------------------------------------------------------------------------------

## Common editor metadata properties
These properties are available for all widget types.

Property       |Type     |Default   |Description
---------------|---------|----------|-----------
`order`     |`Number` |`Infinity`|Controls the ordering of properties in ascending order.
`control` or `displayType`     |`String` |`null`    |Specify a widget to use when editing the property. See below for additional widget specific properties.
`label`        |`String` |`null`    |Set a custom label for the property.
`suffix`       |`String` |`null`    |Set a suffix to be displayed after the field. Only shown for some widget types.
`description`  |`String` |`null`    |Set a description for the property. Shown in tooltips.
`isReadOnly`     |`Boolean`|`false`    |If `true`, prevents the user from editing the property. 
`isMultiEditSupported`|`Boolean`|`true`    |If `false`, prevents the user from editing the property if several objects are selected.
`showLabel`      |`Boolean`|`true`    |If `false`, hides the label of the property in editors.
`showValue`      |`Boolean`|`true`    |If `false`, hides the value of the property in editors.

### Type file example
```lua
{
    type = ":number"
    min = 0
    max = 100
    default = 50
    editor = {
        order = 140
        label = "Health"
        suffix = "HP"
        description = "Initial health of the entity"
        control = "adskPropertySlider"
        step = 10
    }
}
```

###Compact notation example
```javascript
var numberProperty = props.slider("Health", m.prop(50), {
	order: 140,
    suffix: "HP",
    description: "Initial health of the entity",
    min: 0,
    max: 100,
    increment: 10
})
```

![import menu](../images/all_properties.png)

--------------------------------------------------------------------------------
##Built-In Property Widgets

### Property Action
A simple button use to trigger a custom function.

Property|Type    |Default |Description
--------|--------|--------|-----------
`action` (compact notation only)  |`Function`|`null`  |Function with no arguments.
`trigger` (type file only)  |`action` (see ~{Register an action}~)|`null`  |Action to execute.
`text`  |`string` |`""`  |Button text.
`color`  |`color` |  |Button background color. Any html color is valid.
`iconName`  |`string` |  |See [Font Awesome Icons](http://fontawesome.io/icons/) for a list of supported icons name.

### Type file example
```lua
{
    type = ":string"
    editor = {
        order = 140
        text = "Compute"
        description = "Initial health of the entity"
        control = "Action"
        trigger = {
            type = "js"
            module = "generic_asset/generic-asset-actions"
            function_name = "triggerAction"
        }
    }
}
```

###Compact notation example
```javascript
var actionProperty = props.action("Action", function () {
                        console.log('Action is triggered!');
                    }, {iconName: "fa-star-o"}),
```

![import menu](../images/property_action.png)

## `adskPropertyColor`
A color well with an accompanying intensity slider. Clicking the color well will bring up a color picker.

#### No additional customizable properties.

### Example
```
export = "#color"
types = {
    color = {
        type = ":struct"
        fields = {
            rgb = {
                type = ":array"
                value = "#component"
                size = 3
                default = [0, 0, 0]
            }
            alpha = {
                type = "#component"
                default = 1
            }
            intensity = {
                type = ":number"
                default = 1
                min = 0
            }
        }
        editor = {
            control = "adskPropertyColor"
        }
    }
    component = {
        type = ":number"
        min = 0
        max = 1
    }
}
```
--------------------------------------------------------------------------------

## `adskPropertyVector3`
A three-component vector control.

#### No additional customizable properties.

### Example
```
export = {
    type = ":struct"
    fields = {
        x = ":number"
        y = ":number"
        z = ":number"
    }
    editor = {
        control = "adskPropertyVector3"
    }
}
```
--------------------------------------------------------------------------------

## `adskPropertyQuaternion`
A rotation control with per-axis Euler angle fields.

#### No additional customizable properties.

### Example
```
export = {
    type = ":struct"
    fields = {
        x = ":number"
        y = ":number"
        z = ":number"
    }
    editor = {
        control = "adskPropertyQuaternion"
    }
}
```
--------------------------------------------------------------------------------

## `adskPropertyRange`
A control containing two numeric min and max value fields.

#### No additional customizable properties.

### Example
```
export = {
    type = ":array"
    value = ":number"
    size = 2
    default = [0, 100]
    editor = {
        control = "adskPropertyRange"
    }
}
```
--------------------------------------------------------------------------------

## `adskPropertySlider`
A slider control.

Property|Type    |Default |Description
--------|--------|--------|-----------
`step`  |`Number`|`null`  |Snaps the value slider to regular increments.

### Example
```
export = {
    type = ":number"
    min = 0
    max = 100
    default = 50
    editor = {
        control = "adskPropertySlider"
        step = 10
    }
}
```
