module.exports = {
    parser: '@typescript-eslint/parser',

    parserOptions: {
        ecmaVersion: '2021',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        },
        project: './tsconfig.json'
    },

    plugins: ['@typescript-eslint', 'jest', 'import', 'import-force-abbr'],

    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'plugin:jest/style',
        'plugin:jest-formatting/recommended',
        'prettier'
    ],

    env: {
        es6: true,
        browser: true,
        node: true,
        jest: true
    },

    settings: {
        'import/internal-regex': '^configs/|^constants/|^db/|^helpers/|^models/|^server/|^ts/|^utils/'
    },

    rules: {
        '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/prefer-enum-initializers': 'error',
        '@typescript-eslint/no-explicit-any': 'warn',
        'no-debugger': 'error',
        'import/no-duplicates': 'error',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/order': [
            'error',
            { groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index'], 'type'] }
        ],
        'import-force-abbr/abbr': [
            'error',
            {
                cases: [
                    { moduleNameSubstr: 'lodash', expectedVariableName: '_' },
                    { moduleNameSubstr: 'ParsingTypes', expectedVariableName: 'pt' },
                    { moduleNameSubstr: 'TableHeaders', expectedVariableName: 'th' },
                    { moduleNameSubstr: 'ConvertDataTypes', expectedVariableName: 'cdt' },
                    { moduleNameSubstr: 'TableDataTypes', expectedVariableName: 'tdt' },
                    { moduleNameSubstr: 'CallbackQueryTypes', expectedVariableName: 'cqt' },
                    { moduleNameSubstr: 'EnvironmentVariables', expectedVariableName: 'env' },
                    { moduleNameSubstr: 'ParsingTableModes', expectedVariableName: 'ptm' }
                ]
            }
        ],
        'jest/consistent-test-it': ['error', { fn: 'test' }],
        'no-dupe-else-if': 'error',
        eqeqeq: ['error', 'always'],
        'no-duplicate-case': 'error',
        'no-param-reassign': 'error',
        'no-self-compare': 'error',
        'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-empty-interface': 0,
        '@typescript-eslint/no-empty-function': 0
    }
};
