import styled from '@emotion/styled';

import { EmotionButton } from '../../components/Button';

const InputGroupAppend = styled.div`
    display: flex;

    ${EmotionButton} {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        margin-left: -1px;
    }

    &:not(:last-child) {
        ${EmotionButton} {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }
    }
`;

export default InputGroupAppend;
