import { configs as pluginYamlConfigs } from 'eslint-plugin-yml'
import { _files, ConfigWithExtends } from '../helpers'
import { _rules } from '../rules'

export const configYAML: ConfigWithExtends = {
  name:    'YAML Config',
  files:   _files.yaml,
  extends: [
    pluginYamlConfigs['flat/recommended'],
  ],
  language: 'yml/yaml',
  rules:    _rules.yaml,
}
