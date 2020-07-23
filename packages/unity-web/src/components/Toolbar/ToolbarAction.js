import React from 'react';

import Box from '../../scaffolding/Box';

const ToolbarActions = ({ children, ...props }) => (
	<Box {...props} direction="row">
		{children}
	</Box>
);

export default ToolbarActions;
