import styled from '@emotion/styled';
import colors from '../../theme/colors';

const Blockquote = styled.blockquote`
    border-left: 4px solid ${colors.dark};
    padding-left: calc(2rem - 4px);
    font-style: italic;
    margin-left: -2rem;

    p + & {
        margin-top: 1.6rem;
    }

    & + p {
        margin-top: 1.6rem;
    }
`;

export default Blockquote;
