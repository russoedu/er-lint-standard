import typescript from '@rollup/plugin-typescript'
import { ESLint } from 'eslint'
import { readFileSync, rmSync } from 'node:fs'
import path from 'node:path'
import { rollup, type RollupBuild } from 'rollup'
import { SingleBar } from 'cli-progress'
import colours from 'ansi-colors'

class RollupSelfBuild {
  #input = 'src/eslint/index.ts'
  #eslintFolder = './src/eslint/'
  #middleFolder = path.join(this.#eslintFolder, 'build')
  #tsConfigPath = path.join(this.#eslintFolder, 'tsconfig.json')
  #eslintConfigPath = 'eslint.linterall.mjs'
  #steps = [
    'loading external dependencies',
    'transpiling TypeScript config with Rollup',
    'bundling config with Rollup',
    'cleaning TypeScript build folder',
    'self linting config bundle',
    'LintErAll self updated',
  ]

  #generator: Generator<number, void, unknown>
  #bar: SingleBar
  #external: string[]
  #bundle: RollupBuild

  constructor () {
    this.#bar = new SingleBar({
      format:            `{step} ${colours.green('{bar}')} {value}/{total}`,
      barCompleteChar:   '\u2588',
      barIncompleteChar: '\u2591',
      hideCursor:        true,
      stopOnComplete:    true,
      clearOnComplete:   true,
    })
    this.#generator = this.#barGenerator()
  }

  async run () {
    this.#setExternal()
    await this.#startRollup()
    await this.#writeBundle()
    this.#cleanBuild()
    await this.#lintResult()
  }

  * #barGenerator () {
    const max = Math.max(...this.#steps.map(step => step.length))

    for (const [index, step] of this.#steps.entries()) {
      const fill = ' '.repeat(max - step.length)
      const message = {
        step: `${step}${fill}`,
      }

      if (index === 0) {
        this.#bar.start(
          5,
          0,
          message,
        )
      } else {
        this.#bar.increment(
          1,
          message,
        )
      }

      yield index
    }
  }

  #updateBar () {
    this.#generator.next()
  }

  #setExternal () {
    this.#updateBar()
    const pack = JSON.parse(readFileSync('./package.json', 'utf8'))
    this.#external = [
      ...pack.dependencies ? Object.keys(pack.dependencies) : [],
      ...pack.devDependencies ? Object.keys(pack.devDependencies) : [],
    ]
  }

  async #startRollup () {
    this.#updateBar()
    this.#bundle = await rollup({
      input:    this.#input,
      external: this.#external,
      plugins:  [
        typescript({
          tsconfig: this.#tsConfigPath,
        }),
      ],
    })
  }

  async #writeBundle () {
    this.#updateBar()

    // Write the output
    await this.#bundle.write({
      dir:            './',
      format:         'esm',
      entryFileNames: this.#eslintConfigPath,
    })
  }

  #cleanBuild () {
    this.#updateBar()
    rmSync(this.#middleFolder, { recursive: true, force: true })
  }

  async #lintResult () {
    this.#updateBar()
    const eslint = new ESLint({ fix: true })

    const results = await eslint.lintFiles([this.#eslintConfigPath])
    await ESLint.outputFixes(results)

    this.#updateBar()
  }
}

const update = new RollupSelfBuild()
await update.run()
