import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { bool } from 'prop-types';

const FlexGrid = styled.div`
    display: flex;
    height: 100%;
    position: relative;
    width: 100%;

    ${({ center }) => center && css`
        align-items: center;
    `}
`;

/**
 * Hack for docz and react-docgen
 */
const FlexGridProps = () => <div />;
FlexGridProps.propTypes = {
    center: bool
};

FlexGrid.propTypes = FlexGridProps.propTypes;
export { FlexGridProps };

export default FlexGrid;
