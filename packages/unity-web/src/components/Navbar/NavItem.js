import styled from '@emotion/styled';
import { css } from '@emotion/core';
import colors from '@clarityhub/unity-core/lib/colors';

const NavItem = styled.div`
    a {
        color: ${colors.white.default};

        ${({ selected }) => selected && css`
            font-weight: bold;
        `}
    }

    &:not(:first-of-type) {
        margin-left: 3rem;
    }

    /* Used for avatars in the navbar */
    img {
        margin-top: 4px;
    }
`;

export default NavItem;
