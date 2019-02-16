import { css } from '@emotion/core';
import styled from '@emotion/styled';

const Swatch = styled.div`
    background-color: ${({ color }) => color};
    height: 50px;
    width: 50px;

    ${({ wide }) => wide && css`
        width: auto;
        padding: 20px;
    `}
`;

export default Swatch;
