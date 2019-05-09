import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { bool } from 'prop-types';

const FlexColumn = styled.div`
    display: flex;
    flex: 1 1 50%;
    height: 100%;

     ${({ center }) => center && css`
        align-items: center;
    `}
`;

/**
 * Hack for docz and react-docgen
 */
const FlexColumnProps = () => <div />;
FlexColumnProps.propTypes = {
    center: bool
};

FlexColumn.propTypes = FlexColumnProps.propTypes;
export { FlexColumnProps };

export default FlexColumn;
