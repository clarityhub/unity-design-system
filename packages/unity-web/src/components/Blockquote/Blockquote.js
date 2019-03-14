import styled from '@emotion/styled';
import colors from '@clarityhub/unity-core/lib/colors';

const Blockquote = styled.blockquote`
    border-left: 4px solid ${colors.dark.default};
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
