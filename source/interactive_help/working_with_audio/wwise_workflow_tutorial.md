# Wwise workflow tutorial

This tutorial provides a brief step by step example of the basic Wwise Stingray workflow.

> ![](../images/icon_video.png) You can also find a longer video tutorial on how to trigger audio and particle effects [here](http://area.autodesk.com/learning/triggering-sound-and-particle-effects).

## Step 1. Make new project

Open Stingray and create a new project. In this example we are using the empty game template and naming our project wwise_tutorial.

## Step 2. Set up tutorial content

>	**Note:** Detailed and thorough documentation on how to use the Wwise Authoring Tool is available from the **Help** menu in the Wwise Authoring Tool.

1. Launch the Wwise Authoring Tool (**Window > Wwise Audio**). This automatically opens the Wwise project associated with the current game project.

2. Import a .wav file to create a sound.

	This can be done by right-clicking the default mixer in the audio tab, or by dragging a wav asset from a file browser onto the default mixer. By default the sound gets set up as a 2D, non-positional sound.

3. Add the sound to a play sound event named "test_event".

4. Add the event to a sound bank named "Main".

5. Save the Wwise project.

6. Export the sound bank.

	After export, the Stingray-formatted assets can be found in the ~{ Wwise project }~ folder of your Stingray game project.

## Step 3. Back in Stingray, play a sound

1. To make the sound bank available to the game project level:
    - add the "wwise/Init" and "wwise/Main" resources to *boot.package*.
    - add the "wwise/Init" and "wwise/Main" resources to the `startup_banks` section of *settings.ini*.

2. The new game project is setup to open the empty.level file upon load, so open that file in the editor.

3. In the Flow editor:
    - add a level loaded event
    - add a repeating 3 second delay coming from level loaded
    - add a **Audio > Wwise > Wwise Trigger Event** flow node triggered by the delay output.
    - set the **Audio > Wwise > Wwise Trigger Event** node name input to the name of our test event, "test_event".

4. Run the project. The test sound plays every 3 seconds.
