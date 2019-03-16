import styled from '@emotion/styled';

import colors from '@clarityhub/unity-core/lib/colors';

const Break = styled.div`
    margin: 5rem 0;
    text-align: center;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        width: .2rem;
        height: .2rem;
        border-radius: 50%;
        background: ${colors.dark.default};
        bottom: 0;
        left: 50%;
        margin-bottom: 1rem;
        transform: translateX(-50%);
        box-shadow: 1.6rem 0px 0px ${colors.dark.default}, 
              -1.6rem 0px 0px ${colors.dark.default};
    }
`;

export default Break;
