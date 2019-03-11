import React from 'react';
import {
	MjmlButton,
} from 'mjml-react';
import { node } from 'prop-types';
import colors from '@clarityhub/unity-core/dist/theme/colors';

import { variants } from '../../theme/fonts';

const { letterSpacing, ...validButtonOptions } = variants.button;

const buttonBase = Object.assign(
	{},
	validButtonOptions,
	{
		fontSize: '16px',
		borderRadius: '4px', // TODO merge with borders.borderRadius
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
			color: colors.white,
			backgroundColor: colors.primary,
		};
	case 'danger':
		return {
			color: colors.white,
			backgroundColor: colors.danger,
		};
	case 'default':
	default:
		return {
			color: colors.primary,
			backgroundColor: 'rgba(255, 255, 255, 0)',
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
