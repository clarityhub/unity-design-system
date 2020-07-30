import React from 'react';
import renderer from 'react-test-renderer';

import Space from './Space';

describe('<Space />', () => {
	it('renders children', () => {
		const node = (
			<Space direction="vertical">
				<button>Test</button>
				<button>Test</button>
			</Space>
		);
		const tree = renderer.create(node).toJSON();

		expect(tree).toMatchSnapshot();
	});
});