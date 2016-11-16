# Built-In Properties Reference
Stingray Property Editor supports a wide range of property types. This reference details the built-in Property Editor widgets and the set of supported properties that can be used to customize them.

There are 2 major ways of specifying properties: using the editor block in a `.type` file (see ~{Stingray Type System}~) or using the pure javascript compact notation (see ~{Property Editor Usage}~).

--------------------------------------------------------------------------------

## Common editor metadata properties
These properties are available for all widget types.

Property       |Type     |Default   |Description
---------------|---------|----------|-----------
`order`     |`Number` |`Infinity`|Controls the ordering of properties in ascending order.
`control` or `displayType`     |`String` |`null`    |Specify a widget to use when editing the property. See below for additional widget specific properties.
`label`        |`String` |`null`    |Set a custom label for the property.
`suffixLabel`       |`String` |`null`    |Set a suffix to be displayed after the field. Only shown for some widget types.
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

### Quick Mithril Model Recap
The following compact property editor notation will use [Mithril](http://mithril.js.org/) getter/setter function for model. More information can be found ~{Property Editor Usage}~ but as a quick reminder a property model is:

- a function that can be invoked with one or two arguments.
- first arguments is the property triggering the model change.
- if there is no second argument, the function you return the value of the property.
- if there is a second argument, the function must set the value of the property.

This is a quick example of a property model function:
```javascript
var _propertyData = "This is my data";
function propertyModel (property) {
	if (arguments.length > 1) {
    	_propertyData = arguments[1];
    }
    return _propertyData;
}
```

Most examples below will use the following function which **generates** property model on the fly:
```javascript
function genModel (value) {
	return function (property, newValue) {
    	if (arguments.length > 1) {
    		value = newValue;
    	}
    	return value;
    };
}
```



### Property Action
A simple button use to trigger a custom function.

Property|Type    |Default |Description
--------|--------|--------|-----------
`action` (compact notation only)  |`Function`|`null`  |Function with no arguments.
`trigger` (type file only)  |`action` (see ~{Register an action}~)|`null`  |Action to execute.
`text`  |`string` |`""`  |Button text.
`color`  |`color` |  |Button background color. Any html color is valid.
`iconName`  |`string` |  |See [Font Awesome Icons](http://fontawesome.io/icons/) for a list of supported icons name.

#### Type file
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

### Javascript
```javascript
var actionProperty = props.action("Action", function () {
                        console.log('Action is triggered!');
                    }, {iconName: "fa-star-o"}),
```

![import menu](../images/property_action.png)

###Boolean
No custom property.

#### Type file
```lua
{
    type = ":boolean"
    editor = {
        order = 140
        control = "Boolean"
        isReadOnly = true
    }
}
```

####Javascript
```javascript
var actionProperty = props.bool("A bool", genModel(true));
```

![import menu](../images/property_boolean.png)

###Choice
A combobox that can either map on an Enum or a string.

Property       |Type     |Default   |Description
---------------|---------|----------|-----------
`options`     |`object` |`{}`|This is a javascript object where the keys are the "pretty label" for the different choices and the values are the actual model value. See below for an example.
`fetch_options` (type file only)  |`action` (see ~{Register an action}~)|`null`  |Action that will return the options.
`defaultValueName`        |`String` |`null`    |Default label if no choice.
`defaultValue`       |`String` |`null`    |Default value if no choice.
`invalid`  |`String` |`""`    |CSS class to add to the choice if the value is invalid.

#### Type file (Enum)
```lua
Enum = {
    type = ":enum"
    value = ":string"
    default = "InLoading"
    cases = [
        "Loaded"
        "Unloaded"
        "InLoading"
        "ErrorLoading"
    ]
    editor = {
        control = "Choice"
        label  = "Load state"
        case_labels = {
            "Loaded" = "Loaded"
            "Unloaded" = "Unloaded"
            "In Loading..." = "InLoading"
            "Error while Loading" = "ErrorLoading"
        }
    }
}
```

#### Type file (String)
```lua
ChoiceString = {
    type = ":string"
    default = "SurfaceNormal"
    editor = {
        control = "Choice"
        label  = "Orient Express"
        fetch_options = {
            type = "js"
            module = "generic_asset/generic-asset-actions"
            function_name = "populateActions"
        }
    }
}
```

####Javascript
```javascript
var options {
    'Beer': 1,
    'Scotch': 2,
    'Rhum': 3,
    'Wine': 4
};

var choiceProperty = props.choice("Tough choice", genModel(2), options, {defaultValueName: "Choose a drink"});
```

![import menu](../images/property_choice.png)

### Color
A color well with an accompanying intensity slider. Clicking the color well will bring up a color picker.

#### Type file (String)
```lua
Color = {
    type = "core/types/color"
}
```

#### Color definition (see core/types/color)
```lua
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

####Javascript
```javascript
// Simple color:
var colorProperty = props.color("Color", genModel([1,1,1]));

// HDR color:
var hdrColorProperty = props.hdrColor("Color", genModel([1,1,1]), genModel(1));
```

![import menu](../images/property_color.png)

![import menu](../images/color_picker.png)

### Number

#### Type file (String)
```lua
Color = {
    type = "core/types/color"
}
```

####Javascript
```javascript
// Simple color:
var colorProperty = props.color("Color", genModel([1,1,1]));

// HDR color:
var hdrColorProperty = props.hdrColor("Color", genModel([1,1,1]), genModel(1));
```

![import menu](../images/property_number.png)

### Slider

#### Type file (String)
```lua
Color = {
    type = "core/types/color"
}
```

####Javascript
```javascript
// Simple color:
var colorProperty = props.color("Color", genModel([1,1,1]));

// HDR color:
var hdrColorProperty = props.hdrColor("Color", genModel([1,1,1]), genModel(1));
```

![import menu](../images/property_number.png)

### String

#### Type file (String)
```lua
Color = {
    type = "core/types/color"
}
```

####Javascript
```javascript
// Simple color:
var colorProperty = props.color("Color", genModel([1,1,1]));

// HDR color:
var hdrColorProperty = props.hdrColor("Color", genModel([1,1,1]), genModel(1));
```

![import menu](../images/property_number.png)


### Path

#### Type file (String)
```lua
Color = {
    type = "core/types/color"
}
```

####Javascript
```javascript
// Simple color:
var colorProperty = props.color("Color", genModel([1,1,1]));

// HDR color:
var hdrColorProperty = props.hdrColor("Color", genModel([1,1,1]), genModel(1));
```

![import menu](../images/property_number.png)


### Range

#### Type file (String)
```lua
Color = {
    type = "core/types/color"
}
```

####Javascript
```javascript
// Simple color:
var colorProperty = props.color("Color", genModel([1,1,1]));

// HDR color:
var hdrColorProperty = props.hdrColor("Color", genModel([1,1,1]), genModel(1));
```

![import menu](../images/property_number.png)


### Vector

#### Type file (String)
```lua
Color = {
    type = "core/types/color"
}
```

####Javascript
```javascript
// Simple color:
var colorProperty = props.color("Color", genModel([1,1,1]));

// HDR color:
var hdrColorProperty = props.hdrColor("Color", genModel([1,1,1]), genModel(1));
```

![import menu](../images/property_number.png)

### Rotation

#### Type file (String)
```lua
Color = {
    type = "core/types/color"
}
```

####Javascript
```javascript
// Simple color:
var colorProperty = props.color("Color", genModel([1,1,1]));

// HDR color:
var hdrColorProperty = props.hdrColor("Color", genModel([1,1,1]), genModel(1));
```

![import menu](../images/property_number.png)

## To check if it works properly:
- table
- color gradient

## Container
- Carousel
- Table
- json

## Should not expose:
- dict?
- child
- prefix
- graph












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
