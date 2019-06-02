import React from 'react';

function ArrayFieldDescription({ DescriptionField, idSchema, description }) {
	if (!description) {
		return null;
	}
	const id = `${idSchema.$id}__description`;
	return <DescriptionField id={id} description={description} />;
}

export default ArrayFieldDescription;