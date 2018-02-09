# Setting up the Live Template

Once you have imported your content and added it to your level, you will need to set up a few things so your content interacts properly with Live features.

-   **Cameras** 
There is nothing to do! Your cameras will be interpretted as Points of View in the Live Template.

-   **Adding Navmesh**
The navmesh (Navigation Mesh) is what allows the "Tap & Go" navigation mode to find its path when walking around. It is also used in VR to determine where a user can teleport to. To generate the Navmesh, open the "Navigation" panel (Windows->Navigation) and click on the "Generate Navmesh" button. For more information on this subject see "Generating the navmesh" under the "Creating Gameplay->AI and Pathfinding" subject ~{ Generate the navigation mesh }~.

-   **Adding Physics** 
Physics is also used for navigation, for the WASD controls and lading from Orbit mode, as well as in VR mode for the teleport laser. You must enable physics on all the Units for which you want these features to work. To do so, you can right-click on the Unit in the Asset Browser and select "Create Static Physics". For more information on this topic, see the the "Create Physics Actor" topic under the "Creating Gameplay->Physics" subject ~{ Create a physics actor }~.

-   **Boot.package** 
Unlike other templates, Live does not include all project resources by default, so that we have more control over what is loaded, and when. If you wish to restore the "include  everything" behavior, simply add "  * = ["*"]  " in the first line of boot.package. Not that this is not a Best Practice and your deployed project will be artificially bloated. For more information on packages and resource management, see ~{ Managing Content and Resources }~.
