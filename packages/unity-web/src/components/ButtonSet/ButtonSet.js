import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { bool } from 'prop-types';
import { EmotionButton } from '../Button';
import Space from '../../scaffolding/Space';

const ButtonSet = styled(Space)`
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

