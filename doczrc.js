const { css } = require('docz-plugin-css');

export default {
    wrapper: 'src/private/DoczWrapper',

    plugins: [
		css({
			preprocessor: 'postcss',
			cssmodules: true,
		}),
	],
};
