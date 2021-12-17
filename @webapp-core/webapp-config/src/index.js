const {cosmiconfigSync} = require('cosmiconfig')
const util = require("util");

const config = cosmiconfigSync('webapp').search().config;

console.debug('[@webapp] webapp config:', util.inspect(config, {depth: null, colors: true}))

const DIR = '[\\\\/]';
const SCOPES = `(${config.packages.scopes.join('|')})${DIR}`;
const PKG_ALL = `.+?${DIR}`;
const SCR_ALL = `(bin|lib|src|test)${DIR}`;

module.exports = /** @type {webapp.WebappSettings} */ ({
    patterns: {
        sources: {
            all: {
                regExp: new RegExp(`${DIR}${SCOPES}${PKG_ALL}${SCR_ALL}`)
            }
        }
    }
})

console.debug('[@webapp] webapp settings:', util.inspect(module.exports, {depth: null, colors: true}))
