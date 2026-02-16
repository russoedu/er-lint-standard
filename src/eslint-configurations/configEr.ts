
import { configIgnores } from './configs/ignores'
import { configJavaScriptEr, configJavaScriptReactEr } from './configs/javaScript'
import { configJSON, configJSON5, configJSONC } from './configs/json'

export const configEr = [
  configIgnores,
  configJavaScriptEr,
  configJavaScriptReactEr,
  configJSON,
  configJSONC,
  configJSON5,
]
