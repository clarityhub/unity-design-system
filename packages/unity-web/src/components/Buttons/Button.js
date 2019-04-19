import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { bool, func, oneOf, oneOfType, node, string } from 'prop-types';
import { variants } from '@clarityhub/unity-core/lib/typography';
import borders from '@clarityhub/unity-core/lib/borders';
import colors from '@clarityhub/unity-core/lib/colors';
import { lighten, darken, desaturate } from '@clarityhub/unity-core/lib/utilities/color';

import Loading from '../svgs/Loading';

const Button = styled.button(
	css`
        overflow: visible;
        display: inline-block;

        ${variants.button.string}

        box-shadow: ${colors.shadow.default};
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        user-select: none;
        border: 1px solid transparent;
        padding: .5rem 1.25rem;
        font-size: 1rem;
        line-height: 1.5;
        border-radius: ${borders.borderRadius.rem}rem;
        position: relative;
        text-decoration: none;
        text-transform: uppercase;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

        &:focus,
        &:hover {
            text-decoration: none;
        }

        &:focus,
        &.focused {
            outline: 0;
            box-shadow: 0 0 0 .2rem ${colors.highlight.default};
        }

        &:disabled,
        &.disabled {
            cursor: not-allowed;
            pointer-events: none;
        }

        &:not(:disabled):not(.disabled) {
            cursor: pointer;
        }
    `,
	({ type, outline, text }) => {
		switch (type) {
		case 'primary':
			return css`
                    color: ${colors.white.default};
                    background-color: ${colors.primary.default};
                    border-color: ${colors.primary.default};

                    ${outline && `
                        background-color: transparent;
                        border: 1px solid inherit;
                        color: ${colors.primary.default};
                    `}

                    ${text && `
                        background-color: transparent;
                        border: 1px solid transparent;
                        color: ${colors.primary.default};
                    `}

                    &:hover,
                    &.active {
                        background-color: ${desaturate(darken(colors.primary.default))};
                        border-color: ${desaturate(darken(colors.primary.default))};

                        ${outline && `
                            background-color: ${colors.primary.default};
                            border: 1px solid ${colors.primary.default};
                            color: ${colors.white.default};
                        `}

                        ${text && `
                            background-color: transparent;
                            border: 1px solid transparent;
                            color: ${desaturate(darken(colors.primary.default))};
                        `}
                    }

                    &:disabled,
                    &.disabled {
                        background-color: ${desaturate(lighten(colors.primary.default))};
                        border-color: ${desaturate(lighten(colors.primary.default))};

                        ${outline && `
                            background-color: transparent;
                            border: 1px solid ${colors.primary.default};
                            color: ${desaturate(lighten(colors.primary.default))};
                        `}

                        ${text && `
                            background-color: transparent;
                            border: 1px solid transparent;
                            color: ${desaturate(lighten(colors.primary.default))};
                        `}
                    }
                `;
		case 'danger':
			return css`
                    color: ${colors.white.default};
                    background-color: ${colors.danger.default};
                    border-color: ${colors.danger.default};

                    ${outline && `
                        background-color: transparent;
                        border: 1px solid inherit;
                        color: ${colors.danger.default};
                    `}

                    ${text && `
                        background-color: transparent;
                        border: 1px solid transparent;
                        color: ${colors.danger.default};
                    `}

                    &:hover,
                    &.active {
                        background-color: ${desaturate(darken(colors.danger.default))};
                        border-color: ${desaturate(darken(colors.danger.default))};

                        ${outline && `
                            background-color: ${colors.danger.default};
                            border: 1px solid ${colors.danger.default};
                            color: ${colors.white.default};
                        `}

                        ${text && `
                            background-color: transparent;
                            border: 1px solid transparent;
                            color: ${desaturate(darken(colors.danger.default))};
                        `}
                    }

                    &:disabled,
                    &.disabled {
                        background-color: ${lighten(colors.danger.default, 0.3)};
                        border-color: ${lighten(colors.danger.default, 0.3)};

                        ${outline && `
                            background-color: transparent;
                            border: 1px solid ${colors.danger.default};
                            color: ${desaturate(lighten(colors.danger.default, 0.3))};
                        `}

                        ${text && `
                            background-color: transparent;
                            border: 1px solid transparent;
                            color: ${desaturate(lighten(colors.danger.default, 0.3))};
                        `}
                    }
                `;
		case 'white':
			return css`
                background-color: ${colors.white.default};
                border-color: transparent;
                color: ${colors.primary.default};

                ${outline && `
                    background-color: transparent;
                    border: 1px solid inherit;
                    color: ${colors.white.default};
                `}

                ${text && `
                    background-color: transparent;
                    border: 1px solid transparent;
                    color: ${colors.white.default};
                `}

                &:hover,
                &.active {
                    background-color: ${colors.dove.default};
                    border-color: transparent;
                    color: ${colors.dark.default};

                    ${outline && `
                        background-color: ${colors.dove.default};
                        border: 1px solid ${colors.dove.default};
                        color: ${colors.black.default};
                    `}

                    ${text && `
                        background-color: transparent;
                        border: 1px solid transparent;
                        color: ${colors.dove.default};
                    `}
                }

                &:disabled,
                &.disabled {
                    color: ${darken(colors.gray.default, 0.1)};
                    background-color: ${lighten(colors.muted.default, 0.01)};
                    border-color: transparent;

                    ${outline && `
                        background-color: transparent;
                        border: 1px solid ${colors.gray.default};
                        color: ${lighten(colors.gray.default, 0.01)};
                    `}

                    ${text && `
                        background-color: transparent;
                        border: 1px solid transparent;
                        color: ${desaturate(lighten(colors.black.default))};
                    `}
                }
            `;
		case 'default':
		default:
			return css`
                    background-color: rgba(255, 255, 255, 0);
                    border-color: transparent;
                    color: ${colors.primary.default};

                    ${outline && `
                        background-color: transparent;
                        border: 1px solid inherit;
                        color: ${colors.black.default};
                    `}

                    ${text && `
                        background-color: transparent;
                        border: 1px solid transparent;
                        color: ${colors.black.default};
                    `}

                    &:hover,
                    &.active {
                        background-color: ${colors.dove.default};
                        border-color: transparent;
                        color: ${colors.dark.default};

                        ${outline && `
                            background-color: ${colors.muted.default};
                            border: 1px solid ${colors.muted.default};
                            color: ${colors.black.default};
                        `}

                        ${text && `
                            background-color: transparent;
                            border: 1px solid transparent;
                            color: ${desaturate(lighten(colors.black.default, 0.5))};
                        `}
                    }

                    &:disabled,
                    &.disabled {
                        color: ${darken(colors.gray.default, 0.1)};
                        background-color: ${lighten(colors.muted.default, 0.01)};
                        border-color: transparent;

                        ${outline && `
                            background-color: transparent;
                            border: 1px solid ${colors.gray.default};
                            color: ${lighten(colors.gray.default, 0.01)};
                        `}

                        ${text && `
                            background-color: transparent;
                            border: 1px solid transparent;
                            color: ${desaturate(lighten(colors.black.default))};
                        `}
                    }
                `;
		}
	},

	({ outline }) => outline && css`
        background-color: transparent;
        border: 1px solid inherit;
        box-shadow: none;
    `,

	({ text }) => text && css`
        box-shadow: none;
    `,

	({ size }) => {
		switch (size) {
		case 'small':
			return css`
                    font-size: 0.9rem;
                    padding: .2rem 1rem;
                `;
		case 'large':
			return css`
                    font-size: 1.2rem;
                    padding: 0.8rem 1.4rem;
                `;
		case 'default':
		default:
			return '';
		}
	},

	({ block }) => block && css`
        display: block;
        width: 100%;
    `,

	({ loading }) => loading && css`
        color: transparent !important;

        &:hover {
            color: transparent !important;
        }
    `,
);

const IconWrapper = styled.span`
    font-size: inherit;
    margin-right: 0.3rem;
    vertical-align: middle;

    svg {
        height: 1rem;
        width: 1rem;

        ${({ size }) => {
		switch (size) {
		case 'small':
			return css`
                        height: 0.9rem;
                        width: 0.9rem;
                    `;
		case 'large':
			return css`
                        height: 1.2rem;
                        width: 1.2rem;
                    `;
		case 'default':
		default:
			return '';
		}
	}}
    }
`;

const LoadingWrapper = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
    align-content: center;
    justify-content: center;
    display: flex;

    svg {
        height: 1.4rem;
        width: 1.4rem;

        ${({ size }) => {
		switch (size) {
		case 'small':
			return css`
                            height: 1.2rem;
                            width: 1.2rem;
                        `;
		case 'large':
			return css`
                            height: 2.4rem;
                            width: 2.4rem;
                        `;
		case 'default':
		default:
			return '';
		}
	}}

        path {
            ${({ type, outline, text }) => {
		switch (type) {
		case 'primary':
			return css`
                            fill: ${colors.white.default};

                            ${outline && css`
                                fill: ${colors.primary.default};
                            `}

                            ${text && css`
                                fill: ${colors.primary.default};
                            `}

                            &:hover,
                            &.active {
                                ${outline && css`
                                    fill: ${colors.white.default};
                                `}

                                ${text && css`
                                    fill: ${desaturate(darken(colors.primary.default))};
                                `}
                            }

                            &:disabled,
                            &.disabled {
                                ${outline && css`
                                    fill: ${desaturate(lighten(colors.primary.default))};
                                `}

                                ${text && css`
                                    fill: ${desaturate(lighten(colors.primary.default))};
                                `}
                            }
                        `;
		case 'danger':
			return css`
                            fill: ${colors.white.default};

                            ${outline && css`
                                fill: ${colors.danger.default};
                            `}

                            ${text && css`
                                fill: ${colors.danger.default};
                            `}

                            &:hover,
                            &.active {
                                ${outline && css`
                                    fill: ${colors.white.default};
                                `}

                                ${text && css`
                                    fill: ${desaturate(darken(colors.danger.default))};
                                `}
                            }

                            &:disabled,
                            &.disabled {
                                ${outline && css`
                                    fill: ${desaturate(lighten(colors.danger.default, 0.3))};
                                `}

                                ${text && css`
                                    fill: ${desaturate(lighten(colors.danger.default, 0.3))};
                                `}
                            }
                        `;
		case 'default':
		default:
			return css`
                            fill: ${colors.black.default};

                            ${outline && css`
                                fill: ${colors.black.default};
                            `}

                            ${text && css`
                                fill: ${colors.black.default};
                            `}

                            &:hover,
                            &.active {
                                ${outline && css`
                                    fill: ${colors.black.default};
                                `}

                                ${text && css`
                                    fill: ${desaturate(darken(colors.black.default))};
                                `}
                            }

                            &:disabled,
                            &.disabled {
                                fill: ${darken(colors.gray.default, 0.1)};

                                ${outline && css`
                                    fill: ${lighten(colors.gray.default, 0.01)};
                                `}

                                ${text && css`
                                    fill: ${desaturate(lighten(colors.black.default))};
                                `}
                            }
                        `;
		}}
}
        }
    }
`;

const renderIcon = (Icon) => {
	if (typeof Icon === 'function') {
		return <Icon />;
	}

	return Icon;
};

const ButtonWrapper = ({ icon, children, component, size, loading, buttonType = 'button', ...rest }) => {
	let Component = Button;

	if (component) {
		Component = Button.withComponent(component);
	}

	return (
		<Component size={size} loading={loading} {...rest}>
			{
				icon && (
					<IconWrapper size={size}>{renderIcon(icon)}</IconWrapper>
				)
			}
			{
				loading && (
					<LoadingWrapper size={size} {...rest}><Loading /></LoadingWrapper>
				)
			}
			{children}
		</Component>
	);
};

ButtonWrapper.propTypes = {
	block: bool,
	buttonType: string,
	component: oneOfType([string, func]),
	icon: oneOfType([node, func]),
	loading: bool,
	outline: bool,
	size: oneOf(['small', 'default', 'large']),
	text: bool,
	type: oneOf(['default', 'white', 'primary', 'danger', 'success']),
};

export { Button as EmotionButton };
export default ButtonWrapper;
