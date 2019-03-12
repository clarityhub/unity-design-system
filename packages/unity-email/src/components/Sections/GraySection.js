import React from 'react';
import {
	MjmlSection,
} from 'mjml-react';
import { bool, node } from 'prop-types';
import colors from '@clarityhub/unity-core/lib/colors';

const GraySection = ({ children, fullWidth = true, ...rest }) => (
	<MjmlSection
		{...rest}
		fullWidth={fullWidth}
		backgroundColor={colors.muted.default}
	>
		{children}
	</MjmlSection>
);

GraySection.propTypes = {
	children: node,
	fullWidth: bool,
};

export default GraySection;
