
import globalsConfig from 'globals'

import pluginImport from 'eslint-plugin-import'
import pluginNode from 'eslint-plugin-n'
import pluginPromise from 'eslint-plugin-promise'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginReactRefresh from 'eslint-plugin-react-refresh'
import pluginTypescript from 'typescript-eslint'
import { rulesJavaScriptEr, rulesJavaScriptPromiseRecommendedRules, rulesJavaScriptStandard } from '../rules/javaTypeScript'
import { rulesReact } from '../rules/react'
import { ConfigWithExtends } from '../_types'


const globalsJsTs = {
  ...globalsConfig.node,
  ...globalsConfig.jest,
  ...globalsConfig.vitest,
  ...globalsConfig.browser,
}

export const configJsTsPluginsBase: ConfigWithExtends = {
  name:  'JS + TS Base Config',
  files: [
    '**/*.{js,mjs,cjs}',
    '**/*.{ts,mts,cts}',
  ],
  languageOptions: {
    globals:       globalsJsTs,
    parserOptions: {
      project:             './tsconfig.json',
      allowDefaultProject: true,
      ecmaFeatures:        { jsx: false },
    },
  },
  extends: [
    pluginImport.flatConfigs.recommended,
    pluginNode.configs['flat/recommended'],
  {
    name: 'promise/flat/recommended',
    plugins: { promise: pluginPromise },
    rules: rulesJavaScriptPromiseRecommendedRules,
  },
    ...pluginTypescript.configs.stylisticTypeChecked,
    ...pluginTypescript.configs.recommended,
    pluginReactHooks.configs.flat.recommended,
  ],

}
export const configJsTsEr: ConfigWithExtends = {
  ...configJsTsPluginsBase,
  name:  'JS + TS ER Config',
  rules: rulesJavaScriptEr,
}

export const configJsTsStandard: ConfigWithExtends = {
  ...configJsTsPluginsBase,
  name:  'JS + TS Standard Config',
  rules: rulesJavaScriptStandard,
}

export const configJsTsReactBase: ConfigWithExtends = {
  name:  'JS + TS React Base Config',
  files: [
    '**/*.{jsx,mjsx,cjsx}',
    '**/*.{tsx,mtsx,ctsx}',
  ],
  languageOptions: {
    globals:       globalsJsTs,
    parserOptions: {
      project:             './tsconfig.json',
      allowDefaultProject: true,
      ecmaFeatures:        { jsx: true },
    },
  },
  extends: [
    ...configJsTsPluginsBase.extends!,

    pluginReact.configs.flat.recommended,
    pluginReactHooks.configs.flat.recommended,
    pluginReactRefresh.configs.recommended,
  ],
  settings: {
    react: {
      version: '19.2',
    },
  },
}

export const configJsTsReactStandard: ConfigWithExtends = {
  ...configJsTsReactBase,
  name:  'JS + TS React + Standard Config',
  rules: {
    ...rulesJavaScriptStandard,
    ...rulesReact,
  },
}

export const configJsTsReactEr: ConfigWithExtends = {
  ...configJsTsReactBase,
  name:  'JS + TS React + Standard Config',
  rules: {
    ...rulesJavaScriptEr,
    ...rulesReact,
  },
}
