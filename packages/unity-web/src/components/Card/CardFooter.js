import styled from '@emotion/styled';
import { variants } from '@clarityhub/unity-core/lib/typography';
import borders from '@clarityhub/unity-core/lib/borders';
import colors from '@clarityhub/unity-core/lib/colors';

const CardFooter = styled.div`
    ${variants.text.string}

    color: ${colors.dark.default};

    padding: .75rem 1.25rem;
    border-top: 1px solid ${colors.muted.default};

    &:last-child {
        border-radius: 0 0 calc(${borders.borderRadius.rem}rem - 1px) calc(${borders.borderRadius.rem}rem - 1px);
    }
`;

export default CardFooter;
