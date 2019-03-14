import React from 'react';
import {
	MjmlText,
} from 'mjml-react';
import colors from '@clarityhub/unity-core/lib/colors';
import { variants } from '@clarityhub/unity-core/lib/typography';
import omit from 'lodash.omit';

import { types } from '../../theme/fonts';

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
		Boolean(variant) ? omit(variants[variant], ['string']) : {},
		Boolean(color) ? { color: colors[color].default } : {},
		center ? { align: 'center' } : { align: 'left' },
	);

	return <MjmlText {...rest} {...props}>{children}</MjmlText>;
};

// XXX prop types

export default Typography;
