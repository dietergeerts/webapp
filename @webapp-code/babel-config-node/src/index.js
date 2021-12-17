const webapp = require('@webapp-core/webapp-config')
const util = require("util");

module.exports = /** @type {babel.TransformOptions} */ ({
    overrides: [{
        test: /\.ts$/,
        include: webapp.patterns.sources.all.regExp,
        presets: [
            [require.resolve('@babel/preset-env'), {targets: {node: 'current'}}],
            [require.resolve('@babel/preset-typescript')]
        ]
    }]
})

console.debug('[@webapp] Babel config:', util.inspect(module.exports, {depth: null, colors: true}))
