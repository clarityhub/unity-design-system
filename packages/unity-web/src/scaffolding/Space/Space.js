import React from 'react';
import { css } from '@emotion/core';
import isPropValid from '@emotion/is-prop-valid';

import styled from '@emotion/styled';

import { oneOf } from 'prop-types';

import spacing from '@clarityhub/unity-core/lib/spacing';

const remMapper = (size) => {
	return `${spacing[size]}rem`;
};

const Space = styled(`div`, {
	shouldForwardProp: prop => isPropValid(prop) && ![
		'direction',
		'size',
	].includes(prop),
})(
	({ direction = 'horizontal', size = 'xsmall' }) => {
		const mappedSize = remMapper(size);
        
		if (direction === 'horizontal') {
			return css`
                > * + * {
                    margin-left: ${mappedSize}
                }
            `;
		} else {
			return css`
                > * + * {
                    margin-top: ${mappedSize}
                }
            `;
		}
	},
);

/**
 * Hack for docz and react-docgen
 */
const SpaceProps = () => <div />;
SpaceProps.propTypes = {
	direction: oneOf(['vertical', 'horizontal']),
	gap: oneOf([
		'xsmall',
		'small',
		'large',
		'xlarge',
		'medium',
	]),
};

Space.propTypes = SpaceProps.propTypes;
Space.defaultProps = SpaceProps.defaultProps;
export { SpaceProps };

export default Space;
