import React from 'react';

function ArrayFieldTitle({ TitleField, idSchema, title, required }) {
	if (!title) {
		return null;
	}
	const id = `${idSchema.$id}__title`;
	return <TitleField id={id} title={title} required={required} />;
}

export default ArrayFieldTitle;
