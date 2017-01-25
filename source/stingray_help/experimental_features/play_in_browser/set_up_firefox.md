# Use Mozilla Firefox to run your project

This page describes how to set up Firefox to ~{ Run your project in a browser using WebGL }~.

## Step 1. Get a compatible version

WebGL 2.0 is now supported in the official Firefox public release, for **64-bit** systems. You don't need to install a pre-release version. 

## Step 2. Set up Firefox

WebGL 2.0 is disabled by default, so you'll need to enable it in your browser settings.

1.	Open Firefox and enter **about:config** in the location bar. Click **I accept the risk!** to continue past the warning.

1.	Find the following settings and double-click them to change their values to `true`:

	-	`webgl.enable-prototype-webgl2` or `webgl.enable-webgl2`
	-	`webgl.enable-draft-extensions`

	![Firefox flags](../../images/experimental_webgl_firefox_flags.png)

2. Since data is read as a URL, change the following setting to `false` to allow reading from `file://url`:

	`security.fileuri.strict_origin_policy`
