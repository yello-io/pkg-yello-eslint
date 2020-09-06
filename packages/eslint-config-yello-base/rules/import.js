
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
					"pattern": "~pub/root/**",
					"group": "internal",
					"position": "after"
				},
				{
					"pattern": "~priv/root/**",
					"group": "internal",
					"position": "after"
				},

				{
					"pattern": "~apps/**",
					"group": "internal",
					"position": "after"
				},
				{
					"pattern": "~pub/apps/**",
					"group": "internal",
					"position": "after"
				},
				{
					"pattern": "~priv/apps/**",
					"group": "internal",
					"position": "after"
				},

				{
					"pattern": "~components/**",
					"group": "internal",
					"position": "after"
				},
				{
					"pattern": "~pub/components/**",
					"group": "internal",
					"position": "after"
				},
				{
					"pattern": "~priv/components/**",
					"group": "internal",
					"position": "after"
				},

				{
					"pattern": "~context/**",
					"group": "internal",
					"position": "after"
				},
				{
					"pattern": "~pub/context/**",
					"group": "internal",
					"position": "after"
				},
				{
					"pattern": "~priv/context/**",
					"group": "internal",
					"position": "after"
				},

				{
					"pattern": "~hooks/**",
					"group": "internal",
					"position": "after"
				},
				{
					"pattern": "~pub/hooks/**",
					"group": "internal",
					"position": "after"
				},
				{
					"pattern": "~priv/hooks/**",
					"group": "internal",
					"position": "after"
				},

				{
					"pattern": "~props/**",
					"group": "internal",
					"position": "after"
				},
				{
					"pattern": "~pub/props/**",
					"group": "internal",
					"position": "after"
				},
				{
					"pattern": "~priv/props/**",
					"group": "internal",
					"position": "after"
				},

				{
					"pattern": "~themes/**",
					"group": "internal",
					"position": "after"
				},
				{
					"pattern": "~pub/themes/**",
					"group": "internal",
					"position": "after"
				},
				{
					"pattern": "~priv/themes/**",
					"group": "internal",
					"position": "after"
				},

				{
					"pattern": "~utilities/**",
					"group": "internal",
					"position": "after"
				},
				{
					"pattern": "~pub/utilities/**",
					"group": "internal",
					"position": "after"
				},
				{
					"pattern": "~priv/utilities/**",
					"group": "internal",
					"position": "after"
				},

				{
					"pattern": "~utils/**",
					"group": "internal",
					"position": "after"
				},
				{
					"pattern": "~pub/utils/**",
					"group": "internal",
					"position": "after"
				},
				{
					"pattern": "~priv/utils/**",
					"group": "internal",
					"position": "after"
				},

				{
					"pattern": "~db/**",
					"group": "internal",
					"position": "after"
				},
				{
					"pattern": "~pub/db/**",
					"group": "internal",
					"position": "after"
				},
				{
					"pattern": "~priv/db/**",
					"group": "internal",
					"position": "after"
				},

				{
					"pattern": "~pages/**",
					"group": "internal",
					"position": "after"
				},
				{
					"pattern": "~pub/pages/**",
					"group": "internal",
					"position": "after"
				},
				{
					"pattern": "~priv/pages/**",
					"group": "internal",
					"position": "after"
				},

				{
					"pattern": "~api/**",
					"group": "internal",
					"position": "after"
				},
				{
					"pattern": "~pub/api/**",
					"group": "internal",
					"position": "after"
				},
				{
					"pattern": "~priv/api/**",
					"group": "internal",
					"position": "after"
				},

				{
					"pattern": "~types/**",
					"group": "internal",
					"position": "after"
				},
				{
					"pattern": "~pub/types/**",
					"group": "internal",
					"position": "after"
				},
				{
					"pattern": "~priv/types/**",
					"group": "internal",
					"position": "after"
				},

				{
					"pattern": "~assets/**",
					"group": "internal",
					"position": "after"
				},
				{
					"pattern": "~pub/assets/**",
					"group": "internal",
					"position": "after"
				},
				{
					"pattern": "~priv/assets/**",
					"group": "internal",
					"position": "after"
				},

				{
					"pattern": "~data/**",
					"group": "internal",
					"position": "after"
				},
				{
					"pattern": "~pub/data/**",
					"group": "internal",
					"position": "after"
				},
				{
					"pattern": "~priv/data/**",
					"group": "internal",
					"position": "after"
				},

				{
					"pattern": "~microservices/**",
					"group": "internal",
					"position": "after"
				},
				{
					"pattern": "~pub/microservices/**",
					"group": "internal",
					"position": "after"
				},
				{
					"pattern": "~priv/microservices/**",
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
