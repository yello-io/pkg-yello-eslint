
module.exports = {
	extends: [
		'plugin:@next/next/recommended',
		'@yello-io/eslint-config-yello-react'
	],
	rules: {
		'jsx-a11y/anchor-is-valid': [ 'error', {
			'components': [ 'Link' ],
			'aspects': [ 'invalidHref', 'preferButton' ]
		}]
	}
};
