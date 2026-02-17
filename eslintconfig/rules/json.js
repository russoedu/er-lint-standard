export const rulesJson = {
    /* #region  ESLint rules */
    // Never add extra line to JSON files
    'eol-last': ['error', 'never'],
    // Disallow multiple empty lines
    'no-multiple-empty-lines': [
        'error',
        { max: 1, maxEOF: 0 },
    ],
    /* #endregion */
    /* #region  JSON plugin rules */
    // Disallow duplicate keys in JSON objects
    'json/no-duplicate-keys': 'error',
    // Disallow empty keys in JSON objects
    'json/no-empty-keys': 'error',
    // Disallow JSON keys that are not normalized
    'json/no-unnormalized-keys': 'error',
    // Disallow JSON values that are unsafe for interchange
    'json/no-unsafe-values': 'error',
    // Require JSON object keys to be sorted
    'json/no-sort-keys': 'off',
    // Require the JSON top-level value to be an array or object
    'json/top-level-interop': 'error',
    /* #endregion */
    /* #region  JSONC plugin rules */
    // enforce naming convention to property key names
    'jsonc/key-name-casing': ['error',
        {
            camelCase: true,
            PascalCase: true,
            SCREAMING_SNAKE_CASE: false,
            'kebab-case': true,
            snake_case: false,
            ignores: [
                '^@?.+$',
            ],
        },
    ],
    // disallow BigInt literals
    'jsonc/no-bigint-literals': 'error',
    // disallow binary expression
    'jsonc/no-binary-expression': 'error',
    // disallow binary numeric literals
    'jsonc/no-binary-numeric-literals': 'error',
    // disallow comments
    'jsonc/no-comments': 'error',
    // disallow escape sequences in identifiers.
    'jsonc/no-escape-sequence-in-identifier': 'error',
    // disallow hexadecimal numeric literals
    'jsonc/no-hexadecimal-numeric-literals': 'error',
    // disallow Infinity
    'jsonc/no-infinity': 'error',
    // disallow NaN
    'jsonc/no-nan': 'error',
    // disallow number property keys
    'jsonc/no-number-props': 'error',
    // disallow numeric separators
    'jsonc/no-numeric-separators': 'error',
    // disallow octal numeric literals
    'jsonc/no-octal-numeric-literals': 'error',
    // disallow parentheses around the expression
    'jsonc/no-parenthesized': 'error',
    // disallow plus sign
    'jsonc/no-plus-sign': 'error',
    // disallow RegExp literals
    'jsonc/no-regexp-literals': 'error',
    // disallow template literals
    'jsonc/no-template-literals': 'error',
    // disallow undefined
    'jsonc/no-undefined-value': 'error',
    // disallow Unicode code point escape sequences.
    'jsonc/no-unicode-codepoint-escapes': 'error',
    // require array values to be sorted
    'jsonc/sort-array-values': 'off',
    // require object keys to be sorted - set on JSON plugin
    'jsonc/sort-keys': 'off',
    // disallow invalid number for JSON
    'jsonc/valid-json-number': 'error',
    // disallow parsing errors in Vue custom blocks
    'jsonc/vue-custom-block/no-parsing-error': 'error',
    // enforce line breaks after opening and before closing array brackets
    'jsonc/array-bracket-newline': 'off',
    // disallow or enforce spaces inside of brackets
    'jsonc/array-bracket-spacing': 'error',
    // enforce line breaks between array elements
    'jsonc/array-element-newline': [
        'error',
        {
            ArrayExpression: 'consistent',
            ArrayPattern: { minItems: 1 },
        },
    ],
    // require or disallow trailing commas
    'jsonc/comma-dangle': ['error', 'never'],
    // enforce consistent comma style
    'jsonc/comma-style': 'error',
    // enforce consistent indentation
    'jsonc/indent': ['error', 2],
    // enforce consistent spacingbetween keys and values in object literal properties
    'jsonc/key-spacing': 'error',
    // disallow duplicate keys in object literals - set on JSON plugin
    'jsonc/no-dupe-keys': 'off',
    // disallow leading or trailing decimal points in numeric literals
    'jsonc/no-floating-decimal': 'error',
    // disallow irregular whitespace
    'jsonc/no-irregular-whitespace': 'error',
    // disallow multiline strings
    'jsonc/no-multi-str': 'error',
    // disallow octal escape sequences in string literals
    'jsonc/no-octal-escape': 'error',
    // disallow legacy octal literals
    'jsonc/no-octal': 'error',
    // disallow sparse arrays
    'jsonc/no-sparse-arrays': 'error',
    // disallow unnecessary escape usage
    'jsonc/no-useless-escape': 'error',
    // enforce consistent line breaks inside braces
    'jsonc/object-curly-newline': 'error',
    // enforce consistent spacing inside braces
    'jsonc/object-curly-spacing': 'error',
    // enforce placing object properties on separate lines
    'jsonc/object-property-newline': 'error',
    // require quotes around object literal property names
    'jsonc/quote-props': 'error',
    // enforce use of double or single quotes
    'jsonc/quotes': 'error',
    // disallow spaces after unary operators
    'jsonc/space-unary-ops': 'error',
    /* #endregion */
};
export const rulesJsonC5 = {
    ...rulesJson,
    // disallow comments
    'jsonc/no-comments': 'off',
    'jsonc/comma-dangle': ['error', 'always'],
    'comma-dangle': 'off',
};
