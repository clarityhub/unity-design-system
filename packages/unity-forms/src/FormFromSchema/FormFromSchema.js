import React from 'react';
import Form from 'react-jsonschema-form';
import InputGroup from '@clarityhub/unity-web/lib/forms/InputGroup';
import Button from '@clarityhub/unity-web/lib/components/Buttons';

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
		uiSchema={uiSchema}
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
				<Button type="primary" buttonType="submit" disabled={submitting} loading={submitting}>
					{submitText}
				</Button>
			</InputGroup>
		)}
	</Form>
);

export default FormFromSchema;
