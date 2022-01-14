const { RushConfiguration } = require('@microsoft/rush-lib');

const configPath = RushConfiguration.tryFindRushJsonLocation();
const rushConfig = configPath && RushConfiguration.loadFromConfigurationFile(configPath);

/**
 * @type {import('@webapp-config/project-config-model/lib/project-config').ProjectConfig|undefined}
 */
module.exports = rushConfig === undefined ? undefined : toProjectConfig(rushConfig);

/**
 * @param {RushConfiguration} rushConfig
 * @returns {import('@webapp-config/project-config-model/lib/project-config').ProjectConfig}
 */
function toProjectConfig(rushConfig) {
  return {
    packages: rushConfig.projects.map((project) => ({
      packageFolder: project.projectFolder,
    })),
  };
}
