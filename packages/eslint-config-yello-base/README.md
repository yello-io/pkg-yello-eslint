
## Installation
Run `npx install-peerdeps -r https://npm.pkg.github.com/yello-io/ -d @yello-io/eslint-config-yello-base` in your project.

You need to add a `.eslintrc` file looking like this:

```JSON
{
	"parserOptions": {
		"project": "PATH TO YOUR TSCONFIG FROM PROJECT ROOT"
	},
	"extends": "@yello-io/eslint-config-yello-base",
}
```

## Adding a new file to rules directory
Use the following template:

```javascript 
module.exports = {
	plugins: [],
	env: {},
	parserOptions: {},
	rules: {},
	settings: {},
};
```
