import React from 'react';
import Typography from '@clarityhub/unity-web/lib/components/Typography';

const Description = ({ id, description }) => {
	if (!description) {
		return null;
	}
	
	return (
		<Typography id={id} type="sectionLabel" component="span" style={{ fontSize: '0.8rem' }}>
			{description}
		</Typography>
	);
};


export default Description;
