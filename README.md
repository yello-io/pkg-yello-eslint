
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
3. Install the configuration package you want to use (read more about them below). Then add a `.eslintrc`-file with the following contents:
	```JSON
	{
		"extends": "PACKAGE_NAME"
	}
	```
4. Done :)

# Packages

## eslint-config-yello-base
This package is used inn all the other config packages. It is also perfect for TypeScript projects. Does not support things such as JSX or HTML.

## eslint-config-yello-react
This config extends `eslint-config-yello-base` and is great for your TypeScript React prjects.

## eslint-config-yello-nextjs
This package extends `eslint-config-yello-base` and `eslint-config-yello-react`. It also includes the package `@next/eslint-plugin-next` and is perfect to use with all NextJS projects.
