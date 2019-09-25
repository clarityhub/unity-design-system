import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { number, string, node } from 'prop-types';
import borders from '@clarityhub/unity-core/lib/borders';
import colors from '@clarityhub/unity-core/lib/colors';

const ProgressWrapper = styled.div`
    position: relative;
`;

const ProgressInfo = styled.div`
    display: flex;
    margin-bottom: 0.5rem;
    align-items: center;
    justify-content: space-between;
`;

const ProgressCore = styled.div`
    display: flex;
    overflow: hidden;
    height: 0.8rem;
    margin-bottom: 1rem;
    border-radius: ${borders.borderRadius.rem}rem;
    background-color: ${colors.muted.default};
    box-shadow: inset ${colors.outlineShadow.default};
`;

const ProgressBar = styled.div`
    height: auto;
    border-radius: 0;
    box-shadow: none;
    display: flex;
    flex-direction: column;
    transition: width .6s ease;
    text-align: center;
    white-space: nowrap;
    color: ${colors.white.default};
    background-color: ${colors.primary.default};
    justify-content: center;

    ${({ type }) => {
		switch (type) {
		case 'notification':
			return css`
                    background-color: ${colors.notification.default};
                `;
		case 'danger':
			return css`
                    background-color: ${colors.danger.default};
                `;
		case 'success':
			return css`
                    background-color: ${colors.success.default};
                `;
		case 'primary':
		default:
			return css`
                    background-color: ${colors.primary.default};
                `;
		}
	}}
`;

const Progress = ({ children, progress = 0, type = 'default' }) => (
	<ProgressWrapper>
		<ProgressInfo class="progress-info">
			<div class="progress-label">
				{children}
			</div>
			<div class="progress-percentage">
				<span>{progress}%</span>
			</div>
		</ProgressInfo>
		<ProgressCore>
			<ProgressBar
				type={type}
				role="progressbar"
				aria-valuenow={progress}
				aria-valuemin="0"
				aria-valuemax="100"
				style={{ width: `${progress}%` }}
			/>
		</ProgressCore>
	</ProgressWrapper>
);

Progress.propTypes = {
	children: node,
	progress: number.isRequired,
	type: string,
};

export default Progress;
