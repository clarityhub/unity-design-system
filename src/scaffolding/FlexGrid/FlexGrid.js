import styled from '@emotion/styled';
import { css } from '@emotion/core';

const FlexGrid = styled.div`
    display: flex;
    height: 100%;
    position: relative;
    width: 100%;

    ${({ center }) => center && css`
        align-items: center;
    `}
`;

export default FlexGrid;
