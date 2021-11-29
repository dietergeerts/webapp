const webapp = require('@webapp/tools-code-webapp-config-core')
const util = require("util");

/**
 * The `env` option will get deprecated soon, so we need to look at other env vars.
 * @see {@link https://babeljs.io/docs/en/babel-preset-react#babelrc}
 */
const MODE = process.env.BABEL_ENV || process.env.NODE_ENV || 'production';
const development = MODE === 'development';

/**
 * Will use the `.browserslistrc` config to find out which polyfills need to be included.
 * @see {@link https://babeljs.io/docs/en/babel-preset-env#browserslist-integration}
 */
const envOptions = {};

module.exports = /** @type {babel.TransformOptions} */ ({
    overrides: [{
        test: /\.ts$/,
        include: webapp.patterns.sources.all.regExp,
        presets: [
            [require.resolve('@babel/preset-env'), {...envOptions}],
            [require.resolve('@babel/preset-typescript')]
        ]
    }, {
        test: /\.tsx$/,
        include: webapp.patterns.sources.all.regExp,
        presets: [
            [require.resolve('@babel/preset-env'), {...envOptions}],
            [require.resolve('@babel/preset-react'), {runtime: 'automatic', development}],
            [require.resolve('@babel/preset-typescript'), {isTSX: true, allExtensions: true}]
        ],
    }]
})

console.debug('[@webapp] Babel config:', util.inspect(module.exports, {depth: null, colors: true}))
