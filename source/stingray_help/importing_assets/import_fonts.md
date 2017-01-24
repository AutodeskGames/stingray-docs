# Import fonts

[![NEW](../images/new.png "What else is new in v1.7?")](../release_notes/readme_1.7.html)

You can import font files to generate font resources to render text with sharp edges and preserve them when scaling.

>**Note:** Fonts are imported using the **Distance Field Font Importer** plug-in which is loaded automatically in the **Plugin Manager**.

>**Note:** MSDF (Multi-channel Signed Distance Field) does not work on all fonts, and will likely fail on more complex fonts.

1. In the **Asset Browser**, create a folder to save your font files.
2.	Click **Import**, browse to select a font file and click **Open**. Or simply drag and drop a font to the Asset Browser.
3.	In the window that appears, enable **Distance Field Options**, change the font settings if required and click **Import**.

    ![](../images/import_font.png)

  >Note: Hover over the options in this window for description. For some fonts, you may need to adjust the Character Width and Character Height settings to display with high resolution.

 On import, multi-channel signed distance field resources are generated for the font. You can use the fonts to display text using Lua.
