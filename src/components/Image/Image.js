import React from 'react';
import { bool, object, string } from 'prop-types';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

const ImageWrapper = styled.div`
    img {
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
        max-width: 100%;
    }

    ${({ withSpacing }) => withSpacing && css`
        padding: 1rem;
    `}

    ${({ center }) => center && css`
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    `}
`;

const Image = ({ withSpacing, center, wrapperProps = {}, ...rest }) => (
    <ImageWrapper {...wrapperProps} withSpacing={withSpacing} center={center}>
        <img {...rest} />
    </ImageWrapper>
);

Image.propTypes = {
    center: bool,
    withSpacing: bool,
    src: string.isRequired,
    alt: string.isRequired,
    wrapperProps: object,
};

export default Image;
