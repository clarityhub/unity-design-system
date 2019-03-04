import styled from '@emotion/styled';
import { css } from '@emotion/core';

import borders from '../../theme/borders';
import colors from '../../theme/colors';

import { CardHeaderWrapper } from './CardHeader';

const Card = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: ${colors.dove};
    background-clip: border-box;
    border: 1px solid ${colors.gray};
    border-radius: ${borders.borderRadius};

    ${({ noBorder }) => noBorder ? css`
        border: 1px solid transparent;
    ` : css`
        border: 1px solid ${colors.gray};
    `}

    > :not(${CardHeaderWrapper}) {
        h3 {
            margin: 0;
            padding: 0;
        }

        h4 {
            margin-top: 0.6rem;
        }

        p:only-child {
            margin: 0;
        }
    }

    ${({ center }) => center && css`
        text-align: center;
    `}
`;

export default Card;
