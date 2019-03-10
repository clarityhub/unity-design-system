import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { number, string } from 'prop-types';

import borders from '../../theme/borders';
import colors from '../../theme/colors';

const ProgressWrapper = styled.div`
    position: relative;
    padding-top: 1.5rem;
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
    border-radius: ${borders.borderRadius};
    background-color: #e9ecef;
    box-shadow: inset ${colors.boxShadow};
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
    color: #fff;
    background-color: ${colors.primary};
    justify-content: center;

    ${({ type }) => {
		switch (type) {
		case 'notification':
			return css`
                    background-color: ${colors.notification};
                `;
		case 'danger':
			return css`
                    background-color: ${colors.danger};
                `;
		case 'success':
			return css`
                    background-color: ${colors.success};
                `;
		case 'primary':
		default:
			return css`
                    background-color: ${colors.primary};
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
	progress: number,
	type: string,
};

export default Progress;
