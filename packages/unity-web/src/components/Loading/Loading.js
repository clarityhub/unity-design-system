import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import colors from '@clarityhub/unity-core/lib/colors';

import LoadingSvg from '../svgs/Loading';

const DEFAULT_SIZE = 50;

const base = css`
    svg * {
        fill: ${colors.primary.default};
    }
`;

const flex = ({ flex }) => flex && css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 100%;
`;

const size = ({ size }) => size && css`
    svg {
        width: ${size * DEFAULT_SIZE}px;
        height: ${size * DEFAULT_SIZE}px;
    }
`;

const LoadingWrapper = styled.div([
	base,
	flex,
	size,
]);

const Loading = ({ flex, size }) => (
	<LoadingWrapper flex={flex} size={size}>
		<LoadingSvg />
	</LoadingWrapper>
);

export default Loading; 