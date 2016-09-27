# Using the Appkit component system

The Appkit contains a built-in component system that you can use in your own code.

You can define your own types of components, and assign instances of those components to Lua objects. The class and component management systems provided by the Appkit will automatically manage calling event handler functions that you define for each of your component instances:

-   `init()`
-   `update(dt)`
-   `shutdown()`
-   `on_level_shutdown()`

This system allows for component-based aggregation of behaviors using an arbitrary Lua object shared among related components.

>	**Note:** This Lua component system is currently unrelated to the game engine's Entity/Component system.

You can use the component system regardless of whether or not you use the `SimpleProject`.

## Defining a component type

This example shows how you can write a custom type of component. In this case, we'll create a component called PlayerScore, which could be used to keep a player's score up to date.

~~~{lua}
-- Create a class for the component using the Appkit's class framework
PlayerScore = Appkit.class(PlayerScore)

-- Register the component class with the ComponentManager
Appkit.ComponentManager.give_manager(PlayerScore)

-- Define a handler that will be called systematically every frame of the game.
function PlayerScore:update()
    -- check for events that affect the score, and update the stored values accordingly...
end

-- Define a handler that will be called when the current level is closed.
function PlayerScore:on_level_shutdown()
    -- reset or adjust the score...
end

-- Pass an object to the component's constructor so the component can
-- register with the owner, and so it can obtain other components from the
-- owner.
function PlayerScore:init(owner, other_argument)
    self.owner = owner

    -- other initialization code goes here...

    -- add this instance of the component class to the ComponentManager that manages PlayerScore components.
    -- passing the level in this call is optional. It registers for on_level_shutdown events,
    -- and causes the component instance to be removed from the ComponentManager automatically
    -- immediately before the level is destroyed.
    PlayerScore.manager:add_component(owner, self, level)
end
~~~

## Attaching components

This example shows how you can attach instances of your custom component types to a Lua object: in this case, an empty table.

~~~{lua}
-- An object to attach components to
local player = {}

-- Add components, assuming components named Health, DamageGiver and
-- PlayerScore have been registered with the ComponentManager.
local health = Health(player)
local damage_giver = DamageGiver(player)
local score = PlayerScore(player)

-- At this point we have an object (player) with three components registered
-- to it. The components will get updated every frame.
~~~

## Accessing components

Once you have component instances attached to an object, you can retrieve the component instances from the owning object by calling the `get()` function of the `ComponentManager` instance that manages your component type. For example:

~~~{lua}
local score = PlayerScore.manager:get(player)
~~~

## Cleaning up components

When you are done with an object's components, you can clean them up by calling the `Appkit.ComponentManager.remove_components()` function.

~~~{lua}
Appkit.ComponentManager.remove_components(player)
player = nil
~~~
