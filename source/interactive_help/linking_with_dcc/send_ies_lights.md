#Send VrayIES lights from 3ds Max to 3ds Max Interactive

![NEW](../images/new.png)

When you send photometric lights from 3ds Max, they are imported as physical lights in 3ds Max Interactive. Any IES files that are loaded in 3ds Max are also imported in to Max Interactive.

1. In 3ds Max, setup your Vray IES light. For more information on IES lights in 3ds Max see [V-Ray for 3ds Max](https://www.chaosgroup.com/vray/3ds-max).
2. With your Vray IES light selected, from the main menu select **Interactive > Send Selected**.

  	Your light appears in 3ds Max Interactive as a physical light and the following settings map from 3ds Max to 3ds Max Interactive:

	| **VRayIES Parameters** (3ds Max) | **Physical Light** settings (3ds Max Interactive) |
	| ------------- | ------------- |
	| **enabled** | **Enabled** |
	| **ies file**  | **ies Profile** |
	| **cast shadows** | **Cast Shadows** |
	| **color** and **color temperature**  | **Temperature (K)** <br> **Note:** To map this setting correctly, **color mode** in 3ds Max must be set to **Temperature**. |
	| **intensity type** and **intensity value** | **Brightness (lm)** |

	>**Note:** When sending Vray IES lights from 3ds Max, the **shape** setting is not supported in 3ds Max Interactive.
