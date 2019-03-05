import React, { Fragment } from 'react';
import styled from '@emotion/styled';

import colors from '../../theme/colors';
import Layout from '../../scaffolding/Layout';
import { FlexGrid } from '../../scaffolding/FlexGrid';
import Navbar from '../../components/Navbar';
import { Card } from '../../components/Card';
import Logo from '../../components/svgs/Logo';

const SideNav = styled.div`

`;

// max width
// overflow
const Content = styled.div`
    background-color: ${colors.muted};
    flex: 1;
    overflow: auto;
    max-height: 100%;

    ${Card} {
        margin: 2rem auto 0;
        max-width: 820px;
        width: 100%;
    }
`;

const Page = ({ children, navItems }) => (
    <Layout>
        <Navbar
            navBrandLogo={Logo}
        >
            {navItems.map((n, i) => <Fragment key={i}>{n}</Fragment>)}   
        </Navbar>
        <FlexGrid>
            <SideNav
            />

            <Content>
                <Card>
                    {children}
                </Card>
            </Content>
        </FlexGrid>
    </Layout>  
);

export default Page;
