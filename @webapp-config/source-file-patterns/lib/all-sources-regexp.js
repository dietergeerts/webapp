const projectConfig = require('@webapp-config/project-config');
const escapeStringRegexp = require('escape-string-regexp');

const DIR_SEP = '[\\\\/]';
const SOURCES = '(?!node_modules)';
const PACKAGES = `(${
  projectConfig.packages
    .map((pkg) => escapeStringRegexp(pkg.packageFolder))
    .join('|')
})`;

module.exports.ALL_SOURCES_REGEXP = new RegExp(
  `${DIR_SEP}${PACKAGES}${DIR_SEP}${SOURCES}`,
);
