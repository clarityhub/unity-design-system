import React from 'react';
import renderer from 'react-test-renderer';

import Badge from './Badge';

describe('<Badge />', () => {
	it('renders different badge types', () => {
		const node = (
			<div>
				<Badge type="default">Default</Badge>
				{' '}
				<Badge type="primary">Primary</Badge>
				{' '}
				<Badge type="success">Success</Badge>
				{' '}
				<Badge type="danger">Danger</Badge>
				{' '}
				<Badge type="notification">Notification</Badge>
			</div>
		);

		const tree = renderer.create(node).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('renders different badge sizes and outlines', () => {
		const node = (
			<div>
				<Badge type="default" square>Default</Badge>
				{' '}
				<Badge type="primary" size="large">Primary</Badge>
				{' '}
				<Badge type="success" outline>Success</Badge>
				{' '}
				<Badge type="danger" square outline>Danger</Badge>
				{' '}
				<Badge type="notification">Notification</Badge>
			</div>
		);

		const tree = renderer.create(node).toJSON();

		expect(tree).toMatchSnapshot();
	});
});