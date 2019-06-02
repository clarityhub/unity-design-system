import React from 'react';
import LabelledTextarea from '@clarityhub/unity-web/lib/forms/LabelledTextarea';

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

// TODO prop types

export default WrappedLabelledTextarea;
