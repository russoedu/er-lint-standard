import { defineConfig } from 'eslint/config'
import { configIgnores } from './eslint/eslint.config.configs.ignores.mjs'
import { configJsTsEr } from './eslint/eslint.config.configs.javaTypeScript.mjs'
export default defineConfig([
  configIgnores,
  configJsTsEr,
])
