import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import { css } from '@emotion/core';
import borders from '@clarityhub/unity-core/lib/borders';
import colors from '@clarityhub/unity-core/lib/colors';
import { bool, oneOf } from 'prop-types';

import { CardHeaderWrapper } from './CardHeader';
import CardBody from './CardBody';

const Card = styled('div', {
	shouldForwardProp: prop => isPropValid(prop) && !['type'].includes(prop),
})(
	css`
        position: relative;
        display: flex;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-clip: border-box;
        border-radius: ${borders.borderRadius.rem}rem;
    `,
	({ flat }) => !flat ? css`
        box-shadow: ${colors.shadow.default};
    ` : css`
        box-shadow: 0 0 0 1px rgba(0,0,0,0);
    `,
	({ type }) => {
		switch (type) {
		case 'notification':
			return css`
                background: ${colors.gradient.default};

                ${CardBody} {
                    padding-top: 2rem;
                    padding-bottom: 2rem;
                }
            `;
		case 'highlight':
			return css`
                background: ${colors.highlight.default};
            `;
		case 'callout':
			return css`
                background: #F9FAFC;
                border: 1px solid ${colors.primary.default};
            `;
		default:
			return css`
                background-color: ${colors.white.default};
            `;
		}
	},
	css`
        > :not(${CardHeaderWrapper}) {
            h3 {
                margin: 0;
                padding: 0;
            }

            h4 {
                margin-top: 0.6rem;
            }

            p:only-child {
                margin: 0;
            }
        }
    `,
	({ center }) => center && css`
        text-align: center;
    `,
	({ hoverable }) => hoverable && css`
        transition: box-shadow 0.2s ease-in-out;

        &:hover {
            box-shadow: 0 0 0 1px rgba(50,50,93,.1),
                0 7px 14px 0 rgba(50,50,93,.1),
                0 3px 6px 0 rgba(0,0,0,.07)
        }
    `,
);

/**
 * Hack for docz and react-docgen
 */
const CardPropTypes = () => <div />;
CardPropTypes.propTypes = {
	center: bool,
	flat: bool,
	hoverable: bool,
	type: oneOf(['notification', 'highlight', 'callout']),
};
CardPropTypes.defaultProps = {
	center: false,
	hoverable: false,
	flat: false,
};
Card.propTypes = CardPropTypes.propTypes;
export { CardPropTypes };

export default Card;
