import React from 'react';
import {
	MjmlSection,
} from 'mjml-react';
import { bool, node } from 'prop-types';
import colors from '@clarityhub/unity-core/lib/colors';

const WhiteSection = ({ children, fullWidth = true, ...rest }) => (
	<MjmlSection
		{...rest}
		fullWidth={fullWidth}
		backgroundColor={colors.white.default}
	>
		{children}
	</MjmlSection>
);

WhiteSection.propTypes = {
	children: node,
	fullWidth: bool,
};

export default WhiteSection;
