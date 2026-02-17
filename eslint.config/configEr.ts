
import { Linter } from 'eslint'
import { configIgnores } from '../src/eslint/configs/config.ignores.js'
import { configJavaScriptEr, configJavaScriptReactEr } from '../src/eslint/configs/javaTypeScript.js'

export const configEr: Linter.Config[] = [
  configIgnores,
  configJavaScriptEr,
  configJavaScriptReactEr,
  configJSON,
  configJSONC,
  configJSON5,
]
