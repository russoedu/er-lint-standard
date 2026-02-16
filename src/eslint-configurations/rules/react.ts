import { Linter } from 'eslint'

export const rulesReact: Linter.RulesRecord = {
  'react-in-jsx-scope':                   'off',
  'react/jsx-uses-react':                 'error',
  'react/jsx-uses-vars':                  'error',
  'react-refresh/only-export-components': [
    'warn',
    { allowConstantExport: true },
  ],
}
