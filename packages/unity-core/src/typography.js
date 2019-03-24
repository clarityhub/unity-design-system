import rem from "./utilities/rem";

export const fontFamilies = {
	'Crimson Text': '300,400,600,700',
	'Roboto': '400,800',
	'Open Sans': '300,400,600,700',
};

export const variants = {
	heading: {
		fontFamily: "Futura, 'Trebuchet MS', Arial, sans-serif",
		fontWeight: 400,
		string: `
			font-family: Futura, 'Trebuchet MS', Arial, sans-serif;
			font-weight: 400;
		`,
	},
	secondary: {
		fontFamily: "'Roboto', Arial, sans-serif",
		fontWeight: 400,
		string: `
			font-family: 'Roboto', Arial, sans-serif;
			font-weight: 400;
		`,
	},
	text: {
		fontFamily: "'Open Sans', Arial, sans-serif",
		fontWeight: 400,
		string: `
			font-family: 'Open Sans', Arial, sans-serif;
			font-weight: 400;
		`,
	},
	readable: {
		fontFamily: `'Crimson Text', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
		fontWeight: 400,
		string: `
			font-family: 'Crimson Text', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
			font-weight: 400;
		`,
	},
	button: {
		fontFamily: "'Open Sans', Arial, sans-serif",
		fontWeight: 600,
		letterSpacing: '0.35px',
		string: `
			font-family: 'Open Sans', Arial, sans-serif;
			font-weight: 600;
			letter-spacing: 0.35px;
		`,
	},
};

export const sizes = {
	h1: {
		px: 32, 
		rem: rem(32),
		lineHeight: {
			px: 32 * 1.4, 
			unitless: 1.4,
		},
	},
	h2: {
		px: 26,
		rem: rem(26),
		lineHeight: {
			px: 36.4,
			unitless: 1.4,
		},
	},
	h3: {
		px: 21,
		rem: rem(21),
		lineHeight: {
			px: 25.2,
			unitless: 1.2,
		},
	},
	h4: {
		px: 19,
		rem: rem(19),
		lineHeight: {
			px: 22.8,
			unitless: 1.2,
		},
	},
	h5: {
		px: 16,
		rem: rem(16),
		lineHeight: {
			px: 19.2,
			unitless: 1.2,
		},
	},
	h6: {
		px: 14,
		rem: rem(14),
		lineHeight: {
			px: 16.8,
			unitless: 1.2,
		},
	},
	p: {
		px: 21,
		rem: rem(21),
		lineHeight: {
			px: 33.6,
			unitless: 1.6,
		},
	},
	text: {
		px: 16,
		rem: rem(16),
		lineHeight: {
			px: 24,
			unitless: 1.5,
		},
	},
	text2: {
		px: 16,
		rem: rem(16),
		lineHeight: {
			px: 25.6,
			unitless: 1.6,
		},
	},
	subtext: {
		px: 14.4,
		rem: rem(14.4),
		lineHeight: {
			px: 19.6,
			unitless: 1.4,
		},
	},
};
