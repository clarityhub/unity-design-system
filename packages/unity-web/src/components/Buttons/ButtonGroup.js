import React from 'react';
import styled from '@emotion/styled';
import { bool } from 'prop-types';
import colors from '@clarityhub/unity-core/lib/colors';

import Button, { EmotionButton } from './Button';

const ButtonGroup = styled.div`
    box-shadow: ${colors.shadow.default};
    display: inline-block;

    ${EmotionButton} {
        box-shadow: none;
    }

    ${EmotionButton} + ${EmotionButton} {
        border-left-width: 0;
        border-left: 1px solid ${colors.muted.default};
    }
    ${EmotionButton}:not(:last-child):not(:first-of-type) {
        border-radius: 0;
    }
    ${EmotionButton}:first-of-type {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    ${EmotionButton}:last-child {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`;

const ButtonGroupItem = ({ selected, ...rest }) => (
	<Button type={selected ? 'primary' : 'default'} {...rest} />
);

ButtonGroupItem.propTypes = {
	selected: bool,
};

export { ButtonGroup, ButtonGroupItem };