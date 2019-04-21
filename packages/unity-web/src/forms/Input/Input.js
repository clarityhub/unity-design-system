import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { variants } from '@clarityhub/unity-core/lib/typography';
import borders from '@clarityhub/unity-core/lib/borders';
import colors from '@clarityhub/unity-core/lib/colors';
import { lighten, desaturate } from '@clarityhub/unity-core/lib/utilities/color';

const labelPadding = 0.3;
const inputHeight = 2.670;
const paddingLeft = 0.79;
const paddingTop = 0.65;

const baseInput = ({ error }) => css`
    box-sizing: border-box;
    display: inline-block;
    font-size: 1rem;
    line-height: 1.2rem;
    margin-bottom: 0;
    min-width: 250px;
    min-height: ${inputHeight}rem;
    padding: 0.625rem 1rem;
    transition: all 0.2s ease-in;
    transition-property: border-bottom-width, border-bottom-color, color, margin-bottom;
    width: 100%;
    resize: vertical;

    ${variants.text.string}

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
        color: ${colors.gray.default};
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
        background-color: ${desaturate(lighten(colors.danger.default, 0.85), 0.4)};
        outline: 0;
    `}
`;

const Input = styled.input`
    border: 1px solid ${colors.gray.default};
    border-radius: ${borders.borderRadius.rem}rem;

    ${({ error }) => baseInput({ error })}

    ${({ variant }) => {
		switch (variant) {
		case 'white':
			return `
                    background-color: ${colors.white.default};
                    border: 1px solid ${colors.white.default};
                `;
		default:
			return `
                `;
		}
	}} 

    &:disabled {
        background-color: ${colors.muted.default};
    }

    &:active,
    &:focus {
        border-color: ${colors.primary.default};
    }

    ${({ error }) => error && css`
        border-color: ${colors.danger.default};
    `}
`;

const BorderStart = styled.div`
    border-bottom: 1px solid ${colors.gray.default};
    border-top: 1px solid ${colors.gray.default};
    border-left: 1px solid ${colors.gray.default};
    border-radius: ${borders.borderRadius.rem}rem 0 0 ${borders.borderRadius.rem}rem;

    width: ${paddingLeft}rem;
    min-height: 100%;
`;

const BorderLabel = styled.div`
    border-bottom: 1px solid ${colors.gray.default};
    
    min-height: 100%;
    width: 0;

    ${({ variant }) => {
		switch (variant) {
		case 'white':
			return `
                    border-top: 1px solid ${colors.white.default};
                    border-bottom: 1px solid ${colors.white.default};
                `;
		default:
			return `
                    border-top: 1px solid transparent !important;
                `;
		}
	}} 

    > span {
      color: transparent;
    }
`;
const BorderEnd = styled.div`
    border-bottom: 1px solid ${colors.gray.default};
    border-top: 1px solid ${colors.gray.default};
    border-right: 1px solid ${colors.gray.default};
    border-radius: 0 ${borders.borderRadius.rem}rem ${borders.borderRadius.rem}rem 0;

    flex: 1;
    min-height: 100%;
`;

const FakeLabel = styled.span`
    ${variants.text.string}

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
            border-color: ${colors.danger.default};
            background-color: ${desaturate(lighten(colors.danger.default, 0.85), 0.4)};
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
           background-color: ${colors.muted.default};
        }
    }

    textarea:focus,
    textarea:active,
    input:focus,
    input:active {
        & ~ ${BorderStart},
        & ~ ${BorderLabel},
        & ~ ${BorderEnd} {
            border-color: ${colors.primary.default};
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
            color: ${colors.darkGray.default};
            font-size: 0.8rem;
            top: -0.5rem;
        }

        & ~ * ${FakeLabel} {
            font-size: 0.8rem;
        }
    }

    ${({ variant }) => {
		switch (variant) {
		case 'white':
			return `
                    ${BorderStart},
                    ${BorderLabel},
                    ${BorderEnd} {
                        border-color: ${colors.white.default};
                        background-color: ${colors.white.default};
                        outline: 0;
                    }

                    textarea:placeholder-shown,
                    textarea[data-not-empty],
                    textarea:focus,
                    input:placeholder-shown,
                    input[data-not-empty],
                    input:focus {
                        & ~ label,
                        & ~ * label {
                            color: ${colors.white.default};
                            top: -1.2rem;
                            left: 0.5rem;
                        }
                    }
                `;
		default:
			return `
                `;
		}
	}} 
`;

const FloatingInput = styled.input`
    border: 1px solid transparent;
    position: absolute;

    ${({ error }) => baseInput({ error })}

    ${({ variant }) => {
		switch (variant) {
		case 'white':
			return `
                background-color: ${colors.white.default};
            `;
		default:
			return ``;
		}
	}}

    background-color: transparent;
    padding-bottom: 0;
    padding-top: 0;
    height: calc(100% - 1.25rem);

    ${({ inputType }) => {
		if (inputType === 'textarea') {
			return css`
                margin: 0.625rem 0;
            `;
		} else {
			return css`
                margin: 0;
            `;
		}
	}}
`;

const StyledInput = ({
	children, 
	error = false,
	height,
	targetRef,
	label,
	inputType = 'input',
	variant,
	...rest
}) => {
	if (!children) {
		return <Input variant={variant} error={error} {...rest} ref={targetRef} />;
	}

	return (
		<div style={{ height: `${height || `${inputHeight}rem`}`}}>
			<BorderWrapper error={error} variant={variant}>
				<FloatingInput variant={variant} inputType={inputType} {...rest} ref={targetRef} />
				<BorderStart />
				<BorderLabel variant={variant}>
					<FakeLabel>{label}</FakeLabel>
					{children}
				</BorderLabel>
				<BorderEnd />
			</BorderWrapper>
		</div>
	);
};

export default StyledInput;
