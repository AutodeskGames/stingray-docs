# Change shading environment properties

This page describes your options for changing the properties of your shading environment, both in the Stingray Editor and dynamically in the game at runtime.

## Property Editor

Select the shading environment entity in the ~{ Explorer panel }~ and change its properties in the ~{ Property Editor }~. Your changes are applied immediately in the editor, and are saved when you save your level.

## Story Editor

You can use the **Story Editor** to create a story that animates the properties of your level's shading environment. You can key different properties over time in order to simulate different scenarios or effects like changing times of day, or changing locations. When you play your story at runtime by triggering it in your Flow or Lua gameplay code, you'll see your shading environment adjust itself accordingly.

See ~{ Animate a shading environment with the Story Editor }~.

> **Note:** Adjusting these options does not change the rendering in the ~{ Asset Preview }~  window.

## Lua

You can retrieve your level's shading environment entity and change its properties in your runtime Lua code. For example, the following code shows how to set a new value to the Exposure property:

~~~{lua}
local data_component_manager = stingray.EntityManager.render_data_component(SimpleProject.world)
local all_entity_handles = stingray.World.entities(SimpleProject.world)

-- iterate through all entities in the world.
for _, entity_handle in ipairs(all_entity_handles) do

  -- the shading environment is a render data component, so we retrieve all render data components
  -- owned by this entity and iterate through them.
  -- instances() returns the values on the stack, so we wrap the call in {} to get an array.
  local all_data_component_handles = {stingray.RenderDataComponent.instances(data_component_manager, entity_handle)}
  for _, data_component_handle in ipairs(all_data_component_handles) do

    -- Test whether or not this data component is the shading environment component
	-- that we want to modify.
    -- Missing properties return nil, so this is "safe".
    local shading_environment_mapping_resource_name = stingray.RenderDataComponent.get_property(data_component_manager, data_component_handle, {"shading_environment_mapping"})
    if shading_environment_mapping_resource_name == "core/stingray_renderer/shading_environment_components/exposure" then
      if (shading_env_entity == nil) then
	    -- remember the shading environment entity.
        shading_env_entity = entity_handle
      end
      exposure_component = data_component_handle;
	  -- now we have the shading environment entity and the component, we can set the
	  -- value we want for the property.
	  stingray.RenderDataComponent.set_property(data_component_manager, exposure_component, {"exposure"}, exposure_val)
	end
  end
end
~~~

The names you use to access the various properties are determined by resource mapping files, which you can find under `core/stingray_renderer/shading_environment_components` in the core resources folder. Open the mapping file that corresponds to the component of the shading environment, and look for the name of the key that corresponds to the property you want to set.

---
Related topics:
-	~{ Shading environment properties }~

---
