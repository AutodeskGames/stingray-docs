# Localizing user interfaces

This page describes some possible approaches you can use to localize on-screen text shown within a Scaleform Studio project.

## Approach 1: multiple Scaleform Studio projects

You can create a different Scaleform Studio project for each different language or usage, and rely on the engine's built-in resource selection mechanism to choose the right project at runtime. For details on this mechanism, see ~{ Localizing resources }~.

Although this is the heaviest approach, it might be good for cases where a change in language or platform necessarily causes a very big change in the strings or graphics that need to be shown. For example, suppose the goal of your UI is to demonstrate the game's controls to the player. This UI might need to be very different on a console (using a gamepad) from on PC (using keyboard and mouse). You could therefore make multiple separate projects and identify them with platform-specific localization IDs in their resource names.

## Approach 2: swapping strings in Lua within the {{ProductName}} engine

In this approach, you create a default UI in Scaleform Studio, populated with default strings in a reference language. You then make your gameplay interaction Flow or Lua scripts emit messages to the Scaleform project in order to send different strings to the Scaleform project when the user selects a different language, along with an ID that defines where that string goes in the UI. You make the Lua code in your Scaleform Studio project (or your {{ProductName}} Lua gameplay code) respond to the messages and swap the new strings in.

The benefit of this approach is that it allows you to keep all your strings in the {{ProductName}} localization string files, which can ease translation and loading. See ~{ Localizing strings }~. The downside is that you have more communication to handle between the {{ProductName}} engine and Scaleform Studio.

Since the two share the same Lua environment, you can even call the Scaleform Lua functions from {{ProductName}} to set the text with the strings you get from the {{ProductName}} localizer. Or, you can call the {{ProductName}} engine's Lua `Localizer` from your Scaleform project. The downside of doing this is that this couples the two tightly, which means you have to be careful if you still want to be able to test the UI behaviour in Scaleform Studio running in standalone mode.

## Approach 3: swapping strings in Lua within Scaleform Studio

You can keep all your strings for each Scaleform Studio project in Lua tables within the Scaleform Studio project. Then, make your {{ProductName}} project emit a message to Scaleform Studio to set the desired language for the UI. In your Scaleform Studio project, you receive that message and swap the strings in Scaleform Studio.

The potential benefit of this approach is that it keeps your UI module self-contained, with less direct integration between your {{ProductName}} gameplay Lua code and your Scaleform project.
