import { configIgnores } from '../src/eslint/configs/config.ignores.js';
import { configJavaScriptEr, configJavaScriptReactEr } from '../src/eslint/configs/javaTypeScript.js';
export const configEr = [
    configIgnores,
    configJavaScriptEr,
    configJavaScriptReactEr,
    configJSON,
    configJSONC,
    configJSON5,
];
