= Package setup

Following several rules around packages, especially their naming, will allow for easier development, as devs will know what they stand for, but also for configuration, as configs will be easier because we always know what actual source files will be and what the tooling/config files are.

One such rule is the placement of all source code inside a package, which should always be inside a "main" directory, which should be called either "bin", "lib" or "src", depending on the "type" of package. This will simplify configuration by a lot! and all of the actual source files will be grouped together nicely.

Naming wise, it's recommended to follow good naming guidelines, especially on prefixes, to allow configuration to be simple, and to have a good understanding of the responsibility of the package. Following is a list of rules to consider.

Prefixes to use:
- client-
- server-
- domain-
- tools-code-
- tools-docs-
- tools-lint-
- tools-test-

Some other naming guidelines:
- -config-{context} (for packages that provide configuration, like -babel-config-node-js, ....)
- -runner (for packages that run a tool on the whole mono-repo, like linting.)
- -cli (for packages providing a CLI to run)
- -app- (for actual application packages that are like an endpoint that will be bundled and deployed, or just deployed and ran.)

As for the actual source files, it's recommended to keep then as "flat" as possible, to make it easy to work with them. There are linting rules on file access that still are to be checked out in order to ensure there is only access to files that are shared, and not internal, to avoid mis-use, but also to make sure that tree-shaking and code-splitting work as optimal as possible automatically.

As for tree-shaking, we know that this can't work 100% correctly, especially with the existing packages in the eco-system. therefor, it's better to just avoid it by exporting only 1 thing from a file, which also helps in discoverability.

Always use named exports, as IDEs can help you much better on them, unless it's configuration or something else that can't be named due to how they are required. For example webpack config, which just gets required based on the filename.
