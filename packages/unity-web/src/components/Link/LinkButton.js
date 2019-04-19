import React from 'react';
import { node, shape, func, string } from 'prop-types';

import Button from '../Buttons/Button';

const LinkButton = ({ history, to, onClick, ...rest }) => (
	<Button
		{...rest}
		onClick={(event) => {
			onClick && onClick(event);
			history.push(to);
		}}
	/>
);

LinkButton.propTypes = {
	children: node.isRequired,
	history: shape({
		push: func.isRequired,
	}).isRequired,
	to: string.isRequired,
};

export default LinkButton;