import React from 'react';
import renderer from 'react-test-renderer';

import Link from '../Link';
import SideNav from './SideNav';
import SideNavItem from './SideNavItem';
import SideNavGroup from './SideNavGroup';

describe('<SideNav />', () => {
	it('renders a sidenav', () => {
		const node = (
			<SideNav>
				<SideNavItem selected>
					<Link href="#">Home</Link>
				</SideNavItem>
				<SideNavItem>
					<Link href="#">Insights</Link>
				</SideNavItem>
				<SideNavItem>
					<Link href="#">Integrations</Link>
				</SideNavItem>
				<SideNavItem>
					<Link href="#">Apps</Link>
				</SideNavItem>
				<SideNavItem>
					<Link href="#">Account</Link>

					<SideNavGroup>
						<SideNavItem>
							<Link href="#">Profile</Link>
						</SideNavItem>
						<SideNavItem>
							<Link href="#">Billing</Link>
						</SideNavItem>
						<SideNavItem>
							<Link href="#">Usage</Link>
						</SideNavItem>
						<SideNavItem>
							<Link href="#">Users</Link>
						</SideNavItem>
					</SideNavGroup>
				</SideNavItem>
				<SideNavItem>
					<Link href="#">Developers</Link>

					<SideNavGroup>
						<SideNavItem>
							<Link href="#">API Keys</Link>
						</SideNavItem>
						<SideNavItem>
							<Link href="#">Web Console</Link>
						</SideNavItem>
						<SideNavItem>
							<Link href="#">Webhooks</Link>
						</SideNavItem>
						<SideNavItem>
							<Link href="#">Logs</Link>
						</SideNavItem>
					</SideNavGroup>
				</SideNavItem>
			</SideNav>
		);

		const tree = renderer.create(node).toJSON();

		expect(tree).toMatchSnapshot();
	});
});