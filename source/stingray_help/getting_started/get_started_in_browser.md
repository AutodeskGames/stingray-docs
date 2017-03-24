# Get started with web deployment

![](../images/updated.png)

These pages tell you everything you need to know in order to get started developing projects that will run in a web browser.

In this release, you can:

-	Launch your project in a browser straight from the Stingray editor.
-	Deploy your project to disk. This lets you launch the project in a browser later on, or host it on a web server so that others can launch it remotely.

You can't yet:

-	Mirror the Stingray editor viewport to the browser.
-	Run the Stingray editor or any of its tools in the browser to edit your levels and projects.

In addition, you may notice that not all of the rendering settings offered by the shading environment are available yet when the project is running in the browser. We're still working on making more of these high-quality effects work under WebGL.

## Step 1. Install a supported browser

Stingray requires WebAssembly and WebGL 2.0 (including OpenGL ES 3.0 and GLSL 3.00), which are currently supported by Google Chrome (Version 57) and Mozilla Firefox (Version 52).

## Step 2. Deploy the project to web

To launch your project in a browser from the Stingray editor, you'll use the the **Connections** panel to set up a new web target for each browser you want to use. (See also ~{ Using the Connections panel }~.)

1. In the **Connections** panel (**Window > Deploy and Connect > Connections**), specify a name to identify the connection.

1. Set the **Platform** option to **Web**.

1. Set the **Browser Path** to point to the *.exe* file for your installation of Firefox or Chrome.

1. Leave the **Command Line** blank. For web connections, this defines extra parameters that are sent to the launched HTML page in the URL search string. These command-line parameters will be passed to the URL as GET parameters, which are then read by the engine and honored just like any platforms. If you want to customize the HTML page, enter the parameters here. Note that parameters that won’t make sense in the context of a web page might not yield the intended results.

	![Web connection](../images/web_connection.png)

1.	To deploy the project to disk, open the **Deployer** panel to the **HTML5** tab. Set up the requested fields, and click **Package Project for Web**.

	![WebGL deployment](../images/web_deployer.png)

	See also ~{ Using the Deployer panel }~.

When you get the project successfully running in the browser, it looks something like this:

![A project running in WebGL](../images/experimental_webgl_running.jpg)

## About the web project output

When you launch or deploy to the web target, Stingray compiles your project's assets the same way it does for any other platform. It writes all the compiled resources to the `web` folder under your project `_data` folder and reads the data directly from here to display it as a URL.

Deploying the project to the web target copies the `web` directory to the final location you set in the **Deployer** panel.  This folder will also contain:

-	A set of *.js* files that are essentially the result of compiling the game engine's runtime code into JavaScript.

-	An *.html* wrapper that loads the engine JavaScript and instructs it to launch your project. This default page is branded with Stingray logos, but you can customize it freely if you want, or use it as a model to write your own HTML wrapper page.

To launch your project from disk, open the *.html* wrapper file in any supported browser. To launch your project over an Internet connection, host these files on a web server and direct your browser to open the wrapper *.html* file at its URL on your web server.

## About the launch process

Starting up a Stingray project in the browser is a multi-step process. This sequence happens automatically without you needing to do anything, but it can be helpful to know a bit about what's happening behind the scenes.

1.	**Downloading**. In this step, your browser loads into memory all of the engine JavaScript and the compiled data that makes up your project.

	If you're running from a copy of the project on disk, like when you launch from the **Connections** panel, this step will probably be virtually instantaneous. However, if you're connected remotely to a project hosted on a web server, this may take some time, depending on the size of your project.

	![](../images/new.png) In order to save time downloading the same content the next time you load the page, Stingray stores the downloaded content in your browser's IndexedDB local storage. (This can speed things up especially if you're running the project on a remote server.) You may find that you need to clear this cache from your browser if you're not seeing updates to your content as expected.

1.	**Preparing**. This compiles the downloaded JavaScript code.

	The first time you run a project in the browser, this step can take some time to complete. Subsequent launches usually go faster.

	You may find that this step takes longer when shared memory is enabled for the browser. This is a tradeoff in order to get smoother performance once the project is actually running.

1.	**Running**. In this step, the page starts running the compiled JavaScript that makes up the engine.

1.	**Loading**. This step starts up your project in the Stingray engine, loading up your resources and finally opening the viewport.

	The time this step takes to complete depends on the amount of content in your project, and what kinds of resources you're loading. For example, materials tend to take a long time to load up, so projects with many materials will have a longer wait here.

	As with the *preparing* step, browser caching typically makes future launches faster.

## Troubleshooting tips

If your project doesn't run in the browser:

-	If you have a problem launching from the **Connections** panel, double-check that your **Browser path** points to a supported version of your browser.

-	Press **F12** to open the Firefox or Chrome developer tools.

	The **Console** tab in the developer tools lists any JavaScript errors the browser encountered when trying to open the project. It also lists any messages that your game project writes to the log. This can sometimes be helpful in diagnosing where a problem occurs.

- Here are some of the errors we've heard about, and how to fix them:

	- **Error:** “Invalid typed array range”
		**Solution:** Too much memory was required to even open the page. (We request 1GB up front before running engine.) This happens frequently with 32bit browsers, use a 64bit browser instead.

	- **Error:** “Cannot enlarge memory”
		**Solution:** Project is allocating more than the maximum memory permitted (currently 1GB). Reduce your project memory footprint.

-	If you're launching the project from a web server, you may need to specify the [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) the server should use for the *.mem* file generated by the packaging process. Use the `text/html` MIME type. See the documentation for your web server for details on how to set this up.

-	Have you run into a different problem? Let us know about it [on the forum](http://www.autodesk.com/stingray-forums).
