const { css } = require('docz-plugin-css');

export default {
	codeSandbox: false,
	public: 'docs/public',
	wrapper: 'docs/DoczWrapper',
	hashRouter: true,

	files: '{docs/*.mdx,packages/{unity-core,unity-web,unity-marketing,unity-forms}/**/*.mdx}', // TODO support unity-email

	plugins: [
		css({
			preprocessor: 'postcss',
			cssmodules: true,
		}),
	],

	menu: [
		'Getting Started',
		{ name: 'Standards', menu: ['Standards'] },
		'Theme',
		'Scaffolding',
		'Contexts',
		'Components',
		'Interactions',
		'Forms',
		'Form Builders',
		'Templates',
		'Marketing',
	],
};
