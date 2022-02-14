
module.exports = {
	rules: {
		'linebreak-style': 0,
		'padded-blocks': ['error', 'always'],
		'array-bracket-spacing': ['error', 'always'],
		'operator-linebreak': ['error', 'after'],
		'indent': ['error', 'tab', { 'SwitchCase': 1 }],
		'no-tabs': 0,
		'no-mixed-spaces-and-tabs': 'error',
		'no-prototype-builtins': 0,
		'no-unused-expressions': 0,
		'nonblock-statement-body-position': ['error', 'beside', { 'overrides':  { 'if': 'any' } }],
		'curly': ['error', 'multi-line', 'consistent'],
		'object-curly-spacing': "off",
		"@typescript-eslint/object-curly-spacing": ["error", "always"],
		'no-bitwise': ['error', { 'allow': ['~'] }],
		'semi': 'off',
		"@typescript-eslint/semi": ["error", 'always'],
		'no-multi-spaces': ['error', { ignoreEOLComments: true }],
		'max-len': ['error', { 'code': 120, 'ignoreUrls': true }],
		'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
		'eol-last': ['error', 'always'],
		'no-multiple-empty-lines': ['error', { 'max': 2 }],
		'space-after-keywords': ['error', 'always']
	}
};
