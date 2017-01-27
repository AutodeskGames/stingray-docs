# Welcome to the Stingray Documentation

This repository hosts all the source files for the Stingray documentation.

This readme is intended to orient internal Autodesk developers and external customers to our help and docs systems.

# Viewing the docs

If you just want to read the docs, it's best to use the public docs site, at:

<http://www.autodesk.com/stingray-help>

You'll have access there to all the Stingray material in its final format as viewed by customers, including the API references. The content in this public site always corresponds to the last released version of Stingray, and typically matches the content of the `master` branch in this `stingray-docs` repository.

The best way to find out if something is documented in the Stingray Help for the current release is to search the site above.

# Talk to us!

If all the stuff below sounds like a lot of work, and you'd rather just *tell* us about a problem or an omission that you see, please don't be shy. You can log an issue here in this repo, you can write a comment in the "Was this helpful?" box at the bottom of any topic in the help, or you can post on [the forums](http://www.autodesk.com/stingray-forums) about it (if you want to embarrass us in front of everybody). We *do* read them all, promise!

# Contributing to the docs

Our Stingray help is a hybrid of multiple different sources and systems, packaged up together into a standard Autodesk presentation layer on the cloud.

Most of the doc is generated from source files that are kept in this Git repository. This includes the topics about workflows, Lua scripting help, documentation on writing plug-ins, reference information about file formats, etc. If you want to contribute to the docs, this repository is your place to start!

## Internal and external repos

This `stingray-docs` repo actually exists in two places:

-	Internally within the Autodesk network, in an private enterprise instance of GitHub. This is where the Stingray team works day to day.

-	On the public `github.com` site, visible to the world. This is a mirror of the internal repo that is automatically updated any time the internal repo gets a commit in its master branch.

What this means is that when you submit a pull request to our public GitHub repo, we don't merge it straight in. We bring the changes into our internal repo, then the changes get pushed out automatically to the public mirror. When that's done, we close your pull request.

## Using GitHub for external customers

If you're not already familiar with using GitHub to contribute to open-source projects, there are lots of primers [like this one](https://guides.github.com/) out there on the Internet. There are also lots of tools that can help make it easier, like [Sourcetree](https://www.sourcetreeapp.com/), [GitKraken](https://www.gitkraken.com/), [GitHub Desktop](https://desktop.github.com/), etc.

You submit modifications to us using *pull requests* -- the mechanism GitHub uses to exchange, review and accept changes to a repo from other users. Here's a couple of different ways you can go about proposing changes to us through a pull request:

-	**An easy way, for small changes.** Each topic on the main help site has a green `Edit this page in GitHub!` button that takes you directly to the source for that topic in this repo. As long as you have a GitHub account, you can click the little pencil icon to edit the content right in your browser, and then click the **Propose File Changes** button at the bottom of the page. GitHub will automatically create a pull request for your change.

-	**A more flexible way to make bigger changes.** First, you create your own *fork* of our repo under your own user account (just click the **Fork** button at the top of this page). Then, you can make changes in your fork freely, as much as you want. You can make your changes directly in the GitHub web client, or you can *clone* the fork to your computer, make your changes locally, *commit* the changes and *push* them back up to GitHub. Then, when your fork is the way you want it, you can use the GitHub web interface to start a pull request to merge the changes from your fork back to our repo.

## Source organization

Source files for these parts of the doc are all maintained in the *source* folder. The organization of the files in this folder more or less matches the organization of the final TOC shown on the public docs site, so it should be pretty easy to figure out where to make your edits and additions.

**NOTE:** This repo also has a couple of *submodules* that point to other repositories. Currently these submodules are hidden away in our private GitHub cloud, so you can't access them. If you're working in the public mirror, you might occasionally run into errors when cloning or pulling from this repo, telling you that the submodules can't be found. Don't worry about it, that's expected! If the errors are getting in the way though, you might be able to avoid these errors by configuring your Git client not to *recurse* into submodules.

## File format

The doc files are written in a plain-text format based on the popular [Markdown](http://daringfireball.net/projects/markdown/) syntax. The tool we actually use in our build process to extract the docs for the public site is called [Pandoc](http://johnmacfarlane.net/pandoc), and it accepts a superset of the syntax normally accepted by Markdown and by GitHub-flavored Markdown. Notably, it offers better control over tables.

For details on what you can do in Pandoc-flavored markdown, see:

<http://johnmacfarlane.net/pandoc/README.html#pandocs-markdown>.

Many good text editors can give you previews of what the Markdown format will look like when transformed into HTML. Although the styles will be different from the styles in our final public help, a preview like this should give you a good enough idea of the structure and markup you're writing. (You can also run a doc build yourself to see the final format; see below.)

As a general rule, if the GitHub preview looks good, you can be pretty sure that your content will be formatted correctly in the final build.

## Controlling the TOC

The structure of the TOC is derived implicitly from the folder structure within the *docs\source* directory.

*   Within each folder, topics are by default organized alphabetically by filename.
*   If the name of a sub-folder matches the name of a markdown file, the contents of that subfolder are appended to the TOC as sub-entries of that matching topic.
*   Any unmatched subfolders that contain markdown files are then included at the end as containers whose titles link to the first subtopic.

This has the benefit of making the construction of the TOC totally implicit, with no need for maintaining a separate file. If you add a new source file, it will automatically get included in the docs -- you don't need to remember to go add your file into a TOC file in order for it to show up. The downside, of course, is that it's a drag to use filename sort order if you want to move files around.

However, if you want to specify the order that the topics are presented within a folder, you can place a file named `.toc` in that folder. Each line in this file is read in order, and matched against the names of the topics and sub-folders in the directory. Matching topics are added to the TOC in order; matching directories open a new level of the TOC. Any topic files and directories that aren't matched are appended after the last entry in the `.toc` file using the logic described above.

## Links to other topics

You might notice that our topics use a funny syntax to refer to other topics -- like, they'll say `~{ Asset Browser }~`. Our doc build turns those automatically into links to the other topics, wherever they live in the `source` folder. This is nice because you don't have to mess around with relative paths to other files that might break if those target files move. You can use regular Markdown linking too, this is just a helpful shortcut.

## Related topics and page metadata

At the bottom of each page on the help site, you'll usually find links to other pages. The links up to the parent topic in the TOC and the links to child pages are created automatically during the doc build, so you don't have to do anything for those.

You can also create links to other pages manually, by putting them in a YAML metadata block, like this:

~~~
---
Related topics:
-	~{ Page Title }~
---
~~~

You can put other kinds of metadata in the YAML block too. Currently our build handles:

-	`Tags:` A list of keywords that the search indexer should point to this page, even if those terms don't appear in the page content. This is best used not for boosting the search rank for things that already appear in the page, but rather for adding synonyms or other words that people might use to search for the content on a page.

Other kinds of metadata don't affect the resulting page in the docs.

## Variables

Sometimes, especially for software versions, you'll see places where the Markdown file has a placeholder string instead of a real value. This is done so that we can keep those things that change frequently in each release in one place, instead of having to hunt down all the references to them all over the docs. You can find the definitions for these variables inside the `build/variables.ini` file.

# Inside info

The following sections are intended only for people with access to the internal version of this source repository. Our build tools are still private for the moment. And the content in the reference docs is pulled from comments in the engine source, so it's also private. (But if you spot an error or a problem in the reference docs, don't hesitate to tell us about it -- see above!)

## Building the docs

1.	Install [Ruby](https://www.ruby-lang.org/en/downloads/), if you don't have it already.

2.	Make sure that you have fully cloned this repo *and* its submodules. You should have a `build/ixg-doc-tools` folder full of stuff, and a `stingray-engine` folder full of stuff.

3.	Go to the `build` folder, and look for the Ruby scripts. You'll find three convenient `make_....rb` files for building the main help, the developer help, and the tutorials individually.

By default, you'll get a local build, which is placed in the `output` folder.

### Build settings

The build process for each chunk of the docs is controlled by an XML configuration file that lives next to the Ruby scripts. You can modify these files to change how the docs are generated and where they end up. For details, see the readme `.docx` file in the `build/ixg-doc-tools/tools` folder.

Feel free to experiment with these settings in your local builds. However, we on the Stingray team would appreciate it if you refrain from posting your builds to the AKN cloud without checking with us, to avoid the possibility of accidentally overwriting something.

## Reference docs

The Stingray docs that are generated from the Markdown source in this repo are bundled with sets of *reference* documentation that are auto-generated from comments in the source code of the Stingray engine and editor.

Building the docs in this docs repository will automatically build these reference docs in the engine submodule, package them up where they're needed, create links for better navigation, etc.

This repo does contain some extra material used when building these references. This includes images and large JSON files that we use to compare different releases of the APIs and create a version history that shows customers exactly what has changed in each different release. We've been asked not to store this material in the main engine repo where the reference docs are generated. So we are keeping it here.

When you build the reference docs using the scripts in this docs repo, that material will get included in the built reference docs automatically.

## Branching conventions

When generating the docs, it's really important to make sure that we keep the info in these Markdown files synchronized with the version of the engine & editor that they refer to. We need to make sure that we're pairing the right help topics with the matching technical docs. It's also important if we need to make an update to correct some errata in the currently public version of the help that we don't bundle in API docs for stuff that's still in develop in the engine and not yet released to the public.

We use a *submodule* to keep every commit of this docs repo linked to a particular commit of the engine repo. This is nice, because we have control what branch of the engine's technical docs we're picking up for each docs build.

In order to avoid confusion, we're adopting the following conventions for how we update those submodule references in different branches of this repo:

-	The `master` branch shall always be the latest public "live" help. Anytime we need to make a change to the stuff that is live, we do it here. This branch's submodule will typically point to the `master` branch of the engine repo.

	**NOTE** This is not currently the case! We have started this repo in the middle of the 1.6 dev cycle, basing it on the mainline `develop` content. So, if we need to update the live 1.5 docs before 1.6 is ready, we will need to use the old repo instead of this one.

-	The `develop` branch of this repo should track the `develop` branch of the engine repo. Anytime we're doing work that applies to something done in the mainline develop branch of the engine, we put it here. This branch's submodule will point to a relatively recent commit in the `develop` branch of the engine repo.

-	When the engine repo creates a `release/1.X` branch, we'll create one here too. Most of our work will probably get done in these release branches. Each release branch's submodule will point to a relatively recent commit in the corresponding branch of the engine repo.

Submodules don't "advance" automatically; we have to specifically set them every so often when we need to change the commit of the engine repo that we want to pick up. We'll start by doing this once a sprint, and on-demand if needed for some reason.

### Release workflow

The overall release workflow is this:

-	We work in our `develop` branch on new features as they get done in the engine's `develop` branch.

-	When the engine branches for a release, we create a corresponding `release` branch and start working on release-specific content in there.

-	Every sprint:

	-	we merge our `release` branch back into our `develop` branch.

	-	we update the submodules for our `develop` and `release` branches to point to the most recent commits.

-	When the release goes FCD and we want to publish the help, we merge our `release` branch into `master`, and update its submodule to point to the newest `master` of the Stingray engine.
