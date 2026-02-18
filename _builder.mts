import * as esbuild from 'esbuild'
import { readFileSync } from 'fs'

const pack = JSON.parse(readFileSync('./package.json', 'utf-8'))
const dependencies = [
  ...pack.dependencies ? Object.keys(pack.dependencies) : [],
  ...pack.devDependencies ? Object.keys(pack.devDependencies) : [],
]
const external = dependencies
  .filter(dep => dep.includes('eslint'))

console.log(external)

async function build () {
  await esbuild.build({
    entryPoints: [
      'eslint/index.js',
    ],
    outfile:  'eslint.config.new.mjs',
    bundle:   true,
    format:   'esm',
    platform: 'neutral',
    target:   'node24',
    external,
  })

  // await lint('out.mjs')
}

// async function lint (file: string) {
// // Lint the bundled file (or an array of files)
//   const results = await eslint.lintFiles([file])

//   // Apply fixes to disk
//   await ESLint.outputFixes(results)

//   // Optional: print a summary
//   const formatter = await eslint.loadFormatter('./eslint.config.mjs')
// const resultText = formatter.format(results)
// console.log(resultText)
// }
await build()
