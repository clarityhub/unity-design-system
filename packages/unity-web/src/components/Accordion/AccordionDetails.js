import React, { useRef, useLayoutEffect, useState } from 'react';
import { bool, func, node, oneOfType } from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { CardBody } from '../Card';

const AccordionDetailsStyled = styled.div`
    overflow: hidden;
    transition: max-height 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    ${({ expanded, predictedHeight }) => expanded ? css`
        max-height: ${predictedHeight}px;
    ` : css`
        max-height: 0;
    `}
`;

const AccordionDetails = ({ expanded, children, ...props }) => {
	const ref = useRef();
	const [height, setHeight] = useState(0);

	useLayoutEffect(() => {
		if (ref.current) {
			const h = ref.current.scrollHeight;
	
			setHeight(h);
		}
	}, []);

	const { onExpand, ...rest } = props;

	return (
		<AccordionDetailsStyled ref={ref} predictedHeight={height} expanded={expanded} {...rest}>
			<CardBody>
				{children}
			</CardBody>
		</AccordionDetailsStyled>
	);
};

AccordionDetails.propTypes = {
	children: oneOfType([func, node]).isRequired,
	expanded: bool,
};

AccordionDetails.defaultProps = {
	expanded: false,
};

export default AccordionDetails;