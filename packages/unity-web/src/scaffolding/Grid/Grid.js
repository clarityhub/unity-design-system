import styled from '@emotion/styled';
import breakpoints from '@clarityhub/unity-web/lib/theme/breakpoints';

const GridLayout = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 2rem;

	@media(max-width: ${breakpoints.tablet}) {
		grid-template-columns: repeat(1, 1fr);
		grid-gap: 1rem;
	}
`;

const GridItem = styled.div`
`;

export {
	GridLayout,
	GridItem,
};