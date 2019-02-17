/** @jsx jsx */

import { bool, node, oneOf, string } from 'prop-types';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/core';

import { types, variants, colorStyles } from '../../theme/fonts';

const noPaddingCss = `
    padding: 0;
`;

const noMarginCss = `
    margin-bottom: 0;
    margin-top: 0;

    & + & {
        margin-bottom: 0;
        margin-top: 0;
    }
`;

const Typography = ({
    type = 'text',
    variant,
    color = 'black',
    children,
    component: suggestedComponent = 'p',
    noMargin = false,
    noPadding = false,
    css: userCss,
    ...rest,
}) => {
    let style = `
        ${Boolean(type) ? types[type] : ''}
        ${Boolean(variant) ? variants[variant] : ''}
        ${Boolean(color) ? colorStyles[color] : ''}
        ${Boolean(noPadding) ? noPaddingCss : ''}
        ${Boolean(noMargin) ? noMarginCss : ''}
        ${Boolean(userCss) ? userCss : ''}
    `;

    if (typeof suggestedComponent === 'string') {
        let component = suggestedComponent;
        if (suggestedComponent === 'p' && ['h1', 'h2', 'h3', 'h4', 'h5'].indexOf(type) !== -1) {
            component = type;
        }

        const Comp = styled[component](css`${style}`);
        return <Comp {...rest}>{children}</Comp>
    } else {
        const Comp = suggestedComponent;
        return <Comp {...rest} css={css`${style}`}>{children}</Comp>
    }
};

Typography.propTypes = {
    type: oneOf(Object.keys(types)),
    variant: oneOf(Object.keys(variants)),
    color: oneOf(Object.keys(colorStyles)),
    children: node,
    component: node,
    noMargin: bool,
    noPadding: bool,
    css: string,
};

export default Typography;
