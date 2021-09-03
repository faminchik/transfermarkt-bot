module.exports = {
    parser: '@typescript-eslint/parser',

    parserOptions: {
        ecmaVersion: '2019',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        },
        project: './tsconfig.json'
    },

    plugins: ['@typescript-eslint', 'jest', 'import', 'import-force-abbr'],

    extends: ['plugin:@typescript-eslint/recommended', 'plugin:jest/recommended'],

    env: {
        es6: true,
        browser: true,
        node: true,
        jest: true
    },

    rules: {
        '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        // '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/no-explicit-any': 'warn',
        'no-debugger': 'error',
        'import/no-duplicates': 'error',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/order': ['error', { groups: [['builtin', 'external'], 'internal' /* 'type' */] }],
        'import-force-abbr/abbr': [
            2,
            {
                cases: [
                    { moduleNameSubstr: 'lodash', expectedVariableName: '_' },
                    { moduleNameSubstr: 'ParsingTypes', expectedVariableName: 'pt' },
                    { moduleNameSubstr: 'TableHeaders', expectedVariableName: 'th' },
                    { moduleNameSubstr: 'ConvertDataTypes', expectedVariableName: 'cdt' },
                    { moduleNameSubstr: 'TableDataTypes', expectedVariableName: 'tdt' },
                    { moduleNameSubstr: 'CallbackQueryTypes', expectedVariableName: 'cqt' }
                ]
            }
        ],
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-use-before-define': 0,
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/indent': 0,
        '@typescript-eslint/prefer-interface': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-empty-interface': 0,
        '@typescript-eslint/interface-name-prefix': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0
    }
};
