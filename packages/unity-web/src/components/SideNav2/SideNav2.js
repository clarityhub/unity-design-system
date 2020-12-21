import React, { Fragment } from 'react';
import { bool, func, node, oneOfType, string } from 'prop-types';

import MobileOpen from './MobileOpen';
import MobileBackdrop from './MobileBackdrop';
import SidenavWrapper from './SidenavWrapper';
import { SIDENAV_WIDTH } from './config';

const SideNav = ({
	children,
	onOpen,
	onClose,
	isOpen,
	mobileOpenComp = 'X',
	width = SIDENAV_WIDTH,
}) => {
	return (
		<Fragment>
			<MobileOpen>
				<button onClick={onOpen}>
					{mobileOpenComp}
				</button>
			</MobileOpen>

			<MobileBackdrop
				isOpen={isOpen}
				onClick={onClose}
			/>

			<SidenavWrapper isOpen={isOpen} width={width}>
				{children}
			</SidenavWrapper>
		</Fragment>
	);
};

/**
 * Hack for docz and react-docgen
 */
const SideNavProps = () => <div />;
SideNavProps.propTypes = {
	children: oneOfType([node, func]),
	isOpen: bool,
	mobileOpenComp: oneOfType([node, func]),
	onClose: func.isRequired,
	onOpen: func.isRequired,
	width: string,
};

SideNav.propTypes = SideNavProps.propTypes;
export { SideNavProps };

export default SideNav;
