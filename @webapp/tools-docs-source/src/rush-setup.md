= Rush setup

There are several things that can help with the setup of the mono-repo, so that later development goes smoothly without much configuration or hassle. So lets go over that here.

First off, it's recommended to use pnpm, as then your dependencies will not install if they are incorrect regarding peers, if pnpm is configured correctly that is. This is great, as it helps avoid bugs from having ghost packages, etc... You can find more info in the rush documentation on the specifics and other details.

As for the projects themselves, when you use a directory structure that resembles the package names, you will have way less problems with configuration like webpack, as the actual filename/path will have the actual package name in it. So it's definitly recommended to follow this approach. When you have only 1 npm scope, you can use that directory for you projects folder, if not, you can still have a parent directory for grouping if you want, but make sure the last directories for each package is always the package name. Knowing this, you should go ahead and configure rush to enforce this, by setting the depth settings conform to you package names, which will depend if you have a scope or not, and if you want parent directories for grouping. It's recommended to use a scope, either one resembling your company, or your project, in which you will create these packages.
