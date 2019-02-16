import styled from '@emotion/styled';
import { EmotionButton } from './Button';

const ButtonSet = styled.div`
    ${EmotionButton} + ${EmotionButton} {
        margin-left: 0.4rem;
    }
`;

export default ButtonSet;

