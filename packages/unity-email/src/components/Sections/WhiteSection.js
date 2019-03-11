import React from 'react';
import {
	MjmlSection,
} from 'mjml-react';
import colors from '@clarityhub/unity-core/dist/theme/colors'; 
import { bool, node } from 'prop-types';

const WhiteSection = ({ children, fullWidth = true, ...rest }) => (
	<MjmlSection
		{...rest}
		fullWidth={fullWidth}
		backgroundColor={colors.white}
	>
		{children}
	</MjmlSection>
);

WhiteSection.propTypes = {
	children: node,
	fullWidth: bool,
};

export default WhiteSection;
