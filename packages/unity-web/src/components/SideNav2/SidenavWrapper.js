import styled from '@emotion/styled';
import breakpoints from '@clarityhub/unity-web/lib/theme/breakpoints';
import { css } from '@emotion/core';

const SidenavWrapper = styled.div`
    background: #ecf0f7;
    /* box-shadow: 0 2px 4px 0 rgba(0,0,0,0.08), 0 2px 4px 0 rgba(50,50,93,0.11); */
    width: ${({ width }) => width};
    height: 100%;
	overflow: auto;
	z-index: 1001;

	@media(max-width: ${breakpoints.tablet}) {
		position: fixed;
		left: -100%;
		top: 0;
		bottom: 0;
		transition: all 0.3s ease-out;

		width: 90%;
		max-width: ${({ width }) => width};
		z-index: 1003;

		${({ isOpen }) => isOpen && css`
			left: 0;
			right: auto;
		`}
	}
`;

export default SidenavWrapper;
