import { defineConfig } from 'eslint/config'
import { configIgnores } from './src/eslint/eslint.config.configs.ignores.js'
import { configJsTsEr } from './src/eslint/eslint.config.configs.javaTypeScript.js'
export default defineConfig([
  configIgnores,
  configJsTsEr,
])
