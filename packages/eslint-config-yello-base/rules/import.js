const pathGroupsDefaults = { 'group': 'internal', 'position': 'after' }

module.exports = {
	plugins: ['import'],
	rules: {
		'sort-imports': ['error', {
			'ignoreCase': true,
			'ignoreDeclarationSort': true, // This is handled by import/order instead
			'ignoreMemberSort': false,
			'allowSeparatedGroups': true
		}],
		'import/newline-after-import': ['error', { 'count': 2 }],
		'import/no-unused-modules': [1, { 'missingExports': true, 'unusedExports': true }],
		'import/no-extraneous-dependencies': [
			'error',
			{
				'devDependencies': [
					'.storybook/**',
					'**/*.stories.*',
					'**/stories.*',
					'**/rollup.config.*',
					'**/*.test.*',
					'**/*.spec.*'
				]
			}
		],
		'import/order': ['error', {
			'newlines-between': 'always',
			'alphabetize': {
				'order': 'asc',
				'caseInsensitive': true
			},
			'groups': [
				['builtin', 'external'],
				'internal',
				['sibling', 'parent', 'unknown', 'index']
			],
			'pathGroups': [

				{ 'pattern': '~api/**', ...pathGroupsDefaults },
				{ 'pattern': '~assets/**', ...pathGroupsDefaults },
				{ 'pattern': '~components/**', ...pathGroupsDefaults },
				{ 'pattern': '~constants/**', ...pathGroupsDefaults },
				{ 'pattern': '~contexts/**', ...pathGroupsDefaults },
				{ 'pattern': '~data/**', ...pathGroupsDefaults },
				{ 'pattern': '~database/**', ...pathGroupsDefaults },
				{ 'pattern': '~hooks/**', ...pathGroupsDefaults },
				{ 'pattern': '~microservices/**', ...pathGroupsDefaults },
				{ 'pattern': '~models/**', ...pathGroupsDefaults },
				{ 'pattern': '~pages/**', ...pathGroupsDefaults },
				{ 'pattern': '~props/**', ...pathGroupsDefaults },
				{ 'pattern': '~public/**', ...pathGroupsDefaults },
				{ 'pattern': '~root/**', ...pathGroupsDefaults },
				{ 'pattern': '~schemas/**', ...pathGroupsDefaults },
				{ 'pattern': '~services/**', ...pathGroupsDefaults },
				{ 'pattern': '~styles/**', ...pathGroupsDefaults },
				{ 'pattern': '~themes/**', ...pathGroupsDefaults },
				{ 'pattern': '~types/**', ...pathGroupsDefaults },
				{ 'pattern': '~utilities/**', ...pathGroupsDefaults },
				{ 'pattern': '~utils/**', ...pathGroupsDefaults } //! To be removed

			]
		}]
	},
	settings: {
		'import/resolver': {
			typescript: {},
			node: {
				extensions: ['.ts', '.tsx', '.js', '.jsx']
			}
		}
	}
};
