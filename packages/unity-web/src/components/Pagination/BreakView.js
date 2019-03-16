import React from 'react';
import { string, node, oneOfType } from 'prop-types';

const BreakView = props => {
	const { breakLabel } = props;

	return (
		<li>
			{breakLabel}
		</li>
	);
};

BreakView.propTypes = {
	breakLabel: oneOfType([string, node]),
};

export default BreakView;