import json from '@eslint/json'
import pluginImport from 'eslint-plugin-import'
import jsonc from 'eslint-plugin-jsonc'
import pluginNode from 'eslint-plugin-n'
import pluginPromise from 'eslint-plugin-promise'
import { defineConfig } from 'eslint/config'
import pluginTypescript from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import { importRules, nRules, promiseRules, standardOverrideRules, standardRules } from './eslint.rules.js.mjs'
import { jsonC5Rules, jsonRules } from './eslint.rules.json.mjs'
import { reactRules } from './eslint.rules.react.mjs'
import { tsRules } from './eslint.rules.ts.mjs'
import pluginReactRefresh from 'eslint-plugin-react-refresh'
import globalsConfig from 'globals'

const globals = {
  ...globalsConfig.node,
  ...globalsConfig.jest,
  ...globalsConfig.browser,
  // ...globals.jquery`
}

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
  *  JS CONFIG
  * ---------------------------------------- */
  {
    name:  'JS/TS rules',
    files: [
      '**/*.{js,mjs,cjs,jsx}',
      '**/*.{ts,mts,cts,tsx}',
    ],
    extends: [
      ...pluginTypescript.configs.stylisticTypeChecked, // OK here, now scoped only to TS
    ],
    settings: {
      react: {
        version: '19.2',
      },
    },
    plugins: {
      promise:              pluginPromise,
      import:               pluginImport,
      n:                    pluginNode,
      '@typescript-eslint': pluginTypescript.plugin,
      react:                pluginReact,
      'react-refresh':      pluginReactRefresh,
    },
    languageOptions: {
      globals,
      parserOptions: {
        project:             './tsconfig.json',
        tsconfigRootDir:     import.meta.dirname,
        allowDefaultProject: true,
        ecmaFeatures:        { jsx: true },
      },
    },
    rules: {
      ...importRules,
      ...nRules,
      ...promiseRules,
      ...standardRules,
      // ...pluginTypescript.configs.recommended,
      ...standardOverrideRules,
      ...tsRules,
      ...reactRules,
    },
  },
  /** -----------------------------------------
  *  JSON CONFIG
  * ---------------------------------------- */
  {
    name:  'JSON rules',
    files: [
      '**/*.json',
    ],
    plugins: {
      json,
      jsonc,
    },
    language: 'json/json',
    rules:    jsonRules,
  },
  {
    name:  'JSONC rules',
    files: [
      '**/*.jsonc',
    ],
    plugins: {
      json,
      jsonc,
    },
    language: 'json/jsonc',
    rules:    jsonC5Rules,
  },
  {
    name:  'JSON5 rules',
    files: [
      '**/*.json5',
      '*.code-workspace',
    ],
    plugins: {
      json,
      jsonc,
    },
    language: 'json/json5',
    rules:    jsonC5Rules,
  },
])
/* #endregion */
