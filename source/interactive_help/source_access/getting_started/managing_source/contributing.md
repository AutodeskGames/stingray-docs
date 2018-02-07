# Contribute changes back to the community

{{ProductName}} is an ongoing work in progress. It is not perfect, and may never be so, but we are trying hard every day to make it the best choice for you to achieve your vision.

By making the source code available to customers, we hope to accelerate this process. If you can make your own immediate fixes and modifications to fix issues or make your lives easier, so much the better.

Some of those changes will likely be closely tied to your own projects and/or the specific workflows you use in your organization. However, it's very likely that some would be of interest to other customers using the {{ProductName}} engine and editing tools as well. We hope that you will consider sharing these kinds of modifications back to the community.

If you choose to contribute features or fixes, the expected workflow is as follows:

1.	If possible, update your fork to use the latest version of the branch it tracks from the upstream Autodesk Games repository. This will make it easier for the Autodesk team to evaluate the impact of your changes against the current code base. This is likely to result in a faster turnaround if your modifications are accepted.

2.	Commit the changes you want to share into a branch of your own fork of the `stingray` repository.

3.	Go to the main page for the `stingray` repository in GitHub: <https://github.com/AutodeskGames/stingray>.

4.	Make a new pull request to merge the changes from your fork into the `develop` branch of the main repository.

	It's important that you give us as much information as you can in your pull request, so that we have enough context to understand the purpose of your code changes. For example, what problem were you trying to solve? Do your changes add any other dependencies or side-effects? If you added new items to the user interface or scripting environment, how are they intended to be used?

The Autodesk team will examine your changes and determine how best to handle them. This may include coming back to you with additional questions, so keep an eye on your pull request, or set up e-mail notifications.

Assuming your changes are eventually approved to be rolled in to the product, the Autodesk team will merge them into our internal development repository. The results will then be shared back to you in a new revision to the official `develop` branch of the upstream repository. You can then update your own fork in order to pick up the modifications.

---
ExcludeIf:
-	MaxInteractive
---
