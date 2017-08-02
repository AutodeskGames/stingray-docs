#Set up vehicle physics

You can specify vehicle physics in the `.physics` file for the vehicle unit. Some of the set up can be done in the **Unit Editor**, but most steps must be done by editing the `.physics` JSON file for the unit, using a standard text editor.

To see an example of a vehicle `.physics file`, you can load the Vehicle template project, and find the vehicle physics file in the following location: `..\vehicle_project\content\models\4wheel`.

Keep in mind that global physics properties specified in the `global.physics_properties` file apply to all vehicles. (See also  ~{ Global physics properties }~.)

##Set up the global.physics_properties file

You need to set up collision types, filters, and shapes for the vehicle body, wheels and wheel raycasts. For a wheel raycast you only need to specify the 'collides_with' part of the filter. Typically you want it to collide with everything except for the vehicle itself and things like water. If a filter isn't specified for a wheel then it defaults to collide with everything except the vehicle's chassis geometry and the wheels' geometry.

Example:

'my_project/content/vehicles/my_vehicle.physics'

        wheels = [
            {
                wheel_raycast_filter = "car_wheel"
        ...

'global.physics_properties'

        collision_filters = {
            vehicle = {is = ["vehicle"] collides_with_all_except = ["trigger" "projectile"]}
            wheel = {is = ["wheel"] collides_with = ["obstacle"]}
            wheel_raycast = {collides_with_all_except = ["vehicle" "wheel"]}
        }


Specify the wheel types to establish wheel/surface friction values. You must use an array named *tire_types* for all tire type materials. The entries in this array are later available when selecting vehicle tire types for each wheel.

Example:

```{sjson}
tire_types = [
	"wets"
	"slicks"
	"tank_tread"
]
```

The surface materials that vehicles can drive on must be listed in an array named *drivable_surfaces*. Each material in this array must also exist in the materials area in the `global.physics_properties` file.

Example:

```{sjson}
drivable_surfaces = [
    "default"
    "mud"
    "tarmac"
    "grass"
    "ice"
]
```

Each tire type and driveable surface has a unique friction value used in the friction calculation for the vehicle tire. Specify the friction values in the array named *tire_surface_frictions*. Each tire type has its own array that corresponds to each driveable surface type.

Example:

```{sjson}
tire_surface_frictions = {
    wets = [
    1.1
    0.62
    1.1
    0.7
    0.5
    ]

    slicks = [
    1.2
    0.58
    1.2
    0.68
    0.45
    ]

    tank_tread= [
    2.1
    1.9
    2.1
    2.0
    1.7
    ]
}
```

In the example above the *wets* tire type would have a friction value of 1.1 on default material, 0.62 or mud, 1.1 on tarmac, 0.7 on grass and 0.5 on ice.

Vehicle actor templates are also established in `global.physics_properties`. The only requirement is to configure the vehicle as a dynamic actor. As a starting point it's best to set **linear_damping** and **angular_damping** to zero and leave all other properties at their default values.

##Set up the base physics actor

1. Create a unit for the vehicle mesh.

	The mesh must contain at least one node per wheel and one node for the body. Additional collision meshes may be created or convex meshes can be automatically computed at resource compile time.

2. In the **Unit Editor**, select the mesh node that represents the vehicle chassis collision and create a physics actor, then perform the steps:

	- Supply a unique name for the vehicle.

	- Choose an appropriate vehicle template.

	- Ignore the mass value or set it to 0.

		The mass will be overriden within the vehicle configuration at a later point.

3. Save the unit and close the **Unit Editor**.

##Set up the vehicle shapes

In the `.physics` file for the unit, perform the following steps:

1. Locate the shapes section, which contains one shape for the chassis.

2. Add a shape section for each mesh node that corresponds to a wheel and set the appropriate wheel shape template.

3. For all shapes set **type** to **convex** if the specified shape was created as convex, otherwise set the type to **convex_computed** to compute a convex shape at compile time.

**Example:**

```{sjson}
shapes = [
	{
	    material = "default"
	    shape = "wheel_frontpass"
	    template = "wheel"
	    type = "convex_computed"
	}
	{
	    material = "default"
	    shape = "car_body"
	    template = "vehicle"
	    type = "convex_computed"
	}
	{
	    material = "default"
	    shape = "wheel_frontdriver"
	    template = "wheel"
	    type = "convex_computed"
	}
	{
	    material = "default"
	    shape = "wheel_reardriver"
	    template = "wheel"
	    type = "convex_computed"
	}
	{
	    material = "steel"
	    shape = "wheel_rearpass"
	    template = "wheel"
	    type = "convex_computed"
	}
]
```

##Set up the vehicle physics properties

Edit the vehicle unit `.physics` file.

Refer to ~{ Vehicle physics properties }~ for detailed information.
