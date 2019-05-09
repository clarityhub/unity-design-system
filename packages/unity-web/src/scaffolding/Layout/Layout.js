import styled from '@emotion/styled';
import colors from '@clarityhub/unity-core/lib/colors';
import { node } from 'prop-types';

const Layout = styled.div`
    background-color: ${colors.muted.default};
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    position: relative;

    overflow: auto;
`;

/**
 * Hack for docz and react-docgen
 */
const LayoutProps = () => <div />;
LayoutProps.propTypes = {
	children: node,
};

Layout.propTypes = LayoutProps.propTypes;
export { LayoutProps };

export default Layout;
