import { css } from '@emotion/core';
import styled from '@emotion/styled';

import colors from '../../theme/colors';
import { variants } from '../../theme/fonts';

const Label = styled.label`
    color: ${colors.gray};
    cursor: text;
    display: block;
    font-size: 0.9rem;
    left: 0;
    padding: 0 0.4rem;
    position: absolute;
    top: 0;
    transition: 0.2s ease-out;

    ${variants.text}

    ${({ error }) => error && css`
        color ${colors.danger};
    `}
`;

export default Label;
