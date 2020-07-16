import React from 'react';
import renderer from 'react-test-renderer';

import Badge from '../Badge';
import ProgressBar from './ProgressBar';

describe('<ProgressBar />', () => {
	it('renders progress bar', () => {
		const node = (
			<ProgressBar primary progress={10} type="default">
				<Badge type="primary">Uploading...</Badge>
			</ProgressBar>
		);

		const tree = renderer.create(node).toJSON();

		expect(tree).toMatchSnapshot();
	});
});