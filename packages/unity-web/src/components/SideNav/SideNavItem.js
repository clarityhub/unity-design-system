import styled from '@emotion/styled';
import { css } from '@emotion/core';
import colors from '@clarityhub/unity-core/lib/colors';

import SideNavGroup from './SideNavGroup';

const SideNavItem = styled.div`
    width: 100%;

    ${SideNavGroup} {
        opacity: 0;
        max-height: 0;
        overflow: hidden;
    
        ${({ selected }) => selected && css`
            opacity: 1;
            max-height: 400px;
        `}
    }

    > a,
    > a:visited {
        border: 0;
        text-decoration: none;
        color: ${colors.darkGray.default};
        display: block;
        font-size: 0.9rem;
        padding: 0.6rem 0;
        margin-bottom: 0;

        ${({ selected }) => selected && css`
            color: ${colors.dark.default};
            font-weight: bold;
        `}

        &:hover {
            border: 0;
            text-decoration: none;
            color: ${colors.dark.default};
            display: block;
            margin-bottom: 0;
        }
    }
`;

export default SideNavItem;
