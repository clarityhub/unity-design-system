import React from 'react';

import Box from '@clarityhub/unity-web/lib/scaffolding/Box';

import styled from '@emotion/styled';

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
