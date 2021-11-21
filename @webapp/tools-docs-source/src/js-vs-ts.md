Although JavaScript is the most common, TypeScript is getting closer, and now that the ecosystem has matured a lot,
there is close-to-non work by the user to provide types of 3rd party libs by themselves. TypeScript also helps in making
sure we write better code, which is more functional. So instead of using JavaScript for our actual sources, it's
becoming more of a best-practice to write actual source code in TypeScript these days, while tooling and configs can
still be written in JavaScript to not make them more complex to setup and run. Another reason to go with TypeScript is
for the auto-inclusion of types for other packages. So for @webapp packages, I think it's decide we'll only go for
TypeScript for our actual source files, and thus there is no need to configure tools like Babel and Webpack for
TypeScript compilation, at least not for the own mono-repo packages, as what we are creating tools for.

Some packages are for tooling of code and configuration, which will not be in TS, but in plain JS, and on those files,
we also don't want babel or other transpilers to run. Even though these are source files, we should exclude them from
source files for creating our webapps, as they are solaly for tooling. Checking if it's a tooling package is not enough,
as we'll have tools like e2e testing and utils for it in there. So we'll have to make sure we can identify the tooling
packages either by, "it's not for code specifically, so e2e etc...", or "it's e2e etc...".

- tools-code- is always about transforming code, so these are base tools which will not be written in TS.
- tools-lint- will always be written in plain JS, as these are configs and runners. We could add custom rules here, but
  as the tools themselves are plain JS, those will also be plain JS for now.

- tools-docs- are actual sources from what we know right now, like StoryBook shared stuff. So we could say for now that
  these are sources.

- tools-test- is a difficult one, these are partly configs and runners, but it also include actual testing and test
  utils, like for e2e testing. So it's this range of packages that we need to split into actual sources and tooling
  sources.

-runner, -cli, -config-, are always plain JS

Some configuration will not be configured that deeply. For example the babel config, as babel will be run by some other
tool that already only sends files that are currently used by the tool, like webpack, mocha, .... So it's OK to not be
too specific, and thus make our regexp and globs easier.

