import styled from '@emotion/styled';

import breakpoints from '../../theme/breakpoints';
import { FLEX_MOBILE_GUTTER } from './config';

const FlexGridContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    margin: auto;
    max-width: ${breakpoints.maxWidth}px;

    @media (max-width: ${breakpoints.maxWidth + (FLEX_MOBILE_GUTTER * 16)}px) {
        padding: 0 ${FLEX_MOBILE_GUTTER}rem;
        width: 100%;
    }
`;

export default FlexGridContainer;