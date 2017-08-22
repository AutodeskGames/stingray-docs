# Switch between DX11 and DX12

Developers with source access can toggle between DX11 and DX12 in the Editor, provided your system supports both renderers.

>**Note**: To add support for DX12 in your projects, compile the engine with `--use-d3d12` flag.

To switch between DX11 and DX12, do either of the following:

1.	Select **Edit > Engine > Renderer** and then select **DX11** or **DX12**.
2.	Launch the **Omni Tool** (Ctrl + P), enter DX to search for DX11 or DX12 and select **Edit/Engine/Renderer/DX11** or **Edit/Engine/Renderer/DX12**.

You can also specify which default renderer to use in the project using the render settings in your *settings.ini*.  Add a *supported_renderers* field in render_settings and specify the order of supported renderers to boot.

```
win32 = {
    render_settings = {
        supported_renderers = [ "d3d12", "d3d11" ]
    }
}
```
