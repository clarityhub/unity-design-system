import React from 'react';
import Typography from '@clarityhub/unity-web/lib/components/Typography';

const Title = ({ id, title }) => (
	<Typography id={id} noPadding type="h2">
		{title}
	</Typography>
);


export default Title;
