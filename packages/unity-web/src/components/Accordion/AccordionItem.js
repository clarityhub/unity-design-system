import React from 'react';
import { bool, func, node, number, oneOfType } from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import borders from '@clarityhub/unity-core/lib/borders';

import Card from '../Card';

const AccordionItemStyled = styled(Card)`
	margin-bottom: 0;
	transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	transition-property: margin-top, margin-bottom;

	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;
	border-top-left-radius: 0;
	border-top-right-radius: 0;

	&:first-of-type {
		border-top-left-radius: ${borders.borderRadius.rem}rem !important;
		border-top-right-radius: ${borders.borderRadius.rem}rem !important;
	}

	&:last-of-type {
		border-bottom-left-radius: ${borders.borderRadius.rem}rem !important;
		border-bottom-right-radius: ${borders.borderRadius.rem}rem !important;
	}

	${({ expanded }) => expanded && css`
		border-top-left-radius: ${borders.borderRadius.rem}rem !important;
		border-top-right-radius: ${borders.borderRadius.rem}rem !important;
		border-bottom-left-radius: ${borders.borderRadius.rem}rem !important;
		border-bottom-right-radius: ${borders.borderRadius.rem}rem !important;

		&:not(:first-of-type) {
			margin-top: 1rem;
		}

		&:not(:last-of-type) {
			margin-bottom: 1rem;
		}
	`}
`;

const AccordionItem = ({ expanded, onExpand, onClose, index, children, ...props }) => {
	return (
		<AccordionItemStyled expanded={expanded} {...props}>
			{React.Children.map(children, (child) => {
				return React.cloneElement(child, {
					expanded,
					onExpand,
					onClose,
					index,
				});
			})}
		</AccordionItemStyled>
	);
};

AccordionItem.propTypes = {
	children: oneOfType([func, node]).isRequired,
	expanded: bool,
	/**
	 * Auto-provided by <Accordion />
	 */
	index: number,
	/**
	 * Auto-provided by <Accordion />
	 */
	onClose: func,
	/**
	 * Auto-provided by <Accordion />
	 */
	onExpand: func,
};

export default AccordionItem;