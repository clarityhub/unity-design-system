import React from 'react';
import styled from '@emotion/styled';
import { node } from 'prop-types';

import Box from '../Box';

const StyledLayout = styled(Box)`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    position: relative;

    overflow: auto;
`;

const Layout = ({ as = 'div', background="muted", ...props }) => (
	<StyledLayout as={as} background={background} {...props} />
);

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
