import styled from '@emotion/styled';
import { css } from '@emotion/core';

const MobileBackdrop = styled.button(
	css`
		display: none;
	`,
	({ isOpen }) => isOpen && css`
		display: block;
		position: fixed;
		z-index: 1002;
		border: 0;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;

		background-color: rgba(0,0,0,0.3);
	`,
);

export default MobileBackdrop;
