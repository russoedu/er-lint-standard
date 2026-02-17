export const tsRules = {
  '@typescript-eslint/indent':                         'off',
  '@typescript-eslint/no-floating-promises':           'error',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/no-explicit-any':                'off',
  '@typescript-eslint/no-non-null-assertion':          'off',
  '@typescript-eslint/consistent-type-definitions':    'off',
  '@typescript-eslint/prefer-regexp-exec':             'off',
  '@typescript-eslint/no-require-imports':             'error',
  '@typescript-eslint/no-unused-vars':                 [
    'error',
    {
      argsIgnorePattern:         '^_',
      varsIgnorePattern:         '^_',
      caughtErrorsIgnorePattern: '^_',
    },
  ],
}
