# DDS texture file settings for Stingray

If you want to import engine-ready texture files that don't require compilation on import, you can use the DDS format.

Use the following texture compression settings when saving DDS files to use in your Stingray project:

| Image type | Compression method |
|---|---|
| Color information without alpha | DXT1 <br>(BC1, 4bpp) |
| Color information with alpha | DXT5 <br>(BC3, 8bpp) <br> (8bit x4 Alpha, Red, Green, Blue Direct Draw Surface files with DXT5 BC3 compression) |
| Normal maps | BC5 |

> **Tip:** For color textures, turn on sRGB. Turn sRGB off for masks and normal maps.
