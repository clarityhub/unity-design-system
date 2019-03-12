import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import css from '@emotion/css';
import { bool, func, node, number, string, oneOfType, element } from 'prop-types';
import colors from '@clarityhub/unity-core/lib/colors';

import Link from '../Link';
import Typography from '../Typography';
import { NAVBAR_HEIGHT } from './config';

const NavbarContainer = styled.nav`
    background: ${colors.notification.default};
    color: ${colors.white.default};
    height: ${NAVBAR_HEIGHT}rem;
    padding-top: 0;
`;

const NavbarContent = styled.div`
    height: ${NAVBAR_HEIGHT}rem;
    display: flex;
    line-height: 1;
    margin: 0 auto;
    padding: 0 3rem;
    justify-items: center;
    align-items: center;

    ${({ maxWidth }) => maxWidth && css`
        max-width: ${maxWidth}px;

        @media (max-width: ${maxWidth + 40}px) {
            width: auto;
        }
    `}
`;

const NavbarBrandWrapper = styled.section`
    a {
        align-items: center;
        display: flex;
        justify-content: center;
        margin-bottom: 0;
        margin-right: 40px;
        text-align: center;
        width: auto;
        
        border-bottom-color: transparent;
        text-decoration: none;

        &:visited {
            border-bottom-color: transparent;
        }

        &:hover {
            border-bottom-color: transparent;
        }
    }

    span {
      font-size: 1rem;
      line-height: 2rem;
      margin-left: 15px;

       @media (max-width: 480px) {
           display: none;
       }
    }

    img,
    svg  {
      height: 40px;
      width: auto;
    }
`;

const Gutter = styled.div`
    width: 2rem;
`;

const NavbarItems = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    justify-content: flex-end;
`;

const defaultNavBrandRenderer = ({ path, children }) => (
	<Link href={path}>{children}</Link>
);

const NavbarBrand = ({
	navBrandPath,
	navBrandRenderer,
	navBrandText,
	navBrandLogo: Logo,
}) => (
	<NavbarBrandWrapper>
		{navBrandRenderer({
			path: navBrandPath,
			children: (
				<Fragment>
					<Logo />
					<Typography variant="heading" color="white" component="span">
						{navBrandText}
					</Typography>
				</Fragment>
			),
		})}
	</NavbarBrandWrapper>
);

const Navbar = ({
	children,
	maxWidth = false,
	navBrandText = 'Clarity Hub',
	navBrandLogo,
	navBrandPath = '/',
	navBrandRenderer = defaultNavBrandRenderer,
}) => (
	<NavbarContainer>
		<NavbarContent maxWidth={maxWidth}>
			<NavbarBrand
				navBrandLogo={navBrandLogo}
				navBrandPath={navBrandPath}
				navBrandRenderer={navBrandRenderer}
				navBrandText={navBrandText}
			/>
			<Gutter />

			<NavbarItems>
				{children}
			</NavbarItems>
		</NavbarContent>
	</NavbarContainer>
);

Navbar.propTypes = {
	children: node,
	maxWidth: oneOfType([number, bool]),
	navBrandLogo: oneOfType([node, func, element]).isRequired,
	navBrandPath: string,
	navBrandRenderer: func,
	navBrandText: string,
};

export default Navbar;
