const configFromRush = require('@webapp-config/project-config-from-rush');

const config = [configFromRush].find((config) => config !== undefined);

if (config === undefined) {
  throw new Error(
    '[@webapp] Unable to load your project configuration. Tried looking for a setup with Rush.' +
    ' Let us know about your project configuration, so we can add it to the list.',
  );
}

/**
 * @type {import('@webapp-config/project-config-model/lib/project-config').ProjectConfig}
 */
module.exports = config;
