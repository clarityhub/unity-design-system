import styled from '@emotion/styled';

import borders from '../../theme/borders';
import colors from '../../theme/colors';
import { variants } from '../../theme/fonts';

const CardFooter = styled.div`
    ${variants.text}

    color: ${colors.dark};

    padding: .75rem 1.25rem;
    border-top: 1px solid ${colors.muted};

    &:last-child {
        border-radius: 0 0 calc(${borders.borderRadius} - 1px) calc(${borders.borderRadius} - 1px);
    }
`;

export default CardFooter;
