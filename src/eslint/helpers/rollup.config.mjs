import typescript from '@rollup/plugin-typescript'
import { ESLint } from 'eslint'
import { readFileSync, rmSync } from 'node:fs'
import path from 'node:path'
import { rollup } from 'rollup'

const input = 'src/eslint/index.ts'
const eslintFolder = './src/eslint/helpers/'
const middleFolder = path.join(eslintFolder, 'build')
const tsConfigPath = path.join(eslintFolder, 'tsconfig.eslint.json')
const eslintConfigPath = 'eslint.linterall.mjs'

async function build () {
  console.log('Starting LintErAll bundle build')

  const pack = JSON.parse(readFileSync('./package.json', 'utf8'))
  const dependencies = [
    ...pack.dependencies ? Object.keys(pack.dependencies) : [],
    ...pack.devDependencies ? Object.keys(pack.devDependencies) : [],
  ]

  // Create the bundle
  const bundle = await rollup({
    input,
    external: dependencies,
    plugins:  [
      typescript({
        tsconfig: tsConfigPath,
      }),
    ],
  })

  console.log('LintErAll bundle built')

  console.log('Starting LintErAll bundle lint')

  // Write the output
  await bundle.write({
    dir:            './',
    format:         'esm',
    entryFileNames: eslintConfigPath,
  })

  await bundle.close()

  console.log(`Cleaning TypeScript build folder: ${middleFolder}`)
  rmSync(middleFolder, { recursive: true, force: true })

  const eslint = new ESLint({ fix: true })

  const results = await eslint.lintFiles([eslintConfigPath])
  await ESLint.outputFixes(results)

  console.log('LintErAll bundle lint completed')

  console.log('LintErAll bundle saved on "eslint.linterall.mjs"')
}

await build()
