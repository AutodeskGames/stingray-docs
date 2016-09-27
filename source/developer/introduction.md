# Introduction to the Developer Help

This documentation is for developers working with the Stingray source code distribution. It describes how to get the source code, how to rebuild the engine and editing tools, and how to extend and customize Stingray for use in your own game projects.

## Before you begin

Please be aware that Stingray is under active development. Although the code for the runtime game engine is relatively stable, the new Stingray Editor toolset is being developed from scratch. It is undergoing very active development, with frequent changes and refactoring.

On the positive side, this gives you an opportunity to exert a large amount of direct influence on the product. We want to make Stingray meet your needs, so there is no better time than now to get involved and contribute your feedback about the features and their implementations.

However, in order to facilitate the rapid pace of development needed to make this project a reality, Autodesk cannot at the moment commit to maintaining backward compatibility between updates to the source code. Therefore, the more custom modifications you make, and the more tightly you bind your own developments to the Stingray source code, the more conflicts you are likely to have to resolve the next time you update to the latest source from Autodesk.

Whenever possible, try to minimize the points of direct contact between your own code and the Stingray code base. For example, you may be able to take advantage of the plug-in API offered by the runtime engine in order to safely integrate your own code. See ~{ Writing engine plug-ins }~ for details.
