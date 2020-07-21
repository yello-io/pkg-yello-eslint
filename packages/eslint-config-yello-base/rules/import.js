
module.exports = {
	plugins: ["import"],
	rules: {
		"import/newline-after-import": ["error", { "count": 2 }],
		"import/no-extraneous-dependencies": [
			"error",
			{
			  "devDependencies": [
				".storybook/**",
				"**/*.stories.tsx",
				"**/*.stories.mdx",
				"**/stories.tsx",
				"**/stories.mdx",
				"**/rollup.config.js"
				]
			}
		],
		"import/order": ["error", {
			"newlines-between": "always",
			"alphabetize": {
				"order": "asc",
				"caseInsensitive": true
			},
			"groups": [
				["builtin", "external"],
				"internal",
				["sibling", "parent", "unknown", "index"]
			],
			"pathGroups": [
				{
					"pattern": "~root/**",
					"group": "internal",
					"position": "after"
				},
				{
					"pattern": "~components/**",
					"group": "internal",
					"position": "after"
				},
				{
					"pattern": "~context/**",
					"group": "internal",
					"position": "after"
				},
				{
					"pattern": "~hooks/**",
					"group": "internal",
					"position": "after"
				},
				{
					"pattern": "~props/**",
					"group": "internal",
					"position": "after"
				},
				{
					"pattern": "~themes/**",
					"group": "internal",
					"position": "after"
				},
				{
					"pattern": "~utilities/**",
					"group": "internal",
					"position": "after"
				},
				{
					"pattern": "~utils/**",
					"group": "internal",
					"position": "after"
				},
				{
					"pattern": "~db/**",
					"group": "internal",
					"position": "after"
				},
				{
					"pattern": "~pages/**",
					"group": "internal",
					"position": "after"
				},
				{
					"pattern": "~api/**",
					"group": "internal",
					"position": "after"
				},
				{
					"pattern": "~types/**",
					"group": "internal",
					"position": "after"
				},
				{
					"pattern": "~assets/**",
					"group": "internal",
					"position": "after"
				},
				{
					"pattern": "~data/**",
					"group": "internal",
					"position": "after"
				}
			]
		}]
	},
	settings: {
		"import/resolver": {
			typescript: {},
			node: {
				extensions: [".ts", ".tsx", ".js", ".jsx"]
			}
		}
	}
};
