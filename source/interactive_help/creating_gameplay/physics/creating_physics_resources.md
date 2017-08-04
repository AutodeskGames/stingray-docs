#Creating physics resources

There are two different ways of setting up physics objects in Stingray:

- Using the **Unit Editor**

- Using the PhysX plugin for 3ds Max and Maya

The **Unit Editor** is usually the simplest approach, but it doesn't support editing of joints and constraints. See ~{ Create a physics actor }~ for information on using the **Unit Editor** to set up basic physics for your game objects. For complicated setups with joints and constraints (like ragdolls) you want to use the PhysX plugin instead. See ~{ Create and import a ragdoll }~.

Regardless of what method you use, you'll be referring to the global physics settings in the file *global.physics_properties*. That file specifies common collision filters and physics properties shared by many different objects. Refer to ~{ Global physics properties }~ for more.

---
Related topics:
-	~{ Unit Editor }~
-	~{ Install the PhysX plug-in for your DCC tool }~
---
