# Source code management

This topic describes the Stingray source code repositories, and provides some recommended workflows for consuming them.

## About the repositories

If you have signed up for all the accounts described in ~{ User accounts }~, you should have been invited to become a member of the Autodesk Games team on GitHub.

Visit the team's home page at:

<https://github.com/AutodeskGames>

You should see a private repository named **stingray-public-platforms**. If your organization has access to the code for other "closed" platforms that require special authorization, you may see additional repositories for those platforms.

Each of these repositories is already set up with two branches:

-   `master`: This is a tested, QA-approved branch. It typically corresponds to a milestone release of the installer packages available on the beta portal. It receives periodic, controlled updates that roll up all changes made in the develop branch since the last update.
-   `develop`: This branch is a live mirror of the internal development branch used internally within Autodesk. This branch receives very frequent and potentially disruptive commits. Therefore, it is generally recommended that you work from the master branch unless you need a particular feature or fix that has been introduced since the last update to the master branch.

    If you do choose to work with the `develop` branch, we recommend that you make sure you **back up your game project and your assets** each time you update to the latest code. This can help you recover in case an instability in the `develop` branch causes a corruption in your data.

For the most part, the contents of this documentation reflect the current state of the `master` branch. For more recent changes that have been made in the `develop` branch, see the changelogs under the `docs/changelog` directory.

### Code mirroring and redactions

The Autodesk Games repositories are automatically populated from internal repositories used by the Stingray development team within Autodesk. The content of the repositories is identical with respect to the game development features of the end product.

However, the Stingray code does use some internal Autodesk libraries that cannot be shared with customers. This is typically for uses such as licensing, error feedback, etc. Only the official pre-compiled packages built and distributed by Autodesk can make use of these libraries.

Therefore, the source code in the Autodesk Games repositories has been lightly redacted to remove any code that makes use of these libraries. You may see occasional
blocks that are filled with empty comments, and that begin with the following line:

```
// The following lines have been redacted to avoid sharing code intended only for official Autodesk builds.
```

The blank commented lines have been left in order to preserve the line numbering for the code that follows the redacted sections.

## Forking and cloning the repositories

We highly recommend that you create your own fork of each Stingray repository that you have access to.

If you intend to work on the Stingray source in your own version control system, it may seem simpler and faster to clone the Autodesk Games branches directly, or even download zips of the codebase. However, using your own forks has some advantages:

-	Better traceability. You always have a clear record of exactly which branch and which revision you last retrieved, and you can easily diff the starting point of your own code base against any revision of any branch shared by Autodesk, or even any branch shared by another user in the community.
-	(Potentially) easier merging. When you need to update your code base to get new changes from Autodesk (see ~{ Updating to the latest changes from Autodesk }~), Git will take care of automating the merge as much as possible, and warn you of any updates that conflict with custom modifications that you may have made in your branch.
-	Easier to contribute changes. You cannot merge changes directly or create branches in the main Autodesk Games repositories. Therefore, if you want to contribute any of your own fixes or new developments back to the Stingray community (see ~{ Contributing changes back to the Stingray community
 }~), you will need to have a fork of your own from which to make your pull request.

Once you have your own fork, you can clone a local copy of the source code to your computer to work with.

### Access to private forks

If you create your own forks, you must understand who has access to those forks:

-	**Autodesk administrators always have full access to your forks.** This means that Autodesk can see all the changes you push, and can modify the settings of your repository.

	This access cannot be revoked. It is a consequence of the GitHub private repository sharing model.

-	**By default, all other Stingray source customers have read access to your forks.** This means that developers in other organizations can see any changes that you push to your fork.

	You can revoke this access in your fork's settings. In GitHub, on the home page for your fork, click **Settings**. On the **Collaborators** tab, remove all the listed teams you are able to remove.

You must be aware when you push changes to a fork that you have made from the Autodesk Games repository that you are making it visible to Autodesk, and potentially to others outside your organization. We therefore recommend that you only push changes that you intend to submit back to the Stingray community, or that does not contain any sensitive material or intellectual property.

## Working with your own source control system

You probably have a source code versioning system in place within your organization already, which you will want to continue using. Once you have retrieved a revision of the Stingray code from Autodesk, there is no requirement to continue doing day-to-day development in the `stingray-public-platform` fork. You can put that code into your own version control system, using your own set of tools for merging the new revision into your existing code base.
