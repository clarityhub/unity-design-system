const colors = {
	primary: {
		default: '#566ad2',
	},
	danger: {
		default: '#f5365c',
	},
	success: {
		default: '#46C161',
	},
	focused: {
		default: 'rgba(0, 123, 255, .25)',
	},
	highlight: {
		default: '#fff0cc',
	},
	notification: {
		default: '#FF6A5C',
	},
	brand: {
		default: '#FF6A5C',
	},

	white: {
		default: '#FFF',
	},
	dove: {
		default: '#FDFDFD',
	},
	muted: {
		default: '#F1F1F1',
	},
	gray: {
		default: '#C2C2C2',
	},
	darkGray: {
		default: '#999',
	},
	dark: {
		default: '#322439',
	},
	black: {
		default: '#333',
	},

	gradient: {
		default: 'linear-gradient(-104deg,#dd2476 16%,#ff512f 95%)',
	},

	shadow: {
		default: '0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)',
	},
	outlineShadow: {
		default: '0 1px 3px rgba(50,50,93,.15), 0 1px 0 rgba(0,0,0,.02)',
	},
};

export const types = {
	primary: {
		background: colors.primary,
		color: colors.white,
	},
	danger: {
		background: colors.danger,
		color: colors.white,
	},
	success: {
		background: colors.success,
		color: colors.white,
	},
	brand: {
		background: colors.brand,
		color: colors.white,
	},
};

export default colors;
