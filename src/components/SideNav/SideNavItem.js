import styled from '@emotion/styled';
import { css } from '@emotion/core';

import colors from '../../theme/colors';
import { darken } from '../../utilities/color';

const SideNavItem = styled.div`
    width: 100%;

    a,
    a:visited {
        border: 0;
        text-decoration: none;
        color: ${colors.darkGray};
        display: block;
        font-size: 0.9rem;
        padding: 0.6rem 0;
        margin-bottom: 0;

        ${({ selected }) => selected && css`
            color: ${colors.dark};
            font-weight: bold;
        `}

        &:hover {
            border: 0;
            text-decoration: none;
            color: ${colors.dark};
            display: block;
            padding: 0.6rem 0;
            margin-bottom: 0;
        }
    }
`;

export default SideNavItem;
