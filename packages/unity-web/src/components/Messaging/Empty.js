import React, { Fragment } from 'react';
import { arrayOf, string, node, func, oneOfType } from 'prop-types';
import Icon from '@mdi/react';

import Box from '../../scaffolding/Box';
import Typography from '../Typography/Typography';
import { mdiTextBoxRemoveOutline } from './emptyIcon';

const Empty = ({
	icon,
	message = 'No data',
	details,
	actions = [],
}) => (
	<Box direction="column" style={{ textAlign: 'center' }}>
		<Box padding="medium">
			<Icon
				path={icon || mdiTextBoxRemoveOutline}
				title={'Not found'}
				size={3}
				style={{
					margin: 'auto',
				}}
			/>
		</Box>
		{message && <Typography type="h3" noMargin noPadding>
		    {message}
		</Typography>}
		{details && <Typography>
		    {details}
		</Typography>}
        
		{actions.map((action, i) => {
			return (
				<Fragment key={i}>
					{action}
				</Fragment>
			);
		})}
	</Box>
);

Empty.propTypes = {
	actions: arrayOf(oneOfType([node, func])),
	details: oneOfType([node, func]),
	icon: string,
	message: oneOfType([node, func]),
};

export default Empty;