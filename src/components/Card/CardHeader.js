import React from 'react';
import styled from '@emotion/styled';

import borders from '../../theme/borders';
import colors from '../../theme/colors';
import Typography from '../Typography';

const CardHeaderWrapper = styled.div`
    padding: .75rem 1.25rem;
    margin-bottom: 0;
    background-color: ${colors.dove};
    border-bottom: 1px solid ${colors.gray};

    &:first-child {
        border-radius: calc(${borders.borderRadius} - 1px) calc(${borders.borderRadius} - 1px) 0 0;
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
