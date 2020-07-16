import React from 'react';
import renderer from 'react-test-renderer';

import Breadcrumbs from './Breadcrumbs';

describe('<Breadcrumbs />', () => {
	it('renders crumbs', () => {
		const node = (
			<div>
				<Breadcrumbs
					crumbs={[
						{
							title: 'Home',
						},
					]}
				/>
				<Breadcrumbs
					crumbs={[
						{
							title: 'Home',
							path: '/',
						},
						{
							title: 'Admin',
						},
					]}
				/>
				<Breadcrumbs
					crumbs={[
						{
							title: 'Home',
							path: '/',
						},
						{
							title: 'Admin',
							path: '/admin',
						},
						{
							title: 'Long interview name – October 3rd, 2019',
							// no path
						},
					]}
				/>
			</div>
		);
		const tree = renderer.create(node).toJSON();

		expect(tree).toMatchSnapshot();
	});
});