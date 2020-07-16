import React from 'react';
import renderer from 'react-test-renderer';

import Break from './Break';

describe('<Break />', () => {
	it('renders a break', () => {
		const node = (
			<Break />
		);
		const tree = renderer.create(node).toJSON();

		expect(tree).toMatchSnapshot();
	});
});