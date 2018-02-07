# Update to the latest changes from Autodesk

The Autodesk Games repositories are automatically updated with new changes from our internal development mirror. However, if you have created your own forks, your forks will not automatically be kept in sync with their "upstream" sources. The head revisions of your forks will remain at their current commits until you explicitly update them.

There are several ways that you can update your fork using GitHub or your local Git client. The following suggestions may work for you. See the [GitHub help](https://help.github.com/articles/syncing-a-fork/) if you need more detail.

## Before you update

We generally recommend cleaning your source directory of any generated, untracked files each time you update to a newer revision. This makes sure that any deprecated or obsolete files from previous builds are no longer around to cause potential problems when you work with the new revision.

For example, the following command line removes all untracked directories and files:

```
> git clean -dxf
```

See also [the Git clean documentation](http://git-scm.com/docs/git-clean).

## Method 1: using GitHub

This is a fast and simple way to update to the latest revision when there are no conflicts between your fork and the Autodesk repository.

1.	From the home page of your fork in GitHub, start a new pull request.

2.	Use your branch in your fork as the base, and use the corresponding branch in the upstream source repository as the head.

3.	If there are differences between your base fork and the upstream source, you will be able to create and merge the pull request.

## Method 2: local merge

This approach may be better if you have made changes in your fork that may conflict with changes made in the upstream source repository.

1.	Get a local copy of your branch from your fork.

2.	If you don't already have a remote named `upstream` set up in your local repository, create one. Set it up to point back to the main Autodesk Games repository.

3.	Pull the changes from the `upstream` repository to your local branch. Make sure you pull from the right branch: if you're currently working in the `master` branch of your fork, pull from the `master` branch of the upstream remote; if you're currently working in the `develop` branch of your fork, pull from the `develop` branch of the upstream remote.

4.	Your Git client should alert you of any conflicts that it found. If you have any conflicts, resolve them now.

5.	Commit and push your local changes back up to your fork.

See also [this topic](https://help.github.com/articles/syncing-a-fork/) in the GitHub help for instructions on carrying out these tasks using the command line.

## Method 3: delete and recrate your fork

If your fork doesn't contain any changes that you have made, you can make sure you're starting with a clean slate by first [deleting your fork](https://help.github.com/articles/deleting-a-repository/), then forking the main <https://github.com/AutodeskGames/stingray> repository again. Follow the instructions under ~{ Clone the source and manage submodules }~ again to get a fresh local copy.

## After you update

Always remember to update your libraries again, in case the requirements have changed. See ~{ Library dependencies }~.

---
ExcludeIf:
-	MaxInteractive
---
