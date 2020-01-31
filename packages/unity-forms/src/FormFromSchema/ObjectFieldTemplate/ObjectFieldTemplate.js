import React, { Fragment } from 'react';
import { getUiOptions } from 'react-jsonschema-form/lib/utils';
import Button from '@clarityhub/unity-web/lib/components/Buttons';
import Box from '@clarityhub/unity-web/lib/scaffolding/Box';

function ObjectFieldTemplate(props) {
	const canExpand = function canExpand() {
		const { formData, schema, uiSchema } = props;
		if (!schema.additionalProperties) {
			return false;
		}
		const { expandable } = getUiOptions(uiSchema);
		if (expandable === false) {
			return expandable;
		}
		// if ui:options.expandable was not explicitly set to false, we can add
		// another property if we have not exceeded maxProperties yet
		if (schema.maxProperties !== undefined) {
			return Object.keys(formData).length < schema.maxProperties;
		}
		return true;
	};

	const { TitleField, DescriptionField } = props;

	return (
		<Box style={{ width: props.idSchema.$id === 'root' ? '100%' : undefined }} id={props.idSchema.$id}>

			{props.idSchema.$id !== 'root' || (props.idSchema.$id === 'root' && !props.uiSchema._hideTitle) ? (
				<Fragment>
					{(props.uiSchema['ui:title'] || props.title) && (
						<TitleField
							id={`${props.idSchema.$id}__title`}
							title={props.title || props.uiSchema['ui:title']}
							required={props.required}
							formContext={props.formContext}
						/>
					)}
					{props.description && (
						<DescriptionField
							id={`${props.idSchema.$id}__description`}
							description={props.description}
							formContext={props.formContext}
						/>
					)}
				</Fragment>
			) : null}
			{props.properties.map(prop => prop.content)}
			{canExpand() && (
				<Button
					type="primary"
					className="object-property-expand"
					onClick={props.onAddClick(props.schema)}
					disabled={props.disabled || props.readonly}
				>Add</Button>
			)}
		</Box>
	);
}

// TODO prop types

export default ObjectFieldTemplate;
