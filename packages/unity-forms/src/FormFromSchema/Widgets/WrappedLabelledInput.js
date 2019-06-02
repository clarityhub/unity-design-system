import React from 'react';
import LabelledInput from '@clarityhub/unity-web/lib/forms/LabelledInput';

const WrappedLabelledInput = ({ onChange, rawErrors, ...rest }) => {
	const _onChange = (e) => {
		onChange(e.target.value || '');
	};

	return (
		<LabelledInput
			{...rest}
			name={rest.label}
			onChange={_onChange}
			error={!!rawErrors}

		/>
	);
};

// TODO prop types

export default WrappedLabelledInput;
