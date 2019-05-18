import React from 'react';
import { ADDITIONAL_PROPERTY_FLAG } from "react-jsonschema-form/lib/utils";
import Label from '@clarityhub/unity-web/lib/forms/Label';
import InputGroup from '@clarityhub/unity-web/lib/forms/InputGroup';
import Button from '@clarityhub/unity-web/lib/components/Buttons';
import ErrorList from '../ErrorLists';

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


function WrapIfAdditional(props) {
	const {
		id,
		classNames,
		disabled,
		label,
		onKeyChange,
		onDropPropertyClick,
		readonly,
		required,
		schema,
	} = props;
	const keyLabel = `${label} Key`; // i18n ?
	const additional = schema.hasOwnProperty(ADDITIONAL_PROPERTY_FLAG);

	if (!additional) {
		return <InputGroup className={classNames}>{props.children}</InputGroup>;
	}

	return (
		<InputGroup className={classNames}>
			<div className="row">
				<div className="col-xs-5 form-additional">
					<div className="form-group">
						<Label children={keyLabel} required={required} id={`${id}-key`} />
						<LabelInput
							label={label}
							required={required}
							id={`${id}-key`}
							onChange={onKeyChange}
						/>
					</div>
				</div>
				<div className="form-additional form-group col-xs-5">
					{props.children}
				</div>
				<div className="col-xs-2">
					<Button
						type="danger"
						icon="remove"
						className="array-item-remove btn-block"
						tabIndex="-1"
						style={{ border: "0" }}
						disabled={disabled || readonly}
						onClick={onDropPropertyClick(label)}
					>Remove</Button>
				</div>
			</div>
		</InputGroup>
	);
}

function FieldTemplate(props) {
	const {
		children,
		rawErrors,
		help,
		description,
		hidden,
		id,
	} = props;

	if (hidden) {
		return <div className="hidden">{children}</div>;
	}

	return (
		<WrapIfAdditional {...props}>
			{children}
			{id !== 'root' && description ? description : null}
			{rawErrors ? <ErrorList errors={rawErrors} /> : null}
			{help}
		</WrapIfAdditional>
	);
}

export default { FieldTemplate };