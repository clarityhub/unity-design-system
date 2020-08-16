import React from 'react';
import renderer from 'react-test-renderer';

import BackToTop from './BackToTop';

describe('<BackToTop />', () => {
	it('renders BackToTop', () => {
		const node = (
			<BackToTop />
		);

		const tree = renderer.create(node).toJSON();

		expect(tree).toMatchSnapshot();
	});
});