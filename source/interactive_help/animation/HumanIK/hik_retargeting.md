# Retargeting with HumanIK

HumanIK provides a retargeting engine that lets you easily retarget animation between characters of differing size, proportions and skeletal hierarchy, even for skeletons with different numbers of joints. This means less work creating custom animations and less memory consumption at runtime.

For example, if you have two HumanIK characterized characters, a human and a gremlin, you can retarget the animation controller of the human onto the gremlin.

> **Note:** Each character that you want to use in your retargeting pipeline must be set up as a valid HumanIK character. See also ~{ HumanIK character setup }~, and refer to the HumanIK documentation in your content creation package (such as Maya, Maya LT, or MotionBuilder).

{{ProductName}} currently supports only Final Pose retargeting. Source retargeting is not yet supported.

With final pose retargeting, you can use Flow or Lua to retarget motion output from an animation controller to the input of another animation controller, applying the animation from one character unit to another.

**Important:**
Both character units must be present in the scene for retargeting to work, although the source character can be hidden.

---
Related topics:
-	~{ Animation controllers }~
---
