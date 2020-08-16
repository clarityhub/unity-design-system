import React, { useCallback, useEffect, useState } from 'react';
import { any, bool, number } from 'prop-types';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Icon from '@mdi/react';

import FAB from '../FAB';
import { mdiArrowUp } from './arrowUpIcon';

const Wrapper = styled.div`
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.1s;

    ${({ isActive }) => isActive && css`
        opacity: 1;
        pointer-events: inherit;
    `}

    ${({ inline }) => !inline && css`
        position: fixed;
        right: 2rem;
        bottom: 2rem;
    `}
`;

const BackToTop = ({ icon, inline, scrollRef = window, scrollAmount = 100, alwaysShow = false, ...rest }) => {
	const [hasScrolled, setHasScrolled] = useState(false);
	const onClick = useCallback(() => {
		if ('scrollRestoration' in window.history) {
			window.history.scrollRestoration = 'manual';
		}

		window.scrollTo(0,0);
	}, []);

	const onScroll = useCallback(() => {
		if (scrollRef.scrollY > scrollAmount) {      
			setHasScrolled(true);
		} else if (scrollRef.scrollY < scrollAmount) {      
			setHasScrolled(false);
		}  
	}, [setHasScrolled]);

	useEffect(() => {
		window.addEventListener('scroll', onScroll);

		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	}, [onScroll]);
    
	const wrapperProps = {
		isActive: hasScrolled || alwaysShow,
		inline,
	};


	return (
		<Wrapper {...wrapperProps}>
			<FAB onClick={onClick} {...rest}>
				<Icon
					path={icon || mdiArrowUp}
					title={'Back to top'}
					size={1}
					style={{
						margin: 'auto',
					}}
				/>
			</FAB>
		</Wrapper>
	);
};

BackToTop.propTypes = {
	alwaysShow: bool,
	icon: any,
	inline: bool,
	scrollAmount: number,
	scrollRef: any,
};

export default BackToTop;
