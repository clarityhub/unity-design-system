import styled from '@emotion/styled';
import { BorderEnd } from '../Input/Input';

const InputGroup = styled.div`
    display: flex;
    padding-top: 1rem;
    position: relative;

    & + & {
        margin-top: 1rem;
    }

    & > :not(:last-child) ${BorderEnd} {
        border-top-right-radius: 0 !important;
        border-bottom-right-radius: 0 !important;
    }
`;

export default InputGroup;
