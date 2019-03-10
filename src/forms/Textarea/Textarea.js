import React from 'react';

import Input from '../Input';

const Textarea = ({ ...rest }) => (
	<Input
		{...rest}
		as="textarea"
	/>
);

export default Textarea;
