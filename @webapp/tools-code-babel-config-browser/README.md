Even though I like Vue better, and I want to experiment with web components too, I think it's OK to include react preset
for `tsx` files, but not on `ts` files. So that when a webapp would use it, it's perfectly fine to do so.

When not setting any options for preset-env, the browserslist config will be used, which is found starting from
process.cwd() and up. It's a best practice to put this in the root of the mono-repo, as all packages are for your
webapp. Off course, you then need to duplicate it when you have several mono-repos, but that is more of an edge-case,
and applications can drop supported browsers on their on timeline.
