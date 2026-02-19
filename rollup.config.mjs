import typescript from '@rollup/plugin-typescript'
import { readFileSync } from 'node:fs'
import execute from 'rollup-plugin-shell'

const pack = JSON.parse(readFileSync('./package.json', 'utf8'))
const dependencies = [
  ...pack.dependencies ? Object.keys(pack.dependencies) : [],
  ...pack.devDependencies ? Object.keys(pack.devDependencies) : [],
]
const external = dependencies
  .filter(dep => dep.includes('eslint'))

export default {
  input:  'src/eslint/index.ts',
  output: {
    dir:            './',
    format:         'esm',
    entryFileNames: 'eslint.linterall.mjs',
  },
  external,
  plugins: [
    typescript({
      tsconfig: 'tsconfig.eslint.json',
    }),
    execute('eslint --fix eslint.linterall.mjs'),
  ],
}
