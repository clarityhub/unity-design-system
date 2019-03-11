// XXX merge with fonts from core
export const variants = {
	heading: {
		fontFamily: "Futura, 'Trebuchet MS', Arial, sans-serif",
		fontWeight: 400,
	},
	secondary: {
		fontFamily: "'Roboto', Arial, sans-serif",
		fontWeight: 400,
	},
	text: {
		fontFamily: "'Open Sans', Arial, sans-serif",
		fontWeight: 400,
		lineHeight: '16px',
	},
	readable: {
		fontFamily: `'Crimson Text', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
		fontWeight: 400,
		lineHeight: '16px',
	},
	button: {
		fontFamily: "'Open Sans', Arial, sans-serif",
		fontWeight: 600,
		letterSpacing: '0.35px',
	},
};

export const types = {
	h1: Object.assign(
		{},
		variants.heading,
		{
			fontSize: '32px',
			lineHeight: '44.8px',
		}
	),
	h2: Object.assign(
		{},
		variants.heading,
		{
			fontSize: '26px',
			lineHeight: '36.4px',
		}
	),
	h3: Object.assign(
		{},
		variants.heading,
		{
			fontSize: '21px',
			lineHeight: '25.2px',
		}
	),
	h4: Object.assign(
		{},
		variants.secondary,
		{
			fontSize: '19px',
			lineHeight: '22.8px',
		}
	),
	h5: Object.assign(
		{},
		variants.secondary,
		{
			fontSize: '16px',
			lineHeight: '19.2px',
		}
	),
	p: Object.assign(
		{},
		variants.readable,
		{
			fontSize: '21px',
			lineHeight: '33.6px',
		}
	),
	text: Object.assign(
		{},
		variants.text,
		{
			fontSize: '16px',
			lineHeight: '24px',
		}
	),
	text2: Object.assign(
		{},
		variants.text,
		{
			fontSize: '12px',
			lineHeight: '25.6px',
			fontWeight: 400,
		}
	),
	subtext: Object.assign(
		{},
		variants.readable,
		{
			fontSize: '14px',
			lineHeight: '19.6px',
			fontStyle: 'italic',
		}
	),
};
