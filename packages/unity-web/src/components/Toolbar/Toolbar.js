import React from 'react';
import styled from '@emotion/styled';

import Box from '../../scaffolding/Box';

const ToolbarWrapper = styled(Box)`
	> * + * {
		margin-left: 0.5rem;
	}
`;

const Toolbar = ({ children, ...props }) => (
	<ToolbarWrapper direction="row" margin={{ bottom: 'xsmall' }} {...props}>
		{children}
	</ToolbarWrapper>
);

export default Toolbar;
