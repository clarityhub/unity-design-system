/** @jsx jsx */
import { Fragment } from 'react';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { arrayOf, node } from 'prop-types';

import Layout from '../../scaffolding/Layout';
import { FlexGrid, FlexGridContainer } from '../../scaffolding/FlexGrid';
import { FLEX_MOBILE_GUTTER } from '../../scaffolding/FlexGrid/config';
import Navbar from '../../components/Navbar';
import { NAVBAR_HEIGHT } from '../../components/Navbar/config';
import Card from '../../components/Card';
import SideNav from '../../components/SideNav';
import { SIDENAV_WIDTH } from '../../components/SideNav/config';
import Logo from '../../components/svgs/Logo';
import breakpoints from '../../theme/breakpoints';
import Typography from '../../components/Typography';

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
    top: ${NAVBAR_HEIGHT}rem;
    bottom: 0;
    width: ${SIDENAV_WIDTH}rem;
    z-index: 1;

    @media (max-width: ${breakpoints.maxWidth + (FLEX_MOBILE_GUTTER * 16)}px) {
        left: ${FLEX_MOBILE_GUTTER}rem;
    }
`;

const Wrapper = styled.div`
    overflow: auto;
    max-height: calc(100vh - ${NAVBAR_HEIGHT}rem);
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
        padding-top: ${NAVBAR_HEIGHT}rem;
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

Page.propTypes = {
	breadcrumb: node,
	children: node.isRequired,
	navItems: arrayOf(node),
	sideNavItems: arrayOf(node),
	title: node,
};

export default Page;
