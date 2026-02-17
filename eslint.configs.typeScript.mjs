import globalsConfig from 'globals'
import { rulesJavaScriptEr, rulesJavaScriptStandard } from './eslint.rules.javaScript.mjs'
import { rulesReact } from './eslint.rules.react.mjs'
import { tsRules } from './eslint.rules.typeScript.mjs'

import pluginImport from 'eslint-plugin-import'
import pluginNode from 'eslint-plugin-n'
import pluginPromise from 'eslint-plugin-promise'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginReactRefresh from 'eslint-plugin-react-refresh'
import pluginTypescript from 'typescript-eslint'

const globals = {
  ...globalsConfig.node,
  ...globalsConfig.jest,
  ...globalsConfig.browser,
  // ...globals.jquery`
}

export const javaScript = {
    name:  'JavaScript rules',
    files: [
      '**/*.{js,mjs,cjs,jsx}',
    ],
    extends: [
      pluginImport.flatConfigs.recommended,
      pluginNode.configs['flat/recommended'],
      pluginPromise.configs['flat/recommended'],
      pluginReact.configs.flat.recommended,

      ...pluginTypescript.configs.stylisticTypeChecked, // OK here, now scoped only to TS
      ...pluginTypescript.configs.recommended,
      pluginReactHooks.configs.flat.recommended,
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
        tsconfigRootDir:     '.',
        allowDefaultProject: true,
        ecmaFeatures:        { jsx: true },
      },
    },
    rules: {
      ...rulesJavaScriptStandard,
      ...rulesJavaScriptEr,
      ...tsRules,
      ...rulesReact,
    },
  }
