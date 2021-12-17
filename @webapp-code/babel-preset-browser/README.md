When not setting any options for preset-env, the browserslist config will be used, which is found starting from
process.cwd() and up. It's a best practice to put this in the root of the mono-repo, as all packages are for your
webapp. Off course, you then need to duplicate it when you have several mono-repos, but that is more of an edge-case,
and applications can drop supported browsers on their on timeline.
