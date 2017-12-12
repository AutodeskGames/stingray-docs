var version_diff_engine_c_Release_1_9 = {
  "class":[],
  "func":[{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"classstingray__plugin__foundation_1_1_hash_map_1a4ad040577d0e5f5ce01dba14a1d36c1f\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"hash__map_8h.html#line_122\">stingray_plugin_foundation::HashMap::allocate_data</a></span>",
      "version":"Release 1.9",
      "name":"classstingray__plugin__foundation_1_1_hash_map_1a4ad040577d0e5f5ce01dba14a1d36c1f"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"structstingray__plugin__foundation_1_1_scene_database_1aa2b4b53d1fa05589a425752ef99252aa\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"scene__tree_8h.html#line_470\">stingray_plugin_foundation::SceneDatabase::find_geometry</a></span>",
      "version":"Release 1.9",
      "name":"structstingray__plugin__foundation_1_1_scene_database_1aa2b4b53d1fa05589a425752ef99252aa"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"classstingray__plugin__foundation_1_1_hash_set_1af7361a6e97dc2c32a6652c141e27f782\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"hash__set_8h.html#line_69\">stingray_plugin_foundation::HashSet::allocate_data</a></span>",
      "version":"Release 1.9",
      "name":"classstingray__plugin__foundation_1_1_hash_set_1af7361a6e97dc2c32a6652c141e27f782"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"structstingray__plugin__foundation_1_1_node_1a544eebe059ee540a511a4616d7bc77ae\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"scene__tree_8h.html#line_103\">stingray_plugin_foundation::Node::swap</a></span>",
      "version":"Release 1.9",
      "name":"structstingray__plugin__foundation_1_1_node_1a544eebe059ee540a511a4616d7bc77ae"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"structstingray__plugin__foundation_1_1_hash_set_1_1_data_1aa1bf1baa517ce1dfb39af35146c2040d\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"hash__set_8h.html#line_75\">stingray_plugin_foundation::HashSet::Data::Data</a></span>",
      "version":"Release 1.9",
      "name":"structstingray__plugin__foundation_1_1_hash_set_1_1_data_1aa1bf1baa517ce1dfb39af35146c2040d"
    },{
      "change":"modified",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"classstingray__plugin__foundation_1_1_dynamic_string_1a15e9aeadf96808f3e0384a9e88fb8e6f\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"string_8h.html#line_119\">stingray_plugin_foundation::DynamicString::DynamicString</a></span>",
      "details":"<div><div class='code' style='display:inline-block'>stingray_plugin_foundation::DynamicString::DynamicString(Allocator &amp;a)</div></div><div><div class='code' style='display:inline-block'>stingray_plugin_foundation::DynamicString::DynamicString(Allocator &amp;a, const char *s)</div></div><div><div class='code' style='display:inline-block'>stingray_plugin_foundation::DynamicString::DynamicString(Allocator &amp;a, const char *s, unsigned n)</div></div><div><div class='code version-added-inner' style='display:inline-block'>stingray_plugin_foundation::DynamicString::DynamicString(const DynamicString &amp;o)</div></div>",
      "version":"Release 1.9",
      "name":"classstingray__plugin__foundation_1_1_dynamic_string_1a15e9aeadf96808f3e0384a9e88fb8e6f"
    },{
      "change":"modified",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"namespacestingray__plugin__foundation_1a0786d1d95b95044454656d51b0d07de6\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"scene__tree__api__convert_8inl.html#line_466\">stingray_plugin_foundation::to_plugin</a></span>",
      "details":"<div><div class='code version-removed-inner' style='display:inline-block'>__forceinline void stingray_plugin_foundation::to_plugin(SDB_Geometry &amp;dest, const Geometry &amp;source, const char *name, Allocator &amp;a)</div></div><div><div class='code version-removed-inner' style='display:inline-block'>__forceinline void stingray_plugin_foundation::to_plugin(SDB_SurfaceMaterialProperty &amp;dest, const SurfaceMaterial::Property &amp;source, const char *name, Allocator &amp;a)</div></div><div><div class='code' style='display:inline-block'>__forceinline void stingray_plugin_foundation::to_plugin(const char *&amp;dest, const DynamicString &amp;source)</div></div><div><div class='code' style='display:inline-block'>__forceinline void stingray_plugin_foundation::to_plugin(SDB_StringList &amp;dest, const Vector&lt; DynamicString &gt; &amp;source, Allocator &amp;a)</div></div><div><div class='code' style='display:inline-block'>__forceinline void stingray_plugin_foundation::to_plugin(SDB_Channel &amp;dest, const Stream::Channel &amp;source, Allocator &amp;a)</div></div><div><div class='code' style='display:inline-block'>__forceinline void stingray_plugin_foundation::to_plugin(SDB_Stream &amp;dest, const Stream &amp;source, Allocator &amp;a)</div></div><div><div class='code' style='display:inline-block'>__forceinline void stingray_plugin_foundation::to_plugin(SDB_Node &amp;dest, const Node &amp;source, const char *name, Allocator &amp;a)</div></div><div><div class='code' style='display:inline-block'>__forceinline void stingray_plugin_foundation::to_plugin(SDB_IndicesStream &amp;dest, const Indices::Stream &amp;source, Allocator &amp;a)</div></div><div><div class='code' style='display:inline-block'>__forceinline void stingray_plugin_foundation::to_plugin(SDB_Indices &amp;dest, const Indices &amp;source, Allocator &amp;a)</div></div><div><div class='code' style='display:inline-block'>__forceinline void stingray_plugin_foundation::to_plugin(SDB_Joint &amp;dest, const Skin::Joint &amp;source, Allocator &amp;a)</div></div><div><div class='code' style='display:inline-block'>__forceinline void stingray_plugin_foundation::to_plugin(SDB_Skin &amp;dest, const Skin &amp;source, const char *name, Allocator &amp;a)</div></div><div><div class='code' style='display:inline-block'>__forceinline void stingray_plugin_foundation::to_plugin(SDB_GeometryInstance &amp;dest, const GeometryInstance &amp;source, const char *name, Allocator &amp;a)</div></div><div><div class='code' style='display:inline-block'>__forceinline void stingray_plugin_foundation::to_plugin(SDB_GeometryMaterial &amp;dest, const Geometry::Material &amp;source, Allocator &amp;a)</div></div><div><div class='code' style='display:inline-block'>__forceinline void stingray_plugin_foundation::to_plugin(SDB_GeometryBlendShapeTarget &amp;dest, const Geometry::BlendShapeTarget &amp;source, Allocator &amp;a)</div></div><div><div class='code version-added-inner' style='display:inline-block'>__forceinline void stingray_plugin_foundation::to_plugin(SDB_Geometry &amp;dest, const Geometry &amp;source, Allocator &amp;a)</div></div><div><div class='code' style='display:inline-block'>__forceinline void stingray_plugin_foundation::to_plugin(SDB_Light &amp;dest, const Light &amp;source, const char *name, Allocator &amp;a)</div></div><div><div class='code' style='display:inline-block'>__forceinline void stingray_plugin_foundation::to_plugin(SDB_Camera &amp;dest, const Camera &amp;source, const char *name, Allocator &amp;a)</div></div><div><div class='code' style='display:inline-block'>__forceinline void stingray_plugin_foundation::to_plugin(SDB_Animation &amp;dest, const Animation &amp;source, Allocator &amp;a)</div></div><div><div class='code' style='display:inline-block'>__forceinline void stingray_plugin_foundation::to_plugin(SDB_AnimationTake &amp;dest, const AnimationTake &amp;source, const char *name, Allocator &amp;a)</div></div><div><div class='code version-added-inner' style='display:inline-block'>__forceinline void stingray_plugin_foundation::to_plugin(SDB_SurfaceMaterialProperty &amp;dest, const SurfaceMaterial::Property &amp;source, Allocator &amp;a)</div></div><div><div class='code' style='display:inline-block'>__forceinline void stingray_plugin_foundation::to_plugin(SDB_SurfaceMaterial &amp;dest, const SurfaceMaterial &amp;source, const char *name, Allocator &amp;a)</div></div><div><div class='code' style='display:inline-block'>__forceinline void stingray_plugin_foundation::to_plugin(SDB_Texture &amp;dest, const Texture &amp;source, const char *name, Allocator &amp;a)</div></div><div><div class='code' style='display:inline-block'>__forceinline void stingray_plugin_foundation::to_plugin(SDB_LevelOfDetailStep &amp;dest, const LevelOfDetail::Step &amp;source, Allocator &amp;a)</div></div><div><div class='code' style='display:inline-block'>__forceinline void stingray_plugin_foundation::to_plugin(SDB_LevelOfDetail &amp;dest, const LevelOfDetail &amp;source, const char *name, Allocator &amp;a)</div></div><div><div class='code' style='display:inline-block'>__forceinline void stingray_plugin_foundation::to_plugin(SDB_SceneImportOptions &amp;dest, const SceneImportOptions &amp;source)</div></div><div><div class='code' style='display:inline-block'>__forceinline void stingray_plugin_foundation::to_plugin(SDB_Properties &amp;dest, const SceneDatabase::Properties &amp;source, Allocator &amp;a)</div></div><div><div class='code' style='display:inline-block'>__forceinline void stingray_plugin_foundation::to_plugin(SDB_SceneDatabase &amp;dest, const SceneDatabase &amp;source, Allocator &amp;a)</div></div>",
      "version":"Release 1.9",
      "name":"namespacestingray__plugin__foundation_1a0786d1d95b95044454656d51b0d07de6"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"classstingray__plugin__foundation_1_1_hash_map_1ad0be0a87f3b0066e5da2c40bf654632a\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"hash__map_8h.html#line_64\">stingray_plugin_foundation::HashMap::~HashMap</a></span>",
      "version":"Release 1.9",
      "name":"classstingray__plugin__foundation_1_1_hash_map_1ad0be0a87f3b0066e5da2c40bf654632a"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"classstingray__plugin__foundation_1_1_hash_map_1a1fbd1e74b1393da5d8451aa1445c6991\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"hash__map_8h.html#line_86\">stingray_plugin_foundation::HashMap::get_pair</a></span>",
      "version":"Release 1.9",
      "name":"classstingray__plugin__foundation_1_1_hash_map_1a1fbd1e74b1393da5d8451aa1445c6991"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"namespacestingray__plugin__foundation_1ab5cb730a9dc30185515b8e1bd9036b43\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"array_8inl.html#line_184\">stingray_plugin_foundation::raw_array_serialize</a></span>",
      "version":"Release 1.9",
      "name":"namespacestingray__plugin__foundation_1ab5cb730a9dc30185515b8e1bd9036b43"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"structstingray__plugin__foundation_1_1default__hash_3_01_t_01_5_01_4_1a70d2064d2ecf3f6c60ccdc9db2fb7f90\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"hash__function_8h.html#line_119\">stingray_plugin_foundation::default_hash< T * >::operator()</a></span>",
      "version":"Release 1.9",
      "name":"structstingray__plugin__foundation_1_1default__hash_3_01_t_01_5_01_4_1a70d2064d2ecf3f6c60ccdc9db2fb7f90"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"structstingray__plugin__foundation_1_1_hash_map_1_1_data_1a2fab3c7f705a8778605792717c0aadef\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"hash__map_8h.html#line_127\">stingray_plugin_foundation::HashMap::Data::Data</a></span>",
      "version":"Release 1.9",
      "name":"structstingray__plugin__foundation_1_1_hash_map_1_1_data_1a2fab3c7f705a8778605792717c0aadef"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"namespacestingray__plugin__foundation_1a1d394b8366f8978550b86bfed04d41cc\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"hash__function_8h.html#line_98\">stingray_plugin_foundation::eight_byte_hash_64</a></span>",
      "version":"Release 1.9",
      "name":"namespacestingray__plugin__foundation_1a1d394b8366f8978550b86bfed04d41cc"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"structstingray__plugin__foundation_1_1default__hash_3_01uint64__t_01_4_1a474fb5ced51ae08d7701ad8801331f29\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"hash__function_8h.html#line_153\">stingray_plugin_foundation::default_hash< uint64_t >::operator()</a></span>",
      "version":"Release 1.9",
      "name":"structstingray__plugin__foundation_1_1default__hash_3_01uint64__t_01_4_1a474fb5ced51ae08d7701ad8801331f29"
    },{
      "change":"modified",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"structstingray__plugin__foundation_1_1default__hash_1ae2d6564d8c045903283b486098a77858\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"hash__function_8h.html#line_114\">stingray_plugin_foundation::default_hash::operator()</a></span>",
      "details":"<div><div class='code version-removed-inner' style='display:inline-block'>unsigned stingray_plugin_foundation::default_hash::operator()(unsigned t) const</div></div><div><div class='code version-removed-inner' style='display:inline-block'>unsigned stingray_plugin_foundation::default_hash::operator()(int t) const</div></div><div><div class='code version-removed-inner' style='display:inline-block'>unsigned stingray_plugin_foundation::default_hash::operator()(void *t) const</div></div><div><div class='code version-removed-inner' style='display:inline-block'>unsigned stingray_plugin_foundation::default_hash::operator()(const void *t) const</div></div><div><div class='code version-removed-inner' style='display:inline-block'>unsigned stingray_plugin_foundation::default_hash::operator()(uint64_t t) const</div></div><div><div class='code version-removed-inner' style='display:inline-block'>unsigned stingray_plugin_foundation::default_hash::operator()(int64_t t) const</div></div><div><div class='code version-added-inner' style='display:inline-block'>unsigned stingray_plugin_foundation::default_hash&lt; T &gt;::operator()(T t) const</div></div>",
      "version":"Release 1.9",
      "name":"structstingray__plugin__foundation_1_1default__hash_1ae2d6564d8c045903283b486098a77858"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"structstingray__plugin__foundation_1_1default__hash_3_01const_01_t_01_5_01_4_1a2836a803720320b7bf7b97506a698302\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"hash__function_8h.html#line_131\">stingray_plugin_foundation::default_hash< const T * >::operator()</a></span>",
      "version":"Release 1.9",
      "name":"structstingray__plugin__foundation_1_1default__hash_3_01const_01_t_01_5_01_4_1a2836a803720320b7bf7b97506a698302"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"classstingray__plugin__foundation_1_1_hash_set_1a9e672f1e9dc539225d2cc6f3cf9634d2\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"hash__set_8h.html#line_72\">stingray_plugin_foundation::HashSet::destruct</a></span>",
      "version":"Release 1.9",
      "name":"classstingray__plugin__foundation_1_1_hash_set_1a9e672f1e9dc539225d2cc6f3cf9634d2"
    },{
      "change":"modified",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"scene__tree__api__convert_8inl_1a0295b928fea0c2350c02dcd2f43a0174\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"scene__tree__api__convert_8inl.html#line_465\">to_plugin</a></span>",
      "details":"<div><div class='code version-removed-inner' style='display:inline-block'>__forceinline void to_plugin(SDB_Geometry &amp;dest, const Geometry &amp;source, const char *name, Allocator &amp;a)</div></div><div><div class='code version-removed-inner' style='display:inline-block'>__forceinline void to_plugin(SDB_SurfaceMaterialProperty &amp;dest, const SurfaceMaterial::Property &amp;source, const char *name, Allocator &amp;a)</div></div><div><div class='code' style='display:inline-block'>__forceinline void to_plugin(const char *&amp;dest, const DynamicString &amp;source)</div></div><div><div class='code' style='display:inline-block'>__forceinline void to_plugin(SDB_StringList &amp;dest, const Vector&lt; DynamicString &gt; &amp;source, Allocator &amp;a)</div></div><div><div class='code' style='display:inline-block'>__forceinline void to_plugin(SDB_Channel &amp;dest, const Stream::Channel &amp;source, Allocator &amp;a)</div></div><div><div class='code' style='display:inline-block'>__forceinline void to_plugin(SDB_Stream &amp;dest, const Stream &amp;source, Allocator &amp;a)</div></div><div><div class='code' style='display:inline-block'>__forceinline void to_plugin(SDB_Node &amp;dest, const Node &amp;source, const char *name, Allocator &amp;a)</div></div><div><div class='code' style='display:inline-block'>__forceinline void to_plugin(SDB_IndicesStream &amp;dest, const Indices::Stream &amp;source, Allocator &amp;a)</div></div><div><div class='code' style='display:inline-block'>__forceinline void to_plugin(SDB_Indices &amp;dest, const Indices &amp;source, Allocator &amp;a)</div></div><div><div class='code' style='display:inline-block'>__forceinline void to_plugin(SDB_Joint &amp;dest, const Skin::Joint &amp;source, Allocator &amp;a)</div></div><div><div class='code' style='display:inline-block'>__forceinline void to_plugin(SDB_Skin &amp;dest, const Skin &amp;source, const char *name, Allocator &amp;a)</div></div><div><div class='code' style='display:inline-block'>__forceinline void to_plugin(SDB_GeometryInstance &amp;dest, const GeometryInstance &amp;source, const char *name, Allocator &amp;a)</div></div><div><div class='code' style='display:inline-block'>__forceinline void to_plugin(SDB_GeometryMaterial &amp;dest, const Geometry::Material &amp;source, Allocator &amp;a)</div></div><div><div class='code' style='display:inline-block'>__forceinline void to_plugin(SDB_GeometryBlendShapeTarget &amp;dest, const Geometry::BlendShapeTarget &amp;source, Allocator &amp;a)</div></div><div><div class='code version-added-inner' style='display:inline-block'>__forceinline void to_plugin(SDB_Geometry &amp;dest, const Geometry &amp;source, Allocator &amp;a)</div></div><div><div class='code' style='display:inline-block'>__forceinline void to_plugin(SDB_Light &amp;dest, const Light &amp;source, const char *name, Allocator &amp;a)</div></div><div><div class='code' style='display:inline-block'>__forceinline void to_plugin(SDB_Camera &amp;dest, const Camera &amp;source, const char *name, Allocator &amp;a)</div></div><div><div class='code' style='display:inline-block'>__forceinline void to_plugin(SDB_Animation &amp;dest, const Animation &amp;source, Allocator &amp;a)</div></div><div><div class='code' style='display:inline-block'>__forceinline void to_plugin(SDB_AnimationTake &amp;dest, const AnimationTake &amp;source, const char *name, Allocator &amp;a)</div></div><div><div class='code version-added-inner' style='display:inline-block'>__forceinline void to_plugin(SDB_SurfaceMaterialProperty &amp;dest, const SurfaceMaterial::Property &amp;source, Allocator &amp;a)</div></div><div><div class='code' style='display:inline-block'>__forceinline void to_plugin(SDB_SurfaceMaterial &amp;dest, const SurfaceMaterial &amp;source, const char *name, Allocator &amp;a)</div></div><div><div class='code' style='display:inline-block'>__forceinline void to_plugin(SDB_Texture &amp;dest, const Texture &amp;source, const char *name, Allocator &amp;a)</div></div><div><div class='code' style='display:inline-block'>__forceinline void to_plugin(SDB_LevelOfDetailStep &amp;dest, const LevelOfDetail::Step &amp;source, Allocator &amp;a)</div></div><div><div class='code' style='display:inline-block'>__forceinline void to_plugin(SDB_LevelOfDetail &amp;dest, const LevelOfDetail &amp;source, const char *name, Allocator &amp;a)</div></div><div><div class='code' style='display:inline-block'>__forceinline void to_plugin(SDB_SceneImportOptions &amp;dest, const SceneImportOptions &amp;source)</div></div><div><div class='code' style='display:inline-block'>__forceinline void to_plugin(SDB_Properties &amp;dest, const SceneDatabase::Properties &amp;source, Allocator &amp;a)</div></div><div><div class='code' style='display:inline-block'>__forceinline void to_plugin(SDB_SceneDatabase &amp;dest, const SceneDatabase &amp;source, Allocator &amp;a)</div></div>",
      "version":"Release 1.9",
      "name":"scene__tree__api__convert_8inl_1a0295b928fea0c2350c02dcd2f43a0174"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"structstingray__plugin__foundation_1_1_scene_database_1ab6593017f27d12ca9ca372e6199e8f4b\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"scene__tree_8h.html#line_476\">stingray_plugin_foundation::SceneDatabase::add_geometry</a></span>",
      "version":"Release 1.9",
      "name":"structstingray__plugin__foundation_1_1_scene_database_1ab6593017f27d12ca9ca372e6199e8f4b"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"structstingray__plugin__foundation_1_1default__hash_3_01int64__t_01_4_1a2408a2cceca2cb57440c7783408f08e4\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"hash__function_8h.html#line_158\">stingray_plugin_foundation::default_hash< int64_t >::operator()</a></span>",
      "version":"Release 1.9",
      "name":"structstingray__plugin__foundation_1_1default__hash_3_01int64__t_01_4_1a2408a2cceca2cb57440c7783408f08e4"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"structstingray__plugin__foundation_1_1default__hash_3_01unsigned_01_4_1a5f2aae5a2a248ab1e1dd55f1fbcb36c6\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"hash__function_8h.html#line_143\">stingray_plugin_foundation::default_hash< unsigned >::operator()</a></span>",
      "version":"Release 1.9",
      "name":"structstingray__plugin__foundation_1_1default__hash_3_01unsigned_01_4_1a5f2aae5a2a248ab1e1dd55f1fbcb36c6"
    },{
      "change":"modified",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"classstingray__plugin__foundation_1_1_dynamic_string_1a297963e8edba93fd93a88b6e3692d902\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"string_8h.html#line_161\">stingray_plugin_foundation::DynamicString::serialize</a></span>",
      "details":"<div><div class='code version-removed-inner' style='display:inline-block'>void stingray_plugin_foundation::DynamicString::serialize(STREAM &amp;a)</div></div><div><div class='code version-added-inner' style='display:inline-block'>void stingray_plugin_foundation::DynamicString::serialize(STREAM &amp;s)</div></div>",
      "version":"Release 1.9",
      "name":"classstingray__plugin__foundation_1_1_dynamic_string_1a297963e8edba93fd93a88b6e3692d902"
    },{
      "change":"modified",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"classstingray__plugin__foundation_1_1_array_1a0df35fc86fb6aa3e1333cf8f9ae612c0\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"array_8h.html#line_101\">stingray_plugin_foundation::Array::extend</a></span>",
      "details":"<div><div class='code version-removed-inner' style='display:inline-block'>void stingray_plugin_foundation::Array&lt; T &gt;::extend(unsigned elements)</div></div><div><div class='code version-added-inner' style='display:inline-block'>pointer stingray_plugin_foundation::Array&lt; T &gt;::extend(unsigned elements)</div></div><div><div class='code' style='display:inline-block'>reference stingray_plugin_foundation::Array&lt; T &gt;::extend()</div></div>",
      "version":"Release 1.9",
      "name":"classstingray__plugin__foundation_1_1_array_1a0df35fc86fb6aa3e1333cf8f9ae612c0"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"classstingray__plugin__foundation_1_1_hash_map_1ab8aa0f6639d09541c3eb0d42196e1ac1\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"hash__map_8h.html#line_124\">stingray_plugin_foundation::HashMap::destruct</a></span>",
      "version":"Release 1.9",
      "name":"classstingray__plugin__foundation_1_1_hash_map_1ab8aa0f6639d09541c3eb0d42196e1ac1"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"structstingray__plugin__foundation_1_1default__hash_3_01int_01_4_1a22af1caa992a2a0401837104a9da54fa\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"hash__function_8h.html#line_148\">stingray_plugin_foundation::default_hash< int >::operator()</a></span>",
      "version":"Release 1.9",
      "name":"structstingray__plugin__foundation_1_1default__hash_3_01int_01_4_1a22af1caa992a2a0401837104a9da54fa"
    },{
      "change":"modified",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"classstingray__plugin__foundation_1_1_array_1a8db397ee579a317944cb7a323c5a043f\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"id__string_8inl.html#line_84\">stingray_plugin_foundation::Array::serialize</a></span>",
      "details":"<div><div class='code' style='display:inline-block'>void stingray_plugin_foundation::Array&lt; T &gt;::serialize(STREAM &amp;stream)</div></div><div><div class='code version-added-inner' style='display:inline-block'>void stingray_plugin_foundation::Array&lt; char &gt;::serialize(STREAM &amp;stream)</div></div><div><div class='code version-added-inner' style='display:inline-block'>void stingray_plugin_foundation::Array&lt; uint8_t &gt;::serialize(STREAM &amp;stream)</div></div><div><div class='code version-added-inner' style='display:inline-block'>void stingray_plugin_foundation::Array&lt; int8_t &gt;::serialize(STREAM &amp;stream)</div></div><div><div class='code version-added-inner' style='display:inline-block'>void stingray_plugin_foundation::Array&lt; uint16_t &gt;::serialize(STREAM &amp;stream)</div></div><div><div class='code version-added-inner' style='display:inline-block'>void stingray_plugin_foundation::Array&lt; int16_t &gt;::serialize(STREAM &amp;stream)</div></div><div><div class='code version-added-inner' style='display:inline-block'>void stingray_plugin_foundation::Array&lt; uint32_t &gt;::serialize(STREAM &amp;stream)</div></div><div><div class='code version-added-inner' style='display:inline-block'>void stingray_plugin_foundation::Array&lt; int32_t &gt;::serialize(STREAM &amp;stream)</div></div><div><div class='code version-added-inner' style='display:inline-block'>void stingray_plugin_foundation::Array&lt; int64_t &gt;::serialize(STREAM &amp;stream)</div></div><div><div class='code version-added-inner' style='display:inline-block'>void stingray_plugin_foundation::Array&lt; uint64_t &gt;::serialize(STREAM &amp;stream)</div></div><div><div class='code version-added-inner' style='display:inline-block'>void stingray_plugin_foundation::Array&lt; IdString64 &gt;::serialize(STREAM &amp;stream)</div></div><div><div class='code version-added-inner' style='display:inline-block'>void stingray_plugin_foundation::Array&lt; IdString32 &gt;::serialize(STREAM &amp;stream)</div></div>",
      "version":"Release 1.9",
      "name":"classstingray__plugin__foundation_1_1_array_1a8db397ee579a317944cb7a323c5a043f"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"classstingray__plugin__foundation_1_1_hash_set_1a9ecffbcae3675d93daa44245717fbb22\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"hash__set_8h.html#line_33\">stingray_plugin_foundation::HashSet::~HashSet</a></span>",
      "version":"Release 1.9",
      "name":"classstingray__plugin__foundation_1_1_hash_set_1a9ecffbcae3675d93daa44245717fbb22"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"classstingray__plugin__foundation_1_1_hash_set_1ae7efe6ab56fe8c8b26bcc1d8892468db\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"hash__set_8h.html#line_71\">stingray_plugin_foundation::HashSet::construct</a></span>",
      "version":"Release 1.9",
      "name":"classstingray__plugin__foundation_1_1_hash_set_1ae7efe6ab56fe8c8b26bcc1d8892468db"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"classstingray__plugin__foundation_1_1_dynamic_string_1a612cf321902d9f25ae8f311fb7c83fae\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"string_8h.html#line_176\">stingray_plugin_foundation::DynamicString::buffer</a></span>",
      "version":"Release 1.9",
      "name":"classstingray__plugin__foundation_1_1_dynamic_string_1a612cf321902d9f25ae8f311fb7c83fae"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"classstingray__plugin__foundation_1_1_hash_map_1a7dd68aad0d4421ddc508eeb8533dc0a0\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"hash__map_8h.html#line_123\">stingray_plugin_foundation::HashMap::construct</a></span>",
      "version":"Release 1.9",
      "name":"classstingray__plugin__foundation_1_1_hash_map_1a7dd68aad0d4421ddc508eeb8533dc0a0"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"classstingray__plugin__foundation_1_1_dynamic_string_1a419c688450f4b072296bc72e6c822436\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"string_8h.html#line_180\">stingray_plugin_foundation::DynamicString::empty_string</a></span>",
      "version":"Release 1.9",
      "name":"classstingray__plugin__foundation_1_1_dynamic_string_1a419c688450f4b072296bc72e6c822436"
    },{
      "change":"removed",
      "name":"structstingray__plugin__foundation_1_1_hash_map_1_1node__type_1a1bd681930416307e3733d8bca366352b",
      "version":"Release 1.9",
      "display_name":"stingray_plugin_foundation::HashMap::node_type::node_type"
    },{
      "change":"removed",
      "name":"structstingray__plugin__foundation_1_1_hash_set_1_1node__type__base_3_01_int2_type_3_01true_01_4_00_01_n_01_4_1afaad8f8924b5e3d5677a420dbf08e595",
      "version":"Release 1.9",
      "display_name":"stingray_plugin_foundation::HashSet::node_type_base< Int2Type< true >, N >::node_type_base"
    }],
  "example":[],
  "enumvalue":[{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"c__api__types_8h_1a02ad1c7cf791a069dd54e409f8db4790a221ee8497ecc840b96980d8769b73094\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__types_8h.html#line_622\">FLOW_ENTITY_TYPE</a></span>",
      "version":"Release 1.9",
      "name":"c__api__types_8h_1a02ad1c7cf791a069dd54e409f8db4790a221ee8497ecc840b96980d8769b73094"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"c__api__types_8h_1a02ad1c7cf791a069dd54e409f8db4790a5d993ec291ad5706e89f283626b92e77\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__types_8h.html#line_618\">FLOW_LIGHT_TYPE</a></span>",
      "version":"Release 1.9",
      "name":"c__api__types_8h_1a02ad1c7cf791a069dd54e409f8db4790a5d993ec291ad5706e89f283626b92e77"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"c__api__types_8h_1a02ad1c7cf791a069dd54e409f8db4790aee45a79c33c51b9d0418af2f1a50e81f\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__types_8h.html#line_612\">FLOW_BOOL_TYPE</a></span>",
      "version":"Release 1.9",
      "name":"c__api__types_8h_1a02ad1c7cf791a069dd54e409f8db4790aee45a79c33c51b9d0418af2f1a50e81f"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"c__api__types_8h_1a02ad1c7cf791a069dd54e409f8db4790aba5037ead10982db536ccba69a3a99c2\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__types_8h.html#line_617\">FLOW_CAMERA_TYPE</a></span>",
      "version":"Release 1.9",
      "name":"c__api__types_8h_1a02ad1c7cf791a069dd54e409f8db4790aba5037ead10982db536ccba69a3a99c2"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"c__api__types_8h_1a02ad1c7cf791a069dd54e409f8db4790a77bebfc1b71568c18b7d94991a8930df\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__types_8h.html#line_619\">FLOW_MESH_TYPE</a></span>",
      "version":"Release 1.9",
      "name":"c__api__types_8h_1a02ad1c7cf791a069dd54e409f8db4790a77bebfc1b71568c18b7d94991a8930df"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"c__api__types_8h_1a02ad1c7cf791a069dd54e409f8db4790ad8e766ac8ce9d9d1a8dbf5f39fc22df3\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__types_8h.html#line_608\">FLOW_ACTOR_TYPE</a></span>",
      "version":"Release 1.9",
      "name":"c__api__types_8h_1a02ad1c7cf791a069dd54e409f8db4790ad8e766ac8ce9d9d1a8dbf5f39fc22df3"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"plugin__api_8h_1a5cb53745aca31629409bf58816074278a2e1ed84728500275c5bce552ddc10303\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"plugin__api_8h.html#line_89\">PHYSICS_RUNTIME_COOKING_API_ID</a></span>",
      "version":"Release 1.9",
      "name":"plugin__api_8h_1a5cb53745aca31629409bf58816074278a2e1ed84728500275c5bce552ddc10303"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"c__api__types_8h_1a02ad1c7cf791a069dd54e409f8db4790ac157d7e883aba4b444f499639abd5372\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__types_8h.html#line_621\">FLOW_ID32_TYPE</a></span>",
      "version":"Release 1.9",
      "name":"c__api__types_8h_1a02ad1c7cf791a069dd54e409f8db4790ac157d7e883aba4b444f499639abd5372"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"c__api__types_8h_1a02ad1c7cf791a069dd54e409f8db4790a93692c03da2fc293ee1a64108c1c406d\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__types_8h.html#line_616\">FLOW_UNSIGNED_TYPE</a></span>",
      "version":"Release 1.9",
      "name":"c__api__types_8h_1a02ad1c7cf791a069dd54e409f8db4790a93692c03da2fc293ee1a64108c1c406d"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"c__api__types_8h_1a02ad1c7cf791a069dd54e409f8db4790aec0d1f0e10de2ebd63ec0a758b5d71c2\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__types_8h.html#line_611\">FLOW_FLOAT_TYPE</a></span>",
      "version":"Release 1.9",
      "name":"c__api__types_8h_1a02ad1c7cf791a069dd54e409f8db4790aec0d1f0e10de2ebd63ec0a758b5d71c2"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"c__api__types_8h_1a02ad1c7cf791a069dd54e409f8db4790adc662a3f6b3045061524457dd3c57f8e\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__types_8h.html#line_607\">FLOW_UNIT_TYPE</a></span>",
      "version":"Release 1.9",
      "name":"c__api__types_8h_1a02ad1c7cf791a069dd54e409f8db4790adc662a3f6b3045061524457dd3c57f8e"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"c__api__types_8h_1a02ad1c7cf791a069dd54e409f8db4790adbb72811e6c0b7eccaed3ac188b19593\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__types_8h.html#line_610\">FLOW_VECTOR3_TYPE</a></span>",
      "version":"Release 1.9",
      "name":"c__api__types_8h_1a02ad1c7cf791a069dd54e409f8db4790adbb72811e6c0b7eccaed3ac188b19593"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"c__api__types_8h_1a02ad1c7cf791a069dd54e409f8db4790a6325bf440e921736c9a8ec3b15c12b96\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__types_8h.html#line_614\">FLOW_ID64_TYPE</a></span>",
      "version":"Release 1.9",
      "name":"c__api__types_8h_1a02ad1c7cf791a069dd54e409f8db4790a6325bf440e921736c9a8ec3b15c12b96"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"c__api__types_8h_1a02ad1c7cf791a069dd54e409f8db4790a56be21bd8b87dabcb1cc08f939eeda38\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__types_8h.html#line_613\">FLOW_STRING_TYPE</a></span>",
      "version":"Release 1.9",
      "name":"c__api__types_8h_1a02ad1c7cf791a069dd54e409f8db4790a56be21bd8b87dabcb1cc08f939eeda38"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"c__api__types_8h_1a02ad1c7cf791a069dd54e409f8db4790ac4fafa395a635fdfc79de31eeb68e9ad\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__types_8h.html#line_615\">FLOW_QUATERNION_TYPE</a></span>",
      "version":"Release 1.9",
      "name":"c__api__types_8h_1a02ad1c7cf791a069dd54e409f8db4790ac4fafa395a635fdfc79de31eeb68e9ad"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"c__api__types_8h_1a02ad1c7cf791a069dd54e409f8db4790ac675397b4c9445a7c0eabf7a584e24ce\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__types_8h.html#line_609\">FLOW_MOVER_TYPE</a></span>",
      "version":"Release 1.9",
      "name":"c__api__types_8h_1a02ad1c7cf791a069dd54e409f8db4790ac675397b4c9445a7c0eabf7a584e24ce"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"c__api__types_8h_1a02ad1c7cf791a069dd54e409f8db4790a921853442d29d68101255a62029f1fa2\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__types_8h.html#line_606\">FLOW_NIL_TYPE</a></span>",
      "version":"Release 1.9",
      "name":"c__api__types_8h_1a02ad1c7cf791a069dd54e409f8db4790a921853442d29d68101255a62029f1fa2"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"c__api__types_8h_1a02ad1c7cf791a069dd54e409f8db4790a26e5591e8f0514d6c65758781b84cf8e\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__types_8h.html#line_620\">FLOW_MATERIAL_TYPE</a></span>",
      "version":"Release 1.9",
      "name":"c__api__types_8h_1a02ad1c7cf791a069dd54e409f8db4790a26e5591e8f0514d6c65758781b84cf8e"
    }],
  "typedef":[{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"c__api__types_8h_1a5f007d9c872adf1fbacb7dfdfba8fa65\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__types_8h.html#line_65\">FlowComponentPtr</a></span>",
      "version":"Release 1.9",
      "name":"c__api__types_8h_1a5f007d9c872adf1fbacb7dfdfba8fa65"
    },{
      "change":"modified",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"structstingray__plugin__foundation_1_1_scene_database_1a0a2eef4459bc642a00c8ba45ddb07dfd\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"scene__tree_8h.html#line_435\">stingray_plugin_foundation::SceneDatabase::Geometries</a></span>",
      "details":"<div><div class='code version-removed-inner' style='display:inline-block'>typedef HashMap&lt;DynamicString, Geometry, string_hash&gt; stingray_plugin_foundation::SceneDatabase::Geometries</div></div><div><div class='code version-added-inner' style='display:inline-block'>typedef Vector&lt;Geometry&gt; stingray_plugin_foundation::SceneDatabase::Geometries</div></div>",
      "version":"Release 1.9",
      "name":"structstingray__plugin__foundation_1_1_scene_database_1a0a2eef4459bc642a00c8ba45ddb07dfd"
    },{
      "change":"modified",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"structstingray__plugin__foundation_1_1_surface_material_1ab865d3efbf8def0a048db9fef6b83bef\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"scene__tree_8h.html#line_343\">stingray_plugin_foundation::SurfaceMaterial::Properties</a></span>",
      "details":"<div><div class='code version-removed-inner' style='display:inline-block'>typedef HashMap&lt;DynamicString, Property, string_hash&gt; stingray_plugin_foundation::SurfaceMaterial::Properties</div></div><div><div class='code version-added-inner' style='display:inline-block'>typedef Vector&lt;Property&gt; stingray_plugin_foundation::SurfaceMaterial::Properties</div></div>",
      "version":"Release 1.9",
      "name":"structstingray__plugin__foundation_1_1_surface_material_1ab865d3efbf8def0a048db9fef6b83bef"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"plugin__api__types_8h_1a9f6c4d3daf762e38422c20b6216e6bb7\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"plugin__api__types_8h.html#line_2736\">CApiUnitComponent</a></span>",
      "version":"Release 1.9",
      "name":"plugin__api__types_8h_1a9f6c4d3daf762e38422c20b6216e6bb7"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"plugin__api_8h_1a693735ff42dfc451d5688f956ff739c1\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"plugin__api_8h.html#line_2716\">MeshDescription</a></span>",
      "version":"Release 1.9",
      "name":"plugin__api_8h_1a693735ff42dfc451d5688f956ff739c1"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"structstingray__plugin__foundation_1_1_scene_database_1adc51fad0d9269657d1eed6aeefb79cbb\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"scene__tree_8h.html#line_467\">stingray_plugin_foundation::SceneDatabase::GeometryEntries</a></span>",
      "version":"Release 1.9",
      "name":"structstingray__plugin__foundation_1_1_scene_database_1adc51fad0d9269657d1eed6aeefb79cbb"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"c__api__types_8h_1af006cd7012bf23fc418b8ef25ebc25ba\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__types_8h.html#line_66\">UnitComponentPtr</a></span>",
      "version":"Release 1.9",
      "name":"c__api__types_8h_1af006cd7012bf23fc418b8ef25ebc25ba"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"plugin__api__types_8h_1a4d6a818a15e152660a40c71c5af7fb93\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"plugin__api__types_8h.html#line_2736\">CApiFlowComponent</a></span>",
      "version":"Release 1.9",
      "name":"plugin__api__types_8h_1a4d6a818a15e152660a40c71c5af7fb93"
    },{
      "change":"removed",
      "name":"classstingray__plugin__foundation_1_1_hash_map_1af7bbb9b570c16976defacbfd9cccf1fd",
      "version":"Release 1.9",
      "display_name":"stingray_plugin_foundation::HashMap::storage_type"
    },{
      "change":"removed",
      "name":"structstingray__plugin__foundation_1_1_hash_map_1_1node__type_1a282c5f7cc904ed2479eed5c174ac854b",
      "version":"Release 1.9",
      "display_name":"stingray_plugin_foundation::HashMap::node_type::allocator_aware"
    },{
      "change":"removed",
      "name":"classstingray__plugin__foundation_1_1_hash_set_1ad79dd4f7d357b2fd7b582d3067d4e7b7",
      "version":"Release 1.9",
      "display_name":"stingray_plugin_foundation::HashSet::node_type"
    },{
      "change":"removed",
      "name":"classstingray__plugin__foundation_1_1_hash_set_1ac58bb34eac39eb4489e6f937092587b6",
      "version":"Release 1.9",
      "display_name":"stingray_plugin_foundation::HashSet::storage_type"
    },{
      "change":"removed",
      "name":"structstingray__plugin__foundation_1_1_hash_set_1_1node__type__base_3_01_int2_type_3_01true_01_4_00_01_n_01_4_1a61484261136da661de3739ef4fb9bc29",
      "version":"Release 1.9",
      "display_name":"stingray_plugin_foundation::HashSet::node_type_base< Int2Type< true >, N >::allocator_aware"
    }],
  "file":[{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"c__api__unit__component_8h\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__unit__component_8h.html\">c_api_unit_component.h</a></span>",
      "version":"Release 1.9",
      "name":"c__api__unit__component_8h"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"c__api__flow__component_8h\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__flow__component_8h.html\">c_api_flow_component.h</a></span>",
      "version":"Release 1.9",
      "name":"c__api__flow__component_8h"
    }],
  "define":[],
  "union":[],
  "variable":[{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"structstingray__plugin__foundation_1_1_geometry_1ad416bb8bbd2d3f95777975dcfd2fc1bf\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"scene__tree_8h.html#line_229\">stingray_plugin_foundation::Geometry::vertex_normal_remapping</a></span>",
      "version":"Release 1.9",
      "name":"structstingray__plugin__foundation_1_1_geometry_1ad416bb8bbd2d3f95777975dcfd2fc1bf"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"structstingray__plugin__foundation_1_1_hash_set_1_1_data_1a233f4dbd1eae3a2d4c07068062738b14\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"hash__set_8h.html#line_76\">stingray_plugin_foundation::HashSet::Data::size</a></span>",
      "version":"Release 1.9",
      "name":"structstingray__plugin__foundation_1_1_hash_set_1_1_data_1a233f4dbd1eae3a2d4c07068062738b14"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_entity_instance_id_1ae0663ad1ab8db4ca1abc6d99f4d1d8e8\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__types_8h.html#line_389\">EntityInstanceId::entity</a></span>",
      "version":"Release 1.9",
      "name":"struct_entity_instance_id_1ae0663ad1ab8db4ca1abc6d99f4d1d8e8"
    },{
      "change":"modified",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_gui_c_api_1a9ade8bcf6f961f6423e842f9bc4b6d6c\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__gui_8h.html#line_68\">GuiCApi::material</a></span>",
      "details":"<div><div class='code version-removed-inner' style='display:inline-block'>MaterialPtr(* GuiCApi::material) (GuiPtr, uint64_t material_id64, const char *optional_debug_material_name)</div></div><div><div class='code version-added-inner' style='display:inline-block'>MaterialPtr(* GuiCApi::material) (GuiPtr gui_pointer, uint64_t material_id64, const char *optional_debug_material_name)</div></div>",
      "version":"Release 1.9",
      "name":"struct_gui_c_api_1a9ade8bcf6f961f6423e842f9bc4b6d6c"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_profiler_api_1a0985128392acb19fec1b9ff3572dd923\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"plugin__api_8h.html#line_1850\">ProfilerApi::make_thread_profiler</a></span>",
      "version":"Release 1.9",
      "name":"struct_profiler_api_1a0985128392acb19fec1b9ff3572dd923"
    },{
      "change":"modified",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"classstingray__plugin__foundation_1_1_hash_set_1ae6dd82ff1647db9f53cb698ae360a7d5\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"hash__set_8h.html#line_83\">stingray_plugin_foundation::HashSet::_data</a></span>",
      "details":"<div><div class='code version-removed-inner' style='display:inline-block'>storage_type stingray_plugin_foundation::HashSet&lt; K, HASH, EQUAL &gt;::_data</div></div><div><div class='code version-added-inner' style='display:inline-block'>Data stingray_plugin_foundation::HashSet&lt; K, HASH, EQUAL &gt;::_data</div></div>",
      "version":"Release 1.9",
      "name":"classstingray__plugin__foundation_1_1_hash_set_1ae6dd82ff1647db9f53cb698ae360a7d5"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_application_c_api_1a51784214b1cd4e3d6f7b70d9d01ec7d6\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__application_8h.html#line_27\">ApplicationCApi::can_get</a></span>",
      "version":"Release 1.9",
      "name":"struct_application_c_api_1a51784214b1cd4e3d6f7b70d9d01ec7d6"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_entity_instance_id_1a3863319a7522700d4464e4072029024c\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__types_8h.html#line_390\">EntityInstanceId::instance_id</a></span>",
      "version":"Release 1.9",
      "name":"struct_entity_instance_id_1a3863319a7522700d4464e4072029024c"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"classstingray__plugin__foundation_1_1_dynamic_string_1ad19b54c9ffc0d8473f2472ea4029c0a8\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"string_8h.html#line_178\">stingray_plugin_foundation::DynamicString::_buffer</a></span>",
      "version":"Release 1.9",
      "name":"classstingray__plugin__foundation_1_1_dynamic_string_1ad19b54c9ffc0d8473f2472ea4029c0a8"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"classstingray__plugin__foundation_1_1_hash_map_1a8327424feeab78df03ac8dd7e2d01bfb\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"hash__map_8h.html#line_140\">stingray_plugin_foundation::HashMap::_allocator</a></span>",
      "version":"Release 1.9",
      "name":"classstingray__plugin__foundation_1_1_hash_map_1a8327424feeab78df03ac8dd7e2d01bfb"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_lua_api_1ab85d755a38d78e3bb015653a9627f747\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"plugin__api_8h.html#line_549\">LuaApi::pushentity</a></span>",
      "version":"Release 1.9",
      "name":"struct_lua_api_1ab85d755a38d78e3bb015653a9627f747"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_mesh_object_api_1ab48cc006aa8525e1be4a77e231b2b11b\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"plugin__api_8h.html#line_2213\">MeshObjectApi::create_mesh</a></span>",
      "version":"Release 1.9",
      "name":"struct_mesh_object_api_1ab48cc006aa8525e1be4a77e231b2b11b"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"structstingray__plugin__foundation_1_1_geometry_1a29dc88386da4bc57c674fd0c7f63eae1\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"scene__tree_8h.html#line_181\">stingray_plugin_foundation::Geometry::name</a></span>",
      "version":"Release 1.9",
      "name":"structstingray__plugin__foundation_1_1_geometry_1a29dc88386da4bc57c674fd0c7f63eae1"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_render_data_component_c_api_1af5170bfa200059fc7c052b1739e3788d\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__render__data__component_8h.html#line_17\">RenderDataComponentCApi::instance_ids_with_tag</a></span>",
      "version":"Release 1.9",
      "name":"struct_render_data_component_c_api_1af5170bfa200059fc7c052b1739e3788d"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_world_c_api_1aef371e05cd3b8597ff8ab06a26883cf0\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__world_8h.html#line_66\">WorldCApi::get_gui_by_id</a></span>",
      "version":"Release 1.9",
      "name":"struct_world_c_api_1aef371e05cd3b8597ff8ab06a26883cf0"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_m_o___mesh_geometry_1a0e91283e9afb8a7ab375d24e5d4d697d\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"plugin__api_8h.html#line_2135\">MO_MeshGeometry::vertex_stream</a></span>",
      "version":"Release 1.9",
      "name":"struct_m_o___mesh_geometry_1a0e91283e9afb8a7ab375d24e5d4d697d"
    },{
      "change":"modified",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_world_c_api_1a7e013dee47f8b4042d72c53987e7ec63\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__world_8h.html#line_63\">WorldCApi::create_screen_gui</a></span>",
      "details":"<div><div class='code version-removed-inner' style='display:inline-block'>GuiPtr(* WorldCApi::create_screen_gui) (WorldPtr world_pointer, ConstVector2Ptr optional_position, ConstVector2Ptr optional_scale, int shadow_caster, int immediate, int dock_right, int dock_top)</div></div><div><div class='code version-added-inner' style='display:inline-block'>GuiPtr(* WorldCApi::create_screen_gui) (WorldPtr world_pointer, ConstVector2Ptr optional_position, ConstVector2Ptr optional_scale, int immediate, int dock_right, int dock_top)</div></div>",
      "version":"Release 1.9",
      "name":"struct_world_c_api_1a7e013dee47f8b4042d72c53987e7ec63"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_mesh_description_1a0904aa41323f024f2ed2d5f820dd101b\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"plugin__api_8h.html#line_2713\">MeshDescription::num_triangles</a></span>",
      "version":"Release 1.9",
      "name":"struct_mesh_description_1a0904aa41323f024f2ed2d5f820dd101b"
    },{
      "change":"modified",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_gui_c_api_1aac62520cbae32fd33f37f1d79d9b949e\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__gui_8h.html#line_16\">GuiCApi::rect</a></span>",
      "details":"<div><div class='code version-removed-inner' style='display:inline-block'>unsigned(* GuiCApi::rect) (GuiPtr, ConstVector2Ptr position, unsigned layer, ConstVector2Ptr size, ConstVector4Ptr optional_color)</div></div><div><div class='code version-added-inner' style='display:inline-block'>unsigned(* GuiCApi::rect) (GuiPtr, ConstVector2Ptr position, unsigned layer, ConstVector2Ptr size, ConstVector4Ptr optional_color, MaterialPtr optional_material)</div></div>",
      "version":"Release 1.9",
      "name":"struct_gui_c_api_1aac62520cbae32fd33f37f1d79d9b949e"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_component_api_1a7d257915e600988019f8dc19ad635362\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__entity_8h.html#line_65\">ComponentApi::first_instance</a></span>",
      "version":"Release 1.9",
      "name":"struct_component_api_1a7d257915e600988019f8dc19ad635362"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_unit_component_c_api_1ac164eae7b0782e33b4d13b3da6e2f32f\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__unit__component_8h.html#line_11\">UnitComponentCApi::unit</a></span>",
      "version":"Release 1.9",
      "name":"struct_unit_component_c_api_1ac164eae7b0782e33b4d13b3da6e2f32f"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_render_buffer_api_1a519d268c5e8986dcf8f88add4b1eb378\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"plugin__api_8h.html#line_2090\">RenderBufferApi::update_description_from_resource</a></span>",
      "version":"Release 1.9",
      "name":"struct_render_buffer_api_1a519d268c5e8986dcf8f88add4b1eb378"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_u___animation_playing_info_1a35b0c3f379820c4a23901e49c3488a46\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"plugin__api_8h.html#line_1322\">U_AnimationPlayingInfo::length</a></span>",
      "version":"Release 1.9",
      "name":"struct_u___animation_playing_info_1a35b0c3f379820c4a23901e49c3488a46"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"structstingray__plugin__foundation_1_1_hash_map_1_1_data_1aa00e5de6300ea6fcf52df9ae9c3af702\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"hash__map_8h.html#line_129\">stingray_plugin_foundation::HashMap::Data::marker</a></span>",
      "version":"Release 1.9",
      "name":"structstingray__plugin__foundation_1_1_hash_map_1_1_data_1aa00e5de6300ea6fcf52df9ae9c3af702"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_flow_component_c_api_1a145515258d1a2f2703ac3903270fe466\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__flow__component_8h.html#line_11\">FlowComponentCApi::trigger_flow_event</a></span>",
      "version":"Release 1.9",
      "name":"struct_flow_component_c_api_1a145515258d1a2f2703ac3903270fe466"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_u___animation_playing_info_1ac19e8d1aa6ece5b787b4c31def589b41\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"plugin__api_8h.html#line_1320\">U_AnimationPlayingInfo::clip_resource_id</a></span>",
      "version":"Release 1.9",
      "name":"struct_u___animation_playing_info_1ac19e8d1aa6ece5b787b4c31def589b41"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_actor_component_c_api_1aee15eb1f699def550708031092afc897\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__actor__component_8h.html#line_19\">ActorComponentCApi::create_mesh</a></span>",
      "version":"Release 1.9",
      "name":"struct_actor_component_c_api_1aee15eb1f699def550708031092afc897"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_physics_runtime_cooking_api_1a2637de22e8cea2c01a865601162a7e6c\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"plugin__api_8h.html#line_2723\">PhysicsRuntimeCookingApi::shutdown</a></span>",
      "version":"Release 1.9",
      "name":"struct_physics_runtime_cooking_api_1a2637de22e8cea2c01a865601162a7e6c"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_u___animation_playing_info_1a4022bddb8550a117f4d8c5ff8599bc8a\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"plugin__api_8h.html#line_1323\">U_AnimationPlayingInfo::loop</a></span>",
      "version":"Release 1.9",
      "name":"struct_u___animation_playing_info_1a4022bddb8550a117f4d8c5ff8599bc8a"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_unit_api_1a08ffbfdf3e66b0fb5ff91dce4005d20c\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"plugin__api_8h.html#line_1418\">UnitApi::get_playing_animation_infos</a></span>",
      "version":"Release 1.9",
      "name":"struct_unit_api_1a08ffbfdf3e66b0fb5ff91dce4005d20c"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"structstingray__plugin__foundation_1_1_hash_map_1_1_data_1aaf92e0f56f23c998bf0923cdd30d0b39\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"hash__map_8h.html#line_130\">stingray_plugin_foundation::HashMap::Data::value</a></span>",
      "version":"Release 1.9",
      "name":"structstingray__plugin__foundation_1_1_hash_map_1_1_data_1aaf92e0f56f23c998bf0923cdd30d0b39"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_m_o___mesh_geometry_1a919460f6ae95e45139382a861fa2ee02\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"plugin__api_8h.html#line_2137\">MO_MeshGeometry::index_stream</a></span>",
      "version":"Release 1.9",
      "name":"struct_m_o___mesh_geometry_1a919460f6ae95e45139382a861fa2ee02"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_mesh_description_1a050af65481efa5c2f4b6427f5240b3ba\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"plugin__api_8h.html#line_2710\">MeshDescription::num_vertices</a></span>",
      "version":"Release 1.9",
      "name":"struct_mesh_description_1a050af65481efa5c2f4b6427f5240b3ba"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_profiler_api_1a757ee30e9fe4581a58c562a99089bc4e\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"plugin__api_8h.html#line_1858\">ProfilerApi::has_thread_profiler</a></span>",
      "version":"Release 1.9",
      "name":"struct_profiler_api_1a757ee30e9fe4581a58c562a99089bc4e"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_m_o___mesh_geometry_1ae3a9999c8e012915275bfb102ce9bd2a\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"plugin__api_8h.html#line_2136\">MO_MeshGeometry::vertex_description</a></span>",
      "version":"Release 1.9",
      "name":"struct_m_o___mesh_geometry_1ae3a9999c8e012915275bfb102ce9bd2a"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_actor_c_api_1a46068bd4f486ccbc788ee51458ad0e1c\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__actor_8h.html#line_67\">ActorCApi::initial_shape_template</a></span>",
      "version":"Release 1.9",
      "name":"struct_actor_c_api_1a46068bd4f486ccbc788ee51458ad0e1c"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_gui_c_api_1aac3c26d0c51cb100d4e2611377111564\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__gui_8h.html#line_69\">GuiCApi::create_material</a></span>",
      "version":"Release 1.9",
      "name":"struct_gui_c_api_1aac3c26d0c51cb100d4e2611377111564"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_mesh_object_api_1a9e37428a5e825d7140cdf9c78bdf8ea3\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"plugin__api_8h.html#line_2218\">MeshObjectApi::lookup_mesh</a></span>",
      "version":"Release 1.9",
      "name":"struct_mesh_object_api_1a9e37428a5e825d7140cdf9c78bdf8ea3"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"structstingray__plugin__foundation_1_1_hash_map_1_1_data_1a448b346021fae4d0bdf064fed9817ba6\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"hash__map_8h.html#line_128\">stingray_plugin_foundation::HashMap::Data::size</a></span>",
      "version":"Release 1.9",
      "name":"structstingray__plugin__foundation_1_1_hash_map_1_1_data_1a448b346021fae4d0bdf064fed9817ba6"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_mesh_component_c_api_1a7ce0db671110d1fb210b168c11900f0d\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__mesh__component_8h.html#line_13\">MeshComponentCApi::set_mesh_object</a></span>",
      "version":"Release 1.9",
      "name":"struct_mesh_component_c_api_1a7ce0db671110d1fb210b168c11900f0d"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_mesh_component_c_api_1a677bca7a41cc1eee0d1a39f6c709dc1d\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__mesh__component_8h.html#line_11\">MeshComponentCApi::set_mesh_resource</a></span>",
      "version":"Release 1.9",
      "name":"struct_mesh_component_c_api_1a677bca7a41cc1eee0d1a39f6c709dc1d"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_lua_api_1a17ada78a37b4c4f64a8bde5421698986\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"plugin__api_8h.html#line_558\">LuaApi::isbool</a></span>",
      "version":"Release 1.9",
      "name":"struct_lua_api_1a17ada78a37b4c4f64a8bde5421698986"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_component_api_1a399ad875c004e61cab4078c7be7ba7cb\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__entity_8h.html#line_50\">ComponentApi::lookup_instance</a></span>",
      "version":"Release 1.9",
      "name":"struct_component_api_1a399ad875c004e61cab4078c7be7ba7cb"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_resource_manager_api_1a928fdb606092a965d824ea6479f4be8a\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"plugin__api_8h.html#line_965\">ResourceManagerApi::is_online_by_id</a></span>",
      "version":"Release 1.9",
      "name":"struct_resource_manager_api_1a928fdb606092a965d824ea6479f4be8a"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_physics_runtime_cooking_api_1a71bbafdc3d80c142323aab38f51760ae\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"plugin__api_8h.html#line_2729\">PhysicsRuntimeCookingApi::create_physics_mesh</a></span>",
      "version":"Release 1.9",
      "name":"struct_physics_runtime_cooking_api_1a71bbafdc3d80c142323aab38f51760ae"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"structstingray__plugin__foundation_1_1_surface_material_1_1_property_1af9e942f5900a37986cf8c91b9ee14ee8\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"scene__tree_8h.html#line_336\">stingray_plugin_foundation::SurfaceMaterial::Property::name</a></span>",
      "version":"Release 1.9",
      "name":"structstingray__plugin__foundation_1_1_surface_material_1_1_property_1af9e942f5900a37986cf8c91b9ee14ee8"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_mesh_description_1a325df1d5a416219e78e400d3b31dfb38\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"plugin__api_8h.html#line_2711\">MeshDescription::vertice_stride</a></span>",
      "version":"Release 1.9",
      "name":"struct_mesh_description_1a325df1d5a416219e78e400d3b31dfb38"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_component_api_1a94abc7f2e2622b2b63f043dbc155d2be\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__entity_8h.html#line_68\">ComponentApi::next_instance</a></span>",
      "version":"Release 1.9",
      "name":"struct_component_api_1a94abc7f2e2622b2b63f043dbc155d2be"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_data_component_c_api_1a7b200520a89363eae57a1fcb236514c3\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__data__component_8h.html#line_11\">DataComponentCApi::instance_ids_with_tag</a></span>",
      "version":"Release 1.9",
      "name":"struct_data_component_c_api_1a7b200520a89363eae57a1fcb236514c3"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_render_buffer_api_1ad76aeb4ea88bf5fb08654f122a66c531\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"plugin__api_8h.html#line_2087\">RenderBufferApi::partial_update_texture</a></span>",
      "version":"Release 1.9",
      "name":"struct_render_buffer_api_1ad76aeb4ea88bf5fb08654f122a66c531"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"structstingray__plugin__foundation_1_1_geometry_1ace99642e3e1cf938c53a71e4556afe98\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"scene__tree_8h.html#line_228\">stingray_plugin_foundation::Geometry::vertex_position_remapping</a></span>",
      "version":"Release 1.9",
      "name":"structstingray__plugin__foundation_1_1_geometry_1ace99642e3e1cf938c53a71e4556afe98"
    },{
      "change":"modified",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_render_data_component_c_api_1a1be2f1d3c0af7f84c8c04274757c1d08\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__render__data__component_8h.html#line_18\">RenderDataComponentCApi::add_instance_to_tags</a></span>",
      "details":"<div><div class='code version-removed-inner' style='display:inline-block'>void(* RenderDataComponentCApi::add_instance_to_tags) (RenderDataComponentPtr comp, EntityRef entity_ref, InstanceId instanceId, const unsigned *tags, const unsigned num_tags)</div></div><div><div class='code version-added-inner' style='display:inline-block'>void(* RenderDataComponentCApi::add_instance_to_tags) (RenderDataComponentPtr comp, Instance instance, const unsigned *tags, const unsigned num_tags)</div></div>",
      "version":"Release 1.9",
      "name":"struct_render_data_component_c_api_1a1be2f1d3c0af7f84c8c04274757c1d08"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_render_buffer_api_1a396d442971ca37467817894b598d6eb9\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"plugin__api_8h.html#line_2093\">RenderBufferApi::update_buffer_from_resource</a></span>",
      "version":"Release 1.9",
      "name":"struct_render_buffer_api_1a396d442971ca37467817894b598d6eb9"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_render_buffer_api_1ac241ef7080c22a73be7b8206018d85e2\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"plugin__api_8h.html#line_2082\">RenderBufferApi::partial_update_buffer</a></span>",
      "version":"Release 1.9",
      "name":"struct_render_buffer_api_1ac241ef7080c22a73be7b8206018d85e2"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_physics_runtime_cooking_api_1a3e33b1ecf6734f18b73a2f3e22264e65\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"plugin__api_8h.html#line_2720\">PhysicsRuntimeCookingApi::setup</a></span>",
      "version":"Release 1.9",
      "name":"struct_physics_runtime_cooking_api_1a3e33b1ecf6734f18b73a2f3e22264e65"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"structstingray__plugin__foundation_1_1_hash_set_1_1_data_1a0f301577b6b125ee28f9134fbe86ba20\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"hash__set_8h.html#line_78\">stingray_plugin_foundation::HashSet::Data::key</a></span>",
      "version":"Release 1.9",
      "name":"structstingray__plugin__foundation_1_1_hash_set_1_1_data_1a0f301577b6b125ee28f9134fbe86ba20"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_flow_component_c_api_1aaf14fe38ac0a69c62a16176c3d6ae4b0\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__flow__component_8h.html#line_14\">FlowComponentCApi::external_variable</a></span>",
      "version":"Release 1.9",
      "name":"struct_flow_component_c_api_1aaf14fe38ac0a69c62a16176c3d6ae4b0"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_mesh_object_api_1a538f271cee89075ef05d07d1b9a52873\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"plugin__api_8h.html#line_2221\">MeshObjectApi::read_mesh_geometry</a></span>",
      "version":"Release 1.9",
      "name":"struct_mesh_object_api_1a538f271cee89075ef05d07d1b9a52873"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_mesh_description_1aa09fc1e60d5a314f8e146989d5ff297e\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"plugin__api_8h.html#line_2714\">MeshDescription::triangle_stride</a></span>",
      "version":"Release 1.9",
      "name":"struct_mesh_description_1aa09fc1e60d5a314f8e146989d5ff297e"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_mesh_description_1a78a924fba0d29d089c8bb4ae22cc83e6\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"plugin__api_8h.html#line_2712\">MeshDescription::vertices</a></span>",
      "version":"Release 1.9",
      "name":"struct_mesh_description_1a78a924fba0d29d089c8bb4ae22cc83e6"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_mesh_description_1ab13b9b4a5814b58fb81fde3d9272cdcb\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"plugin__api_8h.html#line_2715\">MeshDescription::triangles</a></span>",
      "version":"Release 1.9",
      "name":"struct_mesh_description_1ab13b9b4a5814b58fb81fde3d9272cdcb"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_physics_runtime_cooking_api_1a663dc6ed23d62821d8162808d8607e76\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"plugin__api_8h.html#line_2732\">PhysicsRuntimeCookingApi::release_physics_mesh</a></span>",
      "version":"Release 1.9",
      "name":"struct_physics_runtime_cooking_api_1a663dc6ed23d62821d8162808d8607e76"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"classstingray__plugin__foundation_1_1_hash_set_1a5d8d6593a9abb9689fe9917e70b0a2db\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"hash__set_8h.html#line_88\">stingray_plugin_foundation::HashSet::_allocator</a></span>",
      "version":"Release 1.9",
      "name":"classstingray__plugin__foundation_1_1_hash_set_1a5d8d6593a9abb9689fe9917e70b0a2db"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_component_api_1ad690206bf88c4bd66926eca83f7e6ba5\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__entity_8h.html#line_51\">ComponentApi::lookup_instance_id</a></span>",
      "version":"Release 1.9",
      "name":"struct_component_api_1ad690206bf88c4bd66926eca83f7e6ba5"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_lua_api_1a98e1a511d972012a4ee1d458d06fd6ee\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"plugin__api_8h.html#line_555\">LuaApi::isnil</a></span>",
      "version":"Release 1.9",
      "name":"struct_lua_api_1a98e1a511d972012a4ee1d458d06fd6ee"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_gui_c_api_1abd931ccf2571423f1a0dddfa934455cf\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__gui_8h.html#line_84\">GuiCApi::get_id</a></span>",
      "version":"Release 1.9",
      "name":"struct_gui_c_api_1abd931ccf2571423f1a0dddfa934455cf"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_lua_api_1a7e0dc8b62c799d2f37c1b95918e71a8e\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"plugin__api_8h.html#line_546\">LuaApi::getentity</a></span>",
      "version":"Release 1.9",
      "name":"struct_lua_api_1a7e0dc8b62c799d2f37c1b95918e71a8e"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_file_system_api_1ad99a558fa74a48f56e9199e227e558d0\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"plugin__api_8h.html#line_1730\">FileSystemApi::parse_sjson</a></span>",
      "version":"Release 1.9",
      "name":"struct_file_system_api_1ad99a558fa74a48f56e9199e227e558d0"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_application_c_api_1a6d8e56a8736b08a44dc86e7ef6f0b97e\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__application_8h.html#line_17\">ApplicationCApi::get_default_world_settings</a></span>",
      "version":"Release 1.9",
      "name":"struct_application_c_api_1a6d8e56a8736b08a44dc86e7ef6f0b97e"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_resource_manager_api_1a4d0e630efe10672ae63ea8b8f77b72a3\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"plugin__api_8h.html#line_962\">ResourceManagerApi::is_online</a></span>",
      "version":"Release 1.9",
      "name":"struct_resource_manager_api_1a4d0e630efe10672ae63ea8b8f77b72a3"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"structstingray__plugin__foundation_1_1_scene_database_1a258a015661b047bb962ed695fe69a312\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"scene__tree_8h.html#line_468\">stingray_plugin_foundation::SceneDatabase::geometry_entries</a></span>",
      "version":"Release 1.9",
      "name":"structstingray__plugin__foundation_1_1_scene_database_1a258a015661b047bb962ed695fe69a312"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_u___animation_playing_info_1af5fb1871882bafa7ac6b9eea275200ae\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"plugin__api_8h.html#line_1321\">U_AnimationPlayingInfo::time</a></span>",
      "version":"Release 1.9",
      "name":"struct_u___animation_playing_info_1af5fb1871882bafa7ac6b9eea275200ae"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_camera_c_api_1a780cc3d54994f20d1ac90500edd85c8c\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__camera_8h.html#line_43\">CameraCApi::projection</a></span>",
      "version":"Release 1.9",
      "name":"struct_camera_c_api_1a780cc3d54994f20d1ac90500edd85c8c"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_physics_runtime_cooking_api_1a8b3dcc92a74ceef4ac134a0bd8f6f33c\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"plugin__api_8h.html#line_2726\">PhysicsRuntimeCookingApi::cook_mesh</a></span>",
      "version":"Release 1.9",
      "name":"struct_physics_runtime_cooking_api_1a8b3dcc92a74ceef4ac134a0bd8f6f33c"
    },{
      "change":"modified",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"classstingray__plugin__foundation_1_1_hash_map_1a4b64af96b638e299e53f49ef1807ad43\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"hash__map_8h.html#line_135\">stingray_plugin_foundation::HashMap::_data</a></span>",
      "details":"<div><div class='code version-removed-inner' style='display:inline-block'>storage_type stingray_plugin_foundation::HashMap&lt; K, D, HASH, EQUAL &gt;::_data</div></div><div><div class='code version-added-inner' style='display:inline-block'>Data stingray_plugin_foundation::HashMap&lt; K, D, HASH, EQUAL &gt;::_data</div></div>",
      "version":"Release 1.9",
      "name":"classstingray__plugin__foundation_1_1_hash_map_1a4b64af96b638e299e53f49ef1807ad43"
    },{
      "change":"modified",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_gui_c_api_1aa1bf788406eca4d5e98836660a9fdf59\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__gui_8h.html#line_20\">GuiCApi::rect_3d</a></span>",
      "details":"<div><div class='code version-removed-inner' style='display:inline-block'>unsigned(* GuiCApi::rect_3d) (GuiPtr, ConstMatrix4x4Ptr transform, ConstVector3Ptr position, unsigned layer, ConstVector2Ptr size, ConstVector4Ptr optional_color)</div></div><div><div class='code version-added-inner' style='display:inline-block'>unsigned(* GuiCApi::rect_3d) (GuiPtr, ConstMatrix4x4Ptr transform, ConstVector3Ptr position, unsigned layer, ConstVector2Ptr size, ConstVector4Ptr optional_color, MaterialPtr optional_material)</div></div>",
      "version":"Release 1.9",
      "name":"struct_gui_c_api_1aa1bf788406eca4d5e98836660a9fdf59"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"structstingray__plugin__foundation_1_1_hash_set_1_1_data_1ad94dac28bbd01d2101902bbf66a0cf73\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"hash__set_8h.html#line_77\">stingray_plugin_foundation::HashSet::Data::marker</a></span>",
      "version":"Release 1.9",
      "name":"structstingray__plugin__foundation_1_1_hash_set_1_1_data_1ad94dac28bbd01d2101902bbf66a0cf73"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"structstingray__plugin__foundation_1_1default__hash_1ac464837b33c25cee99f0adbcd8fe9c7a\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"hash__function_8h.html#line_113\">stingray_plugin_foundation::default_hash::value</a></span>",
      "version":"Release 1.9",
      "name":"structstingray__plugin__foundation_1_1default__hash_1ac464837b33c25cee99f0adbcd8fe9c7a"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_profiler_api_1a78f11230f77829b2faef3fcbf9bf21aa\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"plugin__api_8h.html#line_1854\">ProfilerApi::delete_thread_profiler</a></span>",
      "version":"Release 1.9",
      "name":"struct_profiler_api_1a78f11230f77829b2faef3fcbf9bf21aa"
    },{
      "change":"removed",
      "name":"classstingray__plugin__foundation_1_1_dynamic_string_1a5ae72111234840a179dc14833c4f90d4",
      "version":"Release 1.9",
      "display_name":"stingray_plugin_foundation::DynamicString::buffer"
    },{
      "change":"removed",
      "name":"structstingray__plugin__foundation_1_1_hash_map_1_1node__type_1a20628a191933d88006e005602b5a5782",
      "version":"Release 1.9",
      "display_name":"stingray_plugin_foundation::HashMap::node_type::value"
    },{
      "change":"removed",
      "name":"struct_mesh_component_c_api_1a14c574165df4bd93db2ba57fefbcf3fb",
      "version":"Release 1.9",
      "display_name":"MeshComponentCApi::set_mesh"
    },{
      "change":"removed",
      "name":"structstingray__plugin__foundation_1_1_hash_map_1_1node__type_1a71a71a062f2b6f044058df756de03bf4",
      "version":"Release 1.9",
      "display_name":"stingray_plugin_foundation::HashMap::node_type::marker"
    },{
      "change":"removed",
      "name":"struct_render_data_component_c_api_1a692cc1b8b929bbd904aadf72739637d7",
      "version":"Release 1.9",
      "display_name":"RenderDataComponentCApi::get_instances_with_tag"
    },{
      "change":"removed",
      "name":"structstingray__plugin__foundation_1_1_hash_set_1_1node__type__base_3_01_int2_type_3_01true_01_4_00_01_n_01_4_1ad7ada6ef67a59be78c542152f06f5484",
      "version":"Release 1.9",
      "display_name":"stingray_plugin_foundation::HashSet::node_type_base< Int2Type< true >, N >::marker"
    },{
      "change":"removed",
      "name":"struct_component_api_1aba5b19bdde52b788681a1df0d1e29aec",
      "version":"Release 1.9",
      "display_name":"ComponentApi::lookup"
    },{
      "change":"removed",
      "name":"structstingray__plugin__foundation_1_1_hash_set_1_1node__type__base_3_01_int2_type_3_01true_01_4_00_01_n_01_4_1abb1dfa0b4828ed8e75ffce708c84507d",
      "version":"Release 1.9",
      "display_name":"stingray_plugin_foundation::HashSet::node_type_base< Int2Type< true >, N >::value"
    },{
      "change":"removed",
      "name":"structstingray__plugin__foundation_1_1_hash_set_1_1node__type__base_1a967e895d8a452c90583f0ecfcebc8188",
      "version":"Release 1.9",
      "display_name":"stingray_plugin_foundation::HashSet::node_type_base::marker"
    },{
      "change":"removed",
      "name":"struct_data_component_c_api_1aa47cf01df33c4e65fbe80df0163fcef7",
      "version":"Release 1.9",
      "display_name":"DataComponentCApi::instances_with_tag"
    },{
      "change":"removed",
      "name":"structstingray__plugin__foundation_1_1_hash_set_1_1node__type__base_1a9d142a246844f72c9fbc4c984c6489fd",
      "version":"Release 1.9",
      "display_name":"stingray_plugin_foundation::HashSet::node_type_base::value"
    }],
  "struct":[{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_flow_component_c_api\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__flow__component_8h.html#line_9\">FlowComponentCApi</a></span>",
      "version":"Release 1.9",
      "name":"struct_flow_component_c_api"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"structstingray__plugin__foundation_1_1_hash_set_1_1_data\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"hash__set_8h.html#line_74\">stingray_plugin_foundation::HashSet::Data</a></span>",
      "version":"Release 1.9",
      "name":"structstingray__plugin__foundation_1_1_hash_set_1_1_data"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_u___animation_playing_info\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"plugin__api_8h.html#line_1317\">U_AnimationPlayingInfo</a></span>",
      "version":"Release 1.9",
      "name":"struct_u___animation_playing_info"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_unit_component_c_api\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__unit__component_8h.html#line_9\">UnitComponentCApi</a></span>",
      "version":"Release 1.9",
      "name":"struct_unit_component_c_api"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"structstingray__plugin__foundation_1_1default__hash_3_01int64__t_01_4\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"hash__function_8h.html#line_156\">stingray_plugin_foundation::default_hash< int64_t ></a></span>",
      "version":"Release 1.9",
      "name":"structstingray__plugin__foundation_1_1default__hash_3_01int64__t_01_4"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_mesh_description\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"plugin__api_8h.html#line_2707\">MeshDescription</a></span>",
      "version":"Release 1.9",
      "name":"struct_mesh_description"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"structstingray__plugin__foundation_1_1default__hash_3_01const_01_t_01_5_01_4\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"hash__function_8h.html#line_129\">stingray_plugin_foundation::default_hash< const T * ></a></span>",
      "version":"Release 1.9",
      "name":"structstingray__plugin__foundation_1_1default__hash_3_01const_01_t_01_5_01_4"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"structstingray__plugin__foundation_1_1default__hash_3_01int_01_4\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"hash__function_8h.html#line_146\">stingray_plugin_foundation::default_hash< int ></a></span>",
      "version":"Release 1.9",
      "name":"structstingray__plugin__foundation_1_1default__hash_3_01int_01_4"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"structstingray__plugin__foundation_1_1default__hash_3_01_t_01_5_01_4\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"hash__function_8h.html#line_117\">stingray_plugin_foundation::default_hash< T * ></a></span>",
      "version":"Release 1.9",
      "name":"structstingray__plugin__foundation_1_1default__hash_3_01_t_01_5_01_4"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_m_o___mesh_geometry\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"plugin__api_8h.html#line_2132\">MO_MeshGeometry</a></span>",
      "version":"Release 1.9",
      "name":"struct_m_o___mesh_geometry"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_physics_runtime_cooking_api\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"plugin__api_8h.html#line_2718\">PhysicsRuntimeCookingApi</a></span>",
      "version":"Release 1.9",
      "name":"struct_physics_runtime_cooking_api"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"struct_entity_instance_id\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__types_8h.html#line_387\">EntityInstanceId</a></span>",
      "version":"Release 1.9",
      "name":"struct_entity_instance_id"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"structstingray__plugin__foundation_1_1default__hash_3_01uint64__t_01_4\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"hash__function_8h.html#line_151\">stingray_plugin_foundation::default_hash< uint64_t ></a></span>",
      "version":"Release 1.9",
      "name":"structstingray__plugin__foundation_1_1default__hash_3_01uint64__t_01_4"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"structstingray__plugin__foundation_1_1_hash_map_1_1_data\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"hash__map_8h.html#line_126\">stingray_plugin_foundation::HashMap::Data</a></span>",
      "version":"Release 1.9",
      "name":"structstingray__plugin__foundation_1_1_hash_map_1_1_data"
    },{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"structstingray__plugin__foundation_1_1default__hash_3_01unsigned_01_4\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"hash__function_8h.html#line_141\">stingray_plugin_foundation::default_hash< unsigned ></a></span>",
      "version":"Release 1.9",
      "name":"structstingray__plugin__foundation_1_1default__hash_3_01unsigned_01_4"
    },{
      "change":"removed",
      "name":"structstingray__plugin__foundation_1_1_hash_map_1_1node__type",
      "version":"Release 1.9",
      "display_name":"stingray_plugin_foundation::HashMap::node_type"
    },{
      "change":"removed",
      "name":"structstingray__plugin__foundation_1_1_hash_set_1_1node__type__base",
      "version":"Release 1.9",
      "display_name":"stingray_plugin_foundation::HashSet::node_type_base"
    },{
      "change":"removed",
      "name":"structstingray__plugin__foundation_1_1_hash_set_1_1node__type__base_3_01_int2_type_3_01true_01_4_00_01_n_01_4",
      "version":"Release 1.9",
      "display_name":"stingray_plugin_foundation::HashSet::node_type_base< Int2Type< true >, N >"
    }],
  "enum":[{
      "change":"added",
      "display_name":"<span class=\"hasTooltip\" data-reftooltip=\"c__api__types_8h_1a02ad1c7cf791a069dd54e409f8db4790\" data-reftooltip-refid=\"engine_c\"><a class=\"el\" href=\"c__api__types_8h.html#line_605\">FlowType</a></span>",
      "version":"Release 1.9",
      "name":"c__api__types_8h_1a02ad1c7cf791a069dd54e409f8db4790"
    }]
};
