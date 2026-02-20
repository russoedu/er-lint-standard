import { configs as pluginYamlConfigs } from 'eslint-plugin-yml'
import { ConfigWithExtends } from '../_types'
import { _rules } from '../_rules'
import { _files } from '../_files'

export const configYAML: ConfigWithExtends = {
  name:    'YAML Config',
  files:   _files.yaml,
  extends: [
    pluginYamlConfigs['flat/recommended'],
  ],
  language: 'yml/yaml',
  rules:    _rules.yaml,
}
