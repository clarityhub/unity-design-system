import React from 'react';
import cx from 'classnames';
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
        cursor: pointer;
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
            box-shadow: 0 0 0 .2rem ${colors.focused.default};
        }

        &:disabled,
        &.disabled {
            cursor: not-allowed;
            pointer-events: none;
        }

        &:not(:disabled):not(.disabled) {
            cursor: pointer;
        }

        svg {
            height: 1rem;
            width: 1rem;
        }

        --text: ${colors.primary.default};
        --text-active: ${colors.black.default};
        --bg: transparent;
        --bg-active: transparent;
        --bg-disabled: transparent;

        &.-default,
        &.-primary,
        &.-danger,
        &.-white {
            color: var(--text);
            background-color: var(--bg);
            border-color: var(--bg);

            &.-outline {
                border-color: var(--outline, var(--bg));
                color: var(--outline-text, var(--bg));
            }

            &.-text {
                color: var(--text-text, var(--bg));
            }

            &:hover,
            &.active {
                background-color: var(--bg-active);
                border-color: var(--bg-active);
                color: var(--text-active);

                &.-outline {
                    background-color: var(--bg) !important;
                    border: 1px solid var(--bg);
                    color: var(--outline-text-active, var(--text));
                }

                &.-text {
                    color: var(--text-text-active, var(--bg-active));
                }
            }

            &:disabled,
            &.disabled {
                background-color: var(--bg-disabled);
                border-color: var(--bg-disabled);
                color: var(--text);

                &.-outline {
                    border: 1px solid var(--outline-disabled, var(--outline-text-disabled, var(--bg-disabled)));
                    color: var(--outline-text-disabled, var(--bg-disabled));
                }

                &.-text {
                    color: var(--text-text-disabled, var(--bg-disabled));
                }
            }
        }

        &.-primary {
            --text: ${colors.white.default};
            --text-active: ${colors.white.default};
            --outline-disabled: ${colors.gray.default};
            --bg: ${colors.primary.default};
            --bg-active: ${desaturate(darken(colors.primary.default))};
            --bg-disabled: ${desaturate(lighten(colors.primary.default))};
        }

        &.-danger {
            --text: ${colors.white.default};
            --text-active: ${colors.white.default};
            --outline-disabled: ${colors.gray.default};
            --bg: ${colors.danger.default};
            --bg-active: ${desaturate(darken(colors.danger.default))};
            --bg-disabled: ${lighten(colors.danger.default, 0.3)};
        }

        &.-default {
            --text: ${colors.black.default};
            --text-active: ${colors.black.default};
            --outline: ${colors.black.default};
            --outline-text: ${colors.black.default};
            --outline-text-active: ${colors.black.default};
            --outline-text-disabled: ${colors.gray.default};
            --text-text: ${colors.black.default};
            --text-text-active: ${colors.black.default};
            --text-text-disabled: ${colors.gray.default};
            --bg: ${colors.white.default};
            --bg-active: ${colors.dove.default};
            --bg-disabled: ${colors.muted.default};
        }

        &.-white {
            --text: ${colors.primary.default};
            --text-active: ${colors.black.default};
            --outline: ${colors.white.default};
            --outline-text: ${colors.white.default};
            --outline-text-active: ${colors.primary.default};
            --outline-text-disabled: ${colors.gray.default};
            --text-text: ${colors.white.default};
            --text-text-active: ${colors.white.default};
            --text-text-disabled: ${colors.gray.default};
            --bg: ${colors.white.default};
            --bg-active: ${colors.dove.default};
            --bg-disabled: ${colors.muted.default};
        }

        &.-text {
            background-color: transparent !important;
            border: 1px solid transparent;
            box-shadow: none;

            &:hover,
            &.active {
                border-color: transparent;
            }

            &.disabled,
            &:disabled {
                border: 1px solid transparent;
            }
        }

        &.-outline {
            background-color: transparent !important;
            border: 1px solid inherit;
            box-shadow: none;
        }

        &.disabled,
        &:disabled {
            cursor: not-allowed;
        }
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
        cursor: wait !important;

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

const ButtonWrapper = ({
	className,
	type,
	outline,
	text,
	size,
	icon,
	children, 
	component,
	loading,
	buttonType = 'button',
	...rest
}) => {
	let Component = Button;

	if (component) {
		Component = Button.withComponent(component);
	}

	return (
		<Component
			className={cx(className, {
				[`-${type}`]: type,
				'-outline': outline,
				'-text': text,
			})}
			outline={outline}
			text={text}
			size={size}
			loading={loading}
			type={buttonType}
			{...rest}
		>
			{
				icon && (
					<IconWrapper size={size}>{renderIcon(icon)}</IconWrapper>
				)
			}
			{
				loading && (
					<LoadingWrapper
						type={type}
						outline={outline}
						text={text}
						size={size}
						{...rest}
					>
						<Loading />
					</LoadingWrapper>
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

ButtonWrapper.defaultProps = {
	type: 'default',
};

export { Button as EmotionButton };
export default ButtonWrapper;
