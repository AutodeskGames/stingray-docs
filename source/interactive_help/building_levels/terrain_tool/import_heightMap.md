#Import a height map for terrain

1. Select a terrain unit.
2. In the ~{ Property Editor }~, scroll to the bottom and click **Import**, under **Height Map**.
3. Browse to select either a .raw or .dds file.

When importing height maps, consider the following tips:

- {{ProductName}} expects the same type of .raw files that Photoshop can import and export:

    - 1 channel
    - 16 bits
    - IBM order

- Resolutions are also important:

    - Power of 2
    - 256x256, 512x512, … 2048x2048, 4096x4096
    - Resolutions above 4096x4096 may not function properly.
    - Resolutions below 64x64 may not function properly.
