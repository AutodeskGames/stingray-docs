# Integrate Gameware Navigation into your game runtime

This document describes how to integrate Gameware Navigation into your Lua game code. You will learn how to add a navigation world, and spawn bots.

# Gameware Navigation Lua scripts

We provide a set of Lua scripts to start integrating Navigation in your runtime.
These scripts are located in *core/gwnav/lua/runtime* and will therefore be available in your project.

# Navigation World

The main component to integrate is the navigation world (requires *navworld.lua*).

From this object you will be able to:

* load navdata
* render the navmesh in-game
* send visual debug information to the NavigationLab.

## Init

In your level initialization create a `NavWorld` object:

~~~{lua}
function MyGame:init()
	self.navworld = NavWorld(world, level)
end
~~~

With:

* `world`: the engine world object
* `level`: the engine level object that represents your scene

## Update

The navigation world must be updated each frame.
The main game camera can also be sent for visual debugging so that when connected to your Game, the camera in the Navigation Lab can match your game camera.

~~~{lua}
function MyGame:update(dt)
	self.navworld:update(dt)
	self.navworld:visual_debug_camera(self.maincamera)
end
~~~

## NavData

To add NavData to a world:

~~~{lua}
function MyGame:init()
	local nav_data = self.navworld:add_navdata("levels/empty")
end
~~~

To remove NavData from a world:

~~~{lua}
	self.navworld:remove_navdata(nav_data)
~~~

## NavData rendering

In order to render the navigation mesh in game call:

~~~{lua}
self.navworld:debug_draw(gui, line_object)
~~~

You will need to pass an initalised `Gui` and `LineObject` to this function.  You will also need to have added some NavData to the world.

## Shutdown

~~~{lua}
function MyGame:shutdown()
	self.navworld:shutdown()
end
~~~

* add and remove bots, obstacles, runtime tagvolumes and navgraph

## Bots

To add a bot to a NavWorld:

~~~{lua}
local configuration = NavBotConfiguration()
-- You can change any parameters of the configuration:
configuration.height = 1.8
local navbot = self.navworld:init_bot_from_unit(unit, configuration)
~~~

* `unit` is the Unit you wish to be driven by Navigation.

To remove a bot from a NavWorld:

~~~{lua}
navbot:shutdown()
~~~

## Box Obstacle

To create a Box Obstacle:

~~~{lua}
local box_obstacle = NavBoxObstacle(navworld, unit)
box_obstacle:add_to_world()
box_obstacle:remove_from_world() -- obstacles is not destroyed, just no longer present in world
~~~

`navworld` is the `NavWorld` you wish this obstacle to reside in.  `unit` is the `Unit` you wish to associate a Box Obstacle with.  It will be configured according to the following scriptdata:

* `half_extent`             - This `Vector3` represents the halfextents of the Box.
* `offset`                  - This `Vector3` represents the local center of the Box.
* `is_exclusive`            - Whether or not this Obstacle causes the NavMesh to be no longer traversable where it intersects.
* `does_trigger_tag_volume` - Controls whether or not the obstacle changes the NavMesh.
* `rotation_mode`           - This `string` can be either `free` or `yaw`.  Yaw indicates that the obstacle only rotates around it's local up axis.  Free indicates it can rotate in three dimensions.
* `layer_id`                - The layer that this box should use when punching holes in the NavMesh.
* `smartobject_id`          - The id of the smartobject (if any) associated with this obstacle.

## Cylinder Obstacle

To create a Cylinder Obstacle:

~~~{lua}
local cylinder_obstacle = NavCylinderObstacle(navworld, unit)
cylinder_obstacle:add_to_world()
cylinder_obstacle:remove_from_world() -- obstacles is not destroyed, just no longer present in world
~~~

`navworld` is the `NavWorld` you wish this obstacle to reside in. `unit` is the `Unit` you wish to associate a Cylinder Obstacle with.  It will be configured according to the following scriptdata:

* `radius`                  - This radius of the Cylinder.
* `height`                  - The height of the Cylinder.
* `is_exclusive`            - Whether or not this Obstacle causes the NavMesh to be no longer traversable where it intersects.
* `does_trigger_tag_volume` - Controls whether or not the obstacle changes the NavMesh.
* `layer_id`                - The layer that this box should use when punching holes in the NavMesh.
* `smartobject_id`          - The id of the smartobject (if any) associated with this obstacle.

To destroy an Obstacle:

~~~{lua}
box_obstacle:shutdown()
cylinder_obstacle:shutdown()
~~~
