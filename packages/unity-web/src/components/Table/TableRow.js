import styled from '@emotion/styled';
import colors from '@clarityhub/unity-core/lib/colors';

const TableRow = styled.tr`
    color: inherit;
    display: table-row;
    vertical-align: middle;
    outline: none;
    
    &:hover {
        background-color: ${colors.muted.default};
    }
`;

export default TableRow;
