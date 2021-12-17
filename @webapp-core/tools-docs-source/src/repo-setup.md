= repo-setup

In order to create some great developer experience, a web application is best developed in one or more mono-repositories. Doing this ensures that the big building blocks, like BE/FE/..., are easy to develop, because of not needing to switch repositories for smaller things, but also the devops like setting up CI/CD becomes less complex and easier. Using a mono-repo approach also helps in the use of smaller packages that each focus on a single responsibility or bounded-context, which makes management and development of these again easier.

Some downsides however are the size of the repository, and the need for an extra tool to manage this, though tools like rush makes this very easy with extra benefits like running tests and builds in parallel.

How you split the repositories in 1 or more mono-repos is decided based on the components in the overall architecture (FE/BE/DEVICE/....) as well as the team or multiple teams working on the project. The location of a package doesn't matter in the view of re-usability, as long as it gets published. It does matter however for developing the package, so put each package in the mono-repo of the (sub-)team that will work the most on that package. Other criteria are usage, like if it's only used for BE code, then put it in the BE mono-repo. There probably are other reasons that can be checked in order to decide where a package should go, just keep in mind that wherever you place it, it's the easiest to work on and use for the team and project.

That said, when you have the possibility to put all in 1 big mono-repo, it's recommended to do so, so you can avoid setup and configuration of CI/CD tooling to manage multiple mono-repositories that need to work together on versioning.

For tooling, I know of Lerna and Rush. The former can be used, but is definitely not ideal for actual web applications. It's more suited for libraries that publish a host of packages that need to be published together with similar versioning schemes. For actual business web applications, Rush is really recommended. It's created specifically for this use-case, and has lots of tooling and help provided.
