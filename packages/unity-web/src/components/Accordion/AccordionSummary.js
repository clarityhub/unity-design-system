import React, { useCallback } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { bool, number, oneOfType, node, func } from 'prop-types';
import spacing from '@clarityhub/unity-core/lib/spacing';
import colors from '@clarityhub/unity-core/lib/colors';

const AccordionSummaryButton = styled.button`
    background-color: transparent;
    border: 0;
    cursor: pointer;
    display: flex;
	outline: none;
    width: 100%;

    padding: 0.75rem ${spacing.small}rem;
    display: flex;
    flex-grow: 1;
    transition: padding 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

	${({ isDisabled }) => isDisabled && css`
		background-color: ${colors.muted.default};
	`}

	${({ expanded }) => expanded && css`
		padding: 1.25rem ${spacing.small}rem;
	`}
`;

const AccordionSummaryStyled = styled.div`
    flex: 1;
    align-content: center;
    justify-content: left;
    text-align: left;
`;

const IconWrapper = styled.div`
    display: inline-block;
	transform: rotate(0deg);
	transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

	${({ expanded }) => expanded && css`
		transform: rotate(-180deg);
	`}
`;

const AccordionSummary = ({
	disabled,
	expanded,
	index,
	onClose,
	onExpand,
	children,
	expandIcon,
	onClick,
	...props
}) => {
	const handleClick = useCallback((e) => {
		e.preventDefault();

		if (disabled) {
			return;
		}

		if (expanded) {
			onClose(index);
		} else {
			onExpand(index);
		}

		if (onClick) {
			onClick(e, expanded);
		}
	});

	return (
		<AccordionSummaryButton
			onClick={handleClick}
			isDisabled={disabled}
			disabled={disabled}
			expanded={expanded}
		>
			<AccordionSummaryStyled
				{...props}
			>
				{children}
			</AccordionSummaryStyled>
            
			{expandIcon && (
				<IconWrapper expanded={expanded}>
					{expandIcon}
				</IconWrapper>
			)}
		</AccordionSummaryButton>
	);
};

AccordionSummary.propTypes = {
	children: oneOfType([node, func]).isRequired,
	disabled: bool,
	expandIcon: node,
	/**
	 * Auto-provided by <AccordionItem />
	 */
	expanded: bool,
	/**
	 * Auto-provided by <AccordionItem />
	 */
	index: number,
	onClick: func,
	/**
	 * Auto-provided by <AccordionItem />
	 */
	onClose: func,
	/**
	 * Auto-provided by <AccordionItem />
	 */
	onExpand: func,
};

AccordionSummary.defaultProps = {
	disabled: false,
	node: false,
};

export default AccordionSummary;