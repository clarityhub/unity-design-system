import styled from '@emotion/styled';
import colors from '@clarityhub/unity-core/lib/colors';

const Layout = styled.div`
    background-color: ${colors.muted.default};
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    position: relative;

    overflow: auto;
`;

export default Layout;
