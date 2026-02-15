import json from '@eslint/json'
import jsonc from 'eslint-plugin-jsonc'
import { defineConfig } from 'eslint/config'
import { jsonRules, jsonC5Rules } from './eslint.rules.json.mjs'

/* #region  CONFIG */
export default defineConfig([
  /** -----------------------------------------
  *  GLOBAL IGNORE
  * ---------------------------------------- */
  {
    ignores: [
      '.nx/*',
      'coverage/*',
      'dist/*',
      'lib/*',
      'dist-dev/*',
      'dist-preprod/*',
      'dist-prod/*',
      'doc/*',
      '.azurite/**',
      'tmp/*',
      'node_modules/**',
      '**/node_modules',
      'package-lock.json', // The file can be too big and is auto-generated, we don't want to wast resource on it
    ],
  },
  /** -----------------------------------------
  *  JSON CONFIG
  * ---------------------------------------- */
  {
    files: [
      '**/*.json',
    ],
    plugins: {
      json,
      jsonc,
    },
    rules: jsonRules,
  },
  {
    files: [
      '**/*.json5',
      '**/*.jsonc',
      '*.code-workspace'
    ],
    plugins: {
      json,
      jsonc,
    },
    rules: jsonC5Rules,
  },
])
/* #endregion */
