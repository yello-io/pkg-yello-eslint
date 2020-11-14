
module.exports = {
	rules: {
		'@typescript-eslint/ban-types': 0,
		// Needs to be disabled for non-TS files
		'@typescript-eslint/explicit-function-return-type': 'off'
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
