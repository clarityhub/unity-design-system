import React from 'react';
import renderer, { act } from 'react-test-renderer';

import Notification from '../../components/Notification';
import Dismissable from './Dismissable';

describe('<Dismissable />', () => {
	it('renders text', () => {
		const node = (
			<Dismissable>
				{({ Dismiss }) => (
					<Notification
						type="danger"
						variant="block"
					>
						<Dismiss />
        There were problems with processing your
        request. We encountered the following issues:
						<ul>
							<li>Our servers are offline</li>
						</ul>
					</Notification>
				)}
			</Dismissable>
		);

		const tree = renderer.create(node).toJSON();

		expect(tree).toMatchSnapshot();
	});
    
	it('dismisses the notification', () => {
		const node = (
			<Dismissable dismissImmediately>
				{({ Dismiss }) => (
					<Notification
						type="danger"
						variant="block"
					>
						<Dismiss />
        There were problems with processing your
        request. We encountered the following issues:
						<ul>
							<li>Our servers are offline</li>
						</ul>
					</Notification>
				)}
			</Dismissable>
		);

		const component = renderer.create(node);
        
		act(() => component.root.findByType('button').props.onClick(new Event('click')));

		const tree = component.toJSON();

		expect(tree).toMatchSnapshot();
	});
});