= Package setup

Following several rules around packages, especially their naming, will allow for easier development, as devs will know
what they stand for, but also for configuration, as configs will be easier because we always know what actual source
files will be and what the tooling/config files are.

One such rule is the placement of all source code inside a package, which should always be inside a "main" directory,
which should be called either "bin", "lib" or "src", depending on the "type" of package. This will simplify
configuration by a lot! and all of the actual source files will be grouped together nicely.

Naming wise, it's recommended to follow good naming guidelines, especially on prefixes, to allow configuration to be
simple, and to have a good understanding of the responsibility of the package. Following is a list of rules to consider.

Prefixes to use:

- client-
- server-
- domain-
- tools-code-
- tools-docs-
- tools-lint-
- tools-test-

Some other naming guidelines:

- -config-{context} (for packages that provide configuration, like -babel-config-node, ....)
- -runner (for packages that run a tool on the whole mono-repo, like linting.)
- -cli (for packages providing a CLI to run)
- -app- (for actual application packages that are like an endpoint that will be bundled and deployed, or just deployed
  and ran.)

As for the actual source files, it's recommended to keep then as "flat" as possible, to make it easy to work with them.
There are linting rules on file access that still are to be checked out in order to ensure there is only access to files
that are shared, and not internal, to avoid mis-use, but also to make sure that tree-shaking and code-splitting work as
optimal as possible automatically.

As for tree-shaking, we know that this can't work 100% correctly, especially with the existing packages in the
eco-system. therefor, it's better to just avoid it by exporting only 1 thing from a file, which also helps in
discoverability.

Always use named exports, as IDEs can help you much better on them, unless it's configuration or something else that
can't be named due to how they are required. For example webpack config, which just gets required based on the filename.

---

Having worked more with mono-repos, I always had some problem with the sheer amount of packages. It's great to make
really small packages focussing on single responsibility, as then managing that package becomes way easier, but it
doesn't help with going through the directories. Therefore, I believe it would be better that the scope of packages,
which is generally used for the company or user, is used for indicate both this and the focus of that group of packages.
This focus could be a big component that is deployed as a single thing, like a report service, or a certain web app. But
it also could be a split in technical things, like documentation tooling (@webapp-tools-docs, or just @webapp-docs).

Knowing this, the above section about naming guidelines can become a bit harder, though I believe it's still correct and
should be used as much as possible, but then also together with the package scope, and probably a bit more configurable.
We could let the developer configure what tooling packages are, based on a scope suffix, or on a package prefix/suffix,
or we can even just let them specify a regex/glob themselves to use in configurations. Off course, some prefixes will
still need to be on the package name itself, as `client`, or `server` etc.... as the point of the scope suffix is to
group packages into functional groups, and these aren't that. So it might become a combination of all the above. Maybe
like `@webapp-docs/tools-`, `@webapp-code-tools/babel-preset-blabla`, `@webapp-reports/tools-code-babel-preset-blabla`.
