import styled from '@emotion/styled';
import { func, node, oneOfType } from 'prop-types';

import { SIDENAV_WIDTH } from './config';

const SideNav = styled.div`
    box-sizing: border-box;
    padding: 3rem 2rem 3rem 0;
    width: ${SIDENAV_WIDTH}rem;
`;

/**
 * Hack for docz and react-docgen
 */
const SideNavProps = () => <div />;
SideNavProps.propTypes = {
	children: oneOfType([node, func]),
};

SideNav.propTypes = SideNavProps.propTypes;
export { SideNavProps };

export default SideNav;
