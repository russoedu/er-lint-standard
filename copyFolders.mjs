import { cpSync, copyFileSync, mkdirSync, writeFileSync } from 'fs'
import { join } from 'path'

const templates = './dist/project-templates'
const templatesSrc = './dist/project-templates/src'

cpSync('./src/build-templates', './dist/build-templates', { recursive: true })
cpSync('./src/project-templates', templates, { recursive: true })

mk('_controllers')
mk('_helpers')
mk('_controllers')

cp('.editorconfig')
cp('.gitignore')
cp('.npmrc')

cp('eslint.config.mjs')

cp('typedoc.json')

cp('tsconfig.json')
cp('tsconfig.app.json')
cp('tsconfig.app.json')
cp('tsconfig.dev.json')
cp('tsconfig.description.md')

function cp (name) {
  try {
    copyFileSync(join('./', name), join(templates, name))
  } catch { }
}

function mk (name) {
  try {
    mkdirSync(join(templatesSrc, name))
    writeFileSync(join(templatesSrc, name, '.gitkeep'), '')
  } catch { }
}
