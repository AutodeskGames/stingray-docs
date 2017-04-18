# Alpha SDK Limitations

We're committed to making Stingray the easiest game engine to use and to extend, so this plug-in SDK is a big part of our future plans.

We know it's not perfect yet -- we've been calling this our "alpha" release for the SDK.

-	The bad news is that there are some rough edges, lots of things that we need to improve and finalize, and lots of room to provide more hooks for your own customization.

-	The good news is that since you're a keen early adopter, you can help us shape the way this project continues. Give us [lots of feedback](http://forums.autodesk.com/t5/stingray-forum/bd-p/800) about how you're using it, what you're missing, and how we can make developing Stingray plug-ins easier.

This page describes a few of the SDK's current limitations. Don't let any of this scare you away from getting started -- we just want to let you know that we're aware of these things and we intend to make them better as we go on.

## API versioning and compatibility across releases

We're still finding it necessary to change our APIs here and there between Stingray releases. Although we have some mechanisms in place that should make it possible for newer versions of the engine and editor to keep supporting older plug-ins even when the APIs change, we haven't yet committed to a "final" official first version of our APIs. Things may continue to change a little before we reach that point.

For now, there's no guarantee that a plug-in you write for this version of Stingray will continue to work 100% when used with the next version.

## Dependency management

Along the same lines as above, a Stingray plug-in may have certain dependencies in order to function. It may require a specific version of the engine or editor, it may require a specific version of some different plug-in to be installed and available, it may only work on certain platforms, etc.

We propose a way for your plug-in to tell Stingray about these dependencies in its *.stingray_plugin* file. However, the editor currently only validates that the base Stingray app meets the version required by the plug-in. It does not validate the platform or the presence other plug-ins.

## Windows only

The standalone plug-ins that you make with this SDK currently only work on Windows platforms. Mobile (iOS and Android) and consoles (PlayStation 4 and Xbox One) don't work yet.

-	The Stingray editor is Windows-only, so editor plug-ins are always Windows-only by definition.

-	Engine plug-ins that you make using this SDK are *dynamically linked* -- they are packaged up in separate *.dll* files that the engine automatically finds and loads when it starts up. However, the engine is currently only able to do this dynamic linking on Windows. We need a little more time to get our other platforms up to speed.

If you need to develop a plug-in for the runtime engine, and you need that plug-in to work on mobile devices or on consoles, you *could* get it to work if you get [source code access](www.autodesk.com/stingray-help?contextId=DEVELOPER_HOME) for Stingray and recompile the engine with a *static link* to your plug-in. Unfortunately in this scenario you wouldn't be able to redistribute your plug-in on its own, as it gets bundled into the game engine when you rebuild it from source. So this would only be useful if you don't need to distribute your plug-in outside your own organization.

## Distribution and installation workarounds

The overall process of developing, distributing, installing and deploying plug-ins isn't totally smooth yet. There are a few "gotchas", described in the ~{ Distribute and Install a Plug-in }~ page, that may require the people using your plug-in to take some steps that should be automated. Make sure that you read this section carefully, try out the whole process of installing your plug-in into a clean version of Stingray and deploying a project with it, and communicate any requirements to your plug-in users.
