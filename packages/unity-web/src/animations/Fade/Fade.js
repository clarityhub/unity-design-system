import React, { Fragment, useState, useEffect } from 'react';
import {  Global, css } from '@emotion/core';

const Fade = ({ show, children }) => {
	const [render, setRender] = useState(show);

	useEffect(() => {
		if (show) setRender(true);
	}, [show]);

	const onAnimationEnd = () => {
		if (!show) setRender(false);
	};

	return (
		<Fragment>
			<Global
				styles={css`
				@keyframes fadeIn {
					0% {
						opacity: 0;
					}
					100% {
						opacity: 1;
					}
				}

				@keyframes fadeOut {
					0% {
						opacity: 1;
					}
					100% {
						opacity: 0;
					}
				}

				`}
			/>
			{
				render && (
					<div
						style={{
							animation: `${show ? 'fadeIn' : 'fadeOut'} 0.3s`,
							animationTimingFunction: 'ease-in',
						}}
						onAnimationEnd={onAnimationEnd}
					>
						{children}
					</div>
				)
			}
		</Fragment>
	);
};

export default Fade;
