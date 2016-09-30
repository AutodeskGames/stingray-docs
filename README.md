# Welcome to the Stingray Documentation

This repository hosts all the source files for the Stingray documentation.

This readme is intended to orient internal Autodesk developers and customers to our help and docs systems.

# Viewing the docs

If you want to read the docs, it's best to use the public docs site, at:

<http://www.autodesk.com/stingray-help>

You'll have access there to all the Stingray material in its final format as viewed by customers, including the API references. Note though the on-line help is typically refreshed each time we push a new build out to customers, so it may be a bit behind the latest state of this repository (see [Branching conventions](#branching-conventions) below).

The best way to find out if something is documented in the Stingray Help is to search the docs site above. If you can't find what you're looking for, refer to the next section.

# Contributing to the docs

Our help is a hybrid of multiple different sources and systems, packaged up together into a standard Autodesk presentation layer on the cloud.

Most of the doc is generated from source files that are kept in this Git repository. This includes the topics about workflows, Lua scripting help, documentation on writing plug-ins, reference information about file formats, etc. If you want to contribute to these parts of the docs, you can do so freely, the same way you would any source code.

Source files for these parts of the doc are all maintained in the *source* folder. The organization of the files in this folder more or less matches the organization of the final TOC shown on the public docs site, so it should be pretty easy to figure out where to make your edits and additions. If you need help getting started, contact any member of the documentation team.

## File format

The doc files are written in a plain-text format based on the popular [Markdown](http://daringfireball.net/projects/markdown/) syntax. The tool we actually use in our build process to extract the docs for the public site is called [Pandoc](http://johnmacfarlane.net/pandoc), and it accepts a superset of the syntax normally accepted by Markdown and by GitHub-flavored Markdown. Notably, it offers better control over tables.

For details on what you can do in Pandoc-flavored markdown, see:

<http://johnmacfarlane.net/pandoc/README.html#pandocs-markdown>.

Many good text editors can give you previews of what the Markdown format will look like when transformed into HTML. Although the styles will be different from the styles in our final public help, a preview like this should give you a good enough idea of the structure and markup you're writing. (You can also run a doc build yourself to see the final format; see below.)

## Controlling the TOC

The structure of the TOC is derived implicitly from the folder structure within the *docs\source* directory.

*   Within each folder, topics are by default organized alphabetically by filename.
*   If the name of a sub-folder matches the name of a markdown file, the contents of that subfolder are appended to the TOC as sub-entries of that matching topic.
*   Any unmatched subfolders that contain markdown files are then included at the end as containers whose titles link to the first subtopic.

This has the benefit of making the construction of the TOC totally implicit, with no need for maintaining a separate file. If you add a new source file, it will automatically get included in the docs -- you don't need to remember to go add your file into a TOC file in order for it to show up. The downside, of course, is that it's a drag to use filename sort order if you want to move files around.

However, if you want to specify the order that the topics are presented within a folder, you can place a file named `.toc` in that folder. Each line in this file is read in order, and matched against the names of the topics and sub-folders in the directory. Matching topics are added to the TOC in order; matching directories open a new level of the TOC. Any topic files and directories that aren't matched are appended after the last entry in the `.toc` file using the logic described above.

# Building the docs

1.	Install [Ruby](https://www.ruby-lang.org/en/downloads/), if you don't have it already.

2.	Make sure that you have fully cloned this repo *and* its submodules. You should have a `build/ixg-doc-tools` folder full of stuff, and a `stingray-engine` folder full of stuff.

3.	Go to the `build` folder, and look for the Ruby scripts. You'll find three convenient `make_....rb` files for building the main help, the developer help, and the tutorials individually.

By default, you'll get a local build, which is placed in the `output` folder.

## Build settings

The build process for each chunk of the docs is controlled by an XML configuration file that lives next to the Ruby scripts. You can modify these files to change how the docs are generated and where they end up. For details, see the readme `.docx` file in the `build/ixg-doc-tools/tools` folder.

Feel free to experiment with these settings in your local builds. However, we on the Stingray team would appreciate it if you refrain from posting your builds to the AKN cloud without checking with us, to avoid the possibility of accidentally overwriting something.

# Reference docs

The Stingray docs that are generated from the Markdown source in this repo are bundled with sets of *reference* documentation that are auto-generated from comments in the source code of the Stingray engine and editor.

Building the docs in this docs repository will automatically build these reference docs in the engine submodule, package them up where they're needed, create links for better navigation, etc.

This repo does contain some extra material used when building these references. This includes images and large JSON files that we use to compare different releases of the APIs and create a version history that shows customers exactly what has changed in each different release. We've been asked not to store this material in the main engine repo where the reference docs are generated. So we are keeping it here.

When you build the reference docs using the scripts in this docs repo, that material will get included in the built reference docs automatically.

# Branching conventions

When generating the docs, it's really important to make sure that we keep the info in these Markdown files synchronized with the version of the engine & editor that they refer to. We need to make sure that we're pairing the right help topics with the matching technical docs. It's also important if we need to make an update to correct some errata in the currently public version of the help that we don't bundle in API docs for stuff that's still in develop in the engine and not yet released to the public.

We use a *submodule* to keep every commit of this docs repo linked to a particular commit of the engine repo. This is nice, because we have control what branch of the engine's technical docs we're picking up for each docs build.

In order to avoid confusion, we're adopting the following conventions for how we update those submodule references in different branches of this repo:

-	The `master` branch shall always be the latest public "live" help. Anytime we need to make a change to the stuff that is live, we do it here. This branch's submodule will typically point to the `master` branch of the engine repo.

	**NOTE** This is not currently the case! We have started this repo in the middle of the 1.6 dev cycle, basing it on the mainline `develop` content. So, if we need to update the live 1.5 docs before 1.6 is ready, we will need to use the old repo instead of this one.

-	The `develop` branch of this repo should track the `develop` branch of the engine repo. Anytime we're doing work that applies to something done in the mainline develop branch of the engine, we put it here. This branch's submodule will point to a relatively recent commit in the `develop` branch of the engine repo.

-	When the engine repo creates a `release/1.X` branch, we'll create one here too. Most of our work will probably get done in these release branches. Each release branch's submodule will point to a relatively recent commit in the corresponding branch of the engine repo.

Submodules don't "advance" automatically; we have to specifically set them every so often when we need to change the commit of the engine repo that we want to pick up. We'll start by doing this once a sprint, and on-demand if needed for some reason.

## Release workflow

The overall release workflow is this:

-	We work in our `develop` branch on new features as they get done in the engine's `develop` branch.

-	When the engine branches for a release, we create a corresponding `release` branch and start working on release-specific content in there.

-	Every sprint:

	-	we merge our `release` branch back into our `develop` branch.

	-	we update the submodules for our `develop` and `release` branches to point to the most recent commits.

-	When the release goes FCD and we want to publish the help, we merge our `release` branch into `master`, and update its submodule to point to the newest `master` of the Stingray engine.

It sounds complicated, but it should be pretty flexible and easier than periodically doing big merges of all the engine code into doc branches, as we were doing when we were part of the same repo.
