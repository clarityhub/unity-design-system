import React from 'react';
import Typography from '@clarityhub/unity-web/lib/components/Typography';

const Title = ({ id, title }) => (
	<Typography id={id} noPadding type="h2">
		{title}
	</Typography>
);

const Description = ({ id, description }) => (
	<Typography id={id} type="sectionLabel" component="span" style={{ fontSize: '0.8rem' }}>
		{description}
	</Typography>
);

export default { Title, Description };