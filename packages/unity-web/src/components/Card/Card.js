import styled from '@emotion/styled';
import { css } from '@emotion/core';
import borders from '@clarityhub/unity-core/lib/borders';
import colors from '@clarityhub/unity-core/lib/colors';
import { bool, oneOf } from 'prop-types';

import { CardHeaderWrapper } from './CardHeader';
import CardBody from './CardBody';

const Card = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-clip: border-box;
    border-radius: ${borders.borderRadius.rem}rem;
    box-shadow: ${colors.shadow.default};

    ${({ type }) => {
		switch (type) {
		case 'notification':
			return css`
                background: ${colors.gradient.default};

                ${CardBody} {
                    padding-top: 2rem;
                    padding-bottom: 2rem;
                }
            `;
		default:
			return css`
                background-color: ${colors.white.default};
            `;
		}
	}}

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

    ${({ center }) => center && css`
        text-align: center;
    `}
`;

/**
 * Hack for docz and react-docgen
 */
const CardPropTypes = () => <div />;
CardPropTypes.propTypes = {
	center: bool,
	type: oneOf(['notification']),
};
Card.propTypes = CardPropTypes.propTypes;
export { CardPropTypes };

export default Card;
