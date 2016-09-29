# How to add code examples to the Stingray Lua API docs

The Lua API reference doc can consume code samples and link them automatically with the reference docs for the items that are used in the code. This page explains in practical terms what you need to do.

**NOTE:** The linking can't resolve aliases in the code -- it's not a real parser, just a textual comparison. It will only link fully qualified names. So, for best results, don't cache API objects & namespaces in local variables. For example, this will link:

```
stingray.Application.new_world()
```

but this will not:

```
local app = stingray.Application
app.new_world()
```

## General info about description format

In descriptions, you can use Markdown to add formatting and styles like bold, italic, code font, multiple paragraphs, etc.
See [here](../../../build/tools/adoc/docs/comment_formatting.md).

## Building

You can build the HTML doc yourself to check that your sample is getting picked up. Instructions are [here](../../../readme.md).

## Adding snippets

If you have a block of code that includes multiple functions & objects, these steps will get it added under **Samples > Useful Lua Code Snippets**.

1.	Put your code in a .lua file in this folder.
2.	At the top of your code block, add these two lines:

	```
	-- @adoc lua
	-- @exa ex_snippets.internal_id_name Display name goes here
	```

3.	Change the `internal_id_name` to something that makes sense for your example. Change `Display name goes here` to a title that describes your sample.

4.	Copy and paste the same lines after the end of your example.

5.	You can also add a `@des` keyword to the top code block with some description about what your sample shows.

## Embedding examples for a specific function or object

You can use the `@sym` keyword to specify that a code example relates to a particular API element. If you do this, the example will get embedded inline within the documentation block for that element. Like, if you put:

```
-- @adoc lua
-- @exa internal_id_name Display name goes here
-- @sym stingray.Application.new_world
```
the content of your code block will not get put under **Samples > Useful Lua Code Snippets**, it will show up inside the main description block for the `stingray.Application.new_world` function.

## Adding large-scale examples

If you have multiple *.lua* files that all relate to each other and you want to include them all as a unit, that can be done too. This is what we do for the templates and the Appkit.

1.	Put your code inside a folder under snippets.

2.	Edit the build config file at `docs/build/config_adoc_lua_reference.json`

3.	Duplicate one of the existing example config blocks, give it a new ID, title and description. Make its path point to the folder that contains your *.lua* files.
