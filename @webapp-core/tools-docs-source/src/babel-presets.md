For the babel presets, we have chosen to split them functionally in layers, to be used in order, more like webpack
loaders. This means that when a developer adds both the node and typescript preset, they have to be in order. This makes
sure we have less packages that are easier to maintain, though the developer needs to add them in a certain order for
them to work. We could also have created more packages per file type, so the order they are added doesn't matter
anymore, but we did not do this. This is OK, as babel also specifies that the order is important, and if developers
would create a config themselves, they also need to place the base presets of babel in the correct order.

So we best place a link with a little documentation in our docs/readme files, so developers are aware of this.