import React from 'react';
import { func, oneOfType, node, string } from 'prop-types';

import Typography from '../Typography';

const Link = ({ component = 'a', children, variant = 'text', color = 'primary', type, ...props }) => (
	<Typography
		type={type ? type : 'link'}
		variant={variant}
		color={color}
		component={component}
		{...props}
	>
		{children}
	</Typography>
);

/**
 * Hack for docz and react-docgen
 */
const LinkPropTypes = () => <div />;
LinkPropTypes.propTypes = {
	children: node,
	color: string,
	component: oneOfType([string, func]),
	type: string,
	variant: string,
};
Link.propTypes = LinkPropTypes.propTypes;
export { LinkPropTypes };

export default Link;
