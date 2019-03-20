import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { variants } from '@clarityhub/unity-core/lib/typography';
import colors from '@clarityhub/unity-core/lib/colors';

const Label = styled.label`
    color: ${colors.darkGray.default};
    cursor: text;
    display: block;
    flex: 1;
    font-size: 0.9rem;
    line-height: 1.2rem;
    left: 0;
    padding: 0 0.4rem;
    position: absolute;
    text-align: left;
    top: 0;
    transition: 0.2s ease-out;

    ${variants.text.string}

    ${({ variant }) => {
		switch (variant) {
		case 'white':
			return `
                color: ${colors.white.default};
                `;
		default:
			return ``;
		}
	}}

    ${({ error }) => error && css`
        color ${colors.danger.default};
    `}

`;

export default Label;
