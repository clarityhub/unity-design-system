import React from 'react';

// XXX why doesn't this use @clarityhub/unity-web input?
function LabelInput(props) {
	const { id, label, onChange } = props;
	return (
		<input
			className="form-control"
			type="text"
			id={id}
			onBlur={event => onChange(event.target.value)}
			defaultValue={label}
		/>
	);
}

export default LabelInput;
