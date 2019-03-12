import React from 'react';
import {
	MjmlSection,
} from 'mjml-react';
import { bool, node } from 'prop-types';
import colors from '@clarityhub/unity-core/lib/colors';

const DarkSection = ({ children, fullWidth = true, ...rest }) => (
	<MjmlSection
		{...rest}
		fullWidth={fullWidth}
		backgroundColor={colors.dark.default}
	>
		{children}
	</MjmlSection>
);

DarkSection.propTypes = {
	children: node,
	fullWidth: bool,
};

export default DarkSection;
