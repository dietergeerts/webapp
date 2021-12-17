const {declare} = require('@babel/helper-plugin-utils');
const webapp = require('@webapp-core/webapp-config')
const packageJson = require('../package.json');

module.exports = declare((api) => {
    api.assertVersion(packageJson.peerDependencies["@babel/core"]);

    return /** @type {babel.TransformOptions} */ ({
        overrides: [{
            test: /\.(js|jsx|ts|tsx)$/,
            include: webapp.patterns.sources.all.regExp,
            /**
             * Passing no config will use the `.browserslistrc` config instead.
             * This will calculate which polyfills need to be included for your browsers.
             * @see {@link https://babeljs.io/docs/en/babel-preset-env#browserslist-integration}
             */
            presets: [require.resolve('@babel/preset-env')]
        }]
    })
})
