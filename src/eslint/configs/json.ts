import pluginJson from '@eslint/json'
import pluginJsonc from 'eslint-plugin-jsonc'
import { _files, ConfigWithExtends } from '../helpers'
import { _rules } from '../rules'

const jsonExtends = [
  pluginJson.configs.recommended,
  pluginJsonc.configs['flat/recommended-with-json'],
]
export const configJSON: ConfigWithExtends = {
  name:     'JSON Config',
  files:    _files.json.json,
  extends:  jsonExtends,
  language: 'json/json',
  rules:    _rules.json.json,
}

export const configJSONC: ConfigWithExtends = {
  name:     'JSONC Config',
  files:    _files.json.jsonc,
  extends:  jsonExtends,
  language: 'json/jsonc',
  rules:    _rules.json.jsonC5,
}

export const configJSON5: ConfigWithExtends = {
  name:     'JSON5 Config',
  files:    _files.json.json5,
  extends:  jsonExtends,
  language: 'json/json5',

  rules: _rules.json.jsonC5,
}
