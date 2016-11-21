# Built-In Properties Reference
Stingray Property Editor supports a wide range of property types. This reference details the built-in Property Editor controls and the set of parameters that can be used to customize them.

There are 2 major ways of specifying properties: using the editor block in a `.type` file (see ~{Stingray Type System}~) or using the pure javascript compact notation (see ~{Property Editor Usage}~).

--------------------------------------------------------------------------------

## Common editor metadata properties
These parameters are available for all property control types.

Property       |Type     |Default   |Description
---------------|---------|----------|-----------
`order`     |`Number` |`Infinity`|Controls the ordering of properties in ascending order.
`control` or `displayType`     |`String` |`null`    |Specify a control to use when editing the property. See below for additional control specific properties.
`label`        |`String` |`null`    |Set a custom label for the property.
`suffixLabel`       |`String` |`null`    |Set a suffix to be displayed after the property value. Only shown for some widget types.
`description`  |`String` |`null`    |Set a description for the property. Shown in tooltips.
`isReadOnly`     |`Boolean`|`false`    |If `true`, prevents the user from editing the property.
`isMultiEditSupported`|`Boolean`|`true`    |If `false`, prevents the user from editing the property if several objects are selected (i.e. consensus editing).
`showLabel`      |`Boolean`|`true`    |If `false`, hides the label of the property in editor.
`showValue`      |`Boolean`|`true`    |If `false`, hides the value of the property in editor.

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
The following compact property editor notation will use [Mithril](http://mithril.js.org/) getter/setter function mecanism to encapsulate acces to the property model. More information can be found ~{Property Editor Usage}~.

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
A checkbox control.

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
var actionProperty = props.bool("Boolean", genModel(true));
```

![import menu](../images/property_boolean.png)

###Choice
A combobox that can either map on an Enum or a string.

Property       |Type     |Default   |Description
---------------|---------|----------|-----------
`options`     |`object` |`{}`|This is a javascript object where the keys are the "pretty label" for the different choices and the values are the actual enum values. See below for an example.
`fetch_options` (type file only)  |`action` (see ~{Register an action}~)|`null`  |Action that will return dynamically generated options.
`defaultValueName`        |`String` |`null`    |Default label if no choice.
`defaultValue`       |`String` |`null`    |Default value if no choice.

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
// This effectively creates a string that will use a Combobox control to select between
// a specific list of string values.
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

Spinner control allowing editing of a number value. Comes with lots of nifty features:
- Right clicking on the spinner resets it to its default value.
- Shift + Spinner modifies the data really fast.
- Ctrl + Spinner modifies the data more slowly.

Property       |Type     |Default   |Description
---------------|---------|----------|-----------
`min`     |`number` |`-2147483648`|Minimal value of the number
`max`|`number` |`2147483647`  |Maximal value of the number
`step` (in type file)|`number` |`0.1`  |When pressing the spinner button how much should it increment/decrement
`increment` (in javascript)|`number` |`0.1`  |When pressing the spinner button how much should it increment/decrement
`decimal`|`number` |`4`  |Number of decimals to show. If 0, the number is assumed to be an integer.
`numericDefaultValue`|`number` |`0`  |Value to reset to whrn right clicking on the Spinner.


#### Type file
```lua
Number = {
    type = ":number"
    editor = {
    	// Use min/max/default in the editor block instead of the type specification
    	default = 1
    	min = 0
    	max = 1
        control = "Number"
        step = 0.3
        priority = 4
    }
}
```

####Javascript
```javascript
var numberProperty = props.number("A Numeric Value", genModel(42.111), {
	increment: 0.5,
    min: -9,
    max: 56.9
});
```

![import menu](../images/property_number.png)

### Slider

Slider controls allows editing of a number using a slider. Most of its parameters are similar to the number property (see above).

Property       |Type     |Default   |Description
---------------|---------|----------|-----------
`min`     |`number` |`-2147483648`|Minimal value of the number
`max`|`number` |`2147483647`  |Maximal value of the number
`step` (in type file)|`number` |`0.1`  |When pressing the spinner button how much should it increment/decrement
`increment` (in javascript)|`number` |`0.1`  |When pressing the spinner button how much should it increment/decrement
`decimal`|`number` |`4`  |Number of decimals to show. If 0, the number is assumed to be an integer.


#### Type file
```lua
Number = {
    type = ":number"
    editor = {
    	// Use min/max/default in the editor block instead of the type specification
    	default = 1
    	min = 0
    	max = 1
        control = "Slider"
        step = 0.3
        priority = 4
    }
}
```

####Javascript
```javascript
var sliderProperty = props.slider("Percentable", genModel(50), {min: 0, max: 100, increment: 1});
```

![import menu](../images/property_slider.png)

### String

String property provide a textbox.

Property       |Type     |Default   |Description
---------------|---------|----------|-----------
`isMultiline`     |`boolean` |`false`|Defines if the textbox should span over multiple lines.
`lineRows`|`number` |`0`  |If `isMultiline` is `true` you can specify the number of lines of the textbox (between 1 and 8).



#### Type file
```lua
SingleLine = {
    type = ":string"
    editor = {
        label = "Single Line"
    }
}
MultiLine = {
    type = ":string"
    default = "pow"
    editor = {
        label = "Multi Line"
        isMultiline = true
        lineRows = 4
    }
}
```

####Javascript
```javascript
var stringProperty = props.color("Color", genModel([1,1,1]));

var colorModel = genModel([1,1,1]);
var intensityModel = genModel(1);
var hdrColorProperty = props.hdrColor("Color", colorModel, intensityModel);
```

![import menu](../images/property_string.png)


### Path
Path property allows a user to select either a folder or a file on disk.

Property       |Type     |Default   |Description
---------------|---------|----------|-----------
`browserType`     |`string` |``|Can be either `File` or `Folder`. Defines what type of native path selector will be popped.
`browseTitle`|`string` |``  |Title of the native dialog.
`browseFilter`|`string` |``  |File filter to only show files with a specific extension.

#### Type file
```lua
FilePath = {
    type = ":string"
    editor = {
        control = "PathProperty"
        browseType = "File"
        browseTitle = "Select an exe"
        browseFilter = "*.exe"
    }
}
DirPath = {
    type = ":string"
    editor = {
        control = "PathProperty"
        browseType = "Folder"
        browseTitle = "Select a folder"
    }
}
```

####Javascript
```javascript
var fileProperty = props.file("File", genModel('c:/Pogram Files (x86)/Git/bin/git.exe'), "Pick an exec", "*.exe"),
var dirProperty = props.directory("Folder", genModel('c:/Pogram Files (x86)/Git'), "Pick a folder"),
```

![import menu](../images/property_path.png)

![import menu](../images/property_path_selector.png)


### Range
A control containing two numeric min and max value fields.

#### Type file
```lua
Range = {
    type = "core/types/range"
}
```

####Javascript
```javascript
var range1= props.range("Range [-100, 100]", "mini", genModel(25), 'maxi', genModel(75), {min: -100, max: 100, increment: 0.5}),
var range2 = props.range("Read Only", "MIN", genModel(25), 'Max', genModel(75), {min: -100, max: 100, increment: 0.5, isReadOnly: true})
```

![import menu](../images/property_range.png)
![import menu](../images/property_range2.png)


### Vector

A control that can be used to display vector of 2, 3 or 4 components (not a rotation though).


#### Type file
```lua
Position = {
    type = "core/types/vector3"
}
```

#### Vector3 Type Definition
```lua
export = "#vector3"
types = {
    vector3 = {
        type = ":array"
        value = ":number"
        size = 3
        default = [0, 0, 0]
        editor = {
            control = "adskPropertyVector3"
        }
    }
}
```

####Javascript
```javascript

var vec2 = props.vector2("Vector2", genModel([34, 78]), {min: -100, max: 100, increment: 0.5});

var vec3 = props.vector3("Vector3", genModel([1,2,3]));

var vec4 = props.vector4("Vector4", genModel([34, 78, 67, -90]));
```

![import menu](../images/property-vector.png)

### Rotation
A control that that uses as data model vector of 3 radians value and that shows 3 spinners with degrees values.

#### Type file
```lua
Rotation = {
    type = "core/types/rotation"
}
```

#### Rotation Type definition
```lua
export = "#rotation"
types = {
    rotation = {
        type = ":array"
        value = ":number"
        size = 3
        default = [0, 0, 0]
        editor = {
            control = "adskPropertyRotation"
        }
    }
}
```

####Javascript
```javascript
var rotation = props.rotation("Rotation", genModel(0, -1.52, 3.14));
```

![import menu](../images/property_rotation.png)