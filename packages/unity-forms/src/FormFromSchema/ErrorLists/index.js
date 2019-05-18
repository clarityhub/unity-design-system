import React from 'react';
import Typography from '@clarityhub/unity-web/lib/components/Typography';
import Notification from '@clarityhub/unity-web/lib/components/Notification';


function FormErrorList(props) {
	const { errors } = props;
	return (
		<Notification type="danger" variant="block">
			{errors.map((error, i) => {
				return (
					<div key={i}>
						{error.stack}
					</div>
				);
			})}
		</Notification>
	);
}

function ErrorList(props) {
	const { errors = [] } = props;
	if (errors.length === 0) {
		return null;
	}

	return (
		<div>
			{errors
				.filter(elem => !!elem)
				.map((error, index) => {
					return (
						<Typography
							key={index}
							type="sectionLabel"
							color="danger"
							component="div"
							style={{ fontSize: '0.8rem' }}
						>
							Validation Error: {error}
						</Typography>
					);
				})}
		</div>
	);
}

export default { ErrorList, FormErrorList };