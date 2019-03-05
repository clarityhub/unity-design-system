import React, { Fragment } from 'react';
import styled from '@emotion/styled';

import Layout from '../../scaffolding/Layout';
import { FlexGrid } from '../../scaffolding/FlexGrid';
import Navbar from '../../components/Navbar';
import Logo from '../../components/svgs/Logo';

const SideNav = styled.div`

`;

// max width
// overflow
const Content = styled.div`
    display: flex;
    flex: 1;
    overflow: auto;
    max-height: 100%;
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
                {children}
            </Content>
        </FlexGrid>
    </Layout>  
);

export default Page;
