/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { string } from 'prop-types';

import breakpoints from '../../theme/breakpoints';
import Box from '../Box';
import { FLEX_MOBILE_GUTTER } from './config';

const FlexGridContainer = styled(Box)`
    box-sizing: border-box;
    margin: 0 auto;
    width: 100%;

    ${({ size }) => {
		switch(size) {
		case 'xsmall':
			return css`
                max-width: ${breakpoints.xsmallMaxWidth}px;

                @media (max-width: ${breakpoints.xsmallMaxWidth + (FLEX_MOBILE_GUTTER * 16)}px) {
                    padding: 0 ${FLEX_MOBILE_GUTTER}rem;
                    width: 100%;
                }
            `;
		case 'small':
			return css`
                max-width: ${breakpoints.smallMaxWidth}px;

                @media (max-width: ${breakpoints.smallMaxWidth + (FLEX_MOBILE_GUTTER * 16)}px) {
                    padding: 0 ${FLEX_MOBILE_GUTTER}rem;
                    width: 100%;
                }
            `;
		default:
			return css`
                max-width: ${breakpoints.maxWidth}px;

                @media (max-width: ${breakpoints.maxWidth + (FLEX_MOBILE_GUTTER * 16)}px) {
                    padding: 0 ${FLEX_MOBILE_GUTTER}rem;
                    width: 100%;
                }
            `;
		}
	}}
`;

/**
 * Hack for docz and react-docgen
 */
const FlexGridContainerProps = () => <div />;
FlexGridContainerProps.propTypes = {
	size: string,
};

FlexGridContainer.propTypes = FlexGridContainerProps.propTypes;
export { FlexGridContainerProps };

export default FlexGridContainer;