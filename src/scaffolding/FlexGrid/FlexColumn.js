import styled from '@emotion/styled';
import { css } from '@emotion/core';

const FlexColumn = styled.div`
    display: flex;
    flex: 1 1 50%;
    height: 100%;

     ${({ center }) => center && css`
        align-items: center;
    `}
`;

export default FlexColumn;
