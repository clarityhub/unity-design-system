import React from 'react';
import renderer from 'react-test-renderer';

import Error from './Error';

describe('<Error />', () => {
	it('renders default', () => {
		const node = (
			<Error />
		);
		const tree = renderer.create(node).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('renders with message', () => {
		const node = (
			 <Error
				error={'Any error message shows up here'}
				refresh
			/>
		);
		const tree = renderer.create(node).toJSON();

		expect(tree).toMatchSnapshot();
	});
});