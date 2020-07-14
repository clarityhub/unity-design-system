/** @jsx jsx */
import { jsx, keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import { oneOfType, node, func, string, oneOf } from 'prop-types';
import Box from '../../scaffolding/Box';
import types from './types';

const shimmer = keyframes`
  0% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0 50%;
    }
`;

const Skeleton = styled(Box)`
    display: block;

    & + & {
        margin-top: 0.5rem;
    }

    span {
        background: linear-gradient(
            90deg,
            #f2f2f2 25%,
            #ccc 37%,
            #f2f2f2 63%
        );
        background-size: 400% 100%;
        animation: ${shimmer} 1.4s ease infinite;
        color: transparent;

        display: inline-block;
        user-select: none;

        width: ${({ width }) => width || 'auto'};
    }
`;

export const SkeletonText = ({ children = '&nbsp;', type = 'p', width, ...rest }) => {
	let styles = [
		Boolean(type) ? types[type]: {},
	];
    
	return (
		<Skeleton width={width} {...rest}>
			<span css={styles}>
				{children}
			</span>
		</Skeleton>
	);
};

SkeletonText.propTypes = {
	children: oneOfType([node, func, string]),
	type: oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'text', 'text2']),
	width: 'string',
};
