import React from 'react';
import { any, oneOfType, bool, string } from 'prop-types';

import Box from '../../scaffolding/Box';
import Typography from '../Typography';
import Notification from '../Notification';
import Button, { ButtonSet } from '../Buttons';

import errorToString from './errorToString';

const handleRefresh = (refresh) => (e) => {
	e.preventDefault();

	if (typeof refresh === 'string') {
		window.location.href = refresh;
		return;
	}

	window.location.reload();
};

const FloatingError = ({ error, refresh = false, ...props }) => {
	return (
		<Notification type="danger" variant="block" {...props}>
			<Typography color="white">
				{errorToString(error)}
			</Typography>

			{refresh && (
				<Box margin={{ top: 'small' }}>
					<ButtonSet>
						<Button type="white" onClick={handleRefresh(refresh)}>
							Refresh
						</Button>
					</ButtonSet>

				</Box>
			)}
		</Notification>
	);
};

FloatingError.propTypes = {
	error: any,
	refresh: oneOfType([bool, string]),
};

export default FloatingError;