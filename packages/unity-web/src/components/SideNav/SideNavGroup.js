import styled from '@emotion/styled';
import { node } from 'prop-types';

const SideNavGroup = styled.div`
    transition: all 0.3s ease-in;

    a,
    a:visited {
        padding-left: 1rem !important;
    }
`;

/**
 * Hack for docz and react-docgen
 */
const SideNavGroupProps = () => <div />;
SideNavGroupProps.propTypes = {
	children: node,
};

SideNavGroup.propTypes = SideNavGroupProps.propTypes;
export { SideNavGroupProps };

export default SideNavGroup;
