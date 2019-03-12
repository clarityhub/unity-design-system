/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import colors from '@clarityhub/unity-core/lib/colors';

import Button from '../Buttons';

const MenuItem = props => (
	<Button
		text
		css={css`
            border-radius: 0;
            text-align: left;
            text-transform: none;
            min-width: 150px;
            width: 100%;

            &:hover {
                background-color: ${colors.muted.default};
            }
        `}
		{...props}
	/>
);

export default MenuItem;
