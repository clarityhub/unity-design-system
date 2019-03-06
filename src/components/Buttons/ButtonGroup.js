import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { bool } from 'prop-types';

import Button, { EmotionButton } from './Button';

const ButtonGroup = styled.div`
    ${EmotionButton} + ${EmotionButton} {
        border-left-width: 0;
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