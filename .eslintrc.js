module.exports = {
    extends: [
        'airbnb-base',
        'airbnb-typescript',
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        project: 'tsconfig.json',
        tsconfigRootDir: './',
    },
    plugins: ['@typescript-eslint', 'prettier'],
    env: {
        node: true,
        es6: true,
        browser: true,
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                'no-console': [
                    'error',
                    {
                        allow: ['error'],
                    },
                ],
                '@typescript-eslint/no-magic-numbers': [
                    'error',
                    {
                        ignoreEnums: true,
                        ignoreNumericLiteralTypes: true,
                    },
                ],
                'import/prefer-default-export': 'off',
                '@typescript-eslint/indent': 'off',
                'arrow-body-style': 'off',
                'import/no-extraneous-dependencies': [
                    'error',
                    {
                        devDependencies: true,
                    },
                ],
                '@typescript-eslint/ban-types': 'off',
                '@typescript-eslint/consistent-type-imports': ['error'],
                'react/jsx-filename-extension': 'off',
                'no-plusplus': [
                    2,
                    {
                        allowForLoopAfterthoughts: true,
                    },
                ],
            },
        },

        // JS files
        {
            files: ['*.js'],
            rules: {
                'react/jsx-filename-extension': 'off',
                'import/extensions': 'off',
                '@typescript-eslint/no-var-requires': 'off',
            },
        },

        // Test files
        {
            files: ['*.test.ts', '*.spec.ts'],
            rules: {
                '@typescript-eslint/no-unused-expressions': 'off',
            },
        },
    ],
};
