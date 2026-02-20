import { ConfigObject, RulesConfig } from '@eslint/core'
import { Linter } from 'eslint'

export type SimpleExtendsElement = string | ConfigObject
export type InfiniteArray<T> = T | InfiniteArray<T>[]

export type ExtendsElement = SimpleExtendsElement | InfiniteArray<ConfigObject>

export interface ConfigWithExtends extends ConfigObject {
  extends?: ExtendsElement[],
}

export type LintErAllConfigs = {
  lintErAll: Linter.Config<RulesConfig>[],
  ignores: Linter.Config<RulesConfig>,
  ts: {
    standard: ConfigWithExtends,
    lintErAll: ConfigWithExtends,
    linterAllTest: ConfigWithExtends,
  },
  json: {
    lintErAll: ConfigWithExtends[],
    json: ConfigWithExtends,
    jsonc: ConfigWithExtends,
    json5: ConfigWithExtends,
  },
  yaml: ConfigWithExtends,
  markdown: ConfigWithExtends,
}

export type LintErAllRules = {
  ts: {
    standard: RulesConfig,
    lintErAll: RulesConfig,
    lintErAllTest: RulesConfig,
  },
  json: {
    json: RulesConfig,
    jsonC5: RulesConfig,
  },
  yaml: RulesConfig,
  markdown: RulesConfig,
}
export type LintErAll = {
  configs: LintErAllConfigs,
  files: {
    ts: string[],
    tsTest: string[],
    json: {
      json: string[],
      jsonc: string[],
      json5: string[],
    },
    yaml: string[],
  },
  rules: {
    ts: {
      standard: RulesConfig,
      lintErAll: RulesConfig,
      lintErAllTest: RulesConfig,
    },
    json: {
      json: RulesConfig,
      jsonC5: RulesConfig,
    },
    yaml: RulesConfig,
    markdown: RulesConfig,
  },
}
