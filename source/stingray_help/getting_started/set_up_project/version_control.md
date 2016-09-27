# Work with a version control system

Most game development projects involve multiple different people contributing their efforts over a potentially long time. Losing work due to machine failure or data corruption can be catastrophic to the project. Therefore, most games typically use some kind of version control system (VCS) during development in order to track changes to the project, to back up the project's assets, and to ease collaboration between the members of the project.

Stingray is intended to be agnostic to whatever version control system you choose to use. Rather than build in direct support for different popular source control systems like Git, Subversion (SVN), or Perforce, Stingray simply stays out of the way by keeping the data that you really need to track separate from automatically generated data.

This page outlines some considerations to keep in mind when working with a version control system.

## Plain-text game data

One big benefit of Stingray with regard to version control is that much of the game data that you author in the Stingray Editor is stored in your project's source directory in the plain-text SJSON format. (See also ~{ About the SJSON data format }~.)

Because these files are plain-text and not binary, multiple different contributors can easily create branches in the source control system and merge their changes together without overwriting each other's modifications.

## What to track and what not to track

Your Stingray project usually consists of three folders:

-	The main project source folder that contains your game's raw data. <span style="color:#007700">**Track this folder in version control.**</span>

-	The `_wwise` folder, which contains your game's audio project and raw audio files. <span style="color:#007700">**Track this folder in version control.**</span>

-	The `_data` folder, which contains the game data compiled into binary format for each of the game's target platforms. <span style="color:#CC0000">**Do not track this folder in version control.**</span>

	Anyone working with your project's source data in the Stingray Editor can re-create these compiled binary files, so it is not necessary to record them in version control.

## Avoid read-only files

Make sure your project resources are not read-only when you work in the Stingray Editor. If you are using a system like SVN that locks the files it tracks, check out your project's source folder so that the files it contains will be writeable.

## Writing a `.gitignore` file

If you choose to use Git, you can take advantage of its `.gitignore` feature to automatically filter out all of the files in your compiled `_data` directory from being tracked. For background information on `.gitignore` files, see the [Git documentation](http://git-scm.com/docs/gitignore).

To do this, create a new text file called `.gitignore` in the root directory that contains your Stingray project folders, and set it up with an entry that excludes your compiled data directory.

For example, suppose that:

-	`D:\projects\MyStingrayProject` is your project's main source directory,
-	`D:\projects\MyStingrayProject_wwise` is your audio directory, and
-	`D:\projects\MyStingrayProject_data` is your data directory.

In this case, you would name your file `D:\projects\.gitignore`.

>	**Tip:** By default, Windows Explorer won't let you name a file `.gitignore`, since it only allows files that have both a name and an extension. However, you can get around this limitation by naming the file `.gitignore.` with an extra `.` at the end. Windows Explorer will remove the trailing period automatically.

The `.gitignore` file would contain the following line:

~~~
MyStingrayProject_data/
~~~

This will make Git ignore all files inside the project's compiled data directory.
