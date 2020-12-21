import styled from '@emotion/styled';
import breakpoints from '@clarityhub/unity-web/lib/theme/breakpoints';
import colors from '@clarityhub/unity-core/lib/colors';

const MobileOpen = styled.div`
	display: none;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1001;

	button {
		background: none;
		border: 0;
		color: black;
		padding: 0.4rem;

		&:active,
		&:focus {
			color: ${colors.darkGray.default};
		}
	}

	@media(max-width: ${breakpoints.tablet}) {
		display: block;
	}
`;

export default MobileOpen;
