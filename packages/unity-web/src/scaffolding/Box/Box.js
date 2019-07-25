import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { any, oneOf, oneOfType, shape, string, func, node } from 'prop-types';

const sizeMapper = (size) => {
	switch (size) {
	case 'xsmall':
		return 0.5;
	case 'small':
		return 1;
	case 'medium':
		return 2;
	case 'large':
		return 3;
	case 'xlarge':
		return 4;
	default:
		return size;
	}
};

const remMapper = (size) => {
	return `${sizeMapper(size)}rem`;
};

const rectMapper = (top, right, bottom, left) => {
	return `${top ? remMapper(top) : 0} ${right ? remMapper(right) : 0} ${bottom ? remMapper(bottom) : 0} ${left ? remMapper(left) : 0}`;
};

const StyledBox = styled.div(
	css`
		display: flex;
	`,
	({ gap, direction }) => {
		if (gap) {
			if (direction === 'column') {
				return css`
					& > *:not(:first-child) {
						margin-top: ${remMapper(gap)};
					}
				`;
			} else {
				return css`
					& > *:not(:first-child) {
						margin-left: ${remMapper(gap)};
					}
				`;
			}
		}
	},
	({ flex }) => flex && css`
		flex: ${flex || 1};
	`,
	({ direction }) => css`
		flex-direction: ${direction || 'column'};
	`,
	({ pull }) => pull && css`
		float: ${pull ? pull : 'inherit'};
	`,
	({ padding }) => {
		const def = typeof padding === 'string' ? padding : 0;
		return padding && css`
			padding: ${rectMapper(padding.top || def, padding.right || def, padding.bottom || def, padding.left || def)};
		`;
	},
	({ margin }) => {
		const def = typeof margin === 'string' ? margin : 0;
		return margin && css`
			margin: ${rectMapper(margin.top || def, margin.right || def, margin.bottom || def, margin.left || def)};
		`;
	}
);

const Box = ({
	as,
	a11yTitle,
	direction,
	gap,
	flex,
	margin,
	padding,
	pull,
	...props
}) => {
	return (
		<StyledBox
			as={as}
			aria-label={a11yTitle}
			direction={direction}
			flex={flex}
			gap={gap}
			pull={pull}
			margin={margin}
			padding={padding}
			{...props}
		/>
	);
};

const sizesProp = oneOf([
	'xsmall',
	'small',
	'large',
	'xlarge',
	'medium',
]);

const genericSizesProp = oneOfType([
	sizesProp,
	shape({
		top: sizesProp,
		bottom: sizesProp,
		left: sizesProp,
		right: sizesProp,
	}),
]);

/**
 * Hack for docz and react-docgen
 */
const BoxProps = () => <div />;
BoxProps.propTypes = {
	a11yTitle: string,
	as: oneOfType([string, func, node]),
	direction: oneOf(['column', 'row']),
	flex: any,
	gap: sizesProp,
	margin: genericSizesProp,
	padding: genericSizesProp,
	pull: oneOf(['left', 'right']),
};

Box.propTypes = BoxProps.propTypes;
Box.defaultProps = BoxProps.defaultProps;
export { BoxProps };

export default Box;

