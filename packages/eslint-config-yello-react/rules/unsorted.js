
module.exports = {
	rules: {
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-curly-spacing': [2, { 'when': 'always' }],
		'react/jsx-one-expression-per-line': [0],
		'react/prop-types': 0,
		'react/no-unescaped-entities': 0,
		'react/self-closing-comp': ['error', {
			'component': true,
			'html': true
		}]
	}
};
