# Working with the Stingray Editor code

The topics in this section provide some information about the architecture of the Stingray Editor, how it ties in to the engine, and how you can extend its UI to add new functionality.

The code for the Stingray Editor is all kept under the `editor` sub-directory. It is divided into two areas:

-	a front-end application, which provides the main QT window that hosts the editor's widgets and tools. You may need to modify this area of the code if you want to add new menu options.
-	a  back-end application, which combines a UI built in HTML5 and Javascript with back-end business logic written in C#. Most modifications you will want to make, like adding new panels to create or manage some kind of custom data, will require writing code in both layers.
