# Vehicle physics properties

To view a sample vehicle physics file, you can load the Vehicle template project in the interactive editor, and open `4wheel.physics` in a text editor.

After you create a project based on the vehicle template, you can find this file in the following location: `..\vehicle_project\content\models\4wheel`.

See also ~{ Set up vehicle physics }~.

##General vehicle properties

**enabled**

True or false specifies whether the vehicle is enabled or disabled within the unit.

**name**

Vehicle name.

**actor_name**

Name of the unit actor the vehicle is based on. This must correspond to the actor name previously defined in the unit.

**vehicle_physics_model**

- **wheeled**

Intended for car physics with 4 wheels or greater.

- **tank**

Intended for tank physics with 4 to 20 wheels. Tanks are different than wheeled vehicles in that the wheels are all driven through the differential in a way that ensures that all the wheels on the left-hand side have the same speed, and all the wheels on the right-hand have the same speed.


**tank_drive_model**

For tank physics models a tank drive model must be specified. > > Options: > * standard - Tank treads can only rotate in the forward direction. > * special - Tank treads can rotate in forward and reverse directions.

Example:

```{sjson}
vehicles = [
    {
        enabled = true
        name = "m1a1"
        actor_name = "tank_actor"
        vehicle_physics_model = "tank"
        tank_drive_model = "special"
```

##Chassis properties

**mass**

Mass of the vehicle rigid body actor expressed in kilograms.

**scene_graph_shape_node**

Name of shape node specified in the actor that corresponds to the chassis. The origin of this shape is used for the vehicle center of mass and the shape is used for collision.

**scene_graph_render_nodes (section)**

An array of nodes within the mesh that will be transformed by the physics chassis translation and/or rotation.

For each array entry:

- node: Name of the mesh node

transform_type

Options:

- **full**: Node is transformed by chassis full transform.

- **translation**: Node is transformed by chassis transform translation component.

- **rotation**: Node is transformed by chassis transform rotation component.

**center_of_mass_offset**

Center of mass offset for the vehicle rigid body.

###**moment_of_inertia**

The moment of intertia can be set in one of three ways:
- **raw** - Explicitly sets the x,y,z values of the moment of intertia
- **cuboid** - Auto-calculates the moment using the formula for a cuboid (with an additional scale)
- **default** - The deault (backward compatible) method, from the PhysX example, that uses the cuboid formula with a responsiveness setting that scales the z axis.

You may specify the parameters for all of these methods but only one is used. The raw method has the highest priority, then cubiod and finally the default method is used if the others don't exist.

The cuboid forumla: For a bounding cuboid of W wide, H high, and L long the moment of inertia for a vehicle of mass M is:
((LL+HH)M, (WW+HH)M/12, (WW+LL)M/12

**scale**

When using the **cuboid** method this scales the results of the cubiod formula for per axis fine tuning

**mass_factor**

Degree to which the mass affects each moment of inertia term. This is ignored when using the **raw** method

**responsiveness**

When using the default method this scales the moment of inertia Z term which affects the overall turning reponsiveness. Lower values will result in higher responsiveness.

Example:

```{sjson}
	chassis = {
	    mass = 1500.0
	    scene_graph_shape_node = "c_body"
	    scene_graph_render_nodes = [
	        {
	            node = "j_body"
	            transform_type = "full"
	        }
	    ]

	    center_of_mass_offset = [
	        0
	        0.5
	        -0.5
	    ]

	    moment_of_inertia = {
	        raw = [
	            1000
	            1000
	            1000
	        ]
	        cuboid = [
	            mass_factor = 0.08
	            scale = [
	                1.0
	                1.0
	                0.5
	            ]
	        ]
	        mass_factor = 0.055
	        responsiveness = 0.9
	    }
	}
```

##Engine properties

**peak_torque**

The maximum torque available to apply to the engine specified in kilograms metres-squared per second-squared.

**max_omega**

The maximum rotation speed of the engine specified in radians per second.

###**damping rate**

Rate at which damping is applied to the engine. Typical values in range (0.25,3). The simulation can become unstable with damping rates of 0.

**full_throttle**

Damping rate of engine when full throttle is applied.

**zero_throttle_clutch_engaged**

Damping rate of engine when full throttle is applied. Note that throttle values between zero and one will result in an interpolation between zero_throttle_clutch_engaged and full_throttle.

**zero_throttle_clutch_disengaged**

Damping rate of engine in at zero throttle when the clutch is disengaged (in neutral gear).

###Differential properties

**type**

 Options:

- ls_4wd

	Limited slip differential for car with 4 driven wheels

- ls_frontwd

	Limited slip differential for car with front-wheel drive

- ls_rearwd

	Limited slip differential for car with rear-wheel drive

- open_4wd

	Open differential for car with 4 driven wheels

- open_frontwd

	Open differential for car with front-wheel drive

- open_rearwd

	Open differential for car with rear-wheel drive

**front_rear_split **

Ratio of torque split between front and rear (>0.5 means more to front, <0.5 means more to rear). Only applies to ls_4wd andopen_4wd. The range is 0 to 1.

**front_left_right_split**

Ratio of torque split between front-left and front-right (>0.5 means more to front-left, <0.5 means more to front-right). Only applies to ls_4wd, open_4wd and ls_frontwd. The range is 0 to 1.

**rear_left_right_split**

Ratio of torque split between rear-left and rear-right (>0.5 means more to rear-left, <0.5 means more to rear-right). Only applies to ls_4wd, open_4wd and ls_rearwd.

**center_bias**

Maximum allowed ratio of average front wheel rotation speed and rear wheel rotation speeds. Only applies to ls_4wd.

**front_bias**

Maximum allowed ratio of front-left and front-right wheel rotation speeds. Only applies to ls_4wd and ls_frontwd.

**rear_bias**

Maximum allowed ratio of rear-left and rear-right wheel rotation speeds. Only applies to ls_4wd and ls_rearwd

Example:

```{sjson}
	differential = {
	    type = "ls_4wd"
	    front_rear_split = 0.45
	    front_left_right_split = 0.5
	    rear_left_right_split = 0.5
	    center_bias = 1.3
	    front_bias = 1.3
	    rear_bias = 1.3
	}
```

##Gear properties

**auto_gears_enabled**

true or false specifies whether the vehicle should use automatic transmission

**final_ratio**

The gear ratio in the physics simulation is the current gear ratio multiplied by the final gear ratio. Tuning the final gear ratio allows for changing all the gear ratio entries without having to edit each individual entry. Typical gear ratios are around 4.0.

**switch_time**

The switch time describes how long it takes (in seconds) for a gear change to be completed.

**ratios**

Array of gear ratio values starting with reverse, then neutral, first gear and so on. The maximum number of forward gears is 30.

Example:

```{sjson}
	gears = {
	    use_auto_gears = true
	    final_ratio = 4.0
	    switch_time = 0.5
	    ratios = [
	        -4
	        0
	        4.2
	        2.0
	        1.1
	        1.0
	    ]
	}
```

##Clutch properties

**strength**

Torque generated by clutch is proportional to the clutch strength and the velocity difference between the engine speed and the speed of the driven wheels after accounting for the gear ratio. Specified in kilograms meters-squared per second.

Example:

```{sjson}
	clutch  = {
    	strength = 10.0
	}
```

##Ackermann correction

Ackermann correction allows better cornering by steering the left and right wheels with slightly different steer angles, as computed from simple trigonometry. In practice, it is impossible to engineer a steering linkage that will achieve the perfect Ackermann steering correction.

**accuracy**

The accuracy of the Ackermann steering correction to be controlled. Choosing a value of 0 completely disables Ackermann steer correction. A value of 1.0 achieves perfect Ackermann correction.

Example:

```{sjson}
	ackermann_correction = {
	    accuracy = 1.0
	}
```

##Steer Versus Forward Speed

**steer_vs_forward_speed**

Contains an array of speed and steer pairs that describe the maximum steer as a function of speed. The first value in the pair indicates the speed and the second value in the pair indicates the maximum steer at that speed.

In the example below we can see that at zero speed a full steer of 1.0 will be seen. Then at a speed of 5.0 a max steer of 0.75 will be seen and so on. Note that steer values will interpolate between speeds.

Example:

```{sjson}
	steer_vs_forward_speed = [
	    0.0 1.0
	    5.0 0.75
	    30.0 0.22
	    120.0 0.19
	]
```

##Input smoothing

One of the difficulties with vehicle dynamics in interactive simulations is knowing how to filter the raw controller data in a way that results in pleasing handling. Players, for example, often demonstrate their eagerness to accelerate by pressing very quickly on the accelerator trigger in a way would never happen in a real car. This rapid acceleration can have a counter-productive effect because the resulting wheel spin reduces the lateral and longitudinal forces that can be generated by the tire. To help overcome these problems smoothing data is applied to the raw input.

###rise_rates

Rise rate values for the following inputs. Values must be greater than zero. The higher the value the faster the smoothed input will reach the raw input value.

- acceleration
- brake
- handbrake
- steer_left
- steer_right

###fall rates

Fall rate values for the following inputs. Values must be greater than zero. The higher the value the faster the smoothed input will reach the raw input value.

- acceleration
- brake
- handbrake
- steer_left
- steer_right

Example:

```{sjson}
	input_smoothing = {
	    rise_rates = {
	        acceleration = 6.0
	        brake = 6.0
	        handbrake = 12.0
	        steer_left = 2.5
	        steer_right = 2.5
	    }
	    fall_rates = {
	        acceleration = 10.0
	        brake = 10.0
	        handbrake = 12.0
	        steer_left = 4.0
	        steer_right = 4.0
	    }
	}
```

##Wheel properties

Each vehicle contains an array of wheels as indicated in the following example:

```{sjson}
	wheels = [
    	{
    	    wheel 1 properties
    	}
    	{
    	    wheel 2 properties
    	}
    	{
    	    wheel 3 properties
    	}
    	{
    	    wheel 4 properties
    	}
	]
```

Wheel entries must be ordered by front left, front right, wheel behind front left, wheel behind front right and so on to the most rear right wheel.

Properties in each wheel entry consist of the following:

**wheel_raycast_filter**

The name of the collision filter for this wheel. It should be the name of a filter defined in 'global.physics_properties'.  If a filter isn't given then it defaults to collide with everything except the vehicle's chassis geometry and the wheels' geometry.

**scene_graph_shape_node**

Name of shape node specified in the actor that corresponds to the wheel. The center of this shape will be used for the wheel center of mass and the shape will be used for collision.

###scene_graph_render_nodes

An array of nodes within the mesh that will be tranformed by the physics wheel translation and/or rotation. Render nodes are useful for affecting vehicle components other than the wheels themselves. One example could be tank treads. A tread could be constructed in such a way so that various points on it correspond to the each wheel's translational component. As each wheel moves up and down the tread points will follow along and conform the the terrain. They will not twist with the wheel if the tranform type is set to "translation".

- **node:** Name of the mesh node
- **transform_type:**

 - **full**: Node is transformed by wheel full transform.

 - **translation**: Node is transformed by chassis wheel translation component.

 - **rotation**: Node is transformed by chassis wheel rotation component.

**mass**

Combined mass of the wheel and the tire are expressed in kilograms. Typical wheels have mass between 20Kg and 80Kg but can be lower and higher depending on the vehicle.

**moi**

This will explicitly set the moment of inertia for the wheel.  If it is missing then it defaults to the point mass formula (mr^2)

**position_offset**

Wheel position offset vector. Wheel initial position is establish by its location in the mesh.

**radius_scale**

The wheel radius is determined by the shape dimensions. It is possible to scale the wheel radius by applying the radius_scale multiplier. For example a value of 1.0 will apply no scale while a value of 1.1 will increase the wheel size by 10%. Scaling the wheel size could be useful in cases such as with the implementation of a tank tread. Without scaling the wheel would be flush with the surface and the tread would be beneath it. Scaling the wheel enough to account for the thickness of the tread will allow the tread to be flush with the surface.

**damping_rate**

The damping rate describes the rate at which a freely spinning wheel loses rotational speed. Higher damping rates result in the wheel coming to rest in shorter times. Damping rates must be greater than zero. Typical values range between 0.25 and 2.

**max_brake_torque**

Value of the torque applied to the wheel when the brakes are maximally applied. Higher torques will lock the wheel quicker when braking, while lower torques will take longer to lock the wheel. Torque values are expressed in Newton Meters. 1500 would be a reasonable starting point for brake torque.

**max_handbrake_torque**

This functions the same as max brake torque except applies to the handbrake rather than the brake. Typically, for a 4-wheeled car, the handbrake is stronger than the brake and is only applied to the rear wheels. A value of 4000 for the rear wheels is a good starting point, while a value of 0 is necessary for the front wheels to make sure they do not react to the handbrake.

**max_steer**

Value of the steer angle of the wheel in radians when the steering wheel is at full lock. Typically, for a 4-wheeled car, only the front wheels respond to steering. In this case, a value of 0 is required for the rear wheels. Be aware that large steer angles at large speeds are likely to result in the car losing traction and spinning out of control, just as would happen with a real car. A good way to avoid this is to set appropriate values in the steer_vs_forward speed section.

###tire

**type**

Tire type from `global.physics_properties` *tire_types*.

**lateral_stiffness_x, lateral_stiffness_y**

These values together describe the lateral stiffness per unit lateral slip (in radians) of the tire. The lateral stiffness of a tire has a role similar to the longitudinal stiffness, except that it governs the development of lateral tire forces, and is a function of tire load.

Typically, increasing lateral stiffness helps the car turn more quickly. The total tire force available is limited by the load on the tire so be aware that increases in this value might have no effect or even come at the expense of reduced longitudinal force.

The combination of the two values *mLatStiffX* and *mLatStiffY* describe a graph of lateral stiffness as a function of normalised tire load. Typical for car tires is a graph that has linear response close to zero load but saturates at greater loads. This means that at low tire loads the lateral stiffness has a linear response to load; that is, more load results in more stiffness. At higher tire loads the tire has a saturated response and is in a regime where applying more load will not result in more tire stiffness. In this latter regime it would be expected that the tire would start slipping.

The parameter *mLatStiffX* describes the normalised tire load above which the tire has a saturated response to tire load. The normalised tire load is simply the tire load divided by the load experienced when the vehicle is perfectly at rest. A value of 2 for *mLatStiffX* means that when the the tire has a load more than twice its rest load it can deliver no more lateral stiffness no matter how much extra load is applied to the tire. The parameter *mLatStiffY* describes the maximum stiffness per unit of lateral slip (in radians) per unit rest load. The maximum stiffness is delivered when the tire is in the saturated load regime, governed in turn by *mLatStiffX*.

**longitudal_stiffness**

The longitudinal tire force is approximately the product of the longitudinal stiffness per unit longitudinal slip (in radians) per unit gravity and the longitudinal slip and the magnitude of gravitational acceleration. Increasing this value results in the tire attempting to generate more longitudinal force when the tire is slipping. Typically, increasing longitudinal stiffness helps the car accelerate and brake. The total tire force available is limited by the load on the tire so be aware that increases in this value might have no effect or even come at the expense of reduced lateral force.

**friction_versus_slip**

Consists of six values that describe a graph of friction as a function of longitudinal slip.  Vehicle tires have a complicated response to longitudinal slip and this graph attempts to quickly describe this relationship.

Typically, tires have a linear response at small slips. This means that when the tire is only slightly slipping, it can generate a response force that grows as the slip increases. At greater values of slip, the force can actually start to decrease from the peak value that occurs at the optimum slip. Beyond the optimum slip the tire eventually stops behaving less and less efficiently and hits a plateau of inefficiency.

The first two values describe the friction at zero tire slip 0, friction at zero slip. The next two values describe the optimum slip and the friction at the optimum slip: optimum slip, friction at optimum slip. The last two values describe the slip at which the plateau of inefficiency begins and the value of the friction available at the plateau of inefficiency: slip at the start of the plateau of inefficiency, the friction available at the plateau of inefficiency.

The friction values described here are used to scale the friction of the ground surface. This means they should be in range (0,1) but this is not a strict requirement. Typically, the friction from the graph would be close to 1.0 in order to provide a small correction to the ground surface friction. A good starting point for this is a flat graph of friction vs. slip with these values:

```{sjson}
	friction_versus_slip = [
						0.0 1.0
						0.5 1.0
						1.0 1.0
					]
```

**force_application_offset**

Application point of the tire force. Note that the force application origin is at (wheel_x,wheel_y,chassis_z)

###suspension

**sprung_mass**

Mass in kg that is supported by the suspension spring. A vehicle with rigid body centre of mass at the centre of the four wheels would typically be equally supported by each of the suspension springs; that is, each suspension spring supports 1/4 of the total vehicle mass. If the centre of mass was moved forward then it would be expected that the front wheels would need to support more mass than the rear wheels.

Conversely, a centre of mass nearer the rear wheels ought to result in the rear suspension springs supporting more mass than at the front. Values must be greater than zero or zero. The sprung mass total of all wheels must equal the chassis mass. A value of zero will result in a sprung mass value equal to the vehicle mass divided by the number of wheels.

**max_compression**

Maximum compression in metres that the spring can support. The maximum compression value should be chosen so that the wheel is never placed where the visual mesh of the wheel intersects the visual meshes of the car chassis.

**max_droop**

Maximum elongation in metres that the spring can support.

**camber_rest**

The camber angle of the wheel when at rest

**camber_max_compression**

The camber angle of the wheel when the suspension is fully compressed

**camber_max_droop**

The camber angle of the wheel when the suspension is fully elongated

**spring_strength**

Strength of the suspension spring in Newtons per meter. The spring strength has a significant influence on handling by modulating the time it takes for the vehicle to respond to bumps in the road and on the amount of load experienced by the tire.

**spring_damper_rate**

The rate at which the spring dissipates the energy stored in the spring.

**travel_direction**

Suspension vector of travel. Typically straight down (0,0,-1).

```{sjson}
	travel_direction = [
						0
						0
						-1
```

**force_application_offset**

Application point of the wheel suspension force. Note that the force application origin is at (wheel_x,wheel_y,chassis_z). For example:

```{sjson}
	force_application_offset = [
						0
						0
						-0.3
```

---
Related topics:
-	~{ Global physics properties }~
---
