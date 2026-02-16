import globalsConfig from 'globals'
import { ConfigWithExtends } from '../../_types'

import { rulesJavaScriptEr, rulesJavaScriptStandard } from '../rules/javaScript'
import { rulesReact } from '../rules/react'

import pluginImport from 'eslint-plugin-import'
import pluginNode from 'eslint-plugin-n'
import pluginPromise from 'eslint-plugin-promise'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginReactRefresh from 'eslint-plugin-react-refresh'

const globals = {
  ...globalsConfig.node,
  ...globalsConfig.jest,
  ...globalsConfig.browser,
}

export const configJavaScriptPluginsBase: ConfigWithExtends = {
    name:  'JavaScript Base Config',
    files: [
      '**/*.{js,mjs,cjs}',
    ],
    languageOptions: {
      globals,
    },
    extends: [
      pluginImport.flatConfigs.recommended,
      pluginNode.configs['flat/recommended'],
      pluginPromise.configs['flat/recommended'],
    ],
  }
export const configJavaScriptEr: ConfigWithExtends = {
    ...configJavaScriptPluginsBase,
    name:  'JavaScript ER Config',
    extends: [
      configJavaScriptPluginsBase
    ],
    rules: rulesJavaScriptEr,
  }

  export const configJavaScriptStandard: ConfigWithExtends = {
    name:  'JavaScript Standard Config',
    extends: [
      configJavaScriptPluginsBase
    ],
    rules: rulesJavaScriptStandard,
  }

  
export const configJavaScriptReactStandard: ConfigWithExtends = {
    name:  'JavaScript React + Standard Config',
    files: [
      '**/*.{jsx,mjsx,cjsx}',
    ],
    extends: [
      configJavaScriptStandard,
      pluginReact.configs.flat.recommended,
      pluginReactHooks.configs.flat.recommended,
pluginReactRefresh.configs.recommended,
    ],
    settings: {
      react: {
        version: '19.2',
      },
    },
    
    rules: rulesReact
  }

  export const configJavaScriptReactEr: ConfigWithExtends = {
    name:  'JavaScript React + Standard Config',
    files: [
      '**/*.{jsx,mjsx,cjsx}',
    ],
    extends: [
      configJavaScriptEr,
      pluginReact.configs.flat.recommended,
      pluginReactHooks.configs.flat.recommended,
pluginReactRefresh.configs.recommended,
    ],
    settings: {
      react: {
        version: '19.2',
      },
    },
    
    rules: rulesReact
  }
