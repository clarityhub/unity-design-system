import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { oneOf } from 'prop-types';

import colors from '../../theme/colors';
import { opacify } from '../../utilities/color';
import { variants } from '../../theme/fonts';

const Badge = styled.div`
    overflow: visible;
    text-transform: none;
    display: inline-block;

    ${variants.button}

    font-weight: 600;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    border: 0 solid transparent;
    padding: 0.1rem 0.4rem;
    font-size: 0.8rem;
    line-height: 1.2;
    border-radius: 2rem;
    position: relative;
    text-transform: uppercase;

    ${({ type }) => {
        switch (type) {
            case 'primary':
                return css`
                    color: ${colors.primary};
                    background-color: ${opacify(colors.primary, 0.3)};
                `;
            case 'success':
                return css`
                    color: ${colors.success};
                    background-color: ${opacify(colors.success, 0.3)};
                `;
            case 'danger':
                return css`
                    color: ${colors.danger};
                    background-color: ${opacify(colors.danger, 0.3)};
                `;
            case 'notification':
                return css`
                    color: ${colors.white};
                    background-color: ${colors.notification};
                    border-color: ${colors.notification};
                `;
            case 'default':
            default:
                return css`
                    color: ${colors.black};
                    background-color: ${colors.muted};
                    border-color: ${colors.muted};
                `;
        }
    }}
`;

/**
 * Hack for docz and react-docgen
 */
const BadgePropTypes = () => <div />;
BadgePropTypes.propTypes = {
    type: oneOf(['primary', 'success', 'danger', 'notification', 'default']),
};
Badge.propTypes = BadgePropTypes;
export { BadgePropTypes };

export default Badge;
