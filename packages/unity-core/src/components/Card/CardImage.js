import styled from '@emotion/styled';

import borders from '../../theme/borders';

const CardImage = styled.img`
    display: block;
    margin: 0 auto;
    max-width: 100%;

    border-top-left-radius: calc(${borders.borderRadius} - 1px);
    border-top-right-radius: calc(${borders.borderRadius} - 1px);
`;

export default CardImage;
