The "current" node version will be used to transpile through babel. It's best-practice to only specify a certain node
version in your rush configuration, and let this package then use that version to know how to transpile your code. If
you want to support more node version, specify more, and make sure that you have CI jobs that run everything on all
supported versions.

Best-practice to use TS for source code, so this is also configured to only handle `.ts` files. All JS is for tooling,
and don't need to be ran through babel to work, as that will complicate tooling with extra setup. Reference your types in JSDocs instead to get typing help when writing code.
