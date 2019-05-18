import React from 'react';
import LabelledInput from '@clarityhub/unity-web/lib/forms/LabelledInput';
import LabelledTextarea from '@clarityhub/unity-web/lib/forms/LabelledTextarea';

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

const WrappedLabelledTextarea = ({ onChange, rawErrors, ...rest }) => {
	const _onChange = (e) => {
		onChange(e.target.value || '');
	};

	return (
		<LabelledTextarea
			{...rest}
			onChange={_onChange}
			error={!!rawErrors}
			maxLines={10}
		/>
	);
};

export default { WrappedLabelledInput, WrappedLabelledTextarea }; 