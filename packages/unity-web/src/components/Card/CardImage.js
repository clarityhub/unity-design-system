import styled from '@emotion/styled';
import borders from '@clarityhub/unity-core/lib/borders';

const CardImage = styled.img`
    display: block;
    margin: 0 auto;
    max-width: 100%;

    border-top-left-radius: calc(${borders.borderRadius.rem}rem - 1px);
    border-top-right-radius: calc(${borders.borderRadius.rem}rem - 1px);
`;

export default CardImage;
