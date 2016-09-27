#Editor Tools Architecture

This is a quick tour of the editor **current** architecture. In the next few months this architecture will evolve and will crystiallize to reach the following vision:

- A User should not have to modify the C# solution to create its own plugin
- The Backend Service API will become the official **editor public API**
- The Backend Service API will be available in Lua (as it is currently available in Javascript)

##C# Solution general infos:

- All of the core services and utility class are in the foundation project. All modules depends on the foundation project
- All panels/tools are created as module and are available in the Modules folder.
- At startime stingray loads all modules dynamically.
- Modules allows you to create tools (with HTML views), or menu action or anything that can adds functionality to stingray editor (importer…).
- The backbone of the foundation of Stingray are the Services:
	- AssetService
	- ProjectService
	- Various EditingServices.
	- EngineService
	- C# services providing core functionalities to other C# Services or to the JS view.

The backend itself is about modifying stingray datas and handling communication with various external processes (External Engine, Data compiler). The backend should NOT contains workflow or UI related stuff (event though it currently does…). This will get fixed in the next coming months. Basically the backend should be about data, and the javascript views should use the different backend services to implement workflows.

##About JS -> C# Communication

- We use websocket for communication between the views and the backend.
- We use an open protocol through the websocket connection to invoke method on *remote backend objects*.
- Communication is bi-directional:
	- Views can modified backend datas
	- Backend can modified datas and notified the views about it.
- At the core of the Communication is the **MarshallingService** (both a C# and JS implementation). This service takes C# objects and sends them to the view as Json data. **RemoteObjects** can then be used from the views to “invoke method remotely” on their backend counterpart.

##About the views:
- The views are built using a web technology stack. JS + HTML + CSS. We use Angular as the web application framework.
- Angular is quite complicated (we are working on exposing simpler building blocks to the user). I suggest if you want to do real fancy UI that you do an angular tutorial… But for simple stuff it should be fine.
- From the views, you can use the dependency injection mechanism of angular to get a reference to backend services and actually do some work with the backend.

## Javascript services facades

The current public API of Stingray editor is exposed through the Javascript Services Facades (in **editor\backend\core\js\angular\services**). These javascript services are allowing easy access to their C# Counterpart.

By looking at the functions of those services you get a glimpse of how the websocket RPC protocol is used to invoke methods on remote objects.

## History Tool Overview
As an example of all this, I will try to explain how a really simple tools works. This will explain how the basic concepts like **Remote Objects** and **Services** are wired together.

So let start explaining how the History tool works. This is the tool showing what operations have been done in stingray and allow you to undo/redo or see your command list history.

To open it use the Main Menu bar: **Window -> History**.

In order to create this tool we had to:

- Create a module file for it. D:\stingray\editor\backend\modules\debug_support\DebugModule.cs is this module file (not a really good name I will admit).
- This module doesn’t do a lot in C#. It only accesses the HostService (kind of a catchall for everything related to UI) and register a menu a a custom dialog.

```C#
namespace Stingray.Module.Debug
{
  public class DebugModule : IModule // Derive from IModule
  {
      // Uses Castle Window injection mechanism to have the relevant service injected.
      // Basically you can specify any Stingray services and they will gets passed to your module.
      public DebugModule(
          [NotNull] HostService menu_service,
          [NotNull] HostService dialog_service)
     {
         dialog_service.RegisterDialog("JsonViewer", new JsonViewerViewModel());

         RegisterMenu(menu_service);
     }

     public void RegisterMenu(HostService host_service)
     {
         // Register a menu that will pop a tool. “history” is the html
         // file corresponding to this tool. (see in debug_support\Views\history.html).
        host_service.RegisterMenuPanel(new MenuPanel("Window/History", GetType(), "history", 355)
            {
                IsNewTabMenuItem = true
            }
        );
     }

     public void Load(Foundation.Project.ProjectService project_service)
     {
         // callback when a new project is loaded
     }

     public void Unload()
     {
         // callback when the current project is unloaded.
     }
 }
}
```

Generally a Javascript View is made out of 3 files. An html **angular template file**, a javascript controller and a css file. The location of these files (especially the html and js) is important to the HostService. All html + js file should be in the **Views** folder of your module

History template file infos: editor\backend\modules\debug_support\Views\history.html
```html
<link rel="stylesheet" href="css/history.css" />
<!-- This is mostly angular stuff -> is binds this template file with a controller. The controller itself is defined in history.js
   Each time you see ng-XXX it means an angular directives.
   Similarly if you see: {expression} it means an angular expression is evaluated according to the scope of the template (more angular parlance).
   If you don’t care about angular you could create your UI in whatever way pleases you more (jquery…). But you would still
   need a basic angular template + controller to properly
   Inject the C# service in your web application.
-->
<div class="module-history fullscreen stingray-panel panel-flex-vertical" ng-controller="historyController">
    <div class="toolbar">
        <div class="left-section">
            <button class="standard-btn" ng-disabled="!commandService.UndoManager.CanUndo" ng-click="undo()">
                <i class="fa fa-undo"></i>
                &nbsp;Undo
            </button>
            <button class="standard-btn" ng-disabled="!commandService.UndoManager.CanRedo" ng-click="redo()">
                <i class="fa fa-repeat"></i>
                &nbsp;Redo
            </button>
        </div>
    </div>
    <div class="history-content panel-fill">
        <div class="history-vs stingray-panel-dark fullscreen">
            <ul vs-repeat="20" vs-excess="24" vs-scroll-parent=".history-vs" adsk-goto-link-handler>
                <li ng-repeat="item in history track by $index"
                    class="history-item text-no-wrap-ellipsis"
                    ng-click="handleClick($event, $index)"
                    ng-class="{highlight: isCurrent($index)}">
                    <span data-ng-bind-html="sanitize(item)"></span>
                </li>
            </ul>
        </div>
    </div>
</div>
```

History tool controller: D:\stingray\editor\backend\modules\debug_support\Views\history.js
```javascript
define(["app",
    "lodash",
    "services/view-model-marshalling-service",
    "services/debug-service"
], function (app, _) {
    "use strict";

    document.title = "Editing History";

    app.viewModel('commandService', "Stingray.CommandService.CommandService");

    // Angular controller: all of the parameters in the function are either angular services (starting with $ or Stingray services
    // (the one with service in the name)). These services will be injected in your controller at startup.
    app.controller("historyController", function ($scope, $q, $sce, viewModelMarshallingService, commandService) {
        $scope.commandService = commandService;

        //////////////////////////////////
        // There 3 functions listens to command history and update our reverse sorted list of commands
        $scope.commandService.History.itemsAdded.push(function (itemsAdded/*, index*/) {
            _.each(itemsAdded, function (item) {
                // Insert at the top of the "history stack"
                $scope.history.splice(0, 0, item);
            });
        });

        $scope.commandService.History.itemsRemoved.push(function (itemsRemoved/*, index*/) {
            // Remove at the top of the "history stack"
            $scope.history.splice(0, itemsRemoved.length);
        });

        $scope.commandService.History.collectionCleared.push(function () {
            $scope.history.length = 0;
        });
        //////////////////////////////////
        // All the functions assigned to $scope are available in the Html templates.
        $scope.isCurrent = function (index) {
            return $scope.commandService.CurrentOperationIndex === $scope.toModelIndex(index);
        };

        $scope.undo = function () {
            return viewModelMarshallingService.invokeMethod($scope.commandService.UndoManager, 'Undo');
        };

        $scope.redo = function () {
            return viewModelMarshallingService.invokeMethod($scope.commandService.UndoManager, 'Redo');
        };

        $scope.handleClick = function (event, index) {

            // TODO: Handle link?

            // Click is not on a goto link: try to handle a "timewalk" in the history stack
            // by doing multiple undos/redos at the same time.
            var modelIndex = $scope.toModelIndex(index);
            if (modelIndex < $scope.commandService.CurrentOperationIndex) {
                return viewModelMarshallingService.invokeMethod($scope.commandService,
                		'Undo',
                        $scope.commandService.CurrentOperationIndex - modelIndex);
            } else if (modelIndex > $scope.commandService.CurrentOperationIndex) {
                return viewModelMarshallingService.invokeMethod($scope.commandService,
                	'Redo', modelIndex - $scope.commandService.CurrentOperationIndex);
            }
        };

        $scope.toModelIndex = function (uiIndex) {
            // UI index are reverse of the service history index.
            return $scope.history.length -1 - uiIndex;
        };

        $scope.sanitize = function (str) {
            return $sce.trustAsHtml(str.replace(new RegExp('\r?\n', 'g'), '<br>'));
        };

        // Init the history list from the commandService.History: we display this list like a stack (newest element on top).
        $scope.history = [].concat($scope.commandService.History);
        $scope.history.reverse();
    });
});
```
All the stingray services: marshallingService, assetService have a javascript counter parts that wraps how a remote calls are made. Check the editor\backend\core\js\angular\services\ folder for more services.

Examples of how remote calls are done and wrapped in the asset-service.js
```javascript
this. isAssetEditable = function (resourceName) {
    // Uses the marshallingService to invoke a remote call on the _service remote objects (the C# counterpart).
    // The method to invoke is IsAssetEditable.
    // This C# method takes a string as a parameter.
    // The result is a javascript promise that will trigger when the remote call is done.
    return viewModelMarshallingService.invokeMethod(_service, 'IsAssetEditable', resourceName);
};
```

You would use this function that way:
```javascript
assetService. isAssetEditable (“/core/mymaterial.material”).then(function (isEditable) {
     // Do something with the isEditable data
});
```
