import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { bool, func, oneOf, oneOfType, node } from 'prop-types';

import Loading from '../svgs/Loading';
import borders from '../../theme/borders';
import colors from '../../theme/colors';
import { variants } from '../../theme/fonts';
import { lighten, darken, desaturate } from '../../utilities/color';

const Button = styled.button`
    overflow: visible;
    text-transform: none;
    display: inline-block;

    ${variants.button}

    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem 1rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: ${borders.borderRadius};
    position: relative;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    -webkit-appearance: button;

    &:focus,
    &:hover {
        text-decoration: none;
    }

    &:focus,
    &.focused {
        outline: 0;
        box-shadow: 0 0 0 .2rem ${colors.highlight};
    }

    &:disabled,
    &.disabled {
        cursor: not-allowed;
        pointer-events: none;
    }

    &:not(:disabled):not(.disabled) {
        cursor: pointer;
    }

    ${({ type, outline, text }) => {
        switch (type) {
            case 'primary':
                return css`
                    color: ${colors.white};
                    background-color: ${colors.primary};
                    border-color: ${colors.primary};

                    ${outline && css`
                        background-color: transparent;
                        border: 1px solid inherit;
                        color: ${colors.primary};
                    `}

                    ${text && css`
                        background-color: transparent;
                        border: 1px solid transparent;
                        color: ${colors.primary};
                    `}

                    &:hover,
                    &.active {
                        background-color: ${desaturate(darken(colors.primary))};
                        border-color: ${desaturate(darken(colors.primary))};

                        ${outline && css`
                            background-color: ${colors.primary};
                            border: 1px solid ${colors.primary};
                            color: ${colors.white};
                        `}

                        ${text && css`
                            background-color: transparent;
                            border: 1px solid transparent;
                            color: ${desaturate(darken(colors.primary))};
                        `}
                    }

                    &:disabled,
                    &.disabled {
                        background-color: ${desaturate(lighten(colors.primary))};
                        border-color: ${desaturate(lighten(colors.primary))};

                        ${outline && css`
                            background-color: transparent;
                            border: 1px solid ${colors.primary};
                            color: ${desaturate(lighten(colors.primary))};
                        `}

                        ${text && css`
                            background-color: transparent;
                            border: 1px solid transparent;
                            color: ${desaturate(lighten(colors.primary))};
                        `}
                    }
                `;
            // case 'success':
            //     return css`
            //         color: ${colors.white};
            //         background-color: ${colors.success};
            //         border-color: ${colors.success};

            //         ${outline && css`
            //             background-color: transparent;
            //             border: 1px solid inherit;
            //             color: ${colors.success};
            //         `}

            //         ${text && css`
            //             background-color: transparent;
            //             border: 1px solid transparent;
            //             color: ${colors.success};
            //         `}

            //         &:hover,
            //         &.active {
            //             background-color: ${desaturate(darken(colors.success))};
            //             border-color: ${desaturate(darken(colors.success))};

            //             ${outline && css`
            //                 background-color: ${colors.success};
            //                 border: 1px solid ${colors.success};
            //                 color: ${colors.white};
            //             `}

            //             ${text && css`
            //                 background-color: transparent;
            //                 border: 1px solid transparent;
            //                 color: ${desaturate(darken(colors.success, 0.3))};
            //             `}
            //         }

            //         &:disabled,
            //         &.disabled {
            //             background-color: ${desaturate(lighten(colors.success, 0.3))};
            //             border-color: ${desaturate(lighten(colors.success, 0.3))};

            //             ${outline && css`
            //                 background-color: transparent;
            //                 border: 1px solid ${colors.success};
            //                 color: ${desaturate(lighten(colors.success, 0.3))};
            //             `}

            //             ${text && css`
            //                 background-color: transparent;
            //                 border: 1px solid transparent;
            //                 color: ${desaturate(lighten(colors.success, 0.3))};
            //             `}
            //         }
            //     `;
            case 'danger':
                return css`
                    color: ${colors.white};
                    background-color: ${colors.danger};
                    border-color: ${colors.danger};

                    ${outline && css`
                        background-color: transparent;
                        border: 1px solid inherit;
                        color: ${colors.danger};
                    `}

                    ${text && css`
                        background-color: transparent;
                        border: 1px solid transparent;
                        color: ${colors.danger};
                    `}

                    &:hover,
                    &.active {
                        background-color: ${desaturate(darken(colors.danger))};
                        border-color: ${desaturate(darken(colors.danger))};

                        ${outline && css`
                            background-color: ${colors.danger};
                            border: 1px solid ${colors.danger};
                            color: ${colors.white};
                        `}

                        ${text && css`
                            background-color: transparent;
                            border: 1px solid transparent;
                            color: ${desaturate(darken(colors.danger))};
                        `}
                    }

                    &:disabled,
                    &.disabled {
                        background-color: ${lighten(colors.danger, 0.3)};
                        border-color: ${lighten(colors.danger, 0.3)};

                        ${outline && css`
                            background-color: transparent;
                            border: 1px solid ${colors.danger};
                            color: ${desaturate(lighten(colors.danger, 0.3))};
                        `}

                        ${text && css`
                            background-color: transparent;
                            border: 1px solid transparent;
                            color: ${desaturate(lighten(colors.danger, 0.3))};
                        `}
                    }
                `;
            case 'default':
            default:
                return css`
                    color: ${colors.black};
                    background-color: ${colors.muted};
                    border-color: ${colors.gray};

                    ${outline && css`
                        background-color: transparent;
                        border: 1px solid inherit;
                        color: ${colors.black};
                    `}

                    ${text && css`
                        background-color: transparent;
                        border: 1px solid transparent;
                        color: ${colors.black};
                    `}

                    &:hover,
                    &.active {
                        background-color: ${desaturate(darken(colors.muted))};
                        border-color: ${colors.gray};

                        ${outline && css`
                            background-color: ${colors.muted};
                            border: 1px solid ${colors.muted};
                            color: ${colors.black};
                        `}

                        ${text && css`
                            background-color: transparent;
                            border: 1px solid transparent;
                            color: ${desaturate(darken(colors.black))};
                        `}
                    }

                    &:disabled,
                    &.disabled {
                        color: ${darken(colors.gray, 0.1)};
                        background-color: ${lighten(colors.muted, 0.01)};
                        border-color: ${colors.gray};

                        ${outline && css`
                            background-color: transparent;
                            border: 1px solid ${colors.gray};
                            color: ${lighten(colors.gray, 0.01)};
                        `}

                        ${text && css`
                            background-color: transparent;
                            border: 1px solid transparent;
                            color: ${desaturate(lighten(colors.black))};
                        `}
                    }
                `;
        }
    }}

    ${({ outline }) => outline && css`
        background-color: transparent;
        border: 1px solid inherit;
    `}

    ${({ size }) => {
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
    }}

    ${({ block }) => block && css`
        display: block;
        width: 100%;
    `}

    ${({ loading }) => loading && css`
        color: transparent !important;

        &:hover {
            color: transparent !important;
        }
    `}
`;

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
                            fill: ${colors.white};

                            ${outline && css`
                                fill: ${colors.primary};
                            `}

                            ${text && css`
                                fill: ${colors.primary};
                            `}

                            &:hover,
                            &.active {
                                ${outline && css`
                                    fill: ${colors.white};
                                `}

                                ${text && css`
                                    fill: ${desaturate(darken(colors.primary))};
                                `}
                            }

                            &:disabled,
                            &.disabled {
                                ${outline && css`
                                    fill: ${desaturate(lighten(colors.primary))};
                                `}

                                ${text && css`
                                    fill: ${desaturate(lighten(colors.primary))};
                                `}
                            }
                        `;
                    case 'danger':
                        return css`
                            fill: ${colors.white};

                            ${outline && css`
                                fill: ${colors.danger};
                            `}

                            ${text && css`
                                fill: ${colors.danger};
                            `}

                            &:hover,
                            &.active {
                                ${outline && css`
                                    fill: ${colors.white};
                                `}

                                ${text && css`
                                    fill: ${desaturate(darken(colors.danger))};
                                `}
                            }

                            &:disabled,
                            &.disabled {
                                ${outline && css`
                                    fill: ${desaturate(lighten(colors.danger, 0.3))};
                                `}

                                ${text && css`
                                    fill: ${desaturate(lighten(colors.danger, 0.3))};
                                `}
                            }
                        `;
                    case 'default':
                    default:
                        return css`
                            fill: ${colors.black};

                            ${outline && css`
                                fill: ${colors.black};
                            `}

                            ${text && css`
                                fill: ${colors.black};
                            `}

                            &:hover,
                            &.active {
                                ${outline && css`
                                    fill: ${colors.black};
                                `}

                                ${text && css`
                                    fill: ${desaturate(darken(colors.black))};
                                `}
                            }

                            &:disabled,
                            &.disabled {
                                fill: ${darken(colors.gray, 0.1)};

                                ${outline && css`
                                    fill: ${lighten(colors.gray, 0.01)};
                                `}

                                ${text && css`
                                    fill: ${desaturate(lighten(colors.black))};
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
}

const ButtonWrapper = ({ icon, children, size, loading, ...rest }) => (
    <Button size={size} loading={loading} {...rest}>
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
    </Button>
);

ButtonWrapper.propTypes = {
    block: bool,
    icon: oneOfType([node, func]),
    loading: bool,
    outline: bool,
    text: bool,
    size: oneOf(['small', 'default', 'large']),
    type: oneOf(['default', 'primary', 'danger', 'success']),
};

export { Button as EmotionButton };
export default ButtonWrapper;
