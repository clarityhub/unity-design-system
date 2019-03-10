import styled from '@emotion/styled';

import breakpoints from '../../theme/breakpoints';

const mobileGutter = 2;

const FlexGridContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    margin: auto;
    max-width: ${breakpoints.maxWidth}px;

    @media (max-width: ${breakpoints.maxWidth + (mobileGutter * 16)}px) {
        padding: 0 ${mobileGutter}rem;
        width: 100%;
    }
`;

export default FlexGridContainer;