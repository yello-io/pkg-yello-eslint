
module.exports = {
	rules: {
		'@typescript-eslint/ban-types': 0,
		// Needs to be disabled for non-TS files
		'@typescript-eslint/explicit-function-return-type': 'off',
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md#enforce-that-boolean-variables-are-prefixed-with-an-allowed-verb
		// "@typescript-eslint/naming-convention": [
		// 	"error",
		// 	{
		// 		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md#individual-selectors
		// 		"selector": ["variable", "function"],
		// 		"types": ["boolean"],
		// 		"format": ["PascalCase"],
		// 		"prefix": ["is", "should", "has", "can", "did", "will"]
		// 	}
		// ]
	},
	overrides: [
		{
			'files': ['*.ts', '*.tsx'],
			'rules': {
				'@typescript-eslint/explicit-function-return-type': ['error']
			}
		}
	]
};
