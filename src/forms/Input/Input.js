import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import borders from '../../theme/borders';
import colors from '../../theme/colors';
import { variants } from '../../theme/fonts';
import { lighten, desaturate } from '../../utilities/color';

const labelPadding = 0.3;
const inputHeight = 2.670;
const paddingLeft = 0.79;
const paddingTop = 0.85;

const baseInput = ({ error }) => css`
    box-sizing: border-box;
    display: inline-block;
    font-size: 1rem;
    margin-bottom: 0;
    min-width: 250px;
    min-height: ${inputHeight}rem;
    padding: 0.625rem 1rem;
    transition: all 0.2s ease-in;
    transition-property: border-bottom-width, border-bottom-color, color, margin-bottom;
    width: 100%;
    resize: vertical;

    ${variants.text}

    &:active,
    &:focus {
        outline: 0;
    }

    &:disabled {
        cursor: not-allowed;
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

    ${error && css`
        background-color: ${desaturate(lighten(colors.danger, 0.85), 0.4)};
        outline: 0;
    `}
`;

const Input = styled.input`
    border: 1px solid ${colors.gray};
    border-radius: ${borders.borderRadius};

    ${({ error }) => baseInput({ error })}

    &:disabled {
        background-color: ${colors.muted};
    }

    &:active,
    &:focus {
        border-color: ${colors.primary};
    }

    ${({ error }) => error && css`
        border-color: ${colors.danger};
    `}
`;

const BorderStart = styled.div`
    border-bottom: 1px solid ${colors.gray};
    border-top: 1px solid ${colors.gray};
    border-left: 1px solid ${colors.gray};
    border-radius: ${borders.borderRadius} 0 0 ${borders.borderRadius};

    width: ${paddingLeft}rem;
    min-height: 100%;
`;

const BorderLabel = styled.div`
    border-bottom: 1px solid ${colors.gray};
    border-top: 1px solid transparent !important;
    min-height: 100%;
    width: 0;

    > span {
      color: transparent;
    }
`;
const BorderEnd = styled.div`
    border-bottom: 1px solid ${colors.gray};
    border-top: 1px solid ${colors.gray};
    border-right: 1px solid ${colors.gray};
    border-radius: 0 ${borders.borderRadius} ${borders.borderRadius} 0;

    flex: 1;
    min-height: 100%;
`;

const FakeLabel = styled.span`
    ${variants.text}

    padding: 0 ${labelPadding}rem;
`;

const BorderWrapper = styled.div`
    box-sizing: border-box;

    & * {
        box-sizing: border-box;
    }

    display: flex;
    position: relative;
    height: 100%;

    ${({ error }) => error && css`
        ${BorderStart},
        ${BorderLabel},
        ${BorderEnd} {
            border-color: ${colors.danger};
            background-color: ${desaturate(lighten(colors.danger, 0.85), 0.4)};
            outline: 0;
        }
    `}

    label {
        font-size: 1rem;
        pointer-events: none;
        text-align: initial;
        padding: 0 ${labelPadding}rem;
        top: ${paddingTop}rem;
        left: ${paddingLeft}rem;
    }

    textarea:disabled,
    input:disabled {
        & ~ ${BorderStart},
        & ~ ${BorderLabel},
        & ~ ${BorderEnd} {
           background-color: ${colors.muted};
        }
    }

    textarea:focus,
    textarea:active,
    input:focus,
    input:active {
        & ~ ${BorderStart},
        & ~ ${BorderLabel},
        & ~ ${BorderEnd} {
            border-color: ${colors.primary};
        }
    }

    textarea:placeholder-shown,
    textarea[data-not-empty],
    textarea:focus,
    input:placeholder-shown,
    input[data-not-empty],
    input:focus {
        & ~ ${BorderLabel} {
            width: auto;
        }

        & ~ label,
        & ~ * label {
            color: ${colors.darkGray};
            font-size: 0.8rem;
            top: -0.5rem;
        }

        & ~ * ${FakeLabel} {
            font-size: 0.8rem;
        }
    }
`;

const FloatingInput = styled.input`
    border: 1px solid transparent;
    position: absolute;

    ${({ error }) => baseInput({ error })}


    background-color: transparent;
    /* padding-left: ${labelPadding + 0.7}rem; */
    margin: 0.625rem 0;
    padding-bottom: 0;
    padding-top: 0;
`;

const StyledInput = ({ children, error = false, height, targetRef, label, ...rest }) => {
    if (!children) {
        return <Input error={error} {...rest} ref={targetRef} />;
    }

    return (
        <div style={{ height: `${height || `${inputHeight}rem`}`}}>
            <BorderWrapper error={error}>
                <FloatingInput {...rest} ref={targetRef} />
                <BorderStart />
                <BorderLabel>
                    <FakeLabel>{label}</FakeLabel>
                    {children}
                </BorderLabel>
                <BorderEnd />
            </BorderWrapper>
        </div>
    );
};

export default StyledInput;
