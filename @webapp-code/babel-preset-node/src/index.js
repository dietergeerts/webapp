const {declare} = require('@babel/helper-plugin-utils');
const webapp = require('@webapp-core/webapp-config')
const packageJson = require("../package.json");

module.exports = declare((api) => {
    api.assertVersion(packageJson.peerDependencies["@babel/core"]);

    return /** @type {babel.TransformOptions} */ ({
        overrides: [{
            test: /\.(js|jsx|ts|tsx)$/,
            include: webapp.patterns.sources.all.regExp,
            presets: [[
                require.resolve('@babel/preset-env'),
                {targets: {node: 'current'}}
            ]]
        }]
    })
})
