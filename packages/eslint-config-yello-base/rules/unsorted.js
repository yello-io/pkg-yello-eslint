
module.exports = {
	rules: {
		"linebreak-style": 0,
		"padded-blocks": ["error", "always"],
		"array-bracket-spacing": ["error", "always"],
		"operator-linebreak": ["error", "after"],
		"indent": ["error", "tab", { "SwitchCase": 1 }],
		"no-tabs": 0,
		"no-mixed-spaces-and-tabs": "error",
		"no-prototype-builtins": 0,
		"no-unused-expressions": 0,
		"nonblock-statement-body-position": ["error", "beside", { "overrides":  { "if": "any" } }],
		"curly": ["error", "multi-or-nest", "consistent"],
		"object-curly-spacing": "always",
	}
};
