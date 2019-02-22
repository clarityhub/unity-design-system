import styled from '@emotion/styled';
import { css } from '@emotion/core';

import colors from '../../theme/colors';

const NavItem = styled.div`
    a {
        color: ${colors.white};

        ${({ selected }) => selected && css`
            font-weight: bold;
        `}
    }

    &:not(:first-child) {
        margin-left: 1rem;
    }

    /* Used for avatars in the navbar */
    img {
        margin-top: 4px;
    }
`;

export default NavItem;
