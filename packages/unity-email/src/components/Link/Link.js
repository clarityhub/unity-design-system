import React from 'react';
import { node, string } from 'prop-types';

const Link = ({ children, href }) => (
	<a href={href}>{children}</a>
);

Link.propTypes = {
	children: node,
	href: string.isRequired,
};

export default Link;
