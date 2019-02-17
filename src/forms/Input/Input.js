import { css } from '@emotion/core';
import styled from '@emotion/styled';

import colors from '../../theme/colors';
import { variants } from '../../theme/fonts';
import { lighten, desaturate } from '../../utilities/color';

const Input = styled.input`
    border: 0;
    border-bottom: 1px solid ${colors.gray};
    display: inline-block;
    font-size: 1rem;
    margin-bottom: 0;
    min-width: 250px;
    padding: 0.4rem;
    transition: all 0.2s ease-in;
    transition-property: border-bottom-width, border-bottom-color, margin-bottom;

    ${variants.text}

    &:active,
    &:focus {
        border-bottom-color: ${colors.primary};
        border-bottom-width: 2px;
        margin-bottom: -1px;
        outline: 0;
    }

    &::placeholder,
    &::-webkit-datetime-edit-month-field,
    &::-webkit-datetime-edit-day-field,
    &::-webkit-datetime-edit-year-field {
        color: ${colors.gray};
    }

    &[type=date] {
        &::-webkit-inner-spin-button {
            height: 0.8rem
        }

        &::-webkit-calendar-picker-indicator {
            height: 0.8rem;
        }
    }

    &[disabled] {
        background-color: ${colors.muted};
    }

    ${({ error }) => error && css`
        background-color: ${desaturate(lighten(colors.danger, 0.85), 0.4)};
        border-bottom-color: ${colors.danger};
        border-bottom-width: 2px;
        margin-bottom: -1px;
        outline: 0;
    `}
`;

export default Input;
