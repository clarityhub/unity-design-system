const { css } = require('docz-plugin-css');

export default {
	codeSandbox: false,
	public: 'docz/public',
	wrapper: 'src/private/DoczWrapper',

	plugins: [
			css({
					preprocessor: 'postcss',
					cssmodules: true,
			}),
	],
};
