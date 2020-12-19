import React, { useCallback, useEffect, useState } from 'react';
import { any, bool, number, object } from 'prop-types';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Icon from '@mdi/react';

import FAB from '../FAB';
import { mdiArrowUp } from './arrowUpIcon';

const Wrapper = styled.div`
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.1s;
	z-index: 2;

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

const BackToTop = ({ icon, inline, scrollRef, scrollAmount = 100, alwaysShow = false, wrapperProps = {}, ...rest }) => {
	const scroll = scrollRef || (typeof window !== 'undefined' ? window: null);

	const [hasScrolled, setHasScrolled] = useState(false);
	const onClick = useCallback(() => {
		if (typeof window !== 'undefined') {
			if ('scrollRestoration' in window.history) {
				window.history.scrollRestoration = 'manual';
			}

			window.scrollTo(0,0);
		}
	}, []);

	const onScroll = useCallback(() => {
		if (typeof scroll !== 'undefined') {
			if (scroll.scrollY > scrollAmount) {      
				setHasScrolled(true);
			} else if (scroll.scrollY < scrollAmount) {      
				setHasScrolled(false);
			}
		}
	}, [setHasScrolled]);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', onScroll);

			return () => {
				window.removeEventListener('scroll', onScroll);
			};
		}
	}, [onScroll]);
    
	const wrapProps = {
		isActive: hasScrolled || alwaysShow,
		inline,
		...wrapperProps,
	};

	return (
		<Wrapper {...wrapProps}>
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
	wrapperProps: object,
};

export default BackToTop;
