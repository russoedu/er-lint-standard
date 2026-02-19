import typescript from '@rollup/plugin-typescript'
// import terser from '@rollup/plugin-terser'
// import eslint from '@rollup/plugin-eslint'
import { readFileSync } from 'node:fs'
import execute from 'rollup-plugin-shell'
import { copy } from '@web/rollup-plugin-copy'
import rename from '@betit/rollup-plugin-rename'

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
    entryFileNames: 'eslint.linterall.new.mjs',
  },
  external,
  plugins: [
    typescript({
      tsconfig: 'tsconfig.eslint.json',
    }),
    execute('eslint --fix eslint.linterall.new.mjs'),
    rename({
      include: ['eslint.linterall.new.mjs'],
      map:     () => 'eslint.linterall.mjs',
    }),

    // eslint({
    //   fix:                true,
    //   overrideConfigFile: './eslint.config.mjs',
    //   /* your options */
    // }),
    // terser({
    //   format: {
    //     comments: 'some',
    //     beautify: true,
    //     ecma:     '2024',
    //   },
    //   compress: false,
    //   mangle:   false,
    //   module:   true,
    // }),
  ],
}
