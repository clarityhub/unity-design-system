import React from 'react';

import Box from '@clarityhub/unity-web/lib/scaffolding/Box';

const ToolbarActions = ({ children, ...props }) => (
	<Box {...props} direction="row">
		{children}
	</Box>
);

export default ToolbarActions;
