const {cosmiconfigSync} = require('cosmiconfig')

const config = cosmiconfigSync('webapp').search().config;

module.exports = /** @type {webapp.WebappSettings} */ ({
    patterns: {
        sources: {
            all: {
                regExp: new RegExp(`[\\\\/](${config.packages.scopes.join('|')})[\\\\/].+?[\\\\/](lib|src|test)[\\\\/]`)
            }
        }
    }
})
