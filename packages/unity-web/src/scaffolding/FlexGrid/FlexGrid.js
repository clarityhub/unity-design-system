import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { bool } from 'prop-types';

import Box from '../Box';

const StyledFlexGrid = styled(Box)`
    height: 100%;
    position: relative;
    width: 100%;

    ${({ center }) => center && css`
        align-items: center;
    `}
`;

const FlexGrid = ({ direction = "row", ...props }) => (
	<StyledFlexGrid direction={direction} {...props} />
);

/**
 * Hack for docz and react-docgen
 */
const FlexGridProps = () => <div />;
FlexGridProps.propTypes = {
	center: bool,
};

FlexGrid.propTypes = FlexGridProps.propTypes;
export { FlexGridProps };

export default FlexGrid;
