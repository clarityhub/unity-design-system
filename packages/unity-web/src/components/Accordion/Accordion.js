import React, { useState, useCallback } from 'react';
import styled from '@emotion/styled';
import { bool, func, node, oneOfType } from 'prop-types';

const AccordionStyled = styled.div`
`;

const Accordion = ({ multi, children, ...props }) => {
	const [openItems, setOpenItems] = useState([]);

	const onExpand = useCallback((i) => {
		if (multi) {
			setOpenItems((openItems) => {
				return {
					...openItems,
					[i]: true,
				};
			});
		} else {
			setOpenItems((openItems) => {
				return {
					[i]: true,
				};
			});
		}
	}, []);

	const onClose = useCallback((i) => {
		setOpenItems((openItems) => {
			return {
				...openItems,
				[i]: false,
			};
		});
	}, []);

	return (
		<AccordionStyled {...props}>
			{React.Children.map(children, (child, index, arr) => {
				return React.cloneElement(child, {
					expanded: openItems[index],
					onExpand,
					onClose,
					index,
				});
			})}
		</AccordionStyled>
	);
};

Accordion.propTypes = {
	children: oneOfType([func, node]).isRequired,
	multi: bool,
};

Accordion.defaultProps = {
	multi: false,
};

export default Accordion;