/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import Button from '../Buttons';
import colors from '../../theme/colors';

const MenuItem = props => (
    <Button
        text
        css={css`
            text-align: left;
            min-width: 150px;
            width: 100%;

            &:hover {
                background-color: ${colors.muted};
            }
        `}
        {...props}
    />
);

export default MenuItem;
