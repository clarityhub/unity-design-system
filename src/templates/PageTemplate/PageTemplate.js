import React from 'react';
import styled from '@emotion/styled';

import Header from '../../components/Header';
import Sidenav from '../../components/Sidenav';
import Footer from '../../components/Footer';

const Layout = styled.div`
`;

const Content = styled.div`
`;

// XXX mobile

const Page = ({ sidenavProps, headerProps, children }) => (
    <Layout>
        <Header {...headerProps} />
        <Sidenav {...sidenavProps} />
        <Content>
            {children}
        </Content>
        <Footer />
    </Layout>  
);

export default Page;
