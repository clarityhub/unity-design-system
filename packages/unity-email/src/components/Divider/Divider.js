import React from 'react';
import {
	MjmlDivider,
} from 'mjml-react';
import colors from '@clarityhub/unity-core/dist/theme/colors'; 

const Divider = () => (
	<MjmlDivider
		borderWidth="1px"
		borderStyle="solid"
		borderColor={colors.gray}
	/>
);

export default Divider;

