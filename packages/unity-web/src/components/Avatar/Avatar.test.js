import React from 'react';
import renderer from 'react-test-renderer';

import Avatar from './Avatar';

describe('<Avatar />', () => {
	it('renders image', () => {
		const node = (
			<Avatar
				url="/public/ivan-avatar.png"
				fallbackUrl="/public/avatar-placeholder.png"
				alt="Ivan's Avatar"
			/>
		);

		const tree = renderer.create(node).toJSON();

		expect(tree).toMatchSnapshot();
	});
});
