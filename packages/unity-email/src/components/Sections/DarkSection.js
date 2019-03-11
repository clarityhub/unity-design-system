import React from 'react';
import {
	MjmlSection,
} from 'mjml-react';
import colors from '@clarityhub/unity-core/dist/theme/colors'; 
import { bool, node } from 'prop-types';

const DarkSection = ({ children, fullWidth = true, ...rest }) => (
	<MjmlSection
		{...rest}
		fullWidth={fullWidth}
		backgroundColor={colors.dark}
	>
		{children}
	</MjmlSection>
);

DarkSection.propTypes = {
	children: node,
	fullWidth: bool,
};

export default DarkSection;
