import React, { Fragment } from 'react';
import {
	MjmlSpacer,
} from 'mjml-react';
import { node, bool, number, oneOfType } from 'prop-types';

const Box = ({
	children,
	marginTop = false,
	marginBottom = false,
}) => (
	<Fragment>
		{marginTop && <MjmlSpacer height={`${marginTop * 16}px`} />}
		{children}
		{marginBottom && <MjmlSpacer height={`${marginBottom * 16}px`} />}
	</Fragment>
);

Box.propTypes = {
	children: node,
	marginBottom: oneOfType([bool, number]),
	marginTop: oneOfType([bool, number]),
};

export default Box;

