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

const Image = ({ alt, withSpacing, center, wrapperProps = {}, ...rest }) => (
	<ImageWrapper {...wrapperProps} withSpacing={withSpacing} center={center}>
		<img alt={alt} {...rest} />
	</ImageWrapper>
);

Image.propTypes = {
	alt: string.isRequired,
	center: bool,
	src: string.isRequired,
	withSpacing: bool,
	wrapperProps: object,
};

export default Image;
