const { css } = require('docz-plugin-css');

export default {
	codeSandbox: false,
	public: 'docz/public',
	wrapper: 'docz/DoczWrapper',
	hashRouter: true,

	files: 'packages/{unity-core,unity-web,unity-marketing,unity-forms}/**/*.mdx', // TODO support unity-email

	plugins: [
		css({
			preprocessor: 'postcss',
			cssmodules: true,
		}),
	],

	menu: [
		'Getting Started',
		'Theme',
		'Scaffolding',
		'Components',
		'Forms',
		'Templates',
		'Utilities',
	],
};
