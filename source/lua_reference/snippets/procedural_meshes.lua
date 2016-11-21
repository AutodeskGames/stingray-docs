-- @adoc lua
-- @exa ex_snippets.proc_meshes Creating meshes procedurally
-- @des This example shows how to use the [stingray.ProceduralMesh] interface to create meshes
-- on the fly:
--
-- ![Procedural meshes](images/procedural_meshes.gif)
--
-- To use this code in a project, first save it in a `.lua` file in your project. Then, in one of your
-- project scripts, require the file and cache its return in a local variable:
--
-- ~~~lua
-- local proc_mesh_controller = require 'script/lua/proc_mesh_controller'
-- ~~~
-- 
-- You have to call three functions on this variable:
--
-- -	`proc_mesh_controller:start()`: call this when a level is first loaded. If you're using the Appkit,
-- 		you can do it in the `Project.on_level_load_pre_flow()` function.
--
-- -	`proc_mesh_controller:update(dt)`: call this each frame, and pass the delta time since the last frame. If you're using the Appkit,
-- 		you can do it in the `Project.update(dt)` function.
--
-- -	`proc_mesh_controller:shutdown()`: call this when your level is unloaded. If you're using the Appkit,
-- 		you can do it in the `Project.on_level_shutdown_post_flow()` function.

require('core/appkit/lua/class')

ProcMeshController = Appkit.class(ProcMeshController)
local M = ProcMeshController

Vector3ArrayClass = Appkit.class(Vector3ArrayClass)
local Vector3Array = Vector3ArrayClass

function Vector3Array:init()
	self.x = stingray.Float32Array()
	self.y = stingray.Float32Array()
	self.z = stingray.Float32Array()
end

function Vector3Array.splat(f)
	local res = Vector3Array()
	res.x = f
	res.y = f
	res.z = f
	return res
end

function Vector3Array:push(v)
	self.x:push(v.x)
	self.y:push(v.y)
	self.z:push(v.z)
end

function Vector3Array.add(a,b)
	local res = Vector3Array()
	res.x = stingray.Float32Array.add(a.x, b.x)
	res.y = stingray.Float32Array.add(a.y, b.y)
	res.z = stingray.Float32Array.add(a.z, b.z)
	return res
end

function Vector3Array.__add(a,b) return Vector3Array.add(a,b) end

function Vector3Array.sub(a,b)
	local res = Vector3Array()
	res.x = stingray.Float32Array.sub(a.x, b.x)
	res.y = stingray.Float32Array.sub(a.y, b.y)
	res.z = stingray.Float32Array.sub(a.z, b.z)
	return res
end

function Vector3Array.__sub(a,b) return Vector3Array.sub(a,b) end

function Vector3Array.mul(a,b)
	local res = Vector3Array()
	res.x = stingray.Float32Array.mul(a.x, b.x)
	res.y = stingray.Float32Array.mul(a.y, b.y)
	res.z = stingray.Float32Array.mul(a.z, b.z)
	return res
end

function Vector3Array.__mul(a,b) return Vector3Array.mul(a,b) end

function Vector3Array.div(a,b)
	local res = Vector3Array()
	res.x = stingray.Float32Array.div(a.x, b.x)
	res.y = stingray.Float32Array.div(a.y, b.y)
	res.z = stingray.Float32Array.div(a.z, b.z)
	return res
end

function Vector3Array.__div(a,b) return Vector3Array.div(a,b) end

function Vector3Array.__unm(a)
	local res = Vector3Array()
	res.x = -a.x
	res.y = -a.y
	res.z = -a.z
	return res
end

function Vector3Array.__div(a,b) return Vector3Array.div(a,b) end

function Vector3Array.length(a)
	return stingray.Float32Array.sqrt(a.x*a.x + a.y*a.y + a.z*a.z)
end

function Vector3Array.cross(a,b)
	local res = Vector3Array()
	res.x = (a.y*b.z)-(a.z*b.y)
	res.y = (a.z*b.x)-(a.x*b.z)
	res.z = (a.x*b.y)-(a.y*b.x)
	return res
end

function Vector3Array.interleave(arrays)
	local t = {}
	for _,a in ipairs(arrays) do
		t[#t+1] = a.x
		t[#t+1] = a.y
		t[#t+1] = a.z
	end
	return stingray.Float32Array.interleave(t)
end

local function append_v3(buffer, ...)
	local nb = #buffer
	local n = select('#', ...)
	for i=1,n do
		local v = select(i, ...)
		buffer[nb + (i-1)*3 + 1] = v.x
		buffer[nb + (i-1)*3 + 2] = v.y
		buffer[nb + (i-1)*3 + 3] = v.z
	end
end

local function append_f(buffer, ...)
	local nb = #buffer
	local n = select('#', ...)
	for i=1,n do
		buffer[nb + i] = select(i, ...)
	end
end

local function extruded_triangle(iterations, v1, v2, v3, vbuffer, ibuffer, ignorebase)
	local n = stingray.Vector3.normalize(stingray.Vector3.cross(v2-v1, v3-v1))
	if iterations == 0 then
		local i = #vbuffer / 6
		append_v3(vbuffer, v1, n, v2, n, v3, n)
		append_f(ibuffer, i, i+1, i+2)
	else
		local v4 = (v1 + v2) / 2
		local v5 = (v2 + v3) / 2
		local v6 = (v3 + v1) / 2
		local a = stingray.Vector3.length(v2-v1) / 2
		local h = a * math.sqrt(6) / 3
		local v7 = (v1 + v2 + v3) / 3 + n * h / 2
		if not ignorebase then
			extruded_triangle(iterations-1, v1, v4, v6, vbuffer, ibuffer)
			extruded_triangle(iterations-1, v4, v2, v5, vbuffer, ibuffer)
			extruded_triangle(iterations-1, v6, v5, v3, vbuffer, ibuffer)
		end

		extruded_triangle(iterations-1, v7, v6, v4, vbuffer, ibuffer)
		extruded_triangle(iterations-1, v7, v4, v5, vbuffer, ibuffer)
		extruded_triangle(iterations-1, v7, v5, v6, vbuffer, ibuffer)
	end
end

local function menger_sponge(iterations, vmin, vmax, vbuffer, ibuffer)
	local bc = stingray.Script.temp_byte_count()
	if iterations == 0 then
		local i = #vbuffer / 6
		local v1 = vmin
		local v2 = stingray.Vector3(vmax.x, vmin.y, vmin.z)
		local v3 = stingray.Vector3(vmin.x, vmax.y, vmin.z)
		local v4 = stingray.Vector3(vmax.x, vmax.y, vmin.z)
		local v5 = stingray.Vector3(vmin.x, vmin.y, vmax.z)
		local v6 = stingray.Vector3(vmax.x, vmin.y, vmax.z)
		local v7 = stingray.Vector3(vmin.x, vmax.y, vmax.z)
		local v8 = vmax
		local x = stingray.Vector3(1,0,0)
		local y = stingray.Vector3(0,1,0)
		local z = stingray.Vector3(0,0,1)

		append_v3(vbuffer,
			v1, -y, v2, -y, v6, -y, v5, -y,
			v4, y, v3, y, v7, y, v8, y,
			v2, x, v4, x, v8, x, v6, x,
			v3, -x, v1, -x, v5, -x, v7, -x,
			v3, -z, v4, -z, v2, -z, v1, -z,
			v5, z, v6, z, v8, z, v7, z
		)
		append_f(ibuffer, i, i+1, i+2, i, i+2, i+3) i = i + 4
		append_f(ibuffer, i, i+1, i+2, i, i+2, i+3) i = i + 4
		append_f(ibuffer, i, i+1, i+2, i, i+2, i+3) i = i + 4
		append_f(ibuffer, i, i+1, i+2, i, i+2, i+3) i = i + 4
		append_f(ibuffer, i, i+1, i+2, i, i+2, i+3) i = i + 4
		append_f(ibuffer, i, i+1, i+2, i, i+2, i+3) i = i + 4
	else
		for x = 1,3 do
			for y = 1,3 do
				for z = 1,3 do
					if (x ~= 2 and y ~= 2) or (y ~= 2 and z ~= 2) or (x ~= 2 and z ~= 2) then
						local d = (vmax - vmin)/3
						local xyz = stingray.Vector3(x, y, z)
						menger_sponge(iterations-1,
							vmin + stingray.Vector3.multiply_elements(xyz - stingray.Vector3(1,1,1), d),
							vmin + stingray.Vector3.multiply_elements(xyz, d),
							vbuffer, ibuffer)
					end
				end
			end
		end
	end
	stingray.Script.set_temp_byte_count(bc)
end

local function make_sphere_points(N)
	local sphere = {n = Vector3Array()}

	local a = 4 * math.pi / N
	local d = math.sqrt(a)
	local M_theta = math.floor(math.pi / d + 0.5)
	local d_theta = math.pi / M_theta
	local d_phi = a / d_theta
	for m = 0,M_theta-1 do
		local theta = math.pi * (m + 0.5) / M_theta
		local M_phi = math.floor(2*math.pi*math.sin(theta)/d_phi + 0.5)
		for n = 0,M_phi-1 do
			local phi = 2 * math.pi * n / M_phi
			local x = math.sin(theta) * math.cos(phi)
			local y = math.sin(theta) * math.sin(phi)
			local z = math.cos(theta)
			local n = stingray.Vector3(x, y, z)
			sphere.n:push(n)
		end
	end

	sphere.u = Vector3Array.sub( stingray.Vector3(0,0,1), sphere.n * Vector3Array.splat(sphere.n.z) )
	sphere.u = sphere.u / Vector3Array.splat(Vector3Array.length(sphere.u))
	sphere.r = Vector3Array.cross(sphere.n, sphere.u)

	return sphere
end

local function make_patch_sphere(sphere_points, r, d, vbuffer, ibuffer)
	local pos = sphere_points.n * stingray.Vector3(r,r,r)
	local x = sphere_points.u
	local y = sphere_points.r
	local z = sphere_points.n
	local rx = stingray.Vector3(d,d,d)
	local ry = stingray.Vector3(d,d,d)
	local rz = stingray.Vector3(d,d,d)*0.1

	local v1 = pos - x*rx - y*ry - z*rz
	local v2 = pos + x*rx - y*ry - z*rz
	local v3 = pos - x*rx + y*ry - z*rz
	local v4 = pos + x*rx + y*ry - z*rz
	local v5 = pos - x*rx - y*ry + z*rz
	local v6 = pos + x*rx - y*ry + z*rz
	local v7 = pos - x*rx + y*ry + z*rz
	local v8 = pos + x*rx + y*ry + z*rz

	local interleaved = Vector3Array.interleave(
		{v1, -y, v2, -y, v6, -y, v5, -y,
		v4, y, v3, y, v7, y, v8, y,
		v2, x, v4, x, v8, x, v6, x,
		v3, -x, v1, -x, v5, -x, v7, -x,
		v3, -z, v4, -z, v2, -z, v1, -z,
		v5, z, v6, z, v8, z, v7, z}
	)
	stingray.Float32Array.swap(vbuffer, interleaved)

	if ibuffer then
		local count = #sphere_points.n.x
		ibuffer:resize(0)
		for n=0,count-1 do
			local i = 24*n
			ibuffer:push(i, i+1, i+2, i, i+2, i+3) i = i + 4
			ibuffer:push(i, i+1, i+2, i, i+2, i+3) i = i + 4
			ibuffer:push(i, i+1, i+2, i, i+2, i+3) i = i + 4
			ibuffer:push(i, i+1, i+2, i, i+2, i+3) i = i + 4
			ibuffer:push(i, i+1, i+2, i, i+2, i+3) i = i + 4
			ibuffer:push(i, i+1, i+2, i, i+2, i+3) i = i + 4
		end
	end
end

function M:shutdown()
	for _,mesh in ipairs(self.meshes) do
		self:destroy_procmesh(mesh)
	end
end

function M:start()

	self.spinning_units = {}
	self.meshes = {}

	local make_menger_sponge = function(pos, iter)
		local vbuffer = {}
		local ibuffer = {}
		local s = 1
		menger_sponge(iter, stingray.Vector3(-s,-s,0), stingray.Vector3(s,s,2*s), vbuffer, ibuffer)

		local unit = stingray.World.spawn_unit(stingray.Application.main_world(), "core/units/camera", pos)
		local mesh = self:make_procmesh(unit, "rp_root", vbuffer, ibuffer)

		table.insert(self.spinning_units, unit)
		table.insert(self.meshes, mesh)
	end

	make_menger_sponge(stingray.Vector3(-4,-6,1), 0)
	make_menger_sponge(stingray.Vector3(-4,-2,1), 1)
	make_menger_sponge(stingray.Vector3(-4, 2,1), 2)
	make_menger_sponge(stingray.Vector3(-4, 6,1), 3)

	self.sphere_points = make_sphere_points(300, self.sphere_points)
	local vbuffer = stingray.Float32Array()
	local ibuffer = stingray.Float32Array()
	make_patch_sphere(self.sphere_points, 3, 0.2, vbuffer, ibuffer)
	local unit = stingray.World.spawn_unit(stingray.Application.main_world(), "core/units/camera", stingray.Vector3(-10, 0, 5))
	self.sphere = self:make_procmesh(unit, "rp_root", vbuffer, ibuffer, {vertex_buffer_validity = stingray.RenderBuffer.RB_VALIDITY_UPDATABLE})
	table.insert(self.spinning_units, unit)
	table.insert(self.meshes, self.sphere)
end

function M:make_procmesh(unit, node, vertices, indices, options)
	local t = {}
	options = options or {}
	local xyz32 = stingray.RenderBuffer.format(stingray.RenderBuffer.RB_FLOAT_COMPONENT, true, false, 32, 32, 32, 0)
	local channels = {
		{format = xyz32, semantic = stingray.RenderBuffer.RB_POSITION_SEMANTIC, vb_index = 0, set = 0, instance = false},
		{format = xyz32, semantic = stingray.RenderBuffer.RB_NORMAL_SEMANTIC, vb_index = 0, set = 0, instance = false}
	}
	t.vdecl = stingray.RenderBuffer.create_description(stingray.RenderBuffer.RB_VERTEX_DESCRIPTION, channels)
	local a = 20
	local R = a * math.sqrt(3) / 3
	local r = R / 2
	
	t.vbuffer = stingray.RenderBuffer.create_buffer(options.vertex_buffer_validity or stingray.RenderBuffer.RB_VALIDITY_STATIC,
		stingray.RenderBuffer.RB_VERTEX_BUFFER_VIEW, 6*4, vertices)
	t.ibuffer = stingray.RenderBuffer.create_buffer(stingray.RenderBuffer.RB_VALIDITY_STATIC,
		stingray.RenderBuffer.RB_INDEX_BUFFER_VIEW, 4, indices)

	t.mesh = stingray.ProceduralMesh.create(unit, node, "procedural-mesh", stingray.ProceduralMesh.MO_VIEWPORT_VISIBLE_FLAG + stingray.ProceduralMesh.MO_SHADOW_CASTER_FLAG)
	
	stingray.ProceduralMesh.set_bounding_box(t.mesh, stingray.Vector3(-100, -100, -100), stingray.Vector3(100, 100, 100))
	local batches = {{
		primitive_type = stingray.ProceduralMesh.MO_TRIANGLE_LIST,
		material_index = 0,
		vertex_offset = 0,
		primitives = #indices / 3,
		index_offset = 0,
		vertices = 0,
		instances = 1
	}}
	stingray.ProceduralMesh.set_batch_info(t.mesh, batches)
	stingray.ProceduralMesh.add_resource(t.mesh, t.vdecl)
	stingray.ProceduralMesh.add_resource(t.mesh, t.vbuffer)
	stingray.ProceduralMesh.add_resource(t.mesh, t.ibuffer)

	stingray.ProceduralMesh.set_materials(t.mesh, {"core/stingray_renderer/shader_import/no_uvs"})
	return t
end

function M:destroy_procmesh(t)
	stingray.ProceduralMesh.destroy(t.mesh)

	stingray.RenderBuffer.destroy_buffer(t.ibuffer)
	stingray.RenderBuffer.destroy_buffer(t.vbuffer)
	stingray.RenderBuffer.destroy_description(t.vdecl)
end

function M:update(dt)

	self.t = (self.t or 0) + dt
	local rot = stingray.Quaternion.axis_angle(stingray.Vector3(0,0,1), self.t/2)
	for _,unit in ipairs(self.spinning_units) do
		stingray.Unit.set_local_rotation(unit, 1, rot)
	end

	if self.sphere then
		self.sphere_vbuffer = self.sphere_vbuffer or stingray.Float32Array()
		self.sphere_vbuffer:resize(0)
		make_patch_sphere(self.sphere_points, 1.8 + (math.sin(self.t*4)+1)*1.5, 0.2, self.sphere_vbuffer, nil)
		stingray.RenderBuffer.update_buffer(self.sphere.vbuffer, stingray.RenderBuffer.RB_FLOAT_COMPONENT, self.sphere_vbuffer)
	end

end

return M

-- @adoc lua
-- @exa ex_snippets.proc_meshes Creating meshes procedurally
