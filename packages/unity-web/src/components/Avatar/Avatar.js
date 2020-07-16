import React from 'react';
import styled from '@emotion/styled';
import { string } from 'prop-types';
import { Img } from 'react-image';

const AvatarWrapper = styled.span`
    display: inline-block;

    img {
        border-radius: 50%;
        height: 2.8rem;
        max-height: 2.8rem;
        max-width: 2.8rem;
        width: 2.8rem;
    }
`;

const Avatar = ({ alt = 'Avatar', url, fallbackUrl }) => (
	<AvatarWrapper>
		<Img
			src={[
				url,
				fallbackUrl,
			].filter(Boolean)}
			loader={fallbackUrl && <img alt={alt} src={fallbackUrl} />}
			alt={alt}
		/>
	</AvatarWrapper>
);

Avatar.propTypes = {
	alt: string,
	fallbackUrl: string.isRequired,
	url: string,
};

export default Avatar;
