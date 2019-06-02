import styled from '@emotion/styled';
import { css } from '@emotion/core';
import colors from '@clarityhub/unity-core/lib/colors';

import { types } from '../../theme/fonts';
import TableHead from './TableHead';

const TableCell = styled.td(
	types.text,
	css`
        display: table-cell;
        vertical-align: inherit;
        border-bottom: 1px solid ${colors.muted.default};
        text-align: left;
        padding: 0.5rem 1rem 0.5rem 1rem;

        &:last-child {
            padding-right: 1rem;
        }

        ${TableHead} & {
            font-weight: 600;
        }
    `
);

export default TableCell;
