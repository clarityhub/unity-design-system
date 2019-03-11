import styled from '@emotion/styled';
import colors from '../../theme/colors';

const Layout = styled.div`
    background-color: ${colors.muted};
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    position: relative;

    overflow: auto;
`;

export default Layout;
