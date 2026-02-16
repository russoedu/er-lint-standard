
import pluginJson from '@eslint/json'
import pluginJsonc from 'eslint-plugin-jsonc'
import { ConfigWithExtends } from '../../_types'
import { rulesJson, rulesJsonC5 } from '../rules/json'

export const configJSON: ConfigWithExtends = {
    name:  'JSON Config',
    files: [
      '**/*.{json}',
    ],
    extends: [
      pluginJson.configs.recommended,
      pluginJsonc.configs['flat/recommended-with-json']
    ],
    language: 'json/json',

    rules: {
      ...rulesJson,
    },
  }

  
export const configJSONC: ConfigWithExtends = {
    name:  'JSONC Config',
    files: [
      '**/*.{jsonc}',
    ],
    extends: [
      pluginJson.configs.recommended,
      pluginJsonc.configs['flat/recommended-with-jsonc']
    ],
    language: 'json/jsonc',

    rules: {
      ...rulesJsonC5,
    },
  }

  export const configJSON5: ConfigWithExtends = {
    name:  'JSON5 Config',
    files: [
      '**/*.{json5}',
      '*.code-workspace',
    ],
    extends: [
      pluginJson.configs.recommended,
      pluginJsonc.configs['flat/recommended-with-json5']
    ],
    language: 'json/json5',

    rules: {
      ...rulesJsonC5,
    },
  }
