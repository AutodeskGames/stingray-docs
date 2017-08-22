# Source code management

This topic describes the source code repositories, and provides some recommended workflows for consuming them.

## About the repositories

If you have followed all the steps described under ~{ Register as a developer }~, you should have been invited to become a member of the **Autodesk Games** team on GitHub.

Visit the team's home page at:

<https://github.com/AutodeskGames>

You should see a private repository named **stingray**. This repository is your main entry point to the source code. It contains everything you need to rebuild fully working versions of the engine, the editor, and the other editing tools. All customers with source access use this repo as a starting point.

### About the submodules

The binary versions of {{ProductName}} that we ship as official releases also contain some additional code modules that require special access rights to see and use. These modules are isolated in their own repositories, which are linked in to the main source code repository on GitHub as *[submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules)*.

If your organization has access to the code for one or more of these modules, you should see additional repositories under the **Autodesk Games** team:

-   **stingray-ps4**: Code that integrates with the PlayStation 4 console, which we are only allowed by Sony to distribute to licensed PlayStation developers.

-   **stingray-xb1**: Code that integrates with the Xbox One console, which we are only allowed by Microsoft to distribute to licensed Xbox developers.

-   **stingray-internal**: Internal code that is relevant to us for our official releases, but not relevant to your custom builds -- things like license management, crash reporting, Autodesk user account management, etc. This module is never released to customers.

By using Git submodules for this code, we are trying to control access while enforcing that the modules always remain synchronized with each other. However, this does add some complexity to cloning and working with the repository. We recommend that you invest a little time up front in gaining a good understanding of how Git submodules work.

Essentially, each submodule is a just a pointer to a specific commit from a different repository. The **stingray** repo has three of these submodule pointers: one for each of the modules listed above. When you clone a submodule, the code at that specified commit is cloned from its repository into your local clone of the main source code repo. So, you could also think of each submodule as a "nested" repository.

For more background information on submodules, see the [Git documentation](https://git-scm.com/book/en/v2/Git-Tools-Submodules) or the [GitHub blog](https://github.com/blog/2104-working-with-submodules).

For practical instructions on setting up your repo to use these submodules, see also ~{ Clone the source and manage submodules }~.

### Branch conventions

All source code repositories are already set up with the following branches:

-   `master`: This is a tested, QA-approved branch. It typically corresponds to a milestone release of the publicly released binary installer packages. It receives periodic, controlled updates that roll up all changes made in the develop branch since the last update.

-   `develop`: This branch is a live mirror of the internal development branch used internally within Autodesk. This branch receives very frequent and potentially disruptive commits. Therefore, it is generally recommended that you work from the master branch unless you need a particular feature or fix that has been introduced since the last update to the master branch.

    If you do choose to work with the `develop` branch, we recommend that you make sure you **back up your game project and your assets** each time you update to the latest code. This can help you recover in case an instability in the `develop` branch causes a corruption in your data.

-   `release/1.X.0`: These branches come and go as we prepare for each successive public release. While a release branch is open, it typically receives only bug fixes for features that are already in. Newer features typically go into develop instead, so that they wind up in the succeeding public release.

For the most part, the contents of this documentation on the web reflect the current state of the `master` branch. If you do choose to work with the `develop` branch, keep an eye on the `readme.md` file at the root of the repository for any updates to the required software and build processes.

## Forking the repositories

We highly recommend that you create your own fork of each repository that you have access to.

If you intend to work on the source in your own version control system, it may seem simpler and faster to clone the Autodesk Games branches directly, or even download zips of the codebase. However, using your own forks has some advantages:

-	Better traceability. You always have a clear record of exactly which branch and which revision you last retrieved, and you can easily diff the starting point of your own code base against any revision of any branch shared by Autodesk, or even any branch shared by another user in the community.

-	(Potentially) easier merging. When you need to update your code base to get new changes from Autodesk (see ~{ Update to the latest changes from Autodesk }~), Git will take care of automating the merge as much as possible, and warn you of any updates that conflict with custom modifications that you may have made in your branch.

-	Easier to contribute changes. You cannot merge changes directly or create branches in the main Autodesk Games repositories. Therefore, if you want to contribute any of your own fixes or new developments back to the {{ProductName}} community (see ~{ Contribute changes back to the community
 }~), you will need to have a fork of your own from which to make your pull request.

Once you have your own fork, you can clone a local copy of the source code to your computer to work with.

### Access to private forks

If you create your own forks, you must understand who has access to those forks:

-	**Autodesk administrators always have full access to your forks.** This means that Autodesk can see all the changes you push, and can modify the settings of your repository.

	This access cannot be revoked. It is a consequence of the GitHub private repository sharing model.

-	**By default, all other source customers have read access to your forks.** This means that developers in other organizations can see any changes that you push to your fork.

	You can revoke this access in your fork's settings. In GitHub, on the home page for your fork, click **Settings**. On the **Collaborators** tab, remove all the listed teams you are able to remove.

You must be aware when you push changes to a fork that you have made from the Autodesk Games repository that you are making it visible to Autodesk, and potentially to others outside your organization. We therefore recommend that you only push changes that you intend to submit back to the community, or that does not contain any sensitive material or intellectual property.

## Working with your own source control system

You probably have a source code versioning system in place within your organization already, which you may want to continue using. Once you have retrieved a revision of the source code from Autodesk, there is no requirement to continue doing day-to-day development in your fork of the `stingray` repo. You can put that code into your own version control system, using your own set of tools for merging the new revision into your existing code base.

In this setup, you'll use GitHub only as a mechanism for picking up changes from Autodesk, and potentially for contributing changes back to us.

However, remember that you are responsible for protecting access to this code. Please do not put the source into your own public repositories, or anywhere else that is accessible to unlicensed users outside of your organization.
