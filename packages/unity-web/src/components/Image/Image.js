import React from 'react';
import { bool, object, string } from 'prop-types';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Img } from 'react-image';

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

const Image = ({ alt, withSpacing, center, wrapperProps = {}, src, loaderUrl, fallbackUrl, ...rest }) => (
	<ImageWrapper {...wrapperProps} withSpacing={withSpacing} center={center}>
		<Img
			src={[
				src,
				fallbackUrl,
			].filter(Boolean)}
			loader={loaderUrl && <img alt={alt} src={loaderUrl} />}
			unloader={fallbackUrl && <img alt={alt} src={fallbackUrl} />}
			alt={alt}
			{...rest}
		/>
	</ImageWrapper>
);

/**
 * Hack for docz and react-docgen
 */
const ImagePropTypes = () => <div />;
ImagePropTypes.propTypes = {
	alt: string.isRequired,
	center: bool,
	fallbackUrl: string,
	loaderUrl: string,
	src: string.isRequired,
	withSpacing: bool,
	wrapperProps: object,
};
Image.propTypes = ImagePropTypes.propTypes;
export { ImagePropTypes };

export default Image;
