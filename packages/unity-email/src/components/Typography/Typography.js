import React from 'react';
import {
	MjmlText,
} from 'mjml-react';
import colors from '@clarityhub/unity-core/dist/theme/colors';

import { types, variants } from '../../theme/fonts';

const Typography = ({
	type = 'text',
	variant,
	color = 'dark',
	children,
	component: suggestedComponent = 'p',
	noMargin = false,
	noPadding = false,
	inline = false,
	css: userCss,
	center = false,
	...rest
}) => {
	const props = Object.assign(
		{},
		Boolean(type) ? types[type] : {},
		Boolean(variant) ? variants[variant] : {},
		Boolean(color) ? { color: colors[color] } : {},
		center ? { align: 'center' } : { align: 'left' },
	);

	return <MjmlText {...rest} {...props}>{children}</MjmlText>;
};

// XXX prop types

export default Typography;
