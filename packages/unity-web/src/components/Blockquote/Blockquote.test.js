import React from 'react';
import renderer from 'react-test-renderer';

import Typography from '../Typography';
import Blockquote from './Blockquote';

describe('<Blockquote />', () => {
	it('renders text', () => {
		const node = (
			<Blockquote>
				<Typography>This is a block quote with some text</Typography>
				<Typography>There can be multiple paragraphs</Typography>
			</Blockquote>
		);
		const tree = renderer.create(node).toJSON();

		expect(tree).toMatchSnapshot();
	});
});