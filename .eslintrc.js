module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "eslint:all",
        "plugin:@typescript-eslint/all"
    ],
    overrides: [
        {
            env: {
                node: true
            },
            files: [
                ".eslintrc.{js,cjs}"
            ],
            parserOptions: {
                sourceType: "script"
            }
        }
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
		project: [
			"./tsconfig.json"
		]
    },
	ignorePatterns: [
		'.eslintrc.js'
	],
    plugins: [
        "@typescript-eslint"
    ],
    rules: {
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'no-console': 'off',
		'@typescript-eslint/consistent-type-imports': 'error',
		'@typescript-eslint/naming-convention': 'off',
		'sort-keys': 'off',
		'multiline-comment-style': ['error', 'separate-lines', { checkJSDoc: false }],
		'capitalized-comments': 'off',
		indent: ['error', 4],
        'func-style': ['error', 'declaration', { 'allowArrowFunctions': true }]
    }
}
