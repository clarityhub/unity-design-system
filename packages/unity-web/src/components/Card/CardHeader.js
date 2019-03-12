import React from 'react';
import styled from '@emotion/styled';
import borders from '@clarityhub/unity-core/lib/borders';
import colors from '@clarityhub/unity-core/lib/colors';

import Typography from '../Typography';

const CardHeaderWrapper = styled.div`
    padding: .75rem 1.25rem;
    margin-bottom: 0;
    border-bottom: 1px solid ${colors.muted.default};

    &:first-of-type {
        border-radius: calc(${borders.borderRadius.rem}rem - 1px) calc(${borders.borderRadius.rem}rem - 1px) 0 0;
    }
`;

const CardHeader = ({ children, ...rest }) => (
	<CardHeaderWrapper {...rest}>
		<Typography noMargin noPadding type="h3">
			{children}
		</Typography>
	</CardHeaderWrapper>
);

export { CardHeaderWrapper };
export default CardHeader;
