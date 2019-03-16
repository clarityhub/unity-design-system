/** @jsx jsx */

import { bool, node, oneOf, string } from 'prop-types';
import styled from '@emotion/styled';
import { jsx } from '@emotion/core';
import colors from '@clarityhub/unity-core/lib/colors';
import { variants } from '@clarityhub/unity-core/lib/typography';

import { types } from '../../theme/fonts';

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
	color = 'dark',
	children,
	component: suggestedComponent = 'p',
	noMargin = false,
	noPadding = false,
	inline = false,
	css: userCss,
	center = false,
	...rest
}) => {
	let styles = [
		Boolean(type) ? types[type]: {},
		Boolean(variant) ? variants[variant]: {},
		Boolean(color) ? { color: colors[color].default }: {},
		Boolean(noPadding) ? noPaddingCss: {},
		Boolean(noMargin) ? noMarginCss: {},
		Boolean(userCss) ? userCss: {},
		Boolean(inline) ? {
			display: 'inline-block',
		} : {},
		Boolean(center) ? {
			textAlign: 'center',
		} : {},
	];

	if (typeof suggestedComponent === 'string') {
		let component = suggestedComponent;
		if (suggestedComponent === 'p' && ['h1', 'h2', 'h3', 'h4', 'h5'].indexOf(type) !== -1) {
			component = type;
		}

		const Comp = styled[component](styles);
		return <Comp {...rest}>{children}</Comp>;
	} else {
		const Comp = suggestedComponent;
		return <Comp {...rest} css={styles}>{children}</Comp>;
	}
};

Typography.propTypes = {
	center: bool,
	children: node,
	color: oneOf(Object.keys(colors)),
	component: node,
	css: string,
	inline: bool,
	noMargin: bool,
	noPadding: bool,
	type: oneOf(Object.keys(types)),
	variant: oneOf(Object.keys(variants)),
};

export default Typography;
