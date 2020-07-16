import React from 'react';
import renderer from 'react-test-renderer';
import Logo from '../svgs/Logo';
import Link from '../Link';
import Navbar from './Navbar';
import NavItem from './NavItem';

describe('<Navbar />', () => {
	it('renders nav items', () => {

		const node = (
			<Navbar
				navBrandText="Dashboard"
				navBrandLogo={Logo}
				maxWidth={500}
			>
				<NavItem selected>
					<Link type="blockLink" href="#">Dashboard</Link>
				</NavItem>
				<NavItem>
					<Link type="blockLink" href="#">Integrations</Link>
				</NavItem>
			</Navbar>
		);
		const tree = renderer.create(node).toJSON();

		expect(tree).toMatchSnapshot();
	});
});