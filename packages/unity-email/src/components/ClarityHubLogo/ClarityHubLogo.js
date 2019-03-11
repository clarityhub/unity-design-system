import React from 'react';
import { MjmlImage } from 'mjml-react';

import { IMAGE_URL } from './config';

const ClarityHubLogo = ({ ...rest }) => (
	<MjmlImage {...rest} src={IMAGE_URL} />
);

export default ClarityHubLogo;
