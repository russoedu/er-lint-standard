import { ConfigWithExtends } from '../_types'
import { _rules } from '../_rules'
import { _files } from '../_files'
import pluginMarkdown from '@eslint/markdown'
export const configMarkdown: ConfigWithExtends = {
  name:    'Markdown Config',
  files:   _files.markdown,
  extends: [
    pluginMarkdown.configs.recommended,
  ],
  language: 'markdown/commonmark',
  rules:    _rules.markdown,
}
