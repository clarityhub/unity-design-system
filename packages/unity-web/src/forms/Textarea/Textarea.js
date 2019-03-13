import React from 'react';

import Input from '../Input';

const Textarea = ({ ...rest }) => (
	<Input
		{...rest}
		inputType="textarea"
		as="textarea"
	/>
);

export default Textarea;
