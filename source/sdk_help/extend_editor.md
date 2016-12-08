# Extend the Editor

You can write plug-ins that add new content authoring tools and workflows to the Stingray editor. Our goal is for the editor's plug-in system to be flexible enough to accommodate literally any project editing tasks. We know we're not quite there yet, but you can already do great things with this framework! We're hoping that if you decide to join in the fun of adding new features to the editor, you'll consider sharing your work with the rest of the user community -- and most definitely share with us your feedback about your experiences at:

This section provides some tips on getting started extending the editor with your own plug-ins.

>	<http://www.autodesk.com/stingray-forums>

## Getting started

1.	Most of the widgets and panels in the Stingray editor are plug-ins, just like the ones you can create for yourself. You can find their *.plugin* descriptors, and all the other JavaScript files and other resources that they rely on, under the *editor/plugins* folder within your Stingray installation folder. This is a rich set of working examples for you to draw on as you build your own plug-in. See the ~{ Example Plug-ins }~ for details on where you can find these in your Stingray install.

1.	Start by understanding the *extensions* that you can set up for your plug-in. These extensions define the points of integration between your plug-in and the editor: in other words, how your plug-in hooks in to the editor. You'll need to have a good idea of what extensions the editor supports in order to figure out how to achieve what you want for your plug-in. For more, see the detailed descriptions of each extension under ~{ Use extensions to define plug-in behaviors }~.

2.	The Stingray editor is mostly written in JavaScript, and it offers several ways for you to get your own JavaScript code to run in its environment. When you do, you'll be able to call out to a wide array of JavaScript services and other utilities that are available in that environment.

	For more on programming in the editor's JavaScript environment, see ~{ Tips for developing plug-ins }~, and ~{ Use built-in editor services }~.

	See also the [editor JavaScript reference documentation](editor_js/index.html), which contains a browsable companion to the JavaScript APIs offered by the editor's services and extensions.

3.	For many plug-ins, you'll need to create some UI for users working in the editor to interact with. The editor extensions make it relatively easy to set up HTML panels whose data and interactions are controlled by JavaScript modules. You can set this up however you want -- if you're already comfortable using a web front-end development framework to set up the binding between your page UI, you should be able to use your preferred tech.

	The panels and views in the Stingray editor mostly use [Mithril](http://mithril.js.org/), and sometimes [Angular.js](https://angularjs.org/). If you can, we highly recommend using Mithril for your own plug-in, since you'll be able to steal more liberally from existing plug-ins. You also may be able to re-use shared UI widgets that you'll find in the *editor/core/components* folder.
