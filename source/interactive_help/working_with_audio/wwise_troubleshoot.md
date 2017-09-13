# Troubleshoot Wwise licensing errors

Some customers report seeing a Wwise licensing error when opening a project, which includes the text:
"No valid license key found."

This can occur if you previously used a beta version of {{ProductName}}, if you created the Wwise project outside of {{ProductName}}, or if you manually upgraded Wwise outside of {{ProductName}}.

To fix this issue, try either of the following:

## Update the Wwise settings file

1. In interactive editor, select **File > Settings > Update Wwise Project Settings**.

## Manually import the license:

1. Save the following key in a .txt file:

    PHByb2plY3QgaWQ9IjIyNTUiIG1hc2s9IkNDWEM2OTU1IiBlbmM9IjIiPjxsaWNl
  bnNlIGlkPSIxIiBuYW1lPSJXd2lzZSIgdHlwZT0iMiIgcGxhdGZvcm1zPSIyLDMs
  NCw1LDYsNywxMCwxMSwxMiIgZXhwaXJlcz0iMjA0NS0wNy0zMSIgIC8+PGxpY2Vu
  c2UgaWQ9IjIxIiBuYW1lPSJNYWludGVuYW5jZSIgdHlwZT0iMiIgIGV4cGlyZXM9
  IjIwNDUtMDctMzEiICAvPjxsaWNlbnNlIGlkPSIyNCIgbmFtZT0iTGV2ZWwgQyBM
  aWNlbnNlIiB0eXBlPSIyIiBwbGF0Zm9ybXM9IjIsMyw0LDUsNiw3LDEwLDExLDEy
  IiBleHBpcmVzPSIyMDQ1LTA3LTMxIiAgLz48L3Byb2plY3Q+|ajD5tQKULncLT3F
  /iBqy48rS9HiUjgPg4MrW2i5gjfghORHu6lBjWZ/PV7t0v39xXSWpDNc13tnwyrQ
  Hp/Wu/AgPlLpPN5rx3biYVjSuWRsdYzkvMID593XsnL4TeGpjVYkWoc9E/wId3BA
  haf5idfvOp+KLbO0JI5ocTMsiUwRGAI294eMwsQ6CAlx/1bcUeMrPm+IVc0P5uN7
  EWB3KIj46Lg6heUKKSTfduwzAOsrxLDrG2qab+96wAxk1mttCZsRLm3ddVZFiI/x
  XuOOT61kX+N3+ixGm5M4LMfOSyPMpRC7xsy9BHvC29zS8ZFPstawSpDtSN1O3Lfb
  tGaZqMQ==

2. Open the Wwise Authoring tool (**Window > Wwise Audio**) and select **Project > License Manager**.

3. Click **Import License** and then browse to select the .txt file.
