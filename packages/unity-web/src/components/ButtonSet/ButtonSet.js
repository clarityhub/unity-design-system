import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { bool } from 'prop-types';
import { EmotionButton } from '../Button';

const ButtonSet = styled.div`
    ${({ spread }) => spread && css`
        display: flex;
        align-items: center;
        justify-content: flex-end;

        ${EmotionButton} {
            &:not(:first-of-type) {
                margin-left: auto!important;
            }
        }
    `}

    button + button,
    a + a,
    a + button,
    button + a {
        margin-left: 0.4rem;
    }
`;

/**
 * Hack for docz and react-docgen
 */
const ButtonSetPropTypes = () => <div />;
ButtonSetPropTypes.propTypes = {
	spread: bool,
};
ButtonSet.propTypes = ButtonSetPropTypes.propTypes;
export { ButtonSetPropTypes };

export default ButtonSet;

