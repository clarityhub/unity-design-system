import React from 'react';
import renderer from 'react-test-renderer';

import Notification from './Notification';

describe('<Notification />', () => {
	it('renders text', () => {
		const node = (
			<Notification type="danger">
      There were problems with processing your
      request. We encountered the following issues:
				<ul>
					<li>Our servers are offline</li>
				</ul>
			</Notification>
		);

		const tree = renderer.create(node).toJSON();

		expect(tree).toMatchSnapshot();
	});
    
	it('renders variants', () => {

		const node = (
			<Notification variant="thin" type="danger">
      There were problems with processing your
      request. We encountered the following issues:
				<ul>
					<li>Our servers are offline</li>
				</ul>
			</Notification>
		);

		const tree = renderer.create(node).toJSON();

		expect(tree).toMatchSnapshot();
	});
});