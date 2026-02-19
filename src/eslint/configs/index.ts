import { configIgnores } from './ignores'
import { configJSON, configJSON5, configJSONC } from './json'
import { configLintErAll, configLintErAllTest, configStandard } from './ts'
import { configYAML } from './yaml'

/**
 * All configs. This is the main export of the configs module, and includes all the individual configs for different file types and purposes. Each config is designed to be used with ESLint's flat config system, and can be extended or customized as needed. The configs are organized by file type (e.g., ts for TypeScript, json for JSON files) and by purpose (e.g., standard for standard style guide, lintErAll for more opinionated rules). The global ignores config is applied to all configs to ensure that certain files are always ignored regardless of the specific config being used.
 */
export const _configs = {
  lintErAll: [
    configIgnores,
    configJSON,
    configJSON5,
    configJSONC,
    configLintErAll,
    configLintErAllTest,
  ],
  /**
   * Global ignores, applied to all configs. This is useful for ignoring files that are not relevant to linting, such as build artifacts, dependencies, and other generated files.
   */
  ignores: configIgnores,
  /**
   * JavaScript and TypeScript configs. These configs are applied to JavaScript and TypeScript files, and include rules for both languages.
   */
  ts:      {
    /**
     * Standard config - https://standardjs.com
     * The standard config is based on the popular StandardJS style guide, which is a widely used set of rules for JavaScript and TypeScript development.
     */
    standard:      configStandard,
    /**
     * LintErAll opinionated config. This config is more opinionated than the standard config, and includes additional rules that are not part of the standard style guide. These rules are designed to enforce best practices and improve code quality, but may be more strict than some developers prefer. It's recommended to use this config for new projects or when you want to enforce a higher level of code quality, but it may require some adjustments to existing codebases to comply with the stricter rules.
     */
    lintErAll:     configLintErAll,
    /**
     * LintErAll opinionated config for test files. This config is more lenient than the main LintErAll config, and includes rules that are specifically designed for test files. These rules allow for common testing patterns that may not be ideal in production code, but are often necessary in tests (e.g., using require for dynamic imports, allowing empty functions for mocks, etc.). This config is applied to test files (e.g., *.test.ts, *.spec.ts) to provide a more flexible linting experience while still maintaining code quality in test code.
     */
    linterAllTest: configLintErAllTest,
  },
  /**
   * JSON configs. These configs are applied to JSON files, and include rules for JSON syntax and best practices. The JSON config is for standard JSON files, the JSONC config is for JSON files with comments (JSONC), and the JSON5 config is for JSON files with more relaxed syntax (JSON5). Each config includes rules that are specific to the syntax and features of the respective JSON format, while also sharing common rules for general JSON best practices.
   */
  json: {
    /**
     * Standard JSON config
     */
    json:  configJSON,
    /**
     * JSONC config.
     */
    jsonc: configJSONC,
    /**
     * JSON5 and VSCode config files
     */
    json5: configJSON5,
  },
  /**
   * YAML config. This config is applied to YAML files, and includes rules for YAML syntax and best practices. The YAML config is designed to enforce consistent formatting and structure in YAML files, while also providing rules for common YAML pitfalls and best practices.
   */
  yaml: configYAML,
}
