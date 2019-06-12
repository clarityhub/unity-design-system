import React from 'react';
import Form from 'react-jsonschema-form';
import { bool, func, object, string } from 'prop-types';
import InputGroup from '@clarityhub/unity-web/lib/forms/InputGroup';
import Button, { ButtonSet } from '@clarityhub/unity-web/lib/components/Buttons';

import { WrappedLabelledInput, WrappedLabelledTextarea } from './Widgets';
import { Title, Description } from './Fields';
import { FieldTemplate } from './FieldTemplate';
import { FormErrorList } from './ErrorLists';
import { ObjectFieldTemplate } from './ObjectFieldTemplate';
import { ArrayFieldTemplate } from './ArrayFieldTemplate';

const widgets = {
	BaseInput: WrappedLabelledInput,
	TextareaWidget: WrappedLabelledTextarea,
};

const fields = {
	TitleField: Title,
	DescriptionField: Description,
};

const FormFromSchema = ({
	children,
	hideTitle,
	additionalButtons = () => null,
	submitText = 'Submit',
	submitting,
	schema,
	uiSchema,
	onSubmit,
	formData,
}) => (
	<Form
		schema={schema}
		fields={fields}
		uiSchema={{
			_hideTitle: hideTitle,
			...uiSchema,
		}}
		FieldTemplate={FieldTemplate}
		ErrorList={FormErrorList}
		ObjectFieldTemplate={ObjectFieldTemplate}
		ArrayFieldTemplate={ArrayFieldTemplate}
		widgets={widgets}
		formData={formData}
		onSubmit={({ formData }) => onSubmit(formData)}
	>
		{children ? (
			children({ submitting, submitText })
		) : (
			<InputGroup>
				<ButtonSet>
					{additionalButtons()}
					<Button type="primary" buttonType="submit" disabled={submitting} loading={submitting}>
						{submitText}
					</Button>
				</ButtonSet>
			</InputGroup>
		)}
	</Form>
);

FormFromSchema.propTypes = {
	additionalButtons: func,
	children: func,
	formData: object,
	hideTitle: bool,
	onSubmit: func.isRequired,
	schema: object,
	submitText: string,
	submitting: bool,
	uiSchema: object,
};

export default FormFromSchema;
