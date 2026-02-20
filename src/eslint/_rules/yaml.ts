import { Linter } from 'eslint'
export const rulesYaml: Linter.RulesRecord = {
  indent:           ['error', 2],
  'eol-last':       ['error', 'never'],
  'spaced-comment': 'off',
}
