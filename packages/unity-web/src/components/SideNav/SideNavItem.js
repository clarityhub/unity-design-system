import styled from '@emotion/styled';
import { bool, node } from 'prop-types';
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
        border: 0 !important;
        text-decoration: none;
        color: ${colors.darkGray.default};
        display: block;
        font-size: 0.9rem;
        padding: 0.6rem 0;
        margin-bottom: 0;

        &:hover {
            border: 0 !important;
            text-decoration: none;
            color: ${colors.dark.default};
            display: block;
            margin-bottom: 0;
        }

        ${({ selected }) => selected && css`
            color: ${colors.primary.default};
            font-weight: bold;

            &:hover {
                color: ${colors.primary.default};
            }
        `}

    }
`;

/**
 * Hack for docz and react-docgen
 */
const SideNavItemProps = () => <div />;
SideNavItemProps.propTypes = {
	children: node,
	selected: bool.isRequired,
};

SideNavItem.propTypes = SideNavItemProps.propTypes;
export { SideNavItemProps };

export default SideNavItem;
