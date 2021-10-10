
- [Installation](#installation)
- [Packages](#packages)
	- [eslint-config-yello-base](#eslint-config-yello-base)
	- [eslint-config-yello-react](#eslint-config-yello-react)
	- [eslint-config-yello-nextjs](#eslint-config-yello-nextjs)

# Installation
1. To use these packages you need to add the following to `.npmrc`:
	```
	@yello-io:registry=https://npm.pkg.github.com/yello-io
	//npm.pkg.github.com/:_authToken=TOKEN
	```
2. Replace `TOKEN` with a GitHub token you can get from one of the Yello members.
3. Install the config you want to use, read more about them below. Then  a `.eslintrc`:
	```JSON
	{
		"extends": "PACKAGE_NAME"
	}
	```
4. Done :)

# Packages

## eslint-config-yello-base
This config is used inn all other configs. It is also perfect for your TypeScript projects, such as NodeJS servers and scripts. Does not support things such as JSX or HTML.

## eslint-config-yello-react
This config extends `eslint-config-yello-base` and is great for your TypeScript React prjects.

## eslint-config-yello-nextjs
This package extends `eslint-config-yello-base` and `eslint-config-yello-react`. It also includes `@next/eslint-plugin-next` and is perfect to use with all NextJS projects.
