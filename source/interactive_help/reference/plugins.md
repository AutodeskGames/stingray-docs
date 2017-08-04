# Stingray technology components

The Stingray runtime game engine and editing tools are designed to be extensible through a plug-in architecture, offering the ability to integrate external tools and technology into your game and editing environment.

Stingray includes standard plug-ins for several middleware game technologies, both from Autodesk and from other companies:

*	Autodesk Gameware Navigation

	Autodesk Gameware Navigation is a middleware for Artificial Intelligence (AI) in 3D video games and simulations: it helps your game-controlled characters (NPCs) find and follow paths from place to place in the game world, avoiding collisions with each other and with other dynamic obstacles; and it provides spatial analysis tools for getting information about the game world. For help on using this technology in Stingray, refer to the section ~{ AI and pathfinding }~.

	The latest documentation for Autodesk Gameware Navigation middleware is available [here](http://www.autodesk.com/navigation-sdkdoc-2016-enu).

*	Autodesk HumanIK

	HumanIK animation middleware is a full-body inverse kinematics (IK) solver and retargeter that lets you create believable character animations. See ~{ HumanIK }~ for information on setting up characters with HumanIK in Stingray.

	The complete HumanIK middleware documentation is available [here](http://www.autodesk.com/humanik-sdkdoc-2016-enu).

*	Autodesk Scaleform Studio

	Scaleform Studio is an editor and a runtime that enables you to create rich, interactive 2.5D user interfaces and graphics for use with Stingray. Scaleform Studio supports bitmaps, text and vector graphics, letting you create animated menu screens, in-game HUDs, and other 2D graphics for use with Stingray.

	For more information about Scaleform Studio, see the latest documentation [here](http://www.autodesk.com/scaleformstudio-help). This online help system is also available from the Help menu in the Scaleform Studio.

*	WWise

	Audiokinetic WWise is an industry-leading sound engine for 3D games, with a complete pipeline that includes editing tools for setting up projects, monitoring and debugging playback in the game, and live modification of sound properties.

	The Wwise runtime engine is integrated into the Stingray runtime engine, and all new projects are automatically set up with a linked Wwise sound project. Refer to the section ~{ Working with audio }~ for more information on how you can use Wwise editing tools and integrated Lua functions to control sound sources, trigger sound events, and modify parameter values.

	For complete information on Wwise, visit the Audiokinetic Wwise site: <https://www.audiokinetic.com/products/wwise/>.

The linked topics in this guide describe how these various technologies are integrated into the Stingray engine and editing tools, and how you can use them in your own games.

Note however that the topics presented here provide a guide for using these technologies *within* Stingray; they do not represent a full and complete documentation for the external products. To gain a deeper understanding of the concepts, workflows and possibilities offered by these products, you may need to visit links to their original product documentation.

You can also write your own plug-ins in order to integrate other in-house or third-party technologies. For details, look for the topic *Writing Plug-ins* in the [Stingray Developer Help](www.autodesk.com/stingray-help/?contextId=DEVELOPER_HOME).
