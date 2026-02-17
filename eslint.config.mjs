import { defineConfig } from 'eslint/config'
import { configIgnores } from './src/eslint/configs/config.ignores.js'
import { configJsTsEr } from './src/eslint/configs/javaTypeScript.js'
export default defineConfig([
  configIgnores,
  configJsTsEr,
])
