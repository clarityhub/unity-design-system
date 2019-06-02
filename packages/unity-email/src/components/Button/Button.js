import React from 'react';
import {
	MjmlButton,
} from 'mjml-react';
import { node } from 'prop-types';
import colors from '@clarityhub/unity-core/lib/colors';
import { variants } from '@clarityhub/unity-core/lib/typography';
import borders from '@clarityhub/unity-core/lib/borders';

const { letterSpacing, string, ...validButtonOptions } = variants.button;

const buttonBase = Object.assign(
	{},
	validButtonOptions,
	{
		fontSize: '16px',
		borderRadius: `${borders.borderRadius.default}px`,
		paddingTop: '8px',
		paddingBottom: '8px',
		paddingLeft: '20px',
		paddingRight: '20px',
	}
);

const determineColors = (type) => {
	switch (type) {
	case 'primary':
		return {
			color: colors.white.default,
			backgroundColor: colors.primary.default,
		};
	case 'danger':
		return {
			color: colors.white.default,
			backgroundColor: colors.danger.default,
		};
	case 'default':
	default:
		return {
			color: colors.primary.default,
			backgroundColor: 'rgba(255, 255, 255, 0)', // XXX core transparent color
		};
	}
};

const Button = ({ children, center, type, ...rest }) => (
	<MjmlButton {...buttonBase} {...determineColors(type)} align={center ? 'center' : 'left'} textAlign={center ? 'left': 'center'} {...rest}>
		{children}
	</MjmlButton>
);

Button.propType = {
	children: node,
};

export default Button;
