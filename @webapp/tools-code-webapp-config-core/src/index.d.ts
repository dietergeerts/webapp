declare namespace webapp {
    /**
     * Minimal configuration needed to have all `@webapp` packages configured.
     * Most things are based on conventions and best-practices, unless they only
     * depend on the project itself, then we need the ability for configuration.
     */
    export interface WebappConfig {
        /**
         * Configuration on packages used by the webapp.
         * These can also include packages from other projects.
         */
        packages: {
            /**
             * All package scopes to include in configuration.
             * Only source files from these scopes will be handled.
             * Make sure to include the `@` sign as indicator of scope.
             */
            scopes: string[]
        }
    }

    /**
     * Calculated settings based on the loaded configuration.
     * Handy to not always need to construct RegExp and Glob expressions.
     */
    export interface WebappSettings {
        patterns: {
            /**
             * Sources are files in the "main" package directory.
             */
            sources: {
                all: { regExp: RegExp }
            }
        }
    }
}
declare const webapp: webapp.WebappSettings;
export = webapp;
