const webapp = require('@webapp/tools-code-webapp-config-core')

module.exports = /** @type {babel.TransformOptions} */ ({
    overrides: [{
        test: /\.js$/,
        include: webapp.patterns.sources.all.regExp,
        presets: [[require.resolve('@babel/preset-env'), {targets: {node: 'current'}}]]
    }]
})