/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import Button from '../Button';

const FAB = (props) => {
	return (
		<Button {...props} css={css`
            border-radius: 50%;
            height: 3.625rem;
            width: 3.625rem;
            padding: 1rem;
            line-height: 0;
        `}/>
	);
};

export default FAB;