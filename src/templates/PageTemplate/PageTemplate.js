/* @jsx jsx */
import { Fragment } from 'react';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';

import Layout from '../../scaffolding/Layout';
import { FlexGrid, FlexGridContainer } from '../../scaffolding/FlexGrid';
import Navbar from '../../components/Navbar';
import Card from '../../components/Card';
import SideNav from '../../components/SideNav';
import Logo from '../../components/svgs/Logo';
import breakpoints from '../../theme/breakpoints';
import Typography from '../../components/Typography';

const sideNavWidth = 14; // TODO refactor sidenav width
const navbarHeight = 5.3; // TODO refactor with navbar
const mobileGutter = 2; // TODO refactor with flex grid container

const NavbarWrapper = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
    left: 0;
    right: 0;
`;

const SideNavWrapper = styled.div`
    position: fixed;
    left: calc(50vw - ${breakpoints.maxWidth}px / 2);
    top: ${navbarHeight}rem;
    bottom: 0;
    width: ${sideNavWidth}rem;
    z-index: 1;

    @media (max-width: ${breakpoints.maxWidth + (mobileGutter * 16)}px) {
        left: ${mobileGutter}rem;
    }
`;

const Wrapper = styled.div`
    overflow: auto;
    max-height: calc(100vh - ${navbarHeight}rem);
    width: 100%;
`;

const Content = styled.div`
    flex: 1;
    padding: 3rem 0;
    width: 100%;

    ${Card} + ${Card} {
        margin-top: 1rem;
    }
`;

const Page = ({ children, navItems, sideNavItems, title, breadcrumb }) => (
    <Layout css={css`
        padding-top: ${navbarHeight}rem;
        box-sizing: border-box;
    `}>
        <NavbarWrapper>
            <Navbar
                maxWidth={breakpoints.maxWidth}
                navBrandLogo={Logo}
            >
                {navItems.map((n, i) => <Fragment key={i}>{n}</Fragment>)}   
            </Navbar>
        </NavbarWrapper>
        <SideNavWrapper>
            <SideNav>
                {sideNavItems.map((n, i) => <Fragment key={i}>{n}</Fragment>)}   
            </SideNav>
        </SideNavWrapper>
        <Wrapper>
            <FlexGridContainer>
                <FlexGrid>
                    <SideNav />
                    <Content>
                        {breadcrumb}
                        <Typography type="h1">
                            {title}
                        </Typography>
                        {children}
                    </Content>
                </FlexGrid>
            </FlexGridContainer>
        </Wrapper>
    </Layout>
);

// XXX prop types

export default Page;
