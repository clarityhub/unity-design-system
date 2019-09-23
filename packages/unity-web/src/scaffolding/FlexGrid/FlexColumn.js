import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { bool } from 'prop-types';

import Box from '../Box';

const FlexColumnStyled = styled(Box)`
    height: 100%;

     ${({ center }) => center && css`
        align-items: center;
    `}
`;

const FlexColumn = ({ flex = 1, ...props }) => (
	<FlexColumnStyled flex={1} {...props} />
);

/**
 * Hack for docz and react-docgen
 */
const FlexColumnProps = () => <div />;
FlexColumnProps.propTypes = {
	center: bool,
};

FlexColumn.propTypes = FlexColumnProps.propTypes;
export { FlexColumnProps };

export default FlexColumn;
