module.exports = {
	plugins: [
		"react",
		"react-hooks",
		"jsx-a11y"
	],
	extends: [
		'./rules/base',
		'./rules/unsorted',
	].map(require.resolve),
	rules: {},
	settings: {
		react: {
			pragma: "React",
			version: "detect",
		},
		propWrapperFunctions: [
			"forbidExtraProps",
			{"property": "freeze", "object": "Object"}
		],
		linkComponents: [
			// Components used as alternatives to <a> for linking, eg. <Link to={ url } />
			"Hyperlink",
			{"name": "Link", "linkAttribute": "to"}
		]
	}
};
